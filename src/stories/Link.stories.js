import { h } from '../react.js';
import { Link } from '../components/Typography.js';
import { meta, playground } from './_helpers.js';

export default meta({
  title: 'Components/Link', component: Link, args: { href: '#', children: 'Read the guide', underline: 'hover', external: false },
  argTypes: { children: { control: 'text', description: 'Text' }, underline: { control: 'inline-radio', options: ['hover', 'always', 'none'], description: 'Underline' }, external: { control: 'boolean', description: 'Open in a new tab' } },
});
export const Playground = playground({ description: 'A hyperlink in the accent color.', source: `<Link href="/guide">Read the guide</Link>` });
export const __namedExportsOrder = ['Playground'];
