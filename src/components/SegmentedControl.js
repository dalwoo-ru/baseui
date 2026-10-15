import { h, cx, useControllable, useId, useRef } from '../react.js';
import { describe } from '../doc.js';

export function SegmentedControl({ items, value, defaultValue, onValueChange, size = 'md', fullWidth = false, label, className, ...rest }) {
  const [current, setCurrent] = useControllable(value, defaultValue ?? items.find((i) => !i.disabled)?.value, onValueChange);
  const ref = useRef(null);
  const enabled = items.filter((i) => !i.disabled);
  const onKeyDown = (e) => {
    const i = enabled.findIndex((x) => x.value === current);
    const next = e.key === 'ArrowRight' || e.key === 'ArrowDown' ? enabled[(i + 1) % enabled.length]
      : e.key === 'ArrowLeft' || e.key === 'ArrowUp' ? enabled[(i - 1 + enabled.length) % enabled.length] : null;
    if (!next) return;
    e.preventDefault();
    setCurrent(next.value);
    ref.current.querySelector(`[data-value="${CSS.escape(String(next.value))}"]`)?.focus();
  };
  return h('div', { role: 'radiogroup', 'aria-label': label, ref, onKeyDown, className: cx('bui-segmented', `bui-segmented--${size}`, fullWidth && 'bui-segmented--full', className), ...rest },
    items.map((it) => h('button', {
      key: it.value, type: 'button', role: 'radio', 'data-value': it.value, 'aria-checked': it.value === current, tabIndex: it.value === current ? 0 : -1,
      disabled: it.disabled, className: 'bui-segmented__item', onClick: () => setCurrent(it.value),
    }, it.label)));
}
describe(SegmentedControl, 'A control for switching between a few exclusive options.', {
  items: ['Array<{ value: string; label: ReactNode; disabled?: boolean }>', null, 'Segments'],
  value: ['string', null, 'Selected value'],
  defaultValue: ['string', null, 'Initial value (first enabled)'],
  onValueChange: ['(value: string) => void', null, 'Called when the selection changes'],
  size: ["'sm' | 'md'", "'md'", 'Control height'],
  fullWidth: ['boolean', 'false', 'Fill the container width'],
  label: ['string', null, 'Accessible name'],
});
