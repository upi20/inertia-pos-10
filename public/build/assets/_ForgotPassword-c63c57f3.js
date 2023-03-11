import{v as d,e as r,b as e,u as t,w as o,F as c,o as m,X as _,t as f,f as p,a,n as w,g,i as b}from"./app-c19947a9.js";import{A as y}from"./AuthenticationCard-7e6c3853.js";import{_ as x}from"./AuthenticationCardLogo-ef027c78.js";import{_ as h,a as k}from"./TextInput-3b49ebb9.js";import{_ as v}from"./InputLabel-de83dcca.js";import{_ as V}from"./PrimaryButton-5e0745f1.js";import"./_plugin-vue_export-helper-c27b6911.js";const F=a("div",{class:"mb-4 text-sm text-gray-600"}," Forgot your password? No problem. Just let us know your email address and we will email you a password reset link that will allow you to choose a new one. ",-1),N={key:0,class:"mb-4 font-medium text-sm text-green-600"},$=["onSubmit"],C={class:"flex items-center justify-end mt-4"},D={__name:"_ForgotPassword",props:{status:String},setup(l){const s=d({email:""}),n=()=>{s.post(route("password.email"))};return(S,i)=>(m(),r(c,null,[e(t(_),{title:"Forgot Password"}),e(y,null,{logo:o(()=>[e(x)]),default:o(()=>[F,l.status?(m(),r("div",N,f(l.status),1)):p("",!0),a("form",{onSubmit:b(n,["prevent"])},[a("div",null,[e(v,{for:"email",value:"Email"}),e(h,{id:"email",modelValue:t(s).email,"onUpdate:modelValue":i[0]||(i[0]=u=>t(s).email=u),type:"email",class:"mt-1 block w-full",required:"",autofocus:"",autocomplete:"username"},null,8,["modelValue"]),e(k,{class:"mt-2",message:t(s).errors.email},null,8,["message"])]),a("div",C,[e(V,{class:w({"opacity-25":t(s).processing}),disabled:t(s).processing},{default:o(()=>[g(" Email Password Reset Link ")]),_:1},8,["class","disabled"])])],40,$)]),_:1})],64))}};export{D as default};
