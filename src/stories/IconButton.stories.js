import { h } from '../react.js';
import { IconButton } from '../components/Button.js';
import { meta, playground, example, Row } from './_helpers.js';

export default meta({
  title: 'Components/Icon Button', component: IconButton, args: { icon: 'Heart', label: 'Like', variant: 'secondary', size: 'medium' },
  argTypes: {
    icon: { control: 'text', description: 'Icon name' },
    label: { control: 'text', description: 'Accessible name and tooltip' },
    variant: { control: 'inline-radio', options: ['primary', 'secondary', 'text'], description: 'Style' },
    size: { control: 'inline-radio', options: ['xsmall', 'small', 'medium', 'large'], description: 'Size' },
  },
});
export const Playground = playground({ description: 'Icon-only button; `label` is its accessible name.', source: '{}' });
export const Variants = example({
  name: 'Variants', description: 'Primary, secondary and text.',
  render: () => h(Row, null, ['primary', 'secondary', 'text'].map((v) => h(IconButton, { key: v, icon: 'Settings02', label: v, variant: v }))),
  source: `<IconButton icon="Settings02" label="Settings" variant="primary" />`,
});
export const __namedExportsOrder = ['Playground', 'Variants'];
