import { h, Fragment } from '../react.js';
import { useTokens, section, Block, P, Code, DoDont, TokenTable, Loading } from './_kit.js';

export default {
  title: 'Foundations/Shadow',
  parameters: { docs: { description: { component: 'Three shadow levels for raised surfaces. The shadow color comes from `color-shadow`.' } } },
};

const USE = { 'shadow-low': 'Resting raised elements: cards, selected tabs', 'shadow-med': 'Menus, popovers, dropdowns', 'shadow-high': 'Dialogs, toasts, floating panels' };

export function page() {
  const data = useTokens();
  const s = section('Shadow', data);
  if (!s) return h(Loading);
  const tokens = s.groups[0].tokens;
  return h(Fragment, null,
    h(Block, { title: 'Overview' }, h(P, null, 'Use a shadow to separate a surface from what is behind it. Higher levels mean the surface is closer to the user.')),
    h(Block, { title: 'Scale' },
      h('div', { className: 'shadow-grid' }, tokens.map((t) => h('figure', { key: t.name, className: 'shadow-item' },
        h('div', { className: 'shadow-box', style: { boxShadow: `var(--baseui-${t.name})` } }),
        h('figcaption', null, h('code', null, t.name), h('span', null, USE[t.name]))))),
      h(TokenTable, { tokens })),
    h(Block, { title: 'Best Practices' },
      h(DoDont, {
        dos: ['Pair a shadow with a surface fill (`color-background-surface`).', 'Keep to one level per layer.'],
        donts: ['Stack several shadow levels on one element.', 'Use shadows instead of spacing to separate content.'],
      })));
}
export const __namedExportsOrder = [];
