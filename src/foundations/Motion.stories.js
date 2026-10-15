import { h, Fragment, useState } from '../react.js';
import { useTokens, section, Block, TokenTable, Loading } from './_kit.js';
import { Button } from '../base.js';

export default {
  title: 'Foundations/Motion',
  parameters: { docs: { description: { component: 'Duration and easing tokens for transitions.' } } },
};

function Demo() {
  const [on, setOn] = useState(false);
  return h('div', { className: 'motion-demo' },
    h('div', null, h(Button, { variant: 'secondary', size: 'small', onClick: () => setOn(!on) }, on ? 'Reset' : 'Play')),
    ['fast', 'medium', 'slow'].map((band) => h('div', { key: band, className: 'motion-row' },
      h('code', null, `duration-${band}`),
      h('div', { className: 'motion-track' },
        h('div', { className: 'motion-ball', style: { left: on ? 'calc(100% - 36px)' : 4, transition: `left var(--baseui-duration-${band}) var(--baseui-ease-standard)` } })))));
}

export function page() {
  const s = section('Duration & easing', useTokens());
  if (!s) return h(Loading);
  const tokens = s.groups[0].tokens;
  return h(Fragment, null,
    h(Block, { title: 'Duration' },
      h(Demo),
      h(TokenTable, { tokens: tokens.filter((t) => t.name.startsWith('duration')) })),
    h(Block, { title: 'Easing' }, h(TokenTable, { tokens: tokens.filter((t) => t.name.startsWith('ease')) })),
    h(Block, { title: 'Reduced Motion' },
      h('p', { className: 'doc-p' }, 'Every duration becomes ', h('code', null, '0ms'), ' when the system asks for reduced motion.')));
}
export const __namedExportsOrder = [];
