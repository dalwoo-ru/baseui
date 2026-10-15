// Button family built around the compiled baseui Button: groups, icon-only and toggle buttons.
import { h, cx, useControllable } from '../react.js';
import { Icon } from './Icon.js';
import { describe } from '../doc.js';
import { Button as ButtonBase } from '../base.js';

export function ButtonGroup({ attached = false, size, variant, children, className, ...rest }) {
  return h('div', { role: 'group', className: cx('bui-btn-group', attached && 'bui-btn-group--attached', className), ...rest }, children);
}
describe(ButtonGroup, 'Lays out related buttons in a row. With `attached`, buttons share edges.', {
  attached: ['boolean', 'false', 'Join buttons into one segmented control.'],
});

export function IconButton({ icon, label, variant = 'secondary', size = 'medium', iconVariant = 'outline', className, ...rest }) {
  return h(ButtonBase, { variant, size, 'aria-label': label, title: label, className: cx('bui-icon-btn', `bui-icon-btn--${size}`, className), ...rest },
    typeof icon === 'string' ? h(Icon, { name: icon, variant: iconVariant, size: size === 'xsmall' ? 16 : 20 }) : icon);
}
describe(IconButton, 'A square button with only an icon. `label` is required: it is the accessible name and the tooltip.', {
  icon: ['string | ReactNode', null, 'Icon name from the catalog, or an element.'],
  label: ['string', null, 'Accessible name (required).'],
  variant: ["'primary' | 'secondary' | 'text'", "'secondary'", 'Visual style.'],
  size: ["'xsmall' | 'small' | 'medium' | 'large'", "'medium'", 'Size; the button is square.'],
});

export function ToggleButton({ pressed, defaultPressed = false, onPressedChange, variant = 'secondary', size = 'medium', children, className, ...rest }) {
  const [on, setOn] = useControllable(pressed, defaultPressed, onPressedChange);
  return h(ButtonBase, {
    variant: on ? 'primary' : variant, size, 'aria-pressed': on, className: cx('bui-toggle-btn', className),
    onClick: (e) => { setOn(!on); rest.onClick && rest.onClick(e); }, ...rest,
  }, children);
}
describe(ToggleButton, 'A button that stays pressed. Pressed state uses the primary style.', {
  pressed: ['boolean', null, 'Pressed state (controlled).'],
  defaultPressed: ['boolean', 'false', 'Initial state (uncontrolled).'],
  onPressedChange: ['(pressed: boolean) => void', null, 'Called when toggled.'],
  variant: ["'secondary' | 'text'", "'secondary'", 'Style when not pressed.'],
  size: ["'xsmall' | 'small' | 'medium' | 'large'", "'medium'", 'Size.'],
});

export function ToggleButtonGroup({ items, value, defaultValue, onValueChange, multiple = false, size = 'small', label, className, ...rest }) {
  const [current, setCurrent] = useControllable(value, defaultValue ?? (multiple ? [] : undefined), onValueChange);
  const isOn = (v) => (multiple ? current.includes(v) : current === v);
  const toggle = (v) => setCurrent(multiple ? (current.includes(v) ? current.filter((x) => x !== v) : [...current, v]) : v);
  return h('div', { role: 'group', 'aria-label': label, className: cx('bui-btn-group', className), ...rest },
    items.map((it) => h(ButtonBase, {
      key: it.value, size, variant: isOn(it.value) ? 'primary' : 'secondary', 'aria-pressed': isOn(it.value), disabled: it.disabled, onClick: () => toggle(it.value),
    }, it.label)));
}
describe(ToggleButtonGroup, 'A group of toggle buttons. Single selection by default; `multiple` allows several.', {
  items: ['Array<{ value: string; label: ReactNode; disabled?: boolean }>', null, 'Buttons.'],
  value: ['string | string[]', null, 'Selected value(s) (controlled).'],
  defaultValue: ['string | string[]', null, 'Initial value(s).'],
  onValueChange: ['(value) => void', null, 'Called when the selection changes.'],
  multiple: ['boolean', 'false', 'Allow several selected buttons.'],
  size: ["'xsmall' | 'small' | 'medium' | 'large'", "'small'", 'Button size.'],
  label: ['string', null, 'aria-label of the group.'],
});
