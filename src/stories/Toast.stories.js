import { h, useRef, useEffect } from '../react.js';
import { ToastProvider, useToast } from '../components/Toast.js';
import { Button, Heart } from './_ui.js';
import { meta, playground, Row } from './_helpers.js';

const toastOptions = ({ message, status, action, actionLabel, autoClose }) => ({
  message,
  status: status === 'custom' || status === 'none' ? 'neutral' : status,
  icon: status === 'custom' ? h(Heart, { size: 24 }) : undefined,
  action: action ? { label: actionLabel } : undefined,
  duration: autoClose ? 5000 : 0,
});

/** One button opens a toast; the open toast follows the settings live. */
function Demo(args) {
  const { toast, dismiss, update } = useToast();
  const id = useRef(null);
  const opts = toastOptions(args);
  useEffect(() => { if (id.current) update(id.current, opts); }, [args.message, args.status, args.action, args.actionLabel, args.autoClose]);
  return h(Row, null,
    h(Button, { variant: 'secondary', onClick: () => { if (id.current) dismiss(id.current); id.current = toast(opts); } }, 'Open toast'));
}
export default meta({
  title: 'Components/Toast', component: ToastProvider,
  args: { message: 'Changes saved', status: 'success', action: false, actionLabel: 'Undo', autoClose: false, placement: 'bottom-right' },
  argTypes: {
    message: { control: 'text' },
    status: { control: 'inline-radio', options: ['none', 'success', 'error', 'info', 'custom'], description: 'Icon: none, a status or a custom one' },
    action: { control: 'boolean', description: 'Optional action button' },
    actionLabel: { control: 'text', if: { arg: 'action', eq: true } },
    autoClose: { control: 'boolean', description: 'Closes itself after 5 seconds' },
    placement: { control: 'inline-radio', options: ['bottom-right', 'bottom-center', 'top-right', 'top-center'] },
  },
});
export const Playground = {
  ...playground({
    source: `// Once, at the app root
<ToastProvider>…</ToastProvider>

// Anywhere below
const { toast } = useToast();
toast({ message: 'Message deleted', status: 'success', action: { label: 'Undo', onClick: restore } });`,
  }),
  render: (args) => h(ToastProvider, { placement: args.placement }, h(Demo, args)),
};
export const __namedExportsOrder = ['Playground'];
