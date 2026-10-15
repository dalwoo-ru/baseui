import { h, Fragment, useState } from '../react.js';
import { useTokens, section, Block, P, Code, DoDont, TokenTable, Loading } from './_kit.js';
import { Button } from '../stories/_ui.js';

export default {
  title: 'Foundations/Motion',
  parameters: { docs: { description: { component: 'Duration and easing tokens for animations and transitions.' } } },
};

const BANDS = [['fast', 'Micro-interactions: hover, press, small state changes'], ['medium', 'Entrance and exit: panels, dialogs, expanding content'], ['slow', 'Continuous: loading and ambient motion']];

function Demo() {
  const [on, setOn] = useState(false);
  return h('div', { className: 'motion-demo' },
    h('div', null, h(Button, { variant: 'secondary', size: 'small', onClick: () => setOn(!on) }, on ? 'Reset' : 'Play')),
    BANDS.map(([band, text]) => h('div', { key: band, className: 'motion-row' },
      h('div', null, h('code', null, `duration-${band}`), h('span', { className: 'val' }, text)),
      h('div', { className: 'motion-track' },
        h('div', { className: 'motion-ball', style: { left: on ? 'calc(100% - 36px)' : 4, transition: `left var(--baseui-duration-${band}) var(--baseui-ease-standard)` } })))));
}

export function page() {
  const data = useTokens();
  const s = section('Duration & easing', data);
  if (!s) return h(Loading);
  const dur = s.groups[0].tokens.filter((t) => t.name.startsWith('duration'));
  const ease = s.groups[0].tokens.filter((t) => t.name.startsWith('ease'));
  return h(Fragment, null,
    h(Block, { title: 'Overview' },
      h(P, null, 'Motion makes an interface easier to understand and more pleasant to use. Duration and easing tokens keep these moments consistent.'),
      h(Demo)),
    h(Block, { title: 'Duration' },
      h(P, null, 'Nine tokens in three bands: fast (micro-interactions), medium (entrance and exit) and slow (continuous). The min and max variants derive from the base value times a ratio.'),
      h(TokenTable, { tokens: dur })),
    h(Block, { title: 'Easing' }, h(TokenTable, { tokens: ease })),
    h(Block, { title: 'Where Motion Helps' },
      h('ul', { className: 'doc-list' },
        h('li', null, 'Panels, dialogs and collapsible sections, which are disorienting when they appear instantly.'),
        h('li', null, 'Toasts and notifications, which need enough entrance to be noticed without startling.'),
        h('li', null, 'State changes such as switches and selections, which benefit from a brief transition.'),
        h('li', null, 'The common thread: moments where the user needs to understand what changed.'))),
    h(Block, { title: 'Where Motion Hurts' },
      h('ul', { className: 'doc-list' },
        h('li', null, 'Table row hovers, list item highlights and other high-frequency interactions. Keep these fast enough to be unnoticeable.'),
        h('li', null, 'Animations that block interaction. Motion should never stand between the user and their next action.'))),
    h(Block, { title: 'Movement Principles' },
      h('ul', { className: 'doc-list' },
        h('li', null, 'Not everything needs an animated exit. Tooltips and dropdown menus can disappear instantly; animate exits only when they orient the user, such as a panel closing.'),
        h('li', null, 'Match the exit to the entrance. A panel that slides in from the right should slide out to the right.'),
        h('li', null, 'Direction should match the action: moving deeper feels forward, going back feels like returning.'),
        h('li', null, 'Contextual UI should connect to its trigger: dropdowns expand from their button, popovers appear near the element they describe.'))),
    h(Block, { title: 'Respecting User Preferences' },
      h(P, null, 'All duration tokens become ', h(Code, null, '0ms'), ' when the OS reduced-motion setting is on, so components switch to instant changes. Custom animations that do not use the tokens should do the same with ', h(Code, null, '@media (prefers-reduced-motion: reduce)'), '.')),
    h(Block, { title: 'Animate with Motion Tokens' },
      h(P, null, 'Use the tokens for transition duration and easing so that a theme retuning motion also retunes your animations:'),
      h('pre', { className: 'doc-pre' }, h('code', null, `.slide-up {
  transition-property: transform, opacity;
  transition-duration: var(--baseui-duration-medium);
  transition-timing-function: var(--baseui-ease-standard);
}`))),
    h(Block, { title: 'Best Practices' },
      h(DoDont, {
        dos: ['Animate transitions with spatial change: panels opening, content expanding, elements entering the screen.', 'Use fast tokens for small, frequent interactions and medium tokens for larger layout-rearranging transitions.', 'Honor OS-level reduced motion preferences.'],
        donts: ['Let hover or high-frequency interactions feel laggy.', 'Let animation delay interaction with new content.', 'Move elements in ways that contradict where they came from or where they are going.'],
      })));
}
export const __namedExportsOrder = [];
