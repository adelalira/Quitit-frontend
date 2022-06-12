"use strict";(self.webpackChunkquitIt=self.webpackChunkquitIt||[]).push([[481],{481:(W,u,r)=>{r.r(u),r.d(u,{AdministratorDashboardModule:()=>R});var g=r(9808),h=r(6507),b=r(5226),l=r.n(b),t=r(7587),d=r(520),_=r(2340);let m=(()=>{class n{constructor(e){this.http=e,this.baseUrl=_.N.baseUrl}buscarIncidencias(){const e=`${this.baseUrl}/incidence`;let o=JSON.parse(localStorage.getItem("token"));const s=(new d.WM).set("Authorization",`Bearer ${o}`);return s.append("Access-Control-Allow-Origin","*"),this.http.get(e,{headers:s})}deleteComment(e){const o=`${this.baseUrl}/commentsCommunity/${e}`;let s=JSON.parse(localStorage.getItem("token"));const c=(new d.WM).set("Authorization",`Bearer ${s}`);return this.http.delete(o,{headers:c})}cambiarEstadoIncidencia(e,o){const s=`${this.baseUrl}/incidence/${e}?state=${o}`;let p=JSON.parse(localStorage.getItem("token"));const x=(new d.WM).set("Authorization",`Bearer ${p}`);return x.append("Access-Control-Allow-Origin","*"),this.http.put(s,null,{headers:x})}buscarUsuariosCoincidentes(e){const o=`${this.baseUrl}/users?username=${e}`;let s=JSON.parse(localStorage.getItem("token"));const c=(new d.WM).set("Authorization",`Bearer ${s}`);return c.append("Access-Control-Allow-Origin","*"),this.http.get(o,{headers:c})}deleteUser(e){const o=`${this.baseUrl}/user/${e}`;let s=JSON.parse(localStorage.getItem("token"));const c=(new d.WM).set("Authorization",`Bearer ${s}`);return c.append("Access-Control-Allow-Origin","*"),this.http.delete(o,{headers:c})}}return n.\u0275fac=function(e){return new(e||n)(t.LFG(d.eN))},n.\u0275prov=t.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})();function C(n,i){if(1&n&&(t.TgZ(0,"div",2),t.TgZ(1,"h1",3),t._uU(2),t.qZA(),t.TgZ(3,"p"),t._uU(4,"At this time we have not received any incidence from the users of the community. WE ARE DOING A GREAT JOB!"),t.qZA(),t._UZ(5,"img",4),t.qZA()),2&n){const e=t.oxw();t.xp6(2),t.hij("Welcome ",e.user.name,".")}}function v(n,i){if(1&n&&(t.TgZ(0,"div",2),t.TgZ(1,"h1",3),t._uU(2),t.qZA(),t.TgZ(3,"p"),t._uU(4),t.qZA(),t._UZ(5,"img",5),t.qZA()),2&n){const e=t.oxw();t.xp6(2),t.hij("Welcome ",e.user.name,"."),t.xp6(2),t.hij("Currently we have a total of ",e.incidencias.length," incidents by users of the community. IT'S TIME TO GET DOWN TO WORK!")}}function Z(n,i){if(1&n&&(t.TgZ(0,"div",2),t.TgZ(1,"h1",3),t._uU(2),t.qZA(),t.TgZ(3,"p"),t._uU(4),t.qZA(),t._UZ(5,"img",5),t.qZA()),2&n){const e=t.oxw();t.xp6(2),t.hij("Welcome ",e.user.name,"."),t.xp6(2),t.hij("We currently have a total of ",e.incidencias.length," incidence by a community user. IT'S TIME TO GET TO WORK!")}}let O=(()=>{class n{constructor(e){this.adminService=e,this.incidencias=[],this.user=JSON.parse(localStorage.getItem("user"))}ngOnInit(){this.cargarIncidencias()}cargarIncidencias(){this.adminService.buscarIncidencias().subscribe({next:e=>{this.incidencias=e},error:e=>{l().fire({title:"Error",icon:"error",text:"There are no services available at this time",confirmButtonColor:"##52ab98"})}})}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(m))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-administrator-dashboard"]],decls:4,vars:3,consts:[[1,"row","gx-0"],["class","text-center col-12",4,"ngIf"],[1,"text-center","col-12"],[1,"title"],["src","./assets/working.png",1,"imgIncidencia"],["src","./assets/burden.png",1,"imgIncidencia"]],template:function(e,o){1&e&&(t.TgZ(0,"div",0),t.YNc(1,C,6,1,"div",1),t.YNc(2,v,6,2,"div",1),t.YNc(3,Z,6,2,"div",1),t.qZA()),2&e&&(t.xp6(1),t.Q6J("ngIf",0==o.incidencias.length),t.xp6(1),t.Q6J("ngIf",o.incidencias.length>1),t.xp6(1),t.Q6J("ngIf",1===o.incidencias.length))},directives:[g.O5],styles:['@import"https://fonts.googleapis.com/css2?family=Alfa+Slab+One&family=Dancing+Script&family=Roboto+Serif:wght@100&family=Satisfy&family=Yellowtail&display=swap";@import"https://fonts.googleapis.com/css2?family=Cinzel&family=Federo&family=Quicksand:wght@300&display=swap";*[_ngcontent-%COMP%]{font-family:Quicksand,sans-serif;font-size:25px;margin-left:1em;margin-right:1em}.title[_ngcontent-%COMP%]{font-family:Titan One,cursive;font-size:40px}.imgIncidencia[_ngcontent-%COMP%]{margin-top:3em;width:250px;margin-left:auto;margin-right:auto}p[_ngcontent-%COMP%]{line-height:1.3}']}),n})();var f=r(4255),M=r(9783),a=r(2382);function T(n,i){1&n&&(t.TgZ(0,"tr"),t.TgZ(1,"th"),t._uU(2,"Complainant"),t.qZA(),t.TgZ(3,"th"),t._uU(4,"Subject"),t.qZA(),t.TgZ(5,"th"),t._uU(6,"Comment"),t.qZA(),t.TgZ(7,"th"),t._uU(8,"State"),t.qZA(),t.TgZ(9,"th"),t._uU(10,"Delete comment"),t.qZA(),t.qZA())}function A(n,i){if(1&n){const e=t.EpF();t.TgZ(0,"tr"),t.TgZ(1,"td"),t._uU(2),t.qZA(),t.TgZ(3,"td"),t._uU(4),t.qZA(),t.TgZ(5,"td"),t._uU(6),t.qZA(),t.TgZ(7,"td"),t._uU(8),t.TgZ(9,"select"),t.TgZ(10,"option",7),t.NdJ("click",function(){const c=t.CHM(e).$implicit;return t.oxw().cambiarEstadoIncidencia(c.id,"PENDING")}),t._uU(11," PENDING "),t.qZA(),t.TgZ(12,"option",7),t.NdJ("click",function(){const c=t.CHM(e).$implicit;return t.oxw().cambiarEstadoIncidencia(c.id,"IN_PROCESS")}),t._uU(13," IN PROCESS "),t.qZA(),t.TgZ(14,"option",7),t.NdJ("click",function(){const c=t.CHM(e).$implicit;return t.oxw().cambiarEstadoIncidencia(c.id,"RESULT")}),t._uU(15," RESULT "),t.qZA(),t.qZA(),t.qZA(),t.TgZ(16,"td"),t.TgZ(17,"button",7),t.NdJ("click",function(){const c=t.CHM(e).$implicit;return t.oxw().deleteComment(c.comment.id)}),t._uU(18," Delete "),t.qZA(),t.qZA(),t.qZA()}if(2&n){const e=i.$implicit;t.xp6(2),t.Oqu(e.user.username),t.xp6(2),t.Oqu(e.subject),t.xp6(2),t.Oqu(e.comment.text),t.xp6(2),t.hij(" ",e.state," ")}}function w(n,i){if(1&n&&t._UZ(0,"img",18),2&n){const e=t.oxw().$implicit;t.s9C("src",e.imageUrl,t.LSH)}}function P(n,i){1&n&&t._UZ(0,"img",19)}function U(n,i){if(1&n){const e=t.EpF();t.TgZ(0,"div",12),t.YNc(1,w,1,1,"img",13),t.YNc(2,P,1,0,"ng-template",null,14,t.W1O),t.TgZ(4,"h1",15),t._uU(5),t.qZA(),t._UZ(6,"br"),t.TgZ(7,"p",16),t._uU(8),t.qZA(),t.TgZ(9,"p"),t._uU(10),t.qZA(),t.TgZ(11,"p"),t._uU(12),t.qZA(),t.TgZ(13,"p"),t._uU(14),t.qZA(),t.TgZ(15,"button",17),t.NdJ("click",function(){const c=t.CHM(e).$implicit;return t.oxw(2).deleteUser(c.id)}),t._uU(16,"Delete user"),t.qZA(),t.qZA()}if(2&n){const e=i.$implicit,o=t.MAs(3);t.xp6(1),t.Q6J("ngIf",null!=e.imageUrl)("ngIfElse",o),t.xp6(4),t.Oqu(e.username),t.xp6(3),t.hij("Name: ",e.name,""),t.xp6(2),t.hij("Lastname: ",e.lastName,""),t.xp6(2),t.hij("Email: ",e.email,""),t.xp6(2),t.hij("Start date: ",e.startDate,"")}}function I(n,i){1&n&&(t.TgZ(0,"div"),t.TgZ(1,"p"),t._uU(2,"There is no user that matches the data entered"),t.qZA(),t.qZA())}function S(n,i){if(1&n&&(t.TgZ(0,"div"),t.TgZ(1,"div",10),t.YNc(2,U,17,7,"div",11),t.qZA(),t.YNc(3,I,3,0,"div",9),t.qZA()),2&n){const e=t.oxw();t.xp6(2),t.Q6J("ngForOf",e.usuariosEncontrados),t.xp6(1),t.Q6J("ngIf",e.error)}}const q=[{path:"",component:O},{path:"incidences",component:(()=>{class n{constructor(e){this.adminService=e,this.incidencias=[]}ngOnInit(){this.cargarIncidencias()}cargarIncidencias(){this.adminService.buscarIncidencias().subscribe({next:e=>{this.incidencias=e},error:e=>{l().fire({title:"Error",icon:"error",text:"There are no services available at this time",confirmButtonColor:"##52ab98"})}})}deleteComment(e){this.adminService.deleteComment(e).subscribe({next:o=>{this.cargarIncidencias()},error:o=>{null==o.message?this.cargarIncidencias():l().fire({title:"Error",icon:"error",text:"The selected appointment could not be deleted",confirmButtonColor:"##52ab98"})}})}cambiarEstadoIncidencia(e,o){this.adminService.cambiarEstadoIncidencia(e,o).subscribe({next:s=>{this.cargarIncidencias(),l().fire({title:"Your appointment has been requested successfully",icon:"success",confirmButtonColor:"##52ab98"})},error:s=>{l().fire({title:"Error",icon:"error",text:s.error.mensaje,confirmButtonColor:"##52ab98"})}})}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(m))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-incidences"]],decls:9,vars:1,consts:[[1,"container","p-3","bg-white"],[1,"card"],[1,"card-header","text-black-50"],[1,"card-body"],[1,"table-striped",3,"value"],["pTemplate","header"],["pTemplate","body","class","centrado"],[3,"click"]],template:function(e,o){1&e&&(t.TgZ(0,"div",0),t.TgZ(1,"div",1),t.TgZ(2,"div",2),t.TgZ(3,"h1"),t._uU(4,"Incidences"),t.qZA(),t.qZA(),t.TgZ(5,"div",3),t.TgZ(6,"p-table",4),t.YNc(7,T,11,0,"ng-template",5),t.YNc(8,A,19,4,"ng-template",6),t.qZA(),t.qZA(),t.qZA(),t.qZA()),2&e&&(t.xp6(6),t.Q6J("value",o.incidencias))},directives:[f.iA,M.jx,a.YN,a.Kr],styles:["table[_ngcontent-%COMP%]{border-collapse:collapse;border-spacing:0;width:100%;border:1px solid #ddd}th[_ngcontent-%COMP%], td[_ngcontent-%COMP%]{text-align:center;padding:16px}th[_ngcontent-%COMP%]:first-child, td[_ngcontent-%COMP%]:first-child{text-align:left}tr[_ngcontent-%COMP%]:nth-child(even){background-color:#f2f2f2}.fa-check[_ngcontent-%COMP%]{color:green}.fa-times[_ngcontent-%COMP%]{color:red}select[_ngcontent-%COMP%]{margin-left:.5em}@media screen and (min-width: 769px) and (max-width: 1279px){select[_ngcontent-%COMP%]{margin-left:0!important}}"]}),n})()},{path:"showUsers",component:(()=>{class n{constructor(e){this.adminService=e,this.usuarioRecibido=!1,this.error=!1}ngOnInit(){}buscarUser(){this.adminService.buscarUsuariosCoincidentes(this.busqueda).subscribe({next:e=>{this.usuariosEncontrados=e,null!=e&&(this.usuarioRecibido=!0),null===e&&(this.error=!0)},error:e=>{l().fire({title:"Error",icon:"error",text:"There are no results that match your search",confirmButtonColor:"##52ab98"})}})}deleteUser(e){this.adminService.deleteUser(e).subscribe({next:o=>{l().fire({title:"Success",icon:"success",text:"The user has been deleted",confirmButtonColor:"#52ab98"})},error:o=>{null==o.message?this.buscarUser():l().fire({title:"Error",icon:"error",text:"The user could not be deleted",confirmButtonColor:"#52ab98"})}})}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(m))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-show-users"]],decls:11,vars:2,consts:[["id","cover",1,"row","ml-auto"],[1,"col"],["method","get","action",""],[1,"tb"],[1,"td"],["type","text","name","busqueda","placeholder","Search user","required","",3,"ngModel","ngModelChange"],["id","s-cover",1,"td"],["type","submit",3,"click"],["id","s-circle"],[4,"ngIf"],[1,"grid"],["class","cardcontainer",4,"ngFor","ngForOf"],[1,"cardcontainer"],["width","300","height","150","alt","User image",3,"src",4,"ngIf","ngIfElse"],["elseBlock",""],[1,"text-center","mt-1"],[1,"mt-4"],[1,"btnDelete",3,"click"],["width","300","height","150","alt","User image",3,"src"],["src","https://picsum.photos/300/150","width","300","height","150","alt","placeholder"]],template:function(e,o){1&e&&(t.TgZ(0,"div",0),t._UZ(1,"div",1),t.TgZ(2,"form",2),t.TgZ(3,"div",3),t.TgZ(4,"div",4),t.TgZ(5,"input",5),t.NdJ("ngModelChange",function(c){return o.busqueda=c}),t.qZA(),t.qZA(),t.TgZ(6,"div",6),t.TgZ(7,"button",7),t.NdJ("click",function(){return o.buscarUser()}),t._UZ(8,"div",8),t._UZ(9,"span"),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.YNc(10,S,4,2,"div",9)),2&e&&(t.xp6(5),t.Q6J("ngModel",o.busqueda),t.xp6(5),t.Q6J("ngIf",o.usuarioRecibido))},directives:[a._Y,a.JL,a.F,a.Fj,a.Q7,a.JJ,a.On,g.O5,g.sg],styles:['@import"https://fonts.googleapis.com/css2?family=Cinzel&family=Federo&family=Quicksand:wght@300&display=swap";*[_ngcontent-%COMP%]{outline:none}html[_ngcontent-%COMP%], body[_ngcontent-%COMP%]{height:100%;min-height:100%}body[_ngcontent-%COMP%]{margin:0;background-color:#ffd8d8}.tb[_ngcontent-%COMP%]{display:table;width:100%}.td[_ngcontent-%COMP%]{display:table-cell;vertical-align:middle;position:absolute;margin-left:20px;right:23%}input[_ngcontent-%COMP%], button[_ngcontent-%COMP%]{color:#fff;font-family:Nunito;padding:0;margin:0;border:0;background-color:transparent}#cover[_ngcontent-%COMP%]{width:400px;height:150px;padding:35px;margin-right:2em;background-color:#2b6777;border-radius:20px;box-shadow:0 10px 40px #2b6777,0 0 0 20px #ffffffeb;transform:scale(.6)}form[_ngcontent-%COMP%]{height:90px}input[type=text][_ngcontent-%COMP%]{width:100%;height:96px;font-size:40px;line-height:1}input[type=text][_ngcontent-%COMP%]::placeholder{color:#fff}#s-cover[_ngcontent-%COMP%]{width:1px;padding-left:35px}button[_ngcontent-%COMP%]{position:relative;display:block;width:90px;height:100px;cursor:pointer;padding:0!important}#s-circle[_ngcontent-%COMP%]{position:relative;top:-8px;left:0;width:43px;height:43px;margin-top:0;border-width:15px;border:15px solid #fff;background-color:transparent;border-radius:50%;transition:.5s ease all}button[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{position:absolute;top:61px;left:24px;display:block;width:45px;height:15px;background-color:transparent;border-radius:10px;transform:rotate(52deg);transition:.5s ease all}button[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:before, button[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:after{content:"";position:absolute;bottom:0;right:0;width:45px;height:15px;background-color:#fff;border-radius:10px;transform:rotate(0);transition:.5s ease all}#s-cover[_ngcontent-%COMP%]:hover   #s-circle[_ngcontent-%COMP%]{top:-1px;width:67px;height:15px;border-width:0;background-color:#fff;border-radius:20px}#s-cover[_ngcontent-%COMP%]:hover   span[_ngcontent-%COMP%]{top:50%;left:56px;width:25px;margin-top:-9px;transform:rotate(0)}#s-cover[_ngcontent-%COMP%]:hover   button[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:before{bottom:11px;transform:rotate(52deg)}#s-cover[_ngcontent-%COMP%]:hover   button[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:after{bottom:-11px;transform:rotate(-52deg)}#s-cover[_ngcontent-%COMP%]:hover   button[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:before, #s-cover[_ngcontent-%COMP%]:hover   button[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:after{right:-6px;width:40px;background-color:#fff}*[_ngcontent-%COMP%]{box-sizing:border-box}body[_ngcontent-%COMP%], html[_ngcontent-%COMP%]{font-family:Assistant,sans-serif;overflow-x:hidden}body[_ngcontent-%COMP%]{margin:0;padding:0;min-height:100vh;display:flex;flex-direction:column;align-items:center;justify-content:center;background:gray}.grid[_ngcontent-%COMP%]{width:100%;height:100%;display:flex;flex-wrap:wrap;flex-direction:row;justify-content:space-evenly;align-items:center}.cardcontainer[_ngcontent-%COMP%]{max-width:350px;min-width:290px;display:flex;flex-direction:column;justify-content:center;align-content:center;background:white;padding:30px;border-radius:15px;margin:30px;border:1px solid rgba(64,64,64,.7);box-shadow:#00000040 0 54px 55px,#0000001f 0 -12px 30px,#0000001f 0 4px 6px,#0000002b 0 12px 13px,#00000017 0 -3px 5px;transition:all .4s ease-in-out}.cardcontainer[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%;border-radius:15px;box-shadow:#ffffff1a 0 1px 1px inset,#32325d40 0 50px 100px -20px,#0000004d 0 30px 60px -30px;margin-bottom:15px;border:1px solid rgba(255,255,255,1);filter:grayscale(100%);transition:all .4s ease-in-out}.cardcontainer[_ngcontent-%COMP%]:hover   img[_ngcontent-%COMP%]{filter:grayscale(0%);border:1px solid rgba(255,255,255,0);transition:all .4s ease-in-out}.cardcontainer[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{line-height:50%;font-size:150%}.bottomline[_ngcontent-%COMP%]{width:100%;height:auto;display:flex;flex-direction:row;justify-content:center;align-items:center}.links[_ngcontent-%COMP%]{display:flex;flex-direction:row;align-items:center;justify-content:space-between;margin-left:auto;width:120px;position:relative;top:7px}.links[_ngcontent-%COMP%]:before{content:"SHARE";position:absolute;top:-25px;left:0;opacity:.5}.cardcontainer[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]{transition:all .4s ease-in-out;fill:#1e90ff}.cardbutton[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;justify-content:center;text-decoration:none;width:100px;height:30px;background:dodgerblue;color:#fff;transition:all .6s ease-in-out}.cardcontainer[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{position:relative;bottom:10px;line-height:130%;font-size:11pt}.btnDelete[_ngcontent-%COMP%]{width:230px;height:50px;color:#000;text-align:center;margin:auto;background-color:#52ab98;font-family:Quicksand,sans-serif;font-size:25px;border-radius:10px}']}),n})()}];let N=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[[h.Bz.forChild(q)],h.Bz]}),n})();var k=r(5652),E=r(4776),J=r(5315),D=r(6526),j=r(330),$=r(845),B=r(7773),z=r(1424),Y=r(8185),F=r(4036);let R=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[[g.ez,N,a.u5,f.U$,k._8,E.JH,J.S,D.q4,j.vI,$.hJ,B.EV,z.j,Y.q,F.kW]]}),n})()}}]);