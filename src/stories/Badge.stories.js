import { h } from '../react.js';
import { Badge } from '../components/Badge.js';
import { Heart } from './_ui.js';
import { meta, playground, example, Row } from './_helpers.js';

const VARIANTS = ['neutral', 'info', 'success', 'warning', 'error', 'blue', 'green', 'orange', 'pink', 'red'];
export default meta({
  title: 'Components/Badge', component: Badge, args: { variant: 'neutral', label: 'Badge' },
  argTypes: { variant: { control: 'select', options: VARIANTS }, label: { control: 'text' } },
});
export const Playground = playground({ source: `<Badge variant="success" label="Active" />` });
export const Variants = example({
  name: 'Variants', render: () => h(Row, null, VARIANTS.map((v) => h(Badge, { key: v, variant: v, label: v }))),
  source: `<Badge variant="info" label="info" />`,
});
export const WithIcon = example({
  name: 'With Icon', render: () => h(Row, null, h(Badge, { variant: 'pink', label: 'Favorite', icon: h(Heart, { size: 12 }) })),
  source: `<Badge label="Favorite" icon={<HeartIcon />} />`,
});
export const __namedExportsOrder = ['Playground', 'Variants', 'WithIcon'];
