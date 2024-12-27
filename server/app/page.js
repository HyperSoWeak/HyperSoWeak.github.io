(()=>{var e={};e.id=974,e.ids=[974],e.modules={846:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},9121:e=>{"use strict";e.exports=require("next/dist/server/app-render/action-async-storage.external.js")},3295:e=>{"use strict";e.exports=require("next/dist/server/app-render/after-task-async-storage.external.js")},9294:e=>{"use strict";e.exports=require("next/dist/server/app-render/work-async-storage.external.js")},3033:e=>{"use strict";e.exports=require("next/dist/server/app-render/work-unit-async-storage.external.js")},3873:e=>{"use strict";e.exports=require("path")},3601:(e,t,r)=>{"use strict";r.r(t),r.d(t,{GlobalError:()=>n.a,__next_app__:()=>c,pages:()=>d,routeModule:()=>x,tree:()=>m});var s=r(260),a=r(8203),o=r(5155),n=r.n(o),i=r(7292),l={};for(let e in i)0>["default","tree","pages","GlobalError","__next_app__","routeModule"].indexOf(e)&&(l[e]=()=>i[e]);r.d(t,l);let m=["",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(r.bind(r,1377)),"/home/hyper/data/web/portfolio/src/app/page.tsx"]}]},{layout:[()=>Promise.resolve().then(r.bind(r,7752)),"/home/hyper/data/web/portfolio/src/app/layout.tsx"],"not-found":[()=>Promise.resolve().then(r.bind(r,1559)),"/home/hyper/data/web/portfolio/src/app/not-found.tsx"],forbidden:[()=>Promise.resolve().then(r.t.bind(r,9116,23)),"next/dist/client/components/forbidden-error"],unauthorized:[()=>Promise.resolve().then(r.t.bind(r,1485,23)),"next/dist/client/components/unauthorized-error"]}],d=["/home/hyper/data/web/portfolio/src/app/page.tsx"],c={require:r,loadChunk:()=>Promise.resolve()},x=new s.AppPageRouteModule({definition:{kind:a.RouteKind.APP_PAGE,page:"/page",pathname:"/",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:m}})},5297:(e,t,r)=>{Promise.resolve().then(r.t.bind(r,9607,23))},1745:(e,t,r)=>{Promise.resolve().then(r.t.bind(r,8531,23))},3301:(e,t,r)=>{Promise.resolve().then(r.t.bind(r,3219,23)),Promise.resolve().then(r.t.bind(r,4863,23)),Promise.resolve().then(r.t.bind(r,5155,23)),Promise.resolve().then(r.t.bind(r,802,23)),Promise.resolve().then(r.t.bind(r,9350,23)),Promise.resolve().then(r.t.bind(r,8530,23)),Promise.resolve().then(r.t.bind(r,8921,23))},3573:(e,t,r)=>{Promise.resolve().then(r.t.bind(r,6959,23)),Promise.resolve().then(r.t.bind(r,3875,23)),Promise.resolve().then(r.t.bind(r,1284,23)),Promise.resolve().then(r.t.bind(r,7174,23)),Promise.resolve().then(r.t.bind(r,4178,23)),Promise.resolve().then(r.t.bind(r,7190,23)),Promise.resolve().then(r.t.bind(r,1365,23))},9415:(e,t,r)=>{Promise.resolve().then(r.bind(r,4898))},2559:(e,t,r)=>{Promise.resolve().then(r.bind(r,2558))},6487:()=>{},8335:()=>{},2558:(e,t,r)=>{"use strict";r.d(t,{default:()=>d});var s=r(5512),a=r(8531),o=r.n(a),n=r(9334),i=r(8009),l=r(4098);let m=[{name:"About",href:"/about"},{name:"Projects",href:"/projects"},{name:"Blog",href:"https://hypersoweak.github.io/blog/"},{name:"Contact",href:"/contact"}],d=()=>{let e=(0,n.usePathname)(),[t,r]=(0,i.useState)(!1);return(0,s.jsxs)("header",{className:"flex justify-between items-center px-6 sm:px-14 py-6 sm:py-10",children:[(0,s.jsx)(o(),{href:"/",className:"text-primary text-3xl font-bold transition-transform ease-in-out duration-300 hover:scale-110",children:"Hyper Hu"}),(0,s.jsx)("nav",{className:"hidden sm:block",children:(0,s.jsx)("ul",{className:"flex space-x-8",children:m.map(t=>(0,s.jsx)("li",{children:(0,s.jsxs)(o(),{href:t.href,className:`group transition text-xl transition-colors ease-in-out duration-300 
                  ${e===t.href?"text-primary":"text-text hover:text-primary"}`,children:[t.name,(0,s.jsx)("span",{className:"block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-primary"})]})},t.name))})}),(0,s.jsx)("button",{className:`sm:hidden text-3xl text-text transition-transform ease-in-out duration-300 ${t?"rotate-180":""}`,onClick:()=>r(!t),children:t?(0,s.jsx)(l.QCr,{}):(0,s.jsx)(l.OXb,{})}),t&&(0,s.jsx)("nav",{className:"sm:hidden absolute z-50 top-20 left-0 w-full bg-white border-t-2 border-b-2 border-primary shadow-lg animate-slideInMenu",children:(0,s.jsx)("ul",{className:"flex flex-col items-center",children:m.map(t=>(0,s.jsx)("li",{className:"w-full",children:(0,s.jsx)(o(),{href:t.href,className:`block w-full text-center py-4 text-xl transition-colors ease-in-out duration-300 
                    ${e===t.href?"text-primary":"text-text hover:text-primary"}`,onClick:()=>r(!1),children:t.name})},t.name))})})]})}},7752:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>c,metadata:()=>d});var s=r(2740),a=r(4898),o=r(82);let n=[{name:"GitHub",href:"https://github.com/HyperSoWeak",icon:o.hL4},{name:"Instagram",href:"https://instagram.com/hyper._.0216",icon:o.ao$},{name:"Discord",href:"https://discord.com",icon:o.O4U}],i=()=>(0,s.jsxs)("footer",{className:"flex flex-col sm:flex-row justify-between items-center px-6 sm:px-14 py-6 sm:py-10",children:[(0,s.jsxs)("span",{className:"text-small text-center sm:text-left",children:["\xa9 ",new Date().getFullYear()," Hyper Hu. All rights reserved."]}),(0,s.jsx)("div",{className:"flex space-x-4 sm:space-x-6 mt-4 sm:mt-0",children:n.map(e=>(0,s.jsx)("a",{href:e.href,className:"text-text group text-xl sm:text-2xl transition-transform transition-colors ease-in-out duration-300 hover:text-primary","aria-label":e.name,target:"_blank",children:(0,s.jsx)(e.icon,{size:24,className:"transition-transform duration-300 ease-in-out group-hover:scale-x-[-1]"})},e.name))})]});r(1135);var l=r(7275),m=r.n(l);let d={title:"Hyper Hu",description:"Hyper Hu's personal website"};function c({children:e}){return(0,s.jsx)("html",{lang:"en",className:m().className,children:(0,s.jsx)("body",{children:(0,s.jsxs)("div",{className:"min-h-screen flex flex-col justify-between bg-background text-text",children:[(0,s.jsx)(a.default,{}),(0,s.jsx)("main",{className:"flex-grow",children:e}),(0,s.jsx)(i,{})]})})})}},1559:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>i});var s=r(2740),a=r(9607),o=r.n(a);let n=({videoId:e})=>(0,s.jsx)("div",{className:"youtube-embed relative w-full pb-[56.25%] h-0",children:(0,s.jsx)("iframe",{className:"absolute top-0 left-0 w-full h-full",src:`https://www.youtube.com/embed/${e}?controls=0`,allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0,title:"YouTube video player"})}),i=()=>(0,s.jsxs)("div",{className:"flex flex-col items-center justify-center h-[75vh] px-4 sm:px-8 text-center",children:[(0,s.jsx)("h1",{className:"text-5xl sm:text-6xl font-bold text-primary mb-6 sm:mb-10",children:"UwU"}),(0,s.jsx)("div",{className:"w-full max-w-lg mb-6 sm:mb-8",children:(0,s.jsx)(n,{videoId:"xSzd8skd9X4"})}),(0,s.jsx)("h2",{className:"text-lg sm:text-xl mb-4 sm:mb-6",children:"Oops! The page you're looking for doesn't exist."}),(0,s.jsx)(o(),{href:"/",className:"text-base sm:text-lg text-white bg-primary px-4 sm:px-6 py-2 sm:py-3 rounded-lg transition-transform duration-300 hover:scale-105",children:"Go Back Home"})]})},1377:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>a});var s=r(2740);function a(){return(0,s.jsxs)("section",{className:"flex flex-col items-center justify-center h-[75vh] px-6 sm:px-14",children:[(0,s.jsxs)("h1",{className:"relative z-10 text-5xl sm:text-7xl font-extrabold text-primary mb-4 sm:mb-8 animate-slideIn group",children:["Hi, I'm"," ",(0,s.jsx)("span",{className:"text-secondary hover:text-primary transition-colors duration-500 cursor-pointer",children:"Hyper Hu"})]}),(0,s.jsxs)("p",{className:"relative z-10 text-xl sm:text-2xl text-text/80 font-medium animate-fadeIn",children:["A passionate developer ",(0,s.jsx)("span",{className:"text-secondary",children:"&"})," game creator."]})]})}},4898:(e,t,r)=>{"use strict";r.d(t,{default:()=>s});let s=(0,r(6760).registerClientReference)(function(){throw Error("Attempted to call the default export of \"/home/hyper/data/web/portfolio/src/components/Header.tsx\" from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.")},"/home/hyper/data/web/portfolio/src/components/Header.tsx","default")},1135:()=>{}};var t=require("../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),s=t.X(0,[776],()=>r(3601));module.exports=s})();