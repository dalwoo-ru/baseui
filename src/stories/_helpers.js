// Helpers for stories: one format for page metadata and examples.
import { h } from '../react.js';

/** Page metadata; the description comes from describe() on the component. */
export const meta = ({ title, component, args, argTypes, description }) => ({
  title,
  component,
  args,
  argTypes,
  parameters: { docs: { description: { component: description || component.__docgenInfo.description } } },
});

/** Interactive story (with a controls panel). */
export const playground = ({ description, source }) => ({
  parameters: { docs: { description: { story: description }, source: { originalSource: source } } },
});

/** Static example without controls. */
export const example = ({ name, render, description, source }) => ({
  name,
  render,
  parameters: { controls: { disable: true }, docs: { description: { story: description }, source: { originalSource: source } } },
});

export const Stack = ({ gap = 'var(--baseui-spacing-16)', width, children }) =>
  h('div', { style: { display: 'flex', flexDirection: 'column', gap, width, maxWidth: '100%' } }, children);
export const Row = ({ gap = 'var(--baseui-spacing-16)', align = 'center', children }) =>
  h('div', { style: { display: 'flex', flexWrap: 'wrap', gap, alignItems: align } }, children);
export const Box = ({ children, style }) =>
  h('div', { style: { padding: 'var(--baseui-spacing-12) var(--baseui-spacing-16)', borderRadius: 'var(--baseui-radius-12)', background: 'var(--baseui-color-background-muted)', font: 'var(--baseui-Typography-Text-14-Regular)', ...style } }, children);
const W = (w, c) => h('div', { style: { width: w, maxWidth: '100%' } }, c);
export { W };
