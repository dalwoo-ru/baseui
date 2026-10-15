// Существующие (скомпилированные) компоненты baseui для историй и паттернов.
// Берём компонент из мета-данных его собственной истории — так не зависим от имён внутри бандла.
const component = async (file) => (await import(`../../lib/${file}`)).default.component;

export const [Button, TextField, Checkbox, Switch, Avatar, Chip, Badge] = await Promise.all([
  component('Button.stories-BIZ8i_Er.js'),
  component('TextField.stories-JboKGoC9.js'),
  component('Checkbox.stories-CjVZ5VOE.js'),
  component('Switch.stories-UfYPEzH7.js'),
  component('Avatar.stories-BJh8m-el.js'),
  component('Chip.stories-BFj78RSq.js'),
  component('Badge.stories-f_dinpre.js'),
]);
