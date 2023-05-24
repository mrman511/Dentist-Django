"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[85694],{93470:function(e,t,n){var r=n(67294),o=n(30067),l=n(57094),a=n(85893);function i(e){let t=[],n=[];return Array.from(e.querySelectorAll('input,select,textarea,a[href],button,[tabindex],audio[controls],video[controls],[contenteditable]:not([contenteditable="false"])')).forEach((e,r)=>{let o=function(e){let t=parseInt(e.getAttribute("tabindex"),10);return Number.isNaN(t)?"true"===e.contentEditable||("AUDIO"===e.nodeName||"VIDEO"===e.nodeName||"DETAILS"===e.nodeName)&&null===e.getAttribute("tabindex")?0:e.tabIndex:t}(e);-1===o||e.disabled||"INPUT"===e.tagName&&"hidden"===e.type||function(e){if("INPUT"!==e.tagName||"radio"!==e.type||!e.name)return!1;let t=t=>e.ownerDocument.querySelector(`input[type="radio"]${t}`),n=t(`[name="${e.name}"]:checked`);return n||(n=t(`[name="${e.name}"]`)),n!==e}(e)||(0===o?t.push(e):n.push({documentOrder:r,tabIndex:o,node:e}))}),n.sort((e,t)=>e.tabIndex===t.tabIndex?e.documentOrder-t.documentOrder:e.tabIndex-t.tabIndex).map(e=>e.node).concat(t)}function s(){return!0}t.Z=function(e){let{children:t,disableAutoFocus:n=!1,disableEnforceFocus:u=!1,disableRestoreFocus:c=!1,getTabbable:d=i,isEnabled:f=s,open:p}=e,m=r.useRef(),h=r.useRef(null),b=r.useRef(null),v=r.useRef(null),E=r.useRef(null),y=r.useRef(!1),g=r.useRef(null),x=(0,o.Z)(t.ref,g),R=r.useRef(null);r.useEffect(()=>{p&&g.current&&(y.current=!n)},[n,p]),r.useEffect(()=>{if(!p||!g.current)return;let e=(0,l.Z)(g.current);return!g.current.contains(e.activeElement)&&(g.current.hasAttribute("tabIndex")||g.current.setAttribute("tabIndex",-1),y.current&&g.current.focus()),()=>{c||(v.current&&v.current.focus&&(m.current=!0,v.current.focus()),v.current=null)}},[p]),r.useEffect(()=>{if(!p||!g.current)return;let e=(0,l.Z)(g.current),t=t=>{let{current:n}=g;if(null!==n){if(!e.hasFocus()||u||!f()||m.current){m.current=!1;return}if(!n.contains(e.activeElement)){if(t&&E.current!==t.target||e.activeElement!==E.current)E.current=null;else if(null!==E.current)return;if(!y.current)return;let r=[];if((e.activeElement===h.current||e.activeElement===b.current)&&(r=d(g.current)),r.length>0){var o,l;let a=Boolean((null==(o=R.current)?void 0:o.shiftKey)&&(null==(l=R.current)?void 0:l.key)==="Tab"),i=r[0],s=r[r.length-1];a?s.focus():i.focus()}else n.focus()}}},n=t=>{R.current=t,!u&&f()&&"Tab"===t.key&&e.activeElement===g.current&&t.shiftKey&&(m.current=!0,b.current.focus())};e.addEventListener("focusin",t),e.addEventListener("keydown",n,!0);let r=setInterval(()=>{"BODY"===e.activeElement.tagName&&t()},50);return()=>{clearInterval(r),e.removeEventListener("focusin",t),e.removeEventListener("keydown",n,!0)}},[n,u,c,f,p,d]);let Z=e=>{null===v.current&&(v.current=e.relatedTarget),y.current=!0,E.current=e.target;let n=t.props.onFocus;n&&n(e)},T=e=>{null===v.current&&(v.current=e.relatedTarget),y.current=!0};return(0,a.jsxs)(r.Fragment,{children:[(0,a.jsx)("div",{tabIndex:p?0:-1,onFocus:T,ref:h,"data-testid":"sentinelStart"}),r.cloneElement(t,{ref:x,onFocus:Z}),(0,a.jsx)("div",{tabIndex:p?0:-1,onFocus:T,ref:b,"data-testid":"sentinelEnd"})]})}},85694:function(e,t,n){n.d(t,{Z:function(){return N}});var r=n(87462),o=n(63366),l=n(67294),a=n(30067),i=n(57094),s=n(73633),u=n(49064),c=n(94780),d=n(78385),f=n(58290),p=n(95806);function m(e,t){t?e.setAttribute("aria-hidden","true"):e.removeAttribute("aria-hidden")}function h(e){return parseInt((0,f.Z)(e).getComputedStyle(e).paddingRight,10)||0}function b(e,t,n,r,o){let l=[t,n,...r];[].forEach.call(e.children,e=>{let t=-1===l.indexOf(e),n=!function(e){let t=-1!==["TEMPLATE","SCRIPT","STYLE","LINK","MAP","META","NOSCRIPT","PICTURE","COL","COLGROUP","PARAM","SLOT","SOURCE","TRACK"].indexOf(e.tagName),n="INPUT"===e.tagName&&"hidden"===e.getAttribute("type");return t||n}(e);t&&n&&m(e,o)})}function v(e,t){let n=-1;return e.some((e,r)=>!!t(e)&&(n=r,!0)),n}var E=n(93470),y=n(1588),g=n(34867);function x(e){return(0,g.Z)("MuiModal",e)}(0,y.Z)("MuiModal",["root","hidden"]);var R=n(18793),Z=n(85893);let T=["children","classes","closeAfterTransition","component","container","disableAutoFocus","disableEnforceFocus","disableEscapeKeyDown","disablePortal","disableRestoreFocus","disableScrollLock","hideBackdrop","keepMounted","manager","onBackdropClick","onClose","onKeyDown","open","onTransitionEnter","onTransitionExited","slotProps","slots"],I=e=>{let{open:t,exited:n,classes:r}=e;return(0,c.Z)({root:["root",!t&&n&&"hidden"]},x,r)},k=new class{constructor(){this.containers=void 0,this.modals=void 0,this.modals=[],this.containers=[]}add(e,t){let n=this.modals.indexOf(e);if(-1!==n)return n;n=this.modals.length,this.modals.push(e),e.modalRef&&m(e.modalRef,!1);let r=function(e){let t=[];return[].forEach.call(e.children,e=>{"true"===e.getAttribute("aria-hidden")&&t.push(e)}),t}(t);b(t,e.mount,e.modalRef,r,!0);let o=v(this.containers,e=>e.container===t);return -1!==o?(this.containers[o].modals.push(e),n):(this.containers.push({modals:[e],container:t,restore:null,hiddenSiblings:r}),n)}mount(e,t){let n=v(this.containers,t=>-1!==t.modals.indexOf(e)),r=this.containers[n];r.restore||(r.restore=function(e,t){let n=[],r=e.container;if(!t.disableScrollLock){let o;if(function(e){let t=(0,i.Z)(e);return t.body===e?(0,f.Z)(e).innerWidth>t.documentElement.clientWidth:e.scrollHeight>e.clientHeight}(r)){let l=(0,p.Z)((0,i.Z)(r));n.push({value:r.style.paddingRight,property:"padding-right",el:r}),r.style.paddingRight=`${h(r)+l}px`;let a=(0,i.Z)(r).querySelectorAll(".mui-fixed");[].forEach.call(a,e=>{n.push({value:e.style.paddingRight,property:"padding-right",el:e}),e.style.paddingRight=`${h(e)+l}px`})}if(r.parentNode instanceof DocumentFragment)o=(0,i.Z)(r).body;else{let s=r.parentElement,u=(0,f.Z)(r);o=(null==s?void 0:s.nodeName)==="HTML"&&"scroll"===u.getComputedStyle(s).overflowY?s:r}n.push({value:o.style.overflow,property:"overflow",el:o},{value:o.style.overflowX,property:"overflow-x",el:o},{value:o.style.overflowY,property:"overflow-y",el:o}),o.style.overflow="hidden"}let c=()=>{n.forEach(({value:e,el:t,property:n})=>{e?t.style.setProperty(n,e):t.style.removeProperty(n)})};return c}(r,t))}remove(e,t=!0){let n=this.modals.indexOf(e);if(-1===n)return n;let r=v(this.containers,t=>-1!==t.modals.indexOf(e)),o=this.containers[r];if(o.modals.splice(o.modals.indexOf(e),1),this.modals.splice(n,1),0===o.modals.length)o.restore&&o.restore(),e.modalRef&&m(e.modalRef,t),b(o.container,e.mount,e.modalRef,o.hiddenSiblings,!1),this.containers.splice(r,1);else{let l=o.modals[o.modals.length-1];l.modalRef&&m(l.modalRef,!1)}return n}isTopModal(e){return this.modals.length>0&&this.modals[this.modals.length-1]===e}},w=l.forwardRef(function(e,t){var n,c;let{children:f,classes:p,closeAfterTransition:h=!1,component:b,container:v,disableAutoFocus:y=!1,disableEnforceFocus:g=!1,disableEscapeKeyDown:x=!1,disablePortal:w=!1,disableRestoreFocus:N=!1,disableScrollLock:A=!1,hideBackdrop:P=!1,keepMounted:O=!1,manager:S=k,onBackdropClick:C,onClose:L,onKeyDown:F,open:M,onTransitionEnter:D,onTransitionExited:K,slotProps:j={},slots:U={}}=e,$=(0,o.Z)(e,T),[B,W]=l.useState(!0),Y=l.useRef({}),_=l.useRef(null),q=l.useRef(null),H=(0,a.Z)(q,t),G=!!e.children&&e.children.props.hasOwnProperty("in"),V=null==(n=e["aria-hidden"])||n,X=()=>(0,i.Z)(_.current),z=()=>(Y.current.modalRef=q.current,Y.current.mountNode=_.current,Y.current),J=()=>{S.mount(z(),{disableScrollLock:A}),q.current.scrollTop=0},Q=(0,s.Z)(()=>{let e=("function"==typeof v?v():v)||X().body;S.add(z(),e),q.current&&J()}),ee=l.useCallback(()=>S.isTopModal(z()),[S]),et=(0,s.Z)(e=>{_.current=e,e&&(M&&ee()?J():m(q.current,V))}),en=l.useCallback(()=>{S.remove(z(),V)},[S,V]);l.useEffect(()=>()=>{en()},[en]),l.useEffect(()=>{M?Q():G&&h||en()},[M,en,G,h,Q]);let er=(0,r.Z)({},e,{classes:p,closeAfterTransition:h,disableAutoFocus:y,disableEnforceFocus:g,disableEscapeKeyDown:x,disablePortal:w,disableRestoreFocus:N,disableScrollLock:A,exited:B,hideBackdrop:P,keepMounted:O}),eo=I(er),el=()=>{W(!1),D&&D()},ea=()=>{W(!0),K&&K(),h&&en()},ei=e=>{e.target===e.currentTarget&&(C&&C(e),L&&L(e,"backdropClick"))},es=e=>{F&&F(e),"Escape"===e.key&&ee()&&!x&&(e.stopPropagation(),L&&L(e,"escapeKeyDown"))},eu={};void 0===f.props.tabIndex&&(eu.tabIndex="-1"),G&&(eu.onEnter=(0,u.Z)(el,f.props.onEnter),eu.onExited=(0,u.Z)(ea,f.props.onExited));let ec=null!=(c=null!=b?b:U.root)?c:"div",ed=(0,R.Z)({elementType:ec,externalSlotProps:j.root,externalForwardedProps:$,additionalProps:{ref:H,role:"presentation",onKeyDown:es},className:eo.root,ownerState:er}),ef=U.backdrop,ep=(0,R.Z)({elementType:ef,externalSlotProps:j.backdrop,additionalProps:{"aria-hidden":!0,onClick:ei,open:M},className:eo.backdrop,ownerState:er});return O||M||G&&!B?(0,Z.jsx)(d.Z,{ref:et,container:v,disablePortal:w,children:(0,Z.jsxs)(ec,(0,r.Z)({},ed,{children:[!P&&ef?(0,Z.jsx)(ef,(0,r.Z)({},ep)):null,(0,Z.jsx)(E.Z,{disableEnforceFocus:g,disableAutoFocus:y,disableRestoreFocus:N,isEnabled:ee,open:M,children:l.cloneElement(f,eu)})]}))}):null});var N=w},95806:function(e,t,n){n.d(t,{Z:function(){return r}});function r(e){let t=e.documentElement.clientWidth;return Math.abs(window.innerWidth-t)}}}]);
//# sourceMappingURL=85694-247980d61f9e0f7a.js.map