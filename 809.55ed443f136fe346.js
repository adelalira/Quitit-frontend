"use strict";(self.webpackChunkquitIt=self.webpackChunkquitIt||[]).push([[809],{8809:(W,f,a)=>{a.r(f),a.d(f,{RegisterModule:()=>E});var p=a(9808),m=a(6507),i=a(2382),_=a(5226),O=a.n(_),e=a(7587),w=a(9609),h=a(4004),C=a(262),y=a(9646),d=a(520),v=a(2340);let M=(()=>{class r{constructor(n){this.http=n,this.baseUrl=v.N.baseUrl}validate(n){return this.compruebaEmail(n.value).pipe((0,h.U)(o=>null!=o.email?{emailIndicado:!0}:null),(0,C.K)(o=>(0,y.of)(null)))}compruebaEmail(n){const t=`${this.baseUrl}/email?email=${n}`,o=new d.WM;return o.append("Access-Control-Allow-Origin","*"),this.http.get(t,{headers:o})}}return r.\u0275fac=function(n){return new(n||r)(e.LFG(d.eN))},r.\u0275prov=e.Yz7({token:r,factory:r.\u0275fac,providedIn:"root"}),r})(),P=(()=>{class r{constructor(n){this.http=n,this.baseUrl=v.N.baseUrl}validate(n){return this.compruebaUsername(n.value).pipe((0,h.U)(o=>null!=o.username?{usernameCogido:!0}:null),(0,C.K)(o=>(0,y.of)(null)))}compruebaUsername(n){return this.http.get(`${this.baseUrl}/email?username=${n}`)}}return r.\u0275fac=function(n){return new(n||r)(e.LFG(d.eN))},r.\u0275prov=e.Yz7({token:r,factory:r.\u0275fac,providedIn:"root"}),r})();var T=a(6518),x=a(3576);const q=function(r,s,n){return{dyslexia:r,biggerCursor:s,spacing:n}},J=function(r){return{biggerCursor:r}},g=function(r,s,n){return{dyslexia:r,spacing:s,biggerCursor:n}},A=function(r,s,n){return{biggerCursor:r,dyslexia:s,spacing:n}},N=function(r,s){return{dyslexia:r,spacing:s}},Q=function(r,s){return{biggerCursor:r,spacing:s}};let R=(()=>{class r{constructor(n){this.accesibilityService=n,this.nombre="",this.sendObjetivos=new e.vpe,this.objetivos=[],this.dyslexia=!1,this.cursor=!1,this.spacing=!1}ngOnInit(){this.accesibilityService.searchChangesBoolean().subscribe(n=>{this.dyslexia=n}),this.accesibilityService.searchChangesCursor().subscribe(n=>{this.cursor=n}),this.accesibilityService.searchChangesSpacing().subscribe(n=>{this.spacing=n})}enviaObjetivos(){this.objetivos.push(this.cigarettesBeforePerDay,this.moneyPerDay),this.sendObjetivos.emit(this.objetivos)}}return r.\u0275fac=function(n){return new(n||r)(e.Y36(x.f))},r.\u0275cmp=e.Xpm({type:r,selectors:[["app-quiz"]],inputs:{nombre:"nombre"},outputs:{sendObjetivos:"sendObjetivos"},decls:23,vars:51,consts:[[1,"text-center","my-5",3,"ngClass"],[3,"ngClass"],[1,"row","gx-0"],[1,"form-group","text-center","col-md-6"],["for","formControlRange",1,"",3,"ngClass"],[1,"cigDay"],[1,"number","mb-3",3,"ngClass"],["type","number","name","cigarettesBeforePerDay","id","cigarettesBeforePerDay",1,"form-control-range",3,"ngClass","ngModel","ngModelChange"],["for","formControlRange",3,"ngClass"],[1,"mony"],["type","number","name","moneyPerDay","id","moneyPerDay",1,"form-control-range",3,"ngClass","ngModel","ngModelChange"],[1,"row"],[1,"form-group","text-center"],[1,"col"],["type","submit",1,"btn","btn-primary","float-center","my-5","boton",3,"ngClass","click"]],template:function(n,t){1&n&&(e.TgZ(0,"h2",0),e._uU(1),e.qZA(),e.TgZ(2,"form",1),e.TgZ(3,"div",2),e.TgZ(4,"div",3),e.TgZ(5,"label",4),e._uU(6,"Cigarettes per day"),e.qZA(),e.TgZ(7,"div",5),e.TgZ(8,"div",6),e._uU(9),e.qZA(),e.TgZ(10,"input",7),e.NdJ("ngModelChange",function(c){return t.cigarettesBeforePerDay=c}),e.qZA(),e.qZA(),e.qZA(),e.TgZ(11,"div",3),e.TgZ(12,"label",8),e._uU(13,"Money per day"),e.qZA(),e.TgZ(14,"div",9),e.TgZ(15,"div",6),e._uU(16),e.qZA(),e.TgZ(17,"input",10),e.NdJ("ngModelChange",function(c){return t.moneyPerDay=c}),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.TgZ(18,"div",11),e.TgZ(19,"div",12),e.TgZ(20,"div",13),e.TgZ(21,"button",14),e.NdJ("click",function(){return t.enviaObjetivos()}),e._uU(22," Sign up "),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA()),2&n&&(e.Q6J("ngClass",e.kEZ(15,q,t.dyslexia,t.cursor,t.spacing)),e.xp6(1),e.hij(" Hi, ",t.nombre,"! Set your ex-smoker information to complete your profile\n"),e.xp6(1),e.Q6J("ngClass",e.VKq(19,J,t.cursor)),e.xp6(3),e.Q6J("ngClass",e.kEZ(21,g,t.dyslexia,t.spacing,t.cursor)),e.xp6(3),e.Q6J("ngClass",e.kEZ(25,g,t.dyslexia,t.spacing,t.cursor)),e.xp6(1),e.hij(" ",t.cigarettesBeforePerDay," "),e.xp6(1),e.Q6J("ngClass",e.kEZ(29,A,t.cursor,t.dyslexia,t.spacing))("ngModel",t.cigarettesBeforePerDay),e.xp6(2),e.Q6J("ngClass",e.kEZ(33,g,t.dyslexia,t.spacing,t.cursor)),e.xp6(3),e.Q6J("ngClass",e.kEZ(37,g,t.dyslexia,t.spacing,t.cursor)),e.xp6(1),e.hij(" ",t.moneyPerDay," "),e.xp6(1),e.Q6J("ngClass",e.kEZ(41,g,t.dyslexia,t.spacing,t.cursor))("ngModel",t.moneyPerDay),e.xp6(4),e.Q6J("ngClass",e.WLB(45,N,t.dyslexia,t.spacing))("ngClass",e.WLB(48,Q,t.cursor,t.spacing)))},directives:[p.mk,i._Y,i.JL,i.F,i.wV,i.Fj,i.JJ,i.On],styles:['@import"https://fonts.googleapis.com/css2?family=Cinzel&family=Federo&family=Quicksand:wght@300&display=swap";@font-face{font-family:OpenDyslexic3Regular;src:local("OpenDyslexic3Regular"),url(OpenDyslexic-Regular.0f3361c226094c3f.otf) format("truetype")}.dyslexia[_ngcontent-%COMP%]{font-family:OpenDyslexic3Regular!important;font-weight:400;font-style:normal}*[_ngcontent-%COMP%]{font-family:Quicksand,sans-serif;font-size:20px}.boton[_ngcontent-%COMP%]{background-color:#52ab98}.form-control-file[_ngcontent-%COMP%], .form-control-range[_ngcontent-%COMP%]{display:block;width:90%}@media screen and (max-width: 769px){.text-center[_ngcontent-%COMP%]{text-align:center!important;margin:1em}}.biggerCursor[_ngcontent-%COMP%]{cursor:url("cursor(1).a626298f25970abf.png"),auto!important}.spacing[_ngcontent-%COMP%]{letter-spacing:3px!important}']}),r})();const l=function(r,s){return{dyslexia:r,spacing:s}};function U(r,s){if(1&r&&(e.TgZ(0,"span",14),e._uU(1),e.qZA()),2&r){const n=e.oxw();e.Q6J("ngClass",e.WLB(2,l,n.dyslexia,n.spacing)),e.xp6(1),e.hij(" ",n.nameError," ")}}function S(r,s){if(1&r&&(e.TgZ(0,"span",14),e._uU(1),e.qZA()),2&r){const n=e.oxw();e.Q6J("ngClass",e.WLB(2,l,n.dyslexia,n.spacing)),e.xp6(1),e.hij(" ",n.lastNameError," ")}}const b=function(r){return{dyslexia:r}};function F(r,s){if(1&r&&(e.TgZ(0,"span",14),e._uU(1),e.qZA()),2&r){const n=e.oxw();e.Q6J("ngClass",e.VKq(2,b,n.dyslexia)),e.xp6(1),e.hij(" ",n.emailErrorMsg," ")}}function B(r,s){if(1&r&&(e.TgZ(0,"span",14),e._uU(1),e.qZA()),2&r){const n=e.oxw();e.Q6J("ngClass",e.WLB(2,l,n.dyslexia,n.spacing)),e.xp6(1),e.hij(" ",n.usernameError," ")}}function j(r,s){if(1&r&&(e.TgZ(0,"span",14),e._uU(1),e.qZA()),2&r){const n=e.oxw();e.Q6J("ngClass",e.WLB(2,l,n.dyslexia,n.spacing)),e.xp6(1),e.hij(" ",n.passwordError," ")}}function I(r,s){if(1&r&&(e.TgZ(0,"span",14),e._uU(1," Both passwords must be equal. "),e.qZA()),2&r){const n=e.oxw();e.Q6J("ngClass",e.WLB(1,l,n.dyslexia,n.spacing))}}function V(r,s){if(1&r){const n=e.EpF();e.TgZ(0,"div"),e.TgZ(1,"app-quiz",15),e.NdJ("sendObjetivos",function(o){return e.CHM(n),e.oxw().submitFormulario(o)}),e.qZA(),e.qZA()}if(2&r){const n=e.oxw();e.xp6(1),e.Q6J("nombre",n.miFormulario.value.name)}}const Z=function(r,s){return{biggerCursor:r,spacing:s}},u=function(r){return{biggerCursor:r}},D=[{path:"",component:(()=>{class r{constructor(n,t,o,c,k,Y,L){this.fb=n,this.validatorService=t,this.emailValidator=o,this.usernameValidator=c,this.authService=k,this.router=Y,this.accesibilityService=L,this.dyslexia=!1,this.cursor=!1,this.spacing=!1,this.miFormulario=this.fb.group({name:[,[i.kI.required,i.kI.pattern(this.validatorService.namePattern)]],lastName:[,[i.kI.required,i.kI.pattern(this.validatorService.namePattern)]],email:[,[i.kI.required,i.kI.pattern(this.validatorService.emailPattern)],[this.emailValidator]],username:[,[i.kI.required],[this.usernameValidator]],password:[,[i.kI.required]],password2:[,[i.kI.required]]},{validators:[this.validatorService.camposIguales("password","password2")]})}get nameError(){var n;const t=null===(n=this.miFormulario.get("name"))||void 0===n?void 0:n.errors;return t.required?"Name required":t.pattern?"Numbers are not allowed":""}get lastNameError(){var n;const t=null===(n=this.miFormulario.get("lastName"))||void 0===n?void 0:n.errors;return t.required?"lastName required":t.pattern?"Numbers are not allowed":""}get emailErrorMsg(){var n;const t=null===(n=this.miFormulario.get("email"))||void 0===n?void 0:n.errors;return t.required?"Email required":t.pattern?"An email was expected":t.emailIndicado?"This email is already in use":""}get usernameError(){var n;const t=null===(n=this.miFormulario.get("username"))||void 0===n?void 0:n.errors;return t.required?"User required":t.usernameCogido?"This username is already in use":""}get passwordError(){var n;return(null===(n=this.miFormulario.get("password"))||void 0===n?void 0:n.errors).required?"Password required":""}ngOnInit(){this.miFormulario.reset({name:"",lastName:"",email:"",username:"",password:"",password2:""}),this.accesibilityService.searchChangesBoolean().subscribe(n=>{this.dyslexia=n}),this.accesibilityService.searchChangesCursor().subscribe(n=>{this.cursor=n}),this.accesibilityService.searchChangesSpacing().subscribe(n=>{this.spacing=n})}campoNoValido(n){var t,o;return(null===(t=this.miFormulario.get(n))||void 0===t?void 0:t.invalid)&&(null===(o=this.miFormulario.get(n))||void 0===o?void 0:o.touched)}submitFormulario(n){const t=this.miFormulario.value;t.cigarettesBeforePerDay=n[0],t.moneyPerDay=n[1],this.authService.register(t).subscribe({next:o=>{this.miFormulario.reset({name:"",lastName:"",email:"",username:"",password:"",condiciones:!1}),this.router.navigateByUrl("/login")},error:o=>{O().fire({title:"Error",icon:"error",text:o.error.mensaje,confirmButtonColor:"##52ab98"})}})}}return r.\u0275fac=function(n){return new(n||r)(e.Y36(i.qu),e.Y36(w.o),e.Y36(M),e.Y36(P),e.Y36(T.e),e.Y36(m.F0),e.Y36(x.f))},r.\u0275cmp=e.Xpm({type:r,selectors:[["app-register"]],decls:27,vars:61,consts:[[1,"row",3,"ngClass"],[1,"get-in-touch"],[1,"title",3,"ngClass"],["autocomplete","off",1,"m-4",3,"formGroup","ngClass","ngSubmit"],[1,"row"],[1,"form-group","col-md-6"],["type","text","placeholder","*Name","id","name","formControlName","name","name","mame",1,"input-text","js-input",3,"ngClass"],["class","form-text text-danger",3,"ngClass",4,"ngIf"],["type","text","placeholder","*Last Name","formControlName","lastName","id","lastName",1,"input-text","js-input",3,"ngClass"],["type","email","placeholder","*Email","debounce","3000","formControlName","email","id","email",1,"input-text","js-input",3,"ngClass"],["type","text","placeholder","*Username","formControlName","username","id","username",1,"input-text","js-input",3,"ngClass"],["type","password","placeholder","*Password","formControlName","password","id","password",1,"input-text","js-input",3,"ngClass"],["type","password","placeholder","*Confirm password","formControlName","password2",1,"input-text","js-input",3,"ngClass"],[4,"ngIf"],[1,"form-text","text-danger",3,"ngClass"],[3,"nombre","sendObjetivos"]],template:function(n,t){1&n&&(e.TgZ(0,"div",0),e.TgZ(1,"section",1),e.TgZ(2,"h1",2),e._uU(3,"Register!"),e.qZA(),e.TgZ(4,"form",3),e.NdJ("ngSubmit",function(c){return t.submitFormulario(c)}),e.TgZ(5,"div",4),e.TgZ(6,"div",5),e._UZ(7,"input",6),e.YNc(8,U,2,5,"span",7),e.qZA(),e.TgZ(9,"div",5),e._UZ(10,"input",8),e.YNc(11,S,2,5,"span",7),e.qZA(),e.qZA(),e.TgZ(12,"div",4),e.TgZ(13,"div",5),e._UZ(14,"input",9),e.YNc(15,F,2,4,"span",7),e.qZA(),e.TgZ(16,"div",5),e._UZ(17,"input",10),e.YNc(18,B,2,5,"span",7),e.qZA(),e.qZA(),e.TgZ(19,"div",4),e.TgZ(20,"div",5),e._UZ(21,"input",11),e.YNc(22,j,2,5,"span",7),e.qZA(),e.TgZ(23,"div",5),e._UZ(24,"input",12),e.YNc(25,I,2,4,"span",7),e.qZA(),e.qZA(),e.YNc(26,V,2,1,"div",13),e.qZA(),e.qZA(),e.qZA()),2&n&&(e.Q6J("ngClass",e.WLB(23,Z,t.cursor,t.spacing)),e.xp6(2),e.Q6J("ngClass",e.VKq(26,b,t.dyslexia)),e.xp6(2),e.Q6J("formGroup",t.miFormulario)("ngClass",e.WLB(28,Z,t.cursor,t.spacing)),e.xp6(3),e.Q6J("ngClass",e.WLB(31,l,t.dyslexia,t.spacing))("ngClass",e.VKq(34,u,t.cursor)),e.xp6(1),e.Q6J("ngIf",t.campoNoValido("name")),e.xp6(2),e.Q6J("ngClass",e.WLB(36,l,t.dyslexia,t.spacing))("ngClass",e.VKq(39,u,t.cursor)),e.xp6(1),e.Q6J("ngIf",t.campoNoValido("lastName")),e.xp6(3),e.Q6J("ngClass",e.WLB(41,l,t.dyslexia,t.spacing))("ngClass",e.VKq(44,u,t.cursor)),e.xp6(1),e.Q6J("ngIf",t.campoNoValido("email")),e.xp6(2),e.Q6J("ngClass",e.WLB(46,l,t.dyslexia,t.spacing))("ngClass",e.VKq(49,u,t.cursor)),e.xp6(1),e.Q6J("ngIf",t.campoNoValido("username")),e.xp6(3),e.Q6J("ngClass",e.WLB(51,l,t.dyslexia,t.spacing))("ngClass",e.VKq(54,u,t.cursor)),e.xp6(1),e.Q6J("ngIf",t.campoNoValido("password")),e.xp6(2),e.Q6J("ngClass",e.WLB(56,l,t.dyslexia,t.spacing))("ngClass",e.VKq(59,u,t.cursor)),e.xp6(1),e.Q6J("ngIf",t.campoNoValido("password2")),e.xp6(1),e.Q6J("ngIf",t.miFormulario.valid))},directives:[p.mk,i._Y,i.JL,i.sg,i.Fj,i.JJ,i.u,p.O5,R],styles:['@import"https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;1,500&family=Titan+One&display=swap";@import"https://fonts.googleapis.com/css2?family=Alfa+Slab+One&family=Dancing+Script&family=Roboto+Serif:wght@100&family=Satisfy&family=Yellowtail&display=swap";@import"https://fonts.googleapis.com/css2?family=Cinzel&family=Federo&family=Quicksand:wght@300&display=swap";*[_ngcontent-%COMP%]{font-family:Quicksand,sans-serif;font-size:20px}.get-in-touch[_ngcontent-%COMP%]{max-width:800px;margin:50px auto;position:relative}.get-in-touch[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{text-align:center;letter-spacing:3px;font-size:3.2em;font-family:Titan One,cursive;font-weight:700;text-shadow:4px 4px 2px #c8d8e4}.contact-form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]{position:relative;margin:32px 0}.contact-form[_ngcontent-%COMP%]   .input-text[_ngcontent-%COMP%], input[_ngcontent-%COMP%]{display:block;width:100%;height:36px;border-width:0 0 2px 0;border-color:#2b6777;font-size:18px;line-height:26px;font-weight:400}.contact-form[_ngcontent-%COMP%]   .input-text[_ngcontent-%COMP%]:focus{outline:none}.contact-form[_ngcontent-%COMP%]   .input-text[_ngcontent-%COMP%]:focus + .label[_ngcontent-%COMP%], .contact-form[_ngcontent-%COMP%]   .input-text.not-empty[_ngcontent-%COMP%] + .label[_ngcontent-%COMP%]{transform:translateY(-24px)}.contact-form[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%]{position:absolute;left:20px;bottom:11px;font-size:18px;line-height:26px;font-weight:400;cursor:text;transition:transform .2s ease-in-out}.contact-form[_ngcontent-%COMP%]   .submit-btn[_ngcontent-%COMP%]{display:inline-block;text-transform:uppercase;letter-spacing:2px;font-size:16px;padding:8px 16px;border:none;width:200px;cursor:pointer}.form-group[_ngcontent-%COMP%]{margin-top:2rem}.biggerCursor[_ngcontent-%COMP%]{cursor:url("cursor(1).a626298f25970abf.png"),auto!important}@media screen and (max-width: 769px){.get-in-touch[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{max-width:600px;margin:50px auto;position:relative;font-size:2.5em}input[_ngcontent-%COMP%]{width:90%;margin:auto}}@font-face{font-family:OpenDyslexic3Regular;src:local("OpenDyslexic3Regular"),url(OpenDyslexic-Regular.0f3361c226094c3f.otf) format("truetype")}.dyslexia[_ngcontent-%COMP%]{font-family:OpenDyslexic3Regular!important;font-weight:400;font-style:normal}.spacing[_ngcontent-%COMP%]{letter-spacing:3px!important}']}),r})()}];let z=(()=>{class r{}return r.\u0275fac=function(n){return new(n||r)},r.\u0275mod=e.oAB({type:r}),r.\u0275inj=e.cJS({imports:[[m.Bz.forChild(D)],m.Bz]}),r})(),E=(()=>{class r{}return r.\u0275fac=function(n){return new(n||r)},r.\u0275mod=e.oAB({type:r}),r.\u0275inj=e.cJS({imports:[[p.ez,z,i.UX,i.u5]]}),r})()}}]);