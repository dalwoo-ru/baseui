import { h, Fragment } from '../react.js';
import { useTokens, section, Block, DoDont, Swatch, TokenTable, Loading } from './_kit.js';

export default {
  title: 'Foundations/Color',
  parameters: { docs: { description: { component: 'Color tokens for text, backgrounds, borders and accents. Each has a light and a dark value.' } } },
};

export function page() {
  const color = section('Color', useTokens());
  if (!color) return h(Loading);
  return h(Fragment, null,
    color.groups.map((g) => h(Block, { key: g.title, title: g.title },
      h(TokenTable, { tokens: g.tokens, themed: true, preview: (t) => h(Swatch, { name: t.name }) }))),
    h(Block, { title: 'Best Practices' },
      h(DoDont, {
        dos: ['Use the token that matches the role: text, background, border.', 'Keep text at 4.5:1 contrast or better.'],
        donts: ['Hardcode hex values: they do not follow the theme.', 'Add borders for emphasis: use fills and spacing.'],
      })));
}
export const __namedExportsOrder = [];
