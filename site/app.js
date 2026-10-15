import { t as requireReact } from '../lib/react-BZJXY1be.js';
import { t as initDom, r as renderInto } from '../lib/react-18-D4o7zN8K.js';
import manifest from './manifest.js';
import { Button, TextField, Switch, List, ListItem } from '../src/base.js';
import { IconButton } from '../src/components/Button.js';
import { SegmentedControl } from '../src/components/SegmentedControl.js';
import { Slider } from '../src/components/Slider.js';
import { composeStory, StoryCanvas, Boundary } from './story.js';

const icons = await import('../lib/line-HpXc8B8J.js');

const React = requireReact();
const { createElement: h, useState, useEffect, useMemo, useRef, useContext, createContext, Fragment } = React;
const ThemeContext = createContext('light');
const ViewportContext = createContext('desktop');

/* ------------------------------------------------------------- page index */

const kebab = (s) => s.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
const stemOf = (file) => file.split('/').pop().replace(/\.stories.*$/, '').toLowerCase();

/** manifest (sections → items → children) → flat list of routable pages. */
const pages = [];
for (const { section, items } of manifest) {
  const add = (item, group) => pages.push({ section, group, title: item.title, slug: kebab(item.title), file: item.file, anchor: item.anchor, lead: item.lead });
  for (const item of items) {
    if (item.children) item.children.forEach((c) => add(c, item.title));
    else add(item);
  }
}
const routeOf = (p) => `#/${p.section.toLowerCase()}/${p.slug}`;

/* ------------------------------------------------------------------ utils */

const esc = (s) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
const inline = (s) => esc(s).replace(/`([^`]+)`/g, '<code>$1</code>').replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>');
function markdown(src = '') {
  return src.trim().split(/\n\s*\n/).map((b) => {
    const lines = b.split('\n');
    if (lines.every((l) => /^\s*[-*]\s+/.test(l)))
      return '<ul>' + lines.map((l) => `<li>${inline(l.replace(/^\s*[-*]\s+/, ''))}</li>`).join('') + '</ul>';
    return `<p>${inline(lines.join(' '))}</p>`;
  }).join('');
}
const Md = ({ text, className = 'prose' }) =>
  text ? h('div', { className, dangerouslySetInnerHTML: { __html: markdown(text) } }) : null;

const store = {
  get(k, d) { try { return localStorage.getItem(k) ?? d; } catch { return d; } },
  set(k, v) { try { localStorage.setItem(k, v); } catch { /* storage unavailable */ } },
};

/* ------------------------------------------------- component registry (UI) */

const modules = new Map();
const loadModule = (file) => {
  if (!modules.has(file)) modules.set(file, import(file));
  return modules.get(file);
};
const ui = { Button, TextField, Switch };

/* ---------------------------------------------------------------- controls */

function Control({ name, spec, value, onChange, args }) {
  if (spec.if && args[spec.if.arg] !== spec.if.eq) return null;
  const { Switch, TextField } = ui;
  const type = typeof spec.control === 'string' ? spec.control : spec.control?.type;
  let input = null;
  if (type === 'boolean') {
    input = h(Switch, { checked: !!value, onCheckedChange: onChange, 'aria-label': name });
  } else if (type === 'inline-radio' || type === 'radio' || type === 'select') {
    const options = spec.options || [];
    input = h(SegmentedControl, {
      size: 'small', label: name, value: String(value), onValueChange: (v) => onChange(options.find((o) => String(o) === v) ?? v),
      items: options.map((o) => ({ value: String(o), label: String(o) })),
    });
  } else if (type === 'range') {
    const { min = 0, max = 100, step = 1 } = spec.control;
    input = h(Slider, { min, max, step, value: value ?? min, label: name, showValue: true, onValueChange: onChange });
  } else if (type === 'number') {
    input = h(TextField, {
      label: name, type: 'number', size: 'small', value: value ?? '',
      onChange: (e) => onChange(e.target.value === '' ? undefined : Number(e.target.value)),
    });
  } else if (type === 'color') {
    input = h('div', { className: 'color-row' },
      h(TextField, { label: name, size: 'small', value: value ?? '', onChange: (e) => onChange(e.target.value || undefined) }),
      h('input', { type: 'color', className: 'swatch', 'aria-label': name, value: /^#[0-9a-f]{6}$/i.test(value || '') ? value : '#575df6', onChange: (e) => onChange(e.target.value) }));
  } else if (type === 'text') {
    input = h(TextField, { label: name, size: 'small', value: value ?? '', onChange: (e) => onChange(e.target.value) });
  }
  if (!input) return null;
  const inlineLabel = type === 'boolean' || type === 'inline-radio' || type === 'radio' || type === 'select';
  return h('div', { className: 'control' },
    inlineLabel && h('code', { className: 'control-name' }, name),
    input);
}

function Controls({ meta, args, setOverride, reset }) {
  const items = Object.entries(meta.argTypes || {}).filter(([, s]) => s.control);
  if (!items.length) return null;
  return h('div', { className: 'controls' },
    h('div', { className: 'controls-title' }, 'Controls'),
    items.map(([name, spec]) =>
      h(Control, { key: name, name, spec, args, value: args[name], onChange: (v) => setOverride(name, v) })),
    h(ui.Button, { variant: 'secondary', size: 'xsmall', onClick: reset }, 'Reset'));
}

/* ------------------------------------------------------------------ blocks */

function Code({ source }) {
  const [open, setOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  if (!source || source.trim() === '{}') return null;
  const copy = async () => {
    try { await navigator.clipboard.writeText(source); setCopied(true); setTimeout(() => setCopied(false), 1500); } catch { /* clipboard unavailable */ }
  };
  return h('div', { className: 'code' },
    h('div', { className: 'code-actions' },
      h(ui.Button, { variant: 'secondary', size: 'xsmall', onClick: () => setOpen(!open) }, open ? 'Hide code' : 'Show code'),
      open && h(ui.Button, { variant: 'secondary', size: 'xsmall', onClick: copy }, copied ? 'Copied' : 'Copy')),
    open && h('pre', null, h('code', null, source)));
}

/** Quick links to the examples of a long page. */
function Toc({ items }) {
  const go = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth', block: 'start' });
  };
  return h('nav', { className: 'toc', 'aria-label': 'On this page' },
    items.map((s) => h('button', { key: s.id, type: 'button', onClick: () => go(s.id) }, s.name)));
}

function Example({ meta, story, name, id, controls, overlay, file, exportName }) {
  const viewport = useContext(ViewportContext);
  const base = useMemo(() => composeStory(meta, story).args, [meta, story]);
  const [overrides, setOverrides] = useState({});
  const current = { ...base, ...overrides };
  const parameters = composeStory(meta, story).parameters;
  const showControls = controls && !(parameters.controls && parameters.controls.disable);
  const doc = parameters.docs || {};
  const gated = overlay || /defaultOpen/.test((doc.source && doc.source.originalSource) || '');
  const [shown, setShown] = useState(!gated);
  const [nonce, setNonce] = useState(0);
  const narrow = viewport === 'mobile';
  return h('section', { className: 'example', id },
    h('h3', null, name),
    h('div', { className: 'stage' },
      showControls && h(Controls, { meta, args: current, setOverride: (k, v) => setOverrides((o) => ({ ...o, [k]: v })), reset: () => setOverrides({}) }),
      h('div', { className: 'canvas' + (narrow ? ' canvas--mobile' : '') },
        shown
          ? h(Boundary, { key: nonce }, h(StoryCanvas, { meta, story, args: current }))
          : h('div', { className: 'gate' }, 'This example opens on top of the page.'),
        gated && h('div', { className: 'gate-actions' },
          !shown && h(ui.Button, { size: 'small', onClick: () => setShown(true) }, 'Open example'),
          shown && h(ui.Button, { variant: 'secondary', size: 'xsmall', onClick: () => setNonce(nonce + 1) }, 'Reopen'),
          shown && h(ui.Button, { variant: 'text', size: 'xsmall', onClick: () => setShown(false) }, 'Hide')))),
    h(Code, { source: doc.source && doc.source.originalSource }));
}

const TYPE_CLEAN = (t) => (t ? t.raw || t.name : '');
const HIDDEN_PROPS = new Set(['ref', 'className', 'style', 'id', 'data-testid', 'contentClassName', 'portalContainer', 'keepMounted', 'initialFocus', 'finalFocus', 'name', 'form', 'labelId', 'captionId', 'focusRef', 'cellRef', 'onBlur']);
/** One short fragment: first sentence, no @tags, no trailing period. */
const brief = (text = '', max = 110) => text.replace(/@\w+.*$/s, '').trim().split(/(?<=[.!?])\s/)[0].replace(/\s+/g, ' ').replace(/\.$/, '').slice(0, max);
function PropsTable({ component }) {
  const props = component && component.__docgenInfo && component.__docgenInfo.props;
  const rows = props ? Object.entries(props).filter(([n, p]) => !HIDDEN_PROPS.has(n) && !/@internal/.test(p.description || '') && brief(p.description)) : [];
  if (!rows.length) return null;
  return h('section', { className: 'section' },
    h('h2', null, 'Props'),
    h('div', { className: 'table-wrap' },
      h('table', null,
        h('thead', null, h('tr', null, ['Prop', 'Type', 'Default', 'Description'].map((t) => h('th', { key: t }, t)))),
        h('tbody', null, rows.map(([name, p]) =>
          h('tr', { key: name },
            h('td', null, h('code', null, name), p.required && h('span', { className: 'req', title: 'Required' }, '*')),
            h('td', null, h('code', { className: 'type' }, TYPE_CLEAN(p.tsType))),
            h('td', null, p.defaultValue ? h('code', null, p.defaultValue.value) : '—'),
            h('td', null, h(Md, { text: brief(p.description), className: 'prose small' }))))))));
}

/* ------------------------------------------------------------------- pages */

function Page({ entry }) {
  const [state, setState] = useState(null);
  useEffect(() => {
    let alive = true;
    setState(null);
    loadModule(entry.file).then((m) => alive && setState(m), (e) => alive && setState({ error: e }));
    return () => { alive = false; };
  }, [entry]);

  const stem = stemOf(entry.file);
  useEffect(() => {
    if (!state || state.error) return;
    const t = setTimeout(() => {
      const el = entry.anchor && document.getElementById(`${stem}--${entry.anchor}`);
      if (el) el.scrollIntoView({ block: 'start' });
    }, 60);
    return () => clearTimeout(t);
  }, [state, entry, stem]);

  if (!state) return h('div', { className: 'loading' }, 'Loading…');
  if (state.error) return h('div', { className: 'error' }, String(state.error));
  const meta = state.default;
  const humanize = (k) => k.replace(/([a-z0-9])([A-Z])/g, '$1 $2');
  const stories = (state.__namedExportsOrder || Object.keys(state))
    .filter((k) => k !== 'default' && k !== '__namedExportsOrder' && k !== 'page' && state[k])
    .map((k) => ({ key: kebab(humanize(k)), exportName: k, id: `${stem}--${kebab(humanize(k))}`, name: state[k].name || humanize(k), story: state[k] }));
  const playground = stories.find((s) => s.key === 'playground');
  const rest = stories.filter((s) => s !== playground);
  const desc = meta.parameters && meta.parameters.docs && meta.parameters.docs.description;
  const isFoundation = entry.section === 'Foundations';
  const overlay = /^(Dialog|Alert Dialog)$/.test(entry.title);

  return h('article', { className: 'page' },
    h('div', { className: 'eyebrow' }, entry.group ? `${entry.section} · ${entry.group}` : entry.section),
    h('h1', null, entry.title),
    h(Md, { text: entry.lead || brief(desc && desc.component, 240) + '.', className: 'prose lead' }),
    state.page && h(state.page),
    stories.length > 4 && h(Toc, { items: stories }),
    playground && h(Example, { key: entry.slug + 'pg', meta, story: playground.story, name: playground.name, id: playground.id, controls: true, overlay, file: entry.file, exportName: playground.exportName }),
    !isFoundation && h(PropsTable, { component: meta.component }),
    rest.length > 0 && h('section', { className: 'section' },
      !isFoundation && h('h2', null, 'Examples'),
      rest.map((s) => h(Example, { key: entry.slug + s.id, meta, story: s.story, name: s.name, id: s.id, controls: false, overlay, file: entry.file, exportName: s.exportName }))));
}

function Home() {
  const sections = manifest.map((s) => ({
    ...s,
    cards: s.items.map((i) => i.children ? { title: i.title, page: pages.find((p) => p.title === i.children[0].title && p.group === i.title), count: i.children.length } : { title: i.title, page: pages.find((p) => p.title === i.title && !p.group) }),
  }));
  return h('article', { className: 'page' },
    h('div', { className: 'eyebrow' }, 'Design system'),
    h('h1', null, 'baseui'),
    h('p', { className: 'prose lead' }, 'A universal design system: foundations and components built on Base UI. Light and dark themes switch with the ', h('code', null, 'data-theme'), ' attribute.'),
    sections.map((s) => h('section', { className: 'section', key: s.section },
      h('h2', null, s.section),
      h('div', { className: 'cards' }, s.cards.map((c) =>
        h('a', { className: 'card', key: c.title, href: routeOf(c.page) }, h('span', null, c.title), c.count && h('small', null, `${c.count} pages`)))))));
}

/* -------------------------------------------------------------- navigation */

function Nav({ entry, query }) {
  const [open, setOpen] = useState({});
  const match = (t) => t.toLowerCase().includes(query);
  useEffect(() => { if (entry && entry.group) setOpen((o) => ({ ...o, [entry.group]: true })); }, [entry]);
  const go = (p) => () => { location.hash = routeOf(p); };
  const sections = manifest.map(({ section, items }) => ({
    section,
    shown: items.map((item) => {
      if (!item.children) return match(item.title) ? { item } : null;
      const kids = item.children.filter((c) => match(c.title) || match(item.title));
      return kids.length ? { item, kids } : null;
    }).filter(Boolean),
  })).filter((x) => x.shown.length > 0);
  return h('nav', { 'aria-label': 'Documentation' }, sections.map(({ section, shown }, i) =>
    h(List, { key: section, title: section, size: 'small', divider: i < sections.length - 1 },
      shown.map(({ item, kids }) => {
        if (!kids) {
          const p = pages.find((x) => x.title === item.title && !x.group);
          return h(ListItem, { key: item.title, active: entry === p, onClick: go(p) }, item.title);
        }
        return h(ListItem, {
          key: item.title,
          expanded: query ? true : !!open[item.title],
          onExpandedChange: (v) => setOpen((o) => ({ ...o, [item.title]: v })),
          items: kids.map((c) => {
            const p = pages.find((x) => x.title === c.title && x.group === item.title);
            return h(ListItem, { key: c.title, subitem: true, active: entry === p, onClick: go(p) }, c.title);
          }),
        }, item.title);
      }))));
}

/* --------------------------------------------------------------------- app */

let setMenu = () => {};
function useRoute() {
  const [hash, setHash] = useState(location.hash);
  useEffect(() => {
    const f = () => { setHash(location.hash); window.scrollTo(0, 0); document.getElementById('main')?.scrollTo(0, 0); setMenu(false); };
    window.addEventListener('hashchange', f);
    return () => window.removeEventListener('hashchange', f);
  }, []);
  const [, section, slug] = hash.split('/');
  return pages.find((p) => p.section.toLowerCase() === section && p.slug === slug) || null;
}

function App() {
  const entry = useRoute();
  const [theme, setTheme] = useState(() => store.get('baseui-theme', matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'));
  const [viewport, setViewport] = useState(() => (store.get('baseui-viewport', 'desktop') === 'mobile' ? 'mobile' : 'desktop'));
  const [q, setQ] = useState('');
  const [menu, _setMenu] = useState(false);
  setMenu = _setMenu;
  useEffect(() => { document.documentElement.setAttribute('data-theme', theme); store.set('baseui-theme', theme); }, [theme]);
  useEffect(() => { store.set('baseui-viewport', viewport); }, [viewport]);
  useEffect(() => { document.title = entry ? `${entry.title} — baseui` : 'baseui'; }, [entry]);
  const { Button, TextField } = ui;
  const dark = theme === 'dark';

  const skip = (e) => { e.preventDefault(); const m = document.getElementById('main'); m.setAttribute('tabindex', '-1'); m.focus(); };
  return h(ThemeContext.Provider, { value: theme },
    h(ViewportContext.Provider, { value: entry && entry.section === 'Components' ? viewport : 'desktop' },
      h('div', { className: 'shell' + (menu ? ' menu-open' : '') },
        h('a', { className: 'skip', href: '#main', onClick: skip }, 'Skip to content'),
        h('aside', { className: 'side' },
          h('div', { className: 'side-head' },
            h('a', { className: 'brand', href: '#/' }, 'baseui'),
            h(IconButton, { variant: 'ghost', size: 'sm', label: dark ? 'Switch to light theme' : 'Switch to dark theme', icon: h(dark ? icons.Sun : icons.Moon01, { size: 20 }), onClick: () => setTheme(dark ? 'light' : 'dark') })),
          h('div', { className: 'search' }, h(TextField, {
            label: 'Search', floatingLabel: false, size: 'small', value: q, clearable: true, actionLabel: 'Clear search', startIcon: h(icons.SearchSm, { size: 24 }),
            onChange: (e) => setQ(e.target.value),
          })),
          h(Nav, { entry, query: q.trim().toLowerCase() })),
        h('div', { className: 'scrim', onClick: () => _setMenu(false) }),
        h('main', { id: 'main' },
          h('div', { className: 'topbar' }, h(Button, { variant: 'secondary', size: 'xsmall', onClick: () => _setMenu(!menu) }, 'Menu'), h('a', { href: '#/', className: 'brand' }, 'baseui')),
          entry && entry.section === 'Components' && h('div', { className: 'pagebar' },
            h(SegmentedControl, { size: 'small', label: 'Preview width', value: viewport, onValueChange: setViewport, items: [{ value: 'desktop', label: 'Desktop' }, { value: 'mobile', label: 'Mobile' }] })),
          entry ? h(Page, { entry, key: entry.slug }) : h(Home)))));
}

await initDom();
renderInto(h(App), document.getElementById('root'));
