import { h, useState } from '../react.js';
import { Button } from './_ui.js';
import { example } from './_helpers.js';

export default {
  title: 'Foundations/Motion',
  parameters: { docs: { description: { component: 'Токены движения: три длительности и одна кривая. Используйте их для всех переходов. При `prefers-reduced-motion: reduce` длительности становятся 0, поэтому переходы отключаются автоматически.' } } },
};

const DURATIONS = [
  ['Fast', '120ms', 'Наведение, нажатие, смена цвета'],
  ['Base', '200ms', 'Раскрытие, появление элементов'],
  ['Slow', '320ms', 'Прогресс, крупные перемещения'],
];

function Demo() {
  const [on, setOn] = useState(false);
  return h('div', { style: { display: 'flex', flexDirection: 'column', gap: 'var(--baseui-Space-M)' } },
    h('div', null, h(Button, { variant: 'secondary', size: 'small', onClick: () => setOn(!on) }, on ? 'Вернуть' : 'Запустить')),
    DURATIONS.map(([name, ms, use]) => h('div', { key: name, style: { display: 'grid', gridTemplateColumns: '140px 1fr', gap: 'var(--baseui-Space-M)', alignItems: 'center' } },
      h('div', null,
        h('div', { style: { font: 'var(--baseui-Typography-Text-14-Semi-Bold)' } }, `Duration-${name}`),
        h('div', { style: { font: 'var(--baseui-Typography-Text-12-Regular)', color: 'var(--baseui-Text-and-Icon-Secondary)' } }, `${ms} · ${use}`)),
      h('div', { style: { height: 40, borderRadius: 'var(--baseui-Radius-S)', background: 'var(--baseui-Background-Secondary)', position: 'relative' } },
        h('div', { style: {
          position: 'absolute', top: 4, bottom: 4, left: 4, width: 32, borderRadius: 'var(--baseui-Radius-XS)', background: 'var(--baseui-Background-Brand)',
          transition: `left var(--baseui-Motion-Duration-${name}) var(--baseui-Motion-Easing)`,
          left: on ? 'calc(100% - 36px)' : 4,
        } })))));
}

export const Durations = example({
  name: 'Durations',
  description: '`--baseui-Motion-Duration-Fast | Base | Slow` и общая кривая `--baseui-Motion-Easing`.',
  render: () => h('div', { style: { maxWidth: 560 } }, h(Demo)),
  source: `.thing {
  transition: transform var(--baseui-Motion-Duration-Base) var(--baseui-Motion-Easing);
}`,
});

export const __namedExportsOrder = ['Durations'];
