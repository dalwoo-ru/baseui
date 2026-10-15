import { h } from '../react.js';
import { Popover } from '../components/Popover.js';
import { Button } from './_ui.js';
import { meta, playground } from './_helpers.js';

export default meta({
  title: 'Components/Popover', component: Popover, args: { placement: 'bottom-start', label: 'Share' },
  argTypes: { placement: { control: 'inline-radio', options: ['bottom-start', 'bottom-end', 'top-start', 'top-end'], description: 'Placement' } },
});
export const Playground = {
  ...playground({ description: 'Click the trigger. Outside click and Escape close it.', source: `<Popover trigger={(p) => <Button {...p}>Share</Button>}>…</Popover>` }),
  render: (args) => h('div', { style: { minHeight: 200 } }, h(Popover, { ...args, trigger: (p) => h(Button, { variant: 'secondary', ...p }, 'Share') },
    h('div', { style: { display: 'flex', flexDirection: 'column', gap: 'var(--baseui-spacing-8)' } }, h('strong', null, 'Share this page'), h('span', { style: { color: 'var(--baseui-color-text-secondary)' } }, 'Anyone with the link can view.')))),
};
export const __namedExportsOrder = ['Playground'];
