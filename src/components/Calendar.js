import { h, cx, React, useCallback, useEffect, useId, useMemo, useRef, useState, useControllable } from '../react.js';
import { Icon } from '../icons.js';
import { TextField, Modal } from '../base.js';
import { Button } from './Button.js';
import { Popover } from './Popover.js';
import { describe } from '../doc.js';

/* ------------------------------------------------------------------ dates */

const day = (d) => new Date(d.getFullYear(), d.getMonth(), d.getDate());
const same = (a, b) => !!a && !!b && a.getFullYear() === b.getFullYear() && a.getMonth() === b.getMonth() && a.getDate() === b.getDate();
const addDays = (d, n) => new Date(d.getFullYear(), d.getMonth(), d.getDate() + n);
const addMonths = (d, n) => new Date(d.getFullYear(), d.getMonth() + n, 1);
const monthStart = (d) => new Date(d.getFullYear(), d.getMonth(), 1);
const key = (d) => `${d.getFullYear()}-${d.getMonth() + 1}-${d.getDate()}`;
const before = (a, b) => day(a).getTime() < day(b).getTime();

/** Is the range selection `{ start, end }`? */
const isRange = (v) => v && typeof v === 'object' && !(v instanceof Date);

/* --------------------------------------------------------------- Calendar */

export function Calendar({
  value, defaultValue, onValueChange, mode = 'single', month, defaultMonth, onMonthChange, min, max, isDateDisabled,
  weekStartsOn = 1, locale, fluid = false, className, ...rest
}) {
  const [selected, setSelected] = useControllable(value, defaultValue ?? null, onValueChange);
  const first = mode === 'range' ? selected?.start : selected;
  const [visible, setVisible] = useControllable(month, defaultMonth ?? monthStart(first || new Date()), onMonthChange);
  const [focus, setFocus] = useState(null);
  const grid = useRef(null);
  const moved = useRef(false);
  const titleId = useId();
  const today = useMemo(() => day(new Date()), []);

  const fmt = useMemo(() => ({
    title: new Intl.DateTimeFormat(locale, { month: 'long', year: 'numeric' }),
    weekday: new Intl.DateTimeFormat(locale, { weekday: 'short' }),
    long: new Intl.DateTimeFormat(locale, { dateStyle: 'full' }),
    number: new Intl.NumberFormat(locale),
  }), [locale]);
  const weekdays = useMemo(() => Array.from({ length: 7 }, (_, i) => {
    const d = new Date(2023, 0, 1 + ((weekStartsOn + i) % 7)); // 2023-01-01 is a Sunday
    return { short: fmt.weekday.format(d), long: new Intl.DateTimeFormat(locale, { weekday: 'long' }).format(d) };
  }), [fmt, locale, weekStartsOn]);

  const disabled = (d) => (min && before(d, min)) || (max && before(max, d)) || (isDateDisabled ? isDateDisabled(d) : false);
  const y = visible.getFullYear();
  const m = visible.getMonth();
  const count = new Date(y, m + 1, 0).getDate();
  const lead = (new Date(y, m, 1).getDay() - weekStartsOn + 7) % 7;
  const cells = [...Array(lead).fill(null), ...Array.from({ length: count }, (_, i) => new Date(y, m, i + 1))];
  while (cells.length % 7) cells.push(null);
  const weeks = Array.from({ length: cells.length / 7 }, (_, i) => cells.slice(i * 7, i * 7 + 7));

  const tabStop = focus && focus.getMonth() === m && focus.getFullYear() === y ? focus
    : (first && first.getMonth() === m && first.getFullYear() === y ? first
      : (today.getMonth() === m && today.getFullYear() === y ? today : new Date(y, m, 1)));

  const goMonth = (n) => setVisible(addMonths(visible, n));
  const canPrev = !min || !before(addDays(monthStart(visible), -1), min) || false;
  const canNext = !max || !before(max, addMonths(visible, 1));

  const pick = (d) => {
    if (disabled(d)) return;
    setFocus(d);
    if (mode === 'single') { setSelected(day(d)); return; }
    const r = isRange(selected) ? selected : null;
    if (!r || !r.start || r.end) setSelected({ start: day(d), end: null });
    else if (before(d, r.start)) setSelected({ start: day(d), end: null });
    else setSelected({ start: r.start, end: day(d) });
  };

  useEffect(() => {
    if (!moved.current) return;
    moved.current = false;
    grid.current?.querySelector(`[data-date="${key(tabStop)}"]`)?.focus();
  });

  const onKeyDown = (e) => {
    const steps = { ArrowLeft: -1, ArrowRight: 1, ArrowUp: -7, ArrowDown: 7 };
    let next = null;
    if (e.key in steps) next = addDays(tabStop, steps[e.key]);
    else if (e.key === 'Home') next = addDays(tabStop, -((tabStop.getDay() - weekStartsOn + 7) % 7));
    else if (e.key === 'End') next = addDays(tabStop, 6 - ((tabStop.getDay() - weekStartsOn + 7) % 7));
    else if (e.key === 'PageUp' || e.key === 'PageDown') {
      const t = addMonths(tabStop, e.key === 'PageUp' ? -1 : 1);
      next = new Date(t.getFullYear(), t.getMonth(), Math.min(tabStop.getDate(), new Date(t.getFullYear(), t.getMonth() + 1, 0).getDate()));
    }
    if (!next) return;
    e.preventDefault();
    moved.current = true;
    setFocus(next);
    if (next.getMonth() !== m || next.getFullYear() !== y) setVisible(monthStart(next));
  };

  const r = mode === 'range' && isRange(selected) ? selected : null;
  const inRange = (d) => r && r.start && r.end && !before(d, r.start) && !before(r.end, d);

  return h('div', { className: cx('bui-calendar', fluid && 'bui-calendar--fluid', className), ...rest },
    h('div', { className: 'bui-calendar__header' },
      h('button', { type: 'button', className: 'bui-calendar__nav', 'aria-label': 'Previous month', disabled: !canPrev, onClick: () => goMonth(-1) }, h(Icon, { name: 'chevronLeft', size: 24 })),
      h('div', { id: titleId, className: 'bui-calendar__title', 'aria-live': 'polite' }, fmt.title.format(visible)),
      h('button', { type: 'button', className: 'bui-calendar__nav', 'aria-label': 'Next month', disabled: !canNext, onClick: () => goMonth(1) }, h(Icon, { name: 'chevronRight', size: 24 }))),
    h('div', { role: 'grid', 'aria-labelledby': titleId, 'aria-multiselectable': mode === 'range' || undefined, className: 'bui-calendar__grid', ref: grid, onKeyDown },
      h('div', { role: 'row', className: 'bui-calendar__row' }, weekdays.map((w) => h('div', { key: w.long, role: 'columnheader', 'aria-label': w.long, className: 'bui-calendar__weekday' }, w.short))),
      weeks.map((week, i) => h('div', { key: i, role: 'row', className: 'bui-calendar__row' }, week.map((d, j) => {
        if (!d) return h('div', { key: j, role: 'gridcell', className: 'bui-calendar__cell' });
        const start = r && same(d, r.start);
        const end = r && same(d, r.end);
        const on = mode === 'single' ? same(d, selected) : start || end;
        const off = disabled(d);
        return h('div', { key: j, role: 'gridcell', 'aria-selected': on || (inRange(d) || undefined), className: cx('bui-calendar__cell', inRange(d) && 'bui-calendar__cell--range', start && r.end && 'bui-calendar__cell--start', end && 'bui-calendar__cell--end') },
          h('button', {
            type: 'button', 'data-date': key(d), tabIndex: same(d, tabStop) ? 0 : -1, 'aria-label': fmt.long.format(d), 'aria-disabled': off || undefined,
            'aria-current': same(d, today) ? 'date' : undefined, 'aria-pressed': on,
            className: cx('bui-calendar__day', on && 'bui-calendar__day--selected', same(d, today) && 'bui-calendar__day--today', inRange(d) && !on && 'bui-calendar__day--in-range', off && 'bui-calendar__day--disabled'),
            onClick: () => pick(d), onFocus: () => setFocus(d),
          }, fmt.number.format(d.getDate())));
      })))));
}
describe(Calendar, 'A month grid for picking a date or a date range.', {
  value: ['Date | { start: Date | null; end: Date | null } | null', null, 'Selected date, or the selected range when `mode="range"` (controlled)'],
  defaultValue: ['Date | { start, end } | null', null, 'Initial selection (uncontrolled)'],
  onValueChange: ['(value) => void', null, 'Called when the selection changes; a range is complete when `end` is set'],
  mode: ["'single' | 'range'", "'single'", 'One date or a range of two'],
  month: ['Date', null, 'Visible month (controlled)'],
  defaultMonth: ['Date', null, 'Initially visible month (the selection, or today)'],
  onMonthChange: ['(month: Date) => void', null, 'Called when the visible month changes'],
  min: ['Date', null, 'Earliest selectable date'],
  max: ['Date', null, 'Latest selectable date'],
  isDateDisabled: ['(date: Date) => boolean', null, 'Mark any date as unavailable'],
  weekStartsOn: ['0 | 1 | 2 | 3 | 4 | 5 | 6', '1', 'First day of the week: 0 is Sunday, 1 is Monday'],
  locale: ['string', null, 'BCP 47 locale for month, weekday and number names (browser default)'],
  fluid: ['boolean', 'false', 'Fill the container width; the days stretch (used in the dialog)'],
});

/* ------------------------------------------------------------- DatePicker */

function useNarrow(query) {
  const sub = useCallback((cb) => { const q = window.matchMedia(query); q.addEventListener('change', cb); return () => q.removeEventListener('change', cb); }, [query]);
  return React.useSyncExternalStore(sub, () => window.matchMedia(query).matches, () => false);
}

export function DatePicker({
  value, defaultValue, onValueChange, mode = 'single', label = 'Date', presentation = 'auto', locale, min, max, isDateDisabled, weekStartsOn,
  confirmLabel = 'Apply', cancelLabel = 'Cancel', className, ...field
}) {
  const [selected, setSelected] = useControllable(value, defaultValue ?? null, onValueChange);
  const [open, setOpen] = useState(false);
  const [draft, setDraft] = useState(selected);
  const sheet = useNarrow('(max-width: 1200px)');
  const asDialog = presentation === 'dialog' || (presentation === 'auto' && sheet);
  const fmt = useMemo(() => new Intl.DateTimeFormat(locale, { dateStyle: 'medium' }), [locale]);
  const text = mode === 'range'
    ? (isRange(selected) && selected.start ? `${fmt.format(selected.start)}${selected.end ? ` – ${fmt.format(selected.end)}` : ' – …'}` : '')
    : (selected ? fmt.format(selected) : '');
  const cal = { mode, locale, min, max, isDateDisabled, weekStartsOn };

  const trigger = (extra = {}) => h(TextField, {
    ...field, label, readOnly: true, value: text, onChange: () => {}, startIcon: h(Icon, { name: 'calendar', size: field.size === 'sm' ? 20 : 24 }),
    onKeyDown: (e) => { if (e.key === 'Enter' || e.key === ' ' || e.key === 'ArrowDown') { e.preventDefault(); extra.onClick ? extra.onClick() : (setDraft(selected), setOpen(true)); } },
    ...extra, 'aria-haspopup': 'dialog',
  });

  if (asDialog) {
    return h('div', { className: cx('bui-datepicker', className) },
      trigger({ onClick: () => { setDraft(selected); setOpen(true); }, 'aria-expanded': open }),
      h(Modal, {
        open, onOpenChange: setOpen, title: label, height: 'content',
        primaryAction: h(Button, { onClick: () => { setSelected(draft); setOpen(false); } }, confirmLabel),
        secondaryAction: h(Button, { variant: 'secondary', onClick: () => setOpen(false) }, cancelLabel),
      }, h(Calendar, { ...cal, fluid: true, value: draft, onValueChange: setDraft })));
  }
  return h(Popover, {
    className: cx('bui-datepicker', className), open, onOpenChange: setOpen, label, placement: 'bottom-start',
    trigger: (p) => trigger({ onClick: p.onClick, 'aria-expanded': p['aria-expanded'], 'aria-controls': p['aria-controls'] }),
  }, h(Calendar, { ...cal, value: selected, onValueChange: (v) => { setSelected(v); if (mode === 'single' || (isRange(v) && v.end)) setOpen(false); } }));
}
describe(DatePicker, 'A date field. It opens the calendar in a popover, and in a Dialog sheet on small screens. The field is a Text Input, so its size, variant, label and status come from Text Input.', {
  value: ['Date | { start, end } | null', null, 'Selected date or range (controlled)'],
  defaultValue: ['Date | { start, end } | null', null, 'Initial selection (uncontrolled)'],
  onValueChange: ['(value) => void', null, 'Called when a date (or a complete range) is chosen'],
  mode: ["'single' | 'range'", "'single'", 'One date or a range of two'],
  presentation: ["'auto' | 'popover' | 'dialog'", "'auto'", 'Where the calendar opens: auto uses the dialog up to 1200px'],
  confirmLabel: ['string', "'Apply'", 'Dialog apply button text'],
  cancelLabel: ['string', "'Cancel'", 'Dialog cancel button text'],
  min: ['Date', null, 'Earliest selectable date'],
  max: ['Date', null, 'Latest selectable date'],
  isDateDisabled: ['(date: Date) => boolean', null, 'Mark any date as unavailable'],
  weekStartsOn: ['0 | 1 | 2 | 3 | 4 | 5 | 6', '1', 'First day of the week'],
  locale: ['string', null, 'BCP 47 locale for names and the formatted value'],
});
