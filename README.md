# baseui

A design system on Base UI with a documentation site built from its own components. Runs locally, no external dependencies.

Documentation structure, names and order follow [Astryx](https://astryx.atmeta.com/): **Foundations** and **Components**. Values and look stay baseui's.

## Run

```sh
python3 -m http.server 8000   # any static server
```

## Use

```html
<link rel="stylesheet" href="tokens.css">
<link rel="stylesheet" href="lib/components.css">
<link rel="stylesheet" href="src/components.css">
```

Theme: `data-theme="light|dark"` on `<html>`.

```js
import { Button, Card, Tabs, TabList, Tab, TabPanel } from './src/index.js';
```

## Structure

| Path | Contents |
|---|---|
| `tokens.css` | Design tokens and fonts |
| `lib/` | Compiled components: Typeahead, Checkbox, Dialog, List, OTP Input, Radio, Rating, Selector, Switch, Text Input, Token |
| `src/` | Components as plain ES modules, their docs pages and styles |
| `site/` | Documentation site and its page tree (`manifest.js`) |

## Tokens

| Group | Names |
|---|---|
| Color | baseui names: `Text-and-Icon-*`, `Background-*`, `Border-*`, `Accent-Colors-*`, `Extensions-*` |
| Spacing | `spacing-0 … 80`, named by pixels |
| Size | `size-element-xs · sm · md · lg` |
| Radius | `radius-none · 4 … 32 · full`, named by pixels |
| Shadow | `shadow-low · med · high` |
| Focus | `focus-outline-width · style · color · offset` |
| Motion | `duration-fast · medium · slow` (+ `-min`, `-max`), `ease-standard` |
| Z-index | `z-index-sticky · overlay · popup · toast · tooltip` |
| Typography | `Typography-Text-*`, `Typography-Header-*` |

## Conventions

- **Props follow Astryx:** `label`, `variant`, `size` (`sm · md · lg`), `isDisabled`, `isLoading`, `isSelected`, `onChange`.
- **No outlines.** Fills, spacing and shadows separate elements. Rings appear for focus and selection.
- **Accessible by default.** Text contrast ≥ 4.5:1, visible focus, reduced motion.

## Add a component

1. `src/components/Name.js`, ending with `describe(Name, 'One sentence.', { prop: [type, default, 'Short fragment'] })`.
2. Styles in `src/components.css`, prefix `.bui-`, tokens only.
3. `src/stories/Name.stories.js` with `meta()`, `Playground` and a few examples.
4. An entry in `site/manifest.js`.
