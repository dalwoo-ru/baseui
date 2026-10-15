#!/usr/bin/env python3
"""Копирует значения токенов из tokens.css (источник правды) во встроенную
копию lib/tokens-*.js, по которой строятся страницы Colors / Space / Radius / Shadow."""
import glob, re, sys

root = __file__.rsplit('/scripts/', 1)[0]
css = open(f'{root}/tokens.css', encoding='utf8').read()
target = glob.glob(f'{root}/lib/tokens-*.js')[0]
js = open(target, encoding='utf8').read()

def blocks(text):
    """-> {'light': block, 'dark': block, 'root': block} по селекторам."""
    # ищем селекторы блоков (в начале строки), а не упоминания в комментариях
    def block(selector_re):
        m = re.search(selector_re, text, re.M)
        start = m.start()
        return text[start:text.index('\n}', start)]
    light = block(r'^(?::root,\s*)?\[data-theme="light"\] \{')
    dark = block(r'^\[data-theme="dark"\] \{')
    return {'light': light, 'dark': dark}

src, dst = blocks(css), blocks(js)
changed = 0
for theme in ('light', 'dark'):
    vals = dict(re.findall(r'(--baseui-[\w-]+): ([^;]+);', src[theme]))
    def sub(m):
        global changed
        name = m.group(1)
        if name in vals and vals[name] != m.group(2):
            changed += 1
            return f'{name}: {vals[name]};'
        return m.group(0)
    new = re.sub(r'(--baseui-[\w-]+): ([^;]+);', sub, dst[theme])
    js = js.replace(dst[theme], new)
open(target, 'w', encoding='utf8').write(js)
print(f'tokens synced: {changed} value(s) updated in {target.split("/")[-1]}')
