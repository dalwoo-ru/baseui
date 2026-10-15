import { h } from '../react.js';
import { ClickableCard } from '../components/Card.js';
import { meta, playground, W } from './_helpers.js';

export default meta({ title: 'Components/Clickable Card', component: ClickableCard, args: { children: 'Open the project' }, argTypes: { children: { control: 'text', description: 'Content' } } });
export const Playground = { ...playground({ description: 'The whole card is one button (or a link with `href`). Hover and press change the fill.', source: `<ClickableCard onClick={open}>Open the project</ClickableCard>` }), render: (args) => W(320, h(ClickableCard, { onClick: () => {}, ...args })) };
export const __namedExportsOrder = ['Playground'];
