"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[840],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return f}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=u(n),f=i,m=d["".concat(l,".").concat(f)]||d[f]||p[f]||a;return n?r.createElement(m,o(o({ref:t},c),{},{components:n})):r.createElement(m,o({ref:t},c))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var u=2;u<a;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},7884:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return s},metadata:function(){return l},toc:function(){return u},default:function(){return p}});var r=n(7462),i=n(3366),a=(n(7294),n(3905)),o={title:"Front End System Design Overview",sidebar_label:"Overview"},s=void 0,l={unversionedId:"front-end-system-design",id:"front-end-system-design",isDocsHomePage:!1,title:"Front End System Design Overview",description:"There are shockingly few front end system design resources out there, probably because there's a lower demand and supply for front end engineer candidates.",source:"@site/../contents/front-end-system-design.md",sourceDirName:".",slug:"/front-end-system-design",permalink:"/jp/front-end-system-design",editUrl:"https://github.com/yangshun/front-end-interview-handbook/edit/master/contents/../contents/front-end-system-design.md",tags:[],version:"current",lastUpdatedBy:"Yangshun",lastUpdatedAt:1632562753,formattedLastUpdatedAt:"9/25/2021",frontMatter:{title:"Front End System Design Overview",sidebar_label:"Overview"},sidebar:"root",previous:{title:"Algorithms",permalink:"/jp/algorithms"},next:{title:"UI Components",permalink:"/jp/front-end-system-design/ui-components"}},u=[{value:"Examples",id:"examples",children:[]},{value:"Structure",id:"structure",children:[]}],c={toc:u};function p(e){var t=e.components,n=(0,i.Z)(e,["components"]);return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"There are shockingly few front end system design resources out there, probably because there's a lower demand and supply for front end engineer candidates."),(0,a.kt)("p",null,'"System" here typically refers to front end systems, which are quite different from the typical distributed system design questions for Software Engineering interviews. The question topic asked is quite similar to the ',(0,a.kt)("a",{parentName:"p",href:"/jp/build-user-interfaces"},'"Build User Interface" format')," but with more focus on architecture and design. There's a significant amount of overlap between that and this - you will likely need to do some design in that and also do some coding here to illustrate your ideas/app state format."),(0,a.kt)("p",null,"The difference between this section and the ",(0,a.kt)("a",{parentName:"p",href:"/jp/build-user-interfaces"},'"Build User Interface" format')," is that the questions here are usually larger. If the session is only half an hour, candidates are expected to talk about the design tradeoffs, possible implementations, instead of coding it out. Because this format of questions involve multiple components and knowledge across the web stack, candidates usually do not have to go very deep into the lower-level details and can keep the discussion at a higher level."),(0,a.kt)("p",null,"Many of the topics mentioned in the ",(0,a.kt)("a",{parentName:"p",href:"/jp/build-user-interfaces"},'"Build User Interface" format')," are also relevant for front end system design - API design, scalability, performance, user experience, i18n, accessibility, security. Candidates should take the initiative and bring these topics up and lead the discussion with the interviewer. The more advanced topics such as performance, accessibility and i18n are what differentiates senior candidates from the junior ones."),(0,a.kt)("p",null,"The two main kinds of front end system design interviews are UI components and applications."),(0,a.kt)("h2",{id:"examples"},"Examples"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"UI Components",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Photo gallery"),(0,a.kt)("li",{parentName:"ul"},"Selector"))),(0,a.kt)("li",{parentName:"ul"},"Applications",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"News feed"),(0,a.kt)("li",{parentName:"ul"},"Video watching website"),(0,a.kt)("li",{parentName:"ul"},"Chat application")))),(0,a.kt)("h2",{id:"structure"},"Structure"),(0,a.kt)("p",null,"System design interview questions tend to be open ended and vague, leaving you with lots of room to explore. If the interviewer tells you which specific areas to focus on, that's great! Otherwise, here's a framework you can consider for front end interviews, which is also helpful when working on new front end projects at work."),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Requirements clarifications/alignment"),(0,a.kt)("li",{parentName:"ol"},"Architecture"),(0,a.kt)("li",{parentName:"ol"},"Data Model Design"),(0,a.kt)("li",{parentName:"ol"},"API Design"),(0,a.kt)("li",{parentName:"ol"},"Extra Stuff",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Multi-device support"),(0,a.kt)("li",{parentName:"ul"},"User Experience"),(0,a.kt)("li",{parentName:"ul"},"Performance"),(0,a.kt)("li",{parentName:"ul"},"Accessibility"),(0,a.kt)("li",{parentName:"ul"},"i18n"),(0,a.kt)("li",{parentName:"ul"},"Security")))),(0,a.kt)("p",null,"How to approach system design questions for applications and UI components can differ significantly, and we'll go through them in more detail in subsequent pages."))}p.isMDXComponent=!0},7462:function(e,t,n){function r(){return(r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}n.d(t,{Z:function(){return r}})},3366:function(e,t,n){function r(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}n.d(t,{Z:function(){return r}})}}]);