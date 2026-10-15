import { h } from '../react.js';
import { Center } from '../components/Layout.js';
import { meta, playground, Box } from './_helpers.js';

export default meta({ title: 'Components/Center', component: Center, args: {} });
export const Playground = { ...playground({ description: 'Centers its content on both axes. Give it a height.', source: `<Center style={{ height: 160 }}>…</Center>` }), render: (args) => h(Center, { ...args, style: { height: 160, background: 'var(--baseui-color-background-muted)', borderRadius: 'var(--baseui-radius-16)' } }, h(Box, { style: { background: 'var(--baseui-color-background-surface)' } }, 'Centered')) };
export const __namedExportsOrder = ['Playground'];
