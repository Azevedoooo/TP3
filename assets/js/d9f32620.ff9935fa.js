"use strict";(self.webpackChunkdocusaurus_demo=self.webpackChunkdocusaurus_demo||[]).push([[1914],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>g});var o=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var u=o.createContext({}),s=function(e){var t=o.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},c=function(e){var t=s(e.components);return o.createElement(u.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,u=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),p=s(r),m=n,g=p["".concat(u,".").concat(m)]||p[m]||d[m]||a;return r?o.createElement(g,l(l({ref:t},c),{},{components:r})):o.createElement(g,l({ref:t},c))}));function g(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,l=new Array(a);l[0]=m;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i[p]="string"==typeof e?e:n,l[1]=i;for(var s=2;s<a;s++)l[s]=r[s];return o.createElement.apply(null,l)}return o.createElement.apply(null,r)}m.displayName="MDXCreateElement"},2900:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>d,frontMatter:()=>a,metadata:()=>i,toc:()=>s});var o=r(7462),n=(r(7294),r(3905));const a={slug:"bem-vindo",title:"Bem-Vindo",authors:["Azevedo","Cesar","Pena"],tags:["github","adc","docusaurus"]},l=void 0,i={permalink:"/TP3/blog/bem-vindo",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/blog/2021-08-26-welcome/index.md",source:"@site/blog/2021-08-26-welcome/index.md",title:"Bem-Vindo",description:"Simply add Markdown files (or folders) to the blog directory.",date:"2021-08-26T00:00:00.000Z",formattedDate:"26 de agosto de 2021",tags:[{label:"github",permalink:"/TP3/blog/tags/github"},{label:"adc",permalink:"/TP3/blog/tags/adc"},{label:"docusaurus",permalink:"/TP3/blog/tags/docusaurus"}],readingTime:.36,hasTruncateMarker:!1,authors:[{name:"Miguel Azevedo",title:"a85217",url:"https://github.com/Azevedoooo",imageURL:"https://github.com/Azevedoooo.png",key:"Azevedo"},{name:"C\xe9sar Teixeira",title:"a85222",url:"https://github.com/CesarSilvestreTeixeira",imageURL:"https://github.com/CesarSilvestreTeixeira.png",key:"Cesar"},{name:"Jo\xe3o Pena",title:"a85215",url:"https://github.com/JoaoP85215",imageURL:"https://github.com/JoaoP85215.png",key:"Pena"}],frontMatter:{slug:"bem-vindo",title:"Bem-Vindo",authors:["Azevedo","Cesar","Pena"],tags:["github","adc","docusaurus"]},nextItem:{title:"MDX Blog Post",permalink:"/TP3/blog/mdx-blog-post"}},u={authorsImageUrls:[void 0,void 0,void 0]},s=[],c={toc:s},p="wrapper";function d(e){let{components:t,...a}=e;return(0,n.kt)(p,(0,o.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Simply add Markdown files (or folders) to the ",(0,n.kt)("inlineCode",{parentName:"p"},"blog")," directory."),(0,n.kt)("p",null,"Regular blog authors can be added to ",(0,n.kt)("inlineCode",{parentName:"p"},"authors.yml"),"."),(0,n.kt)("p",null,"The blog post date can be extracted from filenames, such as:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"2019-05-30-welcome.md")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"2019-05-30-welcome/index.md"))),(0,n.kt)("p",null,"A blog post folder can be convenient to co-locate blog post images:"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Docusaurus Plushie",src:r(9023).Z,width:"1500",height:"500"})),(0,n.kt)("p",null,"The blog supports tags as well!"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"And if you don't want a blog"),": just delete this directory, and use ",(0,n.kt)("inlineCode",{parentName:"p"},"blog: false")," in your Docusaurus config."))}d.isMDXComponent=!0},9023:(e,t,r)=>{r.d(t,{Z:()=>o});const o=r.p+"assets/images/docusaurus-plushie-banner-a60f7593abca1e3eef26a9afa244e4fb.jpeg"}}]);