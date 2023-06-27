'use client';

import { Bar, Container, Section } from '@column-resizer/react';
import { ContentHeader } from '../ContentParent/ContentHeader';
import MDXContent from '../MDXContent';
import { WritingControl } from '../WritingControl/WritingControl';
import React from 'react';
import { useWindowSize } from '@/hooks/useWindowSize';
import { CrossReference } from '../CrossReference/CrossReference';

interface WritingContentProps {
  content: string;
}
export const WritingContent = (props: WritingContentProps) => {
  const [width] = useWindowSize();
  if (width === 0) return null;
  return (
    <div className="w-full">
      <Container>
        <Section minSize={width / 2}>
          <div className="black-text">
            <ContentHeader />
            <div className="black-text container gap-4 text-center md:col-10 lg:col-7">
              <p className="header-text mb-6 text-left">About</p>
              <div className="content text-left font-karla font-normal"></div>
            </div>
            <WritingControl />
          </div>
        </Section>
        <Bar
          size={10}
          style={{
            background: 'currentColor',
            cursor: 'col-resize',
          }}
        />
        <Section minSize={320} defaultSize={320}>
          <CrossReference />
        </Section>
      </Container>
    </div>
  );
};
