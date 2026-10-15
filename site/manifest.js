// Documentation tree. Names, order and nesting follow Astryx; page content comes from the story modules.
//   F(name)  – foundations page          N(name) – baseui component written in src/stories
//   B(file)  – compiled baseui component in lib/
// A child with `anchor` opens its parent's page scrolled to that example.
const F = (name) => `../src/foundations/${name}.stories.js`;
const N = (name) => `../src/stories/${name}.stories.js`;
const B = (file) => `../lib/${file}.js`;

const AVATAR = B('Avatar.stories-BJh8m-el');
const BREADCRUMBS = N('Breadcrumbs');
const COLLAPSIBLE = N('Collapsible');
const STEPPER = N('Stepper');
const TABS = N('Tabs');
const STACK = N('Stack');
const TEXT_FIELD = B('TextField.stories-JboKGoC9');
const SELECT = B('Select.stories-vOU6jfFc');

export default [
  {
    section: 'Foundations',
    items: [
      { title: 'All Tokens', file: F('AllTokens') },
      { title: 'Color', file: F('Color') },
      { title: 'Icons', file: B('Icons.stories-n14M4pOg') },
      { title: 'Motion', file: F('Motion') },
      { title: 'Shadow', file: F('Shadow') },
      { title: 'Shape', file: F('Shape') },
      { title: 'Spacing', file: F('Spacing') },
      { title: 'Typography', file: B('Typography.stories-CQDoRPEx') },
    ],
  },
  {
    section: 'Components',
    items: [
      { title: 'Aspect Ratio', file: N('AspectRatio') },
      { title: 'Avatar', children: [{ title: 'Avatar', file: AVATAR }, { title: 'Avatar Group', file: N('AvatarGroup') }] },
      { title: 'Badge', file: B('Tag.stories-3UvEDDiu') },
      { title: 'Banner', file: N('Banner') },
      { title: 'Blockquote', file: N('Blockquote') },
      { title: 'Breadcrumbs', children: [{ title: 'Breadcrumb Item', file: BREADCRUMBS, anchor: 'item' }, { title: 'Breadcrumbs', file: BREADCRUMBS }] },
      {
        title: 'Button',
        children: [
          { title: 'Button', file: B('Button.stories-BIZ8i_Er') },
          { title: 'Button Group', file: N('ButtonGroup') },
          { title: 'Icon Button', file: N('IconButton') },
          { title: 'Toggle Button', file: N('ToggleButton') },
          { title: 'Toggle Button Group', file: N('ToggleButtonGroup') },
        ],
      },
      { title: 'Card', children: [{ title: 'Card', file: N('Card') }, { title: 'Clickable Card', file: N('ClickableCard') }, { title: 'Selectable Card', file: N('SelectableCard') }] },
      { title: 'Checkbox', children: [{ title: 'Checkbox Input', file: B('Checkbox.stories-CjVZ5VOE') }, { title: 'Checkbox List', file: B('CheckboxGroup.stories-DyCBCBrP') }] },
      { title: 'Code', file: N('Code') },
      { title: 'Code Block', file: N('CodeBlock') },
      { title: 'Collapsible', children: [{ title: 'Collapsible', file: COLLAPSIBLE }, { title: 'Collapsible Group', file: N('CollapsibleGroup') }] },
      { title: 'Dialog', children: [{ title: 'Alert Dialog', file: N('AlertDialog') }, { title: 'Dialog', file: B('Modal.stories-BG7Qmigd') }] },
      { title: 'Divider', file: N('Divider') },
      { title: 'Dropdown Menu', file: N('DropdownMenu') },
      { title: 'Empty State', file: N('EmptyState') },
      { title: 'Field', file: N('Field') },
      { title: 'File Input', file: N('FileInput') },
      { title: 'Heading', file: N('Heading') },
      { title: 'Icon', file: N('Icon') },
      { title: 'Kbd', file: N('Kbd') },
      {
        title: 'Layout',
        children: [
          { title: 'Center', file: N('Center') },
          { title: 'Grid', file: N('Grid') },
          { title: 'H Stack', file: STACK, anchor: 'horizontal-stack' },
          { title: 'Section', file: N('Section') },
          { title: 'Stack', file: STACK },
          { title: 'V Stack', file: STACK, anchor: 'vertical-stack' },
        ],
      },
      { title: 'Link', file: N('Link') },
      { title: 'List', children: [{ title: 'List', file: B('List.stories-Alo3K1f2') }, { title: 'List Item', file: B('ListItem.stories-Dq00OmrP') }] },
      { title: 'Metadata List', file: N('MetadataList') },
      { title: 'Number Input', file: N('NumberInput') },
      { title: 'OTP Input', file: B('OtpInput.stories-DMTeWrJE') },
      { title: 'Pagination', file: N('Pagination') },
      { title: 'Popover', file: N('Popover') },
      { title: 'Progress Bar', file: N('ProgressBar') },
      { title: 'Radio', children: [{ title: 'Radio List', file: B('RadioGroup.stories-DVXazEy6') }, { title: 'Radio List Item', file: B('Radio.stories-ByX4his4') }] },
      { title: 'Rating', file: B('Rating.stories-B5Vm-Sbj') },
      {
        title: 'React Hook Form',
        children: [
          { title: 'Checkbox Field', file: B('CheckboxField.stories-CTTRTHsq') },
          { title: 'Checkbox List Field', file: B('CheckboxGroupField.stories-yW9_augD') },
          { title: 'OTP Input Field', file: B('OtpInputField.stories-BIHMMVbP') },
          { title: 'Radio List Field', file: B('RadioGroupField.stories-D-4vXCNS') },
          { title: 'Selector Field', file: B('SelectField.stories-Dp55OImQ') },
          { title: 'Switch Field', file: B('SwitchField.stories-CUxmTWyh') },
          { title: 'Text Input Field', file: B('TextFieldField.stories-tToz9u2V') },
          { title: 'Typeahead Field', file: B('AutocompleteField.stories-BOjTdQbL') },
        ],
      },
      { title: 'Segmented Control', file: N('SegmentedControl') },
      { title: 'Selector', children: [{ title: 'Multi Selector', file: SELECT, anchor: 'multiple' }, { title: 'Selector', file: SELECT }] },
      { title: 'Skeleton', file: N('Skeleton') },
      { title: 'Slider', file: N('Slider') },
      { title: 'Spinner', file: N('Spinner') },
      { title: 'Status Dot', file: B('Badge.stories-f_dinpre') },
      { title: 'Stepper', children: [{ title: 'Step', file: STEPPER, anchor: 'step' }, { title: 'Stepper', file: STEPPER }] },
      { title: 'Switch', file: B('Switch.stories-UfYPEzH7') },
      { title: 'Table', file: N('Table') },
      { title: 'Tabs', children: [{ title: 'Tab', file: TABS, anchor: 'single-tab' }, { title: 'Tab List', file: TABS, anchor: 'tab-list-pill' }, { title: 'Tabs', file: TABS }] },
      { title: 'Text', file: N('Text') },
      { title: 'Text Area', file: TEXT_FIELD, anchor: 'multiline' },
      { title: 'Text Input', file: TEXT_FIELD },
      { title: 'Toast', file: N('Toast') },
      { title: 'Token', children: [{ title: 'Token', file: B('Chip.stories-BFj78RSq') }, { title: 'Token Group', file: B('ChipGroup.stories-DmXtmuTG') }] },
      { title: 'Tooltip', file: N('Tooltip') },
      { title: 'Typeahead', file: B('Autocomplete.stories-CLnOUoA7') },
      { title: 'Visually Hidden', file: N('VisuallyHidden') },
    ],
  },
];
