import { h } from '../react.js';
import { Field } from '../components/Field.js';
import { meta, playground, example, W } from './_helpers.js';

export default meta({
  title: 'Components/Field', component: Field, args: { label: 'Country', caption: 'Where you live.', status: undefined, required: false },
  argTypes: {
    label: { control: 'text', description: 'Label' }, caption: { control: 'text', description: 'Hint or error' },
    status: { control: 'inline-radio', options: [undefined, 'error', 'warning', 'success'], description: 'Status' }, required: { control: 'boolean', description: 'Required marker' },
  },
});
const select = (p) => h('select', { ...p, style: { height: 48, padding: '0 var(--baseui-spacing-12)', borderRadius: 'var(--baseui-radius-12)', border: 0, background: 'var(--baseui-color-background-muted)', color: 'inherit', font: 'var(--baseui-Typography-Text-16-Regular)' } },
  h('option', null, 'Armenia'), h('option', null, 'Georgia'), h('option', null, 'Serbia'));
export const Playground = {
  ...playground({ description: 'Wraps any control with a label and caption. Pass a function to receive `id` and ARIA props.', source: `<Field label="Country" caption="Where you live.">
  {(props) => <select {...props}>…</select>}
</Field>` }),
  render: (args) => W(320, h(Field, args, select)),
};
export const Statuses = example({
  name: 'Statuses', description: '`error` also marks the control invalid and announces the caption.',
  render: () => W(320, h(Field, { label: 'Country', caption: 'Select a country', status: 'error', required: true }, select)),
  source: `<Field label="Country" caption="Select a country" status="error" required>…</Field>`,
});
export const __namedExportsOrder = ['Playground', 'Statuses'];
