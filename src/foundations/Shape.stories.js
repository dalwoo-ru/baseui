import { h, Fragment } from '../react.js';
import { useTokens, section, Block, P, Code, DoDont, TokenTable, Loading } from './_kit.js';

export default {
  title: 'Foundations/Shape',
  parameters: { docs: { description: { component: 'A short list of recommended corner radii. Tokens are named by their pixel value, plus `none` and `full`.' } } },
};

export function page() {
  const data = useTokens();
  const s = section('Radius', data);
  if (!s) return h(Loading);
  const tokens = s.groups[0].tokens;
  return h(Fragment, null,
    h(Block, { title: 'Overview' },
      h(P, null, 'Pick a radius by the size of the element: small values for compact controls, larger values for containers. The scale follows a 4px unit.')),
    h(Block, { title: 'Radius Scale' },
      h('div', { className: 'shape-grid' }, tokens.map((t) => h('figure', { key: t.name, className: 'shape-item' },
        h('div', { className: 'shape-box', style: { borderRadius: t.value } }),
        h('figcaption', null, h('code', null, t.name.replace('radius-', '')), h('span', null, t.value))))),
      h(TokenTable, { tokens })),
    h(Block, { title: 'Concentric Radius' },
      h(P, null, 'For an element nested inside a padded, rounded container, set the inner radius to the outer radius minus the padding:'),
      h('pre', { className: 'doc-pre' }, h('code', null, 'border-radius: calc(var(--baseui-radius-24) - var(--baseui-spacing-8));')),
      h('div', { className: 'concentric' },
        h('div', { className: 'concentric-outer' }, h('div', { className: 'concentric-inner' }, 'calc(24px − 8px) = 16px')))),
    h(Block, { title: 'Best Practices' },
      h(DoDont, {
        dos: ['Use 8–16 for buttons, inputs and selectors; 16–24 for cards, panels and dialogs.', 'Use `full` for pills, tags and avatars.', 'Reference tokens so radii stay consistent across components.'],
        donts: ['Use large radii (28–32) on small elements.', 'Hardcode radius values in components.'],
      })));
}
export const __namedExportsOrder = [];
