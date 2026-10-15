import { h } from '../react.js';
import { SegmentedControl } from '../components/SegmentedControl.js';
import { meta, playground, example } from './_helpers.js';
import { Menu01, Grid01, Map01 } from './_ui.js';

const items = [{ value: 'day', label: 'Day' }, { value: 'week', label: 'Week' }, { value: 'month', label: 'Month' }, { value: 'year', label: 'Year', disabled: true }];
const withIcons = [{ value: 'list', label: 'List', icon: h(Menu01) }, { value: 'grid', label: 'Grid', icon: h(Grid01) }, { value: 'map', label: 'Map', icon: h(Map01) }];
export default meta({
  title: 'Components/Segmented Control', component: SegmentedControl, args: { items, size: 'md', fullWidth: false, iconOnly: false, label: 'Range' },
  argTypes: { size: { control: 'inline-radio', options: ['sm', 'md'] }, fullWidth: { control: 'boolean' }, iconOnly: { control: 'boolean' } },
});
export const Playground = { ...playground({ source: '{}' }), render: (args) => h(SegmentedControl, args) };
export const Item = example({
  name: 'Segmented Control Item', render: () => h(SegmentedControl, { items: [{ value: 'list', label: 'List' }, { value: 'grid', label: 'Grid' }], label: 'View' }),
  source: `<SegmentedControl items={[{ value: 'list', label: 'List' }, { value: 'grid', label: 'Grid' }]} />`,
});
export const Icons = example({
  name: 'Icons', render: () => h(SegmentedControl, { items: withIcons, label: 'View', defaultValue: 'list' }),
  source: `<SegmentedControl items={[{ value: 'list', label: 'List', icon: <Menu01 /> }, …]} />`,
});
export const IconOnly = example({
  name: 'Icon Only', render: () => h(SegmentedControl, { items: withIcons, iconOnly: true, label: 'View', defaultValue: 'grid' }),
  source: `<SegmentedControl iconOnly items={[{ value: 'list', label: 'List', icon: <Menu01 /> }, …]} />`,
});
export const CounterAndBadge = example({
  name: 'Counter and Badge', render: () => h(SegmentedControl, { items: [{ value: 'all', label: 'All', counter: 24 }, { value: 'open', label: 'Open', counter: 8 }, { value: 'review', label: 'Review', badge: 'New' }], label: 'Filter', defaultValue: 'all' }),
  source: `<SegmentedControl items={[{ value: 'all', label: 'All', counter: 24 }, { value: 'review', label: 'Review', badge: 'New' }]} />`,
});
export const FullWidth = example({
  name: 'Full Width', render: () => h(SegmentedControl, { items, fullWidth: true, label: 'Range' }),
  source: `<SegmentedControl fullWidth items={items} />`,
});
export const __namedExportsOrder = ['Playground', 'Item', 'Icons', 'IconOnly', 'CounterAndBadge', 'FullWidth'];
