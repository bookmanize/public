(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[927],{1559:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/[lang]/feedback",function(){return r(8321)}])},9413:function(e,t,r){"use strict";var n=r(5893);r(7294);var s=r(6010);let a=e=>{let{as:t="p",variant:r="text",children:a,className:l}=e;return(0,n.jsx)(t,{className:(0,s.Z)({title:"text-2xl font-semibold",text:"text-base text-black-secondary"}[r],l),children:a})};t.Z=a},4292:function(e,t,r){"use strict";r.d(t,{Z:function(){return s}});var n=r(5893);function s(e){let{children:t}=e;return(0,n.jsx)("main",{className:"flex h-screen w-full flex-col gap-5 p-4",children:t})}},8321:function(e,t,r){"use strict";r.r(t),r.d(t,{__N_SSG:function(){return s}});var n=r(1545),s=!0;t.default=n.default},1545:function(e,t,r){"use strict";r.r(t),r.d(t,{__N_SSG:function(){return j},default:function(){return N}});var n,s,a,l=r(5893),c=r(4292),o=r(9413),i=r(7294),u=r(6010);let d=e=>{let{as:t="button",type:r,variant:n="primary",children:s,className:a,...c}=e;return(0,l.jsx)(t,{type:r,className:(0,u.Z)({primary:"inline-flex items-center px-3 h-8 bg-blue text-white text-base rounded-md hover:bg-blue-dark duration-200"}[n],"".concat(a)),...c,children:s})};var h=r(1163),m=r(2120),x=r(7536);function p(){return(p=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}var f=function(e){return i.createElement("svg",p({viewBox:"0 0 12 10",fill:"none",xmlns:"http://www.w3.org/2000/svg"},e),n||(n=i.createElement("path",{d:"M1.333 5.667 4 8.333l6.667-6.666",stroke:"currentColor",strokeWidth:1.5,strokeLinecap:"round",strokeLinejoin:"round"})))};let b=i.forwardRef((e,t)=>{let{children:r,...n}=e;return(0,l.jsxs)("label",{className:"group inline-flex w-full cursor-pointer select-none gap-2 text-base",children:[(0,l.jsx)("input",{...n,ref:t,type:"checkbox",className:"peer absolute h-0 w-0 cursor-pointer opacity-0"}),(0,l.jsx)("span",{className:"relative inline-flex h-6 w-6 items-center justify-center rounded border border-blue-secondary bg-white duration-200 group-hover:border-blue peer-checked:border-blue peer-checked:bg-blue xs:top-1 xs:h-4 xs:w-4",children:(0,l.jsx)("span",{className:"h-4 w-4 pt-0.5 text-white xs:top-2 xs:h-2 xs:w-2",children:(0,l.jsx)(f,{})})}),r]})});var w=r(7533),v=r(4231);function g(){return(g=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}var k=function(e){return i.createElement("svg",g({viewBox:"0 0 100 101",fill:"none",xmlns:"http://www.w3.org/2000/svg"},e),s||(s=i.createElement("path",{d:"M100 50.59c0 27.615-22.386 50.001-50 50.001s-50-22.386-50-50 22.386-50 50-50 50 22.386 50 50Zm-90.919 0c0 22.6 18.32 40.92 40.919 40.92 22.599 0 40.919-18.32 40.919-40.92 0-22.598-18.32-40.918-40.919-40.918-22.599 0-40.919 18.32-40.919 40.919Z",fill:"currentColor"})),a||(a=i.createElement("path",{d:"M93.968 39.04c2.425-.636 3.894-3.128 3.04-5.486A50 50 0 0 0 41.735 1.279c-2.474.414-3.922 2.919-3.285 5.344.637 2.426 3.12 3.849 5.6 3.484a40.916 40.916 0 0 1 44.131 25.769c.902 2.34 3.361 3.802 5.787 3.165Z",fill:"currentFill"})))};let y=v.Ry().shape({checkbox:v.IX(),comment:v.Z_()}).test("Feedback",null,e=>!!e.comment||!!e.checkbox&&!!e.checkbox.length||new v.p8("Is required",null,"feedbackError"));var j=!0;function N(){let e=(0,h.useRouter)(),{t,i18n:r}=(0,m.$G)(["common"]),n=(0,i.useMemo)(()=>[{id:1,title:"The product is too complex or difficult to use"},{id:2,title:"It doesn't have the features I want"},{id:3,title:"Too many technical issues or bugs"},{id:4,title:"I use other bookmark manager"},{id:5,title:"Other"}],[]),{register:s,handleSubmit:a,formState:{isValid:p,isSubmitting:f}}=(0,x.cI)({resolver:(0,w.X)(y),defaultValues:{checkbox:[]}}),v=()=>e.push("/".concat(r.language,"/feedback/success")),g=async e=>{let t=new URLSearchParams;t.set("msg",e.comment),t.set("variant",e.checkbox.join()),await fetch("https://bookmanize.onrender.com?".concat(t)).then(v).catch(v)};return(0,i.useEffect)(()=>{fetch("https://bookmanize.onrender.com?startServer")},[]),(0,l.jsx)(c.Z,{children:(0,l.jsxs)("div",{className:"m-auto flex min-w-[480px] flex-col gap-6 py-5 xs:my-auto xs:min-w-full",children:[(0,l.jsxs)("div",{className:"flex flex-col gap-1",children:[(0,l.jsx)(o.Z,{as:"h1",variant:"title",children:t("Why did you uninstall Bookmanize?")}),(0,l.jsx)(o.Z,{children:t("Help us improve our tool")})]}),(0,l.jsxs)("form",{className:"flex flex-col items-start justify-center gap-4",onSubmit:a(g),children:[n.map(e=>(0,l.jsx)(b,{...s("checkbox"),value:e.title,children:t(e.title)},e.id)),(0,l.jsxs)("div",{className:"mt-6 w-full xs:mt-2",children:[(0,l.jsx)("p",{className:"text-xs text-black-secondary",children:t("How else can wіe improve Bookmanize?")}),(0,l.jsx)("textarea",{...s("comment"),placeholder:t("Type your answer here..."),className:"mt-0.5 mb-2.5 min-h-[108px] w-full rounded bg-white-smoky py-2 px-4 text-base text-black placeholder:text-black-light"}),(0,l.jsxs)(d,{variant:"primary",type:"submit",className:(0,u.Z)(p?"":"opacity-60 hover:bg-blue",f?"opacity-60 hover:bg-blue":""),disabled:!p||f,children:[t("Submit"),f&&(0,l.jsx)(k,{className:"ml-1 h-4 w-4 animate-spin fill-blue-dark "})]})]})]})]})})}}},function(e){e.O(0,[405,774,888,179],function(){return e(e.s=1559)}),_N_E=e.O()}]);