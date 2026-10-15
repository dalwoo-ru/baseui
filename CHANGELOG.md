# Changelog

## Astryx alignment (experimental)

### Documentation
- Everything is in English.
- Two sections, **Foundations** and **Components**, in Astryx order and nesting. Components that Astryx groups are nested the same way (Button, Card, Checkbox, Collapsible, Dialog, Layout, Radio, Selector, Stepper, Tabs, Token…). Children without a page of their own open the parent page at the right example.
- Foundations: All Tokens, Color, Icons, Motion, Shadow, Shape, Spacing, Typography. Elevation and Illustrations are not taken; Shadow replaces Elevation.
- Pages are rendered from `tokens.css`, so they cannot drift from the real values.

### Tokens
- **Color:** baseui values, Astryx-style names by context: `color-text-primary`, `color-background-body / surface / muted`, `color-accent`, `color-border`, `color-success-muted`…
- **Motion:** taken from Astryx as is: nine durations (130–1300 ms) and `ease-standard`; all durations are `0ms` under `prefers-reduced-motion`. Compiled components now use these tokens.
- **Spacing and Shape:** a short list of recommended values named by pixel value, instead of the former size names.
- **Shadow:** baseui values, named `low / med / high`.
- Added `size-element-*`, `focus-outline-*` (Astryx names), `z-index-*`.

### Components
- Added in Astryx style, without outlines: Aspect Ratio, Avatar Group, Banner, Blockquote, Button Group, Icon Button, Toggle Button, Toggle Button Group, Card, Clickable Card, Selectable Card, Code, Code Block, Collapsible, Collapsible Group, Alert Dialog, Divider, Dropdown Menu, Empty State, Field, File Input, Heading, Icon, Kbd, Stack (+ H Stack, V Stack), Grid, Center, Section, Link, Metadata List, Number Input, Pagination, Popover, Progress Bar, Segmented Control, Skeleton, Slider, Spinner, Stepper, Table, Tabs (Tab, Tab List, Tab Panel), Text, Toast, Tooltip, Visually Hidden, Breadcrumbs.
- Existing baseui components keep their implementation and are placed by their Astryx name: Autocomplete → Typeahead, Select → Selector, TextField → Text Input / Text Area, Tag → Badge, Badge → Status Dot, Chip → Token, ChipGroup → Token Group, Checkbox → Checkbox Input, CheckboxGroup → Checkbox List, RadioGroup → Radio List, Radio → Radio List Item, Modal → Dialog. OTP Input, Rating and the React Hook Form wrappers have no Astryx counterpart and stay as extras.

### Not taken
- Elevation and Illustrations; data visualization and syntax color tokens; Astryx's outlines around elements.
