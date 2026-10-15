import { h, useState } from '../react.js';
import { Card } from '../components/Card.js';
import { Alert } from '../components/Alert.js';
import { Divider } from '../components/Divider.js';
import { Spinner } from '../components/Spinner.js';
import { Button, TextField, Checkbox } from './_ui.js';
import { example, Stack } from './_helpers.js';

export default {
  title: 'Patterns/SignIn',
  parameters: { docs: { description: { component: 'Форма входа: Card + TextField + Checkbox + Button + Divider + Alert. Показывает, как компоненты работают вместе: ошибки у полей, общее сообщение, состояние загрузки.' } } },
};

function SignInForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [failed, setFailed] = useState(false);

  const submit = (e) => {
    e.preventDefault();
    const next = {};
    if (!/^\S+@\S+\.\S+$/.test(email)) next.email = 'Введите корректный e-mail';
    if (password.length < 6) next.password = 'Минимум 6 символов';
    setErrors(next);
    setFailed(false);
    if (Object.keys(next).length) return;
    setLoading(true);
    setTimeout(() => { setLoading(false); setFailed(true); }, 1200);
  };

  return h('div', { style: { width: 400, maxWidth: '100%' } },
    h(Card, { title: 'Вход', subtitle: 'Введите данные от аккаунта', padding: 'large' },
      h('form', { onSubmit: submit, noValidate: true },
        h(Stack, null,
          failed && h(Alert, { status: 'error', title: 'Не удалось войти' }, 'Неверный e-mail или пароль.'),
          h(TextField, { label: 'E-mail', type: 'email', value: email, onChange: (e) => setEmail(e.target.value), status: errors.email ? 'error' : undefined, caption: errors.email }),
          h(TextField, { label: 'Пароль', type: 'password', value: password, onChange: (e) => setPassword(e.target.value), status: errors.password ? 'error' : undefined, caption: errors.password }),
          h(Checkbox, { label: 'Запомнить меня' }),
          h(Button, { type: 'submit', fullWidth: true, loading }, 'Войти'),
          h(Divider, { label: 'или' }),
          h(Button, { type: 'button', variant: 'secondary', fullWidth: true }, 'Продолжить с кодом'),
          loading && h('div', { style: { display: 'flex', justifyContent: 'center' } }, h(Spinner, { size: 'small', label: 'Проверяем данные' }))))));
}

export const Form = example({
  name: 'Form',
  description: 'Нажмите «Войти» с пустыми полями — появятся ошибки; с корректными — имитация запроса и сообщение об ошибке.',
  render: () => h(SignInForm),
  source: `<Card title="Вход" subtitle="Введите данные от аккаунта" padding="large">
  <form onSubmit={submit}>
    <Alert status="error" title="Не удалось войти">Неверный e-mail или пароль.</Alert>
    <TextField label="E-mail" type="email" status={errors.email && 'error'} caption={errors.email} />
    <TextField label="Пароль" type="password" status={errors.password && 'error'} caption={errors.password} />
    <Checkbox label="Запомнить меня" />
    <Button type="submit" fullWidth loading={loading}>Войти</Button>
    <Divider label="или" />
    <Button variant="secondary" fullWidth>Продолжить с кодом</Button>
  </form>
</Card>`,
});

export const __namedExportsOrder = ['Form'];
