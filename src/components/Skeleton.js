import { h, cx } from '../react.js';
import { describe } from '../doc.js';

export function Skeleton({ variant = 'text', width, height, lines = 1, className, style, ...rest }) {
  if (variant === 'text' && lines > 1) {
    return h('div', { className: cx('bui-skeleton-lines', className), 'aria-hidden': 'true', style, ...rest },
      Array.from({ length: lines }, (_, i) => h('span', {
        key: i, className: 'bui-skeleton bui-skeleton--text', style: { width: i === lines - 1 ? '60%' : width },
      })));
  }
  return h('span', {
    'aria-hidden': 'true', className: cx('bui-skeleton', `bui-skeleton--${variant}`, className),
    style: { width, height, ...style }, ...rest,
  });
}

describe(Skeleton, 'Заглушка контента на время загрузки. Скрыта от скринридеров — сообщайте о загрузке через aria-busy на контейнере.', {
  variant: ["'text' | 'rect' | 'circle'", "'text'", 'Форма заглушки.'],
  width: ['number | string', null, 'Ширина.'],
  height: ['number | string', null, 'Высота (для rect и circle).'],
  lines: ['number', '1', 'Количество строк для variant="text"; последняя короче.'],
});
