"use strict";(()=>{var e={};e.id=107,e.ids=[107],e.modules={7849:e=>{e.exports=require("next/dist/client/components/action-async-storage.external")},2934:e=>{e.exports=require("next/dist/client/components/action-async-storage.external.js")},5403:e=>{e.exports=require("next/dist/client/components/request-async-storage.external")},4580:e=>{e.exports=require("next/dist/client/components/request-async-storage.external.js")},4749:e=>{e.exports=require("next/dist/client/components/static-generation-async-storage.external")},5869:e=>{e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},399:e=>{e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},5943:(e,t,a)=>{a.r(t),a.d(t,{GlobalError:()=>n.a,__next_app__:()=>d,originalPathname:()=>c,pages:()=>g,routeModule:()=>u,tree:()=>p}),a(7649),a(7878),a(6560);var r=a(3191),o=a(8716),s=a(7922),n=a.n(s),i=a(5231),l={};for(let e in i)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(l[e]=()=>i[e]);a.d(t,l);let p=["",{children:["blog",{children:["page",{children:["[page]",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(a.bind(a,7649)),"/Users/bhaskar359/Projects/portfolio-legacy/app/blog/page/[page]/page.tsx"]}]},{}]},{}]},{}]},{layout:[()=>Promise.resolve().then(a.bind(a,7878)),"/Users/bhaskar359/Projects/portfolio-legacy/app/layout.tsx"],"not-found":[()=>Promise.resolve().then(a.bind(a,6560)),"/Users/bhaskar359/Projects/portfolio-legacy/app/not-found.tsx"]}],g=["/Users/bhaskar359/Projects/portfolio-legacy/app/blog/page/[page]/page.tsx"],c="/blog/page/[page]/page",d={require:a,loadChunk:()=>Promise.resolve()},u=new r.AppPageRouteModule({definition:{kind:o.x.APP_PAGE,page:"/blog/page/[page]/page",pathname:"/blog/page/[page]",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:p}})},7649:(e,t,a)=>{a.r(t),a.d(t,{default:()=>l,generateStaticParams:()=>i});var r=a(9510),o=a(1005),s=a(4662),n=a(9226);let i=async()=>Array.from({length:Math.ceil(n.R6.length/5)},(e,t)=>({page:(t+1).toString()}));function l({params:e}){let t=(0,s.ND)((0,s.O2)(n.R6)),a=parseInt(e.page),i=t.slice(5*(a-1),5*a),l={currentPage:a,totalPages:Math.ceil(t.length/5)};return r.jsx(o.ZP,{posts:t,initialDisplayPosts:i,pagination:l,title:"All Posts"})}}};var t=require("../../../../webpack-runtime.js");t.C(e);var a=e=>t(t.s=e),r=t.X(0,[948,192,335,631,608],()=>a(5943));module.exports=r})();