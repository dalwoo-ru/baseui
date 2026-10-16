import { h, Fragment } from '../react.js';
import { useTokens, section, Block, Swatch, TokenTable, Loading } from './_kit.js';

export default {
  title: 'Foundations/Color',
  parameters: { docs: { description: { component: 'Color tokens for text, backgrounds, borders and accents. Each has a light and a dark value.' } } },
};

const hoverPair = (t) => {
  const base = t.name.replace(/-Hover$/, '');
  return h('span', { className: 'tok-pair' }, base !== 'Background-Transparent' && h(Swatch, { name: base, size: 28 }), h(Swatch, { name: t.name, size: 28 }));
};

export function page() {
  const color = section('Color', useTokens());
  if (!color) return h(Loading);
  return h(Fragment, null,
    color.groups.map((g) => h(Block, { key: g.title, title: g.title },
      g.title === 'Hover' && h('p', { className: 'doc-p' }, 'The color an element takes under the pointer: the base color on the left, its hover on the right.'),
      h(TokenTable, { tokens: g.tokens, themed: true, preview: g.title === 'Hover' ? hoverPair : (t) => h(Swatch, { name: t.name }) }))));
}
export const __namedExportsOrder = [];
