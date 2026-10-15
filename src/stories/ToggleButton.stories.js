import { h } from '../react.js';
import { ToggleButton } from '../components/Button.js';
import { meta, playground } from './_helpers.js';

export default meta({
  title: 'Components/Toggle Button', component: ToggleButton, args: { children: 'Bold', size: 'medium' },
  argTypes: { children: { control: 'text', description: 'Label' }, size: { control: 'inline-radio', options: ['xsmall', 'small', 'medium', 'large'], description: 'Size' } },
});
export const Playground = playground({ description: 'Click to press and release. Pressed uses the primary style.', source: `<ToggleButton>Bold</ToggleButton>` });
export const __namedExportsOrder = ['Playground'];
