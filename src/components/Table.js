import { h, cx } from '../react.js';
import { describe } from '../doc.js';

export function Table({ columns, rows, rowKey = 'id', caption, dense = false, className, ...rest }) {
  return h('div', { className: 'bui-table-wrap' },
    h('table', { className: cx('bui-table', dense && 'bui-table--dense', className), ...rest },
      caption && h('caption', { className: 'bui-visually-hidden' }, caption),
      h('thead', null, h('tr', null, columns.map((c) => h('th', { key: c.key, scope: 'col', style: { textAlign: c.align, width: c.width } }, c.header)))),
      h('tbody', null, rows.map((r, i) => h('tr', { key: r[rowKey] ?? i }, columns.map((c) =>
        h('td', { key: c.key, style: { textAlign: c.align } }, c.render ? c.render(r) : r[c.key])))))));
}
describe(Table, 'Tabular data.', {
  columns: ['Array<{ key: string; header: ReactNode; render?: (row) => ReactNode; align?: string; width?: number | string }>', null, 'Column definitions'],
  rows: ['object[]', null, 'Row data'],
  rowKey: ['string', "'id'", 'Field used as the React key'],
  caption: ['string', null, 'Accessible caption'],
  dense: ['boolean', 'false', 'Tighter row height'],
});
