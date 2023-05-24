"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[42076],{25409:function(e,t,n){n.d(t,{K:function(){return p}});var a=n(26042),r=n(69396),i=n(85893),o=n(29630),s=n(11447),u=n.n(s),c=n(23370),l=n.n(c),h=(0,n(12608).ZL)()(function(e){var t=e.tokens,n=t.fontWeight,a=t.spacing;return{unhighlightedText:{fontWeight:n.normal},highlightedText:{fontWeight:n.bold,whiteSpace:"pre"},autocompleteOption:{marginLeft:a.s}}}),d=function(e){var t=e.facet,n=e.option,s=e.inputValue,c=e.autoCompleteProps,d=u()(n,s),p=l()(n,d),f=h().classes;return(0,i.jsxs)("li",(0,r.Z)((0,a.Z)({},c),{children:[p.map(function(e){return(0,i.jsx)("span",{className:e.highlight?f.unhighlightedText:f.highlightedText,children:e.text},"".concat(e.highlight,"-").concat(e.text))}),t&&(0,i.jsx)(o.Z,{classes:{root:f.autocompleteOption},variant:"overline",component:"span",color:"textSecondary",children:t})]}))},p=function(e,t,n){var a=t.facet,r=t.option,o=n.inputValue;return(0,i.jsx)(d,{facet:a,option:r,inputValue:o,autoCompleteProps:e})};d.defaultProps={facet:void 0}},28719:function(e,t,n){n.d(t,{q:function(){return d}});var a=n(14924),r=n(85893),i=n(9041),o=n(80562),s=n(39290),u=n(12608),c=n(86674),l=n(96360),h=(0,u.ZL)()(function(e){return{clearInputIcon:{padding:e.tokens.spacing.xs,visibility:"hidden"},clearInputIconVisible:{visibility:"visible"}}}),d=function(e){var t=e.clearInput,n=e.inputIsFocused,u=h(),d=u.classes,p=u.cx,f={closeLabel:(0,({t:(0,s.$G)(l.WuT).t}).t)("common:actions_close")}.closeLabel;return(0,r.jsx)(i.Z,{position:"end",children:(0,r.jsx)(o.Z,{"aria-label":f,className:p(d.clearInputIcon,(0,a.Z)({},d.clearInputIconVisible,n)),onClick:t,size:"small",children:(0,r.jsx)(c.x,{fontSize:"small"})})})}},19743:function(e,t,n){n.d(t,{H:function(){return c}});var a=n(10253),r=n(85893),i=n(5152),o=n.n(i),s=n(67854),u=o()(function(){return Promise.all([n.e(39293),n.e(32912),n.e(72957),n.e(36311),n.e(55050),n.e(28741),n.e(62754),n.e(98783),n.e(18165)]).then(n.bind(n,98783)).then(function(e){return e.FilterPills})},{loadableGenerated:{webpack:function(){return[98783]}},ssr:!1}),c=function(e){var t=e.limit,n=e.isInput;return(0,a.Z)((0,s.Q3)(),1)[0]?(0,r.jsx)(u,{limit:t,isInput:n}):null};c.defaultProps={limit:-1,isInput:!0}},42279:function(e,t,n){n.d(t,{E:function(){return k}});var a=n(26042),r=n(69396),i=n(10253),o=n(85893),s=n(35966),u=n(67294),c=n(12608),l=n(25409),h=n(70056),d=n(52912),p=n(87398),f=n(90478),I=n(35868),E=n(90553),g=n(14924),m=n(99534),v=n(67836),T=n(39290),_=n(19743),C=n(67854),S=n(33340),A=n(96360),R=n(28719),Z=n(56196).dp.density.base,O=(0,c.ZL)()({input:{"&&&":{paddingTop:0,paddingBottom:0,height:Z}},inputRoot:{"&&&":{paddingTop:0,paddingBottom:0}}}),b=(0,c.ZL)()(function(e){var t=e.palette,n=e.tokens,a=n.radius,r=n.spacing;return{textRoot:{width:"100%"},inputRoot:{background:t.background.default,borderRadius:"0 ".concat(a.l," ").concat(a.l," 0"),paddingRight:0,'& input[type="search"]::-webkit-search-cancel-button':{display:"none"}},inputNotFocused:{"&&&":{flexGrow:0,width:"auto",minWidth:"auto"}},notchedOutline:{border:0},searchIcon:{margin:r.base}}}),y=function(e){var t,n=e.t;return{placeholderCopy:(t={},(0,g.Z)(t,h.k4,n("site-header:search_for_all_images_mobile")),(0,g.Z)(t,h.xF,n("site-header:search_for_music")),(0,g.Z)(t,h.pX,n("site-header:search_for_videos")),(0,g.Z)(t,h.gP,n("ent:search_for_editorial")),(0,g.Z)(t,h.q$,n("site-header:search_for_recommended_images")),(0,g.Z)(t,h.tn,n("site-header:search_for_sound_effects")),(0,g.Z)(t,h.hv,n("site-header:search_for_templates")),(0,g.Z)(t,h.Nk,n("generate_ai_generator_prompt_placeholder")),(0,g.Z)(t,h.w5,n("site-header:search_for_3d-objects")),t)}},P=function(e){var t,n=e.classesProps,s=e.disableClearable,c=e.handleChange,l=e.handleFocus,h=e.handleBlur,d=e.InputProps,p=e.inputProps,f=e.params,I=e.searchBarType,E=e.value,g=e.hasFilterPills,Z=e.dataOptimize,P=(0,m.Z)(e,["classesProps","disableClearable","handleChange","handleFocus","handleBlur","InputProps","inputProps","params","searchBarType","value","hasFilterPills","dataOptimize"]),L=b(),k=L.classes,D=L.cx,x=O().classes,H=y({t:(0,T.$G)(A.WuT).t}).placeholderCopy,N=(0,i.Z)((0,u.useState)(!1),2),V=N[0],F=N[1],M=(0,C.mN)().filterType,B=E?E.length:null===(t=H[I])||void 0===t?void 0:t.length,q=(0,S.yh)().analytics;return(0,o.jsx)(v.Z,(0,r.Z)((0,a.Z)({},f,P),{onChange:c,placeholder:H[I],variant:"outlined",inputProps:(0,r.Z)((0,a.Z)({},p),{"aria-label":H[I],size:B?B+12:null,value:E,"data-optimize":Z}),classes:{root:k.textRoot},InputProps:(0,r.Z)((0,a.Z)({type:"search"},d),{classes:{root:D(k.inputRoot,x.inputRoot,n.inputRoot),notchedOutline:k.notchedOutline,input:D(x.input,!V&&k.inputNotFocused)},endAdornment:(0,o.jsxs)(o.Fragment,{children:[!!M&&g&&(0,o.jsx)(_.H,{limit:V?2:void 0}),!s&&E&&(0,o.jsx)(R.q,{clearInput:function(){return c({target:{value:""}})},inputIsFocused:V})]}),onBlur:function(){h(),F(!1)},onFocus:function(){q.inlineClick("searchBar.textField"),l(),F(!0)}})}))};P.defaultProps={classesProps:{},disableClearable:!1,handleChange:function(){},handleFocus:function(){},handleBlur:function(){},hasFilterPills:!1,InputProps:{},inputProps:{},params:{},value:"",dataOptimize:null};var L=(0,c.ZL)()(function(e){return{dynamicSearchBar:{width:"100%"},autocompleteRoot:{"& .MuiInputBase-root":{flexWrap:"nowrap"},"&&& .MuiInputBase-adornedEnd":{paddingRight:0}},autocompleteOption:{marginLeft:e.tokens.spacing.s}}}),k=function(e){var t=e.searchTerm,n=e.handleLoad,c=e.selectedAsset,g=e.inputRef,m=e.hasFilterPills,v=e.isTermChangedExternally,T=(0,i.Z)((0,u.useState)(!1),2),_=T[0],C=T[1],S=(0,i.Z)((0,u.useState)(!1),2),A=S[0],R=S[1],Z=(0,u.useRef)(),b=L().classes,y=O().classes,k=(0,f.Rx)({assetType:c}),D=k.doSearch,x=k.selectMusicAutocomplete,H=(0,E.JI)().assetType,N=(0,I.M)({initialSearchTerm:t,assetType:c,userGeneratedEvent:A}),V=N.handleChange,F=N.options,M=N.setInputValue,B=N.value,q=function(){R(!0)},w=function(){return R(!1)},j=(0,u.useRef)(t);t!==j.current&&(M(t),j.current=t),Z.current=!1,(0,u.useEffect)(function(){n&&n()},[n]);var z=(0,u.useCallback)(function(e){return(0,o.jsx)(P,{handleChange:V,hasFilterPills:m,inputProps:(0,r.Z)((0,a.Z)({},e.inputProps),{"data-automation":"SearchBar_Loaded"}),InputProps:(0,r.Z)((0,a.Z)({},e.InputProps),{inputRef:g}),params:e,searchBarType:c,value:B,handleFocus:q,handleBlur:w,dataOptimize:"search-bar-input"})},[V,m,g,c,B]);return(0,o.jsx)(s.Z,{autoComplete:!0,classes:{root:b.autocompleteRoot,inputRoot:y.inputRoot,input:y.input},className:b.dynamicSearchBar,freeSolo:!0,getOptionLabel:function(e){var t=e.option;return void 0===t?"":t},onChange:function(e,t,n){var a=(0,p.l)(n);if(((0,p.B)(n)&&H===c||a)&&!_){if(Z.current=!0,c===h.xF&&a)M(""),x(t);else{var r="string"==typeof t?t:t.option;M(r),D(r),C(!1)}}},onKeyDown:function(e){e.key!==d.q7||Z.current||(C(!0),H!==c||v?D(B):""===B&&D())},options:F,renderInput:z,renderOption:l.K,value:""})};k.defaultProps={hasFilterPills:void 0,isTermChangedExternally:!1,inputRef:{},searchTerm:"",handleLoad:void 0}},68505:function(e,t,n){n.d(t,{m:function(){return l}});var a=n(85893),r=n(80562),i=n(39290),o=n(12608),s=n(65001),u=n(96360),c=(0,o.ZL)()(function(e){var t=e.palette,n=e.tokens.border;return{searchIcon:{borderRadius:"0 ".concat(n.radius.l," ").concat(n.radius.l," 0"),backgroundColor:t.secondary.main,color:t.secondary.contrastText,"&:hover":{backgroundColor:t.secondary.dark}}}}),l=function(e){var t=e.className,n=e.onClick,o=(0,i.$G)(u.C8c).t,l=c(),h=l.classes,d=l.cx;return(0,a.jsx)(r.Z,{"aria-label":o("common:actions_search"),classes:{root:d(t,h.searchIcon)},color:"secondary",onClick:n,size:"large",children:(0,a.jsx)(s.o,{})})};l.defaultProps={className:null,onClick:function(){}}},52912:function(e,t,n){n.d(t,{Ft:function(){return r},Mf:function(){return o},pe:function(){return a},q7:function(){return i},zD:function(){return s}});var a="ArrowLeft",r="ArrowRight",i="Enter",o="Tab",s="submit"},33477:function(e,t,n){n.d(t,{$:function(){return r}});var a=n(70056),r={apiQuery:"filter[assetTypes]",defaultValue:null,buildApiValue:function(e){return e===a.pX?a.FM:a.Y_},primaryText:"ent:filters_product_type",urlValue:n(36633).cb,columnCount:2,showInSearchBar:!1,filters:[{label:"common:links_images",isDefault:!0,value:a.k4},{label:"contributor_portfolio:tab_label_videos",value:a.pX}]}},87398:function(e,t,n){n.d(t,{B:function(){return r},l:function(){return a}});var a=function(e){return"selectOption"===e},r=function(e){return"createOption"===e}},10190:function(e,t,n){n.d(t,{N4:function(){return E}});var a=n(36305),r=n(11163),i=n(67294),o=n(40821),s=n(85672),u=n(70056),c=n(42149),l=n(98510),h=n(48497),d=n(75957),p=n(14587),f=n(34238),I=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.assetType,n=void 0===t?u.Y_:t,a=(0,h.D)().isBrandSstk?c.Oq:c.$S;return(0,o.ZP)((0,s.Zg)({queryParams:{assetType:n,channel:a}}).formattedUrl,function(e){return d.uS.get(e).then(function(e){return(0,p.O)(e.data)})},{dedupingInterval:l.Ho}).data},E=function(){var e=(0,r.useRouter)().asPath,t=(0,f.tc)(e),n=I({assetType:u._M[t]});return{filters:(0,i.useMemo)(function(){var e=(null==n?void 0:n.map(function(e){return{label:e.label,value:e.id}}))||[];return[{label:"ent:filters_editorial_all_content",value:void 0,isDefault:!0}].concat((0,a.Z)(e))},[n]),key:"collections"}}},67854:function(e,t,n){n.d(t,{Q3:function(){return f},bO:function(){return m},e$:function(){return E},mN:function(){return p}});var a,r,i=n(14924),o=n(11163),s=n(39290),u=n(36633),c=n(96360),l=n(34238),h=n(88981),d=function(e){var t=e.pathname;switch((0,l.oY)(t).replace(/\/workbench/,"").replace(/\/\[term\]/,"")){case"/search":case"/s":return u.hh.IMAGE_SEARCH;case"/video/search":return u.hh.VIDEO_SEARCH;case"/video/editorial/search":return u.hh.VIDEO_EDITORIAL_SEARCH;case"/music/search":return u.hh.MUSIC_SEARCH;case"/sound-effects/search":return u.hh.SFX_SEARCH;case"/account/invoices/[slug]":return u.hh.ACCOUNT_INVOICES;case"/editorial/search":return u.hh.EDITORIAL_IMAGE_SEARCH;case"/editorial/video/search":return u.hh.EDITORIAL_VIDEO_SEARCH;case"/editorial/[publicationRoot]":case"/editorial/latest-events":return u.hh.EDITORIAL_LATEST_EVENTS;case"/editorial/livefeed/[permalink]":case"/editorial/[publicationRoot]/[permalink]":return u.hh.EDITORIAL_PUBLICATION;case"/editorial/compilations/[permalink]":return u.hh.EDITORIAL_COMPILATION;case"/catalog":case"/catalog/uploads":case"/catalog/licenses":case"/catalog/designs":case"/catalog/shared-with-you":return u.hh.CATALOG;case"/catalog/collections":case"/catalog/collections/[slug]":return u.hh.COLLECTIONS;case"/templates/search":return u.hh.TEMPLATES_SEARCH;case"/predict":case"/predict/[id]":return u.hh.PREDICT_SEARCH;default:if(t.startsWith("/licenses"))return u.hh.LICENSE_HISTORY;return null}},p=function(){var e=(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}).overrideFilterType,t=(0,o.useRouter)(),n=t.pathname,a=t.query;return{filterType:e||d({pathname:n,query:a}),query:a}},f=function(){var e=(0,o.useRouter)().query,t=p().filterType,n=(0,h.k)({filterType:t});return[n&&Object.values(n).some(function(t){return!!e[t.urlValue]}),!!n]},I=(a={},(0,i.Z)(a,u.hh.ACCOUNT_INVOICES,c.b_Q),(0,i.Z)(a,u.hh.IMAGE_SEARCH,c.Zae),(0,i.Z)(a,u.hh.VIDEO_SEARCH,c.A89),(0,i.Z)(a,u.hh.VIDEO_EDITORIAL_SEARCH,c.n5R),(0,i.Z)(a,u.hh.MUSIC_SEARCH,c.mE7),(0,i.Z)(a,u.hh.SFX_SEARCH,c.nln),(0,i.Z)(a,u.hh.TEMPLATES_SEARCH,c.vkC),(0,i.Z)(a,u.hh.EDITORIAL_IMAGE_SEARCH,c.C_m),(0,i.Z)(a,u.hh.EDITORIAL_VIDEO_SEARCH,c.n5R),(0,i.Z)(a,u.hh.LICENSE_HISTORY,c.nMb),(0,i.Z)(a,u.hh.EDITORIAL_LATEST_EVENTS,c.RMh),(0,i.Z)(a,u.hh.EDITORIAL_PUBLICATION,c.kq$),(0,i.Z)(a,u.hh.EDITORIAL_COMPILATION,c.kq$),(0,i.Z)(a,u.hh.CATALOG,c.tcn),(0,i.Z)(a,u.hh.COLLECTIONS,c.tcn),(0,i.Z)(a,u.hh.AI_SEARCH,c.mU8),(0,i.Z)(a,u.hh.PREDICT_SEARCH,c.Zae),a),E=function(){var e=(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}).overrideFilterType,t=I[p({overrideFilterType:e}).filterType],n=(0,s.$G)(t);return{t:n.t,ready:n.ready,ns:t}},g=(r={},(0,i.Z)(r,u.hh.IMAGE_SEARCH,c.VIT),(0,i.Z)(r,u.hh.VIDEO_SEARCH,c.VIT),(0,i.Z)(r,u.hh.VIDEO_EDITORIAL_SEARCH,c.U2P),(0,i.Z)(r,u.hh.MUSIC_SEARCH,c.VIT),(0,i.Z)(r,u.hh.EDITORIAL_IMAGE_SEARCH,c.U2P),(0,i.Z)(r,u.hh.EDITORIAL_VIDEO_SEARCH,c.U2P),(0,i.Z)(r,u.hh.EDITORIAL_LATEST_EVENTS,c.RMh),(0,i.Z)(r,u.hh.ACCOUNT_INVOICES,c.U2P),(0,i.Z)(r,u.hh.CATALOG,c.tcn),(0,i.Z)(r,u.hh.COLLECTIONS,c.tcn),(0,i.Z)(r,u.hh.PREDICT_SEARCH,c.VIT),r),m=function(){var e=g[p().filterType],t=(0,s.$G)(e);return{t:t.t,ready:t.ready,ns:e}}},88981:function(e,t,n){n.d(t,{k:function(){return d}});var a,r=n(14924),i=n(26042),o=n(69396),s=n(10253),u=n(67294),c=n(36633),l=n(10190),h=(a={},(0,r.Z)(a,c.hh.EDITORIAL_IMAGE_SEARCH,l.N4),(0,r.Z)(a,c.hh.EDITORIAL_VIDEO_SEARCH,l.N4),(0,r.Z)(a,c.hh.VIDEO_EDITORIAL_SEARCH,l.N4),a),d=function(e){var t=e.filterType,a=void 0===t?c.hh.IMAGE_SEARCH:t,l=(0,s.Z)((0,u.useState)(!1),2),d=l[0],p=l[1],f=(0,s.Z)((0,u.useState)(null),2),I=f[0],E=f[1],g=(h[a]||function(){return{}})(),m=g.filters,v=g.key,T=(0,u.useCallback)(function(e){E((0,i.Z)({},e,e[v]?(0,r.Z)({},v,(0,o.Z)((0,i.Z)({},e[v]),{filters:m})):{})),p(!0)},[m,v,E,p]);return(0,u.useEffect)(function(){switch(a){case c.hh.MUSIC_SEARCH:Promise.all([n.e(13378),n.e(94701),n.e(12389)]).then(n.bind(n,94701)).then(T);break;case c.hh.SFX_SEARCH:Promise.all([n.e(13378),n.e(53032)]).then(n.bind(n,4774)).then(T);break;case c.hh.VIDEO_SEARCH:Promise.all([n.e(13378),n.e(64323),n.e(90053)]).then(n.bind(n,64323)).then(T);break;case c.hh.IMAGE_SEARCH:case c.hh.PREDICT_SEARCH:Promise.all([n.e(13378),n.e(83377),n.e(20770)]).then(n.bind(n,83377)).then(T);break;case c.hh.EDITORIAL_IMAGE_SEARCH:Promise.all([n.e(32912),n.e(63141)]).then(n.bind(n,63141)).then(T);break;case c.hh.VIDEO_EDITORIAL_SEARCH:case c.hh.EDITORIAL_VIDEO_SEARCH:Promise.all([n.e(32912),n.e(13378),n.e(93677)]).then(n.bind(n,79356)).then(T);break;case c.hh.EDITORIAL_PUBLICATION:case c.hh.EDITORIAL_COMPILATION:n.e(58200).then(n.bind(n,58200)).then(T);break;case c.hh.LICENSE_HISTORY:n.e(44763).then(n.bind(n,44763)).then(T);break;case c.hh.EDITORIAL_LATEST_EVENTS:n.e(8110).then(n.bind(n,8110)).then(T);break;case c.hh.ACCOUNT_INVOICES:n.e(80331).then(n.bind(n,80331)).then(T);break;case c.hh.CATALOG:case c.hh.COLLECTIONS:n.e(89673).then(n.bind(n,89673)).then(T);break;case c.hh.AI_SEARCH:Promise.all([n.e(13378),n.e(97315)]).then(n.bind(n,71143)).then(T);break;case c.hh.TEMPLATES_SEARCH:Promise.all([n.e(13378),n.e(61764)]).then(n.bind(n,35655)).then(T)}},[a,T]),d&&I}},90478:function(e,t,n){n.d(t,{DI:function(){return M},Iw:function(){return w},Rx:function(){return F},zU:function(){return B}});var a=n(14924),r=n(26042),i=n(69396),o=n(99534),s=n(10253),u=n(87146),c=n(11163),l=n(67294),h=n(40821),d=n(85672),p=n(79235),f=n(70056),I=n(27394),E=n(36633),g=n(78673),m=n(3907),v=n(13378),T=n(33477),_=n(74551),C=n(72957),S=n(23354),A=n(48497),R=n(33340),Z=n(75957),O=n(14587),b=n(38334),y=n(72962),P=n(58940),L=n(442),k=n(90553),D="select",x=[f.VT,f.nj],H=function(e){var t=(0,C.Lt)(e);return x.includes(e)?(0,a.Z)({},T.$.urlValue,f.p_[e]):t?(0,a.Z)({},_.imageType.urlValue,e):{}},N=function(e){var t=e.isBrandSstk,n=e.language,a=e.searchHref;return t&&(0,S.DM)({language:n,relativePath:a})},V=function(e){var t=e.option,n=e.facet,r=e.id,i=e.slug;return[I.xG,I.BX,I.ru].includes(n)?(0,b.oi)((0,a.Z)({},n,(0,v.WF)(t))):n===I.to?(0,b.oi)({artist:i}):(0,y.o)({id:r,slug:i})},F=function(e){var t=e.assetType,n=void 0===t?f.k4:t,h=(0,R.yh)().analytics,d=(0,k.JI)().fullAssetType,I=(0,c.useRouter)(),g=I.query,T=_.imageType.urlValue,S=(g.term,g[T],(0,o.Z)(g,["term",T].map(u.Z))),Z=I.pathname,O=I.asPath,y=(0,A.D)().isBrandSstk,L=(0,m.uY)().setters.setSearchComponent;return{doSearch:(0,l.useCallback)(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=(0,C.Xo)(n),o=H(n),u=t?(0,a.Z)({},E.rH,""):(0,a.Z)({},E.jS,1),c=Z.includes("/".concat(E.mo))&&d===n?(0,r.Z)({},S,u):{},l=Z.includes("/".concat(f.pX,"/").concat(D)),g=n===f.q$||n===f.nj?{currentUrl:O.replace(/(\?.*)|(#.*)/g,"")}:{};h.inlineClick("".concat(p.Yii,".").concat("initiateSearch")),L(E.QP.SEARCH_BAR),(0,P.Z7)({assetType:n,isImageType:(0,C.Lt)(n),isEditorialType:x.includes(n),isRecommendedImageType:(0,C.z)(n)});var m=(0,s.Z)((0,b.J1)((0,v.pR)((0,r.Z)((0,i.Z)((0,r.Z)({},c,o,l?{channel:D}:{}),{term:e}),g)),n),2),T=m[0],_=m[1],A=N({isBrandSstk:y,language:I.locale,searchHref:T});if(A){window.location.href=A;return}I.push(T,_)},[n,Z,d,S,O,h,L,y,I]),selectMusicAutocomplete:(0,l.useCallback)(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.option,a=e.facet,r=e.id,i=e.slug;if(n===f.xF){var o=(0,s.Z)(V({option:t,facet:a,id:r,slug:i}),2),u=o[0],c=o[1],l=N({isBrandSstk:y,language:I.locale,searchHref:u});if(l){window.location.href=l;return}I.push(u,c)}},[n,y,I])}},M=function(e){var t=e.assets,n=(0,C.m3)({assets:t}).pagination,a=void 0===n?{}:n,r=a.totalPages;return{currentPage:a.pageNumber,totalPageCount:r,totalRecords:a.totalRecords}},B=function(e){var t=e.assets,n=e.pageSize,a=void 0===n?50:n,r=(0,C.m3)({assets:t}).pagination,i=void 0===r?{}:r,o=i.start,s=i.total;return{currentPage:Math.round((o+a)/a)||1,totalPageCount:s&&Math.max(Math.ceil(s/a),1),totalRecords:s}},q=function(e){var t=e.assets,n=e.pageSize,a=(0,C.m3)({assets:t}).facetFields;return{pagination:B({assets:t,pageSize:n}),facetFields:a}},w=function(e){var t=e.queryParams,n=t.pageSize,a=void 0===n?E.Ig:n,i=t.page,s=(0,o.Z)(e.queryParams,["pageSize","page"]),u=(0,g.PE)(),c=u.locale,l=u.region,p=(0,r.Z)({language:c,country:l,"page[size]":a,"page[offset]":((void 0===i?1:i)-1)*a},s),f=(0,h.ZP)((0,d.uS)({queryParams:p}).formattedUrl,function(e){return Z.uS.get(e).then(function(e){return(0,O.O)(e.data)||[]})}).data,I=(0,L.W)(f),m=q({assets:I,pageSize:a}),v=m.pagination,T=m.facetFields;return{stickyAssets:I,assets:f,pagination:v,facetFields:T}}},35868:function(e,t,n){n.d(t,{M:function(){return _}});var a,r=n(10253),i=n(67294),o=n(14924),s=n(26042),u=n(99534),c=n(36305),l=n(40821),h=n(85672),d=n(70056),p=n(42149),f=n(98510),I=n(78673),E=n(72957),g=n(48497),m=n(75957),v=(a={},(0,o.Z)(a,d.k4,10),(0,o.Z)(a,d.pX,10),(0,o.Z)(a,d.xF,30),a),T=function(e){var t,n=e.query,a=e.assetType,o=(0,I.PE)().locale,T=(0,E.Xo)(a),_=(0,r.Z)((0,i.useState)([]),2),C=_[0],S=_[1],A=(0,g.D)().isBrandSstk?p.Oq:p.$S;if([d.tn,d.Nk,d.hv].includes(a))t=null;else if(a===d.xF)t=(0,h.Cr)({queryParams:{q:n,language:o,pageSize:v[d.xF],channel:A}}).formattedUrl;else{var R=(0,E.Lt)(a),Z=(0,E.z)(a),O=R||Z?d.k4:a;t=(0,h.bn)({queryParams:{q:n,mediaType:O,language:o,pageSize:v[O]}}).formattedUrl}var b=""===n;b&&0!==C.length&&S([]);var y=T||b?null:t,P=(0,l.ZP)(y,function(e){return m.uS.get(e).then(function(e){var t,n=e.data;return a===d.xF?Object.entries(null!=n?n:{}).reduce(function(e,t){var n=(0,r.Z)(t,2),a=n[0],i=n[1];return(0,c.Z)(e).concat((0,c.Z)(i.map(function(e){var t=e.term,n=(0,u.Z)(e,["term"]);return(0,s.Z)({facet:a,option:t},n)})))},[]):(null!=n?n:[]).map(function(e){return{option:e}})})},{dedupingInterval:f.no}).data;return(0,i.useEffect)(function(){P&&P.length>0&&S(P)},[P]),{options:C}},_=function(e){var t,n,a,o,s=e.initialSearchTerm,u=e.assetType,c=e.userGeneratedEvent,l=(0,r.Z)((0,i.useState)(s),2),h=l[0],d=l[1],p=(n=(t=(0,r.Z)((0,i.useState)(h),2))[0],a=t[1],o=(0,i.useRef)(!0),(0,i.useEffect)(function(){if(!0===o.current){a(h),o.current=!1;return}var e=setTimeout(function(){a(h)},100);return function(){clearTimeout(e)}},[h,100,!0]),n);return{handleChange:function(e){return d(e.target.value)},options:T({query:void 0===c||c?p:"",assetType:u}).options,setInputValue:d,value:h}}},65001:function(e,t,n){n.d(t,{o:function(){return o}});var a=n(26042),r=n(85893),i=(0,n(54235).Z)((0,r.jsx)("path",{d:"M29.333 27.453l-7.587-7.587c1.399-1.787 2.243-4.067 2.243-6.544 0-5.891-4.776-10.667-10.667-10.667S2.655 7.431 2.655 13.322s4.776 10.667 10.667 10.667c2.477 0 4.757-.844 6.567-2.261l7.563 7.604zm-24-14.12c0-4.418 3.582-8 8-8s8 3.582 8 8-3.582 8-8 8-8-3.582-8-8z"}),"Search.svg"),o=function(e){return(0,r.jsx)(i,(0,a.Z)({viewBox:"0 0 32 32"},e))}}}]);
//# sourceMappingURL=42076-d41a28a0178f68b8.js.map