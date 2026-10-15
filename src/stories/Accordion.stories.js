import { h } from '../react.js';
import { Accordion } from '../components/Accordion.js';
import { meta, playground, example } from './_helpers.js';

const items = [
  { value: 'a', title: 'Как оформить возврат?', content: 'Откройте заказ и нажмите «Вернуть». Деньги вернутся в течение 3 дней.' },
  { value: 'b', title: 'Как сменить пароль?', content: 'Настройки → Безопасность → Сменить пароль.' },
  { value: 'c', title: 'Недоступная секция', content: '—', disabled: true },
];
export default meta({
  title: 'Components/Accordion', component: Accordion, args: { multiple: false, items, defaultValue: ['a'] },
  argTypes: { multiple: { control: 'boolean', description: 'Несколько открытых секций' } },
});
export const Playground = {
  ...playground({ description: 'Одна открытая секция; multiple разрешает несколько.', source: '{}' }),
  render: (args) => h('div', { style: { width: 480, maxWidth: '100%' } }, h(Accordion, { key: String(args.multiple), ...args })),
};
export const Multiple = example({
  name: 'Multiple', description: 'Несколько секций открыты одновременно.',
  render: () => h('div', { style: { width: 480, maxWidth: '100%' } }, h(Accordion, { multiple: true, defaultValue: ['a', 'b'], items })),
  source: `<Accordion multiple defaultValue={['a', 'b']} items={items} />`,
});

export const __namedExportsOrder = ['Playground', 'Multiple'];
