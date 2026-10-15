import { h } from '../react.js';
import { Icon } from '../components/Icon.js';
import { meta, playground, example, Row } from './_helpers.js';

export default meta({
  title: 'Components/Icon', component: Icon, args: { name: 'Heart', variant: 'outline', size: 24, strokeWidth: 2 },
  argTypes: {
    name: { control: 'text', description: 'Icon name (see Foundations → Icons)' },
    variant: { control: 'inline-radio', options: ['outline', 'filled'], description: 'Style' },
    size: { control: { type: 'range', min: 16, max: 64, step: 4 }, description: 'Size, px' },
    strokeWidth: { control: { type: 'range', min: 0.5, max: 3, step: 0.25 }, if: { arg: 'variant', eq: 'outline' }, description: 'Stroke width' },
  },
});
export const Playground = playground({ description: 'Looks an icon up in the catalog by name.', source: `<Icon name="Heart" variant="outline" size={24} />` });
export const Sizes = example({
  name: 'Sizes', description: 'Icons scale with `size` and follow the text color.',
  render: () => h(Row, { gap: 'var(--baseui-spacing-24)' }, [16, 24, 32, 48].map((s) => h(Icon, { key: s, name: 'Star01', size: s }))),
  source: `<Icon name="Star01" size={32} />`,
});
export const __namedExportsOrder = ['Playground', 'Sizes'];
