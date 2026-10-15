import { h } from '../react.js';
import { Heading } from '../components/Typography.js';
import { meta, playground, example, Stack } from './_helpers.js';

export default meta({
  title: 'Components/Heading', component: Heading, args: { level: 2, children: 'Section heading' },
  argTypes: { level: { control: 'inline-radio', options: [1, 2, 3, 4, 5, 6], description: 'Semantic level' }, size: { control: 'inline-radio', options: [undefined, '48', '40', '32', '28', '24', '20', '16'], description: 'Visual size' }, children: { control: 'text', description: 'Text' } },
});
export const Playground = playground({ description: '`level` sets the tag, `size` the look.', source: '{}' });
export const Levels = example({
  name: 'Levels', description: 'Default sizes by level.',
  render: () => h(Stack, { gap: 'var(--baseui-spacing-8)' }, [1, 2, 3, 4, 5, 6].map((l) => h(Heading, { key: l, level: l }, `Heading ${l}`))),
  source: `<Heading level={1}>Heading 1</Heading>`,
});
export const __namedExportsOrder = ['Playground', 'Levels'];
