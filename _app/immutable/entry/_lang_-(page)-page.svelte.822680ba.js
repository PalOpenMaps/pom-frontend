import{S as Ie,i as Me,s as Oe,H as je,k as w,a as P,l as E,m as D,h as o,c as V,n as $,p as Pe,b as d,D as _,J as Se,K as ke,L as Ae,g as S,d as k,q as y,y as C,I as Te,r as B,z as H,C as ue,A as L,u as N,B as q,G as we,F as Ee}from"../chunks/index.5765017e.js";import{g as Ce}from"../chunks/navigation.666b6c84.js";import{b as O}from"../chunks/paths.c11d2a61.js";import{S as He}from"../chunks/Select.08de6c53.js";import{I as Ve}from"../chunks/Icon.8de05590.js";function Le(l){let s,a,t,n,m;const c=l[2].default,p=je(c,l,l[1],null);return{c(){s=w("div"),a=w("div"),t=P(),n=w("div"),p&&p.c(),this.h()},l(i){s=E(i,"DIV",{class:!0});var u=D(s);a=E(u,"DIV",{class:!0}),D(a).forEach(o),t=V(u),n=E(u,"DIV",{class:!0});var j=D(n);p&&p.l(j),j.forEach(o),u.forEach(o),this.h()},h(){$(a,"class","tile-gradient svelte-u5kurr"),$(n,"class","tile-text svelte-u5kurr"),$(s,"class","tile svelte-u5kurr"),Pe(s,"background-image",l[0]?`url("${l[0]}")`:null)},m(i,u){d(i,s,u),_(s,a),_(s,t),_(s,n),p&&p.m(n,null),m=!0},p(i,[u]){p&&p.p&&(!m||u&2)&&Se(p,c,i,i[1],m?Ae(c,i[1],u,null):ke(i[1]),null),u&1&&Pe(s,"background-image",i[0]?`url("${i[0]}")`:null)},i(i){m||(S(p,i),m=!0)},o(i){k(p,i),m=!1},d(i){i&&o(s),p&&p.d(i)}}}function qe(l,s,a){let{$$slots:t={},$$scope:n}=s,{image:m=null}=s;return l.$$set=c=>{"image"in c&&a(0,m=c.image),"$$scope"in c&&a(1,n=c.$$scope)},[m,n,t]}class ee extends Ie{constructor(s){super(),Me(this,s,qe,Le,Oe,{image:0})}}function ye(l){let s=l[2]("Explore historical maps from the 1870s onwards")+"",a;return{c(){a=y(s)},l(t){a=B(t,s)},m(t,n){d(t,a,n)},p(t,n){n&4&&s!==(s=t[2]("Explore historical maps from the 1870s onwards")+"")&&N(a,s)},d(t){t&&o(a)}}}function Be(l){let s=l[2]("View data on over 2,000 places, past and present")+"",a;return{c(){a=y(s)},l(t){a=B(t,s)},m(t,n){d(t,a,n)},p(t,n){n&4&&s!==(s=t[2]("View data on over 2,000 places, past and present")+"")&&N(a,s)},d(t){t&&o(a)}}}function Ne(l){let s=l[2]("Download hundreds of historical map sheets")+"",a;return{c(){a=y(s)},l(t){a=B(t,s)},m(t,n){d(t,a,n)},p(t,n){n&4&&s!==(s=t[2]("Download hundreds of historical map sheets")+"")&&N(a,s)},d(t){t&&o(a)}}}function Re(l){let s=l[2]("View past and present maps side-by-side")+"",a;return{c(){a=y(s)},l(t){a=B(t,s)},m(t,n){d(t,a,n)},p(t,n){n&4&&s!==(s=t[2]("View past and present maps side-by-side")+"")&&N(a,s)},d(t){t&&o(a)}}}function We(l){let s=l[2]("View the topography of Palestine in 3D")+"",a;return{c(){a=y(s)},l(t){a=B(t,s)},m(t,n){d(t,a,n)},p(t,n){n&4&&s!==(s=t[2]("View the topography of Palestine in 3D")+"")&&N(a,s)},d(t){t&&o(a)}}}function ze(l){let s=l[2]("Overlay historical and present day maps")+"",a;return{c(){a=y(s)},l(t){a=B(t,s)},m(t,n){d(t,a,n)},p(t,n){n&4&&s!==(s=t[2]("Overlay historical and present day maps")+"")&&N(a,s)},d(t){t&&o(a)}}}function Fe(l){let s,a,t,n,m,c=l[2]("Welcome to<br>Palestine Open Maps")+"",p,i,u=l[2]("Explore, search and download historical maps and spatial data on Palestine")+"",j,U,h,f,I,R,te=l[2]("Explore maps")+"",re,oe,$e,M,Q,X,se=l[2]("Read more")+"",ie,fe,_e,Y,A,pe,g,W,ce,z,ge,F,de,G,ve,J,he,K,v;return document.title=s=l[2]("Palestine Open Maps"),I=new Ve({props:{type:"map",scale:1.5}}),Q=new Ve({props:{type:"info",scale:1.5}}),A=new He({props:{items:l[0].features.map(De).sort(l[9]),colorBorder:"#333",colorIndicator:"#333"}}),A.$on("select",l[7]),W=new ee({props:{image:O+"/img/tile-map1870.jpg",$$slots:{default:[ye]},$$scope:{ctx:l}}}),z=new ee({props:{image:O+"/img/tile-places.jpg",$$slots:{default:[Be]},$$scope:{ctx:l}}}),F=new ee({props:{image:O+"/img/tile-map1946.jpg",$$slots:{default:[Ne]},$$scope:{ctx:l}}}),G=new ee({props:{image:O+"/img/tile-splitscreen.jpg",$$slots:{default:[Re]},$$scope:{ctx:l}}}),J=new ee({props:{image:O+"/img/tile-map3d.jpg",$$slots:{default:[We]},$$scope:{ctx:l}}}),K=new ee({props:{image:O+"/img/tile-overlay.jpg",$$slots:{default:[ze]},$$scope:{ctx:l}}}),{c(){a=w("meta"),n=P(),m=w("h1"),p=P(),i=w("p"),j=y(u),U=P(),h=w("div"),f=w("a"),C(I.$$.fragment),R=w("span"),re=y(te),$e=P(),M=w("a"),C(Q.$$.fragment),X=w("span"),ie=y(se),_e=P(),Y=w("div"),C(A.$$.fragment),pe=P(),g=w("div"),C(W.$$.fragment),ce=P(),C(z.$$.fragment),ge=P(),C(F.$$.fragment),de=P(),C(G.$$.fragment),ve=P(),C(J.$$.fragment),he=P(),C(K.$$.fragment),this.h()},l(e){const r=Te("svelte-ypvg3j",document.head);a=E(r,"META",{property:!0,content:!0}),r.forEach(o),n=V(e),m=E(e,"H1",{class:!0});var me=D(m);me.forEach(o),p=V(e),i=E(e,"P",{class:!0});var ae=D(i);j=B(ae,u),ae.forEach(o),U=V(e),h=E(e,"DIV",{class:!0});var T=D(h);f=E(T,"A",{class:!0,href:!0});var Z=D(f);H(I.$$.fragment,Z),R=E(Z,"SPAN",{class:!0});var le=D(R);re=B(le,te),le.forEach(o),Z.forEach(o),$e=V(T),M=E(T,"A",{class:!0,href:!0});var x=D(M);H(Q.$$.fragment,x),X=E(x,"SPAN",{class:!0});var ne=D(X);ie=B(ne,se),ne.forEach(o),x.forEach(o),_e=V(T),Y=E(T,"DIV",{class:!0});var be=D(Y);H(A.$$.fragment,be),be.forEach(o),T.forEach(o),pe=V(e),g=E(e,"DIV",{class:!0});var b=D(g);H(W.$$.fragment,b),ce=V(b),H(z.$$.fragment,b),ge=V(b),H(F.$$.fragment,b),de=V(b),H(G.$$.fragment,b),ve=V(b),H(J.$$.fragment,b),he=V(b),H(K.$$.fragment,b),b.forEach(o),this.h()},h(){$(a,"property","og:title"),$(a,"content",t=l[2]("Palestine Open Maps")),$(m,"class","svelte-15v3o4w"),$(i,"class","text-big svelte-15v3o4w"),$(R,"class","svelte-15v3o4w"),$(f,"class","btn btn-primary svelte-15v3o4w"),$(f,"href",oe=O+"/"+l[1]+"/maps/"),ue(f,"rtl",l[3]),$(X,"class","svelte-15v3o4w"),$(M,"class","btn svelte-15v3o4w"),$(M,"href",fe=O+"/"+l[1]+"/about/"),ue(M,"rtl",l[3]),$(Y,"class","select svelte-15v3o4w"),$(h,"class","buttons svelte-15v3o4w"),$(g,"class","grid svelte-15v3o4w")},m(e,r){_(document.head,a),d(e,n,r),d(e,m,r),m.innerHTML=c,d(e,p,r),d(e,i,r),_(i,j),d(e,U,r),d(e,h,r),_(h,f),L(I,f,null),_(f,R),_(R,re),_(h,$e),_(h,M),L(Q,M,null),_(M,X),_(X,ie),_(h,_e),_(h,Y),L(A,Y,null),d(e,pe,r),d(e,g,r),L(W,g,null),_(g,ce),L(z,g,null),_(g,ge),L(F,g,null),_(g,de),L(G,g,null),_(g,ve),L(J,g,null),_(g,he),L(K,g,null),v=!0},p(e,[r]){(!v||r&4)&&s!==(s=e[2]("Palestine Open Maps"))&&(document.title=s),(!v||r&4&&t!==(t=e[2]("Palestine Open Maps")))&&$(a,"content",t),(!v||r&4)&&c!==(c=e[2]("Welcome to<br>Palestine Open Maps")+"")&&(m.innerHTML=c),(!v||r&4)&&u!==(u=e[2]("Explore, search and download historical maps and spatial data on Palestine")+"")&&N(j,u),(!v||r&4)&&te!==(te=e[2]("Explore maps")+"")&&N(re,te),(!v||r&2&&oe!==(oe=O+"/"+e[1]+"/maps/"))&&$(f,"href",oe),(!v||r&8)&&ue(f,"rtl",e[3]),(!v||r&4)&&se!==(se=e[2]("Read more")+"")&&N(ie,se),(!v||r&2&&fe!==(fe=O+"/"+e[1]+"/about/"))&&$(M,"href",fe),(!v||r&8)&&ue(M,"rtl",e[3]);const me={};r&3&&(me.items=e[0].features.map(De).sort(e[9])),A.$set(me);const ae={};r&1028&&(ae.$$scope={dirty:r,ctx:e}),W.$set(ae);const T={};r&1028&&(T.$$scope={dirty:r,ctx:e}),z.$set(T);const Z={};r&1028&&(Z.$$scope={dirty:r,ctx:e}),F.$set(Z);const le={};r&1028&&(le.$$scope={dirty:r,ctx:e}),G.$set(le);const x={};r&1028&&(x.$$scope={dirty:r,ctx:e}),J.$set(x);const ne={};r&1028&&(ne.$$scope={dirty:r,ctx:e}),K.$set(ne)},i(e){v||(S(I.$$.fragment,e),S(Q.$$.fragment,e),S(A.$$.fragment,e),S(W.$$.fragment,e),S(z.$$.fragment,e),S(F.$$.fragment,e),S(G.$$.fragment,e),S(J.$$.fragment,e),S(K.$$.fragment,e),v=!0)},o(e){k(I.$$.fragment,e),k(Q.$$.fragment,e),k(A.$$.fragment,e),k(W.$$.fragment,e),k(z.$$.fragment,e),k(F.$$.fragment,e),k(G.$$.fragment,e),k(J.$$.fragment,e),k(K.$$.fragment,e),v=!1},d(e){o(a),e&&o(n),e&&o(m),e&&o(p),e&&o(i),e&&o(U),e&&o(h),q(I),q(Q),q(A),e&&o(pe),e&&o(g),q(W),q(z),q(F),q(G),q(J),q(K)}}}const De=l=>l.properties;function Ge(l,s,a){let t,n,m,{data:c}=s,{places:p}=c;const i=we("lang");Ee(l,i,f=>a(1,t=f));const u=we("rtl");Ee(l,u,f=>a(3,m=f));const j=we("t");Ee(l,j,f=>a(2,n=f));function U(f){let I=p.features.find(R=>R.properties.slug==f.detail.slug);Ce(`${O}/${t}/maps/${I.properties.slug}/`)}const h=(f,I)=>f[`name_${t}`].localeCompare(I[`name_${t}`]);return l.$$set=f=>{"data"in f&&a(8,c=f.data)},l.$$.update=()=>{l.$$.dirty&256&&a(0,{places:p}=c,p)},[p,t,n,m,i,u,j,U,c,h]}class Ye extends Ie{constructor(s){super(),Me(this,s,Ge,Fe,Oe,{data:8})}}export{Ye as default};
