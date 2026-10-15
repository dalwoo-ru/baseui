import { h } from '../react.js';
import { ToggleButtonGroup } from '../components/Button.js';
import { meta, playground, example } from './_helpers.js';

const items = [{ value: 'left', label: 'Left' }, { value: 'center', label: 'Center' }, { value: 'right', label: 'Right' }];
export default meta({
  title: 'Components/Toggle Button Group', component: ToggleButtonGroup, args: { items, multiple: false, size: 'small', label: 'Alignment' },
  argTypes: { multiple: { control: 'boolean', description: 'Allow several pressed buttons' }, size: { control: 'inline-radio', options: ['xsmall', 'small', 'medium', 'large'], description: 'Size' } },
});
export const Playground = { ...playground({ description: 'Single selection by default.', source: '{}' }), render: (args) => h(ToggleButtonGroup, { key: String(args.multiple), ...args }) };
export const Multiple = example({
  name: 'Multiple', description: 'Several buttons can be pressed at once.',
  render: () => h(ToggleButtonGroup, { items: [{ value: 'b', label: 'Bold' }, { value: 'i', label: 'Italic' }, { value: 'u', label: 'Underline' }], multiple: true, defaultValue: ['b'], label: 'Text style' }),
  source: `<ToggleButtonGroup multiple defaultValue={['b']} items={[…]} />`,
});
export const __namedExportsOrder = ['Playground', 'Multiple'];
