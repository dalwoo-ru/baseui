import { h, cx, useState, useEffect } from '../react.js';
import { describe } from '../doc.js';

const loaders = {
  outline: () => import('../../lib/line-HpXc8B8J.js'),
  filled: () => import('../../lib/solid-BKvSM0yD.js'),
};
const catalogs = {};
export const loadIcons = (variant) => (catalogs[variant] ||= loaders[variant]());

export function Icon({ name, variant = 'outline', size = 24, strokeWidth, label, className, ...rest }) {
  const [catalog, setCatalog] = useState(null);
  useEffect(() => { let alive = true; loadIcons(variant).then((m) => alive && setCatalog(m)); return () => { alive = false; }; }, [variant]);
  const Glyph = catalog && catalog[name];
  const a11y = label ? { role: 'img', 'aria-label': label } : { 'aria-hidden': 'true' };
  if (!Glyph) return h('span', { className: cx('bui-icon', className), style: { width: size, height: size }, ...rest });
  return h(Glyph, { size, className: cx('bui-icon', className), ...(variant === 'outline' && strokeWidth ? { strokeWidth } : {}), ...a11y, ...rest });
}
describe(Icon, 'Renders an icon from the baseui catalog by name. The catalog loads on first use.', {
  name: ['string', null, 'Icon name from the catalog, e.g. `Heart` or `SearchLg` (see Foundations → Icons).'],
  variant: ["'outline' | 'filled'", "'outline'", 'Outline or filled style.'],
  size: ['number', '24', 'Width and height in px.'],
  strokeWidth: ['number', '2', 'Stroke width, outline only.'],
  label: ['string', null, 'Accessible name; without it the icon is decorative (`aria-hidden`).'],
});
