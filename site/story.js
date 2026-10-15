// Rendering of a story: shared by the documentation site and the preview frame.
import { t as requireReact } from '../lib/react-BZJXY1be.js';

export const React = requireReact();
export const h = React.createElement;
const { useMemo, useRef } = React;

export function composeStory(meta, story) {
  const args = { ...meta.args, ...story.args };
  const decorators = [...(story.decorators || []), ...(meta.decorators || [])];
  const render = story.render || meta.render;
  return { args, decorators, render, parameters: { ...meta.parameters, ...story.parameters } };
}

export function StoryCanvas({ meta, story, args }) {
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

export class Boundary extends React.Component {
  state = { error: null };
  static getDerivedStateFromError(error) { return { error }; }
  render() {
    return this.state.error
      ? h('div', { className: 'error' }, 'Could not render this example: ', String(this.state.error.message || this.state.error))
      : this.props.children;
  }
}
