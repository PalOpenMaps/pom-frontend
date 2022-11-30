import{S as at,i as ot,s as st,a as it,e as U,c as lt,b as B,g as X,t as T,d as Z,f as D,h as C,j as ct,o as Le,k as ft,l as ut,m as dt,n as ke,p as K,q as pt,r as ht,u as mt,v as G,w as oe,x as H,y as J,z as ue}from"./chunks/index-bf619a6a.js";import{S as tt,I as M,g as Me,f as ze,a as $e,b as de,s as Y,i as We,c as me,P as Ye,d as _t,e as gt}from"./chunks/singletons-6d08455d.js";import{R as Xe,H as Pe}from"./chunks/control-ba37bfb4.js";import{s as wt}from"./chunks/paths-6cd3a76e.js";function yt(r,e){return r==="/"||e==="ignore"?r:e==="never"?r.endsWith("/")?r.slice(0,-1):r:e==="always"&&!r.endsWith("/")?r+"/":r}function bt(r){return r.split("%25").map(decodeURI).join("%25")}function vt(r){for(const e in r)r[e]=decodeURIComponent(r[e]);return r}const Et=["href","pathname","search","searchParams","toString","toJSON"];function kt(r,e){const n=new URL(r);for(const o of Et){let a=n[o];Object.defineProperty(n,o,{get(){return e(),a},enumerable:!0,configurable:!0})}return $t(n),n}function $t(r){Object.defineProperty(r,"hash",{get(){throw new Error("Cannot access event.url.hash. Consider using `$page.url.hash` inside a component instead")}})}const Rt="/__data.json";function St(r){return r.replace(/\/$/,"")+Rt}function It(r){let e=5381;if(typeof r=="string"){let n=r.length;for(;n;)e=e*33^r.charCodeAt(--n)}else if(ArrayBuffer.isView(r)){const n=new Uint8Array(r.buffer,r.byteOffset,r.byteLength);let o=n.length;for(;o;)e=e*33^n[--o]}else throw new TypeError("value must be a string or TypedArray");return(e>>>0).toString(36)}const _e=window.fetch;window.fetch=(r,e)=>{if((r instanceof Request?r.method:(e==null?void 0:e.method)||"GET")!=="GET"){const o=new URL(r instanceof Request?r.url:r.toString(),document.baseURI).href;re.delete(o)}return _e(r,e)};const re=new Map;function Ot(r,e){const n=nt(r,e),o=document.querySelector(n);if(o!=null&&o.textContent){const{body:a,...l}=JSON.parse(o.textContent),t=o.getAttribute("data-ttl");return t&&re.set(n,{body:a,init:l,ttl:1e3*Number(t)}),Promise.resolve(new Response(a,l))}return _e(r,e)}function Lt(r,e,n){if(re.size>0){const o=nt(r,n),a=re.get(o);if(a){if(performance.now()<a.ttl)return new Response(a.body,a.init);re.delete(o)}}return _e(e,n)}function nt(r,e){let o=`script[data-sveltekit-fetched][data-url=${JSON.stringify(r instanceof Request?r.url:r)}]`;return(e==null?void 0:e.body)&&(typeof e.body=="string"||ArrayBuffer.isView(e.body))&&(o+=`[data-hash="${It(e.body)}"]`),o}const Pt=/^(\[)?(\.\.\.)?(\w+)(?:=(\w+))?(\])?$/;function At(r){const e=[];return{pattern:r==="/"?/^\/$/:new RegExp(`^${Nt(r).map(o=>{const a=/^\[\.\.\.(\w+)(?:=(\w+))?\]$/.exec(o);if(a)return e.push({name:a[1],matcher:a[2],optional:!1,rest:!0,chained:!0}),"(?:/(.*))?";const l=/^\[\[(\w+)(?:=(\w+))?\]\]$/.exec(o);if(l)return e.push({name:l[1],matcher:l[2],optional:!0,rest:!1,chained:!0}),"(?:/([^/]+))?";if(!o)return;const t=o.split(/\[(.+?)\](?!\])/);return"/"+t.map((d,p)=>{if(p%2){if(d.startsWith("x+"))return Re(String.fromCharCode(parseInt(d.slice(2),16)));if(d.startsWith("u+"))return Re(String.fromCharCode(...d.slice(2).split("-").map(z=>parseInt(z,16))));const g=Pt.exec(d);if(!g)throw new Error(`Invalid param: ${d}. Params and matcher names can only have underscores and alphanumeric characters.`);const[,b,A,$,P]=g;return e.push({name:$,matcher:P,optional:!!b,rest:!!A,chained:A?p===1&&t[0]==="":!1}),A?"(.*?)":b?"([^/]*)?":"([^/]+?)"}return Re(d)}).join("")}).join("")}/?$`),params:e}}function jt(r){return!/^\([^)]+\)$/.test(r)}function Nt(r){return r.slice(1).split("/").filter(jt)}function Ut(r,e,n){const o={},a=r.slice(1);let l="";for(let t=0;t<e.length;t+=1){const c=e[t];let d=a[t];if(c.chained&&c.rest&&l&&(d=d?l+"/"+d:l),l="",d===void 0)c.rest&&(o[c.name]="");else{if(c.matcher&&!n[c.matcher](d)){if(c.optional&&c.chained){let p=a.indexOf(void 0,t);if(p===-1){const g=e[t+1];if((g==null?void 0:g.rest)&&g.chained)l=d;else return}for(;p>=t;)a[p]=a[p-1],p-=1;continue}return}o[c.name]=d}}if(!l)return o}function Re(r){return r.normalize().replace(/[[\]]/g,"\\$&").replace(/%/g,"%25").replace(/\//g,"%2[Ff]").replace(/\?/g,"%3[Ff]").replace(/#/g,"%23").replace(/[.*+?^${}()|\\]/g,"\\$&")}function Tt(r,e,n,o){const a=new Set(e);return Object.entries(n).map(([c,[d,p,g]])=>{const{pattern:b,params:A}=At(c),$={id:c,exec:P=>{const z=b.exec(P);if(z)return Ut(z,A,o)},errors:[1,...g||[]].map(P=>r[P]),layouts:[0,...p||[]].map(t),leaf:l(d)};return $.errors.length=$.layouts.length=Math.max($.errors.length,$.layouts.length),$});function l(c){const d=c<0;return d&&(c=~c),[d,r[c]]}function t(c){return c===void 0?c:[a.has(c),r[c]]}}function Dt(r){let e,n,o;var a=r[0][0];function l(t){return{props:{data:t[2],form:t[1]}}}return a&&(e=new a(l(r))),{c(){e&&G(e.$$.fragment),n=U()},l(t){e&&oe(e.$$.fragment,t),n=U()},m(t,c){e&&H(e,t,c),B(t,n,c),o=!0},p(t,c){const d={};if(c&4&&(d.data=t[2]),c&2&&(d.form=t[1]),a!==(a=t[0][0])){if(e){X();const p=e;T(p.$$.fragment,1,0,()=>{J(p,1)}),Z()}a?(e=new a(l(t)),G(e.$$.fragment),D(e.$$.fragment,1),H(e,n.parentNode,n)):e=null}else a&&e.$set(d)},i(t){o||(e&&D(e.$$.fragment,t),o=!0)},o(t){e&&T(e.$$.fragment,t),o=!1},d(t){t&&C(n),e&&J(e,t)}}}function Vt(r){let e,n,o;var a=r[0][0];function l(t){return{props:{data:t[2],$$slots:{default:[Bt]},$$scope:{ctx:t}}}}return a&&(e=new a(l(r))),{c(){e&&G(e.$$.fragment),n=U()},l(t){e&&oe(e.$$.fragment,t),n=U()},m(t,c){e&&H(e,t,c),B(t,n,c),o=!0},p(t,c){const d={};if(c&4&&(d.data=t[2]),c&1051&&(d.$$scope={dirty:c,ctx:t}),a!==(a=t[0][0])){if(e){X();const p=e;T(p.$$.fragment,1,0,()=>{J(p,1)}),Z()}a?(e=new a(l(t)),G(e.$$.fragment),D(e.$$.fragment,1),H(e,n.parentNode,n)):e=null}else a&&e.$set(d)},i(t){o||(e&&D(e.$$.fragment,t),o=!0)},o(t){e&&T(e.$$.fragment,t),o=!1},d(t){t&&C(n),e&&J(e,t)}}}function qt(r){let e,n,o;var a=r[0][1];function l(t){return{props:{data:t[3],form:t[1]}}}return a&&(e=new a(l(r))),{c(){e&&G(e.$$.fragment),n=U()},l(t){e&&oe(e.$$.fragment,t),n=U()},m(t,c){e&&H(e,t,c),B(t,n,c),o=!0},p(t,c){const d={};if(c&8&&(d.data=t[3]),c&2&&(d.form=t[1]),a!==(a=t[0][1])){if(e){X();const p=e;T(p.$$.fragment,1,0,()=>{J(p,1)}),Z()}a?(e=new a(l(t)),G(e.$$.fragment),D(e.$$.fragment,1),H(e,n.parentNode,n)):e=null}else a&&e.$set(d)},i(t){o||(e&&D(e.$$.fragment,t),o=!0)},o(t){e&&T(e.$$.fragment,t),o=!1},d(t){t&&C(n),e&&J(e,t)}}}function Ct(r){let e,n,o;var a=r[0][1];function l(t){return{props:{data:t[3],$$slots:{default:[Ft]},$$scope:{ctx:t}}}}return a&&(e=new a(l(r))),{c(){e&&G(e.$$.fragment),n=U()},l(t){e&&oe(e.$$.fragment,t),n=U()},m(t,c){e&&H(e,t,c),B(t,n,c),o=!0},p(t,c){const d={};if(c&8&&(d.data=t[3]),c&1043&&(d.$$scope={dirty:c,ctx:t}),a!==(a=t[0][1])){if(e){X();const p=e;T(p.$$.fragment,1,0,()=>{J(p,1)}),Z()}a?(e=new a(l(t)),G(e.$$.fragment),D(e.$$.fragment,1),H(e,n.parentNode,n)):e=null}else a&&e.$set(d)},i(t){o||(e&&D(e.$$.fragment,t),o=!0)},o(t){e&&T(e.$$.fragment,t),o=!1},d(t){t&&C(n),e&&J(e,t)}}}function Ft(r){let e,n,o;var a=r[0][2];function l(t){return{props:{data:t[4],form:t[1]}}}return a&&(e=new a(l(r))),{c(){e&&G(e.$$.fragment),n=U()},l(t){e&&oe(e.$$.fragment,t),n=U()},m(t,c){e&&H(e,t,c),B(t,n,c),o=!0},p(t,c){const d={};if(c&16&&(d.data=t[4]),c&2&&(d.form=t[1]),a!==(a=t[0][2])){if(e){X();const p=e;T(p.$$.fragment,1,0,()=>{J(p,1)}),Z()}a?(e=new a(l(t)),G(e.$$.fragment),D(e.$$.fragment,1),H(e,n.parentNode,n)):e=null}else a&&e.$set(d)},i(t){o||(e&&D(e.$$.fragment,t),o=!0)},o(t){e&&T(e.$$.fragment,t),o=!1},d(t){t&&C(n),e&&J(e,t)}}}function Bt(r){let e,n,o,a;const l=[Ct,qt],t=[];function c(d,p){return d[0][2]?0:1}return e=c(r),n=t[e]=l[e](r),{c(){n.c(),o=U()},l(d){n.l(d),o=U()},m(d,p){t[e].m(d,p),B(d,o,p),a=!0},p(d,p){let g=e;e=c(d),e===g?t[e].p(d,p):(X(),T(t[g],1,1,()=>{t[g]=null}),Z(),n=t[e],n?n.p(d,p):(n=t[e]=l[e](d),n.c()),D(n,1),n.m(o.parentNode,o))},i(d){a||(D(n),a=!0)},o(d){T(n),a=!1},d(d){t[e].d(d),d&&C(o)}}}function Ze(r){let e,n=r[6]&&Qe(r);return{c(){e=ft("div"),n&&n.c(),this.h()},l(o){e=ut(o,"DIV",{id:!0,"aria-live":!0,"aria-atomic":!0,style:!0});var a=dt(e);n&&n.l(a),a.forEach(C),this.h()},h(){ke(e,"id","svelte-announcer"),ke(e,"aria-live","assertive"),ke(e,"aria-atomic","true"),K(e,"position","absolute"),K(e,"left","0"),K(e,"top","0"),K(e,"clip","rect(0 0 0 0)"),K(e,"clip-path","inset(50%)"),K(e,"overflow","hidden"),K(e,"white-space","nowrap"),K(e,"width","1px"),K(e,"height","1px")},m(o,a){B(o,e,a),n&&n.m(e,null)},p(o,a){o[6]?n?n.p(o,a):(n=Qe(o),n.c(),n.m(e,null)):n&&(n.d(1),n=null)},d(o){o&&C(e),n&&n.d()}}}function Qe(r){let e;return{c(){e=pt(r[7])},l(n){e=ht(n,r[7])},m(n,o){B(n,e,o)},p(n,o){o&128&&mt(e,n[7])},d(n){n&&C(e)}}}function Gt(r){let e,n,o,a,l;const t=[Vt,Dt],c=[];function d(g,b){return g[0][1]?0:1}e=d(r),n=c[e]=t[e](r);let p=r[5]&&Ze(r);return{c(){n.c(),o=it(),p&&p.c(),a=U()},l(g){n.l(g),o=lt(g),p&&p.l(g),a=U()},m(g,b){c[e].m(g,b),B(g,o,b),p&&p.m(g,b),B(g,a,b),l=!0},p(g,[b]){let A=e;e=d(g),e===A?c[e].p(g,b):(X(),T(c[A],1,1,()=>{c[A]=null}),Z(),n=c[e],n?n.p(g,b):(n=c[e]=t[e](g),n.c()),D(n,1),n.m(o.parentNode,o)),g[5]?p?p.p(g,b):(p=Ze(g),p.c(),p.m(a.parentNode,a)):p&&(p.d(1),p=null)},i(g){l||(D(n),l=!0)},o(g){T(n),l=!1},d(g){c[e].d(g),g&&C(o),p&&p.d(g),g&&C(a)}}}function Ht(r,e,n){let{stores:o}=e,{page:a}=e,{components:l}=e,{form:t}=e,{data_0:c=null}=e,{data_1:d=null}=e,{data_2:p=null}=e;ct(o.page.notify);let g=!1,b=!1,A=null;return Le(()=>{const $=o.page.subscribe(()=>{g&&(n(6,b=!0),n(7,A=document.title||"untitled page"))});return n(5,g=!0),$}),r.$$set=$=>{"stores"in $&&n(8,o=$.stores),"page"in $&&n(9,a=$.page),"components"in $&&n(0,l=$.components),"form"in $&&n(1,t=$.form),"data_0"in $&&n(2,c=$.data_0),"data_1"in $&&n(3,d=$.data_1),"data_2"in $&&n(4,p=$.data_2)},r.$$.update=()=>{r.$$.dirty&768&&o.page.set(a)},[l,t,c,d,p,g,b,A,o,a]}class Jt extends at{constructor(e){super(),ot(this,e,Ht,Gt,st,{stores:8,page:9,components:0,form:1,data_0:2,data_1:3,data_2:4})}}const Kt="modulepreload",Mt=function(r,e){return new URL(r,e).href},xe={},F=function(e,n,o){if(!n||n.length===0)return e();const a=document.getElementsByTagName("link");return Promise.all(n.map(l=>{if(l=Mt(l,o),l in xe)return;xe[l]=!0;const t=l.endsWith(".css"),c=t?'[rel="stylesheet"]':"";if(!!o)for(let g=a.length-1;g>=0;g--){const b=a[g];if(b.href===l&&(!t||b.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${l}"]${c}`))return;const p=document.createElement("link");if(p.rel=t?"stylesheet":Kt,t||(p.as="script",p.crossOrigin=""),p.href=l,document.head.appendChild(p),t)return new Promise((g,b)=>{p.addEventListener("load",g),p.addEventListener("error",()=>b(new Error(`Unable to preload CSS for ${l}`)))})})).then(()=>e())},zt={},ge=[()=>F(()=>import("./chunks/0-5e9251ff.js"),["./chunks/0-5e9251ff.js","./chunks/_layout-bedfe3a3.js","./chunks/config-5b04729c.js","./chunks/paths-6cd3a76e.js","./chunks/utils-b90f6efb.js","./chunks/autoType-ca12e421.js","./components/pages/_layout.svelte-cd2b0a0f.js","./chunks/index-bf619a6a.js","./chunks/singletons-6d08455d.js","./chunks/stores-85c99f0f.js","./assets/_layout-48e5782a.css"],import.meta.url),()=>F(()=>import("./chunks/1-66d47ba6.js"),["./chunks/1-66d47ba6.js","./components/error.svelte-f6d35f51.js","./chunks/index-bf619a6a.js","./chunks/stores-85c99f0f.js","./chunks/singletons-6d08455d.js","./chunks/paths-6cd3a76e.js"],import.meta.url),()=>F(()=>import("./chunks/2-204169b3.js"),["./chunks/2-204169b3.js","./components/pages/_lang_/(page)/_layout.svelte-d76f37fb.js","./chunks/index-bf619a6a.js","./chunks/navigation-c2e0a450.js","./chunks/singletons-6d08455d.js","./chunks/paths-6cd3a76e.js","./chunks/Header-4b76c1bb.js","./chunks/Icon-5b089085.js","./assets/Icon-2bb40ad1.css","./assets/Header-ead01993.css","./chunks/Menu-90b51deb.js","./chunks/stores-85c99f0f.js","./chunks/config-5b04729c.js","./assets/Menu-ae2c72bb.css","./assets/_layout-3bfa24ec.css"],import.meta.url),()=>F(()=>import("./chunks/3-915d7c3b.js"),["./chunks/3-915d7c3b.js","./chunks/_layout-b653b2b8.js","./components/pages/_lang_/maps/_...slug_/_layout.svelte-e6f05e46.js","./chunks/index-bf619a6a.js","./chunks/Header-4b76c1bb.js","./chunks/paths-6cd3a76e.js","./chunks/Icon-5b089085.js","./assets/Icon-2bb40ad1.css","./assets/Header-ead01993.css","./assets/_layout-a1f3d880.css"],import.meta.url),()=>F(()=>import("./chunks/4-3c97abce.js"),["./chunks/4-3c97abce.js","./chunks/_page-8bb8ddb1.js","./chunks/index-3dfdb732.js","./chunks/control-ba37bfb4.js","./chunks/paths-6cd3a76e.js"],import.meta.url),()=>F(()=>import("./chunks/5-2b1f18ab.js"),["./chunks/5-2b1f18ab.js","./chunks/_page-1f78425c.js","./components/pages/_lang_/(page)/_page.svelte-49b55134.js","./chunks/index-bf619a6a.js","./chunks/navigation-c2e0a450.js","./chunks/singletons-6d08455d.js","./chunks/paths-6cd3a76e.js","./chunks/Select-91c5d9f4.js","./assets/Select-d7b20449.css","./chunks/Icon-5b089085.js","./assets/Icon-2bb40ad1.css","./assets/_page-d54a0959.css"],import.meta.url),()=>F(()=>import("./chunks/6-d7e4464b.js"),["./chunks/6-d7e4464b.js","./chunks/_page-3541b278.js","./chunks/config-5b04729c.js","./chunks/paths-6cd3a76e.js","./components/pages/_lang_/(page)/_page_/_page.svelte-e859c7d3.js","./chunks/index-bf619a6a.js"],import.meta.url),()=>F(()=>import("./chunks/7-1f56134a.js"),["./chunks/7-1f56134a.js","./chunks/_page-ade9e6c3.js","./components/pages/_lang_/maps/_...slug_/_page.svelte-02f19c24.js","./chunks/index-bf619a6a.js","./chunks/paths-6cd3a76e.js","./chunks/stores-85c99f0f.js","./chunks/singletons-6d08455d.js","./chunks/navigation-c2e0a450.js","./chunks/utils-b90f6efb.js","./chunks/autoType-ca12e421.js","./chunks/config-5b04729c.js","./chunks/Menu-90b51deb.js","./chunks/Icon-5b089085.js","./assets/Icon-2bb40ad1.css","./assets/Menu-ae2c72bb.css","./chunks/Select-91c5d9f4.js","./assets/Select-d7b20449.css","./assets/_page-fc487034.css"],import.meta.url),()=>F(()=>import("./chunks/8-34a5e0e5.js"),["./chunks/8-34a5e0e5.js","./chunks/_page-7c62b5ac.js","./chunks/index-3dfdb732.js","./chunks/control-ba37bfb4.js","./chunks/paths-6cd3a76e.js"],import.meta.url),()=>F(()=>import("./chunks/9-14c75f50.js"),["./chunks/9-14c75f50.js","./chunks/_page-03b2c6d5.js","./chunks/index-3dfdb732.js","./chunks/control-ba37bfb4.js","./chunks/paths-6cd3a76e.js","./chunks/config-5b04729c.js","./chunks/autoType-ca12e421.js"],import.meta.url)],Wt=[],Yt={"/":[4],"/view":[8],"/view/[slug]":[9],"/[lang]/(page)":[5,[2]],"/[lang]/maps/[...slug]":[7,[3]],"/[lang]/(page)/[page]":[6,[2]]},Xt={handleError:({error:r})=>{console.error(r)}};async function Zt(r){var e;for(const n in r)if(typeof((e=r[n])==null?void 0:e.then)=="function")return Object.fromEntries(await Promise.all(Object.entries(r).map(async([o,a])=>[o,await a])));return r}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");Object.getOwnPropertyNames(Object.prototype).sort().join("\0");const Qt=-1,xt=-2,en=-3,tn=-4,nn=-5,rn=-6;function an(r){if(typeof r=="number")return o(r,!0);if(!Array.isArray(r)||r.length===0)throw new Error("Invalid input");const e=r,n=Array(e.length);function o(a,l=!1){if(a===Qt)return;if(a===en)return NaN;if(a===tn)return 1/0;if(a===nn)return-1/0;if(a===rn)return-0;if(l)throw new Error("Invalid input");if(a in n)return n[a];const t=e[a];if(!t||typeof t!="object")n[a]=t;else if(Array.isArray(t))if(typeof t[0]=="string")switch(t[0]){case"Date":n[a]=new Date(t[1]);break;case"Set":const d=new Set;n[a]=d;for(let b=1;b<t.length;b+=1)d.add(o(t[b]));break;case"Map":const p=new Map;n[a]=p;for(let b=1;b<t.length;b+=2)p.set(o(t[b]),o(t[b+1]));break;case"RegExp":n[a]=new RegExp(t[1],t[2]);break;case"Object":n[a]=Object(t[1]);break;case"BigInt":n[a]=BigInt(t[1]);break;case"null":const g=Object.create(null);n[a]=g;for(let b=1;b<t.length;b+=2)g[t[b]]=o(t[b+1]);break}else{const c=new Array(t.length);n[a]=c;for(let d=0;d<t.length;d+=1){const p=t[d];p!==xt&&(c[d]=o(p))}}else{const c={};n[a]=c;for(const d in t){const p=t[d];c[d]=o(p)}}return n[a]}return o(0)}const Se=Tt(ge,Wt,Yt,zt),Ae=ge[0],je=ge[1];Ae();je();let ae={};try{ae=JSON.parse(sessionStorage[tt])}catch{}function Ie(r){ae[r]=me()}function on({target:r,base:e}){var He;const n=[];let o=null;const a={before_navigate:[],after_navigate:[]};let l={branch:[],error:null,url:null},t=!1,c=!1,d=!0,p=!1,g=!1,b=!1,A=!1,$,P=(He=history.state)==null?void 0:He[M];P||(P=Date.now(),history.replaceState({...history.state,[M]:P},"",location.href));const z=ae[P];z&&(history.scrollRestoration="manual",scrollTo(z.x,z.y));let W,Ne,se;async function Ue(){se=se||Promise.resolve(),await se,se=null;const s=new URL(location.href),i=ve(s,!0);o=null,await De(i,s,[])}async function we(s,{noScroll:i=!1,replaceState:f=!1,keepFocus:u=!1,state:_={},invalidateAll:m=!1},h,k){return typeof s=="string"&&(s=new URL(s,Me(document))),ce({url:s,scroll:i?me():null,keepfocus:u,redirect_chain:h,details:{state:_,replaceState:f},nav_token:k,accepted:()=>{m&&(A=!0)},blocked:()=>{},type:"goto"})}async function Te(s){const i=ve(s,!1);if(!i)throw new Error(`Attempted to preload a URL that does not belong to this app: ${s}`);return o={id:i.id,promise:Ce(i).then(f=>(f.type==="loaded"&&f.state.error&&(o=null),f))},o.promise}async function ie(...s){const f=Se.filter(u=>s.some(_=>u.exec(_))).map(u=>Promise.all([...u.layouts,u.leaf].map(_=>_==null?void 0:_[1]())));await Promise.all(f)}async function De(s,i,f,u,_={},m){var k,v;Ne=_;let h=s&&await Ce(s);if(h||(h=await Ge(i,{id:null},await ne(new Error(`Not found: ${i.pathname}`),{url:i,params:{},route:{id:null}}),404)),i=(s==null?void 0:s.url)||i,Ne!==_)return!1;if(h.type==="redirect")if(f.length>10||f.includes(i.pathname))h=await le({status:500,error:await ne(new Error("Redirect loop"),{url:i,params:{},route:{id:null}}),url:i,route:{id:null}});else return we(new URL(h.location,i).href,{},[...f,i.pathname],_),!1;else((v=(k=h.props)==null?void 0:k.page)==null?void 0:v.status)>=400&&await Y.updated.check()&&await fe(i);if(n.length=0,A=!1,p=!0,u&&u.details){const{details:y}=u,E=y.replaceState?0:1;y.state[M]=P+=E,history[y.replaceState?"replaceState":"pushState"](y.state,"",i)}if(o=null,c){l=h.state,h.props.page&&(h.props.page.url=i);const y=he();$.$set(h.props),y()}else Ve(h);if(u){const{scroll:y,keepfocus:E}=u;if(E||Oe(),await ue(),d){const S=i.hash&&document.getElementById(i.hash.slice(1));y?scrollTo(y.x,y.y):S?S.scrollIntoView():scrollTo(0,0)}}else await ue();d=!0,h.props.page&&(W=h.props.page),m&&m(),p=!1}function Ve(s){var _,m;l=s.state;const i=document.querySelector("style[data-sveltekit]");i&&i.remove(),W=s.props.page;const f=he();$=new Jt({target:r,props:{...s.props,stores:Y},hydrate:!0}),f();const u={from:null,to:pe("to",{params:l.params,route:{id:(m=(_=l.route)==null?void 0:_.id)!=null?m:null},url:new URL(location.href)}),willUnload:!1,type:"enter"};a.after_navigate.forEach(h=>h(u)),c=!0}async function x({url:s,params:i,branch:f,status:u,error:_,route:m,form:h}){var N;const k=f.filter(Boolean);let v="never";for(const I of f)(I==null?void 0:I.slash)!==void 0&&(v=I.slash);s.pathname=yt(s.pathname,v),s.search=s.search;const y={type:"loaded",state:{url:s,params:i,branch:f,error:_,route:m},props:{components:k.map(I=>I.node.component)}};h!==void 0&&(y.props.form=h);let E={},S=!W;for(let I=0;I<k.length;I+=1){const j=k[I];E={...E,...j.data},(S||!l.branch.some(q=>q===j))&&(y.props[`data_${I}`]=E,S=S||Object.keys((N=j.data)!=null?N:{}).length>0)}if(S||(S=Object.keys(W.data).length!==Object.keys(E).length),!l.url||s.href!==l.url.href||l.error!==_||h!==void 0||S){y.props.page={error:_,params:i,route:m,status:u,url:new URL(s),form:h,data:S?E:W.data},Object.defineProperty(y.props.page,"routeId",{get(){throw new Error("$page.routeId has been replaced by $page.route.id")},enumerable:!1});const I=(j,q)=>{Object.defineProperty(y.props.page,j,{get:()=>{throw new Error(`$page.${j} has been replaced by $page.url.${q}`)}})};I("origin","origin"),I("path","pathname"),I("query","searchParams")}return y}async function ye({loader:s,parent:i,url:f,params:u,route:_,server_data_node:m}){var y,E,S,V,N,I,j;let h=null;const k={dependencies:new Set,params:new Set,parent:!1,route:!1,url:!1},v=await s();if((y=v.shared)!=null&&y.load){let q=function(...w){for(const R of w){const{href:O}=new URL(R,f);k.dependencies.add(O)}};const ee={route:{get id(){return k.route=!0,_.id}},params:new Proxy(u,{get:(w,R)=>(k.params.add(R),w[R])}),data:(E=m==null?void 0:m.data)!=null?E:null,url:kt(f,()=>{k.url=!0}),async fetch(w,R){let O;w instanceof Request?(O=w.url,R={body:w.method==="GET"||w.method==="HEAD"?void 0:await w.blob(),cache:w.cache,credentials:w.credentials,headers:w.headers,integrity:w.integrity,keepalive:w.keepalive,method:w.method,mode:w.mode,redirect:w.redirect,referrer:w.referrer,referrerPolicy:w.referrerPolicy,signal:w.signal,...R}):O=w;const L=new URL(O,f).href;return q(L),c?Lt(O,L,R):Ot(O,R)},setHeaders:()=>{},depends:q,parent(){return k.parent=!0,i()}};Object.defineProperties(ee,{props:{get(){throw new Error("@migration task: Replace `props` with `data` stuff https://github.com/sveltejs/kit/discussions/5774#discussioncomment-3292693")},enumerable:!1},session:{get(){throw new Error("session is no longer available. See https://github.com/sveltejs/kit/discussions/5883")},enumerable:!1},stuff:{get(){throw new Error("@migration task: Remove stuff https://github.com/sveltejs/kit/discussions/5774#discussioncomment-3292693")},enumerable:!1},routeId:{get(){throw new Error("routeId has been replaced by route.id")},enumerable:!1}}),h=(S=await v.shared.load.call(null,ee))!=null?S:null,h=h?await Zt(h):null}return{node:v,loader:s,server:m,shared:(V=v.shared)!=null&&V.load?{type:"data",data:h,uses:k}:null,data:(N=h!=null?h:m==null?void 0:m.data)!=null?N:null,slash:(j=(I=v.shared)==null?void 0:I.trailingSlash)!=null?j:m==null?void 0:m.slash}}function qe(s,i,f,u,_){if(A)return!0;if(!u)return!1;if(u.parent&&s||u.route&&i||u.url&&f)return!0;for(const m of u.params)if(_[m]!==l.params[m])return!0;for(const m of u.dependencies)if(n.some(h=>h(new URL(m))))return!0;return!1}function be(s,i){var f,u;return(s==null?void 0:s.type)==="data"?{type:"data",data:s.data,uses:{dependencies:new Set((f=s.uses.dependencies)!=null?f:[]),params:new Set((u=s.uses.params)!=null?u:[]),parent:!!s.uses.parent,route:!!s.uses.route,url:!!s.uses.url},slash:s.slash}:(s==null?void 0:s.type)==="skip"&&i!=null?i:null}async function Ce({id:s,invalidating:i,url:f,params:u,route:_}){var ee;if((o==null?void 0:o.id)===s)return o.promise;const{errors:m,layouts:h,leaf:k}=_,v=[...h,k];m.forEach(w=>w==null?void 0:w().catch(()=>{})),v.forEach(w=>w==null?void 0:w[1]().catch(()=>{}));let y=null;const E=l.url?s!==l.url.pathname+l.url.search:!1,S=l.route?s!==l.route.id:!1,V=v.reduce((w,R,O)=>{var te;const L=l.branch[O],Q=!!(R!=null&&R[0])&&((L==null?void 0:L.loader)!==R[1]||qe(w.some(Boolean),S,E,(te=L.server)==null?void 0:te.uses,u));return w.push(Q),w},[]);if(V.some(Boolean)){try{y=await et(f,V)}catch(w){return le({status:500,error:await ne(w,{url:f,params:u,route:{id:_.id}}),url:f,route:_})}if(y.type==="redirect")return y}const N=y==null?void 0:y.nodes;let I=!1;const j=v.map(async(w,R)=>{var te;if(!w)return;const O=l.branch[R],L=N==null?void 0:N[R];if((!L||L.type==="skip")&&w[1]===(O==null?void 0:O.loader)&&!qe(I,S,E,(te=O.shared)==null?void 0:te.uses,u))return O;if(I=!0,(L==null?void 0:L.type)==="error")throw L;return ye({loader:w[1],url:f,params:u,route:_,parent:async()=>{var Ke;const Je={};for(let Ee=0;Ee<R;Ee+=1)Object.assign(Je,(Ke=await j[Ee])==null?void 0:Ke.data);return Je},server_data_node:be(L===void 0&&w[0]?{type:"skip"}:L!=null?L:null,O==null?void 0:O.server)})});for(const w of j)w.catch(()=>{});const q=[];for(let w=0;w<v.length;w+=1)if(v[w])try{q.push(await j[w])}catch(R){if(R instanceof Xe)return{type:"redirect",location:R.location};let O=500,L;N!=null&&N.includes(R)?(O=(ee=R.status)!=null?ee:O,L=R.error):R instanceof Pe?(O=R.status,L=R.body):L=await ne(R,{params:u,url:f,route:{id:_.id}});const Q=await Fe(w,q,m);return Q?await x({url:f,params:u,branch:q.slice(0,Q.idx).concat(Q.node),status:O,error:L,route:_}):await Ge(f,{id:_.id},L,O)}else q.push(void 0);return await x({url:f,params:u,branch:q,status:200,error:null,route:_,form:i?void 0:null})}async function Fe(s,i,f){for(;s--;)if(f[s]){let u=s;for(;!i[u];)u-=1;try{return{idx:u+1,node:{node:await f[s](),loader:f[s],data:{},server:null,shared:null}}}catch{continue}}}async function le({status:s,error:i,url:f,route:u}){var y;const _={},m=await Ae();let h=null;if(m.server)try{const E=await et(f,[!0]);if(E.type!=="data"||E.nodes[0]&&E.nodes[0].type!=="data")throw 0;h=(y=E.nodes[0])!=null?y:null}catch{(f.origin!==location.origin||f.pathname!==location.pathname||t)&&await fe(f)}const k=await ye({loader:Ae,url:f,params:_,route:u,parent:()=>Promise.resolve({}),server_data_node:be(h)}),v={node:await je(),loader:je,shared:null,server:null,data:null};return await x({url:f,params:_,branch:[k,v],status:s,error:i,route:null})}function ve(s,i){if(We(s,e))return;const f=bt(s.pathname.slice(e.length)||"/");for(const u of Se){const _=u.exec(f);if(_)return{id:s.pathname+s.search,invalidating:i,route:u,params:vt(_),url:s}}}function Be({url:s,type:i,intent:f,delta:u}){var k,v,y,E,S;let _=!1;const m={from:pe("from",{params:l.params,route:{id:(v=(k=l.route)==null?void 0:k.id)!=null?v:null},url:l.url}),to:pe("to",{params:(y=f==null?void 0:f.params)!=null?y:null,route:{id:(S=(E=f==null?void 0:f.route)==null?void 0:E.id)!=null?S:null},url:s}),willUnload:!f,type:i};u!==void 0&&(m.delta=u);const h={...m,cancel:()=>{_=!0}};return g||a.before_navigate.forEach(V=>V(h)),_?null:m}async function ce({url:s,scroll:i,keepfocus:f,redirect_chain:u,details:_,type:m,delta:h,nav_token:k,accepted:v,blocked:y}){const E=ve(s,!1),S=Be({url:s,type:m,delta:h,intent:E});if(!S){y();return}Ie(P),v(),g=!0,c&&Y.navigating.set(S),await De(E,s,u,{scroll:i,keepfocus:f,details:_},k,()=>{g=!1,a.after_navigate.forEach(V=>V(S)),Y.navigating.set(null)})}async function Ge(s,i,f,u){return s.origin===location.origin&&s.pathname===location.pathname&&!t?await le({status:u,error:f,url:s,route:i}):await fe(s)}function fe(s){return location.href=s.href,new Promise(()=>{})}function rt(){let s;r.addEventListener("mousemove",m=>{const h=m.target;clearTimeout(s),s=setTimeout(()=>{u(h,2)},20)});function i(m){u(m.composedPath()[0],1)}r.addEventListener("mousedown",i),r.addEventListener("touchstart",i,{passive:!0});const f=new IntersectionObserver(m=>{for(const h of m)h.isIntersecting&&(ie(new URL(h.target.href).pathname),f.unobserve(h.target))},{threshold:0});function u(m,h){const k=ze(m,r);if(!k)return;const{url:v,external:y}=$e(k,e);if(y)return;const E=de(k);E.reload||(h<=E.preload_data?Te(v):h<=E.preload_code&&ie(v.pathname))}function _(){f.disconnect();for(const m of r.querySelectorAll("a")){const{url:h,external:k}=$e(m,e);if(k)continue;const v=de(m);v.reload||(v.preload_code===Ye.viewport&&f.observe(m),v.preload_code===Ye.eager&&ie(h.pathname))}}a.after_navigate.push(_),_()}return{after_navigate:s=>{Le(()=>(a.after_navigate.push(s),()=>{const i=a.after_navigate.indexOf(s);a.after_navigate.splice(i,1)}))},before_navigate:s=>{Le(()=>(a.before_navigate.push(s),()=>{const i=a.before_navigate.indexOf(s);a.before_navigate.splice(i,1)}))},disable_scroll_handling:()=>{(p||!c)&&(d=!1)},goto:(s,i={})=>{if("keepfocus"in i&&!("keepFocus"in i))throw new Error("`keepfocus` has been renamed to `keepFocus` (note the difference in casing)");if("noscroll"in i&&!("noScroll"in i))throw new Error("`noscroll` has been renamed to `noScroll` (note the difference in casing)");return we(s,i,[])},invalidate:s=>{if(s===void 0)throw new Error("`invalidate()` (with no arguments) has been replaced by `invalidateAll()`");if(typeof s=="function")n.push(s);else{const{href:i}=new URL(s,location.href);n.push(f=>f.href===i)}return Ue()},invalidateAll:()=>(A=!0,Ue()),preload_data:async s=>{const i=new URL(s,Me(document));await Te(i)},preload_code:ie,apply_action:async s=>{if(s.type==="error"){const i=new URL(location.href),{branch:f,route:u}=l;if(!u)return;const _=await Fe(l.branch.length,f,u.errors);if(_){const m=await x({url:i,params:l.params,branch:f.slice(0,_.idx).concat(_.node),status:500,error:s.error,route:u});l=m.state;const h=he();$.$set(m.props),h(),ue().then(Oe)}}else if(s.type==="redirect")we(s.location,{invalidateAll:!0},[]);else{const i={form:s.data,page:{...W,form:s.data,status:s.status}},f=he();$.$set(i),f(),s.type==="success"&&ue().then(Oe)}},_start_router:()=>{var s;history.scrollRestoration="manual",addEventListener("beforeunload",i=>{var u,_;let f=!1;if(!g){const m={from:pe("from",{params:l.params,route:{id:(_=(u=l.route)==null?void 0:u.id)!=null?_:null},url:l.url}),to:null,willUnload:!0,type:"leave",cancel:()=>f=!0};a.before_navigate.forEach(h=>h(m))}f?(i.preventDefault(),i.returnValue=""):history.scrollRestoration="auto"}),addEventListener("visibilitychange",()=>{if(document.visibilityState==="hidden"){Ie(P);try{sessionStorage[tt]=JSON.stringify(ae)}catch{}}}),(s=navigator.connection)!=null&&s.saveData||rt(),r.addEventListener("click",i=>{if(i.button||i.which!==1||i.metaKey||i.ctrlKey||i.shiftKey||i.altKey||i.defaultPrevented)return;const f=ze(i.composedPath()[0],r);if(!f)return;const{url:u,external:_,has:m}=$e(f,e),h=de(f);if(!u||!(f instanceof SVGAElement)&&u.protocol!==location.protocol&&!(u.protocol==="https:"||u.protocol==="http:")||m.download)return;if(_||h.reload){Be({url:u,type:"link"})||i.preventDefault(),g=!0;return}const[v,y]=u.href.split("#");if(y!==void 0&&v===location.href.split("#")[0]){b=!0,Ie(P),l.url=u,Y.page.set({...W,url:u}),Y.page.notify();return}ce({url:u,scroll:h.noscroll?me():null,keepfocus:!1,redirect_chain:[],details:{state:{},replaceState:u.href===location.href},accepted:()=>i.preventDefault(),blocked:()=>i.preventDefault(),type:"link"})}),r.addEventListener("submit",i=>{var v;if(i.defaultPrevented)return;const f=HTMLFormElement.prototype.cloneNode.call(i.target),u=i.submitter;if(((u==null?void 0:u.formMethod)||f.method)!=="get")return;const m=new URL(((v=i.submitter)==null?void 0:v.hasAttribute("formaction"))&&(u==null?void 0:u.formAction)||f.action);if(We(m,e))return;const{noscroll:h,reload:k}=de(i.target);k||(i.preventDefault(),i.stopPropagation(),m.search=new URLSearchParams(new FormData(i.target)).toString(),ce({url:m,scroll:h?me():null,keepfocus:!1,redirect_chain:[],details:{state:{},replaceState:!1},nav_token:{},accepted:()=>{},blocked:()=>{},type:"form"}))}),addEventListener("popstate",i=>{var f;if((f=i.state)!=null&&f[M]){if(i.state[M]===P)return;const u=i.state[M]-P;ce({url:new URL(location.href),scroll:ae[i.state[M]],keepfocus:!1,redirect_chain:[],details:null,accepted:()=>{P=i.state[M]},blocked:()=>{history.go(-u)},type:"popstate",delta:u})}}),addEventListener("hashchange",()=>{b&&(b=!1,history.replaceState({...history.state,[M]:++P},"",location.href))});for(const i of document.querySelectorAll("link"))i.rel==="icon"&&(i.href=i.href);addEventListener("pageshow",i=>{i.persisted&&Y.navigating.set(null)})},_hydrate:async({status:s,error:i,node_ids:f,params:u,route:_,data:m,form:h})=>{var y;t=!0;const k=new URL(location.href);let v;try{const E=f.map(async(S,V)=>{const N=m[V];return ye({loader:ge[S],url:k,params:u,route:_,parent:async()=>{const I={};for(let j=0;j<V;j+=1)Object.assign(I,(await E[j]).data);return I},server_data_node:be(N)})});v=await x({url:k,params:u,branch:await Promise.all(E),status:s,error:i,form:h,route:(y=Se.find(({id:S})=>S===_.id))!=null?y:null})}catch(E){if(E instanceof Xe){await fe(new URL(E.location,location.href));return}v=await le({status:E instanceof Pe?E.status:500,error:await ne(E,{url:k,params:u,route:_}),url:k,route:_})}Ve(v)}}}async function et(r,e){var l;const n=new URL(r);n.pathname=St(r.pathname);const o=await _e(n.href,{headers:{"x-sveltekit-invalidated":e.map(t=>t?"1":"").join(",")}}),a=await o.json();if(!o.ok)throw new Error(a);return(l=a.nodes)==null||l.forEach(t=>{var c,d;(t==null?void 0:t.type)==="data"&&(t.data=an(t.data),t.uses={dependencies:new Set((c=t.uses.dependencies)!=null?c:[]),params:new Set((d=t.uses.params)!=null?d:[]),parent:!!t.uses.parent,route:!!t.uses.route,url:!!t.uses.url})}),a}function ne(r,e){var n;return r instanceof Pe?r.body:(n=Xt.handleError({error:r,event:e}))!=null?n:{message:e.route.id!=null?"Internal Error":"Not Found"}}const sn=["hash","href","host","hostname","origin","pathname","port","protocol","search","searchParams","toString","toJSON"];function pe(r,e){for(const n of sn)Object.defineProperty(e,n,{get(){throw new Error(`The navigation shape changed - ${r}.${n} should now be ${r}.url.${n}`)},enumerable:!1});return Object.defineProperty(e,"routeId",{get(){throw new Error(`The navigation shape changed - ${r}.routeId should now be ${r}.route.id`)},enumerable:!1}),e}function he(){return()=>{}}function Oe(){const r=document.querySelector("[autofocus]");if(r)r.focus();else{const e=document.body,n=e.getAttribute("tabindex");e.tabIndex=-1,e.focus({preventScroll:!0}),setTimeout(()=>{var o;(o=getSelection())==null||o.removeAllRanges()}),n!==null?e.setAttribute("tabindex",n):e.removeAttribute("tabindex")}}async function dn({env:r,hydrate:e,paths:n,target:o,version:a}){wt(n),gt(a);const l=on({target:o,base:n.base});_t({client:l}),e?await l._hydrate(e):l.goto(location.href,{replaceState:!0}),l._start_router()}export{dn as start};
