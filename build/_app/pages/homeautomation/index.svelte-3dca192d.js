import{S as t,i as e,s as a,P as s,c as n,a as r,d as i,b as o,f as c,D as l,e as h,t as u,k as d,g,n as f,L as m,Q as p,h as $,R as y,l as v,E as x,O as b,T as w,A as j,U as k,V as E,W as A,X as H,Y as T,Z as X,_ as Y,$ as D,a0 as I,a1 as V,H as O,I as B,J as P,K as R,x as W,u as J,j as K,m as L,o as Q,v as S,a2 as U,a3 as Z}from"../../chunks/vendor-d051d4e0.js";function _(t,e,a){const s=t.slice();return s[20]=e[a],s}function q(t,e,a){const s=t.slice();return s[23]=e[a],s}function z(t){let e,a,h,u,d,g;return{c(){e=s("g"),a=s("line"),this.h()},l(t){e=n(t,"g",{stroke:!0,"stroke-opacity":!0},1);var s=r(e);a=n(s,"line",{x1:!0,y1:!0,x2:!0,y2:!0},1),r(a).forEach(i),s.forEach(i),this.h()},h(){o(a,"x1",h=t[23].source.x),o(a,"y1",u=t[23].source.y),o(a,"x2",d=t[23].target.x),o(a,"y2",g=t[23].target.y),o(e,"stroke","#999"),o(e,"stroke-opacity","0.6")},m(t,s){c(t,e,s),l(e,a)},p(t,e){4&e&&h!==(h=t[23].source.x)&&o(a,"x1",h),4&e&&u!==(u=t[23].source.y)&&o(a,"y1",u),4&e&&d!==(d=t[23].target.x)&&o(a,"x2",d),4&e&&g!==(g=t[23].target.y)&&o(a,"y2",g)},d(t){t&&i(e)}}}function C(t){let e,a,v,x,b,w,j,k,E,A,H,T,X=t[20].data.name+"",Y=t[20].data.count?" ("+t[20].data.count+")":"";function D(){return t[8](t[20])}function I(){return t[9](t[20])}return{c(){e=s("foreignObject"),a=h("div"),v=h("a"),x=u(X),b=u(Y),w=d(),this.h()},l(t){e=n(t,"foreignObject",{id:!0,x:!0,y:!0,height:!0,width:!0,class:!0,style:!0},1);var s=r(e);a=n(s,"DIV",{class:!0});var o=r(a);v=n(o,"A",{href:!0,class:!0});var c=r(v);x=g(c,X),b=g(c,Y),c.forEach(i),w=f(o),o.forEach(i),s.forEach(i),this.h()},h(){var s;o(v,"href","/blog/"),o(v,"class","svelte-10gcge7"),o(a,"class","svelte-10gcge7"),o(e,"id",j=t[20].data.id),o(e,"x",k=t[20].x?t[20].x-M/2:0),o(e,"y",E=t[20].y?t[20].y-M/2:0),o(e,"height",M),o(e,"width",M),o(e,"class","circle svelte-10gcge7"),o(e,"style",A=`--element-bg-color: var(${null!=(s=t[20].data.color)?s:"--gray"})`),m(e,"highlight",t[20].data.highlight)},m(t,s){c(t,e,s),l(e,a),l(a,v),l(v,x),l(v,b),l(a,w),H||(T=[p(e,"mouseenter",D),p(e,"mouseleave",I)],H=!0)},p(a,s){var n;t=a,8&s&&X!==(X=t[20].data.name+"")&&$(x,X),8&s&&Y!==(Y=t[20].data.count?" ("+t[20].data.count+")":"")&&$(b,Y),8&s&&j!==(j=t[20].data.id)&&o(e,"id",j),8&s&&k!==(k=t[20].x?t[20].x-M/2:0)&&o(e,"x",k),8&s&&E!==(E=t[20].y?t[20].y-M/2:0)&&o(e,"y",E),8&s&&A!==(A=`--element-bg-color: var(${null!=(n=t[20].data.color)?n:"--gray"})`)&&o(e,"style",A),8&s&&m(e,"highlight",t[20].data.highlight)},d(t){t&&i(e),H=!1,y(T)}}}function F(t){let e,a,h=t[2],u=[];for(let s=0;s<h.length;s+=1)u[s]=z(q(t,h,s));let d=t[3],g=[];for(let s=0;s<d.length;s+=1)g[s]=C(_(t,d,s));return{c(){e=s("svg");for(let t=0;t<u.length;t+=1)u[t].c();a=v();for(let t=0;t<g.length;t+=1)g[t].c();this.h()},l(t){e=n(t,"svg",{height:!0,width:!0},1);var s=r(e);for(let e=0;e<u.length;e+=1)u[e].l(s);a=v();for(let e=0;e<g.length;e+=1)g[e].l(s);s.forEach(i),this.h()},h(){o(e,"height",G),o(e,"width",t[0])},m(s,n){c(s,e,n);for(let t=0;t<u.length;t+=1)u[t].m(e,null);l(e,a);for(let t=0;t<g.length;t+=1)g[t].m(e,null);t[10](e)},p(t,[s]){if(4&s){let n;for(h=t[2],n=0;n<h.length;n+=1){const r=q(t,h,n);u[n]?u[n].p(r,s):(u[n]=z(r),u[n].c(),u[n].m(e,a))}for(;n<u.length;n+=1)u[n].d(1);u.length=h.length}if(56&s){let a;for(d=t[3],a=0;a<d.length;a+=1){const n=_(t,d,a);g[a]?g[a].p(n,s):(g[a]=C(n),g[a].c(),g[a].m(e,null))}for(;a<g.length;a+=1)g[a].d(1);g.length=d.length}1&s&&o(e,"width",t[0])},i:x,o:x,d(a){a&&i(e),b(u,a),b(g,a),t[10](null)}}}let G=700;const M=80;function N(t,e,a){let s,n,r,{data:i={name:"Home Assistant",children:[{}]}}=e,{width:o}=e;const c=M/2,l=w(i);let h,u=I;function d(t){const e=h.find(u.invertX(t.x),u.invertY(t.y),c);return e&&(e.x=u.applyX(e.x),e.y=u.applyY(e.y)),e}function g(){h.tick(),a(3,n=[...n]),a(2,s=[...s])}function f(t){t.active||h.alphaTarget(.3).restart(),t.subject.fx=u.invertX(t.subject.x),t.subject.fy=u.invertY(t.subject.y)}function m(t){t.subject.fx=u.invertX(t.x),t.subject.fy=u.invertY(t.y)}function p(t){t.active||h.alphaTarget(0),t.subject.fx=null,t.subject.fy=null}function $(t){console.log(Y("#"+t.data.id)),Y("#"+t.data.id).classed("highlight",!0),t.children&&t.children.forEach($)}function y(t){Y("#"+t.data.id).classed("highlight",!1),t.children&&t.children.forEach(y)}j((()=>{a(7,h=k(n).force("link",E(s).id((t=>t.id)).distance(M).strength(.5)).force("charge",A().strength(-300)).force("collide",H(M/2).strength(.4)).force("center",T(o/2,G/2).strength(.5)).force("y",X(G/2).strength(.06)).on("tick",g)),Y(r).call(D().container(r).subject(d).on("start",f).on("drag",m).on("end",p))}));return t.$$set=t=>{"data"in t&&a(6,i=t.data),"width"in t&&a(0,o=t.width)},t.$$.update=()=>{129&t.$$.dirty&&(null==h||h.force("center",T(o/2,G/2).strength(.5)))},a(2,s=l.links()),a(3,n=l.descendants()),[o,r,s,n,$,y,i,h,t=>$(t),t=>y(t),function(t){V[t?"unshift":"push"]((()=>{r=t,a(1,r)}))}]}class tt extends t{constructor(t){super(),e(this,t,N,F,a,{data:6,width:0})}}function et(t){let e,a,s;const l=t[3].default,u=O(l,t,t[2],null);return{c(){e=h("div"),u&&u.c(),this.h()},l(t){e=n(t,"DIV",{style:!0,class:!0});var a=r(e);u&&u.l(a),a.forEach(i),this.h()},h(){o(e,"style",a=`--spacing: ${t[1][t[0]]}`),o(e,"class","svelte-e7cenx")},m(t,a){c(t,e,a),u&&u.m(e,null),s=!0},p(t,[n]){u&&u.p&&(!s||4&n)&&B(u,l,t,t[2],s?R(l,t[2],n,null):P(t[2]),null),(!s||1&n&&a!==(a=`--spacing: ${t[1][t[0]]}`))&&o(e,"style",a)},i(t){s||(W(u,t),s=!0)},o(t){J(u,t),s=!1},d(t){t&&i(e),u&&u.d(t)}}}function at(t,e,a){let{$$slots:s={},$$scope:n}=e,{spacing:r="large"}=e;return t.$$set=t=>{"spacing"in t&&a(0,r=t.spacing),"$$scope"in t&&a(2,n=t.$$scope)},[r,{none:"0",small:"1em",medium:"2em",large:"3em"},n,s]}class st extends t{constructor(t){super(),e(this,t,at,et,a,{spacing:0})}}function nt(t){let e,a,s,o;return a=new tt({props:{data:t[0],width:t[1]}}),{c(){e=h("div"),K(a.$$.fragment),this.h()},l(t){e=n(t,"DIV",{});var s=r(e);L(a.$$.fragment,s),s.forEach(i),this.h()},h(){U((()=>t[2].call(e)))},m(n,r){c(n,e,r),Q(a,e,null),s=Z(e,t[2].bind(e)),o=!0},p(t,e){const s={};1&e&&(s.data=t[0]),2&e&&(s.width=t[1]),a.$set(s)},i(t){o||(W(a.$$.fragment,t),o=!0)},o(t){J(a.$$.fragment,t),o=!1},d(t){t&&i(e),S(a),s()}}}function rt(t){let e,a,s,o,m,p,$,y,v,x,b,w,j;return w=new st({props:{spacing:"none",$$slots:{default:[nt]},$$scope:{ctx:t}}}),{c(){e=h("h1"),a=u("Home Automation"),s=d(),o=h("p"),m=u("Thanks for visiting. "),p=h("br"),$=u("\n\tThis page is still a "),y=h("b"),v=u("work in progress"),x=u(", but below you see a diagram of my Home Automation\n\tsetup!"),b=d(),K(w.$$.fragment)},l(t){e=n(t,"H1",{});var c=r(e);a=g(c,"Home Automation"),c.forEach(i),s=f(t),o=n(t,"P",{});var l=r(o);m=g(l,"Thanks for visiting. "),p=n(l,"BR",{}),$=g(l,"\n\tThis page is still a "),y=n(l,"B",{});var h=r(y);v=g(h,"work in progress"),h.forEach(i),x=g(l,", but below you see a diagram of my Home Automation\n\tsetup!"),l.forEach(i),b=f(t),L(w.$$.fragment,t)},m(t,n){c(t,e,n),l(e,a),c(t,s,n),c(t,o,n),l(o,m),l(o,p),l(o,$),l(o,y),l(y,v),l(o,x),c(t,b,n),Q(w,t,n),j=!0},p(t,[e]){const a={};11&e&&(a.$$scope={dirty:e,ctx:t}),w.$set(a)},i(t){j||(W(w.$$.fragment,t),j=!0)},o(t){J(w.$$.fragment,t),j=!1},d(t){t&&i(e),t&&i(s),t&&i(o),t&&i(b),S(w,t)}}}async function it({fetch:t}){const e=await t("/homeautomation/structure.json");return{props:{data:await e.json()}}}function ot(t,e,a){let s,{data:n}=e;return t.$$set=t=>{"data"in t&&a(0,n=t.data)},[n,s,function(){s=this.clientWidth,a(1,s)}]}class ct extends t{constructor(t){super(),e(this,t,ot,rt,a,{data:0})}}export{ct as default,it as load};