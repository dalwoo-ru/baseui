import { h, cx, useState } from '../react.js';
import { describe } from '../doc.js';

const HEADING = { 1: '40', 2: '32', 3: '24', 4: '20', 5: '20', 6: '16' };
export function Heading({ level = 2, size, as, className, style, children, ...rest }) {
  const step = size || HEADING[level];
  const font = ['48', '40', '32', '28', '24', '20'].includes(step) ? `var(--baseui-Typography-Header-${step})` : `var(--baseui-Typography-Text-${step}-Semi-Bold)`;
  return h(as || `h${level}`, { className: cx('bui-heading', className), style: { font, ...style }, ...rest }, children);
}
describe(Heading, 'Section heading. `level` sets the semantic tag, `size` the visual style.', {
  level: ['1 | 2 | 3 | 4 | 5 | 6', '2', 'Semantic level (h1–h6).'],
  size: ["'48' | '40' | '32' | '28' | '24' | '20' | '16'", null, 'Visual size, independent of the level. Defaults by level.'],
  as: ['ElementType', null, 'Override the rendered tag.'],
});

const VARIANT = { large: 'Text-20-Regular', body: 'Text-16-Regular', label: 'Text-14-Semi-Bold', supporting: 'Text-14-Regular', caption: 'Text-12-Regular' };
const COLOR = { primary: 'color-text-primary', secondary: 'color-text-secondary', disabled: 'color-text-disabled', accent: 'color-text-accent', error: 'color-error', success: 'color-success', warning: 'color-warning' };
export function Text({ variant = 'body', color, weight, truncate = false, as = 'span', className, style, children, ...rest }) {
  return h(as, {
    className: cx('bui-text', truncate && 'bui-text--truncate', className),
    style: { font: `var(--baseui-Typography-${VARIANT[variant]})`, color: color ? `var(--baseui-${COLOR[color]})` : undefined, fontWeight: weight, ...style }, ...rest,
  }, children);
}
describe(Text, 'Body copy in the baseui type scale.', {
  variant: ["'large' | 'body' | 'label' | 'supporting' | 'caption'", "'body'", 'Type style.'],
  color: ["'primary' | 'secondary' | 'disabled' | 'accent' | 'error' | 'success' | 'warning'", null, 'Semantic text color.'],
  weight: ['number | string', null, 'Override the font weight.'],
  truncate: ['boolean', 'false', 'Single line with an ellipsis.'],
  as: ['ElementType', "'span'", 'HTML tag.'],
});

export function Link({ href, external = false, underline = 'hover', className, children, ...rest }) {
  return h('a', {
    href, className: cx('bui-link', `bui-link--${underline}`, className),
    ...(external && { target: '_blank', rel: 'noopener noreferrer' }), ...rest,
  }, children);
}
describe(Link, 'Inline or standalone hyperlink in the accent color.', {
  href: ['string', null, 'Destination.'],
  external: ['boolean', 'false', 'Open in a new tab with `rel="noopener noreferrer"`.'],
  underline: ["'hover' | 'always' | 'none'", "'hover'", 'When to underline.'],
});

export function Kbd({ keys, className, children, ...rest }) {
  const list = keys || (children ? [children] : []);
  return h('span', { className: cx('bui-kbd-group', className), ...rest },
    list.map((k, i) => h('kbd', { key: i, className: 'bui-kbd' }, k)));
}
describe(Kbd, 'Keyboard key or shortcut.', {
  keys: ['string[]', null, 'Keys of a combination, rendered as separate caps: `["⌘", "K"]`.'],
  children: ['ReactNode', null, 'A single key.'],
});

export function Code({ className, children, ...rest }) {
  return h('code', { className: cx('bui-code', className), ...rest }, children);
}
describe(Code, 'Inline code.', { children: ['ReactNode', null, 'Code text.'] });

export function CodeBlock({ code, language, copyLabel = 'Copy', copiedLabel = 'Copied', className, ...rest }) {
  const [copied, setCopied] = useState(false);
  const copy = async () => {
    try { await navigator.clipboard.writeText(code); setCopied(true); setTimeout(() => setCopied(false), 1500); } catch { /* clipboard unavailable */ }
  };
  return h('div', { className: cx('bui-codeblock', className), ...rest },
    h('div', { className: 'bui-codeblock__bar' },
      h('span', { className: 'bui-codeblock__lang' }, language),
      h('button', { type: 'button', className: 'bui-codeblock__copy', onClick: copy }, copied ? copiedLabel : copyLabel)),
    h('pre', { tabIndex: 0 }, h('code', null, code)));
}
describe(CodeBlock, 'Multi-line code with a copy button.', {
  code: ['string', null, 'Source text.'],
  language: ['string', null, 'Language label shown in the header.'],
  copyLabel: ['string', "'Copy'", 'Copy button text.'],
  copiedLabel: ['string', "'Copied'", 'Text after copying.'],
});

export function Blockquote({ cite, className, children, ...rest }) {
  return h('figure', { className: cx('bui-quote', className), ...rest },
    h('blockquote', null, children), cite && h('figcaption', null, cite));
}
describe(Blockquote, 'A quotation with an optional source.', {
  cite: ['ReactNode', null, 'Author or source.'],
  children: ['ReactNode', null, 'Quoted text.'],
});

export function VisuallyHidden({ as = 'span', children, ...rest }) {
  return h(as, { className: 'bui-visually-hidden', ...rest }, children);
}
describe(VisuallyHidden, 'Hides content visually while keeping it available to screen readers.', {
  as: ['ElementType', "'span'", 'HTML tag.'],
});
