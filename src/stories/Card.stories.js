import { h } from '../react.js';
import { Card } from '../components/Card.js';
import { Button } from './_ui.js';
import { meta, playground, example, Row, W } from './_helpers.js';

export default meta({
  title: 'Components/Card', component: Card,
  args: { variant: 'filled', padding: 16, title: 'Card title', subtitle: 'Supporting line', children: 'Card content: text, a form or a list.' },
  argTypes: {
    variant: { control: 'inline-radio', options: ['filled', 'raised'], description: 'Fill or shadow' },
    padding: { control: 'inline-radio', options: [8, 12, 16, 24, 32], description: 'Padding, px' },
    title: { control: 'text', description: 'Heading' },
    subtitle: { control: 'text', description: 'Subtitle' },
    children: { control: 'text', description: 'Content' },
  },
});
export const Playground = { ...playground({ description: 'Groups related content. Cards have no outline.', source: '{}' }), render: (args) => W(400, h(Card, args)) };
export const Variants = example({
  name: 'Variants', description: 'A quiet fill on a white page, or a raised surface with a shadow.',
  render: () => h(Row, { align: 'stretch' }, ['filled', 'raised'].map((v) => h(Card, { key: v, variant: v, title: v, style: { width: 220 } }, 'Card text'))),
  source: `<Card variant="filled" title="filled">Card text</Card>
<Card variant="raised" title="raised">Card text</Card>`,
});
export const HeaderAndFooter = example({
  name: 'Header And Footer', description: 'Actions in the header and a footer with the main buttons.',
  render: () => W(420, h(Card, {
    title: 'Team', subtitle: '3 members', actions: h(Button, { variant: 'text', size: 'xsmall' }, 'Edit'),
    footer: [h(Button, { key: 1, size: 'small' }, 'Invite'), h(Button, { key: 2, size: 'small', variant: 'secondary' }, 'Cancel')],
  }, 'Team members get access to every project.')),
  source: `<Card
  title="Team"
  subtitle="3 members"
  actions={<Button variant="text" size="xsmall">Edit</Button>}
  footer={<><Button size="small">Invite</Button><Button size="small" variant="secondary">Cancel</Button></>}
>
  Team members get access to every project.
</Card>`,
});
export const __namedExportsOrder = ['Playground', 'Variants', 'HeaderAndFooter'];
