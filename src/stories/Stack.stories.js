import { h } from '../react.js';
import { Stack, HStack, VStack } from '../components/Layout.js';
import { meta, playground, example, Box } from './_helpers.js';

export default meta({
  title: 'Components/Stack', component: Stack, args: { direction: 'column', gap: 12, align: undefined, justify: undefined, wrap: false },
  argTypes: {
    direction: { control: 'inline-radio', options: ['row', 'column'], description: 'Axis' },
    gap: { control: 'inline-radio', options: [0, 4, 8, 12, 16, 24, 32], description: 'Gap, px' },
    align: { control: 'inline-radio', options: [undefined, 'start', 'center', 'end', 'stretch'], description: 'Cross-axis alignment' },
    justify: { control: 'inline-radio', options: [undefined, 'start', 'center', 'end', 'between'], description: 'Main-axis distribution' },
    wrap: { control: 'boolean', description: 'Wrap items' },
  },
});
const items = ['One', 'Two', 'Three'].map((t) => h(Box, { key: t }, t));
export const Playground = { ...playground({ description: 'Flex container with a gap from the spacing scale.', source: '{}' }), render: (args) => h('div', { style: { width: 420, maxWidth: '100%' } }, h(Stack, args, items)) };
export const HorizontalStack = example({
  name: 'H Stack', description: '`HStack` is a row, vertically centered by default.',
  render: () => h(HStack, { gap: 12 }, items),
  source: `<HStack gap={12}>…</HStack>`,
});
export const VerticalStack = example({
  name: 'V Stack', description: '`VStack` is a column.',
  render: () => h('div', { style: { width: 240 } }, h(VStack, { gap: 8 }, items)),
  source: `<VStack gap={8}>…</VStack>`,
});
export const __namedExportsOrder = ['Playground', 'HorizontalStack', 'VerticalStack'];
