  // import StarterKit from '@tiptap/starter-kit';
import Document from '@tiptap/extension-document';
import Bold from '@tiptap/extension-bold';
import BlockQuote from '@tiptap/extension-blockquote';
import BulletList from '@tiptap/extension-bullet-list';
import CharacterCount from '@tiptap/extension-character-count';
import Code from '@tiptap/extension-code';
import CodeBlock from '@tiptap/extension-code-block';
import CodeBlockLowlight from '@tiptap/extension-code-block-lowlight';
import Focus from '@tiptap/extension-focus';
import FontFamily from '@tiptap/extension-font-family';
import HardBreak from '@tiptap/extension-hard-break';
import Heading from '@tiptap/extension-heading';
import Highlight from '@tiptap/extension-highlight';
import History from '@tiptap/extension-history';
import HR from '@tiptap/extension-horizontal-rule';
import Image from '@tiptap/extension-image';
import Italic from '@tiptap/extension-italic';
import Link from '@tiptap/extension-link';
import ListItem from '@tiptap/extension-list-item';
import OrderedList from '@tiptap/extension-ordered-list';
import Paragraph from '@tiptap/extension-paragraph';
import Strike from '@tiptap/extension-strike';
import TaskList from '@tiptap/extension-task-list';
import TaskItem from '@tiptap/extension-task-item';
import Text from '@tiptap/extension-text';
import UnderLine from '@tiptap/extension-underline';
// import CollaborationKit from './extensions/CollaborationKit';

export default [
  Bold,
  BlockQuote,
  BulletList,
  CharacterCount.configure({
    limit: 10000
  }),
  Code,
  CodeBlock,
  CodeBlockLowlight,
  Document,
  Focus,
  FontFamily,
  HardBreak,
  Heading,
  History,
  Highlight,
  HR,
  Image,
  Italic,
  Link,
  ListItem,
  OrderedList,
  Paragraph,
  Strike,
  TaskList,
  TaskItem,
  Text,
  // StarterKit.configure({
  //   history: true
  // }),
  UnderLine
  // ...CollaborationKit
  // all your other extensions
];
