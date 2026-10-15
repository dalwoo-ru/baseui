import { h } from '../react.js';
import { SegmentedControl } from '../components/SegmentedControl.js';
import { meta, playground, example } from './_helpers.js';

const items = [{ value: 'day', label: 'Day' }, { value: 'week', label: 'Week' }, { value: 'month', label: 'Month' }, { value: 'year', label: 'Year', disabled: true }];
export default meta({
  title: 'Components/Segmented Control', component: SegmentedControl, args: { items, size: 'medium', fullWidth: false, label: 'Range' },
  argTypes: { size: { control: 'inline-radio', options: ['small', 'medium'] }, fullWidth: { control: 'boolean' } },
});
export const Playground = { ...playground({ source: '{}' }), render: (args) => h('div', { style: { width: 420, maxWidth: '100%' } }, h(SegmentedControl, args)) };
export const Item = example({
  name: 'Segmented Control Item', render: () => h(SegmentedControl, { items: [{ value: 'list', label: 'List' }, { value: 'grid', label: 'Grid' }], label: 'View' }),
  source: `<SegmentedControl items={[{ value: 'list', label: 'List' }, { value: 'grid', label: 'Grid' }]} />`,
});
export const __namedExportsOrder = ['Playground', 'Item'];
