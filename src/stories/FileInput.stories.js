import { h } from '../react.js';
import { FileInput } from '../components/FileInput.js';
import { meta, playground, W } from './_helpers.js';

export default meta({
  title: 'Components/File Input', component: FileInput, args: { label: 'Drop files here or click to choose', hint: 'PNG or JPG, up to 5 MB', multiple: false, disabled: false },
  argTypes: { label: { control: 'text', description: 'Prompt' }, hint: { control: 'text', description: 'Hint' }, multiple: { control: 'boolean', description: 'Several files' }, disabled: { control: 'boolean', description: 'Disabled' } },
});
export const Playground = { ...playground({ description: 'Click, or drop files onto the area.', source: '{}' }), render: (args) => W(420, h(FileInput, args)) };
export const __namedExportsOrder = ['Playground'];
