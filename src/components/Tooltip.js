import { h, cx, useId, useState, useRef, useEffect, React } from '../react.js';
import { describe } from '../doc.js';

export function Tooltip({ content, placement = 'top', delay = 300, children, className, ...rest }) {
  const [open, setOpen] = useState(false);
  const id = useId();
  const timer = useRef();
  const show = () => { clearTimeout(timer.current); timer.current = setTimeout(() => setOpen(true), delay); };
  const hide = () => { clearTimeout(timer.current); setOpen(false); };
  useEffect(() => () => clearTimeout(timer.current), []);
  useEffect(() => {
    if (!open) return undefined;
    const onKey = (e) => e.key === 'Escape' && hide();
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [open]);

  const child = React.isValidElement(children)
    ? React.cloneElement(children, { 'aria-describedby': open ? id : undefined })
    : children;
  return h('span', {
    className: cx('bui-tooltip', className), onMouseEnter: show, onMouseLeave: hide, onFocus: show, onBlur: hide, ...rest,
  }, child,
    open && h('span', { role: 'tooltip', id, className: 'bui-tooltip__bubble', 'data-placement': placement }, content));
}

describe(Tooltip, 'Короткая подсказка по наведению и фокусу. Закрывается по Escape. Позиционируется рядом с элементом без портала, поэтому может обрезаться контейнером с overflow: hidden.', {
  content: ['ReactNode', null, 'Текст подсказки. Не кладите сюда интерактивные элементы.'],
  placement: ["'top' | 'bottom' | 'left' | 'right'", "'top'", 'Сторона появления.'],
  delay: ['number', '300', 'Задержка показа, мс.'],
  children: ['ReactElement', null, 'Элемент-триггер (получает aria-describedby).'],
});
