import { h, cx } from '../react.js';
import { describe } from '../doc.js';

export function Divider({ orientation = 'horizontal', label, className, ...rest }) {
  return h('div', {
    role: 'separator',
    'aria-orientation': orientation,
    className: cx('bui-divider', `bui-divider--${orientation}`, label && 'bui-divider--labeled', className),
    ...rest,
  }, label && orientation === 'horizontal' ? h('span', { className: 'bui-divider__label' }, label) : null);
}

describe(Divider, 'Разделитель: горизонтальная или вертикальная линия, опционально с подписью.', {
  orientation: ["'horizontal' | 'vertical'", "'horizontal'", 'Направление линии.'],
  label: ['ReactNode', null, 'Подпись по центру (только горизонтальный).'],
  className: ['string', null, 'Дополнительный класс.'],
});
