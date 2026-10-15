import { h, Fragment } from '../react.js';
import { useTokens, Block, P, TokenTable, Swatch, Loading } from './_kit.js';

export default {
  title: 'Foundations/All Tokens',
  parameters: { docs: { description: { component: 'A complete reference for color, spacing, size, radius, shadow, focus, duration, easing, z-index and typography tokens. Read from `tokens.css`, so it is always up to date.' } } },
};

const PREVIEW = {
  Spacing: (t) => h('span', { className: 'tok-bar', style: { width: t.value === '0' ? 1 : t.value } }),
  Radius: (t) => h('span', { className: 'tok-radius', style: { borderRadius: t.value } }),
  Shadow: (t) => h('span', { className: 'tok-shadow', style: { boxShadow: t.value } }),
};

export function page() {
  const data = useTokens();
  if (!data) return h(Loading);
  return h(Fragment, null, data.map((s) => h(Block, { key: s.title, title: `${s.title} Tokens`, id: s.title.toLowerCase() },
    s.title === 'Color' && h(P, null, 'Semantic names follow Astryx contexts; values are baseui’s. Each token has a light and a dark value.'),
    s.title === 'Duration & easing' && h(P, null, 'Under ', h('code', null, 'prefers-reduced-motion: reduce'), ' every duration resolves to ', h('code', null, '0ms'), '.'),
    s.groups.map((g) => h(Fragment, { key: g.title },
      g.title && h('h3', null, g.title),
      h(TokenTable, {
        tokens: g.tokens, themed: s.themed,
        preview: s.themed ? (t) => h(Swatch, { name: t.name, size: 28 }) : PREVIEW[s.title],
      }))))));
}
export const __namedExportsOrder = [];
