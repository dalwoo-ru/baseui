import { h, cx } from '../react.js';
import { Icon } from '../icons.js';
import { describe } from '../doc.js';

export function Alert({ status = 'info', title, children, onClose, closeLabel = 'Закрыть', className, ...rest }) {
  return h('div', {
    role: status === 'error' || status === 'warning' ? 'alert' : 'status',
    className: cx('bui-alert', `bui-alert--${status}`, className), ...rest,
  },
    h(Icon, { name: status, size: 24, className: 'bui-alert__icon' }),
    h('div', { className: 'bui-alert__body' },
      title && h('div', { className: 'bui-alert__title' }, title),
      children && h('div', { className: 'bui-alert__text' }, children)),
    onClose && h('button', { type: 'button', className: 'bui-alert__close', 'aria-label': closeLabel, onClick: onClose },
      h(Icon, { name: 'close', size: 20 })));
}

describe(Alert, 'Встроенное сообщение для пользователя: информация, успех, предупреждение, ошибка.', {
  status: ["'info' | 'success' | 'warning' | 'error'", "'info'", 'Тип сообщения. error и warning озвучиваются сразу (role="alert").'],
  title: ['ReactNode', null, 'Заголовок.'],
  children: ['ReactNode', null, 'Текст сообщения.'],
  onClose: ['() => void', null, 'Если задан — показывается кнопка закрытия.'],
  closeLabel: ['string', "'Закрыть'", 'Доступное имя кнопки закрытия.'],
});
