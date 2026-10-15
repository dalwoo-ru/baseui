import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-DeHZSEgm.js";import{n,t as r}from"./SearchLg-BL46VJpk.js";import{n as i,t as a}from"./Autocomplete-Cg967IeK.js";function o(e){return(0,s.jsx)(a,{...e})}var s,c,l,u,d,f,p,m,h,g;function _(){return(_=e((()=>{n(),i(),s=t(),c=[{value:`steam`,label:`Steam`,details:`PC`},{value:`xbox`,label:`Xbox`,details:`Console`},{value:`playstation`,label:`PlayStation`,details:`Console`},{value:`nintendo`,label:`Nintendo Switch`,details:`Console`},{value:`gog`,label:`GOG`,details:`PC`},{value:`epic`,label:`Epic Games`,details:`PC`}],l={title:`Components/Autocomplete`,component:o,tags:[`autodocs`],parameters:{docs:{description:{component:`Autocomplete поверх Base UI Combobox.Root. Фильтрует options по label/textValue и поддерживает single/multiple с chips или counter.`}}},args:{label:`Платформа`,options:c,floatingLabel:!0,emptyText:`Ничего не найдено`,disabled:!1},argTypes:{label:{control:`text`},placeholder:{control:`text`},floatingLabel:{control:`boolean`},caption:{control:`text`},status:{control:`inline-radio`,options:[`none`,`error`,`warning`,`success`],mapping:{none:void 0}},emptyText:{control:`text`},disabled:{control:`boolean`},mobileSearchPlaceholder:{control:`text`,description:`Placeholder поискового input внутри мобильной шторки`},mobileModalProps:{control:!1,description:`Параметры Modal для шторки на viewport до 1200px включительно`},options:{control:!1}},decorators:[e=>(0,s.jsx)(`div`,{style:{width:360},children:(0,s.jsx)(e,{})})]},u={},d={parameters:{controls:{disable:!0}},decorators:[e=>(0,s.jsx)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`var(--baseui-Space-S)`,width:360},children:(0,s.jsx)(e,{})})],render:()=>(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(a,{label:`Платформа`,options:c}),(0,s.jsx)(a,{label:`Платформа`,options:c,defaultValue:`steam`}),(0,s.jsx)(a,{label:`Платформа`,options:c,disabled:!0}),(0,s.jsx)(a,{label:`Платформа`,options:c,defaultValue:`steam`,status:`error`,caption:`Выберите платформу`}),(0,s.jsx)(a,{label:`Платформа`,options:c,defaultValue:`steam`,status:`warning`,caption:`Проверьте выбор`}),(0,s.jsx)(a,{label:`Платформа`,options:c,defaultValue:`steam`,status:`success`,caption:`Платформа доступна`})]})},f={parameters:{controls:{disable:!0}},decorators:[e=>(0,s.jsx)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:12,width:360},children:(0,s.jsx)(e,{})})],render:()=>(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(a,{label:`Платформа`,options:c,startIcon:(0,s.jsx)(r,{size:24})}),(0,s.jsx)(a,{label:`Платформа`,options:c,startIcon:(0,s.jsx)(r,{size:24}),defaultValue:`steam`}),(0,s.jsx)(a,{label:`Платформа`,options:c,loading:!0}),(0,s.jsx)(a,{label:`Сумма`,options:c,prefix:`$`,suffix:`₽`,defaultValue:`steam`})]})},p={parameters:{controls:{disable:!0}},render:()=>(0,s.jsx)(a,{label:`Платформа`,options:c,defaultOpen:!0})},m={parameters:{controls:{disable:!0}},render:()=>(0,s.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`var(--baseui-Space-S)`},children:[(0,s.jsx)(a,{multiple:!0,label:`Платформы`,options:c,defaultValue:[`steam`]}),(0,s.jsx)(a,{multiple:!0,label:`Платформы`,options:c,defaultValue:[`steam`,`xbox`]}),(0,s.jsx)(a,{multiple:!0,label:`Платформы`,options:c,multipleDisplay:`counter`,defaultValue:c.map(e=>e.value)}),(0,s.jsx)(a,{multiple:!0,label:`Платформы`,options:c,defaultValue:c.map(e=>e.value)})]})},h={parameters:{controls:{disable:!0},viewport:{defaultViewport:`mobile1`}},render:()=>(0,s.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`var(--baseui-Space-S)`},children:[(0,s.jsx)(a,{label:`Платформа`,options:c}),(0,s.jsx)(a,{multiple:!0,label:`Платформы`,options:c,defaultValue:[`steam`]})]})},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  decorators: [Story => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 'var(--baseui-Space-S)',
    width: 360
  }}>
        <Story />
      </div>],
  render: () => <>
      <Autocomplete label="Платформа" options={OPTIONS} />
      <Autocomplete label="Платформа" options={OPTIONS} defaultValue="steam" />
      <Autocomplete label="Платформа" options={OPTIONS} disabled />
      <Autocomplete label="Платформа" options={OPTIONS} defaultValue="steam" status="error" caption="Выберите платформу" />
      <Autocomplete label="Платформа" options={OPTIONS} defaultValue="steam" status="warning" caption="Проверьте выбор" />
      <Autocomplete label="Платформа" options={OPTIONS} defaultValue="steam" status="success" caption="Платформа доступна" />
    </>
}`,...d.parameters?.docs?.source},description:{story:`Empty, filled, disabled и validation из Figma 890:3325.`,...d.parameters?.docs?.description}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  decorators: [Story => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 12,
    width: 360
  }}>
        <Story />
      </div>],
  render: () => <>
      <Autocomplete label="Платформа" options={OPTIONS} startIcon={<SearchLg size={24} />} />
      <Autocomplete label="Платформа" options={OPTIONS} startIcon={<SearchLg size={24} />} defaultValue="steam" />
      <Autocomplete label="Платформа" options={OPTIONS} loading />
      <Autocomplete label="Сумма" options={OPTIONS} prefix="$" suffix="₽" defaultValue="steam" />
    </>
}`,...f.parameters?.docs?.source},description:{story:`startIcon и loading — общий chrome из FieldShell (как у TextField).`,...f.parameters?.docs?.description}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <Autocomplete label="Платформа" options={OPTIONS} defaultOpen />
}`,...p.parameters?.docs?.source},description:{story:`Input фильтрует options по label/textValue.`,...p.parameters?.docs?.description}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 'var(--baseui-Space-S)'
  }}>
      <Autocomplete multiple label="Платформы" options={OPTIONS} defaultValue={['steam']} />
      <Autocomplete multiple label="Платформы" options={OPTIONS} defaultValue={['steam', 'xbox']} />
      <Autocomplete multiple label="Платформы" options={OPTIONS} multipleDisplay="counter" defaultValue={OPTIONS.map(option => option.value)} />
      <Autocomplete multiple label="Платформы" options={OPTIONS} defaultValue={OPTIONS.map(option => option.value)} />
    </div>
}`,...m.parameters?.docs?.source},description:{story:`One, few, counter и flexible из Figma 890:11858.`,...m.parameters?.docs?.description}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    },
    viewport: {
      defaultViewport: 'mobile1'
    }
  },
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 'var(--baseui-Space-S)'
  }}>
      <Autocomplete label="Платформа" options={OPTIONS} />
      <Autocomplete multiple label="Платформы" options={OPTIONS} defaultValue={['steam']} />
    </div>
}`,...h.parameters?.docs?.source},description:{story:`На viewport до 1200px поиск переносится в отдельный input внутри Modal bottom sheet.`,...h.parameters?.docs?.description}}},g=[`Playground`,`States`,`IconAndLoading`,`Opened`,`Multiple`,`MobileSheet`]})))()}_();export{f as IconAndLoading,h as MobileSheet,m as Multiple,p as Opened,u as Playground,d as States,g as __namedExportsOrder,l as default};