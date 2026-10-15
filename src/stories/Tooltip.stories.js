import { h } from '../react.js';
import { Tooltip } from '../components/Tooltip.js';
import { Button } from './_ui.js';
import { meta, playground, example, Row } from './_helpers.js';

export default meta({
  title: 'Components/Tooltip', component: Tooltip, args: { content: 'Сохранить изменения', placement: 'top', delay: 300 },
  argTypes: {
    content: { control: 'text', description: 'Текст' },
    placement: { control: 'inline-radio', options: ['top', 'bottom', 'left', 'right'], description: 'Сторона' },
    delay: { control: { type: 'range', min: 0, max: 1000, step: 100 }, description: 'Задержка, мс' },
  },
});
export const Playground = {
  ...playground({ description: 'Наведите курсор или сфокусируйтесь клавишей Tab. Escape закрывает.', source: '{}' }),
  render: (args) => h('div', { style: { padding: '48px 96px' } }, h(Tooltip, args, h(Button, { variant: 'secondary' }, 'Наведите'))),
};
export const Placements = example({
  name: 'Placements', description: 'Четыре стороны.',
  render: () => h('div', { style: { padding: '48px 96px' } }, h(Row, null, ['top', 'bottom', 'left', 'right'].map((p) => h(Tooltip, { key: p, content: p, placement: p, delay: 0 }, h(Button, { variant: 'secondary', size: 'small' }, p))))),
  source: `<Tooltip content="top" placement="top"><Button>top</Button></Tooltip>`,
});

export const __namedExportsOrder = ['Playground', 'Placements'];
