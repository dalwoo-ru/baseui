// Shared helpers for Foundations pages: reads tokens.css (single source of truth) and renders common blocks.
import { h, useState, useEffect, Fragment } from '../react.js';

let cache;
/** Parses tokens.css into sections → groups → tokens. */
export function loadTokens() {
  cache ||= fetch(new URL('../../tokens.css', import.meta.url)).then((r) => r.text()).then(parse);
  return cache;
}

function parse(css) {
  css = css.replace(/@font-face\{[^}]*\}/g, '').replace(/@media[^{]*\{[^{}]*\{[^}]*\}\s*\}/g, '');
  const parts = css.split(/\/\*\s*-{5,}\s*(.+?)\s*-{5,}\s*\*\/|\/\*\s*(Typography)\s*\*\//);
  const sections = [];
  for (let i = 1; i < parts.length; i += 3) {
    const title = (parts[i] || parts[i + 1]).replace(/\s*\(.*\)$/, '');
    const body = parts[i + 2];
    const blocks = [...body.matchAll(/([^{}]+)\{([^{}]*)\}/g)].map((m) => ({ selector: m[1].trim(), body: m[2] }));
    sections.push({ title, blocks });
  }
  return sections.map(({ title, blocks }) => {
    const groupsOf = (body) => {
      const groups = [];
      let current = { title: '', tokens: [] };
      for (const line of body.split('\n')) {
        const c = line.match(/^\s*\/\*\s*(.+?)\s*\*\/\s*$/);
        const t = line.match(/^\s*--baseui-([\w-]+):\s*(.+?);\s*$/);
        if (c) { if (current.tokens.length) groups.push(current); current = { title: c[1], tokens: [] }; }
        else if (t) current.tokens.push({ name: t[1], value: t[2] });
      }
      if (current.tokens.length) groups.push(current);
      return groups;
    };
    if (title === 'Color') {
      const light = groupsOf(blocks.find((b) => b.selector.includes('light')).body);
      const dark = groupsOf(blocks.find((b) => b.selector.includes('dark')).body);
      const darkBy = Object.fromEntries(dark.flatMap((g) => g.tokens).map((t) => [t.name, t.value]));
      return { title, themed: true, groups: light.map((g) => ({ ...g, tokens: g.tokens.map((t) => ({ name: t.name, light: t.value, dark: darkBy[t.name] })) })) };
    }
    const tokens = blocks.flatMap((b) => groupsOf(b.body).flatMap((g) => g.tokens));
    return { title, themed: false, groups: [{ title: '', tokens }] };
  });
}

export function useTokens() {
  const [data, setData] = useState(null);
  useEffect(() => { loadTokens().then(setData); }, []);
  return data;
}
export const section = (title, data) => data && data.find((s) => s.title === title);

/* ------------------------------------------------------------- doc blocks */

export const Block = ({ title, id, children }) =>
  h('section', { className: 'doc-block', id }, title && h('h2', null, title), children);

export function Swatch({ name, size = 40 }) {
  return h('span', { className: 'tok-swatch', style: { width: size, height: size, background: `var(--baseui-${name})` }, 'aria-hidden': 'true' });
}

export function TokenTable({ tokens, themed, preview }) {
  return h('div', { className: 'table-wrap' },
    h('table', { className: 'token-table' },
      h('thead', null, h('tr', null,
        preview && h('th', null, ''), h('th', null, 'Token'),
        themed ? h(Fragment, null, h('th', null, 'Light'), h('th', null, 'Dark')) : h('th', null, 'Value'))),
      h('tbody', null, tokens.map((t) => h('tr', { key: t.name },
        preview && h('td', { className: 'tok-preview' }, preview(t)),
        h('td', null, h('code', null, `--baseui-${t.name}`)),
        themed ? h(Fragment, null, h('td', null, h('code', { className: 'val' }, t.light)), h('td', null, h('code', { className: 'val' }, t.dark)))
          : h('td', null, h('code', { className: 'val' }, t.value)))))));
}

export const Loading = () => h('div', { className: 'loading' }, 'Loading tokens…');
