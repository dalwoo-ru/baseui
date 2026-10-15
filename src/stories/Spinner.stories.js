import { h } from '../react.js';
import { Spinner } from '../components/Spinner.js';
import { meta, playground, example, Row } from './_helpers.js';

export default meta({
  title: 'Components/Spinner', component: Spinner, args: { size: 'medium', label: 'Loading' },
  argTypes: { size: { control: 'inline-radio', options: ['small', 'medium', 'large'], description: 'Size' }, label: { control: 'text', description: 'Accessible name' } },
});
export const Playground = playground({ description: 'The spinner inherits the text color (`currentColor`).', source: '{}' });
export const Sizes = example({ name: 'Sizes', description: 'Three sizes or any number of px.', render: () => h(Row, { gap: 'var(--baseui-spacing-24)' }, h(Spinner, { size: 'small' }), h(Spinner, { size: 'medium' }), h(Spinner, { size: 'large' }), h(Spinner, { size: 56 })), source: `<Spinner size="small" /> <Spinner size={56} />` });
export const Colors = example({
  name: 'Colors', description: 'Set `color` on a parent.',
  render: () => h(Row, { gap: 'var(--baseui-spacing-24)' }, h('span', { style: { color: 'var(--baseui-color-text-accent)' } }, h(Spinner)), h('span', { style: { color: 'var(--baseui-color-error)' } }, h(Spinner)), h('span', { style: { color: 'var(--baseui-color-text-secondary)' } }, h(Spinner))),
  source: `<span style={{ color: 'var(--baseui-color-text-accent)' }}><Spinner /></span>`,
});
export const __namedExportsOrder = ['Playground', 'Sizes', 'Colors'];
