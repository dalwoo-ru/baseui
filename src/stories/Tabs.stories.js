import { h } from '../react.js';
import { Tabs } from '../components/Tabs.js';
import { meta, playground, example } from './_helpers.js';

const items = [
  { value: 'overview', label: 'Обзор', content: 'Общая информация о проекте.' },
  { value: 'activity', label: 'Активность', content: 'Последние действия участников.' },
  { value: 'settings', label: 'Настройки', content: 'Параметры проекта и доступ.' },
  { value: 'billing', label: 'Оплата', content: 'Недоступно на вашем тарифе.', disabled: true },
];
export default meta({
  title: 'Components/Tabs', component: Tabs, args: { variant: 'underline', items, label: 'Разделы проекта' },
  argTypes: { variant: { control: 'inline-radio', options: ['underline', 'segmented'], description: 'Оформление' } },
});
export const Playground = {
  ...playground({ description: 'Стрелки ← →, Home и End переключают вкладки; недоступные пропускаются.', source: '{}' }),
  render: (args) => h('div', { style: { width: 480, maxWidth: '100%' } }, h(Tabs, args)),
};
export const Segmented = example({
  name: 'Segmented', description: 'Сегментированный вид — для переключения режимов отображения.',
  render: () => h(Tabs, { variant: 'segmented', label: 'Режим', items: [{ value: 'list', label: 'Список', content: 'Вид списком.' }, { value: 'grid', label: 'Сетка', content: 'Вид сеткой.' }] }),
  source: `<Tabs variant="segmented" items={[{ value: 'list', label: 'Список', content: '…' }, { value: 'grid', label: 'Сетка', content: '…' }]} />`,
});

export const __namedExportsOrder = ['Playground', 'Segmented'];
