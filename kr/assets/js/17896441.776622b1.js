"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[918],{1262:function(e,t,a){var n=a(7294),r=a(2389);t.Z=function(e){var t=e.children,a=e.fallback;return(0,r.Z)()&&null!=t?n.createElement(n.Fragment,null,t()):a||null}},7595:function(e,t,a){a.r(t),a.d(t,{default:function(){return R}});var n=a(7294),r=a(6010),l=a(3783),o=a(4973),i=a(3082);var c=function(e){var t=e.metadata;return n.createElement(n.Fragment,null,n.createElement("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,o.I)({id:"theme.docs.paginator.navAriaLabel",message:"Docs pages navigation",description:"The ARIA label for the docs pagination"})},n.createElement("div",{className:"pagination-nav__item"},t.previous&&n.createElement("a",{className:"pagination-nav__link",href:t.previous.permalink},n.createElement("div",{className:"pagination-nav__sublabel"},n.createElement(o.Z,{id:"theme.docs.paginator.previous",description:"The label used to navigate to the previous doc"},"Previous")),n.createElement("div",{className:"pagination-nav__label"},"\xab ",t.previous.title))),n.createElement("div",{className:"pagination-nav__item pagination-nav__item--next"},t.next&&n.createElement("a",{className:"pagination-nav__link",href:t.next.permalink},n.createElement("div",{className:"pagination-nav__sublabel"},n.createElement(o.Z,{id:"theme.docs.paginator.next",description:"The label used to navigate to the next doc"},"Next")),n.createElement("div",{className:"pagination-nav__label"},t.next.title," \xbb")))),n.createElement("div",{className:"margin-top--md"},n.createElement(i.Z,null)))},s=a(2263),d=a(6742),m=a(907),u=a(941);var v={unreleased:function(e){var t=e.siteTitle,a=e.versionMetadata;return n.createElement(o.Z,{id:"theme.docs.versions.unreleasedVersionLabel",description:"The label used to tell the user that he's browsing an unreleased doc version",values:{siteTitle:t,versionLabel:n.createElement("b",null,a.label)}},"This is unreleased documentation for {siteTitle} {versionLabel} version.")},unmaintained:function(e){var t=e.siteTitle,a=e.versionMetadata;return n.createElement(o.Z,{id:"theme.docs.versions.unmaintainedVersionLabel",description:"The label used to tell the user that he's browsing an unmaintained doc version",values:{siteTitle:t,versionLabel:n.createElement("b",null,a.label)}},"This is documentation for {siteTitle} {versionLabel}, which is no longer actively maintained.")}};function h(e){var t=v[e.versionMetadata.banner];return n.createElement(t,e)}function f(e){var t=e.versionLabel,a=e.to,r=e.onClick;return n.createElement(o.Z,{id:"theme.docs.versions.latestVersionSuggestionLabel",description:"The label used to tell the user to check the latest version",values:{versionLabel:t,latestVersionLink:n.createElement("b",null,n.createElement(d.Z,{to:a,onClick:r},n.createElement(o.Z,{id:"theme.docs.versions.latestVersionLinkLabel",description:"The label used for the latest version suggestion link label"},"latest version")))}},"For up-to-date documentation, see the {latestVersionLink} ({versionLabel}).")}function p(e){var t,a=e.versionMetadata,l=(0,s.Z)().siteConfig.title,o=(0,m.gA)({failfast:!0}).pluginId,i=(0,u.J)(o).savePreferredVersionName,c=(0,m.Jo)(o),d=c.latestDocSuggestion,v=c.latestVersionSuggestion,p=null!=d?d:(t=v).docs.find((function(e){return e.id===t.mainDocId}));return n.createElement("div",{className:(0,r.Z)(u.kM.docs.docVersionBanner,"alert alert--warning margin-bottom--md"),role:"alert"},n.createElement("div",null,n.createElement(h,{siteTitle:l,versionMetadata:a})),n.createElement("div",{className:"margin-top--md"},n.createElement(f,{versionLabel:v.label,to:p.path,onClick:function(){return i(v.name)}})))}var g=function(e){var t=e.versionMetadata;return t.banner?n.createElement(p,{versionMetadata:t}):n.createElement(n.Fragment,null)},E=a(1217);function b(e){var t=e.lastUpdatedAt,a=e.formattedLastUpdatedAt;return n.createElement(o.Z,{id:"theme.lastUpdated.atDate",description:"The words used to describe on which date a page has been last updated",values:{date:n.createElement("b",null,n.createElement("time",{dateTime:new Date(1e3*t).toISOString()},a))}}," on {date}")}function _(e){var t=e.lastUpdatedBy;return n.createElement(o.Z,{id:"theme.lastUpdated.byUser",description:"The words used to describe by who the page has been last updated",values:{user:n.createElement("b",null,t)}}," by {user}")}function k(e){var t=e.lastUpdatedAt,a=e.formattedLastUpdatedAt,r=e.lastUpdatedBy;return n.createElement("span",{className:u.kM.common.lastUpdated},n.createElement(o.Z,{id:"theme.lastUpdated.lastUpdatedAtBy",description:"The sentence used to display when a page has been last updated, and by who",values:{atDate:t&&a?n.createElement(b,{lastUpdatedAt:t,formattedLastUpdatedAt:a}):"",byUser:r?n.createElement(_,{lastUpdatedBy:r}):""}},"Last updated{atDate}{byUser}"),!1)}var N=a(6146),Z=a(7682),w="lastUpdated_13-_";function y(e){return n.createElement("div",{className:(0,r.Z)(u.kM.docs.docFooterTagsRow,"row margin-bottom--sm")},n.createElement("div",{className:"col"},n.createElement(Z.Z,e)))}function U(e){var t=e.editUrl,a=e.lastUpdatedAt,l=e.lastUpdatedBy,o=e.formattedLastUpdatedAt;return n.createElement("div",{className:(0,r.Z)(u.kM.docs.docFooterEditMetaRow,"row")},n.createElement("div",{className:"col"},t&&n.createElement(N.Z,{editUrl:t})),n.createElement("div",{className:(0,r.Z)("col",w)},(a||l)&&n.createElement(k,{lastUpdatedAt:a,formattedLastUpdatedAt:o,lastUpdatedBy:l})))}function L(e){var t=e.content.metadata,a=t.editUrl,l=t.lastUpdatedAt,o=t.formattedLastUpdatedAt,i=t.lastUpdatedBy,c=t.tags,s=c.length>0,d=!!(a||l||i);return s||d?n.createElement("footer",{className:(0,r.Z)(u.kM.docs.docFooter,"docusaurus-mt-lg")},s&&n.createElement(y,{tags:c}),d&&n.createElement(U,{editUrl:a,lastUpdatedAt:l,lastUpdatedBy:i,formattedLastUpdatedAt:o})):n.createElement(n.Fragment,null)}var T=a(571),C="tocCollapsible_1PrD",M="tocCollapsibleButton_2O1e",A="tocCollapsibleContent_2Ydz",B="tocCollapsibleExpanded_3GYr";function O(e){var t,a=e.toc,l=e.className,i=(0,u.uR)({initialState:!0}),c=i.collapsed,s=i.toggleCollapsed;return n.createElement("div",{className:(0,r.Z)(C,(t={},t[B]=!c,t),l)},n.createElement("button",{type:"button",className:(0,r.Z)("clean-btn",M),onClick:s},n.createElement(o.Z,{id:"theme.TOCCollapsible.toggleButtonLabel",description:"The label used by the button on the collapsible TOC component"},"On this page")),n.createElement(u.zF,{lazy:!0,className:A,collapsed:c},n.createElement(T.r,{toc:a})))}var S=a(6159),x="docItemContainer_33ec",F="docItemCol_3FnS",I="tocMobile_3Hoh";function R(e){var t,a=e.content,o=e.versionMetadata,i=a.metadata,s=a.frontMatter,d=s.image,m=s.keywords,v=s.hide_title,h=s.hide_table_of_contents,f=i.description,p=i.title,b=!v&&void 0===a.contentTitle,_=(0,l.Z)(),k=!h&&a.toc&&a.toc.length>0,N=k&&("desktop"===_||"ssr"===_);return n.createElement(n.Fragment,null,n.createElement(E.Z,{title:p,description:f,keywords:m,image:d}),n.createElement("div",{className:"row"},n.createElement("div",{className:(0,r.Z)("col",(t={},t[F]=!h,t))},n.createElement(g,{versionMetadata:o}),n.createElement("div",{className:x},n.createElement("article",null,o.badge&&n.createElement("span",{className:(0,r.Z)(u.kM.docs.docVersionBadge,"badge badge--secondary")},"Version: ",o.label),k&&n.createElement(O,{toc:a.toc,className:(0,r.Z)(u.kM.docs.docTocMobile,I)}),n.createElement("div",{className:(0,r.Z)(u.kM.docs.docMarkdown,"markdown")},b&&n.createElement(S.N,null,p),n.createElement(a,null)),n.createElement(L,e)),n.createElement(c,{metadata:i}))),N&&n.createElement("div",{className:"col col--3"},n.createElement(T.Z,{toc:a.toc,className:u.kM.docs.docTocDesktop}))))}},6146:function(e,t,a){a.d(t,{Z:function(){return m}});var n=a(7294),r=a(4973),l=a(7462),o=a(3366),i=a(6010),c="iconEdit_2_ui",s=function(e){var t=e.className,a=(0,o.Z)(e,["className"]);return n.createElement("svg",(0,l.Z)({fill:"currentColor",height:"20",width:"20",viewBox:"0 0 40 40",className:(0,i.Z)(c,t),"aria-hidden":"true"},a),n.createElement("g",null,n.createElement("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"})))},d=a(941);function m(e){var t=e.editUrl;return n.createElement("a",{href:t,target:"_blank",rel:"noreferrer noopener",className:d.kM.common.editThisPage},n.createElement(s,null),n.createElement(r.Z,{id:"theme.common.editThisPage",description:"The link label to edit the current page"},"Edit this page"))}},6159:function(e,t,a){a.d(t,{N:function(){return m},Z:function(){return u}});var n=a(3366),r=a(7462),l=a(7294),o=a(6010),i=a(4973),c=a(941),s="anchorWithStickyNavbar_31ik",d="anchorWithHideOnScrollNavbar_3R7-",m=function(e){var t=Object.assign({},e);return l.createElement("header",null,l.createElement("h1",(0,r.Z)({},t,{id:void 0}),t.children))},u=function(e){return"h1"===e?m:(t=e,function(e){var a,r=e.id,m=(0,n.Z)(e,["id"]),u=(0,c.LU)().navbar.hideOnScroll;return r?l.createElement(t,m,l.createElement("a",{"aria-hidden":"true",tabIndex:-1,className:(0,o.Z)("anchor","anchor__"+t,(a={},a[d]=u,a[s]=!u,a)),id:r}),m.children,l.createElement("a",{className:"hash-link",href:"#"+r,title:(0,i.I)({id:"theme.common.headingLinkTitle",message:"Direct link to heading",description:"Title for link to heading"})},"#")):l.createElement(t,m)});var t}},571:function(e,t,a){a.d(t,{r:function(){return v},Z:function(){return h}});var n=a(7294),r=a(6010),l=a(941);function o(e){var t=e.getBoundingClientRect();return t.top===t.bottom?o(e.parentNode):t}function i(e){var t,a=e.anchorTopOffset,n=Array.from(document.querySelectorAll(".anchor.anchor__h2, .anchor.anchor__h3")),r=n.find((function(e){return o(e).top>=a}));return r?function(e){return e.top>0&&e.bottom<window.innerHeight/2}(o(r))?r:null!=(t=n[n.indexOf(r)-1])?t:null:n[n.length-1]}function c(){var e=(0,n.useRef)(0),t=(0,l.LU)().navbar.hideOnScroll;return(0,n.useEffect)((function(){e.current=t?0:document.querySelector(".navbar").clientHeight}),[t]),e}var s=function(e){var t=(0,n.useRef)(void 0),a=c();(0,n.useEffect)((function(){var n=e.linkClassName,r=e.linkActiveClassName;function l(){var e=function(e){return Array.from(document.getElementsByClassName(e))}(n),l=i({anchorTopOffset:a.current}),o=e.find((function(e){return l&&l.id===function(e){return decodeURIComponent(e.href.substring(e.href.indexOf("#")+1))}(e)}));e.forEach((function(e){!function(e,a){if(a){var n;t.current&&t.current!==e&&(null==(n=t.current)||n.classList.remove(r)),e.classList.add(r),t.current=e}else e.classList.remove(r)}(e,e===o)}))}return document.addEventListener("scroll",l),document.addEventListener("resize",l),l(),function(){document.removeEventListener("scroll",l),document.removeEventListener("resize",l)}}),[e,a])},d="tableOfContents_35-E",m="table-of-contents__link",u={linkClassName:m,linkActiveClassName:"table-of-contents__link--active"};function v(e){var t=e.toc,a=e.isChild;return t.length?n.createElement("ul",{className:a?"":"table-of-contents table-of-contents__left-border"},t.map((function(e){return n.createElement("li",{key:e.id},n.createElement("a",{href:"#"+e.id,className:m,dangerouslySetInnerHTML:{__html:e.value}}),n.createElement(v,{isChild:!0,toc:e.children}))}))):null}var h=function(e){var t=e.toc;return s(u),n.createElement("div",{className:(0,r.Z)(d,"thin-scrollbar")},n.createElement(v,{toc:t}))}},7211:function(e,t,a){a.d(t,{Z:function(){return s}});var n=a(7294),r=a(6010),l=a(6742),o="tag_1Okp",i="tagRegular_3MiF",c="tagWithCount_1HU1";var s=function(e){var t,a=e.permalink,s=e.name,d=e.count;return n.createElement(l.Z,{href:a,className:(0,r.Z)(o,(t={},t[i]=!d,t[c]=d,t))},s,d&&n.createElement("span",null,d))}},7682:function(e,t,a){a.d(t,{Z:function(){return s}});var n=a(7294),r=a(6010),l=a(4973),o=a(7211),i="tags_2ga9",c="tag_11ep";function s(e){var t=e.tags;return n.createElement(n.Fragment,null,n.createElement("b",null,n.createElement(l.Z,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list"},"Tags:")),n.createElement("ul",{className:(0,r.Z)(i,"padding--none","margin-left--sm")},t.map((function(e){var t=e.label,a=e.permalink;return n.createElement("li",{key:a,className:c},n.createElement(o.Z,{name:t,permalink:a}))}))))}},3082:function(e,t,a){a.d(t,{Z:function(){return s}});var n=a(7294),r=(a(3935),a(1262)),l=a(6010),o="container_2KlB",i="tagline_byts",c=["backgroundOrange_1kWu","backgroundPurple_1gnS","backgroundRed_mWnz"],s=n.memo((function(){var e=c[Math.floor(Math.random()*c.length)];return n.createElement(r.Z,null,(function(){return Math.random()>.5?n.createElement("a",{className:(0,l.Z)(o,e),href:"https://www.moonchaser.io/?utm_source=techinterviewhandbook&utm_medium=referral&utm_content=website_docs_sidebar",target:"_blank",rel:"noreferrer noopener",onClick:function(){window.gtag("event","moonchaser.sidebar.click")}},n.createElement("p",{className:i},n.createElement("strong",null,"Get paid more.")," Receive risk-free salary negotiation help from Moonchaser. You pay nothing unless your offer is increased.")):n.createElement("a",{className:(0,l.Z)(o,e),href:"https://www.levels.fyi/services/?ref=TechInterviewHandbook&utm_source=techinterviewhandbook&utm_medium=referral&utm_content=website_docs_sidebar",target:"_blank",rel:"noreferrer noopener",onClick:function(){window.gtag("event","levelsfyi.sidebar.click")}},n.createElement("p",{className:i},n.createElement("strong",null,"Get paid, not played.")," Chat with former tech recruiters who\u2019ll guide you on exactly what to say to negotiate a higher offer."))}))}))}}]);