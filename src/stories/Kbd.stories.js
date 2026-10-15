import { h } from '../react.js';
import { Kbd } from '../components/Typography.js';
import { meta, playground } from './_helpers.js';

export default meta({ title: 'Components/Kbd', component: Kbd, args: { keys: ['⌘', 'K'] } });
export const Playground = { ...playground({ description: 'A key or a shortcut; each key is its own cap.', source: `<Kbd keys={['⌘', 'K']} />` }), render: (args) => h(Kbd, args) };
export const __namedExportsOrder = ['Playground'];
