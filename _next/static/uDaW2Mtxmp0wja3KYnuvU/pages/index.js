(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{RNiq:function(e,a,t){"use strict";t.r(a);var n=t("o0o1"),l=t.n(n),r=t("q1tI"),o=t.n(r),i=t("j8IJ"),c=t("/MKj"),s=t("z2oR"),u=t("DlJ3"),d=t("nOHt"),p=t.n(d),m=t("ATyU"),f=t("J/v5"),v=t("rePB"),b=t("Ci9a"),h=t("KQm4"),g=t("17x9"),N=t.n(g),y=(t("90j9"),o.a.createElement),j=Object(r.forwardRef)((function(e,a){var t=e.id,n=e.name,l=e.disabled,r=e.checked,o=e.onChange,i=e.children,c=e.className;return y("div",{ref:a,className:["custom-control","custom-radio","c-radio"].concat(Object(h.a)(c?[c]:[])).join(" ")},y("input",{type:"radio",className:"custom-control-input",disabled:l,id:t,name:n,checked:r,onChange:o}),y("label",{className:"custom-control-label",htmlFor:t},i))}));j.propTypes={id:N.a.string.isRequired,name:N.a.string.isRequired,disabled:N.a.bool,checked:N.a.bool,onChange:N.a.func,children:N.a.node.isRequired,className:N.a.string},j.defaultProps={disabled:!1,checked:!1,onChange:null,className:null};var O=j,C=(t("Wfic"),o.a.createElement),k=function(e){var a=e.id,t=e.name,n=e.disabled,l=e.checked,r=e.onChange,o=e.children,i=e.className;return C("div",{className:["custom-control","custom-checkbox","c-checkbox"].concat(Object(h.a)(i?[i]:[])).join(" ")},C("input",{type:"checkbox",className:"custom-control-input",disabled:n,id:a,name:t,checked:l,onChange:r}),C("label",{className:"custom-control-label",htmlFor:a},o))};k.defaultProps={disabled:!1,checked:!1,onChange:null,className:null};t("wTXl");var w=o.a.createElement,S=function(e){var a=e.id,t=e.options,n=e.defaultValue,l=e.value,o=e.onChange,i=e.disabled,c=e["aria-label"],s=e.className,u=e.required,d=e.showSelectAnOption,p=e.selectAnOptionText,m=Object(r.useCallback)((function(e){var a=t.find((function(a){return a.value===e.target.selectedOptions[0].value}));o(a)}),[t,o]);return w("select",{id:a,className:["c-select","custom-select"].concat(Object(h.a)(s?[s]:[])).join(" "),disabled:i,"aria-label":c,defaultValue:n,value:l,onChange:m,required:u},d&&w("option",{disabled:!0,selected:!0},p),t.map((function(e){return w("option",{key:e.value,value:e.value,disabled:e.disabled},e.label)})))};S.defaultProps={defaultValue:void 0,value:void 0,onChange:function(){return null},disabled:!1,"aria-label":null,className:void 0,required:!1,showSelectAnOption:!1,selectAnOptionText:"-- select an option --"};var P=S,x=t("TSYQ"),E=t.n(x),F=o.a.createElement,R=function(e){var a=e.id,t=e.defaultValue,n=e.value,l=e.min,r=e.max,o=e["aria-label"],i=e.className,c=e.required,s=e.disabled,u=e.onChange;return F("input",{type:"date",id:a,className:E()("c-datepicker","form-control",Object(v.a)({},i,!!i)),defaultValue:t,value:n,min:l,max:r,pattern:"\\d{4}-\\d{2}-\\d{2}","aria-label":o,required:c,disabled:s,onChange:u})};R.defaultProps={className:void 0,defaultValue:void 0,value:void 0,min:void 0,max:void 0,"aria-label":void 0,required:!1,disabled:!1,onChange:function(){return null}};t("DMuj");var T=o.a.createElement,q=function(e){var a=e.id,t=e.defaultValue,n=e.value,l=e.min,r=e.max,o=e.step,i=e["aria-label"],c=e.className,s=e.required,u=e.disabled,d=e.marks,p=e.onChange;return T("div",{className:"c-range"},T("input",{type:"range",id:a,className:E()("custom-range",Object(v.a)({},c,!!c)),defaultValue:t,value:n,min:l,max:r,step:o,"aria-label":i,required:s,disabled:u,onChange:p}),d&&T("div",{className:"marks"},d.map((function(e){return T("span",{key:e,"data-label":e})}))))};q.defaultProps={className:void 0,defaultValue:void 0,value:void 0,min:void 0,max:void 0,step:void 0,"aria-label":void 0,required:!1,disabled:!1,marks:void 0,onChange:function(){return null}};var A=t("nS4R"),D=Object(s.a)().actions,I=Object(c.b)(null,{removeFilter:D.removeFilter})(A.a),V=t("pStZ"),J=t("ObOl"),_=t("DFbN"),B=(t("zdg9"),o.a.createElement);function M(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function Y(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?M(Object(t),!0).forEach((function(a){Object(v.a)(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):M(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}var Q=function(e){var a=e.filters,t=e.projects,n=e.categoriesConfig,l=e.addFilter,o=Object(r.useState)(null),i=o[0],c=o[1];return B("div",{className:"c-catalogue-filter"},b.a.map((function(e){var r,o=e.fields.map((function(e){return e.id}));return B("div",{key:"category-".concat(e.id),className:"category-container"},B("div",{className:"title"},B(V.a,{text:Object(_.a)(e.id,n)}),B("div",{className:"-bold category-label"}," ","".concat(e.label,":"))),B("div",{className:"filters-section"},B(P,{id:"select-filter-".concat(e.id),className:"filter-selector",defaultValue:null,onChange:function(a){var t=a.value,n=b.a.find((function(a){return a.id===e.id})).fields.find((function(e){return e.id===t}));c(Y({},n,{category:e.id,value:t}))},options:e.fields.filter((function(e){return!e.hidden})).map((function(e){return Y({},e,{label:e.label,value:e.id})})),showSelectAnOption:!0,selectAnOptionText:"Add filter"}),i&&i.category===e.id&&((r=i).type===f.d.String?B("div",{className:"select-filter"},B(P,{options:Object(J.b)(t,r.value,r.commaSeparated).map((function(e){return{value:e,label:e}})),showSelectAnOption:!0,selectAnOptionText:"Select a value",onChange:function(e){var a=e.value;l({mode:r.mode,type:r.type,propertyName:r.value,label:r.label,value:a}),c(null)}})):r.type===f.d.Boolean?B("div",{className:"radio-filter"},B(O,{id:"yes-radio",className:"yes-radio",name:"yes-no-radio",disabled:!1,checked:!1,onChange:function(){c(null),l({mode:r.mode,type:r.type,propertyName:r.value,label:r.label,value:!0})}},"YES"),B(O,{id:"no-radio",className:"no-radio",name:"yes-no-radio",checked:!1,disabled:!1,onChange:function(){c(null),l({mode:r.mode,type:r.type,propertyName:r.value,label:r.label,value:!1})}},"NO")):void 0),B("div",{className:"filters-applied"},a&&a.filter((function(e){return o.includes(e.propertyName)})).map((function(e){return B(I,{key:"pill-".concat(e.propertyName),filter:e,linkMode:!1})})))))})))},U=Object(s.a)().actions,z=Object(c.b)((function(e){return{filters:Object(s.e)(e),projects:Object(s.d)(e),categoriesConfig:Object(u.b)(e)}}),{addFilter:U.addFilter})(Q),X=t("7IGd"),G=(t("YFBT"),o.a.createElement),K=function(e){var a=e.project,t=e.highlightedCategory;return G("div",{className:"c-project-card",onClick:function(){return p.a.push("/project?id=".concat(a.projectNumber))}},G(X.a,{project:a,highlightedCategory:t,cardMode:!0}))},L=t("vDqi"),H=t.n(L),W=function(){return H.a.get("/data/config.json").then((function(e){return e}))},Z=(t("Brpf"),t("A6sl")),$=o.a.createElement;var ee=function(e){var a=e.projects,t=e.sort,n=e.country,l=e.filters,o=e.initialQuery,i=e.updateData,c=e.setConfig,s=e.countries,u=e.updateCountry,p=e.updateSort,v=e.loadInitialState,h=e.projectsPage,g=o.country,N=o.sort,y=o.filters,j=Object(d.useRouter)();return Object(r.useEffect)((function(){g||N||y?v({country:g,sort:N,filters:JSON.parse(y)}):(u(f.a.ALL),p(b.g[0].value)),W().then((function(e){return c(e.data)})).catch((function(e){return console.error(e)})),Object(b.h)().then((function(e){return i(e.data)})).catch((function(e){return console.error(e)}))}),[]),Object(r.useEffect)((function(){var e="/?sort=".concat(encodeURIComponent(t),"&country=").concat(encodeURIComponent(n),"&filters=").concat(encodeURIComponent(JSON.stringify(l)));j.push(e,void 0,{shallow:!0})}),[t,n,l]),$("div",{className:"home-layout"},$(Z.a,null),$("div",{className:"main-container"},$("div",{className:"top-container"},$("div",{className:"column col-sm-10 col-md-8 col-xl-6 col-offset-1"},$("div",{className:"title"},$("h2",null,"MONGABAY'S"),$("h1",null,"REFORESTATION DIRECTORY")),$("hr",null),$("p",null,null===h||void 0===h?void 0:h.descriptionText))),$("div",{className:"data-container"},$("div",{className:"left-container"},$("div",{className:"intro-container"},$("h3",null,"A Transparency Index."),$("div",{className:"legend-text"},$("p",null,"The fingerprint of each project results from five lines representing the proportion of reported indicators within five categories:"," ",$("span",{className:"-bold"},"context"),", ",$("span",{className:"-bold"},"ecological"),","," ",$("span",{className:"-bold"},"economic"),", ",$("span",{className:"-bold"},"social"),", and",$("span",{className:"-bold"}," institutional"),"."),$("p",{className:"-italic"},"Finalized projects represented in gray."))),$("div",{className:"intro-filters-container"},$("h3",null,null===h||void 0===h?void 0:h.findProjectsOfInterestTitle),$("p",null,null===h||void 0===h?void 0:h.fintProjectsOfInterestDescription),$(z,null))),$("div",{className:"right-container"},$("div",{className:"projects-list"},$("div",{className:"list-header"},$("div",{className:"sort-container"},$("label",{htmlFor:"sort-select"},"Sort by category"),$(P,{id:"sort-select",options:b.g,defaultValue:t,value:t,onChange:function(e){var a=e.value;p(a)}})),$("div",{className:"country-container"},$("label",{htmlFor:"country-select"},"Country: "),$(P,{id:"country-select",options:s.map((function(e){return{value:e,label:e}})),onChange:function(e){var a=e.value;return u(a)},defaultValue:n,value:n}))),$("div",{className:"row justify-content-between"},a&&a.map((function(e){return $(m.a.div,{key:e.projectNumber,className:"column",initial:{opacity:0},animate:{opacity:1},transition:{delay:.2}},$(K,{project:e,highlightedCategory:t}))}))))))))},ae=Object(s.a)().actions,te=Object(u.a)().actions,ne=Object(c.b)((function(e){return{projects:Object(s.d)(e),countries:Object(s.b)(e),sort:e.projects.sort,country:e.projects.country,filters:e.projects.filters,projectsPage:Object(u.c)(e)}}),{addFilter:ae.addFilter,removeFilter:ae.removeFilter,updateData:ae.updateData,updateCountry:ae.updateCountry,updateSort:ae.updateSort,updateFilters:ae.updateFilters,loadInitialState:ae.loadInitialState,setConfig:te.setConfig})(ee),le=o.a.createElement;function re(e){return le(i.a,{className:"p-home"},le(ne,e))}re.getInitialProps=function(e){return l.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return a.abrupt("return",{initialQuery:e.query});case 1:case"end":return a.stop()}}),null,null,null,Promise)};a.default=re},vlRD:function(e,a,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return t("RNiq")}])}},[["vlRD",1,2,6,5,0,3,7,4]]]);