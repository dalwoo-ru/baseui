import { h, cx } from '../react.js';
import { describe } from '../doc.js';

const SIZES = { small: 16, medium: 24, large: 40 };

export function Spinner({ size = 'medium', label = 'Загрузка', className, style, ...rest }) {
  const px = typeof size === 'number' ? size : SIZES[size];
  return h('span', {
    role: 'status', 'aria-label': label, className: cx('bui-spinner', className),
    style: { width: px, height: px, ...style }, ...rest,
  }, h('svg', { viewBox: '0 0 24 24', fill: 'none', 'aria-hidden': 'true' },
    h('circle', { className: 'bui-spinner__track', cx: 12, cy: 12, r: 9, strokeWidth: 3 }),
    h('circle', { className: 'bui-spinner__arc', cx: 12, cy: 12, r: 9, strokeWidth: 3, strokeLinecap: 'round' })));
}

describe(Spinner, 'Индикатор загрузки неопределённой длительности. Цвет — currentColor.', {
  size: ["'small' | 'medium' | 'large' | number", "'medium'", 'Размер: 16 / 24 / 40 px или число в px.'],
  label: ['string', "'Загрузка'", 'Доступное имя (читается скринридером).'],
});
