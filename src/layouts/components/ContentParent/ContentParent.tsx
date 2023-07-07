'use client';

import { CollapseSection } from './CollapseSection';
import { CollapseParentType } from './collapse';

export const ContentParent = (props: CollapseParentType) => {
  const textColors = [
    'section-text',
    'faith-text',
    'liturgy-text',
    'life-text',
    'prayer-text',
  ];
  const color = textColors[props.part || 0];

  return (
    <div className={`${props.backgroundColor}`}>
      <div
        className={`h-min-32 container flex flex-col gap-4 py-4 lg:flex-row lg:gap-0`}>
        <div className={`flex flex-col items-start pr-8 md:w-1/3 ${color}`}>
          {props.part ? (
            <div className={`font-garamondFont text-3xl capitalize italic `}>
              Part {props.part}
            </div>
          ) : null}
          <div className="font-cinzelFont text-7xl font-bold capitalize">
            {props.title}
          </div>
          {props.subtitle ? (
            <p className="subtitle-text font-cinzelFont text-2xl font-bold capitalize">
              {props.subtitle}
            </p>
          ) : null}
        </div>
        <div className="flex w-full flex-col gap-8 md:flex-row md:gap-8 lg:w-2/3">
          {props.sections.map((section, index) => {
            return <CollapseSection {...{ ...section, color }} key={index} />;
          })}
        </div>
      </div>
    </div>
  );
};
