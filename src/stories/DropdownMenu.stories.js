import { h, useState } from '../react.js';
import { DropdownMenu, DropdownMenuItem, DropdownMenuCheckboxItem, DropdownMenuRadioGroup, DropdownMenuRadioItem, DropdownMenuDivider, DropdownMenuGroup } from '../components/DropdownMenu.js';
import { Icon } from '../components/Icon.js';
import { Button } from './_ui.js';
import { meta, playground, example, Row } from './_helpers.js';

export default meta({
  title: 'Components/Dropdown Menu', component: DropdownMenu, args: { align: 'start' },
  argTypes: { align: { control: 'inline-radio', options: ['start', 'end'], description: 'Alignment to the trigger' } },
});
const trigger = (p) => h(Button, { variant: 'secondary', ...p }, 'Actions');
export const Playground = {
  ...playground({ description: 'Arrow keys move, Enter or Space selects, Escape closes.', source: `<DropdownMenu trigger={(p) => <Button {...p}>Actions</Button>}>
  <DropdownMenuItem icon={<Icon name="Edit01" />}>Edit</DropdownMenuItem>
  <DropdownMenuItem>Duplicate</DropdownMenuItem>
  <DropdownMenuDivider />
  <DropdownMenuItem destructive>Delete</DropdownMenuItem>
</DropdownMenu>` }),
  render: (args) => h('div', { style: { minHeight: 240 } }, h(DropdownMenu, { trigger, label: 'Actions', ...args },
    h(DropdownMenuItem, { icon: h(Icon, { name: 'Edit01', size: 20 }), shortcut: '⌘E' }, 'Edit'),
    h(DropdownMenuItem, { icon: h(Icon, { name: 'Copy01', size: 20 }) }, 'Duplicate'),
    h(DropdownMenuItem, { disabled: true }, 'Archive'),
    h(DropdownMenuDivider),
    h(DropdownMenuItem, { destructive: true, icon: h(Icon, { name: 'Trash01', size: 20 }) }, 'Delete'))),
};
function Choices() {
  const [bold, setBold] = useState(true);
  const [sort, setSort] = useState('name');
  return h('div', { style: { minHeight: 300 } }, h(DropdownMenu, { trigger, label: 'View' },
    h(DropdownMenuGroup, { label: 'Format' }, h(DropdownMenuCheckboxItem, { checked: bold, onCheckedChange: setBold }, 'Bold')),
    h(DropdownMenuDivider),
    h(DropdownMenuGroup, { label: 'Sort by' },
      h(DropdownMenuRadioGroup, { value: sort, onValueChange: setSort, label: 'Sort by' },
        h(DropdownMenuRadioItem, { value: 'name' }, 'Name'), h(DropdownMenuRadioItem, { value: 'date' }, 'Date')))));
}
export const GroupsAndChoices = example({
  name: 'Groups And Choices', description: 'Group headings, a checkbox item and a radio group.',
  render: () => h(Choices),
  source: `<DropdownMenu trigger={…}>
  <DropdownMenuGroup label="Format">
    <DropdownMenuCheckboxItem checked={bold} onCheckedChange={setBold}>Bold</DropdownMenuCheckboxItem>
  </DropdownMenuGroup>
  <DropdownMenuDivider />
  <DropdownMenuRadioGroup value={sort} onValueChange={setSort}>
    <DropdownMenuRadioItem value="name">Name</DropdownMenuRadioItem>
    <DropdownMenuRadioItem value="date">Date</DropdownMenuRadioItem>
  </DropdownMenuRadioGroup>
</DropdownMenu>`,
});
export const __namedExportsOrder = ['Playground', 'GroupsAndChoices'];
