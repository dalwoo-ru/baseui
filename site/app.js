import { t as requireReact } from '../lib/react-BZJXY1be.js';
import { t as initDom, r as renderInto } from '../lib/react-18-D4o7zN8K.js';
import manifest from './manifest.js';

const React = requireReact();
const { createElement: h, useState, useEffect, useMemo, useRef, Fragment } = React;

/* ------------------------------------------------------------------ utils */

const GROUPS = [
  ['Foundations', 'Основы'],
  ['Components', 'Компоненты'],
  ['RHF', 'React Hook Form'],
];
const byGroup = (g) => manifest.filter((c) => c.group === g);
const routeOf = (c) => `#/${c.group.toLowerCase()}/${c.slug}`;

const esc = (s) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
function inline(s) {
  return esc(s)
    .replace(/`([^`]+)`/g, '<code>$1</code>')
    .replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>');
}
function markdown(src = '') {
  const blocks = src.trim().split(/\n\s*\n/);
  return blocks
    .map((b) => {
      const lines = b.split('\n');
      if (lines.every((l) => /^\s*[-*]\s+/.test(l)))
        return '<ul>' + lines.map((l) => `<li>${inline(l.replace(/^\s*[-*]\s+/, ''))}</li>`).join('') + '</ul>';
      return `<p>${inline(lines.join(' '))}</p>`;
    })
    .join('');
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
const ui = {};
async function loadUi() {
  const pick = async (slug) => (await loadModule(manifest.find((c) => c.slug === slug).file)).default.component;
  [ui.Button, ui.TextField, ui.Switch] = await Promise.all([pick('button'), pick('textfield'), pick('switch')]);
}

/* ----------------------------------------------------------------- stories */

function composeStory(meta, story) {
  const args = { ...meta.args, ...story.args };
  const decorators = [...(story.decorators || []), ...(meta.decorators || [])];
  const render = story.render || meta.render;
  return { args, decorators, render, parameters: { ...meta.parameters, ...story.parameters } };
}

function StoryCanvas({ meta, story, args }) {
  const ref = useRef(args);
  ref.current = args;
  const Inner = useMemo(() => {
    const { decorators, render, parameters } = composeStory(meta, story);
    const ctx = () => ({ args: ref.current, parameters, globals: {}, argTypes: meta.argTypes, component: meta.component });
    let Story = () => (render ? render(ref.current, ctx()) : h(meta.component, ref.current));
    for (const deco of decorators) {
      const Prev = Story;
      Story = () => deco(() => h(Prev), ctx());
    }
    return Story;
  }, [meta, story]);
  return h(Inner);
}

class Boundary extends React.Component {
  state = { error: null };
  static getDerivedStateFromError(error) { return { error }; }
  render() {
    return this.state.error
      ? h('div', { className: 'error' }, 'Не удалось отобразить пример: ', String(this.state.error.message || this.state.error))
      : this.props.children;
  }
}

/* ---------------------------------------------------------------- controls */

function Segmented({ options, value, onChange }) {
  return h('div', { className: 'seg', role: 'radiogroup' },
    options.map((o) => h('button', {
      key: String(o), type: 'button', role: 'radio', 'aria-checked': o === value,
      onClick: () => onChange(o),
    }, String(o))));
}

function Control({ name, spec, value, onChange, args }) {
  if (spec.if && args[spec.if.arg] !== spec.if.eq) return null;
  const { Switch, TextField } = ui;
  const type = typeof spec.control === 'string' ? spec.control : spec.control?.type;
  let input = null;
  if (type === 'boolean') {
    input = h(Switch, { checked: !!value, onCheckedChange: onChange, 'aria-label': name });
  } else if (type === 'inline-radio' || type === 'radio' || type === 'select') {
    input = h(Segmented, { options: spec.options || [], value, onChange });
  } else if (type === 'range') {
    const { min = 0, max = 100, step = 1 } = spec.control;
    input = h('div', { className: 'range' },
      h('input', { type: 'range', min, max, step, value: value ?? min, 'aria-label': name, onChange: (e) => onChange(Number(e.target.value)) }),
      h('output', null, value ?? min));
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
  const inlineLabel = type === 'range' || type === 'boolean' || type === 'inline-radio' || type === 'radio' || type === 'select';
  return h('div', { className: 'control' },
    inlineLabel && h('div', { className: 'control-head' }, h('code', null, name), spec.description && h('span', null, spec.description)),
    input);
}

function Controls({ meta, args, setArgs }) {
  const items = Object.entries(meta.argTypes || {}).filter(([, s]) => s.control);
  if (!items.length) return null;
  return h('div', { className: 'controls' },
    h('div', { className: 'controls-title' }, 'Параметры'),
    items.map(([name, spec]) =>
      h(Control, { key: name, name, spec, args, value: args[name], onChange: (v) => setArgs({ ...args, [name]: v }) })),
    h(ui.Button, { variant: 'secondary', size: 'xsmall', onClick: () => setArgs(null) }, 'Сбросить'));
}

/* ------------------------------------------------------------------ blocks */

function Code({ source }) {
  const [open, setOpen] = useState(false);
  if (!source || source.trim() === '{}') return null;
  return h('div', { className: 'code' },
    h(ui.Button, { variant: 'text', size: 'xsmall', onClick: () => setOpen(!open) }, open ? 'Скрыть код' : 'Показать код'),
    open && h('pre', null, h('code', null, source)));
}

function Example({ meta, story, name, id, controls, overlay }) {
  const base = useMemo(() => composeStory(meta, story).args, [meta, story]);
  const [args, setArgs] = useState(null);
  const current = args || base;
  const parameters = composeStory(meta, story).parameters;
  const showControls = controls && !(parameters.controls && parameters.controls.disable);
  const doc = parameters.docs || {};
  const gated = overlay || /defaultOpen/.test((doc.source && doc.source.originalSource) || '');
  const [shown, setShown] = useState(!gated);
  const [nonce, setNonce] = useState(0);
  return h('section', { className: 'example', id },
    h('h3', null, name),
    h(Md, { text: doc.description && doc.description.story }),
    h('div', { className: showControls ? 'stage with-controls' : 'stage' },
      h('div', { className: 'canvas' },
        shown
          ? h(Boundary, { key: nonce }, h(StoryCanvas, { meta, story, args: current }))
          : h('div', { className: 'gate' }, 'Этот пример открывается поверх страницы.'),
        gated && h('div', { className: 'gate-actions' },
          !shown && h(ui.Button, { size: 'small', onClick: () => setShown(true) }, 'Открыть пример'),
          shown && h(ui.Button, { variant: 'secondary', size: 'xsmall', onClick: () => setNonce(nonce + 1) }, 'Открыть заново'),
          shown && h(ui.Button, { variant: 'text', size: 'xsmall', onClick: () => setShown(false) }, 'Скрыть'))),
      showControls && h(Controls, { meta, args: current, setArgs: (a) => setArgs(a) })),
    h(Code, { source: doc.source && doc.source.originalSource }));
}

const TYPE_CLEAN = (t) => (t ? t.raw || t.name : '');
function PropsTable({ component }) {
  const props = component && component.__docgenInfo && component.__docgenInfo.props;
  const rows = props ? Object.entries(props).filter(([, p]) => p.description || p.tsType) : [];
  if (!rows.length) return null;
  return h('section', { className: 'section' },
    h('h2', null, 'Свойства'),
    h('div', { className: 'table-wrap' },
      h('table', null,
        h('thead', null, h('tr', null, ['Свойство', 'Тип', 'По умолчанию', 'Описание'].map((t) => h('th', { key: t }, t)))),
        h('tbody', null, rows.map(([name, p]) =>
          h('tr', { key: name },
            h('td', null, h('code', null, name), p.required && h('span', { className: 'req', title: 'Обязательное' }, '*')),
            h('td', null, h('code', { className: 'type' }, TYPE_CLEAN(p.tsType))),
            h('td', null, p.defaultValue ? h('code', null, p.defaultValue.value) : '—'),
            h('td', null, h(Md, { text: p.description, className: 'prose small' }))))))));
}

/* ------------------------------------------------------------------- pages */

function ComponentPage({ entry }) {
  const [state, setState] = useState(null);
  useEffect(() => {
    let alive = true;
    setState(null);
    loadModule(entry.file).then((m) => alive && setState(m), (e) => alive && setState({ error: e }));
    return () => { alive = false; };
  }, [entry]);
  if (!state) return h('div', { className: 'loading' }, 'Загрузка…');
  if (state.error) return h('div', { className: 'error' }, String(state.error));
  const meta = state.default;
  const stories = entry.stories.map((s) => {
    const key = Object.keys(state).find((k) => k.toLowerCase() === s.key.replace(/-/g, ''));
    return { ...s, story: state[key] };
  }).filter((s) => s.story);
  const playground = stories.find((s) => s.key === 'playground');
  const rest = stories.filter((s) => s !== playground);
  const desc = meta.parameters && meta.parameters.docs && meta.parameters.docs.description;
  const isFoundation = entry.group === 'Foundations';
  return h('article', { className: 'page' },
    h('div', { className: 'eyebrow' }, GROUPS.find((g) => g[0] === entry.group)[1]),
    h('h1', null, entry.title),
    h(Md, { text: desc && desc.component, className: 'prose lead' }),
    playground && h(Example, { key: entry.slug + 'pg', meta, story: playground.story, name: playground.name, id: playground.id, controls: true, overlay: entry.title === 'Modal' }),
    !isFoundation && h(PropsTable, { component: meta.component }),
    rest.length > 0 && h('section', { className: 'section' },
      !isFoundation && rest.length > 0 && h('h2', null, 'Примеры'),
      rest.map((s) => h(Example, { key: entry.slug + s.id, meta, story: s.story, name: s.name, id: s.id, controls: false, overlay: entry.title === 'Modal' }))));
}

function Home() {
  return h('article', { className: 'page' },
    h('div', { className: 'eyebrow' }, 'Дизайн-система'),
    h('h1', null, 'baseui'),
    h('p', { className: 'prose lead' }, 'Универсальная дизайн-система: токены, типографика и набор компонентов на Base UI. Светлая и тёмная темы переключаются атрибутом ', h('code', null, 'data-theme'), '.'),
    GROUPS.map(([g, title]) => h('section', { className: 'section', key: g },
      h('h2', null, title),
      h('div', { className: 'cards' }, byGroup(g).map((c) =>
        h('a', { className: 'card', key: c.slug, href: routeOf(c) }, h('span', null, c.title), h('small', null, c.stories.length + ' ' + plural(c.stories.length))))))));
}
const plural = (n) => (n % 10 === 1 && n % 100 !== 11 ? 'пример' : n % 10 >= 2 && n % 10 <= 4 && (n % 100 < 10 || n % 100 >= 20) ? 'примера' : 'примеров');

/* --------------------------------------------------------------------- app */

function useRoute() {
  const [hash, setHash] = useState(location.hash);
  useEffect(() => {
    const f = () => { setHash(location.hash); window.scrollTo(0, 0); document.getElementById('main')?.scrollTo(0, 0); setMenu(false); };
    window.addEventListener('hashchange', f);
    return () => window.removeEventListener('hashchange', f);
  }, []);
  const [, group, slug] = hash.split('/');
  return manifest.find((c) => c.group.toLowerCase() === group && c.slug === slug) || null;
}
let setMenu = () => {};

function App() {
  const entry = useRoute();
  const [theme, setTheme] = useState(() => store.get('baseui-theme', matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'));
  const [q, setQ] = useState('');
  const [menu, _setMenu] = useState(false);
  setMenu = _setMenu;
  useEffect(() => { document.documentElement.setAttribute('data-theme', theme); store.set('baseui-theme', theme); }, [theme]);
  useEffect(() => { document.title = entry ? `${entry.title} — baseui` : 'baseui'; }, [entry]);
  const { Button, TextField, Switch } = ui;
  const query = q.trim().toLowerCase();

  return h('div', { className: 'shell' + (menu ? ' menu-open' : '') },
    h('aside', { className: 'side' },
      h('a', { className: 'brand', href: '#/' }, 'baseui'),
      h('div', { className: 'search' }, h(TextField, { label: 'Поиск', size: 'small', type: 'search', value: q, onChange: (e) => setQ(e.target.value) })),
      h('nav', { 'aria-label': 'Разделы' }, GROUPS.map(([g, title]) => {
        const items = byGroup(g).filter((c) => c.title.toLowerCase().includes(query));
        return items.length > 0 && h(Fragment, { key: g },
          h('div', { className: 'nav-title' }, title),
          items.map((c) => h('a', { key: c.slug, href: routeOf(c), 'aria-current': entry === c ? 'page' : undefined }, c.title)));
      })),
      h('div', { className: 'theme' }, h(Switch, { label: 'Тёмная тема', checked: theme === 'dark', onCheckedChange: (v) => setTheme(v ? 'dark' : 'light') }))),
    h('div', { className: 'scrim', onClick: () => _setMenu(false) }),
    h('main', { id: 'main' },
      h('div', { className: 'topbar' }, h(Button, { variant: 'secondary', size: 'xsmall', onClick: () => _setMenu(!menu) }, 'Меню'), h('a', { href: '#/', className: 'brand' }, 'baseui')),
      entry ? h(ComponentPage, { entry, key: entry.slug }) : h(Home)));
}

await loadUi();
await initDom();
renderInto(h(App), document.getElementById('root'));
