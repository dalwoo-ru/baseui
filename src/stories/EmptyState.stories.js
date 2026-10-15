import { h } from '../react.js';
import { EmptyState } from '../components/EmptyState.js';
import { Icon } from '../components/Icon.js';
import { Button } from './_ui.js';
import { meta, playground } from './_helpers.js';

export default meta({
  title: 'Components/Empty State', component: EmptyState, args: { title: 'Nothing found', description: 'Try changing the query or resetting the filters.' },
  argTypes: { title: { control: 'text', description: 'Heading' }, description: { control: 'text', description: 'Description' } },
});
export const Playground = {
  ...playground({ description: 'Icon and action are optional.', source: `<EmptyState
  icon={<Icon name="SearchLg" />}
  title="Nothing found"
  description="Try changing the query or resetting the filters."
  action={<Button variant="secondary">Reset filters</Button>}
/>` }),
  render: (args) => h(EmptyState, { ...args, icon: h(Icon, { name: 'SearchLg', size: 28 }), action: h(Button, { variant: 'secondary' }, 'Reset filters') }),
};
export const __namedExportsOrder = ['Playground'];
