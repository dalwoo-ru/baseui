// Documentation tree. Names, order and nesting follow Astryx; page content comes from the story modules.
//   F(name)  – foundations page          N(name) – baseui component written in src/stories
//   B(file)  – compiled baseui component in lib/
// A child with `anchor` opens its parent's page scrolled to that example.
const F = (name) => `../src/foundations/${name}.stories.js`;
const N = (name) => `../src/stories/${name}.stories.js`;
const B = (file) => `../lib/${file}.js`;

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
      { title: 'Icons', file: B('Icons.stories-n14M4pOg'), lead: 'The icon catalog. Choose outline or filled, and the stroke width for outline.' },
      { title: 'Motion', file: F('Motion') },
      { title: 'Shadow', file: F('Shadow') },
      { title: 'Shape', file: F('Shape') },
      { title: 'Spacing', file: F('Spacing') },
      { title: 'Typography', file: B('Typography.stories-CQDoRPEx'), lead: 'Type styles for headings and text.' },
    ],
  },
  {
    section: 'Components',
    items: [
      {
        title: 'Avatar',
        children: [
          { title: 'Avatar', file: N('Avatar') },
          { title: 'Avatar Group', file: N('AvatarGroup') },
          { title: 'Avatar Group Overflow', file: N('AvatarGroupOverflow') },
          { title: 'Avatar Status Dot', file: N('AvatarStatusDot') },
        ],
      },
      { title: 'Badge', file: N('Badge') },
      { title: 'Banner', file: N('Banner') },
      { title: 'Breadcrumbs', children: [{ title: 'Breadcrumb Item', file: BREADCRUMBS, anchor: 'item' }, { title: 'Breadcrumbs', file: BREADCRUMBS }] },
      {
        title: 'Button',
        children: [
          { title: 'Button', file: N('Button') },
          { title: 'Button Group', file: N('ButtonGroup') },
          { title: 'Icon Button', file: N('IconButton') },
          { title: 'Toggle Button', file: N('ToggleButton') },
          { title: 'Toggle Button Group', file: N('ToggleButtonGroup') },
        ],
      },
      { title: 'Card', children: [{ title: 'Card', file: N('Card') }, { title: 'Clickable Card', file: N('ClickableCard') }, { title: 'Selectable Card', file: N('SelectableCard') }] },
      { title: 'Checkbox', children: [{ title: 'Checkbox Input', file: B('Checkbox.stories-CjVZ5VOE'), lead: 'A box that turns one option on or off.' }, { title: 'Checkbox List', file: B('CheckboxGroup.stories-DyCBCBrP'), lead: 'A group of checkboxes for choosing several options.' }] },
      { title: 'Collapsible', children: [{ title: 'Collapsible', file: COLLAPSIBLE }, { title: 'Collapsible Group', file: N('CollapsibleGroup') }] },
      { title: 'Dialog', children: [{ title: 'Alert Dialog', file: N('AlertDialog') }, { title: 'Dialog', file: B('Modal.stories-BG7Qmigd'), lead: 'A modal window for focused content. On small screens it becomes a bottom sheet.' }] },
      { title: 'Divider', file: N('Divider') },
      { title: 'Empty State', file: N('EmptyState') },
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
      { title: 'List', children: [{ title: 'List', file: B('List.stories-Alo3K1f2'), lead: 'A vertical list of rows with an optional title.' }, { title: 'List Item', file: B('ListItem.stories-Dq00OmrP'), lead: 'A row with an icon or avatar, text and an optional control.' }] },
      { title: 'Metadata List', file: N('MetadataList') },
      { title: 'Number Input', file: N('NumberInput') },
      { title: 'OTP Input', file: B('OtpInput.stories-DMTeWrJE'), lead: 'A field for entering a one-time code.' },
      { title: 'Pagination', file: N('Pagination') },
      { title: 'Popover', file: N('Popover') },
      { title: 'Progress Bar', file: N('ProgressBar') },
      { title: 'Radio', children: [{ title: 'Radio List', file: B('RadioGroup.stories-DVXazEy6'), lead: 'A group of radio buttons for choosing one option.' }, { title: 'Radio List Item', file: B('Radio.stories-ByX4his4'), lead: 'A single radio button inside a Radio List.' }] },
      { title: 'Rating', file: B('Rating.stories-B5Vm-Sbj'), lead: 'Shows or collects a rating as stars.' },
      { title: 'Segmented Control', file: N('SegmentedControl') },
      { title: 'Selector', children: [{ title: 'Multi Selector', file: SELECT, anchor: 'multiple', lead: 'A selector that allows choosing several options.' }, { title: 'Selector', file: SELECT, lead: 'A field for choosing an option from a list.' }] },
      { title: 'Skeleton', file: N('Skeleton') },
      { title: 'Slider', file: N('Slider') },
      { title: 'Spinner', file: N('Spinner') },
      { title: 'Status Dot', file: N('StatusDot') },
      { title: 'Stepper', children: [{ title: 'Step', file: STEPPER, anchor: 'step' }, { title: 'Stepper', file: STEPPER }] },
      { title: 'Switch', file: B('Switch.stories-UfYPEzH7'), lead: 'A control that turns a setting on or off immediately.' },
      { title: 'Table', file: N('Table') },
      { title: 'Tabs', children: [{ title: 'Tab', file: TABS, anchor: 'single-tab' }, { title: 'Tab List', file: TABS, anchor: 'tab-list-pill' }, { title: 'Tabs', file: TABS }] },
      { title: 'Text Area', file: TEXT_FIELD, anchor: 'multiline', lead: 'A multi-line text field.' },
      { title: 'Text Input', file: TEXT_FIELD, lead: 'A single-line text field with a floating label.' },
      { title: 'Toast', file: N('Toast') },
      { title: 'Token', children: [{ title: 'Token', file: B('Chip.stories-BFj78RSq'), lead: 'A small chip that can be selected or removed.' }, { title: 'Token Group', file: B('ChipGroup.stories-DmXtmuTG'), lead: 'A group of tokens with single or multiple selection.' }] },
      { title: 'Tooltip', file: N('Tooltip') },
      { title: 'Typeahead', file: B('Autocomplete.stories-CLnOUoA7'), lead: 'A text field that suggests options as you type.' },
    ],
  },
];
