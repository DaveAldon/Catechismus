import { VerseReference } from '@/components/Numerals/VerseReference/VerseReference';
import Accordion from './Accordion';
import Button from './Button';
import Notice from './Notice';
import Tab from './Tab';
import Tabs from './Tabs';
import Video from './Video';
import Youtube from './Youtube';
import { CrossReference } from '@/components/Numerals/CrossReference/CrossReference';
import { FootnoteReference } from '@/components/Numerals/FootnoteReference/FootnoteReference';

const shortcodes = {
  Button,
  Accordion,
  Video,
  Tab,
  Tabs,
  Notice,
  Youtube,
  CrossReference,
  VerseReference,
  FootnoteReference,
  a: (props: any) => (
    <a
      {...props}
      className="font-normal text-orange-700 no-underline dark:text-orange-500">
      {props.children}
    </a>
  ),
};

export default shortcodes;
