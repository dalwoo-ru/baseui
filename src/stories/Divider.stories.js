import { h } from '../react.js';
import { Divider } from '../components/Divider.js';
import { meta, playground, example, Row, Stack } from './_helpers.js';

export default meta({
  title: 'Components/Divider', component: Divider, args: { orientation: 'horizontal', label: '' },
  argTypes: { orientation: { control: 'inline-radio', options: ['horizontal', 'vertical'], description: 'Direction' }, label: { control: 'text', description: 'Centered label' } },
});
export const Playground = { ...playground({ description: 'A horizontal divider; the label is optional.', source: '{}' }), render: (args) => h('div', { style: { height: 80, display: 'flex', alignItems: 'center' } }, h(Divider, { ...args, label: args.label || undefined })) };
export const Vertical = example({
  name: 'Vertical', description: 'A vertical divider stretches to the row height.',
  render: () => h(Row, null, 'Profile', h(Divider, { orientation: 'vertical' }), 'Settings', h(Divider, { orientation: 'vertical' }), 'Sign out'),
  source: `<Row>Profile <Divider orientation="vertical" /> Settings <Divider orientation="vertical" /> Sign out</Row>`,
});
export const WithLabel = example({ name: 'With Label', description: 'A centered label, e.g. “or” between sign-in methods.', render: () => h(Stack, { width: 360 }, h(Divider, { label: 'or' })), source: '<Divider label="or" />' });
export const __namedExportsOrder = ['Playground', 'Vertical', 'WithLabel'];
