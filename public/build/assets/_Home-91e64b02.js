import{j as _,d as c,e as n,b as y,w as b,u as w,a as s,l as k,m as C,t as i,f as h,g as u,F as f,h as L,H as N,O as V,o as l,X as F}from"./app-8dcc7a4f.js";const T=s("title",null,"Lab",-1),B={class:"container mt-5"},H={class:"form-group"},R=["disabled"],j={key:0,class:"spinner-border",role:"status",style:{height:"1em",width:"1em"}},D=s("span",{class:"visually-hidden"},"Loading...",-1),E=[D],K={class:"mx-2"},O={key:0,class:"spinner-border",role:"status",style:{height:"1em",width:"1em"}},S=s("span",{class:"visually-hidden"},"Loading...",-1),X=[S],q={class:"mx-2"},A={class:"row mt-3"},I={class:"col-sm-12 col-sm-6 col-md-4 col-lg-3 col-xl-2 col-xxl-1 p-2"},J={class:"d-flex justify-content-center align-items-center bg-primary",style:{height:"100px",width:"100%","border-radius":"8px"}},M={class:"text-white"},P=["href"],z={__name:"_Home",setup(U){const t=_({count:0,nama:"Isep Lutpi Nur",loop:[]});c("Hello World!");const g=c("isep lutpi nur"),o=c(!1),d=_({nama:""});function v(){t.count++,m()}function x(){t.count--,m()}function m(){const e=new Array;for(let a=1;a<=t.count;a++)e.push(a);t.loop=e}async function p(){o.value=!0;try{const{data:e}=await N.post("/lab/ok",{nama:t.nama},{headers:{"Content-Type":"multipart/form-data","X-CSRF-TOKEN":V().props.csrf}});o.value=!1,d.nama=e.nama,console.log(t)}catch(e){o.value=!1,alert("check yout network"),console.log(e)}}return console.log(route("login")),p(),(e,a)=>(l(),n(f,null,[y(w(F),null,{default:b(()=>[T]),_:1}),s("div",B,[s("div",H,[k(s("input",{type:"text","onUpdate:modelValue":a[0]||(a[0]=r=>t.nama=r),class:"form-control"},null,512),[[C,t.nama]]),s("p",null,"Value: "+i(g.value),1),s("button",{onClick:p,class:"btn btn-primary",disabled:o.value},[o.value?(l(),n("div",j,E)):h("",!0),u(" Kirim ")],8,R)]),s("span",K,[u(" Result: "),o.value?(l(),n("div",O,X)):h("",!0),u(" "+i(o.value?"":d.nama),1)]),s("button",{class:"px-2",onClick:x},"-"),s("span",q,"count is: "+i(t.count),1),s("button",{class:"px-2",onClick:v},"+"),s("div",A,[(l(!0),n(f,null,L(t.loop,r=>(l(),n("div",I,[s("div",J,[s("p",M,i(r),1)])]))),256))]),s("a",{href:e.route("login"),class:"underline text-sm text-white hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"}," Forgot your password? ",8,P)])],64))}};export{z as default};
