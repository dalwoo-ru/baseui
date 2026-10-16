import { h, cx, React, useControllable, useRef, useState } from '../react.js';
import { describe } from '../doc.js';
import { Badge } from './Badge.js';

export function SegmentedControl({ items, value, defaultValue, onValueChange, size = 'md', fullWidth = false, showIcon = true, showLabel = true, showCounter = true, showBadge = true, label, className, ...rest }) {
  const [current, setCurrent] = useControllable(value, defaultValue ?? items.find((i) => !i.disabled)?.value, onValueChange);
  const ref = useRef(null);
  const [thumb, setThumb] = useState(null);
  const [ready, setReady] = useState(false);
  const enabled = items.filter((i) => !i.disabled);
  // Icon-only is just the label switched off; an item with nothing else to show keeps its label.
  const labelShown = (it) => showLabel || !(showIcon && it.icon);
  const iconOnly = !showLabel && showIcon && items.every((it) => it.icon) && !showCounter && !showBadge;

  // The thumb slides to the selected item; it is measured again when the control is resized.
  React.useLayoutEffect(() => {
    const root = ref.current;
    const measure = () => {
      const el = root.querySelector('[aria-checked="true"]');
      setThumb(el ? { x: el.offsetLeft, y: el.offsetTop, w: el.offsetWidth, h: el.offsetHeight } : null);
      // A control wider than its container scrolls sideways: keep the selected item in view.
      if (el && root.scrollWidth > root.clientWidth) root.scrollLeft = Math.min(Math.max(root.scrollLeft, el.offsetLeft + el.offsetWidth - root.clientWidth + 4), el.offsetLeft - 4);
    };
    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(root);
    return () => ro.disconnect();
  }, [current, items, size, fullWidth, showIcon, showLabel, showCounter, showBadge]);
  React.useEffect(() => { const id = requestAnimationFrame(() => setReady(true)); return () => cancelAnimationFrame(id); }, []);

  const onKeyDown = (e) => {
    const i = enabled.findIndex((x) => x.value === current);
    const next = e.key === 'ArrowRight' || e.key === 'ArrowDown' ? enabled[(i + 1) % enabled.length]
      : e.key === 'ArrowLeft' || e.key === 'ArrowUp' ? enabled[(i - 1 + enabled.length) % enabled.length] : null;
    if (!next) return;
    e.preventDefault();
    setCurrent(next.value);
    ref.current.querySelector(`[data-value="${CSS.escape(String(next.value))}"]`)?.focus();
  };
  return h('div', { role: 'radiogroup', 'aria-label': label, ref, onKeyDown, className: cx('bui-segmented', `bui-segmented--${size}`, fullWidth && 'bui-segmented--full', iconOnly && 'bui-segmented--icons', ready && 'bui-segmented--ready', className), ...rest },
    thumb && h('span', { className: 'bui-segmented__thumb', 'aria-hidden': 'true', style: { width: thumb.w, height: thumb.h, transform: `translate(${thumb.x}px, ${thumb.y}px)` } }),
    items.map((it) => h('button', {
      key: it.value, type: 'button', role: 'radio', 'data-value': it.value, 'aria-checked': it.value === current, tabIndex: it.value === current ? 0 : -1,
      disabled: it.disabled, title: labelShown(it) ? undefined : it.label, 'aria-label': labelShown(it) ? undefined : it.label, className: 'bui-segmented__item', onClick: () => setCurrent(it.value),
    },
    showIcon && it.icon && h('span', { className: 'bui-segmented__icon', 'aria-hidden': 'true' }, it.icon),
    labelShown(it) && h('span', { className: 'bui-segmented__label' }, it.label),
    showCounter && it.counter != null && h('span', { className: 'bui-segmented__counter' }, it.counter),
    showBadge && it.badge != null && (typeof it.badge === 'object' ? it.badge : h(Badge, { label: it.badge })))));
}
describe(SegmentedControl, 'A control for switching between a few exclusive options.', {
  items: ['Array<{ value: string; label: string; icon?: ReactNode; counter?: number | string; badge?: ReactNode | string; disabled?: boolean }>', null, 'Segments'],
  value: ['string', null, 'Selected value'],
  defaultValue: ['string', null, 'Initial value (first enabled)'],
  onValueChange: ['(value: string) => void', null, 'Called when the selection changes'],
  size: ["'sm' | 'md'", "'md'", 'Control height'],
  fullWidth: ['boolean', 'false', 'Fill the container width; segments are equal'],
  showIcon: ['boolean', 'true', 'Show the item icons'],
  showLabel: ['boolean', 'true', 'Show the item labels; with it off the control is icons only and the label becomes the accessible name'],
  showCounter: ['boolean', 'true', 'Show the item counters'],
  showBadge: ['boolean', 'true', 'Show the item badges'],
  label: ['string', null, 'Accessible name'],
});
