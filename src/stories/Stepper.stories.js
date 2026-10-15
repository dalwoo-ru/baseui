import { h } from '../react.js';
import { Stepper } from '../components/Stepper.js';
import { meta, playground, example } from './_helpers.js';

const steps = [{ title: 'Account', description: 'Your details' }, { title: 'Plan', description: 'Choose a plan' }, { title: 'Payment' }, { title: 'Done' }];
export default meta({
  title: 'Components/Stepper', component: Stepper, args: { steps, current: 1, orientation: 'horizontal' },
  argTypes: { current: { control: { type: 'range', min: 0, max: 3, step: 1 } }, orientation: { control: 'inline-radio', options: ['horizontal', 'vertical'] } },
});
export const Playground = { ...playground({ source: '{}' }), render: (args) => h('div', { style: { width: 640, maxWidth: '100%' } }, h(Stepper, args)) };
export const Step = example({ name: 'Step', render: () => h(Stepper, { steps: [{ title: 'One' }, { title: 'Two' }, { title: 'Three' }], current: 2 }), source: `<Stepper steps={[{ title: 'One' }, { title: 'Two' }, { title: 'Three' }]} current={2} />` });
export const __namedExportsOrder = ['Playground', 'Step'];
