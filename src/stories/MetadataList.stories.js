import { h } from '../react.js';
import { MetadataList } from '../components/MetadataList.js';
import { meta, playground, W } from './_helpers.js';

const items = [{ label: 'Order', value: '#48213' }, { label: 'Status', value: 'Shipped' }, { label: 'Total', value: '$128.00' }, { label: 'Date', value: 'Oct 15, 2026' }];
export default meta({
  title: 'Components/Metadata List', component: MetadataList, args: { items, orientation: 'horizontal' },
  argTypes: { orientation: { control: 'inline-radio', options: ['horizontal', 'vertical'] } },
});
export const Playground = { ...playground({ source: '{}' }), render: (args) => W(520, h(MetadataList, args)) };
export const __namedExportsOrder = ['Playground'];
