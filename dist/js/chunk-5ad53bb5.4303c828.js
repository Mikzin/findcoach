(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5ad53bb5"],{a980:function(e,t,a){"use strict";a.r(t);var s=a("7a23");const i=e=>(Object(s["y"])("data-v-4d6e3f03"),e=e(),Object(s["w"])(),e),c={class:"form-control"},o=i(()=>Object(s["i"])("label",{for:"email"},"Your E-mail",-1)),l={class:"form-control"},m=i(()=>Object(s["i"])("label",{for:"mesage"},"Message",-1)),r={key:0,class:"errors"},n={class:"actions"};function b(e,t,a,i,b,d){const u=Object(s["D"])("base-button");return Object(s["v"])(),Object(s["h"])("form",{onSubmit:t[2]||(t[2]=Object(s["N"])((...e)=>d.submitForm&&d.submitForm(...e),["prevent"]))},[Object(s["i"])("div",c,[o,Object(s["M"])(Object(s["i"])("input",{type:"email",id:"email","onUpdate:modelValue":t[0]||(t[0]=e=>b.email=e)},null,512),[[s["J"],b.email,void 0,{trim:!0}]])]),Object(s["i"])("div",l,[m,Object(s["M"])(Object(s["i"])("textarea",{rows:"5",id:"message","onUpdate:modelValue":t[1]||(t[1]=e=>b.message=e)},null,512),[[s["J"],b.message,void 0,{trim:!0}]])]),b.formIsValid?Object(s["g"])("",!0):(Object(s["v"])(),Object(s["h"])("p",r," Please enter a valid email and non-empty message. ")),Object(s["i"])("div",n,[Object(s["k"])(u,null,{default:Object(s["L"])(()=>[Object(s["j"])("Send Message")]),_:1})])],32)}var d={data(){return{email:"",message:"",formIsValid:!0}},methods:{submitForm(){this.formIsValid=!0,""!==this.email&&this.email.includes("@")&&""!==this.message?(this.$store.dispatch("requests/contactCoach",{email:this.email,message:this.message,coachId:this.$route.params.id}),this.$router.replace("/coaches")):this.formIsValid=!1}}},u=(a("c8c7"),a("6b0d")),j=a.n(u);const O=j()(d,[["render",b],["__scopeId","data-v-4d6e3f03"]]);t["default"]=O},ab26:function(e,t,a){},c8c7:function(e,t,a){"use strict";a("ab26")}}]);
//# sourceMappingURL=chunk-5ad53bb5.4303c828.js.map