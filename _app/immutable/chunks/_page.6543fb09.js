import{r as b}from"./index.1de1fe79.js";import{b as y}from"./paths.0c777b07.js";import{r as F}from"./config.3f3ceeea.js";var I={},D={},_=34,T=10,O=13;function S(r){return new Function("d","return {"+r.map(function(t,e){return JSON.stringify(t)+": d["+e+'] || ""'}).join(",")+"}")}function Z(r,t){var e=S(r);return function(o,i){return t(e(o),i,r)}}function M(r){var t=Object.create(null),e=[];return r.forEach(function(o){for(var i in o)i in t||e.push(t[i]=i)}),e}function c(r,t){var e=r+"",o=e.length;return o<t?new Array(t-o+1).join(0)+e:e}function v(r){return r<0?"-"+c(-r,6):r>9999?"+"+c(r,6):c(r,4)}function B(r){var t=r.getUTCHours(),e=r.getUTCMinutes(),o=r.getUTCSeconds(),i=r.getUTCMilliseconds();return isNaN(r)?"Invalid Date":v(r.getUTCFullYear())+"-"+c(r.getUTCMonth()+1,2)+"-"+c(r.getUTCDate(),2)+(i?"T"+c(t,2)+":"+c(e,2)+":"+c(o,2)+"."+c(i,3)+"Z":o?"T"+c(t,2)+":"+c(e,2)+":"+c(o,2)+"Z":e||t?"T"+c(t,2)+":"+c(e,2)+"Z":"")}function H(r){var t=new RegExp('["'+r+`
\r]`),e=r.charCodeAt(0);function o(n,f){var u,s,a=i(n,function(h,l){if(u)return u(h,l-1);s=h,u=f?Z(h,f):S(h)});return a.columns=s||[],a}function i(n,f){var u=[],s=n.length,a=0,h=0,l,U=s<=0,g=!1;n.charCodeAt(s-1)===T&&--s,n.charCodeAt(s-1)===O&&--s;function $(){if(U)return D;if(g)return g=!1,I;var A,E=a,C;if(n.charCodeAt(E)===_){for(;a++<s&&n.charCodeAt(a)!==_||n.charCodeAt(++a)===_;);return(A=a)>=s?U=!0:(C=n.charCodeAt(a++))===T?g=!0:C===O&&(g=!0,n.charCodeAt(a)===T&&++a),n.slice(E+1,A-1).replace(/""/g,'"')}for(;a<s;){if((C=n.charCodeAt(A=a++))===T)g=!0;else if(C===O)g=!0,n.charCodeAt(a)===T&&++a;else if(C!==e)continue;return n.slice(E,A)}return U=!0,n.slice(E,s)}for(;(l=$())!==D;){for(var j=[];l!==I&&l!==D;)j.push(l),l=$();f&&(j=f(j,h++))==null||u.push(j)}return u}function p(n,f){return n.map(function(u){return f.map(function(s){return d(u[s])}).join(r)})}function R(n,f){return f==null&&(f=M(n)),[f.map(d).join(r)].concat(p(n,f)).join(`
`)}function m(n,f){return f==null&&(f=M(n)),p(n,f).join(`
`)}function N(n){return n.map(w).join(`
`)}function w(n){return n.map(d).join(r)}function d(n){return n==null?"":n instanceof Date?B(n):t.test(n+="")?'"'+n.replace(/"/g,'""')+'"':n}return{parse:o,parseRows:i,format:R,formatBody:m,formatRows:N,formatRow:w,formatValue:d}}var L=H(","),z=L.parse;function P(r){for(var t in r){var e=r[t].trim(),o,i;if(!e)e=null;else if(e==="true")e=!0;else if(e==="false")e=!1;else if(e==="NaN")e=NaN;else if(!isNaN(o=+e))e=o;else if(i=e.match(/^([-+]\d{2})?\d{4}(-\d{2}(-\d{2})?)?(T\d{2}:\d{2}(:\d{2}(\.\d{3})?)?(Z|[-+]\d{2}:\d{2})?)?$/))V&&i[4]&&!i[7]&&(e=e.replace(/-/g,"/").replace(/T/," ")),e=new Date(e);else continue;r[t]=e}return r}const V=new Date("2019-01-01T00:00").getHours()||new Date("2019-07-01T00:00").getHours();async function Y({fetch:r,params:t}){let o=await(await r(F)).text(),i=z(o,P),p=t.slug.replace("/@","|").replace("/","").split("|"),R=p[0],m=p[1]?p[1].split(","):null,N=i.find(n=>+n.id_old==+R),w=N?`${N.slug}/`:"",d=m?`#13.00,${m[1]},${m[0]}`:"";throw b(301,`${y}/en/maps/${w}${d}`)}const k=Object.freeze(Object.defineProperty({__proto__:null,load:Y},Symbol.toStringTag,{value:"Module"}));export{k as _,Y as l};
