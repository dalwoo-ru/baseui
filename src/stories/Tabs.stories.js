import { h } from '../react.js';
import { Tabs, TabList, Tab, TabPanel } from '../components/Tabs.js';
import { meta, playground, example } from './_helpers.js';

export default meta({
  title: 'Components/Tabs', component: Tabs, args: { defaultValue: 'overview' },
  argTypes: {},
});
const tabs = (variant) => h(Tabs, { defaultValue: 'overview' },
  h(TabList, { variant, label: 'Project sections' }, h(Tab, { value: 'overview' }, 'Overview'), h(Tab, { value: 'activity' }, 'Activity'), h(Tab, { value: 'settings' }, 'Settings'), h(Tab, { value: 'billing', disabled: true }, 'Billing')),
  h(TabPanel, { value: 'overview' }, 'General project information.'), h(TabPanel, { value: 'activity' }, 'Recent activity.'), h(TabPanel, { value: 'settings' }, 'Project settings.'));
export const Playground = {
  ...playground({ description: 'Arrow keys, Home and End move between tabs; disabled tabs are skipped.', source: `<Tabs defaultValue="overview">
  <TabList label="Project sections">
    <Tab value="overview">Overview</Tab>
    <Tab value="activity">Activity</Tab>
  </TabList>
  <TabPanel value="overview">…</TabPanel>
  <TabPanel value="activity">…</TabPanel>
</Tabs>` }),
  render: () => h('div', { style: { width: 480, maxWidth: '100%' } }, tabs('underline')),
};
export const TabListPill = example({ name: 'Tab List', description: '`TabList` takes `variant="underline"` (default) or `"pill"`.', render: () => h('div', { style: { width: 480, maxWidth: '100%' } }, tabs('pill')), source: `<TabList variant="pill">…</TabList>` });
export const SingleTab = example({ name: 'Tab', description: 'A `Tab` and its `TabPanel` share a `value`.', render: () => h(Tabs, { defaultValue: 'a' }, h(TabList, { label: 'Demo' }, h(Tab, { value: 'a' }, 'First'), h(Tab, { value: 'b' }, 'Second')), h(TabPanel, { value: 'a' }, 'First panel'), h(TabPanel, { value: 'b' }, 'Second panel')), source: `<Tab value="a">First</Tab>
<TabPanel value="a">First panel</TabPanel>` });
export const __namedExportsOrder = ['Playground', 'TabListPill', 'SingleTab'];
