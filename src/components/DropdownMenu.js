import { h, cx, useId, useRef, useEffect, useState, createContext, useContext, Fragment, React } from '../react.js';
import { describe } from '../doc.js';

const MenuContext = createContext({ close: () => {} });

export function DropdownMenu({ trigger, children, align = 'start', label, className, ...rest }) {
  const [open, setOpen] = useState(false);
  const id = useId();
  const root = useRef(null);
  const menu = useRef(null);
  const close = (refocus = false) => { setOpen(false); if (refocus) root.current.querySelector('[aria-haspopup]')?.focus(); };
  useEffect(() => {
    if (!open) return undefined;
    menu.current?.querySelector('[role^="menuitem"]:not([aria-disabled="true"])')?.focus();
    const onDoc = (e) => { if (!root.current.contains(e.target)) setOpen(false); };
    document.addEventListener('pointerdown', onDoc);
    return () => document.removeEventListener('pointerdown', onDoc);
  }, [open]);

  const onKeyDown = (e) => {
    const items = [...menu.current.querySelectorAll('[role^="menuitem"]:not([aria-disabled="true"])')];
    const i = items.indexOf(document.activeElement);
    if (e.key === 'ArrowDown') { e.preventDefault(); items[(i + 1) % items.length]?.focus(); }
    else if (e.key === 'ArrowUp') { e.preventDefault(); items[(i - 1 + items.length) % items.length]?.focus(); }
    else if (e.key === 'Home') { e.preventDefault(); items[0]?.focus(); }
    else if (e.key === 'End') { e.preventDefault(); items[items.length - 1]?.focus(); }
    else if (e.key === 'Escape') { e.preventDefault(); close(true); }
    else if (e.key === 'Tab') close();
  };
  return h(MenuContext.Provider, { value: { close } },
    h('span', { ref: root, className: cx('bui-menu-root', className), ...rest },
      trigger({
        'aria-haspopup': 'menu', 'aria-expanded': open, 'aria-controls': open ? id : undefined, onClick: () => setOpen(!open),
        onKeyDown: (e) => { if (e.key === 'ArrowDown' && !open) { e.preventDefault(); setOpen(true); } },
      }),
      open && h('div', { id, ref: menu, role: 'menu', 'aria-label': label, className: 'bui-menu', 'data-align': align, onKeyDown }, children)));
}
describe(DropdownMenu, 'A menu of actions opened from a trigger. Arrow keys move, Enter or Space selects, Escape closes.', {
  trigger: ['(props) => ReactElement', null, 'Render function; spread the received props onto your trigger button.'],
  align: ["'start' | 'end'", "'start'", 'Align the menu with the start or end edge of the trigger.'],
  label: ['string', null, 'Accessible name of the menu.'],
});

export function DropdownMenuItem({ onSelect, icon, shortcut, disabled = false, destructive = false, children, className, ...rest }) {
  const { close } = useContext(MenuContext);
  const select = () => { if (disabled) return; onSelect && onSelect(); close(true); };
  return h('div', {
    role: 'menuitem', tabIndex: -1, 'aria-disabled': disabled || undefined, className: cx('bui-menu__item', destructive && 'bui-menu__item--destructive', className),
    onClick: select, onKeyDown: (e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); select(); } }, ...rest,
  }, icon && h('span', { className: 'bui-menu__icon', 'aria-hidden': 'true' }, icon), h('span', { className: 'bui-menu__label' }, children),
  shortcut && h('span', { className: 'bui-menu__shortcut' }, shortcut));
}
describe(DropdownMenuItem, 'An action in a dropdown menu.', {
  onSelect: ['() => void', null, 'Called when chosen; the menu then closes.'],
  icon: ['ReactNode', null, 'Leading icon.'],
  shortcut: ['ReactNode', null, 'Shortcut hint on the right.'],
  disabled: ['boolean', 'false', 'Disable the item.'],
  destructive: ['boolean', 'false', 'Style as a destructive action.'],
});

export function DropdownMenuCheckboxItem({ checked, onCheckedChange, disabled = false, children, className, ...rest }) {
  return h('div', {
    role: 'menuitemcheckbox', 'aria-checked': checked, tabIndex: -1, 'aria-disabled': disabled || undefined, className: cx('bui-menu__item', className),
    onClick: () => !disabled && onCheckedChange(!checked), onKeyDown: (e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); !disabled && onCheckedChange(!checked); } }, ...rest,
  }, h('span', { className: 'bui-menu__check', 'aria-hidden': 'true' }, checked ? '✓' : ''), h('span', { className: 'bui-menu__label' }, children));
}
describe(DropdownMenuCheckboxItem, 'A menu item with a check mark that toggles; the menu stays open.', {
  checked: ['boolean', null, 'Checked state.'], onCheckedChange: ['(checked: boolean) => void', null, 'Called on toggle.'],
});

export function DropdownMenuRadioGroup({ value, onValueChange, children, label }) {
  return h('div', { role: 'group', 'aria-label': label }, React.Children.map(children, (c) => React.isValidElement(c) ? React.cloneElement(c, { checked: c.props.value === value, onSelect: () => onValueChange(c.props.value) }) : c));
}
describe(DropdownMenuRadioGroup, 'Groups radio items: exactly one can be chosen.', {
  value: ['string', null, 'Selected value.'], onValueChange: ['(value: string) => void', null, 'Called on selection.'],
});

export function DropdownMenuRadioItem({ checked, onSelect, disabled = false, children, className, ...rest }) {
  return h('div', {
    role: 'menuitemradio', 'aria-checked': checked, tabIndex: -1, 'aria-disabled': disabled || undefined, className: cx('bui-menu__item', className),
    onClick: () => !disabled && onSelect(), onKeyDown: (e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); !disabled && onSelect(); } }, ...rest,
  }, h('span', { className: 'bui-menu__check', 'aria-hidden': 'true' }, checked ? '●' : ''), h('span', { className: 'bui-menu__label' }, children));
}
describe(DropdownMenuRadioItem, 'A radio option inside `DropdownMenuRadioGroup`.', { value: ['string', null, 'Option value.'] });

export const DropdownMenuDivider = () => h('div', { role: 'separator', className: 'bui-menu__divider' });
export const DropdownMenuGroup = ({ label, children }) =>
  h(Fragment, null, h('div', { className: 'bui-menu__group', role: 'presentation' }, label), children);
describe(DropdownMenuGroup, 'A labelled section of items.', { label: ['ReactNode', null, 'Group heading.'] });
