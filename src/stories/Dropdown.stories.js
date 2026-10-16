import { h } from '../react.js';
import { Dropdown } from '../../lib/Dropdown.js';
import { Select } from '../base.js';
import { meta, playground } from './_helpers.js';

const OPTIONS = [
  { value: 'steam', label: 'Steam', details: 'PC' },
  { value: 'xbox', label: 'Xbox', details: 'Console' },
  { value: 'playstation', label: 'PlayStation', details: 'Console' },
  { value: 'nintendo', label: 'Nintendo Switch', details: 'Console' },
];
export default meta({ title: 'Components/Dropdown', component: Dropdown, args: {}, argTypes: {} });
export const Playground = {
  ...playground({
    source: `// Selector and Typeahead draw their list with Dropdown
<Select label="Platform" options={options} defaultOpen />`,
  }),
  parameters: { controls: { disable: true } },
  render: () => h('div', { style: { height: 280, width: 360 } }, h(Select, { label: 'Platform', options: OPTIONS, defaultValue: 'steam', defaultOpen: true })),
};
export const __namedExportsOrder = ['Playground'];
