import{j as t}from"./jsx-runtime-uesCr-IX.js";import"./iframe-BGftapzZ.js";import"./preload-helper-Dp1pzeXC.js";const f="data:image/svg+xml,%3csvg%20width='273'%20height='37'%20viewBox='0%200%20273%2037'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3crect%20width='273'%20height='31'%20rx='15.5'%20fill='%232F3745'/%3e%3cpath%20d='M137.246%2036.1638C136.849%2036.6094%20136.151%2036.6094%20135.754%2036.1638L130.625%2030.4158C130.05%2029.7713%20130.508%2028.75%20131.371%2028.75L141.629%2028.75C142.492%2028.75%20142.95%2029.7713%20142.375%2030.4158L137.246%2036.1638Z'%20fill='%232F3745'/%3e%3c/svg%3e";function u(){const e=localStorage.getItem("recentLogin");return t.jsxs("div",{className:"relative flex justify-center",children:[t.jsx("img",{src:f,className:"mx-[20%] mb-20"}),e?t.jsxs("p",{className:"absolute top-7  text-grayScaleBlack50 text-Caption1-Bold font-bold",children:[t.jsx("span",{className:"text-grayScaleWhite",children:e}),"로 최근에 로그인 했어요"]}):t.jsxs("p",{className:"absolute top-7  text-grayScaleBlack50 text-Caption1-Bold font-bold",children:["회원가입하고"," ",t.jsx("span",{className:"text-grayScaleWhite",children:"모든 서비스 이용"}),"해보세요!"]})]})}u.__docgenInfo={description:"",methods:[],displayName:"LoginCalloutChip"};const C=e=>{e?localStorage.setItem("recentLogin",e):localStorage.removeItem("recentLogin")},y={title:"callout & tooltip/callout_chip",component:u,parameters:{routerPath:"/my",layout:"centered"},tags:["autodocs"],decorators:[(e,L)=>{var s;const x=(s=L.parameters)==null?void 0:s.recentLogin;return C(x),t.jsx(e,{})}]},o={parameters:{recentLogin:"카카오"}},a={parameters:{recentLogin:"Apple"}},r={parameters:{recentLogin:void 0}};var n,c,i;o.parameters={...o.parameters,docs:{...(n=o.parameters)==null?void 0:n.docs,source:{originalSource:`{
  parameters: {
    recentLogin: "카카오"
  }
}`,...(i=(c=o.parameters)==null?void 0:c.docs)==null?void 0:i.source}}};var l,p,m;a.parameters={...a.parameters,docs:{...(l=a.parameters)==null?void 0:l.docs,source:{originalSource:`{
  parameters: {
    recentLogin: "Apple"
  }
}`,...(m=(p=a.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};var g,d,h;r.parameters={...r.parameters,docs:{...(g=r.parameters)==null?void 0:g.docs,source:{originalSource:`{
  parameters: {
    recentLogin: undefined
  }
}`,...(h=(d=r.parameters)==null?void 0:d.docs)==null?void 0:h.source}}};const W=["WithKakaoLogin","WithAppleLogin","WithoutRecentLogin"];export{a as WithAppleLogin,o as WithKakaoLogin,r as WithoutRecentLogin,W as __namedExportsOrder,y as default};
