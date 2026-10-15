import { h } from '../react.js';
import { ToastProvider, useToast } from '../components/Toast.js';
import { Button } from './_ui.js';
import { meta, example, Row } from './_helpers.js';

function Demo() {
  const { toast } = useToast();
  return h(Row, null,
    h(Button, { variant: 'secondary', onClick: () => toast({ title: 'Сохранено', description: 'Изменения применены.', status: 'success' }) }, 'Success'),
    h(Button, { variant: 'secondary', onClick: () => toast({ title: 'Нет соединения', description: 'Проверьте подключение к сети.', status: 'error' }) }, 'Error'),
    h(Button, { variant: 'secondary', onClick: () => toast({ title: 'Подсказка', description: 'Не закрывается сам.', duration: 0 }) }, 'Sticky'));
}
export default meta({ title: 'Components/Toast', component: ToastProvider, args: {}, argTypes: {} });
export const Playground = {
  ...example({
    name: 'Playground', description: 'Вызывайте toast() из любого места внутри ToastProvider. Таймер приостанавливается при наведении и фокусе.',
    render: () => h(ToastProvider, null, h(Demo)),
    source: `// В корне приложения
<ToastProvider>…</ToastProvider>

// В любом компоненте
const { toast } = useToast();
toast({ title: 'Сохранено', description: 'Изменения применены.', status: 'success' });`,
  }),
};

export const __namedExportsOrder = ['Playground'];
