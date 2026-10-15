import { h } from '../react.js';
import { Spinner } from '../components/Spinner.js';
import { meta, playground, example, Row } from './_helpers.js';

export default meta({
  title: 'Components/Spinner', component: Spinner, args: { size: 'md', label: 'Loading' },
  argTypes: { size: { control: 'inline-radio', options: ['sm', 'md', 'lg'] }, label: { control: 'text' } },
});
export const Playground = playground({ source: '{}' });
export const Sizes = example({ name: 'Sizes', render: () => h(Row, { gap: 'var(--baseui-spacing-24)' }, h(Spinner, { size: 'sm' }), h(Spinner, { size: 'md' }), h(Spinner, { size: 'lg' }), h(Spinner, { size: 56 })), source: `<Spinner size="sm" /> <Spinner size={56} />` });
export const Colors = example({
  name: 'Colors', render: () => h(Row, { gap: 'var(--baseui-spacing-24)' }, h('span', { style: { color: 'var(--baseui-Text-and-Icon-Accent)' } }, h(Spinner)), h('span', { style: { color: 'var(--baseui-Extensions-Text-and-Icon-Error)' } }, h(Spinner)), h('span', { style: { color: 'var(--baseui-Text-and-Icon-Secondary)' } }, h(Spinner))),
  source: `<span style={{ color: 'var(--baseui-Text-and-Icon-Accent)' }}><Spinner /></span>`,
});
export const __namedExportsOrder = ['Playground', 'Sizes', 'Colors'];
