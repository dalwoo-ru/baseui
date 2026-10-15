import { h, cx, useRef, useState, useId } from '../react.js';
import { describe } from '../doc.js';

export function FileInput({ onFilesChange, accept, multiple = false, label = 'Choose a file', hint, disabled = false, className, ...rest }) {
  const input = useRef(null);
  const id = useId();
  const [names, setNames] = useState([]);
  const [drag, setDrag] = useState(false);
  const take = (files) => { const list = [...files]; setNames(list.map((f) => f.name)); onFilesChange && onFilesChange(list); };
  return h('div', { className: cx('bui-file', drag && 'bui-file--drag', disabled && 'bui-file--disabled', className), ...rest },
    h('input', { ref: input, id, type: 'file', accept, multiple, disabled, className: 'bui-visually-hidden', onChange: (e) => take(e.target.files) }),
    h('label', {
      htmlFor: id, className: 'bui-file__drop',
      onDragOver: (e) => { e.preventDefault(); !disabled && setDrag(true); }, onDragLeave: () => setDrag(false),
      onDrop: (e) => { e.preventDefault(); setDrag(false); !disabled && take(e.dataTransfer.files); },
    }, h('span', { className: 'bui-file__title' }, names.length ? names.join(', ') : label), hint && !names.length && h('span', { className: 'bui-file__hint' }, hint)));
}
describe(FileInput, 'Select files by clicking or dropping them onto the area.', {
  onFilesChange: ['(files: File[]) => void', null, 'Called with the chosen files.'],
  accept: ['string', null, 'Accepted types, as for `<input type="file">`.'],
  multiple: ['boolean', 'false', 'Allow several files.'],
  label: ['string', "'Choose a file'", 'Prompt text.'],
  hint: ['ReactNode', null, 'Secondary hint, e.g. size limit.'],
  disabled: ['boolean', 'false', 'Disable the input.'],
});
