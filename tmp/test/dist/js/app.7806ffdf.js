(function(e){function o(o){for(var t,p,i=o[0],a=o[1],h=o[2],_=0,u=[];_<i.length;_++)p=i[_],Object.prototype.hasOwnProperty.call(n,p)&&n[p]&&u.push(n[p][0]),n[p]=0;for(t in a)Object.prototype.hasOwnProperty.call(a,t)&&(e[t]=a[t]);v&&v(o);while(u.length)u.shift()();return r.push.apply(r,h||[]),l()}function l(){for(var e,o=0;o<r.length;o++){for(var l=r[o],t=!0,i=1;i<l.length;i++){var a=l[i];0!==n[a]&&(t=!1)}t&&(r.splice(o--,1),e=p(p.s=l[0]))}return e}var t={},n={app:0},r=[];function p(o){if(t[o])return t[o].exports;var l=t[o]={i:o,l:!1,exports:{}};return e[o].call(l.exports,l,l.exports,p),l.l=!0,l.exports}p.m=e,p.c=t,p.d=function(e,o,l){p.o(e,o)||Object.defineProperty(e,o,{enumerable:!0,get:l})},p.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},p.t=function(e,o){if(1&o&&(e=p(e)),8&o)return e;if(4&o&&"object"===typeof e&&e&&e.__esModule)return e;var l=Object.create(null);if(p.r(l),Object.defineProperty(l,"default",{enumerable:!0,value:e}),2&o&&"string"!=typeof e)for(var t in e)p.d(l,t,function(o){return e[o]}.bind(null,t));return l},p.n=function(e){var o=e&&e.__esModule?function(){return e["default"]}:function(){return e};return p.d(o,"a",o),o},p.o=function(e,o){return Object.prototype.hasOwnProperty.call(e,o)},p.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],a=i.push.bind(i);i.push=o,i=i.slice();for(var h=0;h<i.length;h++)o(i[h]);var v=a;r.push([0,"chunk-vendors"]),l()})({0:function(e,o,l){e.exports=l("56d7")},"0fb9":function(e,o,l){},"1f7f":function(e,o,l){"use strict";var t=l("0fb9"),n=l.n(t);n.a},"56d7":function(e,o,l){"use strict";l.r(o);l("e260"),l("e6cf"),l("cca6"),l("a79d"),l("b3f6"),l("499a");var t=l("2b0e"),n=function(){var e=this,o=e.$createElement,l=e._self._c||o;return l("div",{attrs:{id:"app-container"}},[l("div",{staticClass:"background-container",style:e.backgroundContainerStyle}),e.topToolkit?l("div",{ref:"topContainer",staticClass:"top-container"},[l("i",{staticClass:"icon-more"})]):e._e(),l("div",{staticClass:"page-container",style:e.pageContainerStyle},[l("keep-alive",{attrs:{include:e.keepAlivePages}},[l("router-view")],1)],1),e.isShowBottomNav?l("div",{ref:"bottomContainer",staticClass:"bottom-container"}):e._e()])},r=[],p=(l("caad"),l("d81d"),l("2532"),{info:function(){}}),i=l("e95b"),a=l("aca9"),h={data:function(){return{topContainerHeight:0,bottomContainerHeight:0,topToolkit:a.topToolkit,bottomNavs:a.bottomNavs}},computed:{backgroundContainerStyle:function(){return p.info("menory backgroundContainerStyle[App] running..."),{backgroundColor:a.backgroundColor}},pageContainerStyle:function(){return{paddingTop:"".concat(this.topContainerHeight,"px"),paddingBottom:"".concat(this.bottomContainerHeight,"px")}},isShowBottomNav:function(){var e=this.bottomNavs.map((function(e){return e.path}));return e.includes(this.$route.path)},keepAlivePages:function(){return[]}},mounted:function(){var e=this;p.info("menory mounted[App] running..."),setTimeout((function(){p.info("menory mounted[App] nextTick running..."),e.topContainerHeight=e.$refs.topContainer?e.$refs.topContainer.offsetHeight:0,e.bottomContainerHeight=e.$refs.bottomContainer?e.$refs.bottomContainer.offsetHeight:0}),0),Object(i["d"])(window,"resize",Object(i["a"])((function(){setTimeout((function(){p.info("menory mounted[App] resize running...",e.$refs.bottomContainer.offsetHeight),e.topContainerHeight=e.$refs.topContainer?e.$refs.topContainer.offsetHeight:0,e.bottomContainerHeight=e.$refs.bottomContainer?e.$refs.bottomContainer.offsetHeight:0}),1e3)}),200))}},v=h,_=(l("1f7f"),l("2877")),u=Object(_["a"])(v,n,r,!1,null,"79abff8c",null),c=u.exports,s=l("8c4f"),f=function(){var e=this,o=e.$createElement;e._self._c;return e._m(0)},d=[function(){var e=this,o=e.$createElement,l=e._self._c||o;return l("div",[l("p",[e._v("hello")]),l("p",[e._v("hello")]),l("p",[e._v("hello")]),l("p",[e._v("hello")]),l("p",[e._v("hello")]),l("p",[e._v("hello")]),l("p",[e._v("hello")]),l("p",[e._v("hello")]),l("p",[e._v("hello")]),l("p",[e._v("hello")]),l("p",[e._v("hello")]),l("p",[e._v("hello")]),l("p",[e._v("hello")]),l("p",[e._v("hello")]),l("p",[e._v("hello")]),l("p",[e._v("hello")]),l("p",[e._v("hello")]),l("p",[e._v("hello")]),l("p",[e._v("hello")]),l("p",[e._v("hello")]),l("p",[e._v("hello")]),l("p",[e._v("hello")]),l("p",[e._v("hello")]),l("p",[e._v("hello")]),l("p",[e._v("hello")]),l("p",[e._v("hello")]),l("p",[e._v("hello")]),l("p",[e._v("hello")]),l("p",[e._v("hello")]),l("p",[e._v("hello")]),l("p",[e._v("hello")]),l("p",[e._v("hello")]),l("p",[e._v("hello")]),l("p",[e._v("hello")]),l("p",[e._v("hello")]),l("p",[e._v("hello")]),l("p",[e._v("hello")]),l("p",[e._v("hello")]),l("p",[e._v("hello")]),l("p",[e._v("hello")]),l("p",[e._v("hello")]),l("p",[e._v("hello")]),l("p",[e._v("hello")]),l("p",[e._v("hello")]),l("p",[e._v("hello")]),l("p",[e._v("hello")]),l("p",[e._v("hello")]),l("p",[e._v("hello")]),l("p",[e._v("hello")]),l("p",[e._v("hello")]),l("p",[e._v("hello")]),l("p",[e._v("hello")]),l("p",[e._v("hello")]),l("p",[e._v("hello")]),l("p",[e._v("hello")]),l("p",[e._v("hello")]),l("p",[e._v("hello")]),l("p",[e._v("hello")]),l("p",[e._v("hello")]),l("p",[e._v("hello")]),l("p",[e._v("hello")]),l("p",[e._v("hello")]),l("p",[e._v("hello")]),l("p",[e._v("hello")]),l("p",[e._v("hello")]),l("p",[e._v("hello")]),l("p",[e._v("hello")]),l("p",[e._v("hello")]),l("p",[e._v("hello")]),l("p",[e._v("hello")]),l("p",[e._v("hello")]),l("p",[e._v("hello")]),l("p",[e._v("hello")]),l("p",[e._v("hello")]),l("p",[e._v("hello")]),l("p",[e._v("hello")]),l("p",[e._v("hello")]),l("p",[e._v("hello")]),l("p",[e._v("hello")]),l("p",[e._v("hello")]),l("p",[e._v("hello")]),l("p",[e._v("hello")]),l("p",[e._v("hello")]),l("p",[e._v("hello")]),l("p",[e._v("hello")]),l("p",[e._v("hello")]),l("p",[e._v("hello")]),l("p",[e._v("hello")]),l("p",[e._v("hello")]),l("p",[e._v("hello")]),l("p",[e._v("hello")]),l("p",[e._v("hello")]),l("p",[e._v("hello")]),l("p",[e._v("hello")]),l("p",[e._v("hello")]),l("p",[e._v("hello")]),l("p",[e._v("hello")]),l("p",[e._v("hello")]),l("p",[e._v("hello")]),l("p",[e._v("hello")])])}],b={name:"home",created:function(){console.log("#1",Object(i["c"])()),console.log("#2",Object(i["b"])())}},m=b,g=Object(_["a"])(m,f,d,!1,null,null,null),C=g.exports;t["a"].use(s["a"]);var y=[{path:"/",name:"home",component:C}],k=new s["a"]({mode:"history",base:"/",routes:y}),w=k,O=l("2f62");t["a"].use(O["a"]);var j=new O["a"].Store({state:{},mutations:{},actions:{},modules:{}});t["a"].config.productionTip=!1,new t["a"]({router:w,store:j,render:function(e){return e(c)}}).$mount("#app")},aca9:function(e){e.exports=JSON.parse('{"backgroundColor":"blue","topToolkit":null,"bottomNavs":[{"path":"/"}]}')}});
//# sourceMappingURL=app.7806ffdf.js.map