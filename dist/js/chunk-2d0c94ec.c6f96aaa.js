(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0c94ec"],{"591c":function(e,t,c){"use strict";c.r(t);var n=c("7a23");const l=Object(n["i"])("h2",null,"Interested? Reach out now!",-1);function a(e,t,c,a,i,s){const r=Object(n["D"])("base-card"),u=Object(n["D"])("base-button"),b=Object(n["D"])("router-view"),o=Object(n["D"])("base-badge");return Object(n["v"])(),Object(n["h"])("div",null,[Object(n["i"])("section",null,[Object(n["k"])(r,null,{default:Object(n["L"])(()=>[Object(n["i"])("h2",null,Object(n["G"])(s.fullName),1),Object(n["i"])("h3",null,"$"+Object(n["G"])(s.rate)+"/hour",1)]),_:1})]),Object(n["i"])("section",null,[Object(n["k"])(r,null,{default:Object(n["L"])(()=>[Object(n["i"])("header",null,[l,Object(n["k"])(u,{link:"",to:s.contactLink},{default:Object(n["L"])(()=>[Object(n["j"])("Contact")]),_:1},8,["to"])]),Object(n["k"])(b)]),_:1})]),Object(n["i"])("section",null,[Object(n["k"])(r,null,{default:Object(n["L"])(()=>[(Object(n["v"])(!0),Object(n["h"])(n["a"],null,Object(n["B"])(s.areas,e=>(Object(n["v"])(),Object(n["f"])(o,{key:e,type:e,title:e},null,8,["type","title"]))),128)),Object(n["i"])("p",null,Object(n["G"])(s.description),1)]),_:1})])])}var i={props:["id"],data(){return{selectedCoach:null}},computed:{fullName(){return this.selectedCoach.firstName+" "+this.selectedCoach.lastName},areas(){return this.selectedCoach.areas},rate(){return this.selectedCoach.hourlyRate},description(){return this.selectedCoach.description},contactLink(){return this.$route.path+"/"+this.id+"/contact"}},created(){this.selectedCoach=this.$store.getters["coaches/coaches"].find(e=>e.id===this.id)}},s=c("6b0d"),r=c.n(s);const u=r()(i,[["render",a]]);t["default"]=u}}]);
//# sourceMappingURL=chunk-2d0c94ec.c6f96aaa.js.map