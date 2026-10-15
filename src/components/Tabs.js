import { h, cx, useId, useRef, useControllable } from '../react.js';
import { describe } from '../doc.js';

export function Tabs({ items, value, defaultValue, onValueChange, variant = 'underline', label, className, ...rest }) {
  const first = items.find((i) => !i.disabled);
  const [current, setCurrent] = useControllable(value, defaultValue ?? (first && first.value), onValueChange);
  const uid = useId();
  const listRef = useRef(null);
  const enabled = items.filter((i) => !i.disabled);

  const onKeyDown = (e) => {
    const idx = enabled.findIndex((i) => i.value === current);
    let next;
    if (e.key === 'ArrowRight') next = enabled[(idx + 1) % enabled.length];
    else if (e.key === 'ArrowLeft') next = enabled[(idx - 1 + enabled.length) % enabled.length];
    else if (e.key === 'Home') next = enabled[0];
    else if (e.key === 'End') next = enabled[enabled.length - 1];
    if (!next) return;
    e.preventDefault();
    setCurrent(next.value);
    listRef.current.querySelector(`[data-value="${CSS.escape(String(next.value))}"]`)?.focus();
  };
  const active = items.find((i) => i.value === current);

  return h('div', { className: cx('bui-tabs', `bui-tabs--${variant}`, className), ...rest },
    h('div', { role: 'tablist', 'aria-label': label, className: 'bui-tabs__list', ref: listRef, onKeyDown },
      items.map((item) => {
        const selected = item.value === current;
        return h('button', {
          key: item.value, type: 'button', role: 'tab', id: `${uid}-t-${item.value}`, 'data-value': item.value,
          'aria-selected': selected, 'aria-controls': `${uid}-p-${item.value}`, tabIndex: selected ? 0 : -1,
          disabled: item.disabled, className: 'bui-tabs__tab', onClick: () => setCurrent(item.value),
        }, item.label);
      })),
    active && active.content != null && h('div', {
      role: 'tabpanel', id: `${uid}-p-${active.value}`, 'aria-labelledby': `${uid}-t-${active.value}`,
      tabIndex: 0, className: 'bui-tabs__panel',
    }, active.content));
}

describe(Tabs, 'Вкладки: переключение между равноправными представлениями. Стрелки, Home/End — навигация с клавиатуры.', {
  items: ['Array<{ value: string; label: ReactNode; content?: ReactNode; disabled?: boolean }>', null, 'Вкладки и их содержимое.'],
  value: ['string', null, 'Активная вкладка (контролируемый режим).'],
  defaultValue: ['string', null, 'Активная вкладка по умолчанию (первая доступная).'],
  onValueChange: ['(value: string) => void', null, 'Вызывается при смене вкладки.'],
  variant: ["'underline' | 'segmented'", "'underline'", 'Оформление списка вкладок.'],
  label: ['string', null, 'aria-label для списка вкладок.'],
});
