# Changelog

## Experimental: Astryx alignment

- Documentation in English: Foundations and Components in Astryx order and nesting.
- Foundations: All Tokens, Color, Icons, Motion, Shadow, Shape, Spacing, Typography.
- Color tokens stay baseui's. Spacing and radius are named by pixels. Motion tokens come from Astryx.
- Avatar (with Group, Group Overflow, Status Dot), Badge, Status Dot, Button (with Group, Icon Button, Toggle Button, Toggle Button Group) and Card (with Clickable, Selectable) follow the Astryx API with baseui visuals.
- Added: Banner, Breadcrumbs, Collapsible, Divider, Empty State, Layout, Link, Metadata List, Number Input, Pagination, Popover, Progress Bar, Segmented Control, Skeleton, Slider, Spinner, Stepper, Table, Tabs, Toast, Tooltip, Alert Dialog.
- Existing compiled components are listed under their Astryx names (Typeahead, Selector, Text Input, Token…).
- Removed: Aspect Ratio, Blockquote, Code, Code Block, Dropdown Menu, Field, File Input, Heading, Icon, Kbd, React Hook Form wrappers, Text, Visually Hidden.
- Sizes use one vocabulary: `xsm · sm · md · lg · xl`. Old names (`small`, `medium`, `large`…) are removed everywhere, including the compiled components.
- Radius follows control height; new tokens `radius-6` and `radius-10`.
- Cleanup: dead CSS and unused code removed; `src/index.js` also exports the compiled components.
