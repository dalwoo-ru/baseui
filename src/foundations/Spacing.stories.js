import { h, Fragment } from '../react.js';
import { useTokens, section, Block, P, Code, DoDont, TokenTable, Loading } from './_kit.js';

export default {
  title: 'Foundations/Spacing',
  parameters: { docs: { description: { component: 'A short list of recommended spacing values for padding, gap and margin. Tokens are named by their pixel value.' } } },
};

export function page() {
  const data = useTokens();
  const s = section('Spacing', data);
  if (!s) return h(Loading);
  const tokens = s.groups[0].tokens;
  return h(Fragment, null,
    h(Block, { title: 'Overview' },
      h(P, null, 'The scale is built on a 4px unit. Use these values and nothing else: if a design needs a number that is not here, reconsider the design before adding one.')),
    h(Block, { title: 'Scale' },
      h('div', { className: 'space-list' }, tokens.map((t) => h('div', { key: t.name, className: 'space-row' },
        h('code', null, `--baseui-${t.name}`),
        h('span', { className: 'space-bar-wrap' }, h('span', { className: 'tok-bar', style: { width: t.value === '0' ? 1 : t.value } })),
        h('span', { className: 'val' }, t.value)))),
      h(TokenTable, { tokens })),
    h(Block, { title: 'Usage' },
      h(P, null, 'Reference tokens in CSS: ', h(Code, null, 'gap: var(--baseui-spacing-16)'), '. Use 4–12 for tight internal spacing (icon and label, rows in a list), 16–24 between related blocks, 32 and up between sections.')),
    h(Block, { title: 'Best Practices' },
      h(DoDont, {
        dos: ['Stay on the scale for consistency.', 'Use 4–12 inside components and 24–80 between sections.', 'Use `gap` on flex and grid containers instead of margins on children.'],
        donts: ['Use arbitrary pixel values outside the scale.', 'Mix spacing tokens with raw px values in one component.'],
      })));
}
export const __namedExportsOrder = [];
