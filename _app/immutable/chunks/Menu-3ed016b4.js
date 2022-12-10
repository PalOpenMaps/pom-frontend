import{S as $e,i as he,s as ve,B as ge,k as g,l as d,m as k,h as c,n as m,b as S,E as de,F as ke,G as be,f as E,t as A,a as T,v as L,c as U,w as M,L as q,p as le,D as b,x as H,y as I,H as Y,M as se,q as F,r as G,u as Z,g as Ee,d as Ae,O as we,e as ie}from"./index-bf619a6a.js";import{b as y}from"./paths-6cd3a76e.js";import{p as Ne}from"./stores-85c99f0f.js";import{p as pe}from"./config-af6c78b8.js";import{I as O}from"./Icon-5b089085.js";function Pe(n){let e,l;const r=n[1].default,o=ge(r,n,n[0],null);return{c(){e=g("div"),o&&o.c(),this.h()},l(f){e=d(f,"DIV",{class:!0});var u=k(e);o&&o.l(u),u.forEach(c),this.h()},h(){m(e,"class","linkbox svelte-eypjpt")},m(f,u){S(f,e,u),o&&o.m(e,null),l=!0},p(f,[u]){o&&o.p&&(!l||u&1)&&de(o,r,f,f[0],l?be(r,f[0],u,null):ke(f[0]),null)},i(f){l||(E(o,f),l=!0)},o(f){A(o,f),l=!1},d(f){f&&c(e),o&&o.d(f)}}}function ye(n,e,l){let{$$slots:r={},$$scope:o}=e;return n.$$set=f=>{"$$scope"in f&&l(0,o=f.$$scope)},[o,r]}class _e extends $e{constructor(e){super(),he(this,e,ye,Pe,ve,{})}}function ce(n,e,l){const r=n.slice();return r[11]=e[l],r}function me(n){let e,l,r,o=n[4](n[11].label)+"",f,u,i;return l=new O({props:{type:n[11].icon}}),{c(){e=g("a"),L(l.$$.fragment),r=g("span"),f=F(o),this.h()},l(t){e=d(t,"A",{href:!0,class:!0});var a=k(e);M(l.$$.fragment,a),r=d(a,"SPAN",{class:!0});var p=k(r);f=G(p,o),p.forEach(c),a.forEach(c),this.h()},h(){m(r,"class","svelte-dt47rl"),m(e,"href",u=y+"/"+n[2]+"/"+n[11].key+"/"),m(e,"class","svelte-dt47rl"),q(e,"active",n[3].url.pathname==`${y}/${n[2]}/${n[11].key}/`)},m(t,a){S(t,e,a),H(l,e,null),b(e,r),b(r,f),i=!0},p(t,a){(!i||a&16)&&o!==(o=t[4](t[11].label)+"")&&Z(f,o),(!i||a&4&&u!==(u=y+"/"+t[2]+"/"+t[11].key+"/"))&&m(e,"href",u),a&12&&q(e,"active",t[3].url.pathname==`${y}/${t[2]}/${t[11].key}/`)},i(t){i||(E(l.$$.fragment,t),i=!0)},o(t){A(l.$$.fragment,t),i=!1},d(t){t&&c(e),I(l)}}}function Be(n){let e,l,r,o=n[4]("Home")+"",f,u,i,t,a,p,w=n[4]("Explore maps")+"",N,D,v,J,B,V,K,W=n[4]("Blog")+"",x,ee,C,j,Q,X=n[4]("Contact")+"",te,P;l=new O({props:{type:"home"}}),a=new O({props:{type:"map"}});let z=pe,$=[];for(let s=0;s<z.length;s+=1)$[s]=me(ce(n,z,s));const Se=s=>A($[s],1,1,()=>{$[s]=null});return V=new O({props:{type:"pen"}}),j=new O({props:{type:"email"}}),{c(){e=g("a"),L(l.$$.fragment),r=g("span"),f=F(o),i=T(),t=g("a"),L(a.$$.fragment),p=g("span"),N=F(w),v=T();for(let s=0;s<$.length;s+=1)$[s].c();J=T(),B=g("a"),L(V.$$.fragment),K=g("span"),x=F(W),ee=T(),C=g("a"),L(j.$$.fragment),Q=g("span"),te=F(X),this.h()},l(s){e=d(s,"A",{href:!0,class:!0});var _=k(e);M(l.$$.fragment,_),r=d(_,"SPAN",{class:!0});var h=k(r);f=G(h,o),h.forEach(c),_.forEach(c),i=U(s),t=d(s,"A",{href:!0,class:!0});var R=k(t);M(a.$$.fragment,R),p=d(R,"SPAN",{class:!0});var fe=k(p);N=G(fe,w),fe.forEach(c),R.forEach(c),v=U(s);for(let ne=0;ne<$.length;ne+=1)$[ne].l(s);J=U(s),B=d(s,"A",{href:!0,class:!0});var ae=k(B);M(V.$$.fragment,ae),K=d(ae,"SPAN",{class:!0});var oe=k(K);x=G(oe,W),oe.forEach(c),ae.forEach(c),ee=U(s),C=d(s,"A",{href:!0,class:!0});var re=k(C);M(j.$$.fragment,re),Q=d(re,"SPAN",{class:!0});var ue=k(Q);te=G(ue,X),ue.forEach(c),re.forEach(c),this.h()},h(){m(r,"class","svelte-dt47rl"),m(e,"href",u=y+"/"+n[2]+"/"),m(e,"class","svelte-dt47rl"),q(e,"active",n[3].url.pathname==`${y}/${n[2]}/`),m(p,"class","svelte-dt47rl"),m(t,"href",D=y+"/"+n[2]+"/maps/"),m(t,"class","svelte-dt47rl"),q(t,"active",n[3].url.pathname.includes("maps")),m(K,"class","svelte-dt47rl"),m(B,"href","https://medium.com/palopenmaps"),m(B,"class","svelte-dt47rl"),m(Q,"class","svelte-dt47rl"),m(C,"href","https://visualizingpalestine.org/vp-contacts#about"),m(C,"class","svelte-dt47rl")},m(s,_){S(s,e,_),H(l,e,null),b(e,r),b(r,f),S(s,i,_),S(s,t,_),H(a,t,null),b(t,p),b(p,N),S(s,v,_);for(let h=0;h<$.length;h+=1)$[h].m(s,_);S(s,J,_),S(s,B,_),H(V,B,null),b(B,K),b(K,x),S(s,ee,_),S(s,C,_),H(j,C,null),b(C,Q),b(Q,te),P=!0},p(s,_){if((!P||_&16)&&o!==(o=s[4]("Home")+"")&&Z(f,o),(!P||_&4&&u!==(u=y+"/"+s[2]+"/"))&&m(e,"href",u),_&12&&q(e,"active",s[3].url.pathname==`${y}/${s[2]}/`),(!P||_&16)&&w!==(w=s[4]("Explore maps")+"")&&Z(N,w),(!P||_&4&&D!==(D=y+"/"+s[2]+"/maps/"))&&m(t,"href",D),_&8&&q(t,"active",s[3].url.pathname.includes("maps")),_&28){z=pe;let h;for(h=0;h<z.length;h+=1){const R=ce(s,z,h);$[h]?($[h].p(R,_),E($[h],1)):($[h]=me(R),$[h].c(),E($[h],1),$[h].m(J.parentNode,J))}for(Ee(),h=z.length;h<$.length;h+=1)Se(h);Ae()}(!P||_&16)&&W!==(W=s[4]("Blog")+"")&&Z(x,W),(!P||_&16)&&X!==(X=s[4]("Contact")+"")&&Z(te,X)},i(s){if(!P){E(l.$$.fragment,s),E(a.$$.fragment,s);for(let _=0;_<z.length;_+=1)E($[_]);E(V.$$.fragment,s),E(j.$$.fragment,s),P=!0}},o(s){A(l.$$.fragment,s),A(a.$$.fragment,s),$=$.filter(Boolean);for(let _=0;_<$.length;_+=1)A($[_]);A(V.$$.fragment,s),A(j.$$.fragment,s),P=!1},d(s){s&&c(e),I(l),s&&c(i),s&&c(t),I(a),s&&c(v),we($,s),s&&c(J),s&&c(B),I(V),s&&c(ee),s&&c(C),I(j)}}}function Ce(n){let e,l,r,o,f,u;return l=new O({props:{type:"globe"}}),{c(){e=g("a"),L(l.$$.fragment),r=g("span"),o=F("\u0639\u0631\u0628\u064A"),this.h()},l(i){e=d(i,"A",{href:!0,class:!0});var t=k(e);M(l.$$.fragment,t),r=d(t,"SPAN",{class:!0});var a=k(r);o=G(a,"\u0639\u0631\u0628\u064A"),a.forEach(c),t.forEach(c),this.h()},h(){m(r,"class","svelte-dt47rl"),m(e,"href",f=String(n[3].url).replace("en","ar")),m(e,"class","svelte-dt47rl")},m(i,t){S(i,e,t),H(l,e,null),b(e,r),b(r,o),u=!0},p(i,t){(!u||t&8&&f!==(f=String(i[3].url).replace("en","ar")))&&m(e,"href",f)},i(i){u||(E(l.$$.fragment,i),u=!0)},o(i){A(l.$$.fragment,i),u=!1},d(i){i&&c(e),I(l)}}}function Le(n){let e,l,r,o,f,u;return l=new O({props:{type:"globe"}}),{c(){e=g("a"),L(l.$$.fragment),r=g("span"),o=F("English"),this.h()},l(i){e=d(i,"A",{href:!0,class:!0});var t=k(e);M(l.$$.fragment,t),r=d(t,"SPAN",{class:!0});var a=k(r);o=G(a,"English"),a.forEach(c),t.forEach(c),this.h()},h(){m(r,"class","svelte-dt47rl"),m(e,"href",f=String(n[3].url).replace("ar","en")),m(e,"class","svelte-dt47rl")},m(i,t){S(i,e,t),H(l,e,null),b(e,r),b(r,o),u=!0},p(i,t){(!u||t&8&&f!==(f=String(i[3].url).replace("ar","en")))&&m(e,"href",f)},i(i){u||(E(l.$$.fragment,i),u=!0)},o(i){A(l.$$.fragment,i),u=!1},d(i){i&&c(e),I(l)}}}function Me(n){let e,l,r,o;const f=[Le,Ce],u=[];function i(t,a){return t[1]?0:1}return e=i(n),l=u[e]=f[e](n),{c(){l.c(),r=ie()},l(t){l.l(t),r=ie()},m(t,a){u[e].m(t,a),S(t,r,a),o=!0},p(t,a){let p=e;e=i(t),e===p?u[e].p(t,a):(Ee(),A(u[p],1,1,()=>{u[p]=null}),Ae(),l=u[e],l?l.p(t,a):(l=u[e]=f[e](t),l.c()),E(l,1),l.m(r.parentNode,r))},i(t){o||(E(l),o=!0)},o(t){A(l),o=!1},d(t){u[e].d(t),t&&c(r)}}}function He(n){let e,l,r,o,f,u;const i=n[9].default,t=ge(i,n,n[10],null);return r=new _e({props:{$$slots:{default:[Be]},$$scope:{ctx:n}}}),f=new _e({props:{$$slots:{default:[Me]},$$scope:{ctx:n}}}),{c(){e=g("nav"),t&&t.c(),l=T(),L(r.$$.fragment),o=T(),L(f.$$.fragment),this.h()},l(a){e=d(a,"NAV",{id:!0,class:!0});var p=k(e);t&&t.l(p),l=U(p),M(r.$$.fragment,p),o=U(p),M(f.$$.fragment,p),p.forEach(c),this.h()},h(){m(e,"id","menu"),m(e,"class","svelte-dt47rl"),q(e,"shadow",n[0]),le(e,"left",n[1]?"auto":n[0]?"0":"-320px",!1),le(e,"right",n[6]?n[0]?"0":"-320px":"auto",!1)},m(a,p){S(a,e,p),t&&t.m(e,null),b(e,l),H(r,e,null),b(e,o),H(f,e,null),u=!0},p(a,[p]){t&&t.p&&(!u||p&1024)&&de(t,i,a,a[10],u?be(i,a[10],p,null):ke(a[10]),null);const w={};p&1052&&(w.$$scope={dirty:p,ctx:a}),r.$set(w);const N={};p&1034&&(N.$$scope={dirty:p,ctx:a}),f.$set(N),p&1&&q(e,"shadow",a[0]),p&3&&le(e,"left",a[1]?"auto":a[0]?"0":"-320px",!1),p&1&&le(e,"right",a[6]?a[0]?"0":"-320px":"auto",!1)},i(a){u||(E(t,a),E(r.$$.fragment,a),E(f.$$.fragment,a),u=!0)},o(a){A(t,a),A(r.$$.fragment,a),A(f.$$.fragment,a),u=!1},d(a){a&&c(e),t&&t.d(a),I(r),I(f)}}}function Ie(n,e,l){let r,o,f,u,i;Y(n,Ne,v=>l(3,u=v));let{$$slots:t={},$$scope:a}=e;const p=se("lang");Y(n,p,v=>l(2,f=v));const w=se("rtl");Y(n,w,v=>l(1,o=v));const N=se("menu_active");Y(n,N,v=>l(0,r=v));const D=se("t");return Y(n,D,v=>l(4,i=v)),n.$$set=v=>{"$$scope"in v&&l(10,a=v.$$scope)},[r,o,f,u,i,p,w,N,D,t,a]}class Fe extends $e{constructor(e){super(),he(this,e,Ie,He,ve,{})}}export{_e as L,Fe as M};