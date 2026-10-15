import { h } from '../react.js';
import { Divider } from '../components/Divider.js';
import { meta, playground, example, Stack, Row } from './_helpers.js';

export default meta({
  title: 'Components/Divider', component: Divider, args: { orientation: 'horizontal', label: '' },
  argTypes: {
    orientation: { control: 'inline-radio', options: ['horizontal', 'vertical'], description: 'Направление' },
    label: { control: 'text', description: 'Подпись по центру' },
  },
});
export const Playground = {
  ...playground({ description: 'Горизонтальный разделитель, подпись опциональна.', source: '{}' }),
  render: (args) => h('div', { style: { height: 80, display: 'flex', alignItems: 'center' } }, h(Divider, { ...args, label: args.label || undefined })),
};
export const Vertical = example({
  name: 'Vertical', description: 'Вертикальный разделитель растягивается по высоте строки.',
  render: () => h(Row, null, 'Профиль', h(Divider, { orientation: 'vertical' }), 'Настройки', h(Divider, { orientation: 'vertical' }), 'Выйти'),
  source: `<Row>
  Профиль <Divider orientation="vertical" /> Настройки <Divider orientation="vertical" /> Выйти
</Row>`,
});
export const WithLabel = example({
  name: 'With Label', description: 'Подпись по центру — например, «или» между способами входа.',
  render: () => h(Stack, { width: 360 }, h(Divider, { label: 'или' })),
  source: '<Divider label="или" />',
});

export const __namedExportsOrder = ['Playground', 'Vertical', 'WithLabel'];
