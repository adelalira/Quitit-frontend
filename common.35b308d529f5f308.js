"use strict";(self.webpackChunkquitIt=self.webpackChunkquitIt||[]).push([[592],{9609:(b,m,l)=>{l.d(m,{o:()=>e});var c=l(7587);let e=(()=>{class u{constructor(){this.namePattern="([a-zA-Z]+)",this.emailPattern="^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$"}camposIguales(o,i){return t=>{var n,a,r,s;return(null===(n=t.get(o))||void 0===n?void 0:n.value)!==(null===(a=t.get(i))||void 0===a?void 0:a.value)?(null===(r=t.get(i))||void 0===r||r.setErrors({noIguales:!0}),{noIguales:!0}):(null===(s=t.get(i))||void 0===s||s.setErrors(null),null)}}}return u.\u0275fac=function(o){return new(o||u)},u.\u0275prov=c.Yz7({token:u,factory:u.\u0275fac,providedIn:"root"}),u})()},696:(b,m,l)=>{l.d(m,{w:()=>f});var c=l(9808),e=l(7587);const u=function(o){return{"show-scrollTop":o}};let f=(()=>{class o{constructor(t){this.document=t,this.ubicacion=""}ngOnInit(){}onWindowScroll(){window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop>100?this.windowScrolled=!0:(this.windowScrolled&&window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop<10)&&(this.windowScrolled=!1)}scrollToTop(){!function t(){const n=document.documentElement.scrollTop||document.body.scrollTop;n>0&&(window.requestAnimationFrame(t),window.scrollTo(0,n-n/1.5))}()}}return o.\u0275fac=function(t){return new(t||o)(e.Y36(c.K0))},o.\u0275cmp=e.Xpm({type:o,selectors:[["app-floating-button"]],hostBindings:function(t,n){1&t&&e.NdJ("scroll",function(){return n.onWindowScroll()},!1,e.Jf7)},inputs:{ubicacion:"ubicacion"},decls:5,vars:4,consts:[[1,"scroll-to-top","btn",3,"ngClass"],["type","button","data-toggle","button","aria-pressed","true",1,"btn","active",3,"click"],["src","../../../assets/quit-smokingWhite.png","alt","u\xf1as",1,"iconQuitSmoking"]],template:function(t,n){1&t&&(e.TgZ(0,"div",0),e.TgZ(1,"button",1),e.NdJ("click",function(){return n.scrollToTop()}),e._UZ(2,"img",2),e.TgZ(3,"p"),e._uU(4),e.qZA(),e.qZA(),e.qZA()),2&t&&(e.Q6J("ngClass",e.VKq(2,u,n.windowScrolled)),e.xp6(4),e.Oqu(n.ubicacion))},directives:[c.mk],styles:[".scroll-to-top[_ngcontent-%COMP%]{position:fixed;bottom:50px;right:15px;opacity:0;transition:all .4s ease-in-out}.show-scrollTop[_ngcontent-%COMP%]{opacity:.8;transition:all .1s ease-in-out;border-radius:10%;background-color:#52ab98}p[_ngcontent-%COMP%]{font-size:18px;padding-left:auto;padding-right:auto;margin-bottom:0!important;color:#fff;text-shadow:rgb(105,105,105) .1em .1em .1em}.iconQuitSmoking[_ngcontent-%COMP%]{width:30px;color:#fff}.btn[_ngcontent-%COMP%]{padding:.1rem .45rem}"]}),o})()},2123:(b,m,l)=>{l.r(m),l.d(m,{FloatingButtonModule:()=>t});var c=l(9808),e=l(6507),u=l(696),f=l(7587);const o=[{path:"",component:u.w}];let i=(()=>{class n{}return n.\u0275fac=function(r){return new(r||n)},n.\u0275mod=f.oAB({type:n}),n.\u0275inj=f.cJS({imports:[[e.Bz.forChild(o)],e.Bz]}),n})(),t=(()=>{class n{}return n.\u0275fac=function(r){return new(r||n)},n.\u0275mod=f.oAB({type:n}),n.\u0275inj=f.cJS({imports:[[c.ez,i]]}),n})()},5415:(b,m,l)=>{l.d(m,{G:()=>e,T:()=>f});var c=l(7587),e=function(){function o(i,t,n){this.el=i,this.vcr=t,this.renderer=n,this.dtOptions={}}return o.prototype.ngOnInit=function(){var i=this;this.dtTrigger?this.dtTrigger.subscribe(function(t){i.displayTable(t)}):this.displayTable(null)},o.prototype.ngOnDestroy=function(){this.dtTrigger&&this.dtTrigger.unsubscribe(),this.dt&&this.dt.destroy(!0)},o.prototype.displayTable=function(i){var t=this;i&&(this.dtOptions=i),this.dtInstance=new Promise(function(n,a){Promise.resolve(t.dtOptions).then(function(r){0===Object.keys(r).length&&0===$("tbody tr",t.el.nativeElement).length?a("Both the table and dtOptions cannot be empty"):setTimeout(function(){var d={rowCallback:function(p,g,v){if(r.columns){var h=r.columns;t.applyNgPipeTransform(p,h),t.applyNgRefTemplate(p,h,g)}r.rowCallback&&r.rowCallback(p,g,v)}};d=Object.assign({},r,d),t.dt=$(t.el.nativeElement).DataTable(d),n(t.dt)})})})},o.prototype.applyNgPipeTransform=function(i,t){t.filter(function(a){return a.ngPipeInstance&&!a.ngTemplateRef}).forEach(function(a){var r=a.ngPipeInstance,s=t.findIndex(function(v){return v.data===a.data}),d=i.childNodes.item(s),p=$(d).text(),g=r.transform(p);$(d).text(g)})},o.prototype.applyNgRefTemplate=function(i,t,n){var a=this;t.filter(function(s){return s.ngTemplateRef&&!s.ngPipeInstance}).forEach(function(s){var d=s.ngTemplateRef,p=d.ref,g=d.context,v=t.findIndex(function(w){return w.data===s.data}),h=i.childNodes.item(v);$(h).html("");var T=Object.assign({},g,null==g?void 0:g.userData,{adtData:n}),y=a.vcr.createEmbeddedView(p,T);a.renderer.appendChild(h,y.rootNodes[0])})},o.\u0275fac=function(t){return new(t||o)(c.Y36(c.SBq),c.Y36(c.s_b),c.Y36(c.Qsj))},o.\u0275dir=c.lG2({type:o,selectors:[["","datatable",""]],inputs:{dtOptions:"dtOptions",dtTrigger:"dtTrigger"}}),o}(),u=l(9808),f=function(){function o(){}return o.forRoot=function(){return{ngModule:o}},o.\u0275fac=function(t){return new(t||o)},o.\u0275mod=c.oAB({type:o}),o.\u0275inj=c.cJS({imports:[[u.ez]]}),o}()}}]);