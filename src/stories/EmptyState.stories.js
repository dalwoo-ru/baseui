import { h } from '../react.js';
import { EmptyState } from '../components/EmptyState.js';
import { Button } from '../components/Button.js';
import { SearchLg } from './_ui.js';
import { meta, playground } from './_helpers.js';

export default meta({
  title: 'Components/Empty State', component: EmptyState, args: { title: 'Nothing found', description: 'Try changing the query or resetting the filters.' },
  argTypes: { title: { control: 'text' }, description: { control: 'text' } },
});
export const Playground = {
  ...playground({ source: `<EmptyState
  icon={<SearchLgIcon />}
  title="Nothing found"
  description="Try changing the query or resetting the filters."
  action={<Button label="Reset filters" />}
/>` }),
  render: (args) => h(EmptyState, { ...args, icon: h(SearchLg, { size: 28 }), action: h(Button, { label: 'Reset filters' }) }),
};
export const __namedExportsOrder = ['Playground'];
