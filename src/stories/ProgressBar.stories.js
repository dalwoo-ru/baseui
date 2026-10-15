import { h } from '../react.js';
import { ProgressBar } from '../components/ProgressBar.js';
import { meta, playground, example, Stack, W } from './_helpers.js';

export default meta({
  title: 'Components/Progress Bar', component: ProgressBar, args: { value: 60, size: 'medium', label: 'Uploading', showValue: true },
  argTypes: {
    value: { control: { type: 'range', min: 0, max: 100, step: 5 }, description: 'Progress, %' }, size: { control: 'inline-radio', options: ['small', 'medium'], description: 'Thickness' },
    label: { control: 'text', description: 'Label' }, showValue: { control: 'boolean', description: 'Show value' },
  },
});
export const Playground = { ...playground({ description: 'Determinate progress from 0 to 100.', source: '{}' }), render: (args) => W(360, h(ProgressBar, args)) };
export const Indeterminate = example({ name: 'Indeterminate', description: 'Without `value` progress is indeterminate.', render: () => h(Stack, { width: 360 }, h(ProgressBar, { label: 'Processing…' }), h(ProgressBar, { size: 'small' })), source: `<ProgressBar label="Processing…" />` });
export const __namedExportsOrder = ['Playground', 'Indeterminate'];
