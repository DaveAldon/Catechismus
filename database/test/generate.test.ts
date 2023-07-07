import fs from 'fs';
import {
  generateArticles,
  generateChapters,
  generateContent,
  generateNumerals,
  generateParagraphs,
  generateSections,
  generateTopics,
} from '../generate';
import { writeToFile } from '../writeToFile';
import { SheetPaths } from '../lib/sheets';
import { getJsonData } from '../getJsonData';
import {
  Article,
  Chapter,
  Paragraph,
  Section,
  ToCArticle,
  ToCChapter,
  ToCParagraph,
  ToCSection,
  ToCTopic,
  Topic,
} from '@/types/structures';
import {
  CollapseArticleType,
  CollapseChapterType,
  CollapseParagraphType,
  CollapseParentType,
  CollapseSectionType,
} from '@/components/ContentParent/collapse';
import { getRomanNumeral } from '@/lib/utils/getRomanNumber';

describe('generate and writeToFile', () => {
  it('Creates topics', async () => {
    const data = await generateTopics();
    expect(data).toBeDefined();
    const path = `./public/${SheetPaths.TOPIC}`;
    await writeToFile(data, path);
    const exists = fs.existsSync(path);
    expect(exists).toBe(true);
  });
  it('Creates sections', async () => {
    const data = await generateSections();
    expect(data).toBeDefined();
    const path = `./public/${SheetPaths.SECTION}`;
    await writeToFile(data, path);
    const exists = fs.existsSync(path);
    expect(exists).toBe(true);
  });
  it('Creates chapters', async () => {
    const data = await generateChapters();
    expect(data).toBeDefined();
    const path = `./public/${SheetPaths.CHAPTER}`;
    await writeToFile(data, path);
    const exists = fs.existsSync(path);
    expect(exists).toBe(true);
  });
  it('Creates articles', async () => {
    const data = await generateArticles();
    expect(data).toBeDefined();
    const path = `./public/${SheetPaths.ARTICLE}`;
    await writeToFile(data, path);
    const exists = fs.existsSync(path);
    expect(exists).toBe(true);
  });
  it('Creates paragraphs', async () => {
    const data = await generateParagraphs();
    expect(data).toBeDefined();
    const path = `./public/${SheetPaths.PARAGRAPH}`;
    await writeToFile(data, path);
    const exists = fs.existsSync(path);
    expect(exists).toBe(true);
  });
  it('Creates numerals', async () => {
    const data = await generateNumerals();
    expect(data).toBeDefined();
    const path = `./public/${SheetPaths.NUMERAL}`;
    await writeToFile(data, path);
    const exists = fs.existsSync(path);
    expect(exists).toBe(true);
  });
  it('Creates content', async () => {
    const data = await generateContent();
    expect(data).toBeDefined();
    const path = `./public/${SheetPaths.CONTENT}`;
    await writeToFile(data, path);
    const exists = fs.existsSync(path);
    expect(exists).toBe(true);
  });
});

const getRandomVerseRange = (): number[] => {
  return [Math.floor(Math.random() * 10000), Math.floor(Math.random() * 10000)];
};

describe('build relationships between json files', () => {
  it('Creates table of contents', async () => {
    const topics = await getJsonData(SheetPaths.TOPIC);
    const sections = await getJsonData(SheetPaths.SECTION);
    const chapters = await getJsonData(SheetPaths.CHAPTER);
    const articles = await getJsonData(SheetPaths.ARTICLE);
    const paragraphs = await getJsonData(SheetPaths.PARAGRAPH);

    const toc: ToCTopic[] = topics.map((topic: Topic) => {
      const topicId = topic.ID_TOPIC;
      const topicName = topic.TOPIC;
      const topicSections = sections.filter(
        (section: Section) => section.ID_TOPIC === topicId,
      );
      const sectionsWithChapters = topicSections.map((section: Section) => {
        const sectionId = section.ID_SECTION;
        const sectionName = section.SECTION;
        const sectionChapters = chapters.filter(
          (chapter: Chapter) => chapter.ID_SECTION === sectionId,
        );
        const chaptersWithArticles = sectionChapters.map((chapter: Chapter) => {
          const chapterId = chapter.ID_CHAPTER;
          const chapterName = chapter.CHAPTER;
          const chapterArticles = articles.filter(
            (article: Article) => article.ID_CHAPTER === chapterId,
          );

          const articlesWithParagraphs = chapterArticles.map(
            (article: Article) => {
              const articleId = article.ID_ARTICLE;
              const articleParagraphs = paragraphs
                .filter(
                  (paragraph: Paragraph) => paragraph.ID_ARTICLE === articleId,
                )
                .map(
                  (paragraph: Paragraph) =>
                    ({
                      ID_PARAGRAPH: paragraph.ID_PARAGRAPH,
                      PARAGRAPH: paragraph.PARAGRAPH,
                      verseRange: getRandomVerseRange(),
                    } as ToCParagraph),
                );
              return {
                ID_ARTICLE: articleId,
                ARTICLE: article.ARTICLE,
                paragraphs: articleParagraphs,
                verseRange: getRandomVerseRange(),
              } as ToCArticle;
            },
          );
          return {
            ID_CHAPTER: chapterId,
            CHAPTER: chapterName,
            articles: articlesWithParagraphs,
            verseRange: getRandomVerseRange(),
          } as ToCChapter;
        });
        return {
          ID_SECTION: sectionId,
          SECTION: sectionName,
          chapters: chaptersWithArticles,
          verseRange: getRandomVerseRange(),
        } as ToCSection;
      });
      return {
        ID_TOPIC: topicId,
        TOPIC: topicName,
        sections: sectionsWithChapters,
        verseRange: getRandomVerseRange(),
      } as ToCTopic;
    });
    // write to file
    const path = `./public/${SheetPaths.TABLE_OF_CONTENTS}`;
    await writeToFile(toc, path);
  });

  it('Converts ToCTopic[] to CollapseParentType[]', async () => {
    const toc = await getJsonData(SheetPaths.TABLE_OF_CONTENTS);

    const textColors = [
      'text-stone-600 dark:text-stone-400',
      'text-sky-900 dark:text-sky-300',
      'text-rose-900 dark:text-rose-300',
      'text-teal-900 dark:text-teal-300',
      'text-fuchsia-900 dark:text-fuchsia-300',
    ];

    const titles = ['Intro', 'Faith', 'Liturgy', 'Life', 'Prayer'];

    const collapseParentType: CollapseParentType[] = toc.map(
      (topic: ToCTopic, topicIndex: number) => {
        return {
          title: titles[topicIndex],
          subtitle:
            topicIndex > 0
              ? `${topic.TOPIC.split(' - ')[1]}`.toLowerCase()
              : '',
          part: topicIndex,
          backgroundColor: topicIndex % 2 === 0 ? 'white-background' : '',
          color: textColors[topicIndex],
          sections: topic.sections.map((section: ToCSection) => {
            return {
              sectionTitle: `Section Title`,
              sectionDescription:
                topicIndex > 0
                  ? `${section.SECTION.split(': ')[1]}`.toLowerCase()
                  : '',
              chapters: section.chapters.map(
                (chapter: ToCChapter, chapterIndex: number) => {
                  return {
                    chapterTitle: `Chapter Title`,
                    chapterDescription: `Ch. ${chapterIndex + 1}: ${
                      chapter.CHAPTER.split(': ')[1]
                    }`.toLowerCase(),
                    articles: chapter.articles.map(
                      (article: ToCArticle, articleIndex: number) => {
                        return {
                          articleTitle: `Art. ${articleIndex + 1}: ${
                            article.ARTICLE.split(': ')[1]
                          }`.toLowerCase(),
                          articleSections: article.paragraphs.map(
                            (
                              paragraph: ToCParagraph,
                              paragraphIndex: number,
                            ) => {
                              return {
                                paragraphTitle: `${
                                  paragraph.PARAGRAPH.split(/: |\.\s/)[1]
                                }`.toLowerCase(),
                                romanNumber: getRomanNumeral(
                                  paragraphIndex + 1,
                                ),
                                verseRange: paragraph.verseRange,
                              } as CollapseParagraphType;
                            },
                          ),
                          verseRange: article.verseRange,
                        } as CollapseArticleType;
                      },
                    ),
                    verseRange: chapter.verseRange,
                  } as CollapseChapterType;
                },
              ),
              verseRange: section.verseRange,
            } as CollapseSectionType;
          }),
          verseRange: topic.verseRange,
        } as CollapseParentType;
      },
    );
    const path = `./public/${SheetPaths.COLLAPSABLE_TABLE_OF_CONTENTS}`;
    await writeToFile(collapseParentType, path);
  });
});
