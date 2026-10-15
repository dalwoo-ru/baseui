import { h, cx } from '../react.js';
import { describe } from '../doc.js';

export function Card({ variant = 'outlined', padding = 'medium', title, subtitle, actions, footer, as = 'section', children, className, ...rest }) {
  const hasHeader = title || subtitle || actions;
  return h(as, { className: cx('bui-card', `bui-card--${variant}`, `bui-card--pad-${padding}`, className), ...rest },
    hasHeader && h('header', { className: 'bui-card__header' },
      h('div', { className: 'bui-card__heading' },
        title && h('div', { className: 'bui-card__title' }, title),
        subtitle && h('div', { className: 'bui-card__subtitle' }, subtitle)),
      actions && h('div', { className: 'bui-card__actions' }, actions)),
    children != null && h('div', { className: 'bui-card__body' }, children),
    footer && h('footer', { className: 'bui-card__footer' }, footer));
}

describe(Card, 'Контейнер для группировки связанного контента: заголовок, тело, подвал.', {
  variant: ["'outlined' | 'filled' | 'raised'", "'outlined'", 'Оформление: рамка, заливка или тень.'],
  padding: ["'none' | 'small' | 'medium' | 'large'", "'medium'", 'Внутренние отступы.'],
  title: ['ReactNode', null, 'Заголовок карточки.'],
  subtitle: ['ReactNode', null, 'Подзаголовок.'],
  actions: ['ReactNode', null, 'Действия в правой части шапки.'],
  footer: ['ReactNode', null, 'Подвал, отделён линией.'],
  as: ['ElementType', "'section'", 'HTML-тег корневого элемента.'],
});
