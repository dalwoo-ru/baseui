import { h, useState } from '../react.js';
import { Card } from '../components/Card.js';
import { Tabs } from '../components/Tabs.js';
import { Accordion } from '../components/Accordion.js';
import { Breadcrumbs } from '../components/Breadcrumbs.js';
import { ToastProvider, useToast } from '../components/Toast.js';
import { Divider } from '../components/Divider.js';
import { Button, Switch } from './_ui.js';
import { example, Stack } from './_helpers.js';

export default {
  title: 'Patterns/Settings',
  parameters: { docs: { description: { component: 'Страница настроек: Breadcrumbs + Tabs + Card + Switch + Toast. Изменения подтверждаются уведомлением.' } } },
};

function Notifications() {
  const { toast } = useToast();
  const [state, setState] = useState({ email: true, push: false, news: false });
  const row = (key, label) => h(Switch, { key, label, checked: state[key], onCheckedChange: (v) => setState({ ...state, [key]: v }) });
  return h(Stack, null,
    row('email', 'Уведомления на почту'), row('push', 'Push-уведомления'), row('news', 'Новости и акции'),
    h(Divider),
    h('div', null, h(Button, { onClick: () => toast({ title: 'Настройки сохранены', status: 'success' }) }, 'Сохранить')));
}

function SettingsPage() {
  return h(ToastProvider, null,
    h('div', { style: { width: 560, maxWidth: '100%' } },
      h(Stack, null,
        h(Breadcrumbs, { items: [{ label: 'Главная', href: '#' }, { label: 'Профиль', href: '#' }, { label: 'Настройки' }] }),
        h(Card, { title: 'Настройки', padding: 'large' },
          h(Tabs, { label: 'Разделы настроек', items: [
            { value: 'notifications', label: 'Уведомления', content: h(Notifications) },
            { value: 'privacy', label: 'Приватность', content: h(Accordion, { items: [
              { value: 'a', title: 'Кто видит мой профиль', content: 'По умолчанию профиль виден всем авторизованным пользователям.' },
              { value: 'b', title: 'Хранение данных', content: 'Данные хранятся, пока существует аккаунт.' },
            ] }) },
          ] })))));
}

export const Page = example({
  name: 'Page',
  description: 'Вкладки внутри карточки, переключатели и подтверждение сохранения через Toast.',
  render: () => h(SettingsPage),
  source: `<ToastProvider>
  <Breadcrumbs items={[{ label: 'Главная', href: '/' }, { label: 'Профиль', href: '/profile' }, { label: 'Настройки' }]} />
  <Card title="Настройки" padding="large">
    <Tabs items={[
      { value: 'notifications', label: 'Уведомления', content: <Notifications /> },
      { value: 'privacy', label: 'Приватность', content: <Accordion items={…} /> },
    ]} />
  </Card>
</ToastProvider>`,
});

export const __namedExportsOrder = ['Page'];
