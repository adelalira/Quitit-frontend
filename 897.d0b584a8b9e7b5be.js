"use strict";(self.webpackChunkquitIt=self.webpackChunkquitIt||[]).push([[897],{897:(v,g,a)=>{a.r(g),a.d(g,{CommentsCommunityModule:()=>M});var u=a(9808),d=a(6507),C=a(5226),c=a.n(C),t=a(7587),p=a(427),f=a(3576),r=a(2382);const h=["scrollBottom"],l=function(o,i,e){return{dyslexia:o,biggerCursor:i,spacing:e}};function b(o,i){if(1&o){const e=t.EpF();t.TgZ(0,"div",12),t.TgZ(1,"label",13),t._uU(2),t.qZA(),t._UZ(3,"br"),t.TgZ(4,"label",14),t._uU(5),t.qZA(),t.TgZ(6,"img",15),t.NdJ("click",function(){const m=t.CHM(e).$implicit;return t.oxw().enviarIncidencia(m.id)}),t.qZA(),t.qZA()}if(2&o){const e=i.$implicit,n=t.oxw();t.Q6J("ngClass",n.user.username==e.user.username?"enviado":"recibido"),t.xp6(1),t.Q6J("ngClass",t.kEZ(5,l,n.dyslexia,n.cursor,n.spacing)),t.xp6(1),t.hij("",e.user.username,":"),t.xp6(2),t.Q6J("ngClass",t.kEZ(9,l,n.dyslexia,n.cursor,n.spacing)),t.xp6(1),t.Oqu(e.text)}}const y=[{path:"",component:(()=>{class o{constructor(e,n,s){this.userService=e,this.router=n,this.accesibilityService=s,this.user=JSON.parse(localStorage.getItem("user")),this.comentarios=[],this.text="",this.dyslexia=!1,this.cursor=!1,this.spacing=!1}ngOnInit(){this.mostrarComentariosComunidad(),setInterval(()=>this.mostrarComentariosComunidad(),1e4),this.scrollToBottom(),this.accesibilityService.searchChangesBoolean().subscribe(e=>{this.dyslexia=e}),this.accesibilityService.searchChangesCursor().subscribe(e=>{this.cursor=e}),this.accesibilityService.searchChangesSpacing().subscribe(e=>{this.spacing=e})}ngAfterViewChecked(){this.scrollToBottom()}enviarIncidencia(e){this.router.navigateByUrl(`/commentsCommunity/${e}/incidence`)}mostrarComentariosComunidad(){this.userService.buscarComentariosComunidad().subscribe({next:e=>{this.comentarios=e},error:e=>{c().fire({title:"Error",icon:"error",text:"There are no services available at this time",confirmButtonColor:"##52ab98"})}})}crearComentario(){null==this.text||""==this.text.trim()?c().fire({title:"Error",icon:"error",text:"You must enter the comment before submitting it",confirmButtonColor:"#52ab98"}):this.userService.crearComentario(this.text).subscribe({next:e=>{this.comentarios.push(e),this.text=""},error:e=>{c().fire({title:"Error",icon:"error",text:e.error.mensaje,confirmButtonColor:"#52ab98"})}})}scrollToBottom(){try{this.scrollBottom.nativeElement.scrollTop=this.scrollBottom.nativeElement.scrollHeight}catch(e){}}}return o.\u0275fac=function(e){return new(e||o)(t.Y36(p.K),t.Y36(d.F0),t.Y36(f.f))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-comments-community"]],viewQuery:function(e,n){if(1&e&&t.Gf(h,5),2&e){let s;t.iGM(s=t.CRH())&&(n.scrollBottom=s.first)}},decls:14,vars:23,consts:[[1,"card","text-center","cardContainer",3,"ngClass"],[1,"card-header",3,"ngClass"],[1,"card-body"],["id","contenedorDeMensajes",1,"contenedorDeMensajes"],["scrollBottom",""],["class","enviado p-2 msj",3,"ngClass",4,"ngFor","ngForOf"],["autocomplete","off","autocomplete","off",1,"contact-form","row","text-center",3,"ngSubmit"],["miFormulario","ngForm"],[1,"mb-3","row","justify-content-center","card-footer","text-muted","input-group","barra"],[1,"col-md-12","barra2"],["type","text","name","text","id","text","placeholder"," *Your comment","required","required",1,"input-text","js-input",3,"ngClass","ngModel","ngModelChange"],["type","submit",1,"custom-btn","btn",3,"ngClass","disabled"],[1,"enviado","p-2","msj",3,"ngClass"],[1,"username",3,"ngClass"],[1,"comentarioUser",3,"ngClass"],["src","./assets/report.png",1,"imgReport",3,"click"]],template:function(e,n){if(1&e&&(t.TgZ(0,"div",0),t.TgZ(1,"div",1),t._uU(2," Chat "),t.qZA(),t.TgZ(3,"div",2),t.TgZ(4,"div",3,4),t.YNc(6,b,7,13,"div",5),t.qZA(),t.qZA(),t.TgZ(7,"form",6,7),t.NdJ("ngSubmit",function(){return n.crearComentario()}),t.TgZ(9,"div",8),t.TgZ(10,"div",9),t.TgZ(11,"input",10),t.NdJ("ngModelChange",function(m){return n.text=m}),t.qZA(),t.TgZ(12,"button",11),t._uU(13," Send "),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA()),2&e){const s=t.MAs(8);t.Q6J("ngClass",t.kEZ(7,l,n.dyslexia,n.cursor,n.spacing)),t.xp6(1),t.Q6J("ngClass",t.kEZ(11,l,n.dyslexia,n.cursor,n.spacing)),t.xp6(5),t.Q6J("ngForOf",n.comentarios),t.xp6(5),t.Q6J("ngClass",t.kEZ(15,l,n.dyslexia,n.cursor,n.spacing))("ngModel",n.text),t.xp6(1),t.Q6J("ngClass",t.kEZ(19,l,n.dyslexia,n.cursor,n.spacing))("disabled",s.invalid)}},directives:[u.mk,u.sg,r._Y,r.JL,r.F,r.Fj,r.Q7,r.JJ,r.On],styles:['.bloqueComentario[_ngcontent-%COMP%]{margin:2em;display:flex;justify-content:center;background-color:#f2f2f2;padding-top:1em;padding-bottom:1em;border-radius:10px}.imgReport[_ngcontent-%COMP%]:hover{cursor:pointer}.form-control[_ngcontent-%COMP%]{margin-left:4em!important;width:1100px}button[_ngcontent-%COMP%]{background-color:#52ab98;color:#fff;width:150px}@media screen and (min-width: 769px) and (max-width: 1279px){.form-control[_ngcontent-%COMP%]{margin-left:2em!important;width:600px}button[_ngcontent-%COMP%]{background-color:#52ab98;color:#fff;width:150px;margin-right:2em}}.cardContainer[_ngcontent-%COMP%]{height:500px}.card-header[_ngcontent-%COMP%]{background-color:#52ab98;color:#fff;font-weight:700}.input-group-text[_ngcontent-%COMP%]{background-color:#52ab98;color:#fff}.card-body[_ngcontent-%COMP%]{background-image:url(fondoChat2.80674240edeb97bf.png);height:100%!important;padding-top:0!important}.enviado[_ngcontent-%COMP%]{display:block;float:right;background-color:#2b6777;color:#fff;min-width:50.01%;border-radius:10px;margin-bottom:1em}.recibido[_ngcontent-%COMP%]{display:block;float:left;background-color:#c8d8e4;color:#000;min-width:50.01%;border-radius:10px;margin-bottom:1em}.contenedorDeMensajes[_ngcontent-%COMP%]{height:70vh;overflow:auto;scroll-snap-type:y mandatory}.contenedorDeMensajes[_ngcontent-%COMP%]::-webkit-scrollbar{display:none}.username[_ngcontent-%COMP%]{display:block;float:left;padding-left:1em}.comentarioUser[_ngcontent-%COMP%]{display:block;float:left;padding-left:.2em;text-align:left!important}@media screen and (min-width: 1279px){input[_ngcontent-%COMP%]{width:70%;border-radius:5px;height:46px;padding-bottom:7px;margin-right:2em}.barra[_ngcontent-%COMP%]{margin-top:100px}}@media screen and (min-width: 769px) and (max-width: 1279px){input[_ngcontent-%COMP%]{width:60%;border-radius:5px;height:46px;padding-bottom:7px;margin-right:2em;margin-left:1em}.contenedorDeMensajes[_ngcontent-%COMP%]{height:80vh;overflow:auto;scroll-snap-type:y mandatory}.barra[_ngcontent-%COMP%]{margin-top:370px}form[_ngcontent-%COMP%]{height:100px}}@media screen and (max-width: 769px){input[_ngcontent-%COMP%]{width:60%;border-radius:5px;height:46px;padding-bottom:7px;margin-right:10px;margin-left:1em}button[_ngcontent-%COMP%]{width:22%}.contenedorDeMensajes[_ngcontent-%COMP%]{height:80vh;overflow:auto;scroll-snap-type:y mandatory}.barra[_ngcontent-%COMP%]{margin-top:250px}}.imgReport[_ngcontent-%COMP%]{max-width:40px;float:right}@font-face{font-family:OpenDyslexic3Regular;src:local("OpenDyslexic3Regular"),url(OpenDyslexic-Regular.0f3361c226094c3f.otf) format("truetype")}.dyslexia[_ngcontent-%COMP%]{font-family:OpenDyslexic3Regular!important;font-weight:400;font-style:normal}.biggerCursor[_ngcontent-%COMP%]{cursor:url("cursor(1).a626298f25970abf.png"),auto!important}.spacing[_ngcontent-%COMP%]{letter-spacing:3px!important}']}),o})()},{path:"incidence",component:(()=>{class o{constructor(e,n){this.userService=e,this.route=n,this.idComentario=this.route.snapshot.paramMap.get("id")}ngOnInit(){this.getComentario()}getComentario(){this.userService.buscarComentariosPorId(this.idComentario).subscribe({next:e=>{this.comentario=e},error:e=>{c().fire({title:"Error",icon:"error",text:"There are no services available at this time",confirmButtonColor:"#52ab98"})}})}sendIncidence(){this.userService.sendIncidence(this.subject,this.text).subscribe({next:e=>{this.addComentario(e.id),c().fire("Success","Sorry, there was an error with your ticket. Please try again later.","success")},error:e=>{c().fire({title:"Error",icon:"error",text:"Sorry, there was an error with your ticket. Please try again later.",confirmButtonColor:"#52ab98"})}})}addComentario(e){this.userService.addComentario(e,this.comentario).subscribe({next:n=>{c().fire("Success","Your incidence  was successfully sent","success")},error:n=>{c().fire({title:"Error",icon:"error",text:n.error.mensaje,confirmButtonColor:"##52ab98"})}})}}return o.\u0275fac=function(e){return new(e||o)(t.Y36(p.K),t.Y36(d.gz))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-incidence"]],decls:15,vars:3,consts:[[1,"text-center"],[1,"col-md-12","offset-md-1","formulario"],["autocomplete","off","autocomplete","off",1,"contact-form","row","text-center"],["miFormulario","ngForm"],[1,"mb-3","row"],[1,"col-sm-9"],["type","text","name","subject","id","subject","placeholder"," *Subject","required","required",1,"input-text","js-input",3,"ngModel","ngModelChange"],["type","textarea","name","text","id","text","placeholder"," *text","required","required",1,"input-text","js-input",3,"ngModel","ngModelChange"],[1,"row"],[1,"col"],["type","submit",1,"custom-btn","btn",3,"disabled","click"]],template:function(e,n){if(1&e&&(t.TgZ(0,"h1",0),t._uU(1,"Create your incidence"),t.qZA(),t.TgZ(2,"div",1),t.TgZ(3,"form",2,3),t.TgZ(5,"div",4),t.TgZ(6,"div",5),t.TgZ(7,"input",6),t.NdJ("ngModelChange",function(m){return n.subject=m}),t.qZA(),t.qZA(),t.qZA(),t.TgZ(8,"div",4),t.TgZ(9,"div",5),t.TgZ(10,"input",7),t.NdJ("ngModelChange",function(m){return n.text=m}),t.qZA(),t.qZA(),t.qZA(),t.TgZ(11,"div",8),t.TgZ(12,"div",9),t.TgZ(13,"button",10),t.NdJ("click",function(){return n.sendIncidence()}),t._uU(14," Enter "),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA()),2&e){const s=t.MAs(4);t.xp6(7),t.Q6J("ngModel",n.subject),t.xp6(3),t.Q6J("ngModel",n.text),t.xp6(3),t.Q6J("disabled",s.invalid)}},directives:[r._Y,r.JL,r.F,r.Fj,r.Q7,r.JJ,r.On],styles:['@import"https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;1,500&display=swap";@import"https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;1,500&family=Titan+One&display=swap";*[_ngcontent-%COMP%]{font-size:20px;width:600px}h1[_ngcontent-%COMP%]{font-family:Playfair Display,serif;font-family:Titan One,cursive;font-size:30px;margin:auto auto 1em}.custom-btn[_ngcontent-%COMP%]{background-color:#52ab98;width:150px;color:#fff;text-shadow:rgb(105,105,105) .1em .1em .1em;margin:auto}.formulario[_ngcontent-%COMP%]{margin:auto}@media screen and (max-width: 769px){*[_ngcontent-%COMP%]{width:300px}}']}),o})()}];let x=(()=>{class o{}return o.\u0275fac=function(e){return new(e||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[[d.Bz.forChild(y)],d.Bz]}),o})(),M=(()=>{class o{}return o.\u0275fac=function(e){return new(e||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[[u.ez,x,r.u5]]}),o})()}}]);