import { h } from '../react.js';
import { Spinner } from '../components/Spinner.js';
import { meta, playground, example, Row } from './_helpers.js';

export default meta({
  title: 'Components/Spinner', component: Spinner, args: { size: 'medium', label: 'Загрузка' },
  argTypes: {
    size: { control: 'inline-radio', options: ['small', 'medium', 'large'], description: 'Размер' },
    label: { control: 'text', description: 'Доступное имя' },
  },
});
export const Playground = { ...playground({ description: 'Индикатор наследует цвет текста (currentColor).', source: '{}' }) };
export const Sizes = example({
  name: 'Sizes', description: 'Три размера и произвольное число в px.',
  render: () => h(Row, { gap: 'var(--baseui-Space-XL1)' }, h(Spinner, { size: 'small' }), h(Spinner, { size: 'medium' }), h(Spinner, { size: 'large' }), h(Spinner, { size: 56 })),
  source: `<Spinner size="small" /> <Spinner size="medium" /> <Spinner size="large" /> <Spinner size={56} />`,
});
export const Colors = example({
  name: 'Colors', description: 'Цвет задаётся через color у родителя.',
  render: () => h(Row, { gap: 'var(--baseui-Space-XL1)' },
    h('span', { style: { color: 'var(--baseui-Text-and-Icon-Accent)' } }, h(Spinner)),
    h('span', { style: { color: 'var(--baseui-Extensions-Text-and-Icon-Error)' } }, h(Spinner)),
    h('span', { style: { color: 'var(--baseui-Text-and-Icon-Secondary)' } }, h(Spinner))),
  source: `<span style={{ color: 'var(--baseui-Text-and-Icon-Accent)' }}><Spinner /></span>`,
});

export const __namedExportsOrder = ['Playground', 'Sizes', 'Colors'];
