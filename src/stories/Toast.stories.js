import { h } from '../react.js';
import { ToastProvider, useToast } from '../components/Toast.js';
import { Button, Heart } from './_ui.js';
import { meta, example, Row } from './_helpers.js';

function Demo() {
  const { toast } = useToast();
  return h(Row, null,
    h(Button, { variant: 'secondary', onClick: () => toast({ message: 'Changes saved', status: 'success' }) }, 'Success'),
    h(Button, { variant: 'secondary', onClick: () => toast({ message: 'No connection', status: 'error' }) }, 'Error'),
    h(Button, { variant: 'secondary', onClick: () => toast({ message: 'New version available', status: 'info' }) }, 'Info'),
    h(Button, { variant: 'secondary', onClick: () => toast({ message: 'Added to favorites', icon: h(Heart, { size: 24 }) }) }, 'Custom icon'),
    h(Button, { variant: 'secondary', onClick: () => toast({ message: 'Message deleted', status: 'success', action: { label: 'Undo' } }) }, 'With action'),
    h(Button, { variant: 'secondary', onClick: () => toast({ message: 'Just a message', status: 'neutral', duration: 0 }) }, 'Text only, sticky'));
}
export default meta({ title: 'Components/Toast', component: ToastProvider, args: {}, argTypes: {} });
export const Playground = example({
  name: 'Playground', render: () => h(ToastProvider, null, h(Demo)),
  source: `// Once, at the app root
<ToastProvider>…</ToastProvider>

// Anywhere below
const { toast } = useToast();
toast({ message: 'Message deleted', status: 'success', action: { label: 'Undo', onClick: restore } });`,
});
export const __namedExportsOrder = ['Playground'];
