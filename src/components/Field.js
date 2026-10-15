import { h, cx, useId } from '../react.js';
import { describe } from '../doc.js';

/** Label + control + caption/error for custom controls (the baseui text inputs have these built in). */
export function Field({ label, caption, status, required = false, children, className, ...rest }) {
  const id = useId();
  const captionId = `${id}-c`;
  const control = typeof children === 'function' ? children({ id, 'aria-describedby': caption ? captionId : undefined, 'aria-invalid': status === 'error' || undefined }) : children;
  return h('div', { className: cx('bui-field', status && `bui-field--${status}`, className), ...rest },
    label && h('label', { htmlFor: id, className: 'bui-field__label' }, label, required && h('span', { className: 'bui-field__req', 'aria-hidden': 'true' }, ' *')),
    control,
    caption && h('div', { id: captionId, className: 'bui-field__caption', role: status === 'error' ? 'alert' : undefined }, caption));
}
describe(Field, 'Wraps any control with a label and a caption. Pass a function as children to receive `id` and ARIA props.', {
  label: ['ReactNode', null, 'Field label (Field Label).'],
  caption: ['ReactNode', null, 'Hint or error text (Field Status).'],
  status: ["'error' | 'warning' | 'success'", null, 'Colors the caption and marks the control invalid for `error`.'],
  required: ['boolean', 'false', 'Show a required marker.'],
  children: ['ReactNode | (props) => ReactNode', null, 'The control, or a render function receiving `{ id, aria-describedby, aria-invalid }`.'],
});
