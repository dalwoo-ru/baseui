import { h, cx } from '../react.js';
import { Avatar } from '../base.js';
import { describe } from '../doc.js';

export function AvatarGroup({ users, max = 4, size = 'small', className, ...rest }) {
  const shown = users.slice(0, max);
  const extra = users.length - shown.length;
  return h('div', { role: 'group', className: cx('bui-avatar-group', className), ...rest },
    shown.map((u, i) => h(Avatar, { key: i, size, initials: u.initials, src: u.src, alt: u.alt || u.name, type: u.src ? 'image' : 'initials' })),
    extra > 0 && h('span', { className: cx('bui-avatar-group__more', `bui-avatar-group__more--${size}`), 'aria-label': `${extra} more` }, `+${extra}`));
}
describe(AvatarGroup, 'Overlapping avatars with a “+N” overflow.', {
  users: ['Array<{ initials?: string; src?: string; name?: string }>', null, 'People to show.'],
  max: ['number', '4', 'Maximum avatars before the overflow counter.'],
  size: ["'xsmall' | 'small' | 'medium'", "'small'", 'Avatar size.'],
});
