import { h } from '../react.js';
import { Collapsible } from '../components/Collapsible.js';
import { meta, playground, W } from './_helpers.js';

export default meta({
  title: 'Components/Collapsible', component: Collapsible, args: { title: 'Shipping details', children: 'Orders ship within 2 business days. Tracking is sent by email.', defaultOpen: false, disabled: false },
  argTypes: { title: { control: 'text', description: 'Heading' }, children: { control: 'text', description: 'Content' }, disabled: { control: 'boolean', description: 'Disabled' } },
});
export const Playground = { ...playground({ description: 'A section that expands and collapses.', source: '{}' }), render: (args) => W(480, h(Collapsible, args)) };
export const __namedExportsOrder = ['Playground'];
