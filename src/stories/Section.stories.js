import { h } from '../react.js';
import { Section } from '../components/Layout.js';
import { meta, playground } from './_helpers.js';

export default meta({
  title: 'Components/Section', component: Section, args: { padding: 24, maxWidth: 480 },
  argTypes: { padding: { control: 'inline-radio', options: [0, 8, 16, 24, 32, 48], description: 'Padding, px' }, maxWidth: { control: { type: 'range', min: 200, max: 720, step: 20 }, description: 'Max width' } },
});
export const Playground = { ...playground({ description: 'A padded, width-limited block that centers itself.', source: `<Section padding={24} maxWidth={480}>…</Section>` }), render: (args) => h(Section, { ...args, style: { background: 'var(--baseui-color-background-muted)', borderRadius: 'var(--baseui-radius-16)' } }, 'Section content') };
export const __namedExportsOrder = ['Playground'];
