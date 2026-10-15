import { h, cx } from '../react.js';
import { describe } from '../doc.js';

export function MetadataList({ items, orientation = 'horizontal', className, ...rest }) {
  return h('dl', { className: cx('bui-meta', `bui-meta--${orientation}`, className), ...rest },
    items.map((it) => h('div', { key: it.label, className: 'bui-meta__item' }, h('dt', null, it.label), h('dd', null, it.value))));
}
describe(MetadataList, 'Label–value pairs for details, e.g. on a record or order page.', {
  items: ['Array<{ label: ReactNode; value: ReactNode }>', null, 'Pairs (Metadata List Item).'],
  orientation: ["'horizontal' | 'vertical'", "'horizontal'", 'Label beside the value, or above it.'],
});
