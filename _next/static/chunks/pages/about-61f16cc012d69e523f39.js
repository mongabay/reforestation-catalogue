(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[521],{2137:function(e,t,i){"use strict";function s(e,t,i,s,o,a,n){try{var r=e[a](n),l=r.value}catch(u){return void i(u)}r.done?t(l):Promise.resolve(l).then(s,o)}function o(e){return function(){var t=this,i=arguments;return new Promise((function(o,a){var n=e.apply(t,i);function r(e){s(n,o,a,r,l,"next",e)}function l(e){s(n,o,a,r,l,"throw",e)}r(void 0)}))}}i.d(t,{Z:function(){return o}})},6700:function(e,t,i){var s={"./af":2786,"./af.js":2786,"./ar":867,"./ar-dz":4130,"./ar-dz.js":4130,"./ar-kw":6135,"./ar-kw.js":6135,"./ar-ly":6440,"./ar-ly.js":6440,"./ar-ma":7702,"./ar-ma.js":7702,"./ar-sa":6040,"./ar-sa.js":6040,"./ar-tn":7100,"./ar-tn.js":7100,"./ar.js":867,"./az":1083,"./az.js":1083,"./be":9808,"./be.js":9808,"./bg":8338,"./bg.js":8338,"./bm":7438,"./bm.js":7438,"./bn":8905,"./bn-bd":6225,"./bn-bd.js":6225,"./bn.js":8905,"./bo":1560,"./bo.js":1560,"./br":1278,"./br.js":1278,"./bs":622,"./bs.js":622,"./ca":2468,"./ca.js":2468,"./cs":5822,"./cs.js":5822,"./cv":877,"./cv.js":877,"./cy":7373,"./cy.js":7373,"./da":4780,"./da.js":4780,"./de":9740,"./de-at":217,"./de-at.js":217,"./de-ch":894,"./de-ch.js":894,"./de.js":9740,"./dv":5300,"./dv.js":5300,"./el":837,"./el.js":837,"./en-au":8348,"./en-au.js":8348,"./en-ca":7925,"./en-ca.js":7925,"./en-gb":2243,"./en-gb.js":2243,"./en-ie":6436,"./en-ie.js":6436,"./en-il":7207,"./en-il.js":7207,"./en-in":4175,"./en-in.js":4175,"./en-nz":6319,"./en-nz.js":6319,"./en-sg":1662,"./en-sg.js":1662,"./eo":2915,"./eo.js":2915,"./es":7093,"./es-do":5251,"./es-do.js":5251,"./es-mx":6112,"./es-mx.js":6112,"./es-us":1146,"./es-us.js":1146,"./es.js":7093,"./et":5603,"./et.js":5603,"./eu":7763,"./eu.js":7763,"./fa":6959,"./fa.js":6959,"./fi":1897,"./fi.js":1897,"./fil":2549,"./fil.js":2549,"./fo":4694,"./fo.js":4694,"./fr":4470,"./fr-ca":3049,"./fr-ca.js":3049,"./fr-ch":2330,"./fr-ch.js":2330,"./fr.js":4470,"./fy":5044,"./fy.js":5044,"./ga":9295,"./ga.js":9295,"./gd":2101,"./gd.js":2101,"./gl":8794,"./gl.js":8794,"./gom-deva":7884,"./gom-deva.js":7884,"./gom-latn":7149,"./gom-latn.js":7149,"./gu":5349,"./gu.js":5349,"./he":4206,"./he.js":4206,"./hi":94,"./hi.js":94,"./hr":316,"./hr.js":316,"./hu":2138,"./hu.js":2138,"./hy-am":1423,"./hy-am.js":1423,"./id":9218,"./id.js":9218,"./is":135,"./is.js":135,"./it":626,"./it-ch":150,"./it-ch.js":150,"./it.js":626,"./ja":9183,"./ja.js":9183,"./jv":4286,"./jv.js":4286,"./ka":2105,"./ka.js":2105,"./kk":7772,"./kk.js":7772,"./km":8758,"./km.js":8758,"./kn":9282,"./kn.js":9282,"./ko":3730,"./ko.js":3730,"./ku":1408,"./ku.js":1408,"./ky":3291,"./ky.js":3291,"./lb":6841,"./lb.js":6841,"./lo":5466,"./lo.js":5466,"./lt":7010,"./lt.js":7010,"./lv":7595,"./lv.js":7595,"./me":9861,"./me.js":9861,"./mi":5493,"./mi.js":5493,"./mk":5966,"./mk.js":5966,"./ml":7341,"./ml.js":7341,"./mn":5115,"./mn.js":5115,"./mr":370,"./mr.js":370,"./ms":9847,"./ms-my":1237,"./ms-my.js":1237,"./ms.js":9847,"./mt":2126,"./mt.js":2126,"./my":6165,"./my.js":6165,"./nb":4924,"./nb.js":4924,"./ne":6744,"./ne.js":6744,"./nl":3901,"./nl-be":9814,"./nl-be.js":9814,"./nl.js":3901,"./nn":3877,"./nn.js":3877,"./oc-lnc":2135,"./oc-lnc.js":2135,"./pa-in":5858,"./pa-in.js":5858,"./pl":4495,"./pl.js":4495,"./pt":9520,"./pt-br":7971,"./pt-br.js":7971,"./pt.js":9520,"./ro":6459,"./ro.js":6459,"./ru":238,"./ru.js":238,"./sd":950,"./sd.js":950,"./se":490,"./se.js":490,"./si":124,"./si.js":124,"./sk":4249,"./sk.js":4249,"./sl":4985,"./sl.js":4985,"./sq":1104,"./sq.js":1104,"./sr":9131,"./sr-cyrl":9915,"./sr-cyrl.js":9915,"./sr.js":9131,"./ss":5893,"./ss.js":5893,"./sv":8760,"./sv.js":8760,"./sw":1172,"./sw.js":1172,"./ta":7333,"./ta.js":7333,"./te":3110,"./te.js":3110,"./tet":2095,"./tet.js":2095,"./tg":7321,"./tg.js":7321,"./th":9041,"./th.js":9041,"./tk":9005,"./tk.js":9005,"./tl-ph":5768,"./tl-ph.js":5768,"./tlh":9444,"./tlh.js":9444,"./tr":2397,"./tr.js":2397,"./tzl":8254,"./tzl.js":8254,"./tzm":1106,"./tzm-latn":699,"./tzm-latn.js":699,"./tzm.js":1106,"./ug-cn":9288,"./ug-cn.js":9288,"./uk":7691,"./uk.js":7691,"./ur":3795,"./ur.js":3795,"./uz":6791,"./uz-latn":588,"./uz-latn.js":588,"./uz.js":6791,"./vi":9822,"./vi.js":9822,"./x-pseudo":4378,"./x-pseudo.js":4378,"./yo":5805,"./yo.js":5805,"./zh-cn":3839,"./zh-cn.js":3839,"./zh-hk":5726,"./zh-hk.js":5726,"./zh-mo":9807,"./zh-mo.js":9807,"./zh-tw":4152,"./zh-tw.js":4152};function o(e){var t=a(e);return i(t)}function a(e){if(!i.o(s,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return s[e]}o.keys=function(){return Object.keys(s)},o.resolve=a,e.exports=o,o.id=6700},6362:function(e,t,i){"use strict";i.d(t,{Z:function(){return c}});var s=i(276),o=i(4643),a=i(7294),n=i.n(a),r=i(421),l=i(1664),u=n().createElement,d=function(e){var t=e.hideAboutButton,i=e.submitProjectInformationURL;return u(r.E.div,{className:"c-header",initial:{opacity:0},animate:{opacity:1}},u(l.default,{href:"/"},u("a",null,u("img",{src:"/images/logo-gecko.png",alt:"Mongabay",className:"logo"}))),u("div",{className:"buttons"},!t&&u(l.default,{href:"about"},u("a",{className:"-secondary"},"About")),u(l.default,{href:"./#"},u("a",{className:"-primary",href:i,target:"_blank",rel:"noreferrer"},"Submit Project Information"))))},c=(0,s.$j)((function(e){return{submitProjectInformationURL:(0,o.RW)(e).submitProjectInformationURL}}),null)(d)},6170:function(e,t,i){"use strict";i.d(t,{Z:function(){return h}});var s=i(7294),o=i.n(s),a=i(4184),n=i.n(a),r=i(1214),l=i(9008),u=o().createElement,d=function(e){var t=e.title,i=e.description;return u(l.default,null,u("title",{key:"title"},t?"".concat(t," | Reforestation Catalogue"):"Reforestation Catalogue"),u("meta",{key:"description",name:"description",content:i||"Reforestation Catalogue."}))};d.defaultProps={title:null,description:null};var c=d,m=o().createElement,j=function(){return m("svg",{"aria-hidden":"true",style:{position:"absolute",width:0,height:0,overflow:"hidden"},version:"1.1",xmlns:"http://www.w3.org/2000/svg",xlink:"http://www.w3.org/1999/xlink"},m("defs",null,m("symbol",{id:"icon-close",viewBox:"0 0 9 9"},m("title",null,"Close"),m("path",{d:"M7.41.839l1.087 1.087-7.07 7.071L.338 7.91z"}),m("path",{d:"M8.498 7.91L7.41 8.998.339 1.927 1.427.839z"})),m("symbol",{id:"icon-bottom-arrow",viewBox:"0 0 15 15"},m("title",null,"Bottom arrow"),m("path",{strokeWidth:"2",d:"M3 5l4.5 5L12 5",fill:"none"})),m("symbol",{id:"icon-eye",viewBox:"0 0 22 15"},m("title",null,"Visible"),m("path",{d:"M11 0C6 0 1.73 3.11 0 7.5 1.73 11.89 6 15 11 15s9.27-3.11 11-7.5C20.27 3.11 16 0 11 0zm0 12.5c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"})),m("symbol",{id:"icon-slashed-eye",viewBox:"0 0 23 21"},m("title",null,"Hidden"),m("path",{d:"M22.763 9.992a18.948 18.948 0 0 0-3.133-3.619L8.367 17.637c.997.324 2.039.493 3.088.5 6.75 0 11.125-6.838 11.308-7.13a.955.955 0 0 0 0-1.015zM21.674.28a.955.955 0 0 0-1.349 0l-3.873 3.873a10.746 10.746 0 0 0-4.997-1.29C4.705 2.864.329 9.702.146 9.994a.955.955 0 0 0 0 1.015 19.027 19.027 0 0 0 4.638 4.813L2.19 18.416a.955.955 0 1 0 1.349 1.35L21.674 1.629a.955.955 0 0 0 0-1.35zM7.636 10.5a3.818 3.818 0 0 1 3.819-3.818 3.708 3.708 0 0 1 1.92.548l-5.19 5.19a3.717 3.717 0 0 1-.549-1.92z"})),m("symbol",{id:"icon-opacity",viewBox:"0 0 16 16"},m("title",null,"Opacity"),m("path",{d:"M7 0v15.876A8.001 8.001 0 0 1 7 0zm5.001 1.009v13.858a7.95 7.95 0 0 1-2 .819V.19a7.95 7.95 0 0 1 2 .819zm2 1.639A7.97 7.97 0 0 1 16 7.938a7.97 7.97 0 0 1-1.999 5.29V2.648z"})),m("symbol",{id:"icon-one-map",viewBox:"0 0 45 35"},m("title",null,"One map"),m("rect",{x:".5",y:".5",width:"44",height:"34",rx:"4"})),m("symbol",{id:"icon-two-maps-horizontal",viewBox:"0 0 45 35"},m("title",null,"Two horizontal maps"),m("rect",{x:".5",y:".5",width:"44",height:"15",rx:"4"}),m("rect",{x:".5",y:"19.5",width:"44",height:"15",rx:"4"})),m("symbol",{id:"icon-two-maps-vertical",viewBox:"0 0 45 35"},m("title",null,"Two vertical maps"),m("rect",{x:".5",y:".5",width:"20",height:"34",rx:"3"}),m("rect",{x:"24.5",y:".5",width:"20",height:"34",rx:"3"})),m("symbol",{id:"icon-four-maps",viewBox:"0 0 45 35"},m("title",null,"Four maps"),m("rect",{x:".5",y:".5",width:"20",height:"15",rx:"4"}),m("rect",{x:".5",y:"19.5",width:"20",height:"15",rx:"4"}),m("rect",{x:"24.5",y:".5",width:"20",height:"15",rx:"4"}),m("rect",{x:"24.5",y:"19.5",width:"20",height:"15",rx:"4"})),m("symbol",{id:"icon-animated-map",viewBox:"0 0 45 35"},m("title",null,"Animated map"),m("rect",{x:".5",y:".5",width:"44",height:"34",rx:"4"}),m("path",{d:"M17.5 9.852v15.064l13.475-7.532L17.5 9.852z",fill:"white"}))))},p=o().createElement,g=function(e){var t=e.className,i=e.children;return p("div",{className:n()("l-simple-page",t)},p(c,null),p("main",{className:"l-static-page"},i),p(j,null),p(r.Icons,null))};g.defaultProps={className:null};var h=g},4643:function(e,t,i){"use strict";i.d(t,{QL:function(){return a},us:function(){return n},RW:function(){return r}});var s=i(6403),o="config",a=function(e){return e.config.projectsPage},n=function(e){return e.config.categories},r=function(e){return e.config.buttons};t.ZP=function(e){return(0,s.oM)({name:o,initialState:{aboutPage:{},projectsPage:{},projectDetailPage:{},categories:[],buttons:{}},reducers:{setConfig:function(e,t){var i=t.payload,s=i.aboutPage,o=i.projectsPage,a=i.projectDetailPage,n=i.categories,r=i.buttons;e.aboutPage=s,e.projectsPage=o,e.projectDetailPage=a,e.categories=n,e.buttons=r}}})}},5852:function(e,t,i){"use strict";i.r(t),i.d(t,{default:function(){return p}});var s=i(7757),o=i.n(s),a=i(2137),n=i(7294),r=i.n(n),l=i(6170),u=i(6362),d=r().createElement,c=function(){return d("div",{className:"c-about-page-layout"},d(u.Z,{hideAboutButton:!0}),d("div",{className:"title"},d("h2",null,"MONGABAY"),d("h1",null,"REFORESTATION DIRECTORY")),d("div",{className:"main-container"},d("div",{className:"left-container"},d("div",{className:"radial-chart"},d("img",{src:"/icons/radial-chart-white.svg"}))),d("div",{className:"right-container"},d("div",{className:"content"},"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."),d("div",{className:"partners"},d("h2",null,"Project Partners"),d("div",{className:"logos"},d("a",{href:"https://mongabay.com",target:"_blank",rel:"noreferrer"},d("img",{src:"/images/mongabay-logo-about.png"})),d("a",{href:"https://vizzuality.com",target:"_blank",rel:"noreferrer"},d("img",{src:"/images/vizzuality-logo.png"})))))))},m=r().createElement;function j(e){return m(l.Z,{className:"p-about"},m(c,e))}j.getInitialProps=function(){var e=(0,a.Z)(o().mark((function e(t){return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",{initialQuery:t.query});case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();var p=j},8961:function(e,t,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/about",function(){return i(5852)}])}},function(e){e.O(0,[774,900,885,351,601,235],(function(){return t=8961,e(e.s=t);var t}));var t=e.O();_N_E=t}]);