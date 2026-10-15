import { h, cx } from '../react.js';
import { describe } from '../doc.js';

const sp = (n) => (n === undefined ? undefined : `var(--baseui-spacing-${n})`);
const ALIGN = { start: 'flex-start', end: 'flex-end', center: 'center', stretch: 'stretch', baseline: 'baseline' };
const JUSTIFY = { start: 'flex-start', end: 'flex-end', center: 'center', between: 'space-between', around: 'space-around' };

export function Stack({ direction = 'column', gap = 16, align, justify, wrap = false, as = 'div', className, style, children, ...rest }) {
  return h(as, {
    className: cx('bui-stack', className),
    style: { flexDirection: direction, gap: sp(gap), alignItems: ALIGN[align], justifyContent: JUSTIFY[justify], flexWrap: wrap ? 'wrap' : undefined, ...style }, ...rest,
  }, children);
}
export const HStack = (props) => h(Stack, { direction: 'row', align: 'center', ...props });
export const VStack = (props) => h(Stack, { direction: 'column', ...props });

export function Center({ as = 'div', className, children, ...rest }) {
  return h(as, { className: cx('bui-center', className), ...rest }, children);
}

export function Grid({ columns = 2, gap = 16, as = 'div', className, style, children, ...rest }) {
  const template = typeof columns === 'number' ? `repeat(${columns}, minmax(0, 1fr))` : columns;
  return h(as, { className: cx('bui-grid', className), style: { gridTemplateColumns: template, gap: sp(gap), ...style }, ...rest }, children);
}

export function Section({ as = 'section', padding = 24, maxWidth, className, style, children, ...rest }) {
  return h(as, { className: cx('bui-section', className), style: { padding: sp(padding), maxWidth, ...style }, ...rest }, children);
}

const GAP = ['`0` · `4` · `8` · `12` · `16` · `20` · `24` · `32` · `40` · `48` · `64` · `80`', null];
describe(Stack, 'Flex container with a consistent gap. `HStack` and `VStack` are shortcuts for row and column.', {
  direction: ["'row' | 'column'", "'column'", 'Main axis.'],
  gap: ['number', '16', 'Gap in px, one of the spacing tokens: 0, 4, 8, 12, 16, 20, 24, 32, 40, 48, 64, 80.'],
  align: ["'start' | 'center' | 'end' | 'stretch' | 'baseline'", null, 'Cross-axis alignment.'],
  justify: ["'start' | 'center' | 'end' | 'between' | 'around'", null, 'Main-axis distribution.'],
  wrap: ['boolean', 'false', 'Allow items to wrap.'],
  as: ['ElementType', "'div'", 'HTML tag.'],
});
describe(HStack, 'Row stack, vertically centered by default.', { gap: ['number', '16', 'Gap in px (spacing token).'] });
describe(VStack, 'Column stack.', { gap: ['number', '16', 'Gap in px (spacing token).'] });
describe(Center, 'Centers its children horizontally and vertically.', { as: ['ElementType', "'div'", 'HTML tag.'] });
describe(Grid, 'CSS grid with equal columns or a custom template.', {
  columns: ['number | string', '2', 'Number of equal columns or a `grid-template-columns` string.'],
  gap: ['number', '16', 'Gap in px (spacing token).'],
});
describe(Section, 'Padded block with an optional maximum width, rendered as a `section`.', {
  padding: ['number', '24', 'Padding in px (spacing token).'],
  maxWidth: ['number | string', null, 'Maximum width.'],
});
