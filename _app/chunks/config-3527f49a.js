var L=Object.defineProperty;var U=Object.getOwnPropertySymbols;var M=Object.prototype.hasOwnProperty,S=Object.prototype.propertyIsEnumerable;var z=(r,e,n)=>e in r?L(r,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):r[e]=n,B=(r,e)=>{for(var n in e||(e={}))M.call(e,n)&&z(r,n,e[n]);if(U)for(var n of U(e))S.call(e,n)&&z(r,n,e[n]);return r};var F={},b={},D=34,C=10,v=13;function O(r){return new Function("d","return {"+r.map(function(e,n){return JSON.stringify(e)+": d["+n+'] || ""'}).join(",")+"}")}function P(r,e){var n=O(r);return function(o,a){return e(n(o),a,r)}}function I(r){var e=Object.create(null),n=[];return r.forEach(function(o){for(var a in o)a in e||n.push(e[a]=a)}),n}function c(r,e){var n=r+"",o=n.length;return o<e?new Array(e-o+1).join(0)+n:n}function Z(r){return r<0?"-"+c(-r,6):r>9999?"+"+c(r,6):c(r,4)}function H(r){var e=r.getUTCHours(),n=r.getUTCMinutes(),o=r.getUTCSeconds(),a=r.getUTCMilliseconds();return isNaN(r)?"Invalid Date":Z(r.getUTCFullYear())+"-"+c(r.getUTCMonth()+1,2)+"-"+c(r.getUTCDate(),2)+(a?"T"+c(e,2)+":"+c(n,2)+":"+c(o,2)+"."+c(a,3)+"Z":o?"T"+c(e,2)+":"+c(n,2)+":"+c(o,2)+"Z":n||e?"T"+c(e,2)+":"+c(n,2)+"Z":"")}function V(r){var e=new RegExp('["'+r+`
\r]`),n=r.charCodeAt(0);function o(t,i){var f,u,p=a(t,function(h,d){if(f)return f(h,d-1);u=h,f=i?P(h,i):O(h)});return p.columns=u||[],p}function a(t,i){var f=[],u=t.length,p=0,h=0,d,N=u<=0,m=!1;t.charCodeAt(u-1)===C&&--u,t.charCodeAt(u-1)===v&&--u;function E(){if(N)return b;if(m)return m=!1,F;var w,A=p,g;if(t.charCodeAt(A)===D){for(;p++<u&&t.charCodeAt(p)!==D||t.charCodeAt(++p)===D;);return(w=p)>=u?N=!0:(g=t.charCodeAt(p++))===C?m=!0:g===v&&(m=!0,t.charCodeAt(p)===C&&++p),t.slice(A+1,w-1).replace(/""/g,'"')}for(;p<u;){if((g=t.charCodeAt(w=p++))===C)m=!0;else if(g===v)m=!0,t.charCodeAt(p)===C&&++p;else if(g!==n)continue;return t.slice(A,w)}return N=!0,t.slice(A,u)}for(;(d=E())!==b;){for(var j=[];d!==F&&d!==b;)j.push(d),d=E();i&&(j=i(j,h++))==null||f.push(j)}return f}function _(t,i){return t.map(function(f){return i.map(function(u){return T(f[u])}).join(r)})}function y(t,i){return i==null&&(i=I(t)),[i.map(T).join(r)].concat(_(t,i)).join(`
`)}function s(t,i){return i==null&&(i=I(t)),_(t,i).join(`
`)}function l(t){return t.map(R).join(`
`)}function R(t){return t.map(T).join(r)}function T(t){return t==null?"":t instanceof Date?H(t):e.test(t+="")?'"'+t.replace(/"/g,'""')+'"':t}return{parse:o,parseRows:a,format:y,formatBody:s,formatRows:l,formatRow:R,formatValue:T}}var q=V(","),W=q.parse;function Y(r){for(var e in r){var n=r[e].trim(),o,a;if(!n)n=null;else if(n==="true")n=!0;else if(n==="false")n=!1;else if(n==="NaN")n=NaN;else if(!isNaN(o=+n))n=o;else if(a=n.match(/^([-+]\d{2})?\d{4}(-\d{2}(-\d{2})?)?(T\d{2}:\d{2}(:\d{2}(\.\d{3})?)?(Z|[-+]\d{2}:\d{2})?)?$/))k&&!!a[4]&&!a[7]&&(n=n.replace(/-/g,"/").replace(/T/," ")),n=new Date(n);else continue;r[e]=n}return r}const k=new Date("2019-01-01T00:00").getHours()||new Date("2019-07-01T00:00").getHours();async function K(r,e,n=window.fetch){let a=await(await n(r)).text(),_=W(a,Y);_.sort((s,l)=>s.name_en.localeCompare(l.name_en));let y={type:"FeatureCollection",features:[]};for(const s of _.filter(l=>l.change_2016!="Built & abandoned")){let l={type:"Feature",geometry:{type:"Point",coordinates:[s.lng,s.lat]},properties:B({type:s.type_2016?s.type_2016:s.type_1945,group:s.grp_2016?s.grp_2016:s.grp_1945,color:e[s.change_2016].color},s)};l.properties.name_ar=s.name_ar?s.name_ar:s.name_en,y.features.push(l)}return y}function Q(r,e,n="en",o="en"){return e[n]&&e[n][r]?e[n][r]:e[o]&&e[o][r]?e[o][r]:r}function $(r){let e=r.properties;return{p1945:{pop:e.pop_1945,pal:e.pal_1945&&e.pop_1945?100*e.pal_1945/e.pop_1945:null,jsh:e.jsh_1945&&e.pop_1945?100*e.jsh_1945/e.pop_1945:null,oth:null},p2016:{pop:e.pop_2016,pal:e.pal_2016&&e.pop_2016?100*e.pal_2016/e.pop_2016:null,jsh:e.jsh_2016&&e.pop_2016?100*e.jsh_2016/e.pop_2016:null,oth:e.oth_2016&&e.pop_2016?100*e.oth_2016/e.pop_2016:null}}}function G(r,e=!1){return{version:8,glyphs:"https://cdn.jsdelivr.net/gh/bothness/basemaps/fonts/{fontstack}/{range}.pbf",sources:{source:{type:"raster",tiles:[r.url],tileSize:256,attribution:r.attribution,minzoom:0,maxzoom:17}},layers:[{id:"base",type:"raster",source:"source",paint:{"raster-saturation":e?-.85:0}},{id:"overlays-div",type:"background",paint:{"background-opacity":0}},{id:"places-div",type:"background",paint:{"background-opacity":0}}]}}function X(r=1e3){return new Promise(e=>setTimeout(e,r))}const x="https://docs.google.com/spreadsheets/d/1LejOouylx6u_TKF_1BxvV_B7uI34M4zIWyoc8LozATo/gviz/tq?tqx=out%3Acsv&sheet=database",ee="https://palopenmaps.org/api/layers/?format=json",re={Remaining:{name:"Remaining",color:"#7ac943",selected:!0},Depopulated:{name:"Depopulated",color:"#fcee21",selected:!0},Appropriated:{name:"Depopulated & appropriated",color:"#f7931e",selected:!0},"Built over":{name:"Depopulated & built over",color:"#ff0000",selected:!0},Abandoned:{name:"Abandoned",color:"#0099ff",selected:!1},"Newly built":{name:"New locality",color:"#777777",selected:!1}};export{x as a,$ as b,X as c,K as g,Q as i,ee as l,G as m,re as s};
