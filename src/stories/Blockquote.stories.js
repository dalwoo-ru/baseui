import { h } from '../react.js';
import { Blockquote } from '../components/Typography.js';
import { meta, playground, W } from './_helpers.js';

export default meta({
  title: 'Components/Blockquote', component: Blockquote,
  args: { children: 'Design is not just what it looks like and feels like. Design is how it works.', cite: 'Steve Jobs' },
  argTypes: { children: { control: 'text', description: 'Quote' }, cite: { control: 'text', description: 'Source' } },
});
export const Playground = { ...playground({ description: 'A quotation on a quiet fill with an accent bar.', source: '{}' }), render: (args) => W(480, h(Blockquote, args)) };
export const __namedExportsOrder = ['Playground'];
