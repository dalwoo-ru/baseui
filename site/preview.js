// Renders a single story inside an iframe, so media queries see the frame width (Desktop / Tablet / Mobile).
import { t as initDom, r as renderInto } from '../lib/react-18-D4o7zN8K.js';
import { React, h, composeStory, StoryCanvas, Boundary } from './story.js';

const { useState, useEffect } = React;
const params = new URLSearchParams(location.search);
const mod = await import(new URL(params.get('file'), import.meta.url).href);
const meta = mod.default;
const story = mod[params.get('story')];
document.documentElement.setAttribute('data-theme', params.get('theme') || 'light');

function Preview() {
  const base = composeStory(meta, story).args;
  const [overrides, setOverrides] = useState({});
  useEffect(() => {
    const on = (e) => {
      if (e.source !== parent || !e.data || e.data.type !== 'bui-init') return;
      setOverrides(e.data.overrides || {});
      if (e.data.theme) document.documentElement.setAttribute('data-theme', e.data.theme);
    };
    window.addEventListener('message', on);
    const report = () => parent.postMessage({ type: 'bui-height', value: document.documentElement.scrollHeight }, '*');
    const ro = new ResizeObserver(report);
    ro.observe(document.body);
    parent.postMessage({ type: 'bui-ready' }, '*');
    report();
    return () => { window.removeEventListener('message', on); ro.disconnect(); };
  }, []);
  return h(Boundary, null, h(StoryCanvas, { meta, story, args: { ...base, ...overrides } }));
}

await initDom();
renderInto(h(Preview), document.getElementById('root'));
