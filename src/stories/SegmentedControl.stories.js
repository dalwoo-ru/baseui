import { h } from '../react.js';
import { SegmentedControl } from '../components/SegmentedControl.js';
import { meta, playground, example } from './_helpers.js';

const items = [{ value: 'day', label: 'Day' }, { value: 'week', label: 'Week' }, { value: 'month', label: 'Month' }, { value: 'year', label: 'Year', disabled: true }];
export default meta({
  title: 'Components/Segmented Control', component: SegmentedControl, args: { items, size: 'medium', fullWidth: false, label: 'Range' },
  argTypes: { size: { control: 'inline-radio', options: ['small', 'medium'], description: 'Height' }, fullWidth: { control: 'boolean', description: 'Stretch to the container' } },
});
export const Playground = { ...playground({ description: 'Arrow keys move the selection; disabled items are skipped.', source: '{}' }), render: (args) => h('div', { style: { width: 420, maxWidth: '100%' } }, h(SegmentedControl, args)) };
export const Item = example({
  name: 'Segmented Control Item', description: 'Each item is `{ value, label, disabled }`.',
  render: () => h(SegmentedControl, { items: [{ value: 'list', label: 'List' }, { value: 'grid', label: 'Grid' }], label: 'View' }),
  source: `<SegmentedControl items={[{ value: 'list', label: 'List' }, { value: 'grid', label: 'Grid' }]} />`,
});
export const __namedExportsOrder = ['Playground', 'Item'];
