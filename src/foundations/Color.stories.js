import { h, Fragment } from '../react.js';
import { useTokens, section, Block, P, Code, DoDont, Swatch, TokenTable, Loading } from './_kit.js';

export default {
  title: 'Foundations/Color',
  parameters: { docs: { description: { component: 'Semantic color tokens for surfaces, text, status, borders and hues. Names describe the role, not the hex value, so components keep working when the theme changes.' } } },
};

const NOTES = {
  'Accent & brand': 'Interactive emphasis. `color-on-accent` is the readable text/icon color placed on `color-accent` and `color-brand`.',
  Background: 'Page and container fills. `background-body` is the page, `background-surface` raises content above it, `background-muted` is a quiet fill for controls and wells.',
  Overlay: 'Translucent layers: scrims behind dialogs and hover tints.',
  Text: 'Text and icon colors. Icons share the same values through `color-icon-*`.',
  Status: 'Error, warning and success. The base color is for text and icons, `-muted` for tinted backgrounds, `-inverted` for solid fills.',
  Border: 'Dividers and state outlines. Components in baseui are borderless by default; borders appear for focus, selection and validation.',
  Track: 'Neutral fill for slider and progress tracks and skeleton highlights.',
  Hues: 'Decorative hues for avatars, illustrations and custom backgrounds.',
};

export function page() {
  const data = useTokens();
  const color = section('Color', data);
  if (!color) return h(Loading);
  return h(Fragment, null,
    h(Block, { title: 'Overview' },
      h(P, null, 'Every color token has a light and a dark value and switches with ', h(Code, null, 'data-theme'), '. The swatches below follow the active theme; use the theme switch in the sidebar to compare.')),
    color.groups.map((g) => h(Block, { key: g.title, title: g.title, id: g.title.toLowerCase().replace(/\W+/g, '-') },
      h(P, null, ...(NOTES[g.title] || '').split('`').map((t, i) => (i % 2 ? h(Code, { key: i }, t) : t))),
      h(TokenTable, { tokens: g.tokens, themed: true, preview: (t) => h(Swatch, { name: t.name }) }))),
    h(Block, { title: 'Best Practices' },
      h(DoDont, {
        dos: [
          'Use the role-based token for the job: `color-text-secondary` for supporting text, `color-background-muted` for quiet fills.',
          'Pair `-muted` backgrounds with the base status color for text and icons.',
          'Keep text at 4.5:1 contrast or better; every text token meets it on `background-body` in both themes.',
        ],
        donts: [
          'Hardcode hex values: they will not follow the theme.',
          'Use a hue token to communicate status; use error, warning and success.',
          'Add borders around controls for emphasis; use fills and spacing instead.',
        ],
      })));
}
export const __namedExportsOrder = [];
