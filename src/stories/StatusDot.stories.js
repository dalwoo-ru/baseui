import { h } from '../react.js';
import { StatusDot } from '../components/Badge.js';
import { meta, playground, example, Row } from './_helpers.js';

const VARIANTS = ['success', 'warning', 'error', 'accent', 'neutral'];
export default meta({
  title: 'Components/Status Dot', component: StatusDot, args: { variant: 'success', label: 'Online', isPulsing: false },
  argTypes: { variant: { control: 'inline-radio', options: VARIANTS }, label: { control: 'text' }, isPulsing: { control: 'boolean' } },
});
export const Playground = playground({ source: `<StatusDot variant="success" label="Online" />` });
export const Variants = example({
  name: 'Variants', render: () => h(Row, { gap: 24 }, VARIANTS.map((v) => h('span', { key: v, style: { display: 'inline-flex', alignItems: 'center', gap: 8, font: 'var(--baseui-Typography-Text-14-Regular)' } }, h(StatusDot, { variant: v, label: v }), v))),
  source: `<StatusDot variant="warning" label="Warning" />`,
});
export const __namedExportsOrder = ['Playground', 'Variants'];
