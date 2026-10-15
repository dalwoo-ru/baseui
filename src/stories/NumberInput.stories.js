import { h } from '../react.js';
import { NumberInput } from '../components/NumberInput.js';
import { meta, playground, W } from './_helpers.js';

export default meta({
  title: 'Components/Number Input', component: NumberInput, args: { label: 'Quantity', defaultValue: 1, min: 0, max: 10, step: 1 },
  argTypes: { label: { control: 'text', description: 'Label' }, min: { control: 'number', description: 'Minimum' }, max: { control: 'number', description: 'Maximum' }, step: { control: 'number', description: 'Step' } },
});
export const Playground = { ...playground({ description: 'Type a number, use − and + or the arrow keys.', source: `<NumberInput label="Quantity" defaultValue={1} min={0} max={10} />` }), render: (args) => W(240, h(NumberInput, args)) };
export const __namedExportsOrder = ['Playground'];
