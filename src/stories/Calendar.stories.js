import { h } from '../react.js';
import { Calendar } from '../components/Calendar.js';
import { meta, playground, example, Stack } from './_helpers.js';

const weekend = (d) => d.getDay() === 0 || d.getDay() === 6;
const inDays = (n) => { const d = new Date(); d.setHours(0, 0, 0, 0); d.setDate(d.getDate() + n); return d; };

export default meta({
  title: 'Components/Calendar', component: Calendar, args: { mode: 'single', weekStartsOn: 1, locale: 'en-US', fluid: false },
  argTypes: {
    mode: { control: 'inline-radio', options: ['single', 'range'] },
    weekStartsOn: { control: 'inline-radio', options: [0, 1] },
    locale: { control: 'inline-radio', options: ['en-US', 'de-DE', 'ru-RU', 'ja-JP'] },
    fluid: { control: 'boolean' },
  },
});
export const Playground = { ...playground({ source: `<Calendar mode="single" onValueChange={setDate} />` }), render: (args) => h(Calendar, { key: args.mode, ...args }) };
export const Range = example({
  name: 'Range', render: () => h(Calendar, { mode: 'range', defaultValue: { start: inDays(1), end: inDays(5) } }),
  source: `<Calendar mode="range" value={{ start, end }} onValueChange={setRange} />`,
});
export const Constraints = example({
  name: 'Constraints', render: () => h(Stack, null, h(Calendar, { min: inDays(-3), max: inDays(40), isDateDisabled: weekend })),
  source: `<Calendar min={today - 3 days} max={today + 40 days} isDateDisabled={(d) => d.getDay() === 0 || d.getDay() === 6} />`,
});
export const Locale = example({
  name: 'Locale', render: () => h(Calendar, { locale: 'ru-RU', weekStartsOn: 1 }),
  source: `<Calendar locale="ru-RU" weekStartsOn={1} />`,
});
export const __namedExportsOrder = ['Playground', 'Range', 'Constraints', 'Locale'];
