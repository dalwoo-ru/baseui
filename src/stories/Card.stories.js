import { h } from '../react.js';
import { Card } from '../components/Card.js';
import { Button } from './_ui.js';
import { meta, playground, example, Row } from './_helpers.js';

export default meta({
  title: 'Components/Card', component: Card,
  args: { variant: 'outlined', padding: 'medium', title: 'Заголовок карточки', subtitle: 'Короткое пояснение', children: 'Содержимое карточки: текст, форма или список.' },
  argTypes: {
    variant: { control: 'inline-radio', options: ['outlined', 'filled', 'raised'], description: 'Оформление' },
    padding: { control: 'inline-radio', options: ['none', 'small', 'medium', 'large'], description: 'Отступы' },
    title: { control: 'text', description: 'Заголовок' },
    subtitle: { control: 'text', description: 'Подзаголовок' },
    children: { control: 'text', description: 'Содержимое' },
  },
});
export const Playground = {
  ...playground({ description: 'Контейнер для связанного контента.', source: '{}' }),
  render: (args) => h('div', { style: { width: 400, maxWidth: '100%' } }, h(Card, args)),
};
export const Variants = example({
  name: 'Variants', description: 'Рамка, заливка или тень — выбирайте по фону страницы.',
  render: () => h(Row, { align: 'stretch' }, ['outlined', 'filled', 'raised'].map((v) => h(Card, { key: v, variant: v, title: v, style: { width: 220 } }, 'Текст карточки'))),
  source: `<Card variant="outlined" title="outlined">Текст карточки</Card>
<Card variant="filled" title="filled">Текст карточки</Card>
<Card variant="raised" title="raised">Текст карточки</Card>`,
});
export const WithActionsAndFooter = example({
  name: 'Actions And Footer', description: 'Действия в шапке и подвал с основными кнопками.',
  render: () => h('div', { style: { width: 420, maxWidth: '100%' } }, h(Card, {
    title: 'Команда', subtitle: '3 участника',
    actions: h(Button, { variant: 'secondary', size: 'xsmall' }, 'Изменить'),
    footer: [h(Button, { key: 1, size: 'small' }, 'Пригласить'), h(Button, { key: 2, size: 'small', variant: 'secondary' }, 'Отмена')],
  }, 'Участники команды получают доступ ко всем проектам.')),
  source: `<Card
  title="Команда"
  subtitle="3 участника"
  actions={<Button variant="secondary" size="xsmall">Изменить</Button>}
  footer={<><Button size="small">Пригласить</Button><Button size="small" variant="secondary">Отмена</Button></>}
>
  Участники команды получают доступ ко всем проектам.
</Card>`,
});

export const __namedExportsOrder = ['Playground', 'Variants', 'WithActionsAndFooter'];
