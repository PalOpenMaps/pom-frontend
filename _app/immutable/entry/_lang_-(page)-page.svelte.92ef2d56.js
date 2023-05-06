import{S as Me,i as Ie,s as Oe,L as je,k as w,a as P,l as E,m as D,h as o,c as V,n as $,p as Pe,b as d,D as _,M as Se,N as ke,O as Ae,g as S,d as k,q,y as C,C as Te,r as y,z as H,K as ue,A as L,u as B,B as N,F as we,G as Ee}from"../chunks/index.43b57038.js";import{g as Ce}from"../chunks/navigation.a65707c6.js";import{b as O}from"../chunks/paths.4c37f44a.js";import{S as He}from"../chunks/Select.086a6562.js";import{I as Ve}from"../chunks/Icon.2e31b590.js";function Le(l){let s,a,t,n,m;const c=l[2].default,p=je(c,l,l[1],null);return{c(){s=w("div"),a=w("div"),t=P(),n=w("div"),p&&p.c(),this.h()},l(i){s=E(i,"DIV",{class:!0});var u=D(s);a=E(u,"DIV",{class:!0}),D(a).forEach(o),t=V(u),n=E(u,"DIV",{class:!0});var j=D(n);p&&p.l(j),j.forEach(o),u.forEach(o),this.h()},h(){$(a,"class","tile-gradient svelte-u5kurr"),$(n,"class","tile-text svelte-u5kurr"),$(s,"class","tile svelte-u5kurr"),Pe(s,"background-image",l[0]?`url("${l[0]}")`:null)},m(i,u){d(i,s,u),_(s,a),_(s,t),_(s,n),p&&p.m(n,null),m=!0},p(i,[u]){p&&p.p&&(!m||u&2)&&Se(p,c,i,i[1],m?Ae(c,i[1],u,null):ke(i[1]),null),u&1&&Pe(s,"background-image",i[0]?`url("${i[0]}")`:null)},i(i){m||(S(p,i),m=!0)},o(i){k(p,i),m=!1},d(i){i&&o(s),p&&p.d(i)}}}function Ne(l,s,a){let{$$slots:t={},$$scope:n}=s,{image:m=null}=s;return l.$$set=c=>{"image"in c&&a(0,m=c.image),"$$scope"in c&&a(1,n=c.$$scope)},[m,n,t]}class ee extends Me{constructor(s){super(),Ie(this,s,Ne,Le,Oe,{image:0})}}function qe(l){let s=l[2]("Explore historical maps from the 1870s onwards")+"",a;return{c(){a=q(s)},l(t){a=y(t,s)},m(t,n){d(t,a,n)},p(t,n){n&4&&s!==(s=t[2]("Explore historical maps from the 1870s onwards")+"")&&B(a,s)},d(t){t&&o(a)}}}function ye(l){let s=l[2]("View data on over 2,000 places, past and present")+"",a;return{c(){a=q(s)},l(t){a=y(t,s)},m(t,n){d(t,a,n)},p(t,n){n&4&&s!==(s=t[2]("View data on over 2,000 places, past and present")+"")&&B(a,s)},d(t){t&&o(a)}}}function Be(l){let s=l[2]("Download hundreds of historical map sheets")+"",a;return{c(){a=q(s)},l(t){a=y(t,s)},m(t,n){d(t,a,n)},p(t,n){n&4&&s!==(s=t[2]("Download hundreds of historical map sheets")+"")&&B(a,s)},d(t){t&&o(a)}}}function Re(l){let s=l[2]("View past and present maps side-by-side")+"",a;return{c(){a=q(s)},l(t){a=y(t,s)},m(t,n){d(t,a,n)},p(t,n){n&4&&s!==(s=t[2]("View past and present maps side-by-side")+"")&&B(a,s)},d(t){t&&o(a)}}}function We(l){let s=l[2]("View the topography of Palestine in 3D")+"",a;return{c(){a=q(s)},l(t){a=y(t,s)},m(t,n){d(t,a,n)},p(t,n){n&4&&s!==(s=t[2]("View the topography of Palestine in 3D")+"")&&B(a,s)},d(t){t&&o(a)}}}function ze(l){let s=l[2]("Overlay historical and present day maps")+"",a;return{c(){a=q(s)},l(t){a=y(t,s)},m(t,n){d(t,a,n)},p(t,n){n&4&&s!==(s=t[2]("Overlay historical and present day maps")+"")&&B(a,s)},d(t){t&&o(a)}}}function Fe(l){let s,a,t,n,m,c=l[2]("Welcome to<br>Palestine Open Maps")+"",p,i,u=l[2]("Explore, search and download historical maps and spatial data on Palestine")+"",j,U,h,f,M,R,te=l[2]("Explore maps")+"",re,oe,$e,I,Q,X,se=l[2]("Read more")+"",ie,fe,_e,Y,A,pe,g,W,ce,z,ge,F,de,G,ve,K,he,J,v;return document.title=s=l[2]("Palestine Open Maps"),M=new Ve({props:{type:"map",scale:1.5}}),Q=new Ve({props:{type:"info",scale:1.5}}),A=new He({props:{items:l[0].features.map(De).sort(l[9]),colorBorder:"#333",colorIndicator:"#333"}}),A.$on("select",l[7]),W=new ee({props:{image:O+"/img/tile-map1870.jpg",$$slots:{default:[qe]},$$scope:{ctx:l}}}),z=new ee({props:{image:O+"/img/tile-places.jpg",$$slots:{default:[ye]},$$scope:{ctx:l}}}),F=new ee({props:{image:O+"/img/tile-map1946.jpg",$$slots:{default:[Be]},$$scope:{ctx:l}}}),G=new ee({props:{image:O+"/img/tile-splitscreen.jpg",$$slots:{default:[Re]},$$scope:{ctx:l}}}),K=new ee({props:{image:O+"/img/tile-map3d.jpg",$$slots:{default:[We]},$$scope:{ctx:l}}}),J=new ee({props:{image:O+"/img/tile-overlay.jpg",$$slots:{default:[ze]},$$scope:{ctx:l}}}),{c(){a=w("meta"),n=P(),m=w("h1"),p=P(),i=w("p"),j=q(u),U=P(),h=w("div"),f=w("a"),C(M.$$.fragment),R=w("span"),re=q(te),$e=P(),I=w("a"),C(Q.$$.fragment),X=w("span"),ie=q(se),_e=P(),Y=w("div"),C(A.$$.fragment),pe=P(),g=w("div"),C(W.$$.fragment),ce=P(),C(z.$$.fragment),ge=P(),C(F.$$.fragment),de=P(),C(G.$$.fragment),ve=P(),C(K.$$.fragment),he=P(),C(J.$$.fragment),this.h()},l(e){const r=Te("svelte-ypvg3j",document.head);a=E(r,"META",{property:!0,content:!0}),r.forEach(o),n=V(e),m=E(e,"H1",{class:!0});var me=D(m);me.forEach(o),p=V(e),i=E(e,"P",{class:!0});var ae=D(i);j=y(ae,u),ae.forEach(o),U=V(e),h=E(e,"DIV",{class:!0});var T=D(h);f=E(T,"A",{class:!0,href:!0});var Z=D(f);H(M.$$.fragment,Z),R=E(Z,"SPAN",{class:!0});var le=D(R);re=y(le,te),le.forEach(o),Z.forEach(o),$e=V(T),I=E(T,"A",{class:!0,href:!0});var x=D(I);H(Q.$$.fragment,x),X=E(x,"SPAN",{class:!0});var ne=D(X);ie=y(ne,se),ne.forEach(o),x.forEach(o),_e=V(T),Y=E(T,"DIV",{class:!0});var be=D(Y);H(A.$$.fragment,be),be.forEach(o),T.forEach(o),pe=V(e),g=E(e,"DIV",{class:!0});var b=D(g);H(W.$$.fragment,b),ce=V(b),H(z.$$.fragment,b),ge=V(b),H(F.$$.fragment,b),de=V(b),H(G.$$.fragment,b),ve=V(b),H(K.$$.fragment,b),he=V(b),H(J.$$.fragment,b),b.forEach(o),this.h()},h(){$(a,"property","og:title"),$(a,"content",t=l[2]("Palestine Open Maps")),$(m,"class","svelte-15v3o4w"),$(i,"class","text-big svelte-15v3o4w"),$(R,"class","svelte-15v3o4w"),$(f,"class","btn btn-primary svelte-15v3o4w"),$(f,"href",oe=O+"/"+l[1]+"/maps/"),ue(f,"rtl",l[3]),$(X,"class","svelte-15v3o4w"),$(I,"class","btn svelte-15v3o4w"),$(I,"href",fe=O+"/"+l[1]+"/about/"),ue(I,"rtl",l[3]),$(Y,"class","select svelte-15v3o4w"),$(h,"class","buttons svelte-15v3o4w"),$(g,"class","grid svelte-15v3o4w")},m(e,r){_(document.head,a),d(e,n,r),d(e,m,r),m.innerHTML=c,d(e,p,r),d(e,i,r),_(i,j),d(e,U,r),d(e,h,r),_(h,f),L(M,f,null),_(f,R),_(R,re),_(h,$e),_(h,I),L(Q,I,null),_(I,X),_(X,ie),_(h,_e),_(h,Y),L(A,Y,null),d(e,pe,r),d(e,g,r),L(W,g,null),_(g,ce),L(z,g,null),_(g,ge),L(F,g,null),_(g,de),L(G,g,null),_(g,ve),L(K,g,null),_(g,he),L(J,g,null),v=!0},p(e,[r]){(!v||r&4)&&s!==(s=e[2]("Palestine Open Maps"))&&(document.title=s),(!v||r&4&&t!==(t=e[2]("Palestine Open Maps")))&&$(a,"content",t),(!v||r&4)&&c!==(c=e[2]("Welcome to<br>Palestine Open Maps")+"")&&(m.innerHTML=c),(!v||r&4)&&u!==(u=e[2]("Explore, search and download historical maps and spatial data on Palestine")+"")&&B(j,u),(!v||r&4)&&te!==(te=e[2]("Explore maps")+"")&&B(re,te),(!v||r&2&&oe!==(oe=O+"/"+e[1]+"/maps/"))&&$(f,"href",oe),(!v||r&8)&&ue(f,"rtl",e[3]),(!v||r&4)&&se!==(se=e[2]("Read more")+"")&&B(ie,se),(!v||r&2&&fe!==(fe=O+"/"+e[1]+"/about/"))&&$(I,"href",fe),(!v||r&8)&&ue(I,"rtl",e[3]);const me={};r&3&&(me.items=e[0].features.map(De).sort(e[9])),A.$set(me);const ae={};r&1028&&(ae.$$scope={dirty:r,ctx:e}),W.$set(ae);const T={};r&1028&&(T.$$scope={dirty:r,ctx:e}),z.$set(T);const Z={};r&1028&&(Z.$$scope={dirty:r,ctx:e}),F.$set(Z);const le={};r&1028&&(le.$$scope={dirty:r,ctx:e}),G.$set(le);const x={};r&1028&&(x.$$scope={dirty:r,ctx:e}),K.$set(x);const ne={};r&1028&&(ne.$$scope={dirty:r,ctx:e}),J.$set(ne)},i(e){v||(S(M.$$.fragment,e),S(Q.$$.fragment,e),S(A.$$.fragment,e),S(W.$$.fragment,e),S(z.$$.fragment,e),S(F.$$.fragment,e),S(G.$$.fragment,e),S(K.$$.fragment,e),S(J.$$.fragment,e),v=!0)},o(e){k(M.$$.fragment,e),k(Q.$$.fragment,e),k(A.$$.fragment,e),k(W.$$.fragment,e),k(z.$$.fragment,e),k(F.$$.fragment,e),k(G.$$.fragment,e),k(K.$$.fragment,e),k(J.$$.fragment,e),v=!1},d(e){o(a),e&&o(n),e&&o(m),e&&o(p),e&&o(i),e&&o(U),e&&o(h),N(M),N(Q),N(A),e&&o(pe),e&&o(g),N(W),N(z),N(F),N(G),N(K),N(J)}}}const De=l=>l.properties;function Ge(l,s,a){let t,n,m,{data:c}=s,{places:p}=c;const i=we("lang");Ee(l,i,f=>a(1,t=f));const u=we("rtl");Ee(l,u,f=>a(3,m=f));const j=we("t");Ee(l,j,f=>a(2,n=f));function U(f){let M=p.features.find(R=>R.properties.slug==f.detail.slug);Ce(`${O}/${t}/maps/${M.properties.slug}/`)}const h=(f,M)=>f[`name_${t}`].localeCompare(M[`name_${t}`]);return l.$$set=f=>{"data"in f&&a(8,c=f.data)},l.$$.update=()=>{l.$$.dirty&256&&a(0,{places:p}=c,p)},[p,t,n,m,i,u,j,U,c,h]}class Ye extends Me{constructor(s){super(),Ie(this,s,Ge,Fe,Oe,{data:8})}}export{Ye as default};
