import { h } from '../react.js';
import { CodeBlock } from '../components/Typography.js';
import { meta, playground, W } from './_helpers.js';

const code = `import { Button } from 'baseui';

export function Save() {
  return <Button>Save</Button>;
}`;
export default meta({ title: 'Components/Code Block', component: CodeBlock, args: { code, language: 'tsx' }, argTypes: { language: { control: 'text', description: 'Language label' } } });
export const Playground = { ...playground({ description: 'Multi-line code with a copy button.', source: '{}' }), render: (args) => W(520, h(CodeBlock, args)) };
export const __namedExportsOrder = ['Playground'];
