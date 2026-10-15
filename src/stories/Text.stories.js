import { h } from '../react.js';
import { Text } from '../components/Typography.js';
import { meta, playground, example, Stack } from './_helpers.js';

export default meta({
  title: 'Components/Text', component: Text, args: { variant: 'body', children: 'The quick brown fox jumps over the lazy dog.' },
  argTypes: {
    variant: { control: 'inline-radio', options: ['large', 'body', 'label', 'supporting', 'caption'], description: 'Type style' },
    color: { control: 'inline-radio', options: [undefined, 'primary', 'secondary', 'accent', 'error', 'success', 'warning'], description: 'Color' },
    truncate: { control: 'boolean', description: 'Single line with ellipsis' }, children: { control: 'text', description: 'Text' },
  },
});
export const Playground = { ...playground({ description: 'Body copy in the baseui type scale.', source: '{}' }), render: (args) => h('div', { style: { width: 420, maxWidth: '100%' } }, h(Text, args)) };
export const Variants = example({
  name: 'Variants', description: 'Large, body, label, supporting and caption.',
  render: () => h(Stack, { gap: 'var(--baseui-spacing-8)' }, ['large', 'body', 'label', 'supporting', 'caption'].map((v) => h(Text, { key: v, variant: v, as: 'div' }, `${v} — The quick brown fox`))),
  source: `<Text variant="supporting" color="secondary">Supporting text</Text>`,
});
export const __namedExportsOrder = ['Playground', 'Variants'];
