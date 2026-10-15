import { h } from '../react.js';
import { EmptyState } from '../components/EmptyState.js';
import { Icon } from '../icons.js';
import { Button } from './_ui.js';
import { meta, playground } from './_helpers.js';

export default meta({
  title: 'Components/EmptyState', component: EmptyState,
  args: { title: 'Ничего не найдено', description: 'Попробуйте изменить запрос или сбросить фильтры.' },
  argTypes: { title: { control: 'text', description: 'Заголовок' }, description: { control: 'text', description: 'Описание' } },
});
export const Playground = {
  ...playground({ description: 'Иконка и действие опциональны.', source: `{
  render: () => (
    <EmptyState
      icon={<Icon name="info" size={28} />}
      title="Ничего не найдено"
      description="Попробуйте изменить запрос или сбросить фильтры."
      action={<Button variant="secondary">Сбросить фильтры</Button>}
    />
  ),
}` }),
  render: (args) => h(EmptyState, { ...args, icon: h(Icon, { name: 'info', size: 28 }), action: h(Button, { variant: 'secondary' }, 'Сбросить фильтры') }),
};

export const __namedExportsOrder = ['Playground'];
