import { h } from '../react.js';
import { Skeleton } from '../components/Skeleton.js';
import { Card } from '../components/Card.js';
import { meta, playground, example, Stack, Row, W } from './_helpers.js';

export default meta({
  title: 'Components/Skeleton', component: Skeleton, args: { variant: 'text', lines: 3 },
  argTypes: { variant: { control: 'inline-radio', options: ['text', 'rect', 'circle'], description: 'Shape' }, lines: { control: { type: 'range', min: 1, max: 6, step: 1 }, if: { arg: 'variant', eq: 'text' }, description: 'Lines' } },
});
export const Playground = { ...playground({ description: 'A placeholder with a soft shimmer; the shimmer stops under reduced motion.', source: '{}' }), render: (args) => W(360, h(Skeleton, args)) };
export const CardLoading = example({
  name: 'Card Loading', description: 'A typical composition: avatar and text; the container is marked `aria-busy`.',
  render: () => h(Card, { 'aria-busy': 'true', 'aria-label': 'Loading card', style: { width: 360, maxWidth: '100%' } },
    h(Stack, null, h(Row, null, h(Skeleton, { variant: 'circle' }), h('div', { style: { flex: 1 } }, h(Skeleton, { width: '50%' }))), h(Skeleton, { variant: 'rect' }), h(Skeleton, { lines: 2 }))),
  source: `<Card aria-busy="true">
  <Skeleton variant="circle" />
  <Skeleton variant="rect" />
  <Skeleton lines={2} />
</Card>`,
});
export const __namedExportsOrder = ['Playground', 'CardLoading'];
