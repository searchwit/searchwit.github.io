"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[935],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=r.createContext({}),c=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,u=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),f=c(n),d=o,k=f["".concat(u,".").concat(d)]||f[d]||s[d]||i;return n?r.createElement(k,l(l({ref:t},p),{},{components:n})):r.createElement(k,l({ref:t},p))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,l=new Array(i);l[0]=f;var a={};for(var u in t)hasOwnProperty.call(t,u)&&(a[u]=t[u]);a.originalType=e,a.mdxType="string"==typeof e?e:o,l[1]=a;for(var c=2;c<i;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},8259:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return a},contentTitle:function(){return u},metadata:function(){return c},toc:function(){return p},default:function(){return f}});var r=n(7462),o=n(3366),i=(n(7294),n(3905)),l=["components"],a={id:"batch-lookup",title:"Batch Lookup",sidebar_label:"Batch Lookup"},u="Batch Lookup",c={unversionedId:"batch-lookup",id:"batch-lookup",isDocsHomePage:!1,title:"Batch Lookup",description:"Lookup address in Bulk.",source:"@site/docs/batch-lookup.md",sourceDirName:".",slug:"/batch-lookup",permalink:"/docs/batch-lookup",tags:[],version:"current",frontMatter:{id:"batch-lookup",title:"Batch Lookup",sidebar_label:"Batch Lookup"},sidebar:"docs",previous:{title:"Online Lookup",permalink:"/docs/online-lookup"},next:{title:"Integration",permalink:"/docs/integration"}},p=[{value:"upload a file",id:"upload-a-file",children:[],level:2},{value:"lookup the file",id:"lookup-the-file",children:[],level:2}],s={toc:p};function f(e){var t=e.components,n=(0,o.Z)(e,l);return(0,i.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"batch-lookup"},"Batch Lookup"),(0,i.kt)("p",null,"Lookup address in Bulk."),(0,i.kt)("h2",{id:"upload-a-file"},"upload a file"),(0,i.kt)("p",null,"The default file format is pipe delimited. it has 3 fields (unique key, address, init-countr code):"),(0,i.kt)("h2",{id:"lookup-the-file"},"lookup the file"),(0,i.kt)("p",null,"It will generate the result files with the following fields."),(0,i.kt)("p",null,"(unique key, address, init-countr code)\nadd new ones:\n(country code, match on, match term)"),(0,i.kt)("img",{src:"/docs/assets/batch-lookup.png",alt:""}))}f.isMDXComponent=!0}}]);