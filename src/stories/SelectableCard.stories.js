import { h } from '../react.js';
import { SelectableCard } from '../components/Card.js';
import { meta, playground, example, Row } from './_helpers.js';

export default meta({ title: 'Components/Selectable Card', component: SelectableCard, args: { children: 'Pro plan · $12 / month', disabled: false }, argTypes: { children: { control: 'text', description: 'Content' }, disabled: { control: 'boolean', description: 'Disabled' } } });
export const Playground = { ...playground({ description: 'A card that toggles like a checkbox. Selection shows as a tinted fill and a check mark.', source: '{}' }), render: (args) => h('div', { style: { width: 320 } }, h(SelectableCard, args)) };
export const Group = example({
  name: 'Group', description: 'Several selectable cards as options.',
  render: () => h(Row, { align: 'stretch' }, ['Free', 'Pro', 'Team'].map((p, i) => h('div', { key: p, style: { width: 160 } }, h(SelectableCard, { defaultSelected: i === 1 }, p)))),
  source: `<SelectableCard defaultSelected>Pro</SelectableCard>`,
});
export const __namedExportsOrder = ['Playground', 'Group'];
