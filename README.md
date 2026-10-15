# baseui

A universal design system: foundations and components built on Base UI, plus a documentation site built from the components themselves.
Everything runs locally: no CDN, no external fonts, no third-party runtime.

Structure, names and order of the documentation follow [Astryx](https://astryx.atmeta.com/): **Foundations** and **Components**, with components grouped the same way (Button → Button, Button Group, Icon Button…). Values and look stay baseui's: filled controls, generous radii, no outlines around elements.

## Principles

1. **Minimal and universal.** Only what every product needs. If a component is missing, compose it from existing ones first.
2. **Tokens only.** Color, spacing, radius, shadow, motion, focus and layers come from `--baseui-*`. A theme changes values, not components.
3. **No outlines.** Components are separated by fills, spacing and shadows. Borders appear only for focus, selection and validation.
4. **Consistent API** (below): a component you have not seen behaves predictably.
5. **Accessible by default:** text contrast ≥ 4.5:1 in both themes, visible keyboard focus, `prefers-reduced-motion` (all durations become `0ms`).

## Structure

| Path | What it is |
|---|---|
| `tokens.css` | The single source of truth for tokens (see below) + `@font-face` |
| `fonts/` | Geist (woff2) |
| `lib/` | Compiled baseui components (ES modules) and `components.css` |
| `src/` | Components written as plain ES modules, no build: `components/`, `components.css`, `stories/` (docs), `foundations/` (docs pages) |
| `site/` | The documentation site: `app.js`, `site.css`, `manifest.js` (the page tree) |
| `index.html` | Entry point |

## Run

Any static server (ES modules do not work from `file://`):

```sh
python3 -m http.server 8000   # http://localhost:8000
```

## Use

```html
<link rel="stylesheet" href="tokens.css">
<link rel="stylesheet" href="lib/components.css">
<link rel="stylesheet" href="src/components.css">
```

Theme: `data-theme="light|dark"` on `<html>`.

```js
import { Tabs, TabList, Tab, TabPanel, Banner, ToastProvider, useToast } from './src/index.js';
```

## Tokens

Names follow Astryx contexts; values are baseui's. Order matches the Astryx “All Tokens” page.

| Group | Tokens |
|---|---|
| Color | `--baseui-color-accent`, `-accent-muted`, `-on-accent`, `-brand`; `-background-body / surface / muted / inverted`; `-text-primary / secondary / disabled / accent`; `-icon-*`; `-success / error / warning` (+ `-muted`, `-background-*-inverted`); `-border`, `-border-emphasized`; `-track`; `-overlay*`; `-shadow` |
| Spacing | `--baseui-spacing-0 · 4 · 8 · 12 · 16 · 20 · 24 · 32 · 40 · 48 · 64 · 80` (named by pixel value) |
| Size | `--baseui-size-element-xs · sm · md · lg` (32 · 40 · 48 · 56) |
| Radius | `--baseui-radius-none · 4 · 8 · 12 · 16 · 20 · 24 · 28 · 32 · full` (named by pixel value) |
| Shadow | `--baseui-shadow-low · med · high` |
| Focus | `--baseui-focus-outline-width · style · color · offset` |
| Duration / easing | `--baseui-duration-fast-min … slow-max` (130–1300 ms), `--baseui-ease-standard` |
| Z-index | `--baseui-z-index-sticky · overlay · popup · toast · tooltip` |
| Typography | `font: var(--baseui-Typography-Text-16-Semi-Bold)`, `--baseui-Typography-Header-*`, `--baseui-Typography-Font-Family-Mono` |

## API conventions

| Topic | Rule |
|---|---|
| Sizes | `size`: `xsmall` · `small` · `medium` · `large` |
| Variants | `variant` is appearance; `status` is meaning (`error` · `warning` · `success`, Banner also `info`) |
| State | `value` / `defaultValue` / `onValueChange` (controlled and uncontrolled) |
| Accessibility | `label` is the accessible name; `*Label` props are overridable default strings |
| Extending | `className` is merged; other props go to the root element |

## Add a component

1. `src/components/Name.js`: a component using `h()` from `src/react.js`, ending with `describe(Name, 'description', { prop: [type, default, description] })`.
2. Styles in `src/components.css`: prefix `.bui-`, tokens only, no outlines.
3. `src/stories/Name.stories.js`: `meta()`, `Playground` and examples (`src/stories/_helpers.js`), and `__namedExportsOrder`.
4. One entry in `site/manifest.js`, at the right place in the Astryx order.

The sources (`.tsx`) of the compiled components in `lib/` are not available.
