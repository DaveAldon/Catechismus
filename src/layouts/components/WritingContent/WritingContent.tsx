'use client';

import {
  Bar,
  ColumnResizer,
  Container,
  Resizer,
  Section,
} from '@column-resizer/react';
import { ContentHeader } from '../ContentParent/ContentHeader';
import MDXContent from '../MDXContent';
import { WritingControl } from '../WritingControl/WritingControl';
import React from 'react';
import { useWindowSize } from '@/hooks/useWindowSize';
import { set } from 'date-fns';
import { CrossReference as CrossReferenceNumeral } from '../Numerals/CrossReference/CrossReference';
import { CrossReference } from '../CrossReference/CrossReference';

const MIN_SIZE = 320;

interface WritingContentProps {
  content: string;
}
export const WritingContent = (props: WritingContentProps) => {
  const [width] = useWindowSize();
  const [isSidebarOpen, setIsSidebarOpen] = React.useState<boolean>(false);

  const columnResizerRef = React.createRef<ColumnResizer>();

  const beforeApplyResizer = (resizer: Resizer): void => {
    if (resizer.getSectionSize(1) < 300) {
      resizer.resizeSection(1, { toSize: 0 });
      setIsSidebarOpen(false);
    } else {
      setIsSidebarOpen(true);
    } /* else if (resizer.getSectionSize(1) < 100) {
      resizer.resizeSection(1, { toSize: MIN_SIZE });
    } */
  };

  const toggleSidebar = (open: boolean) => {
    const container = columnResizerRef.current;

    if (container) {
      const resizer = container.getResizer();
      resizer.resizeSection(1, { toSize: open ? MIN_SIZE : 0 });
      setIsSidebarOpen(open ? true : false);
      /* if (resizer.getSectionSize(0) === 0) {
        resizer.resizeSection(0, { toSize: MIN_SIZE });
      } */

      container.applyResizer(resizer);
    }
  };

  if (width === 0) return null;
  return (
    <div className="w-full">
      <Container
        columnResizerRef={columnResizerRef}
        beforeApplyResizer={beforeApplyResizer}>
        <Section minSize={320}>
          <div className="black-text">
            <ContentHeader />
            <div className="black-text container gap-4 text-center md:col-10 lg:col-7">
              <p className="header-text mb-6 text-left">About</p>
              <button onClick={() => toggleSidebar(true)}>
                <CrossReferenceNumeral type="gray">1234</CrossReferenceNumeral>
              </button>
              <div className="content text-left font-karla font-normal"></div>
            </div>
            <WritingControl />
          </div>
        </Section>
        <Bar
          size={2}
          onClick={() => toggleSidebar(false)}
          className={`cursor-col-resize ${
            isSidebarOpen ? 'bg-stone-300' : 'bg-transparent'
          }`}
        />
        <Section minSize={0} defaultSize={1}>
          <CrossReference />
        </Section>
      </Container>
    </div>
  );
};
