import{S as s,i as a,s as t,e as l,c as e,M as c,b as r,f as o,d as i,t as h,k as d,a as n,g as f,n as v,D as u,h as p,E as m}from"./vendor-d051d4e0.js";function g(s){let a,t,h;return{c(){a=l("img"),this.h()},l(s){a=e(s,"IMG",{src:!0,alt:!0,class:!0}),this.h()},h(){c(a.src,t=s[0].image)||r(a,"src",t),r(a,"alt",h=s[0].title),r(a,"class","svelte-z32dxt")},m(s,t){o(s,a,t)},p(s,l){1&l&&!c(a.src,t=s[0].image)&&r(a,"src",t),1&l&&h!==(h=s[0].title)&&r(a,"alt",h)},d(s){s&&i(a)}}}function x(s){let a,t,c,x,z,E,b,D,I,P,M,R,V,$=s[0].title+"",j=s[0].teaser+"",k=s[0].image&&g(s);return{c(){a=l("div"),t=l("a"),c=l("div"),x=l("h3"),z=h($),E=d(),b=l("p"),D=h(j),I=d(),P=l("p"),M=h("Read full post"),R=d(),k&&k.c(),this.h()},l(s){a=e(s,"DIV",{class:!0});var l=n(a);t=e(l,"A",{href:!0,class:!0});var r=n(t);c=e(r,"DIV",{class:!0});var o=n(c);x=e(o,"H3",{class:!0});var h=n(x);z=f(h,$),h.forEach(i),E=v(o),b=e(o,"P",{class:!0});var d=n(b);D=f(d,j),d.forEach(i),I=v(o),P=e(o,"P",{class:!0});var u=n(P);M=f(u,"Read full post"),u.forEach(i),o.forEach(i),R=v(r),k&&k.l(r),r.forEach(i),l.forEach(i),this.h()},h(){r(x,"class","svelte-z32dxt"),r(b,"class","svelte-z32dxt"),r(P,"class","cta svelte-z32dxt"),r(c,"class","svelte-z32dxt"),r(t,"href",V="/blog/"+s[0].slug),r(t,"class","svelte-z32dxt"),r(a,"class","svelte-z32dxt")},m(s,l){o(s,a,l),u(a,t),u(t,c),u(c,x),u(x,z),u(c,E),u(c,b),u(b,D),u(c,I),u(c,P),u(P,M),u(t,R),k&&k.m(t,null)},p(s,[a]){1&a&&$!==($=s[0].title+"")&&p(z,$),1&a&&j!==(j=s[0].teaser+"")&&p(D,j),s[0].image?k?k.p(s,a):(k=g(s),k.c(),k.m(t,null)):k&&(k.d(1),k=null),1&a&&V!==(V="/blog/"+s[0].slug)&&r(t,"href",V)},i:m,o:m,d(s){s&&i(a),k&&k.d()}}}function z(s,a,t){let{post:l}=a;return s.$$set=s=>{"post"in s&&t(0,l=s.post)},[l]}class E extends s{constructor(s){super(),a(this,s,z,x,t,{post:0})}}export{E as P};
