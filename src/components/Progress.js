import { h, cx } from '../react.js';
import { describe } from '../doc.js';

export function Progress({ value, size = 'medium', label, showValue = false, className, ...rest }) {
  const determinate = typeof value === 'number';
  const pct = determinate ? Math.min(100, Math.max(0, value)) : undefined;
  return h('div', { className: cx('bui-progress', `bui-progress--${size}`, className), ...rest },
    (label || (showValue && determinate)) && h('div', { className: 'bui-progress__head' },
      h('span', null, label), showValue && determinate && h('span', { className: 'bui-progress__value' }, `${Math.round(pct)}%`)),
    h('div', {
      role: 'progressbar', 'aria-label': typeof label === 'string' ? label : undefined,
      'aria-valuemin': 0, 'aria-valuemax': 100, 'aria-valuenow': pct,
      className: cx('bui-progress__track', !determinate && 'bui-progress__track--indeterminate'),
    }, h('div', { className: 'bui-progress__fill', style: determinate ? { width: `${pct}%` } : undefined })));
}

describe(Progress, 'Линейный индикатор прогресса. Без value — неопределённый (indeterminate).', {
  value: ['number', null, 'Прогресс 0–100. Не задан — индикатор неопределённый.'],
  size: ["'small' | 'medium'", "'medium'", 'Толщина полосы: 4 / 8 px.'],
  label: ['ReactNode', null, 'Подпись над полосой (используется как доступное имя).'],
  showValue: ['boolean', 'false', 'Показать значение в процентах.'],
});
