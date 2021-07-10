(self.webpackChunk_slippi_js_website=self.webpackChunk_slippi_js_website||[]).push([[1239],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return c},kt:function(){return u}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),m=s(n),u=a,f=m["".concat(l,".").concat(u)]||m[u]||d[u]||i;return n?r.createElement(f,o(o({ref:t},c),{},{components:n})):r.createElement(f,o({ref:t},c))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:a,o[1]=p;for(var s=2;s<i;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},8081:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return p},contentTitle:function(){return l},metadata:function(){return s},toc:function(){return c},default:function(){return m}});var r=n(2122),a=n(9756),i=(n(7294),n(3905)),o=["components"],p={id:"slpcommandeventpayload",title:"Interface: SlpCommandEventPayload",sidebar_label:"SlpCommandEventPayload",sidebar_position:0,custom_edit_url:null},l=void 0,s={unversionedId:"api/interfaces/slpcommandeventpayload",id:"api/interfaces/slpcommandeventpayload",isDocsHomePage:!1,title:"Interface: SlpCommandEventPayload",description:"Properties",source:"@site/docs/api/interfaces/slpcommandeventpayload.md",sourceDirName:"api/interfaces",slug:"/api/interfaces/slpcommandeventpayload",permalink:"/slippi-js/docs/api/interfaces/slpcommandeventpayload",editUrl:null,version:"current",sidebarPosition:0,frontMatter:{id:"slpcommandeventpayload",title:"Interface: SlpCommandEventPayload",sidebar_label:"SlpCommandEventPayload",sidebar_position:0,custom_edit_url:null},sidebar:"tutorialSidebar",previous:{title:"SelfInducedSpeedsType",permalink:"/slippi-js/docs/api/interfaces/selfinducedspeedstype"},next:{title:"SlpFileMetadata",permalink:"/slippi-js/docs/api/interfaces/slpfilemetadata"}},c=[{value:"Properties",id:"properties",children:[{value:"command",id:"command",children:[]},{value:"payload",id:"payload",children:[]}]}],d={toc:c};function m(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"properties"},"Properties"),(0,i.kt)("h3",{id:"command"},"command"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"command"),": ",(0,i.kt)("a",{parentName:"p",href:"/slippi-js/docs/api/enums/command"},(0,i.kt)("inlineCode",{parentName:"a"},"Command"))),(0,i.kt)("h4",{id:"defined-in"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/ananas-dev/slippi-js/blob/1c2fe87/src/utils/slpStream.ts#L22"},"src/utils/slpStream.ts:22")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"payload"},"payload"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"payload"),": ",(0,i.kt)("a",{parentName:"p",href:"/slippi-js/docs/api#eventpayloadtypes"},(0,i.kt)("inlineCode",{parentName:"a"},"EventPayloadTypes"))," ","|"," ",(0,i.kt)("a",{parentName:"p",href:"/slippi-js/docs/api#messagesizes"},(0,i.kt)("inlineCode",{parentName:"a"},"MessageSizes"))),(0,i.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/ananas-dev/slippi-js/blob/1c2fe87/src/utils/slpStream.ts#L23"},"src/utils/slpStream.ts:23")))}m.isMDXComponent=!0}}]);