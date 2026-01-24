import{j as n}from"./jsx-runtime-uesCr-IX.js";import"./iframe-BGftapzZ.js";import"./preload-helper-Dp1pzeXC.js";const P=({variant:t,isPressed:o})=>{const F=t==="fill"?o?"#FFEB56":"#DBDCDF":"transparent",w=o?t==="line"?"#FFEB56":"#2F3745":"#808794";return n.jsxs("svg",{width:"25",height:"25",viewBox:"0 0 25 25",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[n.jsx("rect",{x:"0.5",y:"0.5",width:"24",height:"24",rx:"4",fill:F}),n.jsx("path",{d:"M7.5 12.5L11 16L17.5 9.5",stroke:w,"stroke-width":"1.5"})]})};P.__docgenInfo={description:"",methods:[],displayName:"Checkbox",props:{variant:{required:!0,tsType:{name:"union",raw:'"line" | "fill"',elements:[{name:"literal",value:'"line"'},{name:"literal",value:'"fill"'}]},description:""},isPressed:{required:!0,tsType:{name:"boolean"},description:""}}};const C={title:"Checkbox/checkbox",component:P,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{variant:{control:{type:"radio"},options:["line","fill"]},isPressed:{control:{type:"boolean"}}}},e={args:{variant:"line",isPressed:!1}},s={args:{variant:"line",isPressed:!0}},r={args:{variant:"fill",isPressed:!1}},a={args:{variant:"fill",isPressed:!0}};var i,l,c;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    variant: "line",
    isPressed: false
  }
}`,...(c=(l=e.parameters)==null?void 0:l.docs)==null?void 0:c.source}}};var d,p,m;s.parameters={...s.parameters,docs:{...(d=s.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    variant: "line",
    isPressed: true
  }
}`,...(m=(p=s.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};var u,g,f;r.parameters={...r.parameters,docs:{...(u=r.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    variant: "fill",
    isPressed: false
  }
}`,...(f=(g=r.parameters)==null?void 0:g.docs)==null?void 0:f.source}}};var h,x,v;a.parameters={...a.parameters,docs:{...(h=a.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    variant: "fill",
    isPressed: true
  }
}`,...(v=(x=a.parameters)==null?void 0:x.docs)==null?void 0:v.source}}};const L=["LineUnpressed","LinePressed","FillUnpressed","FillPressed"];export{a as FillPressed,r as FillUnpressed,s as LinePressed,e as LineUnpressed,L as __namedExportsOrder,C as default};
