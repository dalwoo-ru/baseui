# baseui — универсальная дизайн-система

Токены и набор компонентов на Base UI + CSS Modules, плюс страница документации,
собранная на самих компонентах. Всё работает локально: без CDN, внешних шрифтов и сторонних рантаймов.

## Структура

| Путь | Что это |
|---|---|
| `tokens.css` | Дизайн-токены: цвета (светлая/тёмная тема через `data-theme`), Space, Radius, Shadow, Typography + `@font-face` |
| `fonts/` | Geist (woff2) |
| `lib/` | Скомпилированные компоненты (ES-модули) и `components.css` |
| `site/` | Страница документации: `app.js`, `site.css`, `manifest.js` (список страниц) |
| `index.html` | Точка входа |

## Запуск

Нужен любой статический сервер (ES-модули не работают с `file://`):

```sh
python3 -m http.server 8000   # http://localhost:8000
```

## Токены

```html
<link rel="stylesheet" href="tokens.css">
<link rel="stylesheet" href="lib/components.css">
```

Тема — атрибут `data-theme="light|dark"` на `<html>`. Переменные: `--baseui-Background-Primary`,
`--baseui-Space-M`, `--baseui-Radius-S`, `--baseui-Shadow-M`, `font: var(--baseui-Typography-Text-16-Semi-Bold)`.

## Документация

Каждая страница показывает описание, интерактивный Playground с параметрами, таблицу свойств,
примеры состояний и их код. Элементы самой страницы (поиск, переключатель темы, кнопки, поля
параметров) — те же компоненты baseui. Основы: Colors, Typography, Space, Radius, Shadow, Icons.
Компоненты: Autocomplete, Avatar, Badge, Button, Checkbox, CheckboxGroup, Chip, ChipGroup, List,
ListItem, Modal, OtpInput, Radio, RadioGroup, Rating, Select, Switch, Tag, TextField и
обёртки для React Hook Form (`*Field`).

Исходные `.tsx` недоступны — компоненты поставляются в скомпилированном виде в `lib/`.
