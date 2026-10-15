import { h } from '../react.js';
import { Button, TextField, Checkbox, Switch } from './_ui.js';
import { example, Row } from './_helpers.js';

export default {
  title: 'Foundations/Focus',
  parameters: { docs: { description: { component: 'Единое кольцо фокуса для всех интерактивных элементов: `--baseui-Focus-Ring-Color | Width | Offset`. Появляется только при навигации с клавиатуры (`:focus-visible`). Цвет — акцент темы, контраст не ниже 3:1 на основных фонах.' } } },
};

export const Ring = example({
  name: 'Ring',
  description: 'Нажимайте Tab, чтобы пройти по элементам.',
  render: () => h(Row, { gap: 'var(--baseui-Space-XL1)' },
    h(Button, null, 'Button'), h(Button, { variant: 'secondary' }, 'Secondary'),
    h(Checkbox, { label: 'Checkbox' }), h(Switch, { label: 'Switch' }),
    h('div', { style: { width: 220 } }, h(TextField, { label: 'TextField' }))),
  source: `:focus-visible {
  outline: var(--baseui-Focus-Ring-Width) solid var(--baseui-Focus-Ring-Color);
  outline-offset: var(--baseui-Focus-Ring-Offset);
}`,
});

export const __namedExportsOrder = ['Ring'];
