"use strict";(self.webpackChunkdocusaurus_demo=self.webpackChunkdocusaurus_demo||[]).push([[450],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>m});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),u=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},f=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=u(r),f=n,m=p["".concat(s,".").concat(f)]||p[f]||d[f]||o;return r?a.createElement(m,i(i({ref:t},c),{},{components:r})):a.createElement(m,i({ref:t},c))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=f;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:n,i[1]=l;for(var u=2;u<o;u++)i[u]=r[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}f.displayName="MDXCreateElement"},1078:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>u});var a=r(7462),n=(r(7294),r(3905));const o={sidebar_position:5},i="Funcionalidade Ficheiro",l={unversionedId:"tutorial-basics/funcionalidade_ficheiro",id:"tutorial-basics/funcionalidade_ficheiro",title:"Funcionalidade Ficheiro",description:"Docusaurus is a static-site-generator (also called Jamstack).",source:"@site/docs/tutorial-basics/funcionalidade_ficheiro.md",sourceDirName:"tutorial-basics",slug:"/tutorial-basics/funcionalidade_ficheiro",permalink:"/TP3/docs/tutorial-basics/funcionalidade_ficheiro",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/tutorial-basics/funcionalidade_ficheiro.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Funcionalidade Faturas",permalink:"/TP3/docs/tutorial-basics/funcionalidade_faturas"},next:{title:"Funcionalidade Terminal",permalink:"/TP3/docs/tutorial-basics/funcionalidade_terminal"}},s={},u=[{value:"Build your site",id:"build-your-site",level:2},{value:"Deploy your site",id:"deploy-your-site",level:2}],c={toc:u},p="wrapper";function d(e){let{components:t,...r}=e;return(0,n.kt)(p,(0,a.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"funcionalidade-ficheiro"},"Funcionalidade Ficheiro"),(0,n.kt)("p",null,"Docusaurus is a ",(0,n.kt)("strong",{parentName:"p"},"static-site-generator")," (also called ",(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("a",{parentName:"strong",href:"https://jamstack.org/"},"Jamstack")),")."),(0,n.kt)("p",null,"It builds your site as simple ",(0,n.kt)("strong",{parentName:"p"},"static HTML, JavaScript and CSS files"),"."),(0,n.kt)("h2",{id:"build-your-site"},"Build your site"),(0,n.kt)("p",null,"Build your site ",(0,n.kt)("strong",{parentName:"p"},"for production"),":"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"npm run build\n")),(0,n.kt)("p",null,"The static files are generated in the ",(0,n.kt)("inlineCode",{parentName:"p"},"build")," folder."),(0,n.kt)("h2",{id:"deploy-your-site"},"Deploy your site"),(0,n.kt)("p",null,"Test your production build locally:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"npm run serve\n")),(0,n.kt)("p",null,"The ",(0,n.kt)("inlineCode",{parentName:"p"},"build")," folder is now served at ",(0,n.kt)("a",{parentName:"p",href:"http://localhost:3000/"},"http://localhost:3000/"),"."),(0,n.kt)("p",null,"You can now deploy the ",(0,n.kt)("inlineCode",{parentName:"p"},"build")," folder ",(0,n.kt)("strong",{parentName:"p"},"almost anywhere")," easily, ",(0,n.kt)("strong",{parentName:"p"},"for free")," or very small cost (read the ",(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("a",{parentName:"strong",href:"https://docusaurus.io/docs/deployment"},"Deployment Guide")),")."))}d.isMDXComponent=!0}}]);