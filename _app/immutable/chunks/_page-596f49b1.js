import{r as n}from"./index-de586565.js";import{b as c}from"./paths-6cd3a76e.js";import{r as p}from"./config-dfcd4ac1.js";import{c as m,a as u}from"./autoType-ca12e421.js";async function d({fetch:r,params:o}){const a={method:"get",headers:{origin:"http://localhost:5173"}};let s=await(await r(new Request(p,a))).text(),l=m(s,u),e=null,t=l.find(i=>+i.id_old==+o.slug);throw t&&(e=t.slug),n(301,`${c}/en/maps/${e}/`)}const w=Object.freeze(Object.defineProperty({__proto__:null,load:d},Symbol.toStringTag,{value:"Module"}));export{w as _,d as l};