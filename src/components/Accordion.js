import { h, cx, useId, useControllable } from '../react.js';
import { Icon } from '../icons.js';
import { describe } from '../doc.js';

export function Accordion({ items, multiple = false, value, defaultValue = [], onValueChange, className, ...rest }) {
  const [open, setOpen] = useControllable(value, defaultValue, onValueChange);
  const uid = useId();
  const toggle = (v) => {
    const isOpen = open.includes(v);
    setOpen(isOpen ? open.filter((x) => x !== v) : multiple ? [...open, v] : [v]);
  };
  return h('div', { className: cx('bui-accordion', className), ...rest },
    items.map((item) => {
      const isOpen = open.includes(item.value);
      return h('div', { key: item.value, className: 'bui-accordion__item', 'data-open': isOpen || undefined },
        h('h3', { className: 'bui-accordion__heading' },
          h('button', {
            type: 'button', className: 'bui-accordion__trigger', id: `${uid}-t-${item.value}`,
            'aria-expanded': isOpen, 'aria-controls': `${uid}-p-${item.value}`, disabled: item.disabled,
            onClick: () => toggle(item.value),
          }, h('span', null, item.title), h(Icon, { name: 'chevronDown', size: 20, className: 'bui-accordion__chevron' }))),
        h('div', { className: 'bui-accordion__panel', 'data-open': isOpen || undefined },
          h('div', {
            role: 'region', id: `${uid}-p-${item.value}`, 'aria-labelledby': `${uid}-t-${item.value}`,
            inert: !isOpen, className: 'bui-accordion__content',
          }, h('div', { className: 'bui-accordion__inner' }, item.content))));
    }));
}

describe(Accordion, 'Раскрывающиеся секции. По умолчанию открыта одна секция; multiple разрешает несколько.', {
  items: ['Array<{ value: string; title: ReactNode; content: ReactNode; disabled?: boolean }>', null, 'Секции.'],
  multiple: ['boolean', 'false', 'Разрешить одновременно открытые секции.'],
  value: ['string[]', null, 'Открытые секции (контролируемый режим).'],
  defaultValue: ['string[]', '[]', 'Открытые секции по умолчанию.'],
  onValueChange: ['(value: string[]) => void', null, 'Вызывается при раскрытии/сворачивании.'],
});
