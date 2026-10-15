import { h, cx } from '../react.js';
import { describe } from '../doc.js';

export function EmptyState({ icon, title, description, action, className, ...rest }) {
  return h('div', { className: cx('bui-empty', className), ...rest },
    icon && h('div', { className: 'bui-empty__icon', 'aria-hidden': 'true' }, icon),
    title && h('div', { className: 'bui-empty__title' }, title),
    description && h('p', { className: 'bui-empty__text' }, description),
    action && h('div', { className: 'bui-empty__action' }, action));
}

describe(EmptyState, 'Пустое состояние: когда нечего показать (нет данных, пустой поиск, первый запуск).', {
  icon: ['ReactNode', null, 'Иконка или иллюстрация.'],
  title: ['ReactNode', null, 'Заголовок.'],
  description: ['ReactNode', null, 'Пояснение и что делать дальше.'],
  action: ['ReactNode', null, 'Основное действие (обычно Button).'],
});
