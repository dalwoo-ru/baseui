import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./react-BZJXY1be.js";import{t as n}from"./jsx-runtime-DeHZSEgm.js";var r;function i(){return(i=e((()=>{r=`/*
 * Типографика baseui — наборные стили из Figma (Figma library → Typography).
 * При сборке склеивается вместе с tokens.css в dist/styles.css; потребитель подключает
 * всё одним файлом: \`import '@baseui/ui/styles.css'\`.
 *
 * Использование: font: var(--baseui-Typography-Text-16-Regular);
 * font-шорткат подставляет weight, size/line-height и family разом. Family повторяется
 * в каждом токене вынужденно (шорткат без family невалиден) — источник один, см. ниже.
 *
 * Одно семейство — Geist: заголовки набраны Geist Bold, наборный текст — Geist Regular/Semi Bold.
 * Файлы шрифтов пакет отдаёт (export ./fonts/*), но @font-face НЕ объявляет —
 * стратегия загрузки остаётся за приложением (см. README → Шрифты).
 * letter-spacing у всех стилей 0 (= дефолт), отдельно не задаётся.
 */

:root {
  /*
   * Каскад подхвата шрифта (без настройки на стороне потребителя):
   * 1) --font-geist — конвенция next/font в продуктах (next15 вешает её на <html>;
   *    next/font регистрирует family под хэш-именем, потому "Geist" его не находит);
   * 2) "Geist" — если шрифт подключён классически (например, @fontsource/geist-sans);
   * 3) системный фолбэк.
   */
  --baseui-Typography-Font-Family:
    var(--font-geist, "Geist"), system-ui, -apple-system, "Segoe UI", sans-serif;

  /* Headers — Geist Bold */
  --baseui-Typography-Header-48: 700 48px / 64px var(--baseui-Typography-Font-Family);
  --baseui-Typography-Header-40: 700 40px / 52px var(--baseui-Typography-Font-Family);
  --baseui-Typography-Header-32: 700 32px / 40px var(--baseui-Typography-Font-Family);
  --baseui-Typography-Header-28: 700 28px / 34px var(--baseui-Typography-Font-Family);
  --baseui-Typography-Header-24: 700 24px / 32px var(--baseui-Typography-Font-Family);
  --baseui-Typography-Header-20: 700 20px / 24px var(--baseui-Typography-Font-Family);

  /* Text — Geist */
  --baseui-Typography-Text-20-Semi-Bold: 600 20px / 26px var(--baseui-Typography-Font-Family);
  --baseui-Typography-Text-20-Regular: 400 20px / 26px var(--baseui-Typography-Font-Family);
  --baseui-Typography-Text-16-Bold: 700 16px / 22px var(--baseui-Typography-Font-Family);
  --baseui-Typography-Text-16-Semi-Bold: 600 16px / 22px var(--baseui-Typography-Font-Family);
  --baseui-Typography-Text-16-Regular: 400 16px / 22px var(--baseui-Typography-Font-Family);
  --baseui-Typography-Text-14-Bold: 700 14px / 20px var(--baseui-Typography-Font-Family);
  --baseui-Typography-Text-14-Semi-Bold: 600 14px / 20px var(--baseui-Typography-Font-Family);
  --baseui-Typography-Text-14-Regular: 400 14px / 20px var(--baseui-Typography-Font-Family);
  --baseui-Typography-Text-12-Regular: 400 12px / 16px var(--baseui-Typography-Font-Family);
  --baseui-Typography-Text-10-Regular: 400 10px / 14px var(--baseui-Typography-Font-Family);
}
`})))()}var a,o,s,c,l,u,d,f,p,m,h,g;function _(){return(_=e((()=>{a=`_page_1vi68_3`,o=`_section_1vi68_10`,s=`_sectionTitle_1vi68_16`,c=`_list_1vi68_23`,l=`_row_1vi68_29`,u=`_sample_1vi68_49`,d=`_meta_1vi68_57`,f=`_name_1vi68_65`,p=`_value_1vi68_69`,m=`_valueCopied_1vi68_74 _value_1vi68_69`,h=`_srOnly_1vi68_80`,g={page:a,section:o,sectionTitle:s,list:c,row:l,sample:u,meta:d,name:f,value:p,valueCopied:m,srOnly:h}})))()}function v(e,t){let n=e.indexOf(t),r=e.indexOf(`{`,n),i=e.indexOf(`
}`,r);return e.slice(r+1,i)}function y(e){let t=[],n=null;for(let r of e.split(`
`)){let e=r.match(/^\s*\/\*\s*(.+?)\s*\*\/\s*$/);if(e){n={title:e[1],tokens:[]},t.push(n);continue}let i=r.match(/--(baseui-Typography-[\w-]+):\s*([^;]+);/);if(!i||!n)continue;let a=i[1],o=a.replace(/^baseui-Typography-/,``);n.tokens.push({name:o,varName:a,value:i[2].trim()})}return t}function b(e){let t=e.match(/^(\d+)\s+(\d+)px\s*\/\s*(\d+)px/);if(!t)return e;let[,n,r,i]=t;return`${n} · ${r}/${i}`}function x(){let[e,t]=(0,S.useState)(``);(0,S.useEffect)(()=>{if(!e)return;let n=window.setTimeout(()=>t(``),1500);return()=>clearTimeout(n)},[e]);let n=(0,S.useCallback)(e=>{let n=`var(--${e})`,r=()=>{let r=document.activeElement,i=document.createElement(`textarea`);i.value=n,i.setAttribute(`readonly`,``),i.style.cssText=`position:fixed;top:0;left:0;opacity:0`,document.body.append(i),i.select();let a=document.execCommand(`copy`);i.remove(),r instanceof HTMLElement&&r.focus(),a&&t(e)};navigator.clipboard?navigator.clipboard.writeText(n).then(()=>t(e)).catch(r):r()},[]);return(0,C.jsxs)(`div`,{className:g.page,children:[w.map(t=>(0,C.jsxs)(`section`,{className:g.section,children:[(0,C.jsx)(`h3`,{className:g.sectionTitle,children:t.title}),(0,C.jsx)(`div`,{className:g.list,children:t.tokens.map(t=>(0,C.jsxs)(`button`,{type:`button`,className:g.row,title:`var(--${t.varName}): ${t.value}`,onClick:()=>n(t.varName),children:[(0,C.jsx)(`span`,{className:g.sample,style:{font:`var(--${t.varName})`},children:t.name.replace(/-/g,` `)}),(0,C.jsxs)(`span`,{className:g.meta,children:[(0,C.jsx)(`span`,{className:g.name,children:t.name}),(0,C.jsx)(`span`,{className:e===t.varName?g.valueCopied:g.value,children:e===t.varName?`Скопировано`:b(t.value)})]})]},t.varName))})]},t.title)),(0,C.jsx)(`span`,{className:g.srOnly,role:`status`,children:e&&`Скопировано var(--${e})`})]})}var S,C,w,T,E,D;function O(){return(O=e((()=>{S=t(),i(),_(),C=n(),w=y(v(r,`:root`)),T={title:`Foundations/Typography`,tags:[`!autodocs`],parameters:{controls:{disable:!0}}},E={render:()=>(0,C.jsx)(x,{})},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  render: () => <Typography />
}`,...E.parameters?.docs?.source},description:{story:"Наборные стили `--baseui-Typography-*` из typography.css, сгруппированные по секциям\nфайла (заголовок секции = комментарий над блоком токенов). Клик по строке копирует\n`var(--baseui-...)`.",...E.parameters?.docs?.description}}},D=[`Scale`]})))()}O();export{E as Scale,D as __namedExportsOrder,T as default};