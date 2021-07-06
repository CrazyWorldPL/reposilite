var e=Object.defineProperty,t=Object.prototype.hasOwnProperty,n=Object.getOwnPropertySymbols,a=Object.prototype.propertyIsEnumerable,o=(t,n,a)=>n in t?e(t,n,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[n]=a,r=(e,r)=>{for(var s in r||(r={}))t.call(r,s)&&o(e,s,r[s]);if(n)for(var s of n(r))a.call(r,s)&&o(e,s,r[s]);return e};import{r as s,d as l,u as d,o as i,c,a as u,b as p,e as m,w as b,f as v,t as f,g,F as w,h,i as y,p as I,j as x,k,l as T,m as E,n as _,q as O,v as S,J as P,T as L}from"./vendor.dd1d96a6.js";!function(e=".",t="__import__"){try{self[t]=new Function("u","return import(u)")}catch(n){const a=new URL(e,location),o=e=>{URL.revokeObjectURL(e.src),e.remove()};self[t]=e=>new Promise(((n,r)=>{const s=new URL(e,a);if(self[t].moduleMap[s])return n(self[t].moduleMap[s]);const l=new Blob([`import * as m from '${s}';`,`${t}.moduleMap['${s}']=m;`],{type:"text/javascript"}),d=Object.assign(document.createElement("script"),{type:"module",src:URL.createObjectURL(l),onerror(){r(new Error(`Failed to import: ${e}`)),o(d)},onload(){n(self[t].moduleMap[s]),o(d)}});document.head.appendChild(d)})),self[t].moduleMap={}}}("/assets/");const R=s({isDark:!1});function M(){return{theme:R,fetchTheme:()=>{R.isDark="true"===localStorage.getItem("dark-theme")},toggleTheme:()=>{R.isDark=!R.isDark,localStorage.setItem("dark-theme",R.isDark)}}}const j=l({setup(){d({title:window.REPOSILITE_TITLE,description:window.REPOSILITE_DESCRIPTION});const{theme:e,fetchTheme:t}=M();return i((()=>{t()})),{theme:e}}});j.render=function(e,t,n,a,o,r){const s=p("router-view");return m(),c("div",{class:{dark:e.theme.isDark}},[u(s,{class:"min-h-screen dark:bg-black dark:text-white"})],2)};const D={},$={class:"w-6 h-6",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},B=u("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"},null,-1);D.render=function(e,t){return m(),c("svg",$,[B])};const U={},V={class:"w-6 h-6",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},A=u("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"},null,-1);U.render=function(e,t){return m(),c("svg",V,[A])};const H={name:"Index",components:{MoonIcon:D,SunIcon:U},setup(){const{theme:e,toggleTheme:t}=M();return{theme:e,toggleTheme:t}},data:()=>({title:window.REPOSILITE_TITLE})},C={class:"bg-gray-100 dark:bg-black dark:text-white"},G={class:"container mx-auto flex flex-row py-10 justify-between"},z={class:"text-xl font-medium py-1"},F={class:"flex flex-row mt-0.5"},N=u("div",{class:"py-1.5 rounded-full bg-white font-bold px-6 text-sm dark:border-gray-900"}," Dashboard ",-1);H.render=function(e,t,n,a,o,r){const s=p("router-link"),l=p("SunIcon"),d=p("MoonIcon");return m(),c("header",C,[u("div",G,[u("h1",z,[u(s,{to:"/"},{default:b((()=>[v(f(o.title),1)])),_:1})]),u("nav",F,[u(s,{to:"/dashboard"},{default:b((()=>[N])),_:1}),u("div",{class:"ml-4 pl-2 pr-1 py-0.9 cursor-pointer rounded-full bg-white",onClick:t[1]||(t[1]=e=>a.toggleTheme())},[a.theme.isDark?(m(),c(l,{key:0})):(m(),c(d,{key:1}))])])])])};const K={},q={class:"w-6 h-6",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},J=u("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"},null,-1);K.render=function(e,t){return m(),c("svg",q,[J])};const Q={components:{GlobeIcon:K}},W={class:"bg-gray-100 dark:bg-black"},X={class:"container mx-auto flex flex-row pt-17 pb-12"},Y=u("div",{class:"w-35"},[u("img",{class:"border-2 rounded-full dark:border-gray-700",src:"https://avatars.githubusercontent.com/u/75123628?s=200&v=4"})],-1),Z={class:"flex flex-col justify-center px-10"},ee=u("div",null,[u("p",null,"Public Maven repository for Bookkity organization")],-1),te={class:"flex flex-row py-2"},ne=u("a",{class:"px-3 text-gray-500",href:"https://github.com/bookkity"},"https://github.com/bookkity",-1);Q.render=function(e,t,n,a,o,r){const s=p("GlobeIcon");return m(),c("div",W,[u("div",X,[Y,u("div",Z,[ee,u("div",te,[u(s),ne])])])])};const ae=[{name:"Maven",value:"\n<dependency>\n    <groupId>{groupId}</groupId>\n    <artifactId>{artifactId}</artifactId>\n    <version>{version}</version>\n</dependency>"},{name:"Gradle Groovy",value:'implementation "{groupId}:{artifactId}:{version}"'},{name:"Gradle Kotlin",value:'implementation("{groupId}:{artifactId}:{version}")'},{name:"Panda",value:"maven:{groupId}/{artifactId}@{version}"},{name:"SBT",value:'libraryDependencies  += "{groupId}" %% "{artifactId}" %% "{version}"'}],oe={setup(){const e=s({selectedTab:ae[0].name});return r({tabs:ae},g(e))}},re={class:"bg-white dark:bg-black shadow-lg p-7 border rounded-lg border-gray-100 dark:border-gray-900"},se=u("div",{class:"flex flex-row justify-between"},[u("h1",{class:"font-bold"},"Artifact details")],-1),le=u("hr",{class:"dark:border-gray-800"},null,-1),de={class:"mt-6 p-4 mr-1 rounded-lg bg-gray-100 dark:bg-hex-090909"},ie={class:"text-sm max-w-21"};oe.render=function(e,t,n,a,o,r){const s=p("tab"),l=p("tabs"),d=p("tab-panel"),i=p("tab-panels");return m(),c("div",re,[se,u(l,{modelValue:e.selectedTab,"onUpdate:modelValue":t[1]||(t[1]=t=>e.selectedTab=t),class:"pt-3"},{default:b((()=>[(m(!0),c(w,null,h(a.tabs,((e,t)=>(m(),c(s,{class:"buildtool py-1 px-2 cursor-pointer",key:`t${t}`,val:e.name,label:e.name,indicator:!0},null,8,["val","label"])))),128))])),_:1},8,["modelValue"]),le,u(i,{modelValue:e.selectedTab,"onUpdate:modelValue":t[2]||(t[2]=t=>e.selectedTab=t),animate:!0},{default:b((()=>[(m(!0),c(w,null,h(a.tabs,((e,t)=>(m(),c(d,{key:`tp${t}`,val:e.name},{default:b((()=>[u("div",de,[u("pre",ie,f(e.value.trim()),1)])])),_:2},1032,["val"])))),128))])),_:1},8,["modelValue"])])};const ce={components:{Card:oe},data:()=>({files:["releases","snapshot"]})},ue={class:"bg-gray-100"},pe=y('<div class="bg-gray-100 dark:bg-black"><div class="container mx-auto"><p class="py-4 font-semibold">Index of / <span class="font-normal text-xl text-gray-500"> ⤴ </span></p></div></div><hr class="border-gray-100 dark:border-gray-900">',2),me={class:"container mx-auto relative"},be={class:"lg:absolute pt-5 -top-24.5 right-8"},ve={class:"pt-2"},fe=u("div",{class:"text-xm px-6 pt-1.75"},"⚫",-1),ge={class:"font-semibold"};ce.render=function(e,t,n,a,o,r){const s=p("Card");return m(),c("div",ue,[pe,u("div",null,[u("div",me,[u("div",be,[u(s)]),u("div",ve,[(m(!0),c(w,null,h(o.files,(e=>(m(),c("div",{key:e,class:"flex flex-row mb-1.5 py-3 rounded-full bg-white max-w-2/5 cursor-pointer"},[fe,u("div",ge,f(e),1)])))),128))])])])])};const we={components:{Hero:Q,Browser:ce}};we.render=function(e,t,n,a,o,r){const s=p("Hero"),l=p("Browser");return m(),c(w,null,[u(s),u(l,{ref:""},null,512)],64)};const he=[{type:"Maven",snippet:`\n    <repository>\n        <name>${window.REPOSILITE_TITLE}</name>\n        <id>${window.REPOSILITE_ID}</id>\n        <url>${window.location}</url>\n    </repository>\n    `},{type:"Gradle Groovy",snippet:`\n    maven {\n        url "${window.location}"\n    }\n    `},{type:"Gradle Kotlin",snippet:`\n    maven {\n        url = uri("${window.location}")\n    }\n    `},{type:"Panda",snippet:`\n    repositories: [\n        ${window.location}\n    ]\n    `},{type:"SBT",snippet:`\n    resolvers += "${window.REPOSILITE_TITLE}" at "${window.location}"\n    `}],ye={setup:()=>({configurations:he}),methods:{trim(e){const t=e.length-e.trimStart().length-1;return e.split("\n").map((e=>e.substring(t))).join("\n").trim()}}},Ie={class:"container mx-auto pt-10 px-6"},xe={class:"text-lg font-bold"},ke={class:"my-5 py-5 px-6 rounded-lg shadow-md bg-gray-50 dark:bg-gray-900"};ye.render=function(e,t,n,a,o,r){return m(),c("div",Ie,[(m(!0),c(w,null,h(a.configurations,(e=>(m(),c("div",{key:e.type},[u("h1",xe,f(e.type),1),u("pre",ke,f(r.trim(e.snippet)),1)])))),128))])};const Te={},Ee={class:"container mx-auto pt-10 px-6"},_e=u("i",null,"Endpoints :: soon™",-1);Te.render=function(e,t){return m(),c("div",Ee,[_e])};const Oe=["Overview","Usage","Endpoints"],Se={name:"Index",components:{Header:H,Overview:we,Usage:ye,Endpoints:Te},setup(){const e=s({selectedMenuTab:Oe[0]});return r({menuTabs:Oe},g(e))}},Pe=k();I("data-v-3bf27dd5");const Le={class:"bg-gray-100"},Re={class:"container mx-auto"},Me=u("hr",{class:"dark:border-gray-700"},null,-1);x();const je=Pe(((e,t,n,a,o,r)=>{const s=p("Header"),l=p("tab"),d=p("tabs"),i=p("Overview"),b=p("tab-panel"),v=p("Usage"),f=p("Endpoints"),g=p("tab-panels");return m(),c("div",null,[u(s),u("div",Le,[u("div",Re,[u(d,{modelValue:e.selectedMenuTab,"onUpdate:modelValue":t[1]||(t[1]=t=>e.selectedMenuTab=t)},{default:Pe((()=>[(m(!0),c(w,null,h(a.menuTabs,((e,t)=>(m(),c(l,{class:"item font-normal",key:`menu${t}`,val:e,label:e,indicator:!0},null,8,["val","label"])))),128))])),_:1},8,["modelValue"])]),Me,u("div",null,[u(g,{modelValue:e.selectedMenuTab,"onUpdate:modelValue":t[2]||(t[2]=t=>e.selectedMenuTab=t),animate:!0},{default:Pe((()=>[u(b,{val:"Overview"},{default:Pe((()=>[u(i)])),_:1}),u(b,{val:"Usage"},{default:Pe((()=>[u(v)])),_:1}),u(b,{val:"Endpoints"},{default:Pe((()=>[u(f)])),_:1})])),_:1},8,["modelValue"])])])])}));Se.render=je,Se.__scopeId="data-v-3bf27dd5";const De={name:"Index",components:{Header:H},methods:{login(){}}},$e=k();I("data-v-27d98e3f");const Be={class:"container mx-auto pt-10 px-6 flex justify-center"},Ue={class:"border border-gray-100 dark:border-gray-700 m-w-20 p-10 rounded-2xl shadow-md text-center"},Ve=u("h1",{class:"font-bold text-xl pb-4"},"Login",-1),Ae={class:"flex flex-col w-96"},He=u("input",{placeholder:"Alias",type:"text",class:"input"},null,-1),Ce=u("input",{placeholder:"Token",type:"password",class:"input"},null,-1),Ge={class:"text-right mt-1"},ze=v("← Back to index");x();const Fe=$e(((e,t,n,a,o,r)=>{const s=p("Header"),l=p("router-link");return m(),c("div",null,[u(s),u("div",Be,[u("div",Ue,[Ve,u("form",Ae,[He,Ce,u("div",Ge,[u(l,{to:"/",class:"text-blue-400 text-xs"},{default:$e((()=>[ze])),_:1})]),u("div",{class:"bg-gray-100 dark:bg-gray-900 py-2 my-3 cursor-pointer",click:r.login},"Sign in",8,["click"])])])])])}));De.render=Fe,De.__scopeId="data-v-27d98e3f";const Ne=[{path:"/",name:"Index",component:Se},{path:"/dashboard",name:"Dashboard",component:De}],Ke=T({history:E(),routes:Ne}),qe=!"{{REPOSILITE.BASE_PATH}}".includes("REPOSILITE.BASE_PATH");window.REPOSILITE_BASE_PATH=qe?"{{REPOSILITE.BASE_PATH}}":"/",window.REPOSILITE_ID=qe?"{{REPOSILITE.ID}}":"reposilite-repository",window.REPOSILITE_TITLE=qe?"{{REPOSILITE.TITLE}}":"Reposilite Repository",window.REPOSILITE_DESCRIPTION=qe?"{{REPOSILITE.DESCRIPTION}}":"Default description";_(j).use(O()).use(S,P).use(L).use(Ke).mount("#app");
