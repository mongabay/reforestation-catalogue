(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{0:function(t,e,o){o("GcxT"),t.exports=o("nOHt")},"1TCz":function(t,e,o){"use strict";o.r(e);var n=o("q1tI"),a=o.n(n),r=o("mrSG"),i=o("eWff"),c=o("tXGu"),d=o("bQW5"),s=o("JKea"),u=o("z321"),l=o("tm1d"),p=o("D1zj"),f=o("IdKh"),h=o("TLPt"),v=o("AFrU");function g(){var t=Object(f.a)(1),e={lead:void 0,follow:void 0,crossfadeOpacity:!1,preserveFollowOpacity:!1},o=Object(r.a)({},e),n={},a={},i=!1,c=null,u=0;function l(o,n){var a=e.lead,s=e.follow;i=!0,c=null;var u=!1,l=function(){u=!0,a&&a.scheduleRender(),s&&s.scheduleRender()},p=function(){i=!1,c=Object(d.d)().timestamp};return n=n&&Object(v.a)(n,"crossfade"),function(t,e,o){void 0===o&&(o={});var n=Object(h.a)(t)?t:Object(f.a)(t);return Object(v.b)("",n,e,o),{stop:function(){return n.stop()}}}(t,o,Object(r.a)(Object(r.a)({},n),{onUpdate:l,onComplete:function(){u?p():(t.set(o),d.b.read(p)),l()}}))}function g(){var o,r,i=Object(d.d)().timestamp,c=e.lead,l=e.follow;if(i!==u&&c){u=i;var f=c.getLatestValues();Object.assign(n,f);var h=l?l.getLatestValues():e.prevValues;Object.assign(a,h);var v=t.get(),g=null!==(o=f.opacity)&&void 0!==o?o:1,m=null!==(r=null===h||void 0===h?void 0:h.opacity)&&void 0!==r?r:1;e.crossfadeOpacity&&l?(n.opacity=Object(s.a)(!1!==l.isVisible?0:m,g,b(v)),a.opacity=e.preserveFollowOpacity?m:Object(s.a)(m,0,y(v))):l||(n.opacity=Object(s.a)(m,g,v)),function(t,e,o,n,a,r){for(var i=0;i<j;i++){var c="border"+O[i]+"Radius",d=w(n,c),u=w(o,c);if((void 0!==d||void 0!==u)&&(d||(d=0),u||(u=0),"number"===typeof d&&"number"===typeof u)){var l=Math.max(Object(s.a)(d,u,r),0);t[c]=e[c]=l}}if(n.rotate||o.rotate){var f=Object(s.a)(n.rotate||0,o.rotate||0,r);t.rotate=e.rotate=f}!a&&o.backgroundColor&&n.backgroundColor&&(t.backgroundColor=e.backgroundColor=Object(p.a)(n.backgroundColor,o.backgroundColor)(r))}(n,a,f,h||{},Boolean(l),v)}}return{isActive:function(){return n&&(i||Object(d.d)().timestamp===c)},fromLead:function(t){return l(0,t)},toLead:function(n){var a=0;return e.prevValues||e.follow?o.lead===e.follow&&o.follow===e.lead&&(a=1-t.get()):a=1,t.set(a),l(1,n)},reset:function(){return t.set(1)},stop:function(){return t.stop()},getCrossfadeState:function(t){return g(),t===e.lead?n:t===e.follow?a:void 0},setOptions:function(t){o=e,e=t,n={},a={}},getLatestValues:function(){return n}}}var b=m(0,.5,u.j),y=m(.5,.95,u.n);function m(t,e,o){return function(n){return n<t?0:n>e?1:o(Object(l.a)(t,e,n))}}var O=["TopLeft","TopRight","BottomLeft","BottomRight"],j=O.length;function w(t,e){var o;return null!==(o=t[e])&&void 0!==o?o:t.borderRadius}function S(){var t,e,o,n=new Set,a={leadIsExiting:!1},d=Object(r.a)({},a),s=g(),u=!1;return{add:function(t){t.setCrossfader(s),n.add(t),o&&(t.prevDragCursor=o),a.lead||(a.lead=t)},remove:function(t){n.delete(t)},getLead:function(){return a.lead},updateSnapshot:function(){if(a.lead){t=s.isActive()?s.getLatestValues():a.lead.getLatestValues(),e=a.lead.prevViewportBox;var n=c.b.get(a.lead);n&&n.isDragging&&(o=n.cursorProgress)}},clearSnapshot:function(){o=e=void 0},updateLeadAndFollow:function(){var e,o,c;d=Object(r.a)({},a);for(var l=Array.from(n),p=l.length;p--;p>=0){var f=l[p];if(o&&(null!==c&&void 0!==c||(c=f)),null!==o&&void 0!==o||(o=f),o&&c)break}a.lead=o,a.follow=c,a.leadIsExiting=(null===(e=a.lead)||void 0===e?void 0:e.presence)===i.a.Exiting,s.setOptions({lead:o,follow:c,prevValues:t,crossfadeOpacity:(null===c||void 0===c?void 0:c.isPresenceRoot)||(null===o||void 0===o?void 0:o.isPresenceRoot)}),a.lead===d.follow||d.lead===a.lead&&d.leadIsExiting===a.leadIsExiting||(u=!0)},animate:function(t,o){var n;if(void 0===o&&(o=!1),t===a.lead){o?t.pointTo(a.lead):t.setVisibility(!0);var r={},c=null===(n=a.follow)||void 0===n?void 0:n.getProjectionParent();if(c&&(r.prevParent=c),t.presence===i.a.Entering?r.originBox=a.follow?a.follow.prevViewportBox:e:t.presence===i.a.Exiting&&(r.targetBox=function(){var t;return null===(t=a.follow)||void 0===t?void 0:t.getLayoutState().layout}()),u){u=!1;var d=t.getDefaultTransition();t.presence===i.a.Entering?s.toLead(d):s.fromLead(d)}t.notifyLayoutReady(r)}else o?a.lead&&t.pointTo(a.lead):t.setVisibility(!1)}}}var k=o("10wF"),C=o("cUN6"),x=o("5z0C");var E=o("cG4+"),L=o("Sd1a"),V=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.children=new Set,e.stacks=new Map,e.hasMounted=!1,e.updateScheduled=!1,e.renderScheduled=!1,e.syncContext=Object(r.a)(Object(r.a)({},Object(E.a)()),{syncUpdate:function(t){return e.scheduleUpdate(t)},forceUpdate:function(){e.syncContext=Object(r.a)({},e.syncContext),e.scheduleUpdate(!0)},register:function(t){return e.addChild(t)},remove:function(t){return e.removeChild(t)}}),e}return Object(r.b)(e,t),e.prototype.componentDidMount=function(){this.hasMounted=!0},e.prototype.componentDidUpdate=function(){this.startLayoutAnimation()},e.prototype.shouldComponentUpdate=function(){return this.renderScheduled=!0,!0},e.prototype.startLayoutAnimation=function(){var t=this;this.renderScheduled=this.updateScheduled=!1;var e=this.props.type;this.children.forEach((function(t){t.isPresent?t.presence!==i.a.Entering&&(t.presence=t.presence===i.a.Exiting?i.a.Entering:i.a.Present):t.presence=i.a.Exiting})),this.updateStacks();var o={layoutReady:function(o){void 0!==o.getLayoutId()?t.getStack(o).animate(o,"crossfade"===e):o.notifyLayoutReady()},parent:this.context.visualElement};this.children.forEach((function(e){return t.syncContext.add(e)})),this.syncContext.flush(o),this.stacks.forEach((function(t){return t.clearSnapshot()}))},e.prototype.updateStacks=function(){this.stacks.forEach((function(t){return t.updateLeadAndFollow()}))},e.prototype.scheduleUpdate=function(t){void 0===t&&(t=!1),!t&&this.updateScheduled||(this.updateScheduled=!0,this.children.forEach((function(t){return function(t){for(var e=!1,o={},n=0;n<x.d.length;n++){var a="rotate"+x.d[n];t.hasValue(a)&&0!==t.getStaticValue(a)&&(e=!0,o[a]=t.getStaticValue(a),t.setStaticValue(a,0))}if(e){for(var a in t.syncRender(),o)t.setStaticValue(a,o[a]);t.scheduleRender()}}(t)})),this.children.forEach(L.b),this.stacks.forEach((function(t){return t.updateSnapshot()})),!t&&this.renderScheduled||(this.renderScheduled=!0,this.forceUpdate()))},e.prototype.addChild=function(t){this.children.add(t),this.addToStack(t),t.presence=this.hasMounted?i.a.Entering:i.a.Present},e.prototype.removeChild=function(t){this.scheduleUpdate(),this.children.delete(t),this.removeFromStack(t)},e.prototype.addToStack=function(t){var e=this.getStack(t);null===e||void 0===e||e.add(t)},e.prototype.removeFromStack=function(t){var e=this.getStack(t);null===e||void 0===e||e.remove(t)},e.prototype.getStack=function(t){var e=t.getLayoutId();if(void 0!==e)return!this.stacks.has(e)&&this.stacks.set(e,S()),this.stacks.get(e)},e.prototype.render=function(){return n.createElement(k.b.Provider,{value:this.syncContext},this.props.children)},e.contextType=C.a,e}(n.Component),P=o("/MKj"),T=o("i7Pf"),R=o("ANjH"),U=o("z2oR"),A=Object(T.a)({reducer:Object(R.c)({projects:Object(U.a)().reducer})}),z=(o("zxz7"),a.a.createElement),F=function(t){var e=t.Component,o=t.pageProps;return z(P.a,{store:A},z(V,null,z(e,o)))};F.defaultProps={pageProps:{}};e.default=F},GcxT:function(t,e,o){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return o("1TCz")}])}},[[0,1,2,8,0,3,4]]]);