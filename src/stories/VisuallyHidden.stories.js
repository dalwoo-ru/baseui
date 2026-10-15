import { h } from '../react.js';
import { VisuallyHidden } from '../components/Typography.js';
import { Button } from './_ui.js';
import { meta, example } from './_helpers.js';

export default meta({ title: 'Components/Visually Hidden', component: VisuallyHidden, args: {} });
export const Playground = example({
  name: 'Playground', description: 'The text below is invisible but read by screen readers (try a screen reader or inspect the DOM).',
  render: () => h(Button, null, 'Delete', h(VisuallyHidden, null, ' project “Atlas”')),
  source: `<Button>Delete<VisuallyHidden> project “Atlas”</VisuallyHidden></Button>`,
});
export const __namedExportsOrder = ['Playground'];
