import { h } from '../react.js';
import { ToastProvider, useToast } from '../components/Toast.js';
import { Button } from './_ui.js';
import { meta, example, Row } from './_helpers.js';

function Demo() {
  const { toast } = useToast();
  return h(Row, null,
    h(Button, { variant: 'secondary', onClick: () => toast({ title: 'Saved', description: 'Your changes are applied.', status: 'success' }) }, 'Success'),
    h(Button, { variant: 'secondary', onClick: () => toast({ title: 'No connection', description: 'Check your network.', status: 'error' }) }, 'Error'),
    h(Button, { variant: 'secondary', onClick: () => toast({ title: 'Tip', description: 'This one stays until closed.', duration: 0 }) }, 'Sticky'));
}
export default meta({ title: 'Components/Toast', component: ToastProvider, args: {}, argTypes: {} });
export const Playground = example({
  name: 'Playground', render: () => h(ToastProvider, null, h(Demo)),
  source: `// Once, at the app root
<ToastProvider>…</ToastProvider>

// Anywhere below
const { toast } = useToast();
toast({ title: 'Saved', description: 'Your changes are applied.', status: 'success' });`,
});
export const __namedExportsOrder = ['Playground'];
