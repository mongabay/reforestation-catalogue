(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{RNiq:function(e,a,t){"use strict";t.r(a);var n=t("o0o1"),i=t.n(n),l=t("q1tI"),r=t.n(l),o=t("j8IJ"),s=t("/MKj"),c=t("z2oR"),u=t("nOHt"),d=t.n(u),m=t("ATyU"),p=t("J/v5"),b=t("rePB"),v=t("Ci9a"),f=(t("zdg9"),t("KQm4")),h=t("17x9"),N=t.n(h),g=(t("90j9"),r.a.createElement),y=Object(l.forwardRef)((function(e,a){var t=e.id,n=e.name,i=e.disabled,l=e.checked,r=e.onChange,o=e.children,s=e.className;return g("div",{ref:a,className:["custom-control","custom-radio","c-radio"].concat(Object(f.a)(s?[s]:[])).join(" ")},g("input",{type:"radio",className:"custom-control-input",disabled:i,id:t,name:n,checked:l,onChange:r}),g("label",{className:"custom-control-label",htmlFor:t},o))}));y.propTypes={id:N.a.string.isRequired,name:N.a.string.isRequired,disabled:N.a.bool,checked:N.a.bool,onChange:N.a.func,children:N.a.node.isRequired,className:N.a.string},y.defaultProps={disabled:!1,checked:!1,onChange:null,className:null};var O=y,j=(t("Wfic"),r.a.createElement),C=function(e){var a=e.id,t=e.name,n=e.disabled,i=e.checked,l=e.onChange,r=e.children,o=e.className;return j("div",{className:["custom-control","custom-checkbox","c-checkbox"].concat(Object(f.a)(o?[o]:[])).join(" ")},j("input",{type:"checkbox",className:"custom-control-input",disabled:n,id:a,name:t,checked:i,onChange:l}),j("label",{className:"custom-control-label",htmlFor:a},r))};C.defaultProps={disabled:!1,checked:!1,onChange:null,className:null};t("wTXl");var I=r.a.createElement,q=function(e){var a=e.id,t=e.options,n=e.defaultValue,i=e.value,r=e.onChange,o=e.disabled,s=e["aria-label"],c=e.className,u=e.required,d=e.showSelectAnOption,m=e.selectAnOptionText,p=Object(l.useCallback)((function(e){var a=t.find((function(a){return a.value===e.target.selectedOptions[0].value}));r(a)}),[t,r]);return I("select",{id:a,className:["c-select","custom-select"].concat(Object(f.a)(c?[c]:[])).join(" "),disabled:o,"aria-label":s,defaultValue:n,value:i,onChange:p,required:u},d&&I("option",{disabled:!0,selected:!0},m),t.map((function(e){return I("option",{key:e.value,value:e.value,disabled:e.disabled},e.label)})))};q.defaultProps={defaultValue:void 0,value:void 0,onChange:function(){return null},disabled:!1,"aria-label":null,className:void 0,required:!1,showSelectAnOption:!1,selectAnOptionText:"-- select an option --"};var P=q,w=t("TSYQ"),E=t.n(w),k=r.a.createElement,A=function(e){var a=e.id,t=e.defaultValue,n=e.value,i=e.min,l=e.max,r=e["aria-label"],o=e.className,s=e.required,c=e.disabled,u=e.onChange;return k("input",{type:"date",id:a,className:E()("c-datepicker","form-control",Object(b.a)({},o,!!o)),defaultValue:t,value:n,min:i,max:l,pattern:"\\d{4}-\\d{2}-\\d{2}","aria-label":r,required:s,disabled:c,onChange:u})};A.defaultProps={className:void 0,defaultValue:void 0,value:void 0,min:void 0,max:void 0,"aria-label":void 0,required:!1,disabled:!1,onChange:function(){return null}};t("DMuj");var T=r.a.createElement,S=function(e){var a=e.id,t=e.defaultValue,n=e.value,i=e.min,l=e.max,r=e.step,o=e["aria-label"],s=e.className,c=e.required,u=e.disabled,d=e.marks,m=e.onChange;return T("div",{className:"c-range"},T("input",{type:"range",id:a,className:E()("custom-range",Object(b.a)({},s,!!s)),defaultValue:t,value:n,min:i,max:l,step:r,"aria-label":o,required:c,disabled:u,onChange:m}),d&&T("div",{className:"marks"},d.map((function(e){return T("span",{key:e,"data-label":e})}))))};S.defaultProps={className:void 0,defaultValue:void 0,value:void 0,min:void 0,max:void 0,step:void 0,"aria-label":void 0,required:!1,disabled:!1,marks:void 0,onChange:function(){return null}};t("3Wdd");var x=r.a.createElement,F=function(e){var a=e.filter,t=e.removeFilter;return x(m.a.div,{className:"c-pill",initial:{opacity:0},animate:{opacity:1}},x("div",{className:"text"},"".concat(a.label,": ").concat(a.value)),x("button",{onClick:function(){return t(a)}},x("img",{src:"/icons/cross.svg"})))},R=Object(c.a)().actions,D=Object(s.b)(null,{removeFilter:R.removeFilter})(F),V=t("ObOl"),_=r.a.createElement;function L(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function B(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?L(Object(t),!0).forEach((function(a){Object(b.a)(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):L(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}var M=function(e){var a=e.filters,t=e.projects,n=e.addFilter,i=Object(l.useState)(null),r=i[0],o=i[1];return _("div",{className:"c-catalogue-filter"},v.a.map((function(e){var i,l=e.fields.map((function(e){return e.id}));return _("div",{key:"category-".concat(e.id),className:"category-container"},_("div",{className:"title"},_("div",{className:"info-button"},_("img",{src:"icons/info.svg"})),_("div",{className:"-bold category-label"}," ","".concat(e.label,":"))),_("div",{className:"filters-section"},_(P,{className:"filter-selector",defaultValue:null,onChange:function(a){var t=a.value,n=v.a.find((function(a){return a.id===e.id})).fields.find((function(e){return e.id===t}));o(B({},n,{category:e.id,value:t}))},options:e.fields.filter((function(e){return!e.hidden})).map((function(e){return B({},e,{label:e.label,value:e.id})})),showSelectAnOption:!0,selectAnOptionText:"Add filter"}),r&&r.category===e.id&&((i=r).type===p.d.String?_("div",{className:"select-filter"},_(P,{options:Object(V.b)(t,i.value,i.commaSeparated).map((function(e){return{value:e,label:e}})),showSelectAnOption:!0,selectAnOptionText:"Select a value",onChange:function(e){var a=e.value;n({mode:i.mode,type:i.type,propertyName:i.value,label:i.label,value:a}),o(null)}})):i.type===p.d.Boolean?_("div",{className:"radio-filter"},_(O,{id:"yes-radio",className:"yes-radio",name:"yes-no-radio",disabled:!1,checked:!1,onChange:function(){o(null),n({mode:i.mode,type:i.type,propertyName:i.value,label:i.label,value:!0})}},"YES"),_(O,{id:"no-radio",className:"no-radio",name:"yes-no-radio",checked:!1,disabled:!1,onChange:function(){o(null),n({mode:i.mode,type:i.type,propertyName:i.value,label:i.label,value:!1})}},"NO")):void 0),_("div",{className:"filters-applied"},a&&a.filter((function(e){return l.includes(e.propertyName)})).map((function(e){return _(D,{key:"pill-".concat(e.propertyName),filter:e})})))))})))},J=Object(c.a)().actions,Y=Object(s.b)((function(e){return{filters:Object(c.e)(e),projects:Object(c.d)(e)}}),{addFilter:J.addFilter})(M),Q=t("bwtd"),U=(t("YFBT"),r.a.createElement),z=function(e){var a=e.project,t=e.highlightedCategory;return U("div",{className:"c-project-card",onClick:function(){return d.a.push("/project?id=".concat(a.projectNumber))}},U(Q.a,{project:a,highlightedCategory:t,cardMode:!0}))},H=[{value:p.e.ALPHABETICAL_OPTION,label:"alphabetical"},{value:p.e.ECOLOGICAL_OPTION,label:"ecological"},{value:p.e.START_DATE_OPTION,label:"start date"},{value:p.e.END_DATE_OPTION,label:"end date"}],X=(t("Brpf"),r.a.createElement);var G=function(e){var a=e.projects,t=e.sort,n=e.country,i=e.filters,r=e.initialQuery,o=e.updateData,s=e.countries,c=e.updateCountry,d=e.updateSort,b=e.loadInitialState,f=r.country,h=r.sort,N=r.filters,g=Object(u.useRouter)();return Object(l.useEffect)((function(){f||h||N?b({country:f,sort:h,filters:JSON.parse(N)}):(c(p.a.ALL),d(p.e.ALPHABETICAL_OPTION)),Object(v.g)().then((function(e){o(e.data)})).catch((function(e){return console.error(e)}))}),[]),Object(l.useEffect)((function(){var e="/?sort=".concat(encodeURIComponent(t),"&country=").concat(encodeURIComponent(n),"&filters=").concat(encodeURIComponent(JSON.stringify(i)));g.push(e,void 0,{shallow:!0})}),[t,n,i]),X("div",{className:"home-layout"},X("div",{className:"navigation-bar"},X("button",{type:"button",className:"btn btn-outline-secondary"},"Methodology"),X("button",{type:"button",className:"btn btn-primary"},"Submit Project Information")),X("div",{className:"main-container"},X("div",{className:"top-container"},X("div",{className:"column col-sm-10 col-md-8 col-xl-6 col-offset-1"},X("div",{className:"title"},X("h2",null,"MONGABAY'S"),X("h1",null,"REFORESTATION DIRECTORY")),X("hr",null),X("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam feugiat, ligula et dignissim aliquet, mauris nisl tincidunt velit, sit amet posuere dolor odio quis diam. Phasellus leo magna, facilisis eget eleifend vitae, aliquam non massa. Mauris quis vestibulum erat. Integer pellentesque elit id neque ornare accumsan. Maecenas a consectetur ligula. Etiam rhoncus lacinia urna eu bibendum. Aliquam scelerisque ut tellus vel vulputate. Vivamus arcu risus, maximus eu tellus et, pretium blandit quam. Fusce in egestas odio. In rhoncus aliquet ex. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Pellentesque facilisis sed neque sed ultrices. Cras at vestibulum diam. Donec et lacus et orci dignissim dapibus ut in odio. Etiam laoreet sapien in varius dapibus. Aliquam erat volutpat."))),X("div",{className:"data-container"},X("div",{className:"left-container"},X("div",{className:"intro-container -border-top"},X("h3",null,"A Transparency Index."),X("div",{className:"legend-text"},X("p",null,"The fingerprint of each project results from five lines representing the proportion of reported indicators within five categories:"," ",X("span",{className:"-bold"},"context"),", ",X("span",{className:"-bold"},"ecological"),","," ",X("span",{className:"-bold"},"economic"),", ",X("span",{className:"-bold"},"social"),", and",X("span",{className:"-bold"},"institutional"),"."),X("p",{className:"-italic"},"Finalized projects represented in gray."))),X("div",{className:"intro-filters-container -border-top"},X("h3",null,"Find projects of Interest."),X("p",null,"Find Projects of Interest. In this paragraph the user learns about priorities and filters. In this paragraph the user learns about priorities and filters. In this paragraph the user learns about priorities and filters. In this paragraph the user learns about priorities and filters. In this paragraph the user learns."),X(Y,null))),X("div",{className:"right-container"},X("div",{className:"projects-list"},X("div",{className:"list-header"},X("div",{className:"sort-container"},X("label",{htmlFor:"sort-select"},"Sort by category"),X(P,{id:"sort-select",options:H,defaultValue:t,value:t,onChange:function(e){var a=e.value;d(a)}})),X("div",{className:"country-container"},X("label",{htmlFor:"country-select"},"Country: "),X(P,{id:"country-select",options:s.map((function(e){return{value:e,label:e}})),onChange:function(e){var a=e.value;return c(a)},defaultValue:n,value:n}))),X("div",{className:"row justify-content-between"},a&&a.map((function(e){return X(m.a.div,{key:e.projectNumber,className:"column",initial:{opacity:0},animate:{opacity:1},transition:{delay:.2}},X(z,{project:e,highlightedCategory:null}))}))))))))},K=Object(c.a)().actions,W=Object(s.b)((function(e){return{projects:Object(c.d)(e),countries:Object(c.b)(e),sort:e.projects.sort,country:e.projects.country,filters:e.projects.filters}}),{addFilter:K.addFilter,removeFilter:K.removeFilter,updateData:K.updateData,updateCountry:K.updateCountry,updateSort:K.updateSort,updateFilters:K.updateFilters,loadInitialState:K.loadInitialState})(G),Z=r.a.createElement;function $(e){return Z(o.a,{className:"p-home"},Z(W,e))}$.getInitialProps=function(e){return i.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return a.abrupt("return",{initialQuery:e.query});case 1:case"end":return a.stop()}}),null,null,null,Promise)};a.default=$},vlRD:function(e,a,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return t("RNiq")}])}},[["vlRD",1,2,6,5,0,3,7,4]]]);