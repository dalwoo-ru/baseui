/**
 * Подключает описание к компоненту для страницы документации (таблица свойств).
 * props: { имя: ['тип', 'по умолчанию' | null, 'описание'] }
 */
export function describe(component, description, props) {
  component.__docgenInfo = {
    description,
    props: Object.fromEntries(Object.entries(props).map(([name, [type, def, text]]) => [name, {
      required: false,
      tsType: { name: type, raw: type },
      ...(def != null && { defaultValue: { value: def, computed: false } }),
      description: text,
    }])),
  };
  return component;
}
