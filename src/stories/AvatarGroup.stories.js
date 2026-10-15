import { h } from '../react.js';
import { AvatarGroup } from '../components/AvatarGroup.js';
import { meta, playground, example, Row } from './_helpers.js';

const users = ['AB', 'CD', 'EF', 'GH', 'IJ', 'KL'].map((initials) => ({ initials, name: initials }));
export default meta({
  title: 'Components/Avatar Group', component: AvatarGroup, args: { users, max: 4, size: 'small' },
  argTypes: {
    max: { control: { type: 'range', min: 1, max: 6, step: 1 }, description: 'Visible avatars' },
    size: { control: 'inline-radio', options: ['xsmall', 'small', 'medium'], description: 'Avatar size' },
  },
});
export const Playground = playground({ description: 'Avatars overlap; the rest collapse into a “+N” counter.', source: '{}' });
export const Sizes = example({
  name: 'Sizes', description: 'Three sizes.',
  render: () => h(Row, { gap: 'var(--baseui-spacing-24)' }, ['xsmall', 'small', 'medium'].map((s) => h(AvatarGroup, { key: s, users, size: s, max: 3 }))),
  source: `<AvatarGroup users={users} size="medium" max={3} />`,
});
export const __namedExportsOrder = ['Playground', 'Sizes'];
