(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{2137:function(e,t,a){"use strict";function n(e,t,a,n,r,o,l){try{var i=e[o](l),c=i.value}catch(s){return void a(s)}i.done?t(c):Promise.resolve(c).then(n,r)}function r(e){return function(){var t=this,a=arguments;return new Promise((function(r,o){var l=e.apply(t,a);function i(e){n(l,r,o,i,c,"next",e)}function c(e){n(l,r,o,i,c,"throw",e)}i(void 0)}))}}a.d(t,{Z:function(){return r}})},3581:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return ce}});var n=a(7757),r=a.n(n),o=a(2137),l=a(7294),i=a.n(l),c=a(8276),s=a(276),u=a(236),d=a(4643),m=a(6156),p=a(1163),f=a(421),v=a(4184),b=a.n(v),h=a(6641),y=a(1098),N=a(18),g=a(5697),j=a.n(g),C=i().createElement,O=function(e,t){var a=e.id,n=e.name,r=e.disabled,o=e.checked,l=e.onChange,i=e.children,c=e.className;return C("div",{ref:t,className:["custom-control","custom-radio","c-radio"].concat((0,N.Z)(c?[c]:[])).join(" ")},C("input",{type:"radio",className:"custom-control-input",disabled:r,id:a,name:n,checked:o,onChange:l}),C("label",{className:"custom-control-label",htmlFor:a},i))},w=(0,l.forwardRef)(O);w.propTypes={id:j().string.isRequired,name:j().string.isRequired,disabled:j().bool,checked:j().bool,onChange:j().func,children:j().node.isRequired,className:j().string},w.defaultProps={disabled:!1,checked:!1,onChange:null,className:null};var P=w,k=i().createElement,E=function(e){var t=e.id,a=e.name,n=e.disabled,r=e.checked,o=e.onChange,l=e.children,i=e.className;return k("div",{className:["custom-control","custom-checkbox","c-checkbox"].concat((0,N.Z)(i?[i]:[])).join(" ")},k("input",{type:"checkbox",className:"custom-control-input",disabled:n,id:t,name:a,checked:r,onChange:o}),k("label",{className:"custom-control-label",htmlFor:t},l))};E.defaultProps={disabled:!1,checked:!1,onChange:null,className:null};var x=i().createElement,S=function(e){var t=e.id,a=e.options,n=e.defaultValue,r=e.value,o=e.onChange,i=e.disabled,c=e["aria-label"],s=e.className,u=e.required,d=e.showSelectAnOption,m=e.selectAnOptionText,p=(0,l.useCallback)((function(e){var t=a.find((function(t){return t.value===e.target.selectedOptions[0].value}));o(t)}),[a,o]);return x("select",{id:t,className:["c-select","custom-select"].concat((0,N.Z)(s?[s]:[])).join(" "),disabled:i,"aria-label":c,defaultValue:n,value:r,onChange:p,required:u},d&&x("option",{disabled:!0,selected:!0},m),a.map((function(e){return x("option",{key:e.value,value:e.value,disabled:e.disabled},e.label)})))};S.defaultProps={defaultValue:void 0,value:void 0,onChange:function(){return null},disabled:!1,"aria-label":null,className:void 0,required:!1,showSelectAnOption:!1,selectAnOptionText:"-- select an option --"};var Z=S,F=i().createElement,T=function(e){var t=e.id,a=e.defaultValue,n=e.value,r=e.min,o=e.max,l=e["aria-label"],i=e.className,c=e.required,s=e.disabled,u=e.onChange;return F("input",{type:"date",id:t,className:b()("c-datepicker","form-control",(0,m.Z)({},i,!!i)),defaultValue:a,value:n,min:r,max:o,pattern:"\\d{4}-\\d{2}-\\d{2}","aria-label":l,required:c,disabled:s,onChange:u})};T.defaultProps={className:void 0,defaultValue:void 0,value:void 0,min:void 0,max:void 0,"aria-label":void 0,required:!1,disabled:!1,onChange:function(){return null}};var A=i().createElement,_=function(e){var t=e.id,a=e.defaultValue,n=e.value,r=e.min,o=e.max,l=e.step,i=e["aria-label"],c=e.className,s=e.required,u=e.disabled,d=e.marks,p=e.onChange;return A("div",{className:"c-range"},A("input",{type:"range",id:t,className:b()("custom-range",(0,m.Z)({},c,!!c)),defaultValue:a,value:n,min:r,max:o,step:l,"aria-label":i,required:s,disabled:u,onChange:p}),d&&A("div",{className:"marks"},d.map((function(e){return A("span",{key:e,"data-label":e})}))))};_.defaultProps={className:void 0,defaultValue:void 0,value:void 0,min:void 0,max:void 0,step:void 0,"aria-label":void 0,required:!1,disabled:!1,marks:void 0,onChange:function(){return null}};var I=_,R=a(4208),V=(0,u.ZP)().actions,D=(0,s.$j)(null,{removeFilter:V.removeFilter})(R.Z),q=a(2289),W=a(2894),L=a(9064),M=i().createElement;function K(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function U(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?K(Object(a),!0).forEach((function(t){(0,m.Z)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):K(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var Y=function(e){var t=e.filters,a=e.projects,n=e.categoriesConfig,r=e.addFilter,o=(0,l.useState)(null),i=o[0],c=o[1],s=(0,l.useState)(2012),u=s[0],d=s[1],m=(0,l.useState)(0),p=m[0],f=m[1];return M("div",{className:"c-catalogue-filter"},y.aA.map((function(e){var o=e.fields.map((function(e){return e.id}));return M("div",{key:"category-".concat(e.id),className:"category-container"},M("div",{className:"title"},M(q.Z,{text:(0,L.b)(e.id,n)}),M("div",{className:"-bold category-label"}," ","".concat(e.label,":"))),M("div",{className:"filters-section"},M(Z,{id:"select-filter-".concat(e.id),className:"filter-selector",defaultValue:null,onChange:function(t){var a=t.value,n=y.aA.find((function(t){return t.id===e.id})).fields.find((function(e){return e.id===a}));c(U(U({},n),{},{category:e.id,value:a}))},options:e.fields.filter((function(e){return!e.hidden})).map((function(e){return U(U({},e),{},{label:e.label,value:e.id})})),showSelectAnOption:!0,selectAnOptionText:"Add filter"}),i&&i.category===e.id&&function(e){return e.type===h.Kp.String?M("div",{className:"select-filter"},M(Z,{options:(0,W.ds)(a,e.value,e.commaSeparated).map((function(e){return{value:e,label:e}})),showSelectAnOption:!0,selectAnOptionText:"Select a value",onChange:function(t){var a=t.value;r({mode:e.mode,type:e.type,propertyName:e.value,label:e.label,value:a}),c(null)}})):e.type===h.Kp.Boolean?M("div",{className:"radio-filter"},M(P,{id:"yes-radio",className:"yes-radio",name:"yes-no-radio",disabled:!1,checked:!1,onChange:function(){c(null),r({mode:e.mode,type:e.type,propertyName:e.value,label:e.label,value:!0})}},"YES"),M(P,{id:"no-radio",className:"no-radio",name:"yes-no-radio",checked:!1,disabled:!1,onChange:function(){c(null),r({mode:e.mode,type:e.type,propertyName:e.value,label:e.label,value:!1})}},"NO")):e.type===h.Kp.Year?M("div",{className:"year-filter"},M(I,{min:2e3,max:2021,defaultValue:2012,onChange:function(e){var t=e.target.value;return d(t)}}),M("span",{className:"year-value"},u),M("button",{className:"btn btn-secondary",onClick:function(){c(null),r({mode:e.mode,type:e.type,propertyName:e.value,label:e.label,value:u})}},"Apply")):e.type===h.Kp.Number?M("div",{className:"number-filter"},M("input",{type:"number",step:"100",onChange:function(e){var t=e.target.value;return f(Number(t))},defaultValue:0}),M("button",{className:"btn btn-secondary",onClick:function(){c(null),r({mode:e.mode,type:e.type,propertyName:e.value,label:e.label,value:p})}},"Apply")):void 0}(i),M("div",{className:"filters-applied"},t&&t.filter((function(e){return o.includes(e.propertyName)})).map((function(e){return M(D,{key:"pill-".concat(e.propertyName),filter:e,linkMode:!1})})))))})))},Q=(0,u.ZP)().actions,$=(0,s.$j)((function(e){return{filters:(0,u.mj)(e),projects:(0,u.FN)(e),categoriesConfig:(0,d.us)(e)}}),{addFilter:Q.addFilter})(Y),B=a(1165),J=i().createElement,X=function(e){var t=e.project,a=e.highlightedCategory,n=e.openInNewWindow;return J("div",{className:"c-project-card",onClick:function(){return n?window.open("/project?id=".concat(t.projectNumber),"_blank"):p.default.push("/project?id=".concat(t.projectNumber))}},J(B.Z,{project:t,highlightedCategory:a,cardMode:!0}))},z=a(1838),G=a(9669),H=a.n(G),ee=a(6362),te=i().createElement;var ae=function(e){var t,a=e.projects,n=e.sort,r=e.country,o=e.filters,i=e.initialQuery,c=e.updateData,s=e.setConfig,u=e.countries,d=e.updateCountry,v=e.updateSort,N=e.loadInitialState,g=e.projectsPage,j=e.totalNumberOfProjects,C=e.embed,O=e.embedType,w=i.country,P=i.sort,k=i.filters,E=i.embed,x=i.embedType,S=i.id,F=(0,p.useRouter)();(0,l.useEffect)((function(){w||P||k?N({country:w,sort:P,filters:JSON.parse(k),embed:!0===E||"true"===E,embedType:x,id:S}):(d(h.yn.ALL),v(y.aP[0].value)),H().get("/data/config.json").then((function(e){return e})).then((function(e){return s(e.data)})).catch((function(e){return console.error(e)})),(0,y.m6)().then((function(e){return c(e.data)})).catch((function(e){return console.error(e)}))}),[]),(0,l.useEffect)((function(){var e="/?sort=".concat(encodeURIComponent(n),"&country=").concat(encodeURIComponent(r),"&filters=").concat(encodeURIComponent(JSON.stringify(o)),"&embed=").concat(C,"&embedType=").concat(O,"&id=").concat(S);F.push(e,void 0,{shallow:!0})}),[n,r,o,C,O,S]);var T=a.length,A=Math.round(100*T/j),_=C&&O===h.v_.Filters,I=C&&O===h.v_.ProjectList,R=C&&O===h.v_.ProjectCard,V=a.find((function(e){return"".concat(e.projectNumber)===S}));return te("div",{className:"home-layout"},!C&&te(ee.Z,null),te("div",{className:"main-container"},!C&&te("div",{className:"top-container"},te("div",{className:"column col-sm-10 col-md-8 col-xl-6 col-offset-1"},te("div",{className:"title"},te("h2",null,"MONGABAY"),te("h1",null,"REFORESTATION DIRECTORY")),te("p",null,null===g||void 0===g?void 0:g.descriptionText))),R&&V&&te("div",{className:"embed-project-card"},te(X,{project:V,openInNewWindow:!0})),te("div",{className:"data-container"},te("div",{className:b()({"left-container":!0,"-hidden":I,"-no-width-restriction":_})},!C&&te("div",{className:"intro-container"},te("h3",null,"A Transparency Index."),te("div",{className:"legend-chart"},te(z.Z,{categoriesPercentages:(t={},(0,m.Z)(t,h.WD.Context,70),(0,m.Z)(t,h.WD.Ecological,70),(0,m.Z)(t,h.WD.Economic,70),(0,m.Z)(t,h.WD.Social,70),(0,m.Z)(t,h.WD.Institutional,70),t),highlightedCategory:n,legendMode:!0})),te("div",{className:"legend-text"},te("p",null,"The fingerprint of each project results from five lines representing the proportion of reported indicators within five categories:"," ",te("span",{className:"-bold"},"context"),","," ",te("span",{className:"-bold"},"ecological"),","," ",te("span",{className:"-bold"},"economic"),", ",te("span",{className:"-bold"},"social"),", and",te("span",{className:"-bold"}," institutional"),"."),te("p",{className:"-italic"},"Finalized projects represented in gray."))),(!C||_)&&te("div",{className:"intro-filters-container"},te("h3",null,null===g||void 0===g?void 0:g.findProjectsOfInterestTitle),te("p",null,null===g||void 0===g?void 0:g.fintProjectsOfInterestDescription),te("p",{className:"-bold"},"".concat(T," projects (").concat(A,"%) meet your filtering criteria")),te($,null))),_&&te("div",{className:"embed-filters-button-container"},te("a",{className:"btn btn-primary",href:"".concat(window.location).replace("embed=true","embed=false"),target:"_blank",rel:"noreferrer"},"View on the Reforestation Catalogue")),(!C||I)&&te("div",{className:b()({"right-container":!0,"-fullwidth":C&&O===h.v_.ProjectList})},te("div",{className:"projects-list"},!C&&te("div",{className:"list-header"},te("div",{className:"sort-container"},te("label",{htmlFor:"sort-select"},"Sort by category"),te(Z,{id:"sort-select",options:y.aP,defaultValue:n,value:n,onChange:function(e){var t=e.value;v(t)}})),te("div",{className:"country-container"},te("label",{htmlFor:"country-select"},"Country: "),te(Z,{id:"country-select",options:u.map((function(e){return{value:e,label:e}})),onChange:function(e){var t=e.value;return d(t)},defaultValue:r,value:r}))),te("div",{className:"project-cards-container"},te("div",{className:"row justify-content-between"},a&&a.map((function(e){return te(f.E.div,{key:e.projectNumber,className:"column",initial:{opacity:0},animate:{opacity:1},transition:{delay:.2}},te(X,{project:e,highlightedCategory:n,openInNewWindow:I}))})))))))))},ne=(0,u.ZP)().actions,re=(0,d.ZP)().actions,oe=(0,s.$j)((function(e){return{projects:(0,u.FN)(e),countries:(0,u.U8)(e),sort:(0,u.sI)(e),embed:(0,u.RH)(e),embedType:(0,u.P0)(e),country:(0,u.C2)(e),filters:(0,u.mj)(e),totalNumberOfProjects:(0,u.LK)(e),projectsPage:(0,d.QL)(e)}}),{addFilter:ne.addFilter,removeFilter:ne.removeFilter,updateData:ne.updateData,updateCountry:ne.updateCountry,updateSort:ne.updateSort,updateFilters:ne.updateFilters,loadInitialState:ne.loadInitialState,setConfig:re.setConfig})(ae),le=i().createElement;function ie(e){return le(c.Z,{className:"p-home",meta:{title:"Mongabay Reforestation Catalogue",description:"Welcome to Mongabay\u2019s directory of reforestation and tree-planting projects.",thumbnailURL:"https://reforestation.app/images/mongabay-meta-image.png"}},le(oe,e))}ie.getInitialProps=function(){var e=(0,o.Z)(r().mark((function e(t){return r().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",{initialQuery:t.query});case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();var ce=ie},8581:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return a(3581)}])},1163:function(e,t,a){e.exports=a(2441)}},function(e){e.O(0,[774,900,885,351,601,235,329,355,89],(function(){return t=8581,e(e.s=t);var t}));var t=e.O();_N_E=t}]);