import { Table } from '../components/Table.js';
import { meta, playground } from './_helpers.js';

const rows = [
  { id: 1, name: 'Anna Petrova', role: 'Designer', status: 'Active', seats: 3 },
  { id: 2, name: 'Mark Lee', role: 'Engineer', status: 'Invited', seats: 1 },
  { id: 3, name: 'Sofia Rossi', role: 'Product', status: 'Active', seats: 5 },
];
const columns = [{ key: 'name', header: 'Name' }, { key: 'role', header: 'Role' }, { key: 'status', header: 'Status' }, { key: 'seats', header: 'Seats', align: 'right' }];
export default meta({ title: 'Components/Table', component: Table, args: { columns, rows, dense: false, caption: 'Team members' }, argTypes: { dense: { control: 'boolean' } } });
export const Playground = playground({ source: `<Table columns={columns} rows={rows} caption="Team members" />` });
export const __namedExportsOrder = ['Playground'];
