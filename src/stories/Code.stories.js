import { h } from '../react.js';
import { Code } from '../components/Typography.js';
import { meta, playground } from './_helpers.js';

export default meta({ title: 'Components/Code', component: Code, args: { children: 'npm install baseui' }, argTypes: { children: { control: 'text', description: 'Code' } } });
export const Playground = { ...playground({ description: 'Inline code on a quiet fill.', source: '{}' }), render: (args) => h('p', { style: { font: 'var(--baseui-Typography-Text-16-Regular)', margin: 0 } }, 'Run ', h(Code, args), ' to install.') };
export const __namedExportsOrder = ['Playground'];
