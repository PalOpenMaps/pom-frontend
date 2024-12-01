import{S as Oe,i as je,s as Ie,L as Se,k as w,a as P,l as b,m as V,h as o,c as M,n as c,p as Me,b as v,D as _,M as Ae,N as Te,O as ke,g as I,d as S,q as N,y,C as ye,r as q,z as C,K as ce,A as H,u as z,B as L,F as be,G as Ee}from"../chunks/index.2d084d55.js";import{g as Ce}from"../chunks/navigation.d6318338.js";import{b as j}from"../chunks/paths.81d58202.js";import{b as He}from"../chunks/config.23adde73.js";import{S as Le}from"../chunks/Select.c554dd7b.js";import{I as Ve}from"../chunks/Icon.b360af8d.js";async function Ne({parent:l}){return{places:(await l()).places}}const tt=Object.freeze(Object.defineProperty({__proto__:null,load:Ne},Symbol.toStringTag,{value:"Module"}));function qe(l){let a,s,t,n,$;const m=l[2].default,p=Se(m,l,l[1],null);return{c(){a=w("div"),s=w("div"),t=P(),n=w("div"),p&&p.c(),this.h()},l(i){a=b(i,"DIV",{class:!0});var u=V(a);s=b(u,"DIV",{class:!0}),V(s).forEach(o),t=M(u),n=b(u,"DIV",{class:!0});var D=V(n);p&&p.l(D),D.forEach(o),u.forEach(o),this.h()},h(){c(s,"class","tile-gradient svelte-u5kurr"),c(n,"class","tile-text svelte-u5kurr"),c(a,"class","tile svelte-u5kurr"),Me(a,"background-image",l[0]?`url("${l[0]}")`:null)},m(i,u){v(i,a,u),_(a,s),_(a,t),_(a,n),p&&p.m(n,null),$=!0},p(i,[u]){p&&p.p&&(!$||u&2)&&Ae(p,m,i,i[1],$?ke(m,i[1],u,null):Te(i[1]),null),u&1&&Me(a,"background-image",i[0]?`url("${i[0]}")`:null)},i(i){$||(I(p,i),$=!0)},o(i){S(p,i),$=!1},d(i){i&&o(a),p&&p.d(i)}}}function ze(l,a,s){let{$$slots:t={},$$scope:n}=a,{image:$=null}=a;return l.$$set=m=>{"image"in m&&s(0,$=m.image),"$$scope"in m&&s(1,n=m.$$scope)},[$,n,t]}class te extends Oe{constructor(a){super(),je(this,a,ze,qe,Ie,{image:0})}}function Be(l){let a=l[2]("Explore historical maps from the 1870s onwards")+"",s;return{c(){s=N(a)},l(t){s=q(t,a)},m(t,n){v(t,s,n)},p(t,n){n&4&&a!==(a=t[2]("Explore historical maps from the 1870s onwards")+"")&&z(s,a)},d(t){t&&o(s)}}}function Re(l){let a=l[2]("View data on over 2,000 places, past and present")+"",s;return{c(){s=N(a)},l(t){s=q(t,a)},m(t,n){v(t,s,n)},p(t,n){n&4&&a!==(a=t[2]("View data on over 2,000 places, past and present")+"")&&z(s,a)},d(t){t&&o(s)}}}function We(l){let a=l[2]("Download hundreds of historical map sheets")+"",s;return{c(){s=N(a)},l(t){s=q(t,a)},m(t,n){v(t,s,n)},p(t,n){n&4&&a!==(a=t[2]("Download hundreds of historical map sheets")+"")&&z(s,a)},d(t){t&&o(s)}}}function Fe(l){let a=l[2]("View past and present maps side-by-side")+"",s;return{c(){s=N(a)},l(t){s=q(t,a)},m(t,n){v(t,s,n)},p(t,n){n&4&&a!==(a=t[2]("View past and present maps side-by-side")+"")&&z(s,a)},d(t){t&&o(s)}}}function Ge(l){let a=l[2]("View the topography of Palestine in 3D")+"",s;return{c(){s=N(a)},l(t){s=q(t,a)},m(t,n){v(t,s,n)},p(t,n){n&4&&a!==(a=t[2]("View the topography of Palestine in 3D")+"")&&z(s,a)},d(t){t&&o(s)}}}function Ke(l){let a=l[2]("Overlay historical and present day maps")+"",s;return{c(){s=N(a)},l(t){s=q(t,a)},m(t,n){v(t,s,n)},p(t,n){n&4&&a!==(a=t[2]("Overlay historical and present day maps")+"")&&z(s,a)},d(t){t&&o(s)}}}function Je(l){let a,s,t,n,$,m,p=l[2]("Welcome to<br>Palestine Open Maps")+"",i,u,D=l[2]("Explore, search and download historical maps and spatial data on Palestine")+"",Q,U,f,d,A,X,ae=l[2]("Explore maps")+"",oe,ie,_e,O,J,Y,se=l[2]("Read more")+"",fe,pe,$e,Z,T,me,g,B,ge,R,de,W,ve,F,he,G,we,K,h;return document.title=a=l[2]("Palestine Open Maps"),A=new Ve({props:{type:"map",scale:1.5}}),J=new Ve({props:{type:"info",scale:1.5}}),T=new Le({props:{items:l[0].features.map(De).sort(l[9]),colorBorder:"#333",colorIndicator:"#333"}}),T.$on("select",l[7]),B=new te({props:{image:j+"/img/tile-map1870.jpg",$$slots:{default:[Be]},$$scope:{ctx:l}}}),R=new te({props:{image:j+"/img/tile-places.jpg",$$slots:{default:[Re]},$$scope:{ctx:l}}}),W=new te({props:{image:j+"/img/tile-map1946.jpg",$$slots:{default:[We]},$$scope:{ctx:l}}}),F=new te({props:{image:j+"/img/tile-splitscreen.jpg",$$slots:{default:[Fe]},$$scope:{ctx:l}}}),G=new te({props:{image:j+"/img/tile-map3d.jpg",$$slots:{default:[Ge]},$$scope:{ctx:l}}}),K=new te({props:{image:j+"/img/tile-overlay.jpg",$$slots:{default:[Ke]},$$scope:{ctx:l}}}),{c(){s=w("meta"),n=w("meta"),$=P(),m=w("h1"),i=P(),u=w("p"),Q=N(D),U=P(),f=w("div"),d=w("a"),y(A.$$.fragment),X=w("span"),oe=N(ae),_e=P(),O=w("a"),y(J.$$.fragment),Y=w("span"),fe=N(se),$e=P(),Z=w("div"),y(T.$$.fragment),me=P(),g=w("div"),y(B.$$.fragment),ge=P(),y(R.$$.fragment),de=P(),y(W.$$.fragment),ve=P(),y(F.$$.fragment),he=P(),y(G.$$.fragment),we=P(),y(K.$$.fragment),this.h()},l(e){const r=ye("svelte-a2m6cn",document.head);s=b(r,"META",{property:!0,content:!0}),n=b(r,"META",{property:!0,content:!0}),r.forEach(o),$=M(e),m=b(e,"H1",{class:!0});var ue=V(m);ue.forEach(o),i=M(e),u=b(e,"P",{class:!0});var le=V(u);Q=q(le,D),le.forEach(o),U=M(e),f=b(e,"DIV",{class:!0});var k=V(f);d=b(k,"A",{class:!0,href:!0});var x=V(d);C(A.$$.fragment,x),X=b(x,"SPAN",{class:!0});var ne=V(X);oe=q(ne,ae),ne.forEach(o),x.forEach(o),_e=M(k),O=b(k,"A",{class:!0,href:!0});var ee=V(O);C(J.$$.fragment,ee),Y=b(ee,"SPAN",{class:!0});var re=V(Y);fe=q(re,se),re.forEach(o),ee.forEach(o),$e=M(k),Z=b(k,"DIV",{class:!0});var Pe=V(Z);C(T.$$.fragment,Pe),Pe.forEach(o),k.forEach(o),me=M(e),g=b(e,"DIV",{class:!0});var E=V(g);C(B.$$.fragment,E),ge=M(E),C(R.$$.fragment,E),de=M(E),C(W.$$.fragment,E),ve=M(E),C(F.$$.fragment,E),he=M(E),C(G.$$.fragment,E),we=M(E),C(K.$$.fragment,E),E.forEach(o),this.h()},h(){c(s,"property","og:title"),c(s,"content",t=l[2]("Palestine Open Maps")),c(n,"property","og:image"),c(n,"content",He+"/img/haifa-crop.jpg"),c(m,"class","svelte-15v3o4w"),c(u,"class","text-big svelte-15v3o4w"),c(X,"class","svelte-15v3o4w"),c(d,"class","btn btn-primary svelte-15v3o4w"),c(d,"href",ie=j+"/"+l[1]+"/maps/"),ce(d,"rtl",l[3]),c(Y,"class","svelte-15v3o4w"),c(O,"class","btn svelte-15v3o4w"),c(O,"href",pe=j+"/"+l[1]+"/about/"),ce(O,"rtl",l[3]),c(Z,"class","select svelte-15v3o4w"),c(f,"class","buttons svelte-15v3o4w"),c(g,"class","grid svelte-15v3o4w")},m(e,r){_(document.head,s),_(document.head,n),v(e,$,r),v(e,m,r),m.innerHTML=p,v(e,i,r),v(e,u,r),_(u,Q),v(e,U,r),v(e,f,r),_(f,d),H(A,d,null),_(d,X),_(X,oe),_(f,_e),_(f,O),H(J,O,null),_(O,Y),_(Y,fe),_(f,$e),_(f,Z),H(T,Z,null),v(e,me,r),v(e,g,r),H(B,g,null),_(g,ge),H(R,g,null),_(g,de),H(W,g,null),_(g,ve),H(F,g,null),_(g,he),H(G,g,null),_(g,we),H(K,g,null),h=!0},p(e,[r]){(!h||r&4)&&a!==(a=e[2]("Palestine Open Maps"))&&(document.title=a),(!h||r&4&&t!==(t=e[2]("Palestine Open Maps")))&&c(s,"content",t),(!h||r&4)&&p!==(p=e[2]("Welcome to<br>Palestine Open Maps")+"")&&(m.innerHTML=p),(!h||r&4)&&D!==(D=e[2]("Explore, search and download historical maps and spatial data on Palestine")+"")&&z(Q,D),(!h||r&4)&&ae!==(ae=e[2]("Explore maps")+"")&&z(oe,ae),(!h||r&2&&ie!==(ie=j+"/"+e[1]+"/maps/"))&&c(d,"href",ie),(!h||r&8)&&ce(d,"rtl",e[3]),(!h||r&4)&&se!==(se=e[2]("Read more")+"")&&z(fe,se),(!h||r&2&&pe!==(pe=j+"/"+e[1]+"/about/"))&&c(O,"href",pe),(!h||r&8)&&ce(O,"rtl",e[3]);const ue={};r&3&&(ue.items=e[0].features.map(De).sort(e[9])),T.$set(ue);const le={};r&1028&&(le.$$scope={dirty:r,ctx:e}),B.$set(le);const k={};r&1028&&(k.$$scope={dirty:r,ctx:e}),R.$set(k);const x={};r&1028&&(x.$$scope={dirty:r,ctx:e}),W.$set(x);const ne={};r&1028&&(ne.$$scope={dirty:r,ctx:e}),F.$set(ne);const ee={};r&1028&&(ee.$$scope={dirty:r,ctx:e}),G.$set(ee);const re={};r&1028&&(re.$$scope={dirty:r,ctx:e}),K.$set(re)},i(e){h||(I(A.$$.fragment,e),I(J.$$.fragment,e),I(T.$$.fragment,e),I(B.$$.fragment,e),I(R.$$.fragment,e),I(W.$$.fragment,e),I(F.$$.fragment,e),I(G.$$.fragment,e),I(K.$$.fragment,e),h=!0)},o(e){S(A.$$.fragment,e),S(J.$$.fragment,e),S(T.$$.fragment,e),S(B.$$.fragment,e),S(R.$$.fragment,e),S(W.$$.fragment,e),S(F.$$.fragment,e),S(G.$$.fragment,e),S(K.$$.fragment,e),h=!1},d(e){o(s),o(n),e&&o($),e&&o(m),e&&o(i),e&&o(u),e&&o(U),e&&o(f),L(A),L(J),L(T),e&&o(me),e&&o(g),L(B),L(R),L(W),L(F),L(G),L(K)}}}const De=l=>l.properties;function Qe(l,a,s){let t,n,$,{data:m}=a,{places:p}=m;const i=be("lang");Ee(l,i,f=>s(1,t=f));const u=be("rtl");Ee(l,u,f=>s(3,$=f));const D=be("t");Ee(l,D,f=>s(2,n=f));function Q(f){let d=p.features.find(A=>A.properties.slug==f.detail.slug);Ce(`${j}/${t}/maps/${d.properties.slug}/`)}const U=(f,d)=>f[`name_${t}`].localeCompare(d[`name_${t}`]);return l.$$set=f=>{"data"in f&&s(8,m=f.data)},l.$$.update=()=>{l.$$.dirty&256&&s(0,{places:p}=m,p)},[p,t,n,$,i,u,D,Q,m,U]}class at extends Oe{constructor(a){super(),je(this,a,Qe,Je,Ie,{data:8})}}export{at as component,tt as universal};
