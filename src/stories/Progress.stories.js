import { h } from '../react.js';
import { Progress } from '../components/Progress.js';
import { meta, playground, example, Stack } from './_helpers.js';

export default meta({
  title: 'Components/Progress', component: Progress, args: { value: 60, size: 'medium', label: 'Загрузка файла', showValue: true },
  argTypes: {
    value: { control: { type: 'range', min: 0, max: 100, step: 5 }, description: 'Прогресс, %' },
    size: { control: 'inline-radio', options: ['small', 'medium'], description: 'Толщина' },
    label: { control: 'text', description: 'Подпись' },
    showValue: { control: 'boolean', description: 'Показать значение' },
  },
});
export const Playground = {
  ...playground({ description: 'Определённый прогресс 0–100.', source: '{}' }),
  render: (args) => h('div', { style: { width: 360, maxWidth: '100%' } }, h(Progress, args)),
};
export const Indeterminate = example({
  name: 'Indeterminate', description: 'Без value прогресс неопределённый — когда длительность неизвестна.',
  render: () => h(Stack, { width: 360 }, h(Progress, { label: 'Обработка…' }), h(Progress, { size: 'small' })),
  source: `<Progress label="Обработка…" />
<Progress size="small" />`,
});

export const __namedExportsOrder = ['Playground', 'Indeterminate'];
