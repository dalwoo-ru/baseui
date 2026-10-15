# baseui — универсальная дизайн-система

Универсальная дизайн-система на основе Base UI и CSS Modules: токены и набор компонентов.

## Состав

| Путь | Что это |
|---|---|
| `tokens.css` | Дизайн-токены: цвета (светлая/тёмная темы через `data-theme`), Space, Radius, Shadow, Typography + `@font-face` (Geist, Hagrid Text) |
| `fonts/` | Шрифты |
| `index.html` | Страница просмотра компонентов: навигация, поиск, переключатель темы, ширина (Desktop/Tablet/Mobile) |
| `storybook/` | Собранные компоненты и их истории — страница просмотра рендерит именно их |

## Запуск

Нужен любой статический сервер (модули не работают с `file://`):

```sh
python3 -m http.server 8000   # затем http://localhost:8000
```

## Токены

Подключение: `<link rel="stylesheet" href="tokens.css">`, тема — атрибут `data-theme="light|dark"` на `<html>`.
Все переменные имеют префикс `--baseui-`, например `--baseui-Background-Primary`, `--baseui-Space-M`,
`--baseui-Radius-S`, `--baseui-Shadow-M`, `font: var(--baseui-Typography-Text-16-Semi-Bold)`.

## Компоненты

Autocomplete, Avatar, Badge, Button, Checkbox, CheckboxGroup, Chip, ChipGroup, List, ListItem, Modal,
OtpInput, Radio, RadioGroup, Rating, Select, Switch, Tag, TextField, а также RHF-обёртки
(AutocompleteField, CheckboxField, CheckboxGroupField, OtpInputField, RadioGroupField, SelectField,
SwitchField, TextFieldField). Foundations: Colors, Typography, Space, Radius, Shadow, Icons.

Исходные `.tsx` в архиве отсутствовали (только скомпилированная сборка), поэтому компоненты
поставляются в виде бандлов в `storybook/assets`.
