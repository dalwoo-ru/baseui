import { h, cx } from '../react.js';
import { describe } from '../doc.js';

export function AspectRatio({ ratio = 16 / 9, radius = 'radius-16', children, className, style, ...rest }) {
  return h('div', {
    className: cx('bui-aspect', className),
    style: { aspectRatio: String(ratio).replace(':', ' / '), borderRadius: radius ? `var(--baseui-${radius})` : undefined, ...style }, ...rest,
  }, children);
}
describe(AspectRatio, 'Keeps its content at a fixed width-to-height ratio. Children fill the box.', {
  ratio: ['number | string', '16 / 9', 'Width divided by height, e.g. `1`, `4 / 3` or `"16:9"`.'],
  radius: ['string', "'radius-16'", 'Radius token name (without the `--baseui-` prefix); empty for square corners.'],
  children: ['ReactNode', null, 'Content that fills the box (image, video, map).'],
});
