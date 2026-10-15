import { h } from '../react.js';
import { ButtonGroup } from '../components/Button.js';
import { Button } from './_ui.js';
import { meta, playground } from './_helpers.js';

export default meta({
  title: 'Components/Button Group', component: ButtonGroup, args: { attached: false },
  argTypes: { attached: { control: 'boolean', description: 'Join buttons into one segmented control' } },
});
export const Playground = {
  ...playground({ description: 'Related buttons in a row.', source: `<ButtonGroup>
  <Button variant="secondary">Left</Button>
  <Button variant="secondary">Center</Button>
  <Button variant="secondary">Right</Button>
</ButtonGroup>` }),
  render: (args) => h(ButtonGroup, args, ['Left', 'Center', 'Right'].map((l) => h(Button, { key: l, variant: 'secondary' }, l))),
};
export const __namedExportsOrder = ['Playground'];
