import{S as s,i as a,s as e,e as l,k as t,c,a as r,d as n,n as o,b as u,f as $,D as f,E as h,j as m,t as i,m as v,g as d,F as p,o as g,x as E,u as b,v as L,G as k,H as I,I as w,J as x,K as A}from"../chunks/vendor-d4c6ea5c.js";import{L as j}from"../chunks/LinkButton-fbbacee9.js";import{h as D,t as H}from"../chunks/themeStore-42b42041.js";function B(s){let a,e,m,i,v,d,p,g,E,b,L,k,I,w,x,A,j,D,H,B;return{c(){a=l("ul"),e=l("li"),m=t(),i=l("li"),v=t(),d=l("li"),p=t(),g=l("li"),E=t(),b=l("li"),L=t(),k=l("li"),I=t(),w=l("li"),x=t(),A=l("li"),j=t(),D=l("li"),H=t(),B=l("li"),this.h()},l(s){a=c(s,"UL",{class:!0});var l=r(a);e=c(l,"LI",{class:!0}),r(e).forEach(n),m=o(l),i=c(l,"LI",{class:!0}),r(i).forEach(n),v=o(l),d=c(l,"LI",{class:!0}),r(d).forEach(n),p=o(l),g=c(l,"LI",{class:!0}),r(g).forEach(n),E=o(l),b=c(l,"LI",{class:!0}),r(b).forEach(n),L=o(l),k=c(l,"LI",{class:!0}),r(k).forEach(n),I=o(l),w=c(l,"LI",{class:!0}),r(w).forEach(n),x=o(l),A=c(l,"LI",{class:!0}),r(A).forEach(n),j=o(l),D=c(l,"LI",{class:!0}),r(D).forEach(n),H=o(l),B=c(l,"LI",{class:!0}),r(B).forEach(n),l.forEach(n),this.h()},h(){u(e,"class","svelte-1u7wkmb"),u(i,"class","svelte-1u7wkmb"),u(d,"class","svelte-1u7wkmb"),u(g,"class","svelte-1u7wkmb"),u(b,"class","svelte-1u7wkmb"),u(k,"class","svelte-1u7wkmb"),u(w,"class","svelte-1u7wkmb"),u(A,"class","svelte-1u7wkmb"),u(D,"class","svelte-1u7wkmb"),u(B,"class","svelte-1u7wkmb"),u(a,"class","circles svelte-1u7wkmb")},m(s,l){$(s,a,l),f(a,e),f(a,m),f(a,i),f(a,v),f(a,d),f(a,p),f(a,g),f(a,E),f(a,b),f(a,L),f(a,k),f(a,I),f(a,w),f(a,x),f(a,A),f(a,j),f(a,D),f(a,H),f(a,B)},p:h,i:h,o:h,d(s){s&&n(a)}}}class G extends s{constructor(s){super(),a(this,s,null,B,e,{})}}function K(s){let a;return{c(){a=i("Blog")},l(s){a=d(s,"Blog")},m(s,e){$(s,a,e)},d(s){s&&n(a)}}}function V(s){let a;return{c(){a=i("About")},l(s){a=d(s,"About")},m(s,e){$(s,a,e)},d(s){s&&n(a)}}}function y(s){let a,e,h,k,I,w,x,A,D,H,B,y,N;return e=new G({}),D=new j({props:{href:"/blog",color:"LIGHT",$$slots:{default:[K]},$$scope:{ctx:s}}}),B=new j({props:{href:"/about",color:"LIGHT",$$slots:{default:[V]},$$scope:{ctx:s}}}),{c(){a=l("header"),m(e.$$.fragment),h=t(),k=l("nav"),I=l("a"),w=i("Kasper Laursen"),x=t(),A=l("div"),m(D.$$.fragment),H=t(),m(B.$$.fragment),this.h()},l(s){a=c(s,"HEADER",{class:!0});var l=r(a);v(e.$$.fragment,l),h=o(l),k=c(l,"NAV",{class:!0});var t=r(k);I=c(t,"A",{href:!0,class:!0});var u=r(I);w=d(u,"Kasper Laursen"),u.forEach(n),x=o(t),A=c(t,"DIV",{});var $=r(A);v(D.$$.fragment,$),H=o($),v(B.$$.fragment,$),$.forEach(n),t.forEach(n),l.forEach(n),this.h()},h(){u(I,"href","/"),u(I,"class","svelte-gahdru"),u(k,"class","svelte-gahdru"),u(a,"class",y=p(s[0])+" svelte-gahdru")},m(s,l){$(s,a,l),g(e,a,null),f(a,h),f(a,k),f(k,I),f(I,w),f(k,x),f(k,A),g(D,A,null),f(A,H),g(B,A,null),N=!0},p(s,[e]){const l={};2&e&&(l.$$scope={dirty:e,ctx:s}),D.$set(l);const t={};2&e&&(t.$$scope={dirty:e,ctx:s}),B.$set(t),(!N||1&e&&y!==(y=p(s[0])+" svelte-gahdru"))&&u(a,"class",y)},i(s){N||(E(e.$$.fragment,s),E(D.$$.fragment,s),E(B.$$.fragment,s),N=!0)},o(s){b(e.$$.fragment,s),b(D.$$.fragment,s),b(B.$$.fragment,s),N=!1},d(s){s&&n(a),L(e),L(D),L(B)}}}function N(s,a,e){let l;return k(s,D,(s=>e(0,l=s))),[l]}class S extends s{constructor(s){super(),a(this,s,N,y,e,{})}}function T(s){let a,e,h,i,d;e=new S({});const p=s[2].default,k=I(p,s,s[1],null);return{c(){a=l("div"),m(e.$$.fragment),h=t(),i=l("main"),k&&k.c(),this.h()},l(s){a=c(s,"DIV",{class:!0});var l=r(a);v(e.$$.fragment,l),h=o(l),i=c(l,"MAIN",{class:!0});var t=r(i);k&&k.l(t),t.forEach(n),l.forEach(n),this.h()},h(){u(i,"class","svelte-1son41p"),u(a,"class",s[0])},m(s,l){$(s,a,l),g(e,a,null),f(a,h),f(a,i),k&&k.m(i,null),d=!0},p(s,[e]){k&&k.p&&(!d||2&e)&&w(k,p,s,s[1],d?A(p,s[1],e,null):x(s[1]),null),(!d||1&e)&&u(a,"class",s[0])},i(s){d||(E(e.$$.fragment,s),E(k,s),d=!0)},o(s){b(e.$$.fragment,s),b(k,s),d=!1},d(s){s&&n(a),L(e),k&&k.d(s)}}}function F(s,a,e){let l;k(s,H,(s=>e(0,l=s)));let{$$slots:t={},$$scope:c}=a;return s.$$set=s=>{"$$scope"in s&&e(1,c=s.$$scope)},[l,c,t]}class J extends s{constructor(s){super(),a(this,s,F,T,e,{})}}export{J as default};
