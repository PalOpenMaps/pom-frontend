import{S as h,i as d,s as $,F as g,l as b,r as v,a as y,m as R,n as S,u as q,h as u,c as A,p as m,b as p,H as C,I as E,J as F,K as H,f as I,t as J,o as K}from"../chunks/index-3c7b3c2d.js";import{b as _}from"../chunks/singletons-822f6284.js";import{g as c}from"../chunks/navigation-a6b28afb.js";function M(r){let s,i,o,n,t;const f=r[2].default,a=g(f,r,r[1],null);return{c(){s=b("a"),i=v("Redirecting..."),n=y(),a&&a.c(),this.h()},l(e){s=R(e,"A",{href:!0});var l=S(s);i=q(l,"Redirecting..."),l.forEach(u),n=A(e),a&&a.l(e),this.h()},h(){m(s,"href",o=_+"/"+(r[0]&&r[0]=="ar"?"ar":"en")+"/maps/")},m(e,l){p(e,s,l),C(s,i),p(e,n,l),a&&a.m(e,l),t=!0},p(e,[l]){(!t||l&1&&o!==(o=_+"/"+(e[0]&&e[0]=="ar"?"ar":"en")+"/maps/"))&&m(s,"href",o),a&&a.p&&(!t||l&2)&&E(a,f,e,e[1],t?H(f,e[1],l,null):F(e[1]),null)},i(e){t||(I(a,e),t=!0)},o(e){J(a,e),t=!1},d(e){e&&u(s),e&&u(n),a&&a.d(e)}}}function j(r,s,i){let{$$slots:o={},$$scope:n}=s,t;return K(()=>{i(0,t=navigator.language.slice(0,2)),t=="ar"?c(`${_}/${t}/maps/`):c(`${_}/en/maps/`)}),r.$$set=f=>{"$$scope"in f&&i(1,n=f.$$scope)},[t,n,o]}class B extends h{constructor(s){super(),d(this,s,j,M,$,{})}}export{B as default};