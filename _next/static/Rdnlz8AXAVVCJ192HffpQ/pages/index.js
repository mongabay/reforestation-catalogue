(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{RNiq:function(e,a,t){"use strict";t.r(a);var n=t("o0o1"),l=t.n(n),i=t("q1tI"),r=t.n(i),o=t("j8IJ"),s=t("/MKj"),c=t("z2oR"),u=t("nOHt"),d=t.n(u),m=t("ATyU"),p=t("J/v5"),b=t("rePB"),f=t("Ci9a"),v=(t("zdg9"),t("KQm4")),h=t("17x9"),N=t.n(h),g=(t("90j9"),r.a.createElement),y=Object(i.forwardRef)((function(e,a){var t=e.id,n=e.name,l=e.disabled,i=e.checked,r=e.onChange,o=e.children,s=e.className;return g("div",{ref:a,className:["custom-control","custom-radio","c-radio"].concat(Object(v.a)(s?[s]:[])).join(" ")},g("input",{type:"radio",className:"custom-control-input",disabled:l,id:t,name:n,checked:i,onChange:r}),g("label",{className:"custom-control-label",htmlFor:t},o))}));y.propTypes={id:N.a.string.isRequired,name:N.a.string.isRequired,disabled:N.a.bool,checked:N.a.bool,onChange:N.a.func,children:N.a.node.isRequired,className:N.a.string},y.defaultProps={disabled:!1,checked:!1,onChange:null,className:null};var O=y,j=(t("Wfic"),r.a.createElement),C=function(e){var a=e.id,t=e.name,n=e.disabled,l=e.checked,i=e.onChange,r=e.children,o=e.className;return j("div",{className:["custom-control","custom-checkbox","c-checkbox"].concat(Object(v.a)(o?[o]:[])).join(" ")},j("input",{type:"checkbox",className:"custom-control-input",disabled:n,id:a,name:t,checked:l,onChange:i}),j("label",{className:"custom-control-label",htmlFor:a},r))};C.defaultProps={disabled:!1,checked:!1,onChange:null,className:null};t("wTXl");var I=r.a.createElement,q=function(e){var a=e.id,t=e.options,n=e.defaultValue,l=e.value,r=e.onChange,o=e.disabled,s=e["aria-label"],c=e.className,u=e.required,d=e.showSelectAnOption,m=e.selectAnOptionText,p=Object(i.useCallback)((function(e){var a=t.find((function(a){return a.value===e.target.selectedOptions[0].value}));r(a)}),[t,r]);return I("select",{id:a,className:["c-select","custom-select"].concat(Object(v.a)(c?[c]:[])).join(" "),disabled:o,"aria-label":s,defaultValue:n,value:l,onChange:p,required:u},d&&I("option",{disabled:!0,selected:!0},m),t.map((function(e){return I("option",{key:e.value,value:e.value,disabled:e.disabled},e.label)})))};q.defaultProps={defaultValue:void 0,value:void 0,onChange:function(){return null},disabled:!1,"aria-label":null,className:void 0,required:!1,showSelectAnOption:!1,selectAnOptionText:"-- select an option --"};var P=q,k=t("TSYQ"),w=t.n(k),A=r.a.createElement,E=function(e){var a=e.id,t=e.defaultValue,n=e.value,l=e.min,i=e.max,r=e["aria-label"],o=e.className,s=e.required,c=e.disabled,u=e.onChange;return A("input",{type:"date",id:a,className:w()("c-datepicker","form-control",Object(b.a)({},o,!!o)),defaultValue:t,value:n,min:l,max:i,pattern:"\\d{4}-\\d{2}-\\d{2}","aria-label":r,required:s,disabled:c,onChange:u})};E.defaultProps={className:void 0,defaultValue:void 0,value:void 0,min:void 0,max:void 0,"aria-label":void 0,required:!1,disabled:!1,onChange:function(){return null}};t("DMuj");var T=r.a.createElement,S=function(e){var a=e.id,t=e.defaultValue,n=e.value,l=e.min,i=e.max,r=e.step,o=e["aria-label"],s=e.className,c=e.required,u=e.disabled,d=e.marks,m=e.onChange;return T("div",{className:"c-range"},T("input",{type:"range",id:a,className:w()("custom-range",Object(b.a)({},s,!!s)),defaultValue:t,value:n,min:l,max:i,step:r,"aria-label":o,required:c,disabled:u,onChange:m}),d&&T("div",{className:"marks"},d.map((function(e){return T("span",{key:e,"data-label":e})}))))};S.defaultProps={className:void 0,defaultValue:void 0,value:void 0,min:void 0,max:void 0,step:void 0,"aria-label":void 0,required:!1,disabled:!1,marks:void 0,onChange:function(){return null}};var x=t("nS4R"),F=Object(c.a)().actions,R=Object(s.b)(null,{removeFilter:F.removeFilter})(x.a),D=t("ObOl"),V=r.a.createElement;function _(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function L(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?_(Object(t),!0).forEach((function(a){Object(b.a)(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):_(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}var M=function(e){var a=e.filters,t=e.projects,n=e.addFilter,l=Object(i.useState)(null),r=l[0],o=l[1];return V("div",{className:"c-catalogue-filter"},f.a.map((function(e){var l,i=e.fields.map((function(e){return e.id}));return V("div",{key:"category-".concat(e.id),className:"category-container"},V("div",{className:"title"},V("div",{className:"info-button"},V("img",{src:"icons/info.svg"})),V("div",{className:"-bold category-label"}," ","".concat(e.label,":"))),V("div",{className:"filters-section"},V(P,{id:"select-filter-".concat(e.id),className:"filter-selector",defaultValue:null,onChange:function(a){var t=a.value,n=f.a.find((function(a){return a.id===e.id})).fields.find((function(e){return e.id===t}));o(L({},n,{category:e.id,value:t}))},options:e.fields.filter((function(e){return!e.hidden})).map((function(e){return L({},e,{label:e.label,value:e.id})})),showSelectAnOption:!0,selectAnOptionText:"Add filter"}),r&&r.category===e.id&&((l=r).type===p.d.String?V("div",{className:"select-filter"},V(P,{options:Object(D.b)(t,l.value,l.commaSeparated).map((function(e){return{value:e,label:e}})),showSelectAnOption:!0,selectAnOptionText:"Select a value",onChange:function(e){var a=e.value;n({mode:l.mode,type:l.type,propertyName:l.value,label:l.label,value:a}),o(null)}})):l.type===p.d.Boolean?V("div",{className:"radio-filter"},V(O,{id:"yes-radio",className:"yes-radio",name:"yes-no-radio",disabled:!1,checked:!1,onChange:function(){o(null),n({mode:l.mode,type:l.type,propertyName:l.value,label:l.label,value:!0})}},"YES"),V(O,{id:"no-radio",className:"no-radio",name:"yes-no-radio",checked:!1,disabled:!1,onChange:function(){o(null),n({mode:l.mode,type:l.type,propertyName:l.value,label:l.label,value:!1})}},"NO")):void 0),V("div",{className:"filters-applied"},a&&a.filter((function(e){return i.includes(e.propertyName)})).map((function(e){return V(R,{key:"pill-".concat(e.propertyName),filter:e,linkMode:!1})})))))})))},B=Object(c.a)().actions,J=Object(s.b)((function(e){return{filters:Object(c.e)(e),projects:Object(c.d)(e)}}),{addFilter:B.addFilter})(M),Y=t("7IGd"),Q=(t("YFBT"),r.a.createElement),U=function(e){var a=e.project,t=e.highlightedCategory;return Q("div",{className:"c-project-card",onClick:function(){return d.a.push("/project?id=".concat(a.projectNumber))}},Q(Y.a,{project:a,highlightedCategory:t,cardMode:!0}))},z=[{value:p.e.ALPHABETICAL_OPTION,label:"alphabetical"},{value:p.e.ECOLOGICAL_OPTION,label:"ecological"},{value:p.e.START_DATE_OPTION,label:"start date"},{value:p.e.END_DATE_OPTION,label:"end date"}],G=(t("Brpf"),r.a.createElement);var H=function(e){var a=e.projects,t=e.sort,n=e.country,l=e.filters,r=e.initialQuery,o=e.updateData,s=e.countries,c=e.updateCountry,d=e.updateSort,b=e.loadInitialState,v=r.country,h=r.sort,N=r.filters,g=Object(u.useRouter)();return Object(i.useEffect)((function(){v||h||N?b({country:v,sort:h,filters:JSON.parse(N)}):(c(p.a.ALL),d(p.e.ALPHABETICAL_OPTION)),Object(f.g)().then((function(e){o(e.data)})).catch((function(e){return console.error(e)}))}),[]),Object(i.useEffect)((function(){var e="/?sort=".concat(encodeURIComponent(t),"&country=").concat(encodeURIComponent(n),"&filters=").concat(encodeURIComponent(JSON.stringify(l)));g.push(e,void 0,{shallow:!0})}),[t,n,l]),G("div",{className:"home-layout"},G("div",{className:"navigation-bar"},G("button",{type:"button",className:"btn btn-outline-secondary"},"Methodology"),G("button",{type:"button",className:"btn btn-primary"},"Submit Project Information")),G("div",{className:"main-container"},G("div",{className:"top-container"},G("div",{className:"column col-sm-10 col-md-8 col-xl-6 col-offset-1"},G("div",{className:"title"},G("h2",null,"MONGABAY'S"),G("h1",null,"REFORESTATION DIRECTORY")),G("hr",null),G("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam feugiat, ligula et dignissim aliquet, mauris nisl tincidunt velit, sit amet posuere dolor odio quis diam. Phasellus leo magna, facilisis eget eleifend vitae, aliquam non massa. Mauris quis vestibulum erat. Integer pellentesque elit id neque ornare accumsan. Maecenas a consectetur ligula. Etiam rhoncus lacinia urna eu bibendum. Aliquam scelerisque ut tellus vel vulputate. Vivamus arcu risus, maximus eu tellus et, pretium blandit quam. Fusce in egestas odio. In rhoncus aliquet ex. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Pellentesque facilisis sed neque sed ultrices. Cras at vestibulum diam. Donec et lacus et orci dignissim dapibus ut in odio. Etiam laoreet sapien in varius dapibus. Aliquam erat volutpat."))),G("div",{className:"data-container"},G("div",{className:"left-container"},G("div",{className:"intro-container -border-top"},G("h3",null,"A Transparency Index."),G("div",{className:"legend-text"},G("p",null,"The fingerprint of each project results from five lines representing the proportion of reported indicators within five categories:"," ",G("span",{className:"-bold"},"context"),", ",G("span",{className:"-bold"},"ecological"),","," ",G("span",{className:"-bold"},"economic"),", ",G("span",{className:"-bold"},"social"),", and",G("span",{className:"-bold"},"institutional"),"."),G("p",{className:"-italic"},"Finalized projects represented in gray."))),G("div",{className:"intro-filters-container -border-top"},G("h3",null,"Find projects of Interest."),G("p",null,"Find Projects of Interest. In this paragraph the user learns about priorities and filters. In this paragraph the user learns about priorities and filters. In this paragraph the user learns about priorities and filters. In this paragraph the user learns about priorities and filters. In this paragraph the user learns."),G(J,null))),G("div",{className:"right-container"},G("div",{className:"projects-list"},G("div",{className:"list-header"},G("div",{className:"sort-container"},G("label",{htmlFor:"sort-select"},"Sort by category"),G(P,{id:"sort-select",options:z,defaultValue:t,value:t,onChange:function(e){var a=e.value;d(a)}})),G("div",{className:"country-container"},G("label",{htmlFor:"country-select"},"Country: "),G(P,{id:"country-select",options:s.map((function(e){return{value:e,label:e}})),onChange:function(e){var a=e.value;return c(a)},defaultValue:n,value:n}))),G("div",{className:"row justify-content-between"},a&&a.map((function(e){return G(m.a.div,{key:e.projectNumber,className:"column",initial:{opacity:0},animate:{opacity:1},transition:{delay:.2}},G(U,{project:e,highlightedCategory:null}))}))))))))},X=Object(c.a)().actions,K=Object(s.b)((function(e){return{projects:Object(c.d)(e),countries:Object(c.b)(e),sort:e.projects.sort,country:e.projects.country,filters:e.projects.filters}}),{addFilter:X.addFilter,removeFilter:X.removeFilter,updateData:X.updateData,updateCountry:X.updateCountry,updateSort:X.updateSort,updateFilters:X.updateFilters,loadInitialState:X.loadInitialState})(H),W=r.a.createElement;function Z(e){return W(o.a,{className:"p-home"},W(K,e))}Z.getInitialProps=function(e){return l.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return a.abrupt("return",{initialQuery:e.query});case 1:case"end":return a.stop()}}),null,null,null,Promise)};a.default=Z},vlRD:function(e,a,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return t("RNiq")}])}},[["vlRD",1,2,6,5,0,3,7,4]]]);