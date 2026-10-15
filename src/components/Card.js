import { h, cx, useControllable } from '../react.js';
import { Icon } from '../icons.js';
import { describe } from '../doc.js';

export function Card({ variant = 'filled', padding = 16, title, subtitle, actions, footer, as = 'section', children, className, ...rest }) {
  const hasHeader = title || subtitle || actions;
  return h(as, { className: cx('bui-card', `bui-card--${variant}`, className), style: { '--bui-card-pad': `var(--baseui-spacing-${padding})` }, ...rest },
    hasHeader && h('header', { className: 'bui-card__header' },
      h('div', { className: 'bui-card__heading' },
        title && h('div', { className: 'bui-card__title' }, title),
        subtitle && h('div', { className: 'bui-card__subtitle' }, subtitle)),
      actions && h('div', { className: 'bui-card__actions' }, actions)),
    children != null && h('div', { className: 'bui-card__body' }, children),
    footer && h('footer', { className: 'bui-card__footer' }, footer));
}
describe(Card, 'A container that groups related content. Cards have no outline: a fill or a shadow separates them from the page.', {
  variant: ["'filled' | 'raised'", "'filled'", 'Quiet fill, or a surface with a shadow.'],
  padding: ['number', '16', 'Inner padding in px (spacing token: 0, 8, 12, 16, 20, 24, 32).'],
  title: ['ReactNode', null, 'Heading.'],
  subtitle: ['ReactNode', null, 'Supporting line under the heading.'],
  actions: ['ReactNode', null, 'Actions on the right of the header.'],
  footer: ['ReactNode', null, 'Footer content.'],
  as: ['ElementType', "'section'", 'HTML tag.'],
});

export function ClickableCard({ href, onClick, children, className, ...rest }) {
  const Tag = href ? 'a' : 'button';
  return h(Tag, { className: cx('bui-card', 'bui-card--filled', 'bui-card--clickable', className), style: { '--bui-card-pad': 'var(--baseui-spacing-16)' }, ...(href ? { href } : { type: 'button' }), onClick, ...rest },
    h('div', { className: 'bui-card__body' }, children));
}
describe(ClickableCard, 'A card that is a single link or button. Gets hover and pressed feedback.', {
  href: ['string', null, 'Renders an `a` when set, otherwise a `button`.'],
  onClick: ['(event) => void', null, 'Click handler.'],
});

export function SelectableCard({ selected, defaultSelected = false, onSelectedChange, disabled = false, children, className, ...rest }) {
  const [on, setOn] = useControllable(selected, defaultSelected, onSelectedChange);
  return h('button', {
    type: 'button', role: 'checkbox', 'aria-checked': on, disabled, onClick: () => setOn(!on),
    className: cx('bui-card', 'bui-card--filled', 'bui-card--selectable', className), style: { '--bui-card-pad': 'var(--baseui-spacing-16)' }, ...rest,
  }, h('div', { className: 'bui-card__body' }, children),
  h('span', { className: 'bui-card__check', 'aria-hidden': 'true' }, on && h(Icon, { name: 'success', size: 22 })));
}
describe(SelectableCard, 'A card that can be selected, like a checkbox. Selection is shown with a tinted fill and a check mark.', {
  selected: ['boolean', null, 'Selected state (controlled).'],
  defaultSelected: ['boolean', 'false', 'Initial state.'],
  onSelectedChange: ['(selected: boolean) => void', null, 'Called when toggled.'],
  disabled: ['boolean', 'false', 'Disable selection.'],
});
