'use client';

interface ContentHeaderProps {
  title: string;
  part?: number;
  subtitle?: string;
  sections: {
    sectionTitle: string;
    sectionDescription?: string;
    verseRange?: number[];
  }[];
}
export const ContentParent = (props: ContentHeaderProps) => {
  return (
    <div className="h-min-32 flex w-full grid-cols-3 flex-row items-center justify-start">
      <div className="flex flex-col items-center justify-center">
        {props.part ? (
          <div className="font-garamondFont text-3xl italic">
            Part {props.part}
          </div>
        ) : null}
        <div className="font-cinzelFont text-7xl font-bold">{props.title}</div>
        {props.subtitle ? (
          <div className="subtitle-text font-cinzelFont text-2xl font-bold">
            {props.subtitle}
          </div>
        ) : null}
      </div>
      {props.sections.map((section, index) => (
        <div className="flex flex-col items-center justify-center" key={index}>
          <div className="text-2xl font-bold">{section.sectionTitle}</div>
          {section.sectionDescription ? (
            <div className="text-2xl font-bold">
              {section.sectionDescription}
            </div>
          ) : null}
          {section.verseRange
            ? section.verseRange.map((verse, index) => (
                <div className="text-2xl font-bold" key={index}>
                  {verse}
                </div>
              ))
            : null}
        </div>
      ))}
    </div>
  );
};
