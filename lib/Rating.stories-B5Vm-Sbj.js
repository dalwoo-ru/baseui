import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./react-BZJXY1be.js";import{t as n}from"./jsx-runtime-DeHZSEgm.js";import{n as r,t as i}from"./clsx-CTwy9ux-.js";import{n as a,t as o}from"./Button-D0wLm9ra.js";import{n as s,t as c}from"./Star01-DjlfnUbY.js";var l,u,d,f,p,m,h,g,_,v,y,b,x,S;function C(){return(C=e((()=>{l=`_rating_1ooia_2`,u=`_starButton_1ooia_13`,d=`_large_1ooia_18`,f=`_label_1ooia_21`,p=`_caption_1ooia_25`,m=`_starSlot_1ooia_30`,h=`_medium_1ooia_39`,g=`_small_1ooia_60`,_=`_accent_1ooia_73`,v=`_warning_1ooia_78`,y=`_stars_1ooia_90`,b=`_star_1ooia_13`,x=`_starFill_1ooia_137`,S={rating:l,starButton:u,large:d,label:f,caption:p,starSlot:m,medium:h,small:g,accent:_,warning:v,stars:y,star:b,starFill:x}})))()}function w(e,t,n=!0){let r=Math.min(Math.max(e,0),t);return n?r===t?t:Math.floor(r*2)/2:r}function T(e,t,n,r=!0){let i=w(e,n,r);return Math.min(Math.max(i-(t-1),0),1)}function E(e){return e===1?`1 star`:`${e} stars`}function D(e,t,n,r){if(r===1)return e;let{left:i,width:a}=n.getBoundingClientRect();return t-i<a/2?Math.max(e-.5,.5):e}function O({fill:e}){return(0,j.jsxs)(`span`,{className:S.star,"aria-hidden":`true`,children:[(0,j.jsx)(s,{}),e>0&&(0,j.jsx)(`span`,{className:S.starFill,style:e<1?{clipPath:`inset(0 ${(1-e)*100}% 0 0)`}:void 0,children:(0,j.jsx)(s,{})})]})}function k({value:e=0,max:t=5,size:n=`large`,color:r=`accent`,disabled:a=!1,readOnly:s=!1,label:c,caption:l,precision:u=1,round:d=!0,onChange:f,className:p,name:m,"aria-label":h,ref:g}){let _=(0,A.useId)(),[v,y]=(0,A.useState)(null),b=(0,A.useRef)(!1),x=!a&&!s&&!!f,C={"--baseui-rating-max":t},w=v??e,k=(e,t)=>{!x||!f||f(D(e,t.clientX,t.currentTarget,u))},M=(e,t)=>{y(D(e,t.clientX,t.currentTarget,u))},N=()=>y(null),P=(0,j.jsx)(`div`,{className:S.stars,style:C,children:Array.from({length:t},(n,r)=>{let i=r+1,s=T(w,i,t,d);return x?(0,j.jsx)(o,{type:`button`,name:m,disabled:a,className:S.starButton,"aria-label":E(i),"aria-pressed":e>=i,onMouseEnter:e=>M(i,e),onMouseMove:e=>M(i,e),onPointerDown:()=>{b.current=!0},onFocus:()=>{b.current||y(i),b.current=!1},onClick:e=>k(i,e),children:(0,j.jsx)(O,{fill:s})},i):(0,j.jsx)(`span`,{className:S.starSlot,children:(0,j.jsx)(O,{fill:s})},i)})});return x?(0,j.jsxs)(`div`,{ref:g,className:i(S.rating,S[n],S[r],p),role:`radiogroup`,"aria-label":h,"aria-labelledby":c?_:void 0,"data-disabled":a||void 0,onMouseLeave:N,onBlur:e=>{e.currentTarget.contains(e.relatedTarget)||N()},children:[c&&(0,j.jsx)(`span`,{id:_,className:S.label,children:c}),P,l&&(0,j.jsx)(`span`,{className:S.caption,children:l})]}):(0,j.jsxs)(`div`,{ref:g,className:i(S.rating,S[n],S[r],p),role:`img`,"aria-label":h,"aria-labelledby":c?_:void 0,"data-disabled":a||void 0,children:[c&&(0,j.jsx)(`span`,{id:_,className:S.label,children:c}),P,l&&(0,j.jsx)(`span`,{className:S.caption,children:l})]})}var A,j;function M(){return(M=e((()=>{a(),c(),r(),A=t(),C(),j=n(),k.__docgenInfo={description:"Рейтинг поверх headless Base UI Button для интерактивных звёзд.\nОтображение 0–max с опциональным округлением (`round`) и выбором (`precision`).\nСтили — на семантических токенах `--baseui-*` (тема — `data-theme`). См. Rating.module.scss.\n\nЕсли `label` не задан — доступное имя передайте через `aria-label`,\nиначе рейтинг останется безымянным для скринридеров.",methods:[],displayName:`Rating`,props:{value:{required:!1,tsType:{name:`number`},description:`Текущее значение (0 … max). Отображение — проп round. @default 0`,defaultValue:{value:`0`,computed:!1}},max:{required:!1,tsType:{name:`number`},description:`Количество звёзд в группе. @default 5`,defaultValue:{value:`5`,computed:!1}},size:{required:!1,tsType:{name:`union`,raw:`'large' | 'medium' | 'small'`,elements:[{name:`literal`,value:`'large'`},{name:`literal`,value:`'medium'`},{name:`literal`,value:`'small'`}]},description:`Размер. @default 'large'`,defaultValue:{value:`'large'`,computed:!1}},color:{required:!1,tsType:{name:`union`,raw:`'accent' | 'warning'`,elements:[{name:`literal`,value:`'accent'`},{name:`literal`,value:`'warning'`}]},description:`Цветовая тема звёзд. @default 'accent'`,defaultValue:{value:`'accent'`,computed:!1}},disabled:{required:!1,tsType:{name:`boolean`},description:`Зафиксировано после ввода — серые звёзды, без интерактива.`,defaultValue:{value:`false`,computed:!1}},readOnly:{required:!1,tsType:{name:`boolean`},description:`Только отображение, без выбора.`,defaultValue:{value:`false`,computed:!1}},label:{required:!1,tsType:{name:`ReactNode`},description:`Подпись над звёздами.`},caption:{required:!1,tsType:{name:`ReactNode`},description:`Подпись под звёздами (пояснение или валидация).`},precision:{required:!1,tsType:{name:`union`,raw:`0.5 | 1`,elements:[{name:`literal`,value:`0.5`},{name:`literal`,value:`1`}]},description:`Шаг при клике (1 — целые звёзды; 0.5 — левая/правая половина звезды). @default 1`,defaultValue:{value:`1`,computed:!1}},round:{required:!1,tsType:{name:`boolean`},description:`Округление отображаемого value: true — вниз до 0,5; false — пропорциональная заливка. @default true`,defaultValue:{value:`true`,computed:!1}},onChange:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(value: number) => void`,signature:{arguments:[{type:{name:`number`},name:`value`}],return:{name:`void`}}},description:`Колбэк при изменении значения.`},className:{required:!1,tsType:{name:`string`},description:`Дополнительный класс потребителя (мёржится). Функция-форма Base UI не поддерживается.`},name:{required:!1,tsType:{name:`string`},description:`Имя группы для формы (radiogroup).`},"aria-label":{required:!1,tsType:{name:`string`},description:`Доступное имя, если нет видимого label.`},ref:{required:!1,tsType:{name:`Ref`,elements:[{name:`HTMLDivElement`}],raw:`Ref<HTMLDivElement>`},description:`Ref на корневой элемент (React 19 — обычный проп, без forwardRef).`}}}})))()}var N,P,F,I,L,R,z,B,V,H,U;function W(){return(W=e((()=>{N=t(),M(),P=n(),F=[`large`,`medium`,`small`],I=[`accent`,`warning`],L=({children:e})=>(0,P.jsx)(`div`,{style:{display:`flex`,gap:`var(--baseui-Space-M)`,alignItems:`center`,flexWrap:`wrap`},children:e}),R=({title:e,children:t})=>(0,P.jsxs)(`section`,{style:{display:`flex`,flexDirection:`column`,gap:`var(--baseui-Space-S)`},children:[(0,P.jsx)(`h3`,{style:{margin:0,font:`var(--baseui-Typography-Text-14-Semi-Bold)`,opacity:.6},children:e}),t]}),z={title:`Components/Rating`,component:k,parameters:{docs:{description:{component:"Рейтинг поверх headless Base UI Button для интерактивных звёзд. Отображение 0–max с округлением (`round`) и выбором (`precision`). Стили — на токенах `--baseui-*`, тема переключается атрибутом `data-theme`."}}},args:{value:2.5,max:5,size:`large`,color:`accent`,disabled:!1,readOnly:!1,label:`Label`,caption:`Caption`,precision:1,round:!0},argTypes:{label:{control:`text`,description:`Подпись над звёздами`},caption:{control:`text`,description:`Подпись под звёздами`},value:{control:{type:`number`,min:0,max:10,step:.1},description:`Значение 0–max`},max:{control:{type:`number`,min:1,max:10,step:1},description:`Количество звёзд в группе`},size:{control:`inline-radio`,options:F,description:`Размер`,table:{type:{summary:F.map(e=>`'${e}'`).join(` | `)}}},color:{control:`inline-radio`,options:I,description:`Цветовая тема`,table:{type:{summary:I.map(e=>`'${e}'`).join(` | `)}}},disabled:{control:`boolean`,description:`Зафиксировано (disabled)`},readOnly:{control:`boolean`,description:`Только отображение`},precision:{control:`inline-radio`,options:[1,.5],description:`Шаг выбора (1 = целая звезда, 0.5 = половина)`},round:{control:`boolean`,description:`Округление: true — вниз до 0,5; false — пропорционально`}}},B={},V={parameters:{controls:{disable:!0}},render:()=>(0,P.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`var(--baseui-Space-XL2)`},children:[(0,P.jsx)(R,{title:`Размеры`,children:(0,P.jsx)(L,{children:F.map(e=>(0,P.jsx)(k,{value:2.5,size:e,readOnly:!0,"aria-label":e},e))})}),(0,P.jsx)(R,{title:`Цветовые темы`,children:(0,P.jsx)(L,{children:I.map(e=>(0,P.jsx)(k,{value:3.5,color:e,size:`medium`,readOnly:!0,"aria-label":e},e))})}),(0,P.jsx)(R,{title:`Состояния (enabled · disabled)`,children:(0,P.jsxs)(L,{children:[(0,P.jsx)(k,{value:3.5,size:`medium`,readOnly:!0,"aria-label":`enabled`}),(0,P.jsx)(k,{value:3.5,size:`medium`,disabled:!0,"aria-label":`disabled`})]})}),(0,P.jsx)(R,{title:`Значения звезды (empty · half · filled)`,children:(0,P.jsxs)(L,{children:[(0,P.jsx)(k,{value:0,max:3,size:`large`,readOnly:!0,"aria-label":`empty`}),(0,P.jsx)(k,{value:.5,max:3,size:`large`,readOnly:!0,"aria-label":`half`}),(0,P.jsx)(k,{value:1,max:3,size:`large`,readOnly:!0,"aria-label":`filled`})]})}),(0,P.jsx)(R,{title:`Группа (max)`,children:(0,P.jsxs)(L,{children:[(0,P.jsx)(k,{value:1,max:3,size:`medium`,readOnly:!0,"aria-label":`3 stars`}),(0,P.jsx)(k,{value:2.5,max:5,size:`medium`,readOnly:!0,"aria-label":`5 stars`}),(0,P.jsx)(k,{value:7,max:10,size:`medium`,readOnly:!0,"aria-label":`10 stars`})]})}),(0,P.jsx)(R,{title:`Label / caption`,children:(0,P.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`var(--baseui-Space-S)`,maxWidth:280},children:[(0,P.jsx)(k,{value:4,label:`Label`,caption:`Caption`,readOnly:!0}),(0,P.jsx)(k,{value:4,"aria-label":`without label`,readOnly:!0})]})}),(0,P.jsx)(R,{title:`Округление round при value=3.3`,children:(0,P.jsxs)(L,{children:[(0,P.jsx)(k,{value:3.3,size:`medium`,round:!0,readOnly:!0,"aria-label":`round true`}),(0,P.jsx)(k,{value:3.3,size:`medium`,round:!1,readOnly:!0,"aria-label":`round false`})]})})]})},H={parameters:{controls:{disable:!0}},render:function(){let[e,t]=(0,N.useState)(0);return(0,P.jsx)(k,{value:e,onChange:t,label:`Rate this product`,caption:`Click a star to rate`,precision:.5})}},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{}`,...B.parameters?.docs?.source},description:{story:`Интерактивная песочница.`,...B.parameters?.docs?.description}}},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 'var(--baseui-Space-XL2)'
  }}>
      <Section title="Размеры">
        <Row>
          {SIZES.map(size => <Rating key={size} value={2.5} size={size} readOnly aria-label={size} />)}
        </Row>
      </Section>

      <Section title="Цветовые темы">
        <Row>
          {COLORS.map(color => <Rating key={color} value={3.5} color={color} size="medium" readOnly aria-label={color} />)}
        </Row>
      </Section>

      <Section title="Состояния (enabled · disabled)">
        <Row>
          <Rating value={3.5} size="medium" readOnly aria-label="enabled" />
          <Rating value={3.5} size="medium" disabled aria-label="disabled" />
        </Row>
      </Section>

      <Section title="Значения звезды (empty · half · filled)">
        <Row>
          <Rating value={0} max={3} size="large" readOnly aria-label="empty" />
          <Rating value={0.5} max={3} size="large" readOnly aria-label="half" />
          <Rating value={1} max={3} size="large" readOnly aria-label="filled" />
        </Row>
      </Section>

      <Section title="Группа (max)">
        <Row>
          <Rating value={1} max={3} size="medium" readOnly aria-label="3 stars" />
          <Rating value={2.5} max={5} size="medium" readOnly aria-label="5 stars" />
          <Rating value={7} max={10} size="medium" readOnly aria-label="10 stars" />
        </Row>
      </Section>

      <Section title="Label / caption">
        <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: 'var(--baseui-Space-S)',
        maxWidth: 280
      }}>
          <Rating value={4} label="Label" caption="Caption" readOnly />
          <Rating value={4} aria-label="without label" readOnly />
        </div>
      </Section>

      <Section title="Округление round при value=3.3">
        <Row>
          <Rating value={3.3} size="medium" round readOnly aria-label="round true" />
          <Rating value={3.3} size="medium" round={false} readOnly aria-label="round false" />
        </Row>
      </Section>
    </div>
}`,...V.parameters?.docs?.source},description:{story:`Статичная витрина размеров, цветов, состояний и групп —
вся поверхность компонента на одном экране (без манипуляции контролами).`,...V.parameters?.docs?.description}}},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  render: function Render() {
    const [value, setValue] = useState(0);
    return <Rating value={value} onChange={setValue} label="Rate this product" caption="Click a star to rate" precision={0.5} />;
  }
}`,...H.parameters?.docs?.source},description:{story:`Интерактивный выбор с precision=0.5.`,...H.parameters?.docs?.description}}},U=[`Playground`,`Overview`,`Interactive`]})))()}W();export{H as Interactive,V as Overview,B as Playground,U as __namedExportsOrder,z as default};