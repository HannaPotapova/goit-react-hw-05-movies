"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[186],{4873:function(t,e,n){n.d(e,{Hg:function(){return i},TP:function(){return p},tx:function(){return x},z1:function(){return l},zv:function(){return v}});var r=n(5861),a=n(7757),c=n.n(a),u=n(2388);u.Z.defaults.baseURL="https://api.themoviedb.org/3";var s="2ec41caf41dc0eb9f17082a886b840b4";function i(t){return o.apply(this,arguments)}function o(){return(o=(0,r.Z)(c().mark((function t(e){var n,r,a;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n="/trending/movie/day?api_key=".concat(s,"&page=").concat(e),t.next=3,u.Z.get(n);case 3:return r=t.sent,a=r.data,t.abrupt("return",a.results);case 6:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function p(t){return f.apply(this,arguments)}function f(){return(f=(0,r.Z)(c().mark((function t(e){var n,r,a;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n="/movie/".concat(e,"?api_key=").concat(s),t.next=3,u.Z.get(n);case 3:return r=t.sent,a=r.data,t.abrupt("return",a);case 6:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function l(t){return h.apply(this,arguments)}function h(){return(h=(0,r.Z)(c().mark((function t(e){var n,r,a;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n="/search/movie?api_key=".concat(s,"&query=").concat(e),t.next=3,u.Z.get(n);case 3:return r=t.sent,a=r.data,t.abrupt("return",a.results);case 6:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function v(t){return d.apply(this,arguments)}function d(){return(d=(0,r.Z)(c().mark((function t(e){var n,r,a;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n="/movie/".concat(e,"/credits?api_key=").concat(s),t.next=3,u.Z.get(n);case 3:return r=t.sent,a=r.data,t.abrupt("return",a.cast);case 6:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function x(t){return y.apply(this,arguments)}function y(){return(y=(0,r.Z)(c().mark((function t(e){var n,r,a;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n="/movie/".concat(e,"/reviews?api_key=").concat(s),t.next=3,u.Z.get(n);case 3:return r=t.sent,a=r.data,t.abrupt("return",a.results);case 6:case"end":return t.stop()}}),t)})))).apply(this,arguments)}},186:function(t,e,n){n.r(e);var r=n(5861),a=n(9439),c=n(7757),u=n.n(c),s=n(2791),i=n(7689),o=n(4873),p=n(184);e.default=function(){var t=(0,i.UO)().movieId,e=(0,s.useState)([]),n=(0,a.Z)(e,2),c=n[0],f=n[1];return(0,s.useEffect)((function(){function e(){return(e=(0,r.Z)(u().mark((function e(){var n;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,o.tx)(t);case 3:n=e.sent,f(n),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[t]),(0,p.jsxs)("div",{children:[c.length<1&&(0,p.jsx)("p",{children:"We don't have any reviews for this movie."}),c.length>0&&(0,p.jsx)("ul",{style:{display:"flex",gap:6,flexWrap:"wrap",listStyle:"none"},children:c.map((function(t){var e=t.id,n=t.author,r=t.content;return(0,p.jsxs)("li",{children:[(0,p.jsx)("h3",{children:n||"no info"}),(0,p.jsx)("p",{children:r||"no info"})]},e)}))})]})}}}]);
//# sourceMappingURL=186.25bd5134.chunk.js.map