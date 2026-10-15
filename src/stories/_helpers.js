// Помощники для историй: единый формат метаданных и примеров.
import { h } from '../react.js';

/** Метаданные страницы компонента; описание берётся из describe(). */
export const meta = ({ title, component, args, argTypes }) => ({
  title,
  component,
  args,
  argTypes,
  parameters: { docs: { description: { component: component.__docgenInfo.description } } },
});

/** Интерактивная история (с панелью параметров). */
export const playground = ({ description, source }) => ({
  parameters: { docs: { description: { story: description }, source: { originalSource: source } } },
});

/** Статичный пример без панели параметров. */
export const example = ({ name, render, description, source }) => ({
  name,
  render,
  parameters: { controls: { disable: true }, docs: { description: { story: description }, source: { originalSource: source } } },
});

export const Stack = ({ gap = 'var(--baseui-Space-M)', width, children }) =>
  h('div', { style: { display: 'flex', flexDirection: 'column', gap, width, maxWidth: '100%' } }, children);
export const Row = ({ gap = 'var(--baseui-Space-M)', align = 'center', children }) =>
  h('div', { style: { display: 'flex', flexWrap: 'wrap', gap, alignItems: align } }, children);
