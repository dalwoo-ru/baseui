# baseui — универсальная дизайн-система

Токены и набор компонентов на Base UI + CSS Modules, плюс страница документации,
собранная на самих компонентах. Всё работает локально: без CDN, внешних шрифтов и сторонних рантаймов.

## Принципы

1. **Универсальный минимум.** Только то, что нужно любому продукту. Нет компонента — сначала составьте его из существующих.
2. **Три слоя:** Основы (токены) → Компоненты → Паттерны (готовые композиции, показывают, как компоненты работают вместе).
3. **Всё через токены.** Цвет, отступ, радиус, тень, движение, фокус, слой — только `--baseui-*`. Тема меняет значения, а не компоненты.
4. **Единые соглашения** (см. ниже): компонент, которого вы не видели, ведёт себя предсказуемо.
5. **Доступность по умолчанию:** контраст текста ≥ 4.5:1 в обеих темах, видимый фокус с клавиатуры, `prefers-reduced-motion`.

## Структура

| Путь | Что это |
|---|---|
| `tokens.css` | Токены: цвета (светлая/тёмная тема через `data-theme`), Space, Radius, Shadow, Motion, Focus, ZIndex, Typography + `@font-face` |
| `fonts/` | Geist (woff2) |
| `lib/` | Скомпилированные компоненты (ES-модули) и `components.css` |
| `src/` | Компоненты на чистом ES-модуле без сборки: `components/`, `components.css`, `stories/` (документация) |
| `site/` | Страница документации: `app.js`, `site.css`, `manifest.js` (список страниц) |
| `scripts/sync-tokens.py` | Синхронизирует значения цветов из `tokens.css` в копию для страницы Colors |
| `index.html` | Точка входа |

## Запуск

Нужен любой статический сервер (ES-модули не работают с `file://`):

```sh
python3 -m http.server 8000   # http://localhost:8000
```

## Подключение

```html
<link rel="stylesheet" href="tokens.css">
<link rel="stylesheet" href="lib/components.css">
<link rel="stylesheet" href="src/components.css">
```

Тема — атрибут `data-theme="light|dark"` на `<html>`.

```js
import { Tabs, Alert, ToastProvider, useToast } from './src/index.js';
```

## Соглашения по API

| Тема | Правило |
|---|---|
| Размеры | `size`: `xsmall` · `small` · `medium` · `large` |
| Варианты | `variant` — оформление; `status` — семантика (`error` · `warning` · `success`, у Alert ещё `info`) |
| Состояние | `value` / `defaultValue` / `onValueChange` (контролируемый и нет) |
| Доступность | `label` — доступное имя; `*Label` — локализуемые строки по умолчанию на русском |
| Расширение | `className` склеивается; остальные пропсы уходят на корневой элемент |
| Тексты | Строки по умолчанию на русском; все переопределяются пропсами |

## Токены

| Группа | Примеры |
|---|---|
| Цвет | `--baseui-Background-Primary`, `--baseui-Text-and-Icon-Secondary`, `--baseui-Extensions-Border-Error` |
| Отступы, радиусы, тени | `--baseui-Space-M`, `--baseui-Radius-S`, `--baseui-Shadow-M` |
| Движение | `--baseui-Motion-Duration-Fast / Base / Slow`, `--baseui-Motion-Easing` |
| Фокус | `--baseui-Focus-Ring-Color / Width / Offset` |
| Слои | `--baseui-ZIndex-Sticky / Overlay / Popup / Toast / Tooltip` |
| Типографика | `font: var(--baseui-Typography-Text-16-Semi-Bold)`, `--baseui-Typography-Font-Family-Mono` |

## Как добавить компонент

1. `src/components/Name.js` — компонент на `h()` из `src/react.js`, в конце `describe(Name, 'описание', { проп: [тип, по умолчанию, описание] })`.
2. Стили — в `src/components.css`, префикс `.bui-`, только токены.
3. `src/stories/Name.stories.js` — `meta()`, `Playground` и примеры (`src/stories/_helpers.js`). Порядок историй — `__namedExportsOrder`.
4. Строка в `site/manifest.js`.

Исходные `.tsx` скомпилированных компонентов в `lib/` недоступны.
