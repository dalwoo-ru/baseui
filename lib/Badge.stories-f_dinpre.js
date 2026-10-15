import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-DeHZSEgm.js";import{n,t as r}from"./clsx-CTwy9ux-.js";var i,a,o,s,c,l,u,d,f;function p(){return(p=e((()=>{i=`_root_6zq9p_2`,a=`_text_6zq9p_29`,o=`_number_6zq9p_30`,s=`_label_6zq9p_36`,c=`_primary_6zq9p_41`,l=`_brand_6zq9p_46`,u=`_error_6zq9p_52`,d=`_warning_6zq9p_57`,f={root:i,"dot-small":`_dot-small_6zq9p_13`,"dot-medium":`_dot-medium_6zq9p_18`,"dot-large":`_dot-large_6zq9p_23`,text:a,number:o,label:s,primary:c,brand:l,error:u,warning:d}})))()}function m({type:e=`dot-small`,color:t=`primary`,disabled:n=!1,count:i,max:a=99,children:o,className:s,ref:c,...l}){let u=e.startsWith(`dot-`),d=o;return e===`number`&&(d=typeof i==`number`&&i>a?`${a}+`:i),(0,h.jsx)(`span`,{ref:c,className:r(f.root,f[e],f[t],s),"data-disabled":n||void 0,...l,children:!u&&(0,h.jsx)(`span`,{className:f.label,children:d})})}var h;function g(){return(g=e((()=>{n(),p(),h=t(),m.__docgenInfo={description:'A badge is a compact indicator next to other elements: a status dot\n(`dot-small` / `dot-medium` / `dot-large`), short text (`type="text"`) or a\ncounter (`type="number"`). The color is `color` (`primary` / `brand` / `error` /\n`warning`); `disabled` turns it gray. For `type="number"` the value is set by\n`count`; anything above `max` (99 by default) is shown as `{max}+`. A white\nring (`--baseui-color-background-body`) separates the badge from its backdrop. Styles use\nsemantic `--baseui-*` tokens (inverted by theme).\n\nA dot badge is decorative. If the badge carries meaning (an unread count),\npass `aria-label` to the component.',methods:[],displayName:`Badge`,props:{type:{required:!1,tsType:{name:`union`,raw:`'dot-small' | 'dot-medium' | 'dot-large' | 'text' | 'number'`,elements:[{name:`literal`,value:`'dot-small'`},{name:`literal`,value:`'dot-medium'`},{name:`literal`,value:`'dot-large'`},{name:`literal`,value:`'text'`},{name:`literal`,value:`'number'`}]},description:"Content type: status dot (`dot-small` / `dot-medium` / `dot-large`), short text or a number. @default 'dot-small'",defaultValue:{value:`'dot-small'`,computed:!1}},color:{required:!1,tsType:{name:`union`,raw:`'primary' | 'brand' | 'error' | 'warning'`,elements:[{name:`literal`,value:`'primary'`},{name:`literal`,value:`'brand'`},{name:`literal`,value:`'error'`},{name:`literal`,value:`'warning'`}]},description:"Color. Ignored when `disabled`: the badge becomes gray. @default 'primary'",defaultValue:{value:`'primary'`,computed:!1}},disabled:{required:!1,tsType:{name:`boolean`},description:`Inactive state: gray background and muted text.`,defaultValue:{value:`false`,computed:!1}},count:{required:!1,tsType:{name:`number`},description:'Number for `type="number"`. A value above `max` is shown as `{max}+`.'},max:{required:!1,tsType:{name:`number`},description:'Threshold for `type="number"`: larger values are shown as `{max}+`. @default 99',defaultValue:{value:`99`,computed:!1}},children:{required:!1,tsType:{name:`ReactNode`},description:'Short label for `type="text"`.'},className:{required:!1,tsType:{name:`string`},description:"Extra class on the root `<span>` (merged)."},ref:{required:!1,tsType:{name:`Ref`,elements:[{name:`HTMLSpanElement`}],raw:`Ref<HTMLSpanElement>`},description:"Ref to the root `<span>`."}},composes:[`Omit`]}})))()}var _,v,y,b,x,S,C,w,T,E,D,O;function k(){return(k=e((()=>{g(),_=t(),v=[`dot-small`,`dot-medium`,`dot-large`,`text`,`number`],y=[`primary`,`brand`,`error`,`warning`],b=({children:e})=>(0,_.jsx)(`div`,{style:{display:`flex`,gap:`var(--baseui-spacing-12)`,alignItems:`center`},children:e}),x={title:`Components/Badge`,component:m,parameters:{docs:{description:{component:'A badge is a compact indicator next to other elements: a status dot (`dot-small` / `dot-medium` / `dot-large`), short text (`type="text"`) or a counter (`type="number"` + `count`, values above `max` shown as `{max}+`). The color is `color` (primary / brand / error / warning); `disabled` turns it gray. Styles use `--baseui-*` tokens, inverted by theme (`data-theme`).'}}},args:{type:`dot-small`,color:`primary`,disabled:!1,count:5,max:99,children:`Text`},argTypes:{type:{control:`inline-radio`,options:v,description:`Content type`},color:{control:`inline-radio`,options:y,description:`Color (ignored when disabled)`},disabled:{control:`boolean`,description:`Inactive state`},count:{control:`number`,description:`Number for type="number"`},max:{control:`number`,description:`Threshold "{max}+" for type="number"`},children:{control:`text`,description:`Label for type="text"`}}},S={},C={parameters:{controls:{disable:!0}},render:()=>(0,_.jsxs)(b,{children:[(0,_.jsx)(m,{type:`text`,color:`error`,children:`Text`}),(0,_.jsx)(m,{type:`number`,color:`error`,count:100}),(0,_.jsx)(m,{type:`dot-medium`,color:`error`})]})},w={parameters:{controls:{disable:!0}},render:()=>(0,_.jsxs)(b,{children:[(0,_.jsx)(m,{type:`dot-large`,color:`error`}),(0,_.jsx)(m,{type:`dot-medium`,color:`error`}),(0,_.jsx)(m,{type:`dot-small`,color:`error`})]})},T={parameters:{controls:{disable:!0}},render:()=>(0,_.jsxs)(b,{children:[(0,_.jsx)(m,{type:`number`,color:`error`,count:1}),(0,_.jsx)(m,{type:`number`,color:`error`,count:49}),(0,_.jsx)(m,{type:`number`,color:`error`,count:100})]})},E={parameters:{controls:{disable:!0}},render:()=>(0,_.jsxs)(b,{children:[(0,_.jsx)(m,{type:`text`,color:`error`,children:`Text`}),(0,_.jsx)(m,{type:`text`,disabled:!0,children:`Text`})]})},D={parameters:{controls:{disable:!0}},render:()=>(0,_.jsx)(b,{children:y.map(e=>(0,_.jsx)(m,{type:`text`,color:e,children:`Text`},e))})},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{}`,...S.parameters?.docs?.source},description:{story:`Interactive playground.`,...S.parameters?.docs?.description}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <Row>
      <Badge type="text" color="error">
        Text
      </Badge>
      <Badge type="number" color="error" count={100} />
      <Badge type="dot-medium" color="error" />
    </Row>
}`,...C.parameters?.docs?.source},description:{story:`Content type: dot · text · number.`,...C.parameters?.docs?.description}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <Row>
      <Badge type="dot-large" color="error" />
      <Badge type="dot-medium" color="error" />
      <Badge type="dot-small" color="error" />
    </Row>
}`,...w.parameters?.docs?.source},description:{story:`Dot: large · medium · small.`,...w.parameters?.docs?.description}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <Row>
      <Badge type="number" color="error" count={1} />
      <Badge type="number" color="error" count={49} />
      <Badge type="number" color="error" count={100} />
    </Row>
}`,...T.parameters?.docs?.source},description:{story:`Number: 0–9 · 10–99 · above max (“99+”).`,...T.parameters?.docs?.description}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <Row>
      <Badge type="text" color="error">
        Text
      </Badge>
      <Badge type="text" disabled>
        Text
      </Badge>
    </Row>
}`,...E.parameters?.docs?.source},description:{story:`State: enabled · disabled.`,...E.parameters?.docs?.description}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <Row>
      {COLORS.map(color => <Badge key={color} type="text" color={color}>
          Text
        </Badge>)}
    </Row>
}`,...D.parameters?.docs?.source},description:{story:`Color: primary · brand · error · warning.`,...D.parameters?.docs?.description}}},O=[`Playground`,`Types`,`Dot`,`Numbers`,`State`,`Colors`]})))()}k();export{D as Colors,w as Dot,T as Numbers,S as Playground,E as State,C as Types,O as __namedExportsOrder,x as default};