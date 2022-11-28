import{S as e,i as a,s as t,B as o,k as r,j as n,N as s,d as c,n as i,m as l,f as p,o as h,p as d,q as u,x as f,u as g,v as m,a9 as E,e as v,t as y,c as w,a as P,g as b,b as D,M as C,D as I,E as k}from"../../chunks/vendor-4c629592.js";import{P as x}from"../../chunks/_post-d30c22dd.js";function O(e){let a,t,o,n,s,l,h,d,u,f,g,m,E,x,O,R,S,T,L,$,H,M,N,U,A,q,B,Y,j,V,W,G,K,z,_,F,J,Q,X,Z,ee,ae,te,oe,re,ne,se,ce,ie,le,pe,he,de,ue,fe,ge,me,Ee,ve,ye,we,Pe,be,De,Ce,Ie,ke,xe,Oe,Re,Se,Te,Le,$e,He,Me,Ne,Ue,Ae,qe,Be,Ye,je,Ve,We,Ge,Ke,ze,_e,Fe,Je,Qe,Xe,Ze,ea,aa,ta,oa,ra,na,sa,ca,ia,la,pa,ha,da,ua,fa,ga,ma,Ea,va,ya,wa,Pa,ba,Da,Ca,Ia,ka,xa,Oa,Ra,Sa,Ta,La,$a,Ha,Ma,Na,Ua,Aa,qa,Ba,Ya,ja,Va,Wa,Ga,Ka,za,_a,Fa,Ja,Qa,Xa,Za,et,at,tt,ot,rt,nt,st,ct,it,lt,pt,ht,dt,ut,ft;return{c(){a=v("h1"),t=y("Using an external camera in octoprint"),o=r(),n=v("p"),s=y("Even tho I have a pi cam connected to my octopint, I wanted to make higher quality timelapses."),l=v("br"),h=y("\nTo make that happen, I found my old Canon EOS 600D."),d=v("br"),u=y("\nWe are going to be using gphoto2 to interface with the camera, "),f=v("a"),g=y("you can find a list of supproted cameras here"),m=y("."),E=r(),x=v("section"),O=v("div"),R=v("h3"),S=y("Octolapse + DSLR"),T=r(),L=v("video"),$=v("source"),M=y("\n        Your browser does not support the video tag."),N=r(),U=v("div"),A=v("h3"),q=y("Default + pi camera"),B=r(),Y=v("video"),j=v("source"),W=y("\n        Your browser does not support the video tag."),G=r(),K=v("p"),z=y("Okay lets get started on setting it all up."),_=r(),F=v("p"),J=y("I assume that you already have octoprint running on a PI connected to your 3D printer."),Q=v("br"),X=y("\nIf not, follow the "),Z=v("a"),ee=y("official documentation"),ae=y("."),te=r(),oe=v("p"),re=y("We need to connect to the pi via ssh to install gphoto2."),ne=v("br"),se=y("\nIf you did not enable ssh on installation you can do so by adding an empty file named "),ce=v("code"),ie=y("ssh"),le=y(" (no extnesion) to to root of the SD Card."),pe=r(),he=v("p"),de=y("Now open a terminal and follow the steps below."),ue=r(),fe=v("p"),ge=y("Connect to the PI via ssh"),me=r(),Ee=v("pre"),ve=r(),ye=v("p"),we=y("(Default pasword is "),Pe=v("code"),be=y("raspberry"),De=y(")"),Ce=r(),Ie=v("p"),ke=y("Install gphoto2"),xe=r(),Oe=v("pre"),Re=r(),Se=v("p"),Te=y("Now connect the camera to the PI and test gphoto2"),Le=r(),$e=v("pre"),He=r(),Me=v("small"),Ne=y("You should see your camera model listed"),Ue=r(),Ae=v("p"),qe=y("Take a picture"),Be=r(),Ye=v("pre"),je=r(),Ve=v("p"),We=y("Navigate to the script folder"),Ge=r(),Ke=v("pre"),ze=r(),_e=v("p"),Fe=y("Create a new script to take a picture"),Je=r(),Qe=v("pre"),Xe=r(),Ze=v("p"),ea=y("Add the following to the file:"),aa=r(),ta=v("pre"),oa=r(),ra=v("p"),na=y("press "),sa=v("code"),ca=y("crtl+O"),ia=y(" then "),la=v("code"),pa=y("enter"),ha=y(" and then "),da=v("code"),ua=y("ctrl+x"),fa=y(" and "),ga=v("code"),ma=y("enter"),Ea=y(" to save the file."),va=r(),ya=v("p"),wa=y("Add execute permission to the script"),Pa=r(),ba=v("pre"),Da=r(),Ca=v("p"),Ia=y("Now try to take a picture using the script"),ka=r(),xa=v("pre"),Oa=r(),Ra=v("p"),Sa=y("Now lets setup octolapse in octoprint to use the script."),Ta=v("br"),La=y("\nIf you have not already, install the octolapse plugin through the plugin manager in the octoprint UI.\nAfter installing configure your printer (or use a preset)."),$a=r(),Ha=v("p"),Ma=y("Go to "),Na=v("code"),Ua=y("octolapse"),Aa=y(" -> "),qa=v("code"),Ba=y("cameras"),Ya=y(" -> "),ja=v("code"),Va=y("Add profile"),Wa=y("."),Ga=v("br"),Ka=y("\nUnder "),za=v("code"),_a=y("Camera Type"),Fa=y(" select "),Ja=v("code"),Qa=y("External Camera - Script"),Xa=y("."),Za=v("br"),et=y("\nThen under "),at=v("code"),tt=y("External Camera Setup - Script"),ot=y(" add the path to the snapshot.sh file"),rt=r(),nt=v("pre"),st=r(),ct=v("p"),it=y("Use the test button to make sure it works."),lt=r(),pt=v("p"),ht=y("Scroll to the bottom of the window and save the settings."),dt=r(),ut=v("p"),ft=y("Under the octolaps tab you can now select your new camera and it will take a picture on each layer!"),this.h()},l(e){a=w(e,"H1",{});var r=P(a);t=b(r,"Using an external camera in octoprint"),r.forEach(c),o=i(e),n=w(e,"P",{});var p=P(n);s=b(p,"Even tho I have a pi cam connected to my octopint, I wanted to make higher quality timelapses."),l=w(p,"BR",{}),h=b(p,"\nTo make that happen, I found my old Canon EOS 600D."),d=w(p,"BR",{}),u=b(p,"\nWe are going to be using gphoto2 to interface with the camera, "),f=w(p,"A",{href:!0,rel:!0});var v=P(f);g=b(v,"you can find a list of supproted cameras here"),v.forEach(c),m=b(p,"."),p.forEach(c),E=i(e),x=w(e,"SECTION",{class:!0});var y=P(x);O=w(y,"DIV",{class:!0});var D=P(O);R=w(D,"H3",{});var C=P(R);S=b(C,"Octolapse + DSLR"),C.forEach(c),T=i(D),L=w(D,"VIDEO",{class:!0});var I=P(L);$=w(I,"SOURCE",{src:!0,type:!0}),M=b(I,"\n        Your browser does not support the video tag."),I.forEach(c),D.forEach(c),N=i(y),U=w(y,"DIV",{class:!0});var k=P(U);A=w(k,"H3",{});var H=P(A);q=b(H,"Default + pi camera"),H.forEach(c),B=i(k),Y=w(k,"VIDEO",{class:!0});var V=P(Y);j=w(V,"SOURCE",{src:!0,type:!0}),W=b(V,"\n        Your browser does not support the video tag."),V.forEach(c),k.forEach(c),y.forEach(c),G=i(e),K=w(e,"P",{});var gt=P(K);z=b(gt,"Okay lets get started on setting it all up."),gt.forEach(c),_=i(e),F=w(e,"P",{});var mt=P(F);J=b(mt,"I assume that you already have octoprint running on a PI connected to your 3D printer."),Q=w(mt,"BR",{}),X=b(mt,"\nIf not, follow the "),Z=w(mt,"A",{href:!0,rel:!0});var Et=P(Z);ee=b(Et,"official documentation"),Et.forEach(c),ae=b(mt,"."),mt.forEach(c),te=i(e),oe=w(e,"P",{});var vt=P(oe);re=b(vt,"We need to connect to the pi via ssh to install gphoto2."),ne=w(vt,"BR",{}),se=b(vt,"\nIf you did not enable ssh on installation you can do so by adding an empty file named "),ce=w(vt,"CODE",{});var yt=P(ce);ie=b(yt,"ssh"),yt.forEach(c),le=b(vt," (no extnesion) to to root of the SD Card."),vt.forEach(c),pe=i(e),he=w(e,"P",{});var wt=P(he);de=b(wt,"Now open a terminal and follow the steps below."),wt.forEach(c),ue=i(e),fe=w(e,"P",{});var Pt=P(fe);ge=b(Pt,"Connect to the PI via ssh"),Pt.forEach(c),me=i(e),Ee=w(e,"PRE",{class:!0}),P(Ee).forEach(c),ve=i(e),ye=w(e,"P",{});var bt=P(ye);we=b(bt,"(Default pasword is "),Pe=w(bt,"CODE",{});var Dt=P(Pe);be=b(Dt,"raspberry"),Dt.forEach(c),De=b(bt,")"),bt.forEach(c),Ce=i(e),Ie=w(e,"P",{});var Ct=P(Ie);ke=b(Ct,"Install gphoto2"),Ct.forEach(c),xe=i(e),Oe=w(e,"PRE",{class:!0}),P(Oe).forEach(c),Re=i(e),Se=w(e,"P",{});var It=P(Se);Te=b(It,"Now connect the camera to the PI and test gphoto2"),It.forEach(c),Le=i(e),$e=w(e,"PRE",{class:!0}),P($e).forEach(c),He=i(e),Me=w(e,"SMALL",{});var kt=P(Me);Ne=b(kt,"You should see your camera model listed"),kt.forEach(c),Ue=i(e),Ae=w(e,"P",{});var xt=P(Ae);qe=b(xt,"Take a picture"),xt.forEach(c),Be=i(e),Ye=w(e,"PRE",{class:!0}),P(Ye).forEach(c),je=i(e),Ve=w(e,"P",{});var Ot=P(Ve);We=b(Ot,"Navigate to the script folder"),Ot.forEach(c),Ge=i(e),Ke=w(e,"PRE",{class:!0}),P(Ke).forEach(c),ze=i(e),_e=w(e,"P",{});var Rt=P(_e);Fe=b(Rt,"Create a new script to take a picture"),Rt.forEach(c),Je=i(e),Qe=w(e,"PRE",{class:!0}),P(Qe).forEach(c),Xe=i(e),Ze=w(e,"P",{});var St=P(Ze);ea=b(St,"Add the following to the file:"),St.forEach(c),aa=i(e),ta=w(e,"PRE",{class:!0}),P(ta).forEach(c),oa=i(e),ra=w(e,"P",{});var Tt=P(ra);na=b(Tt,"press "),sa=w(Tt,"CODE",{});var Lt=P(sa);ca=b(Lt,"crtl+O"),Lt.forEach(c),ia=b(Tt," then "),la=w(Tt,"CODE",{});var $t=P(la);pa=b($t,"enter"),$t.forEach(c),ha=b(Tt," and then "),da=w(Tt,"CODE",{});var Ht=P(da);ua=b(Ht,"ctrl+x"),Ht.forEach(c),fa=b(Tt," and "),ga=w(Tt,"CODE",{});var Mt=P(ga);ma=b(Mt,"enter"),Mt.forEach(c),Ea=b(Tt," to save the file."),Tt.forEach(c),va=i(e),ya=w(e,"P",{});var Nt=P(ya);wa=b(Nt,"Add execute permission to the script"),Nt.forEach(c),Pa=i(e),ba=w(e,"PRE",{class:!0}),P(ba).forEach(c),Da=i(e),Ca=w(e,"P",{});var Ut=P(Ca);Ia=b(Ut,"Now try to take a picture using the script"),Ut.forEach(c),ka=i(e),xa=w(e,"PRE",{class:!0}),P(xa).forEach(c),Oa=i(e),Ra=w(e,"P",{});var At=P(Ra);Sa=b(At,"Now lets setup octolapse in octoprint to use the script."),Ta=w(At,"BR",{}),La=b(At,"\nIf you have not already, install the octolapse plugin through the plugin manager in the octoprint UI.\nAfter installing configure your printer (or use a preset)."),At.forEach(c),$a=i(e),Ha=w(e,"P",{});var qt=P(Ha);Ma=b(qt,"Go to "),Na=w(qt,"CODE",{});var Bt=P(Na);Ua=b(Bt,"octolapse"),Bt.forEach(c),Aa=b(qt," -> "),qa=w(qt,"CODE",{});var Yt=P(qa);Ba=b(Yt,"cameras"),Yt.forEach(c),Ya=b(qt," -> "),ja=w(qt,"CODE",{});var jt=P(ja);Va=b(jt,"Add profile"),jt.forEach(c),Wa=b(qt,"."),Ga=w(qt,"BR",{}),Ka=b(qt,"\nUnder "),za=w(qt,"CODE",{});var Vt=P(za);_a=b(Vt,"Camera Type"),Vt.forEach(c),Fa=b(qt," select "),Ja=w(qt,"CODE",{});var Wt=P(Ja);Qa=b(Wt,"External Camera - Script"),Wt.forEach(c),Xa=b(qt,"."),Za=w(qt,"BR",{}),et=b(qt,"\nThen under "),at=w(qt,"CODE",{});var Gt=P(at);tt=b(Gt,"External Camera Setup - Script"),Gt.forEach(c),ot=b(qt," add the path to the snapshot.sh file"),qt.forEach(c),rt=i(e),nt=w(e,"PRE",{class:!0}),P(nt).forEach(c),st=i(e),ct=w(e,"P",{});var Kt=P(ct);it=b(Kt,"Use the test button to make sure it works."),Kt.forEach(c),lt=i(e),pt=w(e,"P",{});var zt=P(pt);ht=b(zt,"Scroll to the bottom of the window and save the settings."),zt.forEach(c),dt=i(e),ut=w(e,"P",{});var _t=P(ut);ft=b(_t,"Under the octolaps tab you can now select your new camera and it will take a picture on each layer!"),_t.forEach(c),this.h()},h(){D(f,"href","http://www.gphoto.org/doc/remote/"),D(f,"rel","nofollow"),C($.src,H="/posts/octoprint-timelapse-using-external-camera/after.mp4")||D($,"src","/posts/octoprint-timelapse-using-external-camera/after.mp4"),D($,"type","video/mp4"),L.controls=!0,D(L,"class","svelte-1aqpauk"),D(O,"class","svelte-1aqpauk"),C(j.src,V="/posts/octoprint-timelapse-using-external-camera/before.mp4")||D(j,"src","/posts/octoprint-timelapse-using-external-camera/before.mp4"),D(j,"type","video/mp4"),Y.controls=!0,D(Y,"class","svelte-1aqpauk"),D(U,"class","svelte-1aqpauk"),D(x,"class","svelte-1aqpauk"),D(Z,"href","https://octoprint.org/download/"),D(Z,"rel","nofollow"),D(Ee,"class","language-undefined"),D(Oe,"class","language-undefined"),D($e,"class","language-undefined"),D(Ye,"class","language-undefined"),D(Ke,"class","language-undefined"),D(Qe,"class","language-undefined"),D(ta,"class","language-undefined"),D(ba,"class","language-undefined"),D(xa,"class","language-undefined"),D(nt,"class","language-undefined")},m(e,r){p(e,a,r),I(a,t),p(e,o,r),p(e,n,r),I(n,s),I(n,l),I(n,h),I(n,d),I(n,u),I(n,f),I(f,g),I(n,m),p(e,E,r),p(e,x,r),I(x,O),I(O,R),I(R,S),I(O,T),I(O,L),I(L,$),I(L,M),I(x,N),I(x,U),I(U,A),I(A,q),I(U,B),I(U,Y),I(Y,j),I(Y,W),p(e,G,r),p(e,K,r),I(K,z),p(e,_,r),p(e,F,r),I(F,J),I(F,Q),I(F,X),I(F,Z),I(Z,ee),I(F,ae),p(e,te,r),p(e,oe,r),I(oe,re),I(oe,ne),I(oe,se),I(oe,ce),I(ce,ie),I(oe,le),p(e,pe,r),p(e,he,r),I(he,de),p(e,ue,r),p(e,fe,r),I(fe,ge),p(e,me,r),p(e,Ee,r),Ee.innerHTML='<code class="language-undefined">ssh pi@&#123;your octopi ip&#125;</code>',p(e,ve,r),p(e,ye,r),I(ye,we),I(ye,Pe),I(Pe,be),I(ye,De),p(e,Ce,r),p(e,Ie,r),I(Ie,ke),p(e,xe,r),p(e,Oe,r),Oe.innerHTML='<code class="language-undefined">sudo apt-get install gphoto2</code>',p(e,Re,r),p(e,Se,r),I(Se,Te),p(e,Le,r),p(e,$e,r),$e.innerHTML='<code class="language-undefined">gphoto2 --auto-detect</code>',p(e,He,r),p(e,Me,r),I(Me,Ne),p(e,Ue,r),p(e,Ae,r),I(Ae,qe),p(e,Be,r),p(e,Ye,r),Ye.innerHTML='<code class="language-undefined">gphoto2 --auto-detect --set-config capturetarget=1 --trigger-capture</code>',p(e,je,r),p(e,Ve,r),I(Ve,We),p(e,Ge,r),p(e,Ke,r),Ke.innerHTML='<code class="language-undefined">cd scripts</code>',p(e,ze,r),p(e,_e,r),I(_e,Fe),p(e,Je,r),p(e,Qe,r),Qe.innerHTML='<code class="language-undefined">sudo nano snapshot.sh</code>',p(e,Xe,r),p(e,Ze,r),I(Ze,ea),p(e,aa,r),p(e,ta,r),ta.innerHTML='<code class="language-undefined">#!/bin/sh\ngphoto2 --auto-detect --set-config capturetarget=1 --trigger-capture</code>',p(e,oa,r),p(e,ra,r),I(ra,na),I(ra,sa),I(sa,ca),I(ra,ia),I(ra,la),I(la,pa),I(ra,ha),I(ra,da),I(da,ua),I(ra,fa),I(ra,ga),I(ga,ma),I(ra,Ea),p(e,va,r),p(e,ya,r),I(ya,wa),p(e,Pa,r),p(e,ba,r),ba.innerHTML='<code class="language-undefined">chmod +x snapshot.sh</code>',p(e,Da,r),p(e,Ca,r),I(Ca,Ia),p(e,ka,r),p(e,xa,r),xa.innerHTML='<code class="language-undefined">./snapshot.sh</code>',p(e,Oa,r),p(e,Ra,r),I(Ra,Sa),I(Ra,Ta),I(Ra,La),p(e,$a,r),p(e,Ha,r),I(Ha,Ma),I(Ha,Na),I(Na,Ua),I(Ha,Aa),I(Ha,qa),I(qa,Ba),I(Ha,Ya),I(Ha,ja),I(ja,Va),I(Ha,Wa),I(Ha,Ga),I(Ha,Ka),I(Ha,za),I(za,_a),I(Ha,Fa),I(Ha,Ja),I(Ja,Qa),I(Ha,Xa),I(Ha,Za),I(Ha,et),I(Ha,at),I(at,tt),I(Ha,ot),p(e,rt,r),p(e,nt,r),nt.innerHTML='<code class="language-undefined">/home/pi/scripts/snapshot.sh</code>',p(e,st,r),p(e,ct,r),I(ct,it),p(e,lt,r),p(e,pt,r),I(pt,ht),p(e,dt,r),p(e,ut,r),I(ut,ft)},p:k,d(e){e&&c(a),e&&c(o),e&&c(n),e&&c(E),e&&c(x),e&&c(G),e&&c(K),e&&c(_),e&&c(F),e&&c(te),e&&c(oe),e&&c(pe),e&&c(he),e&&c(ue),e&&c(fe),e&&c(me),e&&c(Ee),e&&c(ve),e&&c(ye),e&&c(Ce),e&&c(Ie),e&&c(xe),e&&c(Oe),e&&c(Re),e&&c(Se),e&&c(Le),e&&c($e),e&&c(He),e&&c(Me),e&&c(Ue),e&&c(Ae),e&&c(Be),e&&c(Ye),e&&c(je),e&&c(Ve),e&&c(Ge),e&&c(Ke),e&&c(ze),e&&c(_e),e&&c(Je),e&&c(Qe),e&&c(Xe),e&&c(Ze),e&&c(aa),e&&c(ta),e&&c(oa),e&&c(ra),e&&c(va),e&&c(ya),e&&c(Pa),e&&c(ba),e&&c(Da),e&&c(Ca),e&&c(ka),e&&c(xa),e&&c(Oa),e&&c(Ra),e&&c($a),e&&c(Ha),e&&c(rt),e&&c(nt),e&&c(st),e&&c(ct),e&&c(lt),e&&c(pt),e&&c(dt),e&&c(ut)}}}function R(e){let a,t,E,v;document.title=a=T+" | Kasper Laursen";const y=[e[0],S];let w={$$slots:{default:[O]},$$scope:{ctx:e}};for(let r=0;r<y.length;r+=1)w=o(w,y[r]);return E=new x({props:w}),{c(){t=r(),n(E.$$.fragment)},l(e){s('[data-svelte="svelte-189ezbx"]',document.head).forEach(c),t=i(e),l(E.$$.fragment,e)},m(e,a){p(e,t,a),h(E,e,a),v=!0},p(e,[t]){(!v||0&t)&&a!==(a=T+" | Kasper Laursen")&&(document.title=a);const o=1&t?d(y,[1&t&&u(e[0]),0&t&&u(S)]):{};2&t&&(o.$$scope={dirty:t,ctx:e}),E.$set(o)},i(e){v||(f(E.$$.fragment,e),v=!0)},o(e){g(E.$$.fragment,e),v=!1},d(e){e&&c(t),m(E,e)}}}const S={title:"How to use an external camera in octoprint",teaser:"Setting up octoprint on a Raspberry pi to use an external DSLR for making timelapses",date:"2021-12-11",layout:"post",image:"/posts/octoprint-timelapse-using-external-camera/thumb.jpg",categories:["Making","Other"]},{title:T,teaser:L,date:$,layout:H,image:M,categories:N}=S;function U(e,a,t){return e.$$set=e=>{t(0,a=o(o({},a),E(e)))},[a=E(a)]}class A extends e{constructor(e){super(),a(this,e,U,R,t,{})}}export{A as default,S as metadata};
