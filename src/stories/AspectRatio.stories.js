import { h } from '../react.js';
import { AspectRatio } from '../components/AspectRatio.js';
import { meta, playground, example, Row, W } from './_helpers.js';

export default meta({
  title: 'Components/Aspect Ratio', component: AspectRatio, args: { ratio: 1.78 },
  argTypes: { ratio: { control: { type: 'range', min: 0.5, max: 3, step: 0.01 }, description: 'Width ÷ height' } },
});
const Fill = ({ label }) => h('div', { style: { display: 'grid', placeItems: 'center', background: 'var(--baseui-color-accent-muted)', color: 'var(--baseui-color-text-accent)', font: 'var(--baseui-Typography-Text-14-Semi-Bold)' } }, label);
export const Playground = {
  ...playground({ description: 'The box keeps its ratio as its width changes.', source: '{}' }),
  render: (args) => W(360, h(AspectRatio, args, h(Fill, { label: String(args.ratio) }))),
};
export const Common = example({
  name: 'Common Ratios', description: 'Square, 4:3, 16:9 and 21:9.',
  render: () => h(Row, { align: 'flex-start' }, [['1', 1], ['4:3', 4 / 3], ['16:9', 16 / 9], ['21:9', 21 / 9]].map(([l, r]) => W(160, h(AspectRatio, { key: l, ratio: r }, h(Fill, { label: l }))))),
  source: `<AspectRatio ratio={16 / 9}><img src="…" alt="" /></AspectRatio>`,
});
export const __namedExportsOrder = ['Playground', 'Common'];
