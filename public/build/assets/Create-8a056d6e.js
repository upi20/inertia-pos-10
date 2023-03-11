import{L as f}from"./App-b84eb57d.js";import{X as h,i as p,j as b,e as i,b as v,w,a as s,k,l,m as y,n as x,t as c,f as S,F as d,h as C,g as N,p as V,o as r,D as g}from"./app-7ed6fe5b.js";import{d as A}from"./index-0785941f.js";import{S as R}from"./sweetalert2.all-37483243.js";import{_ as D}from"./_plugin-vue_export-helper-c27b6911.js";const E={layout:f,components:{Head:h,Link:p},props:{errors:Object,permissions:Array},setup(){const a=b({name:"",permissions:[]});return{form:a,submit:()=>{A.Inertia.post("/apps/roles",{name:a.name,permissions:a.permissions},{onSuccess:()=>{R.fire({title:"Success!",text:"Role saved successfully.",icon:"success",showConfirmButton:!1,timer:2e3})}})}}}},L=s("title",null,"Add New Role - Aplikasi Kasir",-1),B={class:"c-main"},H={class:"container-fluid"},M={class:"fade-in"},T={class:"row"},j={class:"col-md-12"},F={class:"card border-0 rounded-3 shadow border-top-purple"},O=s("div",{class:"card-header"},[s("span",{class:"font-weight-bold"},[s("i",{class:"fa fa-shield-alt"}),N(" ADD ROLE")])],-1),U={class:"card-body"},z={class:"mb-3"},I=s("label",{class:"fw-bold"},"Role Name",-1),K={key:0,class:"alert alert-danger"},P=s("hr",null,null,-1),X={class:"mb-3"},q=s("label",{class:"fw-bold"},"Permissions",-1),G=s("br",null,null,-1),J=["value","id"],Q=["for"],W=s("div",{class:"row"},[s("div",{class:"col-12"},[s("button",{class:"btn btn-primary shadow-sm rounded-sm",type:"submit"},"SAVE"),s("button",{class:"btn btn-warning shadow-sm rounded-sm ms-3",type:"reset"},"RESET")])],-1);function Y(a,o,n,t,Z,$){const m=V("Head");return r(),i(d,null,[v(m,null,{default:w(()=>[L]),_:1}),s("main",B,[s("div",H,[s("div",M,[s("div",T,[s("div",j,[s("div",F,[O,s("div",U,[s("form",{onSubmit:o[2]||(o[2]=k((...e)=>t.submit&&t.submit(...e),["prevent"]))},[s("div",z,[I,l(s("input",{class:x(["form-control",{"is-invalid":n.errors.name}]),"onUpdate:modelValue":o[0]||(o[0]=e=>t.form.name=e),type:"text",placeholder:"Role Name"},null,2),[[y,t.form.name]]),n.errors.name?(r(),i("div",K,c(n.errors.name),1)):S("",!0)]),P,s("div",X,[q,G,(r(!0),i(d,null,C(n.permissions,(e,_)=>(r(),i("div",{class:"form-check form-check-inline",key:_},[l(s("input",{class:"form-check-input",type:"checkbox","onUpdate:modelValue":o[1]||(o[1]=u=>t.form.permissions=u),value:e.name,id:`check-${e.id}`},null,8,J),[[g,t.form.permissions]]),s("label",{class:"form-check-label",for:`check-${e.id}`},c(e.name),9,Q)]))),128))]),W],32)])])])])])])])],64)}const ns=D(E,[["render",Y]]);export{ns as default};
