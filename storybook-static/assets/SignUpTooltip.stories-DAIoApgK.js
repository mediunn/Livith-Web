import{j as e}from"./jsx-runtime-uesCr-IX.js";import"./iframe-BGftapzZ.js";import"./preload-helper-Dp1pzeXC.js";const j="data:image/svg+xml,%3csvg%20width='20'%20height='21'%20viewBox='0%200%2020%2021'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M6%206.5L14%2014.5'%20stroke='%2314171B'%20stroke-miterlimit='10'/%3e%3cpath%20d='M13.9999%206.5L6.07959%2014.5'%20stroke='%2314171B'%20stroke-miterlimit='10'/%3e%3c/svg%3e",O="data:image/svg+xml,%3csvg%20width='14'%20height='8'%20viewBox='0%200%2014%208'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M7.9467%200.334229C7.52518%20-0.111409%206.78625%20-0.111408%206.36473%200.33423L0.927821%206.08221C0.318215%206.7267%200.803171%207.74798%201.71881%207.74798L12.5926%207.74798C13.5083%207.74798%2013.9932%206.72669%2013.3836%206.08221L7.9467%200.334229Z'%20fill='%23FFFF97'/%3e%3c/svg%3e";function C({group:a,isOpen:n,onClose:f}){if(!n)return null;const B=a==="B"?"30초 가입하고, 원하는 티켓팅 정보 빠르게!":"30초 가입하고, 관심 공연 디데이 ON!";return e.jsx(e.Fragment,{children:n&&e.jsx(e.Fragment,{children:(a==="B"||a==="C")&&e.jsxs("div",{className:"absolute top-170 right-23",children:[e.jsx("img",{src:O,className:"w-13 absolute right-20 -top-4"}),e.jsxs("div",{className:"flex items-center bg-mainYellow30 rounded-26 px-12 py-5 relative",children:[e.jsx("p",{className:"text-grayScaleBlack80 text-Caption1-Bold font-bold font-NotoSansKR",children:B}),e.jsx("button",{className:"w-20 h-20 cursor-pointer ml-4",onClick:()=>{f()},children:e.jsx("img",{src:j,className:"w-full h-full"})})]})]})})})}C.__docgenInfo={description:"",methods:[],displayName:"SignUpTooltip",props:{group:{required:!0,tsType:{name:"union",raw:'"A" | "B" | "C"',elements:[{name:"literal",value:'"A"'},{name:"literal",value:'"B"'},{name:"literal",value:'"C"'}]},description:""},isOpen:{required:!0,tsType:{name:"boolean"},description:""},onClose:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}};const T={title:"callout & tooltip/tooltip",component:C,argTypes:{onClose:{action:"closed"}},parameters:{layout:"centered"},tags:["autodocs"]},r={args:{group:"A",isOpen:!0}},s={args:{group:"B",isOpen:!0}},o={args:{group:"C",isOpen:!0}},t={args:{group:"B",isOpen:!1}};var i,l,p;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    group: "A",
    isOpen: true
  }
}`,...(p=(l=r.parameters)==null?void 0:l.docs)==null?void 0:p.source}}};var c,u,m;s.parameters={...s.parameters,docs:{...(c=s.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    group: "B",
    isOpen: true
  }
}`,...(m=(u=s.parameters)==null?void 0:u.docs)==null?void 0:m.source}}};var d,g,h;o.parameters={...o.parameters,docs:{...(d=o.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    group: "C",
    isOpen: true
  }
}`,...(h=(g=o.parameters)==null?void 0:g.docs)==null?void 0:h.source}}};var x,w,v;t.parameters={...t.parameters,docs:{...(x=t.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    group: "B",
    isOpen: false
  }
}`,...(v=(w=t.parameters)==null?void 0:w.docs)==null?void 0:v.source}}};const A=["GroupA","GroupB","GroupC","Closed"];export{t as Closed,r as GroupA,s as GroupB,o as GroupC,A as __namedExportsOrder,T as default};
