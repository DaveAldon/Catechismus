'use client';

import { ContentHeader } from '../ContentParent/ContentHeader';
//import MDXContent from '../MDXContent';
import { WritingControl } from '../WritingControl/WritingControl';
import React from 'react';
import { useWindowSize } from '@/hooks/useWindowSize';
import { CrossReference as CrossReferenceNumeral } from '../Numerals/CrossReference/CrossReference';
import { CrossReference } from '../CrossReference/CrossReference';
import { useMediaQuery } from '@/hooks/useMediaQuery';
import { Panel, PanelGroup, PanelResizeHandle } from 'react-resizable-panels';

interface WritingContentProps {
  content: string;
}
export const WritingContent = (props: WritingContentProps) => {
  const [width] = useWindowSize();
  const [isSidebarOpen, setIsSidebarOpen] = React.useState<boolean>(false);
  const isMobile = useMediaQuery(768);

  const getDefaultSize = (w: number) => {
    if (w < 1024) {
      return 33;
    } else return 20;
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const MainContent = () => {
    return (
      <div className="black-text">
        <ContentHeader />
        <div className="black-text container gap-4 text-center md:col-10 lg:col-7">
          <p className="header-text mb-6 text-left">About</p>
          <button onClick={() => toggleSidebar()}>
            <CrossReferenceNumeral type="gray">1234</CrossReferenceNumeral>
          </button>
          <div className="content text-left font-karla font-normal"></div>
        </div>
        <WritingControl />
      </div>
    );
  };

  if (width === 0) return null;
  if (isMobile)
    return (
      <div className="w-full">
        {isSidebarOpen ? (
          <CrossReference toggleSidebar={toggleSidebar} />
        ) : (
          <MainContent />
        )}
      </div>
    );

  return (
    <div className="w-full">
      <PanelGroup direction="horizontal">
        <Panel minSize={getDefaultSize(width)}>
          <MainContent />
        </Panel>
        <PanelResizeHandle
          className={`w-[2px] cursor-col-resize ${
            isSidebarOpen === true
              ? 'bg-stone-300 dark:bg-stone-600'
              : 'bg-transparent'
          }`}
        />
        {isSidebarOpen ? (
          <Panel
            defaultSize={getDefaultSize(width)}
            minSize={getDefaultSize(width)}>
            <CrossReference toggleSidebar={toggleSidebar} />
          </Panel>
        ) : null}
      </PanelGroup>
    </div>
  );
};
