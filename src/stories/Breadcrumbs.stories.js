import { h } from '../react.js';
import { Breadcrumbs } from '../components/Breadcrumbs.js';
import { meta, playground } from './_helpers.js';

export default meta({
  title: 'Components/Breadcrumbs', component: Breadcrumbs,
  args: { items: [{ label: 'Главная', href: '#' }, { label: 'Каталог', href: '#' }, { label: 'Электроника', href: '#' }, { label: 'Наушники' }] },
});
export const Playground = {
  ...playground({ description: 'Последний элемент — текущая страница (aria-current="page").', source: `{
  args: {
    items: [
      { label: 'Главная', href: '#' },
      { label: 'Каталог', href: '#' },
      { label: 'Наушники' },
    ],
  },
}` }),
  render: (args) => h(Breadcrumbs, args),
};

export const __namedExportsOrder = ['Playground'];
