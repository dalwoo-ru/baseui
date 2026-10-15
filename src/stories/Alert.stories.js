import { h, useState } from '../react.js';
import { Alert } from '../components/Alert.js';
import { Button } from './_ui.js';
import { meta, playground, example, Stack } from './_helpers.js';

export default meta({
  title: 'Components/Alert', component: Alert,
  args: { status: 'info', title: 'Обновление доступно', children: 'Новая версия будет установлена при следующем запуске.' },
  argTypes: {
    status: { control: 'inline-radio', options: ['info', 'success', 'warning', 'error'], description: 'Тип' },
    title: { control: 'text', description: 'Заголовок' },
    children: { control: 'text', description: 'Текст' },
  },
});
export const Playground = {
  ...playground({ description: 'Встроенное сообщение внутри страницы.', source: '{}' }),
  render: (args) => h('div', { style: { width: 480, maxWidth: '100%' } }, h(Alert, args)),
};
export const Statuses = example({
  name: 'Statuses', description: 'Четыре статуса. error и warning озвучиваются сразу (role="alert").',
  render: () => h(Stack, { width: 480 },
    h(Alert, { status: 'info', title: 'Информация' }, 'Нейтральное сообщение.'),
    h(Alert, { status: 'success', title: 'Готово' }, 'Изменения сохранены.'),
    h(Alert, { status: 'warning', title: 'Внимание' }, 'Срок действия подписки истекает через 3 дня.'),
    h(Alert, { status: 'error', title: 'Ошибка' }, 'Не удалось сохранить. Повторите попытку.')),
  source: `<Alert status="info" title="Информация">Нейтральное сообщение.</Alert>
<Alert status="success" title="Готово">Изменения сохранены.</Alert>
<Alert status="warning" title="Внимание">…</Alert>
<Alert status="error" title="Ошибка">…</Alert>`,
});
function Dismissible() {
  const [open, setOpen] = useState(true);
  return open
    ? h(Alert, { status: 'info', title: 'Можно закрыть', onClose: () => setOpen(false) }, 'Нажмите крестик справа.')
    : h(Button, { variant: 'secondary', size: 'small', onClick: () => setOpen(true) }, 'Показать снова');
}
export const Dismissable = example({
  name: 'Dismissable', description: 'С onClose появляется кнопка закрытия.',
  render: () => h('div', { style: { width: 480, maxWidth: '100%' } }, h(Dismissible)),
  source: `<Alert title="Можно закрыть" onClose={() => setOpen(false)}>Нажмите крестик справа.</Alert>`,
});

export const __namedExportsOrder = ['Playground', 'Statuses', 'Dismissable'];
