import{S as $,i as q,s as w,k as y,v as A,a as C,q as N,l as b,m as E,w as P,h as d,c as S,r as T,n as f,L as M,b as B,D as g,x as L,N as R,u as U,f as V,t as j,y as z,M as H,H as k}from"./index-79f1c12c.js";import{b as O}from"./paths-6cd3a76e.js";import{I as F}from"./Icon-73fc6985.js";function G(a){let s,e,n,m,c,l,i=a[3]("Palestine Open Maps")+"",_,p,u,v,o;return n=new F({props:{type:a[1]?"close":"menu"}}),{c(){s=y("header"),e=y("button"),A(n.$$.fragment),m=C(),c=y("div"),l=y("a"),_=N(i),this.h()},l(t){s=b(t,"HEADER",{class:!0});var r=E(s);e=b(r,"BUTTON",{class:!0});var h=E(e);P(n.$$.fragment,h),h.forEach(d),m=S(r),c=b(r,"DIV",{class:!0});var D=E(c);l=b(D,"A",{href:!0,class:!0});var I=E(l);_=T(I,i),I.forEach(d),D.forEach(d),r.forEach(d),this.h()},h(){f(e,"class","menu-toggle svelte-rlye9u"),M(e,"menu-toggle-rtl",a[0]),f(l,"href",p=O+"/"+a[2]+"/"),f(l,"class","svelte-rlye9u"),f(c,"class","title svelte-rlye9u"),f(s,"class","svelte-rlye9u")},m(t,r){B(t,s,r),g(s,e),L(n,e,null),g(s,m),g(s,c),g(c,l),g(l,_),u=!0,v||(o=R(e,"click",a[8]),v=!0)},p(t,[r]){const h={};r&2&&(h.type=t[1]?"close":"menu"),n.$set(h),r&1&&M(e,"menu-toggle-rtl",t[0]),(!u||r&8)&&i!==(i=t[3]("Palestine Open Maps")+"")&&U(_,i),(!u||r&4&&p!==(p=O+"/"+t[2]+"/"))&&f(l,"href",p)},i(t){u||(V(n.$$.fragment,t),u=!0)},o(t){j(n.$$.fragment,t),u=!1},d(t){t&&d(s),z(n),v=!1,o()}}}function J(a,s,e){let n,m,c,l;const i=H("menu_active");k(a,i,o=>e(1,m=o));const _=H("lang");k(a,_,o=>e(2,c=o));const p=H("rtl");k(a,p,o=>e(0,n=o));const u=H("t");return k(a,u,o=>e(3,l=o)),[n,m,c,l,i,_,p,u,()=>i.set(!m)]}class X extends ${constructor(s){super(),q(this,s,J,G,w,{})}}export{X as H};