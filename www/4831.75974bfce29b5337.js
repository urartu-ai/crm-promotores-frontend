"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[4831],{9520:(D,P,a)=>{a.d(P,{k:()=>O});var t=a(3953),M=a(6552),e=a(177),v=a(9465);const E=r=>({"user-card-active":r});function u(r,g){if(1&r){const _=t.RV6();t.j41(0,"div",3)(1,"div",20)(2,"ion-checkbox",21),t.bIt("click",function(f){t.eBV(_);const L=t.XpG(2);return t.Njj(L.onTogglePromotionCheckbox(f))}),t.k0s()()()}if(2&r){const _=t.XpG(2);t.R7$(2),t.Y8G("value",_.user.checked)}}function x(r,g){if(1&r&&(t.qex(0),t.nrm(1,"span",25),t.bVm()),2&r){let _;const o=t.XpG().$implicit,f=t.XpG(3);t.R7$(),t.HbH(null==(_=f.utils.getLanguageInfo(o))?null:_.flagClass)}}function b(r,g){if(1&r&&(t.qex(0),t.DNE(1,x,2,2,"ng-container",19),t.bVm()),2&r){const _=g.index;t.R7$(),t.Y8G("ngIf",_<3)}}function y(r,g){if(1&r&&(t.j41(0,"span",26),t.EFF(1),t.k0s()),2&r){const _=t.XpG(3);t.R7$(),t.SpI(" +",_.user.languages.length-3," ")}}function k(r,g){if(1&r&&(t.j41(0,"div",22),t.DNE(1,b,2,1,"ng-container",23)(2,y,2,1,"span",24),t.k0s()),2&r){const _=t.XpG(2);t.R7$(),t.Y8G("ngForOf",_.user.languages),t.R7$(),t.Y8G("ngIf",_.user.languages.length>3)}}function j(r,g){1&r&&(t.j41(0,"div",27),t.EFF(1,"Sin idiomas"),t.k0s())}function I(r,g){1&r&&(t.j41(0,"div",28),t.nrm(1,"i",29),t.EFF(2," Usuario inactivo "),t.k0s())}function d(r,g){if(1&r){const _=t.RV6();t.j41(0,"div")(1,"div",28),t.nrm(2,"i",29),t.EFF(3," Invitaci\xf3n pendiente de aprobaci\xf3n "),t.k0s(),t.j41(4,"div",30),t.bIt("click",function(){t.eBV(_);const f=t.XpG(2);return t.Njj(f.onCancelInvitation(f.user.id))}),t.EFF(5," Cancelar invitaci\xf3n "),t.k0s()()}}function C(r,g){if(1&r&&(t.j41(0,"div",2),t.DNE(1,u,3,1,"div",3),t.j41(2,"div",4)(3,"div",5),t.nrm(4,"img",6),t.k0s(),t.j41(5,"div",7)(6,"div",8),t.EFF(7),t.k0s(),t.j41(8,"div",9),t.EFF(9),t.k0s()()(),t.j41(10,"div",10)(11,"div",11),t.nrm(12,"i",12),t.j41(13,"span"),t.EFF(14),t.k0s()(),t.j41(15,"div",11),t.nrm(16,"i",13),t.j41(17,"span"),t.EFF(18),t.k0s()()(),t.j41(19,"div",14)(20,"div",15),t.nrm(21,"i",16),t.j41(22,"span"),t.EFF(23),t.k0s()(),t.DNE(24,k,3,2,"div",17)(25,j,2,0,"ng-template",null,0,t.C5r),t.k0s(),t.DNE(27,I,3,0,"div",18)(28,d,6,0,"div",19),t.k0s()),2&r){const _=t.sdS(26),o=t.XpG();t.Y8G("ngClass",t.eq3(13,E,null==o.user?null:o.user.checked)),t.R7$(),t.vxM(o.showCheckbox?1:-1),t.R7$(3),t.FS9("alt",null==o.user?null:o.user.name),t.Y8G("src",(null==o.user?null:o.user.photoUrl)||"assets/images/avatar.png",t.B4B),t.R7$(3),t.JRh(null==o.user?null:o.user.name),t.R7$(2),t.JRh(null==o.user?null:o.user.jobTitle),t.R7$(5),t.JRh(null==o.user?null:o.user.phone),t.R7$(4),t.JRh(null==o.user?null:o.user.email),t.R7$(5),t.JRh("Valencia"),t.R7$(),t.Y8G("ngIf",(null==o.user||null==o.user.languages?null:o.user.languages.length)>0)("ngIfElse",_),t.R7$(3),t.Y8G("ngIf",null==o.user?null:o.user.inactive),t.R7$(),t.Y8G("ngIf","invitation"===(null==o.options?null:o.options.type)&&!(null!=o.options&&o.options.externalUser))}}let O=(()=>{var r;class g{constructor(o){this.utils=o,this.isSkeleton=!1,this.user=null,this.options={type:"user",externalUser:!1},this.showCheckbox=!0,this.toggleUserCheckbox=new t.bkB,this.invitationCanceled=new t.bkB}ngOnInit(){}onTogglePromotionCheckbox(o){o.stopPropagation(),this.toggleUserCheckbox.emit()}onCancelInvitation(o){console.log("cancel invitation",o),this.invitationCanceled.emit(o)}}return(r=g).\u0275fac=function(o){return new(o||r)(t.rXU(M.T))},r.\u0275cmp=t.VBU({type:r,selectors:[["app-card-system-user"]],inputs:{isSkeleton:"isSkeleton",user:"user",options:"options",showCheckbox:"showCheckbox"},outputs:{toggleUserCheckbox:"toggleUserCheckbox",invitationCanceled:"invitationCanceled"},decls:1,vars:1,consts:[["noLanguages",""],["class","user-card",3,"ngClass",4,"ngIf"],[1,"user-card",3,"ngClass"],[1,"crm-card-floating-checkbox",2,"right","16px","left","inherit"],[1,"user-card-header"],[1,"user-card-image"],[3,"src","alt"],[1,"user-card-info"],[1,"user-card-name"],[1,"user-card-role"],[1,"user-card-contact"],[1,"user-card-contact-item"],[1,"fas","fa-phone"],[1,"fas","fa-envelope"],[1,"user-card-bottom"],[1,"user-card-location"],[1,"fas","fa-map-marker-alt"],["class","user-card-languages",4,"ngIf","ngIfElse"],["class","user-card-chip warning",4,"ngIf"],[4,"ngIf"],[1,"crm-input-checkbox"],[3,"click","value"],[1,"user-card-languages"],[4,"ngFor","ngForOf"],["class","user-card-lang-plus",4,"ngIf"],[1,"user-card-flag"],[1,"user-card-lang-plus"],[1,"user-card-no-langs"],[1,"user-card-chip","warning"],[1,"fas","fa-exclamation-triangle"],[1,"user-card-action",3,"click"]],template:function(o,f){1&o&&t.DNE(0,C,29,15,"div",1),2&o&&t.Y8G("ngIf",!f.isSkeleton&&f.user)},dependencies:[e.YU,e.Sq,e.bT,v.eY,v.hB],styles:[".user-card[_ngcontent-%COMP%]{background-color:#fff;border-radius:12px;border:1px solid #eaeaea;padding:16px;width:300px;max-width:300px;position:relative;display:flex;flex-direction:column;gap:16px;cursor:pointer}.user-card-active[_ngcontent-%COMP%]{outline:2px solid var(--crm-primary-color)}.user-card-checkbox[_ngcontent-%COMP%]{position:absolute;top:12px;right:12px;z-index:1}.user-card-header[_ngcontent-%COMP%]{display:flex;align-items:center;gap:12px}.user-card-image[_ngcontent-%COMP%]{width:64px;height:64px;border-radius:50%;overflow:hidden;flex-shrink:0}.user-card-image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%;height:100%;object-fit:cover}.user-card-info[_ngcontent-%COMP%]{display:flex;flex-direction:column}.user-card-name[_ngcontent-%COMP%]{font-size:15px;font-weight:600;color:#212121}.user-card-role[_ngcontent-%COMP%]{font-size:14px;color:#666}.user-card-contact[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:6px}.user-card-contact-item[_ngcontent-%COMP%]{display:flex;align-items:center;gap:8px;font-size:13px;color:#6c6c6c}.user-card-contact-item[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{font-size:13px;color:#9e9e9e}.user-card-bottom[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center;padding-top:12px;border-top:1px solid #eaeaea;flex-wrap:wrap;gap:8px}.user-card-location[_ngcontent-%COMP%]{display:flex;align-items:center;gap:6px;font-size:13px;color:#666}.user-card-location[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{font-size:13px;color:#999}.user-card-languages[_ngcontent-%COMP%]{display:flex;align-items:center;gap:6px}.user-card-flag[_ngcontent-%COMP%]{width:20px;height:14px;background-size:cover;border-radius:2px}.user-card-lang-plus[_ngcontent-%COMP%]{font-size:13px;color:#666}.user-card-no-langs[_ngcontent-%COMP%]{font-size:13px;color:#999}.user-card-chip[_ngcontent-%COMP%]{padding:6px 10px;font-size:13px;border-radius:6px;display:inline-flex;align-items:center;gap:6px;width:-moz-fit-content;width:fit-content}.user-card-chip.warning[_ngcontent-%COMP%]{background-color:#fff3cd;color:#856404;border:1px solid #ffeeba}.user-card-action[_ngcontent-%COMP%]{font-size:13px;color:#dc3545;text-align:center;text-decoration:underline;cursor:pointer;margin-top:8px}.user-card-action[_ngcontent-%COMP%]:hover{text-decoration:none}"]}),g})()},3263:(D,P,a)=>{a.d(P,{l:()=>E});var t=a(177),M=a(9465),e=a(9417),v=a(3953);let E=(()=>{var u;class x{}return(u=x).\u0275fac=function(y){return new(y||u)},u.\u0275mod=v.$C({type:u}),u.\u0275inj=v.G2t({imports:[t.MD,e.YN,M.bv]}),x})()},4831:(D,P,a)=>{a.r(P),a.d(P,{UsersListPageModule:()=>I});var t=a(177),M=a(9417),e=a(9465),v=a(517),E=a(4874),u=a(3953);const x=[{path:"",component:E.s}];let b=(()=>{var d;class C{}return(d=C).\u0275fac=function(r){return new(r||d)},d.\u0275mod=u.$C({type:d}),d.\u0275inj=u.G2t({imports:[v.iI.forChild(x),v.iI]}),C})();var y=a(5603),k=a(3263),j=a(4842);let I=(()=>{var d;class C{}return(d=C).\u0275fac=function(r){return new(r||d)},d.\u0275mod=u.$C({type:d}),d.\u0275inj=u.G2t({imports:[t.MD,M.YN,e.bv,b,y.P,k.l,j.h]}),C})()},4874:(D,P,a)=>{a.d(P,{s:()=>N});var t=a(467),M=a(1413),e=a(3953),v=a(8397),E=a(4501),u=a(410),x=a(6039),b=a(177),y=a(9465),k=a(6580),j=a(9520),I=a(4842);const d=i=>({"crm-block-body-fixed":i}),C=i=>({"crm-button-secondary-primary":i}),O=i=>({type:"user",externalUser:i}),r=i=>({type:"invitation",externalUser:i});function g(i,p){if(1&i){const l=e.RV6();e.j41(0,"button",16),e.bIt("click",function(){e.eBV(l);const s=e.XpG();return e.Njj(s.onCreateUser())}),e.nrm(1,"i",17),e.EFF(2),e.nI1(3,"translate"),e.k0s()}2&i&&(e.R7$(2),e.SpI(" ",e.bMT(3,1,"text.user_create")," "))}function _(i,p){1&i&&(e.nrm(0,"i",18),e.EFF(1," Cerrar filtros "))}function o(i,p){1&i&&(e.nrm(0,"i",19),e.EFF(1," Filtros activados "))}function f(i,p){1&i&&(e.nrm(0,"i",19),e.EFF(1," Filtrar "))}function L(i,p){if(1&i&&e.DNE(0,o,2,0)(1,f,2,0),2&i){const l=e.XpG();e.vxM(l.filters?0:1)}}function R(i,p){if(1&i){const l=e.RV6();e.j41(0,"app-list-pagination-selectors",20),e.bIt("goPreviousPage",function(){e.eBV(l);const s=e.XpG();return e.Njj(s.onGoPreviousPage())})("goNextPage",function(){e.eBV(l);const s=e.XpG();return e.Njj(s.onGoNextPage())})("sort",function(s){e.eBV(l);const c=e.XpG();return e.Njj(c.onSort(s))}),e.k0s()}if(2&i){const l=e.XpG();e.Y8G("listPaginationConfig",l.listPaginationConfig)}}function S(i,p){if(1&i){const l=e.RV6();e.j41(0,"div",13)(1,"app-list-pagination-selectors",20),e.bIt("goPreviousPage",function(){e.eBV(l);const s=e.XpG();return e.Njj(s.onGoPreviousPage())})("goNextPage",function(){e.eBV(l);const s=e.XpG();return e.Njj(s.onGoNextPage())})("sort",function(s){e.eBV(l);const c=e.XpG();return e.Njj(c.onSort(s))}),e.k0s()()}if(2&i){const l=e.XpG();e.R7$(),e.Y8G("listPaginationConfig",l.listPaginationConfig)}}function G(i,p){1&i&&(e.j41(0,"div",15),e.nrm(1,"app-card-system-user",21)(2,"app-card-system-user",21)(3,"app-card-system-user",21),e.k0s()),2&i&&(e.R7$(),e.Y8G("isSkeleton",!0),e.R7$(),e.Y8G("isSkeleton",!0),e.R7$(),e.Y8G("isSkeleton",!0))}function F(i,p){if(1&i){const l=e.RV6();e.j41(0,"app-card-system-user",23),e.bIt("click",function(){const s=e.eBV(l).$implicit,c=e.XpG(2);return e.Njj(c.onOpenUser(s))})("toggleUserCheckbox",function(){const s=e.eBV(l).$index,c=e.XpG(2);return e.Njj(c.onToggleUserCheckbox(s))}),e.k0s()}if(2&i){const l=p.$implicit,n=e.XpG(2);e.Y8G("options",e.eq3(2,O,!(null==n.options||!n.options.fatherObj)))("user",l)}}function $(i,p){if(1&i){const l=e.RV6();e.j41(0,"app-card-system-user",24),e.bIt("invitationCanceled",function(s){e.eBV(l);const c=e.XpG(2);return e.Njj(c.onInvitationCanceled(s))}),e.k0s()}if(2&i){const l=p.$implicit,n=e.XpG(2);e.Y8G("options",e.eq3(2,r,!(null==n.options||!n.options.fatherObj)))("user",l)}}function B(i,p){if(1&i&&(e.j41(0,"div",15),e.Z7z(1,F,1,4,"app-card-system-user",22,e.fX1),e.Z7z(3,$,1,4,"app-card-system-user",22,e.fX1),e.k0s()),2&i){const l=e.XpG();e.R7$(),e.Dyx(l.users),e.R7$(2),e.Dyx(l.allPendingInvitations)}}let N=(()=>{var i;class p{constructor(n,s,c,m){var h,U,T;this.toastService=n,this.headerService=s,this.modalService=c,this.api=m,this.users=[],this.allPendingInvitations=[],this.checkedUsers=0,this.allSystemUserCount=0,this.searchString="",this.searchSubject=new M.B,this.aside={type:"filters",visible:!1},this.filters=null,this.sort=null,this.pagination={page:0,itemsPerPage:25},this.loadingList=!1,this.listPaginationConfig={pageStartIndex:this.updatePagination().startIndex,pageEndIndex:this.updatePagination().endIndex,totalCount:this.allSystemUserCount,paginationPage:this.pagination.page+1,sortField:null!==(h=this.sort)&&void 0!==h&&h.field?(null===(U=this.sort)||void 0===U?void 0:U.field)+" "+(null===(T=this.sort)||void 0===T?void 0:T.order):"Fecha de creaci\xf3n",showSelectItems:!0,checkedItems:this.checkedUsers}}ngOnInit(){this.getData()}ionViewWillEnter(){var n;null!==(n=this.options)&&void 0!==n&&n.fatherObj||this.headerService.setConfig({title:"users"})}onCreateUser(){var n=this;return(0,t.A)(function*(){var s;const c=yield n.modalService.showUserModal(null);null!=c&&null!==(s=c.data)&&void 0!==s&&s.reload&&n.getData()})()}onSearchInputChange(n){this.searchSubject.next(n.target.value)}onSearchChanged(n){this.searchString=n}onToggleAside(){this.aside.visible=!this.aside.visible}onGoNextPage(){(this.pagination.page+1)*this.pagination.itemsPerPage<this.allSystemUserCount&&(this.pagination.page++,this.getData())}onGoPreviousPage(){this.pagination.page>0&&(this.pagination.page--,this.getData())}onToggleUserCheckbox(n){this.users[n].checked=!this.users[n].checked,this.setNumberOfCheckedUsers()}onOpenUser(n){var s=this;return(0,t.A)(function*(){var c,m;const h=yield s.modalService.showUserModal(n,{externalUser:!(null===(c=s.options)||void 0===c||!c.fatherObj)});null!=h&&null!==(m=h.data)&&void 0!==m&&m.reload&&s.getData()})()}onInvitationCanceled(n){var s=this;return(0,t.A)(function*(){console.log("invitationId:",n);const c=yield s.modalService.openConfirmationModal({title:"\xbfEst\xe1s seguro de que deseas cancelar la invitaci\xf3n?",buttons:[{text:"Cancelar",theme:"btn-secondary"},{text:"Aceptar",theme:"btn",id:"accept"}]});if(console.log("modal:",c),"accept"===(null==c?void 0:c.data)){const m=yield s.api.cancelInvitation(n);m.error?s.toastService.showToast({text:"Ha ocurrido un error al cancelar la invitaci\xf3n."+m.error.errorMessage,theme:"red",icon:"fas fa-exclamation-triangle",time:3e3}):(s.toastService.showToast({text:"Invitaci\xf3n cancelada con \xe9xito",theme:"success",icon:"fas fa-check",time:2e3}),s.getData())}})()}updatePagination(){return{startIndex:this.pagination.page*this.pagination.itemsPerPage+1,endIndex:Math.min((this.pagination.page+1)*this.pagination.itemsPerPage,this.allSystemUserCount)}}getData(){var n=this;return(0,t.A)(function*(){try{var s,c;n.loadingList=!0;let U,h={};if(console.log("LA AGENCY ID, "+n.options),null!==(s=n.options)&&void 0!==s&&s.fatherObj)U=yield n.api.getUsersOfAccount(n.options.fatherObj.id);else{var m;U=yield n.api.getUser(h,n.sort,n.pagination);const T=yield n.api.getAllPendingInvitations();n.allPendingInvitations=(null===(m=T.success)||void 0===m?void 0:m.data)||[]}if(U.error)throw new Error("Error fetching users");n.users=null===(c=U.success)||void 0===c?void 0:c.data,console.log("users:",n.users),n.updatePagination(),n.loadingList=!1}catch{n.toastService.showToast({text:"Ha ocurrido un error al cargar los usuarios",theme:"red",icon:"fas fa-exclamation-triangle",time:3e3}),n.loadingList=!1}})()}onSort(n){return(0,t.A)(function*(){})()}setNumberOfCheckedUsers(){this.checkedUsers=this.users.filter(n=>n.checked).length,console.log("checkedUsers:",this.checkedUsers),this.listPaginationConfig.checkedItems=this.checkedUsers}}return(i=p).\u0275fac=function(n){return new(n||i)(e.rXU(v.f),e.rXU(E.d),e.rXU(u.M),e.rXU(x.i))},i.\u0275cmp=e.VBU({type:i,selectors:[["app-users-list"]],inputs:{options:"options"},decls:28,vars:13,consts:[[3,"fullscreen","scrollY"],[1,"crm-block-content"],[1,"crm-block-body"],[3,"ngClass"],[1,"crm-header-modal"],[1,"crm-input"],[1,"crm-input-input","crm-input-input-searchbar"],[1,"fas","fa-search"],["type","text","placeholder","Buscar usuario",3,"input"],[1,"crm-buttons-group"],[1,"crm-button"],[1,"crm-button-secondary",3,"click","ngClass"],[3,"listPaginationConfig"],[1,"crm-block-body-fixed","crm-block-body-fixed-padding-bigger"],[1,"crm-block-body-blue-content"],[1,"crm-section-inline-cards"],[1,"crm-button",3,"click"],[1,"fas","fa-add"],[1,"fa","fa-times"],[1,"fa","fa-filter"],[3,"goPreviousPage","goNextPage","sort","listPaginationConfig"],[3,"isSkeleton"],[3,"options","user"],[3,"click","toggleUserCheckbox","options","user"],[3,"invitationCanceled","options","user"]],template:function(n,s){1&n&&(e.j41(0,"ion-content",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"div",4)(5,"div",5)(6,"div",6),e.nrm(7,"i",7),e.j41(8,"input",8),e.bIt("input",function(m){return s.onSearchInputChange(m)}),e.k0s()()(),e.j41(9,"div",9),e.DNE(10,g,4,3,"button",10),e.j41(11,"button",11),e.bIt("click",function(){return s.onToggleAside()}),e.DNE(12,_,2,0)(13,L,2,1),e.k0s()()(),e.DNE(14,R,1,1,"app-list-pagination-selectors",12),e.k0s(),e.DNE(15,S,2,1,"div",13),e.j41(16,"div",14),e.DNE(17,G,4,3,"div",15)(18,B,5,0,"div",15),e.nrm(19,"br")(20,"br")(21,"br")(22,"br")(23,"br")(24,"br")(25,"br")(26,"br")(27,"br"),e.k0s()()()()),2&n&&(e.Y8G("fullscreen",!0)("scrollY",!1),e.R7$(3),e.Y8G("ngClass",e.eq3(9,d,!(null!=s.options&&s.options.fatherObj))),e.R7$(7),e.vxM(null!=s.options&&s.options.fatherObj?-1:10),e.R7$(),e.Y8G("ngClass",e.eq3(11,C,!(null!=s.aside&&s.aside.visible)&&s.filters)),e.R7$(),e.vxM(null!=s.aside&&s.aside.visible?12:13),e.R7$(2),e.vxM(null!=s.options&&s.options.fatherObj?-1:14),e.R7$(),e.vxM(null!=s.options&&s.options.fatherObj?15:-1),e.R7$(2),e.vxM(s.loadingList?17:18))},dependencies:[b.YU,y.W9,k.k,j.k,I.D9]}),p})()}}]);