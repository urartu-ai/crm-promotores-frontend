"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[1362],{1362:(x,j,r)=>{r.r(j),r.d(j,{RegistersListPageModule:()=>I});var f=r(177),M=r(9417),E=r(9465),A=r(517),e=r(5180),R=r(3953);const D=[{path:"",component:e.c}];let L=(()=>{var m;class h{}return(m=h).\u0275fac=function(O){return new(O||m)},m.\u0275mod=R.$C({type:m}),m.\u0275inj=R.G2t({imports:[A.iI.forChild(D),A.iI]}),h})();var S=r(3895),N=r(5603),k=r(3732);let I=(()=>{var m;class h{}return(m=h).\u0275fac=function(O){return new(O||m)},m.\u0275mod=R.$C({type:m}),m.\u0275inj=R.G2t({imports:[f.MD,M.YN,E.bv,L,S.b,N.P,k.D]}),h})()},5180:(x,j,r)=>{r.d(j,{c:()=>Q});var f=r(467),M=r(1413),E=r(7376),e=r(3953),R=r(5970),D=r(6039),L=r(1296),S=r(4501),N=r(8397),k=r(345),I=r(410),m=r(177),h=r(9465),T=r(1880),O=r(6580);const $=a=>({"crm-block-body-fixed":a}),G=a=>({"crm-button-secondary-primary":a}),B=(a,_,o,t,i)=>({pageStartIndex:a,pageEndIndex:_,totalCount:o,paginationPage:t,sortField:i});function F(a,_){if(1&a){const o=e.RV6();e.j41(0,"button",19),e.bIt("click",function(){e.eBV(o);const i=e.XpG();return e.Njj(i.openCreateRegisterModal())}),e.nrm(1,"i",20),e.EFF(2," A\xf1adir registro "),e.k0s()}}function w(a,_){1&a&&(e.nrm(0,"i",21),e.EFF(1," Cerrar filtros "))}function U(a,_){1&a&&(e.nrm(0,"i",22),e.EFF(1," Filtros activados "))}function z(a,_){1&a&&(e.nrm(0,"i",22),e.EFF(1," Filtrar "))}function X(a,_){if(1&a&&e.DNE(0,U,2,0)(1,z,2,0),2&a){const o=e.XpG();e.vxM(o.filters?0:1)}}function H(a,_){if(1&a){const o=e.RV6();e.j41(0,"app-list-pagination-selectors",23),e.bIt("goPreviousPage",function(){e.eBV(o);const i=e.XpG();return e.Njj(i.onGoPreviousPage())})("goNextPage",function(){e.eBV(o);const i=e.XpG();return e.Njj(i.onGoNextPage())})("sort",function(i){e.eBV(o);const s=e.XpG();return e.Njj(s.onSort(i))}),e.k0s()}if(2&a){const o=e.XpG();e.Y8G("listPaginationConfig",e.s1E(1,B,o.updatePagination().startIndex,o.updatePagination().endIndex,o.allSystemOperationsCount,o.pagination.page+1,null!=o.sort&&o.sort.field?(null==o.sort?null:o.sort.field)+" "+(null==o.sort?null:o.sort.order):"Fecha de creaci\xf3n"))}}function V(a,_){if(1&a){const o=e.RV6();e.j41(0,"div",15)(1,"app-list-pagination-selectors",23),e.bIt("goPreviousPage",function(){e.eBV(o);const i=e.XpG();return e.Njj(i.onGoPreviousPage())})("goNextPage",function(){e.eBV(o);const i=e.XpG();return e.Njj(i.onGoNextPage())})("sort",function(i){e.eBV(o);const s=e.XpG();return e.Njj(s.onSort(i))}),e.k0s()()}if(2&a){const o=e.XpG();e.R7$(),e.Y8G("listPaginationConfig",e.s1E(1,B,o.updatePagination().startIndex,o.updatePagination().endIndex,o.allSystemOperationsCount,o.pagination.page+1,null!=o.sort&&o.sort.field?(null==o.sort?null:o.sort.field)+" "+(null==o.sort?null:o.sort.order):"Fecha de creaci\xf3n"))}}function K(a,_){}function W(a,_){if(1&a){const o=e.RV6();e.j41(0,"div",17)(1,"div",24),e.EFF(2," Registros pendientes "),e.k0s(),e.j41(3,"app-table",25),e.bIt("actionButtonClick",function(i){e.eBV(o);const s=e.XpG();return e.Njj(s.onTableButtonClick(i))})("rowClicked",function(i){e.eBV(o);const s=e.XpG();return e.Njj(s.onRowClicked(i))}),e.k0s(),e.j41(4,"div",26),e.EFF(5," Registros "),e.k0s(),e.j41(6,"app-table",25),e.bIt("actionButtonClick",function(i){e.eBV(o);const s=e.XpG();return e.Njj(s.onTableButtonClick(i))})("rowClicked",function(i){e.eBV(o);const s=e.XpG();return e.Njj(s.onRowClicked(i))}),e.k0s()()}if(2&a){const o=e.XpG();e.R7$(3),e.Y8G("table",o.pendingRegistersTableConfig),e.R7$(3),e.Y8G("table",o.registersTableConfig)}}function Y(a,_){}function J(a,_){if(1&a&&(e.j41(0,"div",18),e.DNE(1,Y,0,0),e.k0s()),2&a){const o=e.XpG();e.Y8G("@biggerFadeSlideIn",void 0),e.R7$(),e.vxM("filters"===(null==o.aside?null:o.aside.type)?1:-1)}}let Q=(()=>{var a;class _{constructor(t,i,s,d,c,p,g){this.popoversService=t,this.api=i,this.tableService=s,this.headerService=d,this.toastService=c,this.sanitizer=p,this.modalsService=g,this.registers=[],this.pendingRegisters=[],this.allSystemOperationsCount=0,this.checkedOperations=0,this.searchString="",this.searchSubject=new M.B,this.aside={type:"filters",visible:!1},this.loadingList=!1,this.pipelineName="operaciones",this.showFilters=!1,this.filters=null,this.sort={field:"createdAt",order:"desc"},this.pagination={page:0,itemsPerPage:50},this.relationsFilter={contact:{apply:!0,filter:{},onlyCount:!1},contactWithPotentialCoincidence:{apply:!0,filter:{},onlyCount:!1},agency:{apply:!0,filter:{},onlyCount:!1},createdBy:{apply:!0,filter:{},onlyCount:!1},property:{apply:!0,filter:{},onlyCount:!1},promotion:{apply:!0,filter:{},onlyCount:!1}},this.pendingRegistersTableConfig={uniqueId:"table-1",showSelectors:!0,columns:[{key:"createdAt",label:"Fecha de registro",size:"medium",type:"date"},{key:"contactName",label:"Contacto",size:"medium"},{key:"contactPhone",label:"Tel\xe9fono",size:"medium",fn:l=>{var v;return(null===(v=l.contactPhone)||void 0===v?void 0:v.length)>4?"****"+l.contactPhone.slice(-4):""}},{key:"contactNationality",label:"Nacionalidad",size:"medium"},{key:"promotion.projectName",label:"Promoci\xf3n",size:"medium"},{key:"agency.name",label:"Empresa",size:"medium"},{key:"createdBy.name",label:"Usuario",size:"medium"},{key:"status",label:"Estado",size:"medium"},{key:"actions",label:"",size:"small"},{key:"fecha_registro",label:"",size:"small"}],rows:[]},this.registersTableConfig={uniqueId:"table-1",showSelectors:!0,columns:[{key:"createdAt",label:"Fecha de registro",size:"medium",type:"date"},{key:"contactName",label:"Contacto",size:"medium"},{key:"contactPhone",label:"Tel\xe9fono",size:"medium"},{key:"contactNationality",label:"Nacionalidad",size:"medium"},{key:"promotion.projectName",label:"Promoci\xf3n",size:"medium"},{key:"agency.name",label:"Empresa",size:"medium"},{key:"createdBy.name",label:"Usuario",size:"medium"},{key:"status",label:"Estado",size:"medium"}],rows:[]}}ngOnInit(){var t;null!==(t=this.options)&&void 0!==t&&t.fatherObj&&this.getData()}ionViewWillEnter(){this.headerService.setConfig({title:"registers"}),this.getData()}getData(){var t=this;return(0,f.A)(function*(){yield t.getRegisters(),yield t.getPendingRegisters()})()}getRegisters(){var t=this;return(0,f.A)(function*(){var i,s,d;const c=E.cloneDeep(t.filters)||{};c.status={not:"pending"},"agency"===(null===(i=t.options)||void 0===i?void 0:i.type)&&null!==(s=t.options)&&void 0!==s&&null!==(s=s.fatherObj)&&void 0!==s&&s.id&&(c.agencyId={equals:t.options.fatherObj.id});const p=yield t.api.getOperationRegister(c,t.sort,t.pagination,t.relationsFilter);if(null!=p&&null!==(d=p.success)&&void 0!==d&&d.data){t.registers=p.success.data;let g=t.tableService.convertDataToTableRows(t.registers,t.registersTableConfig);g=t.tableService.setRowsChipsFromRegistersList(g),t.registersTableConfig.rows=g,g=g.map((l,v)=>{l.cells.actions={value:"none",type:"actions",actions:[{key:"asd",label:"Historico",theme:"warning",openRow:!0}]};let u=t.getTimeAgo(new Date(l.rawObject.createdAt));l.cells.fecha_registro={value:u,type:"text",customCssClass:"get-time-ago-class"};const n=l.rawObject;var P,C,y,b;return l.freeRowContentHtml=`\n<div class="operation-register-container">\n  \x3c!-- Title / Header --\x3e\n  <h5 style="margin-top: 0;">\n    Resultado de Comprobaci\xf3n de Cliente\n  </h5>\n\n  \x3c!-- Main message --\x3e\n  <p style="margin: 0.5rem 0;">\n  ${"yes"===n.isAPotentiallyCoincidence?"Se encontr\xf3 una posible coincidencia en la base de datos para el cliente que intentas registrar.":""}\n  ${"no"===n.isAPotentiallyCoincidence?"No se encontr\xf3 ninguna coincidencia en la base de datos para el cliente que intentas registrar.":""}\n  ${"partial"===n.isAPotentiallyCoincidence?"Se encontr\xf3 una posible coincidencia parcial en la base de datos para el cliente que intentas registrar.":""}\n  </p>\n  `,n.contactWithPotentialCoincidenceId&&(l.freeRowContentHtml+=`\n      \x3c!-- ChatGPT scan info --\x3e\n      <hr style="margin: 1rem 0;" />\n      <p style="margin: 0.5rem 0;">\n        Posible coincidencia con el contacto: <a href="/contacts/${n.contactWithPotentialCoincidenceId}" target="_blank">${null===(P=n.contactWithPotentialCoincidence)||void 0===P?void 0:P.name}</a>\n        ${n.coincidenceRegistredBy?"Registrado por "+n.coincidenceRegistredBy:null!==(C=n.contactWithPotentialCoincidence)&&void 0!==C&&C.origin?"("+(null===(y=n.contactWithPotentialCoincidence)||void 0===y?void 0:y.origin)+")":""}\n        <br>\n        Fecha de registro: ${t.returnCorrectDateString(null===(b=n.contactWithPotentialCoincidence)||void 0===b?void 0:b.createdAt)}\n      </p>\n      <p style="margin: 0.5rem 0;">\n        Coincidencia en \xfaltimos 4 d\xedgitos de tel\xe9fono:\n        <strong>${"yes"===n.last4NumberOfPhoneAreEqual?"S\xed":"No"}:\n        ${"yes"===n.last4NumberOfPhoneAreEqual?n.coincidenceLast4NumberOfPhone:""}</strong>\n      </p>\n      <p style="margin: 0.5rem 0;">\n        Porcentaje de coincidencia de nombre:\n        <strong>${null!=n.percentageOfNameCoincidence?n.percentageOfNameCoincidence+"%":"N/A"}</strong>\n      </p>\n      <p style="margin: 0.5rem 0;">\n        Coincidencia de nacionalidad:\n        <strong>${n.nationalityCoincidence?"S\xed":"No"}</strong>\n      </p>\n\n      \x3c!-- Status and Acceptance/Rejection dates --\x3e\n      <hr style="margin: 1rem 0;" />\n      <p style="margin: 0.5rem 0;">\n        <strong>Recomendaci\xf3n mostrada:</strong><br/>\n        ${"yes"===n.isAPotentiallyCoincidence?"No Registres, muy probablemente este contacto ya est\xe1 registrado.":""}\n      ${"no"===n.isAPotentiallyCoincidence?"Registra, no se ha encontrado coincidencia en la base de datos.":""}\n      ${"partial"===n.isAPotentiallyCoincidence?"Antes de registrar revisa que el contacto no sea el duplicado":""}\n\n      </p>\n\n\n    `),l.freeRowContentHtml=t.sanitizer.bypassSecurityTrustHtml(l.freeRowContentHtml),l}),t.registersTableConfig.rows=g}})()}openCreateRegisterModal(){var t=this;return(0,f.A)(function*(){yield t.modalsService.onShowCreateRegisterModal(),t.getData()})()}getPendingRegisters(){var t=this;return(0,f.A)(function*(){var i,s,d;const c=E.cloneDeep(t.filters)||{};c.status={equals:"pending"},"agency"===(null===(i=t.options)||void 0===i?void 0:i.type)&&null!==(s=t.options)&&void 0!==s&&null!==(s=s.fatherObj)&&void 0!==s&&s.id&&(c.agencyId={equals:t.options.fatherObj.id});const p=yield t.api.getOperationRegister(c,t.sort,t.pagination,t.relationsFilter);if(null!=p&&null!==(d=p.success)&&void 0!==d&&d.data){t.pendingRegisters=p.success.data;let g=t.tableService.convertDataToTableRows(t.pendingRegisters,t.pendingRegistersTableConfig);g=g.map((l,v)=>{l.cells.actions={value:"none",type:"actions",actions:[{key:"asd",label:"Gestionar",theme:"warning",openRow:!0}]};let u=t.getTimeAgo(new Date(l.rawObject.createdAt));l.cells.fecha_registro={value:u,type:"text",customCssClass:"get-time-ago-class"};const n=l.rawObject;var P,C,y,b;return l.freeRowContentHtml=`\n<div class="operation-register-container">\n  \x3c!-- Title / Header --\x3e\n  <h5 style="margin-top: 0;">\n    Resultado de Comprobaci\xf3n de Cliente\n  </h5>\n\n  \x3c!-- Main message --\x3e\n  <p style="margin: 0.5rem 0;">\n  ${"yes"===n.isAPotentiallyCoincidence?"Se ha encontrado una posible coincidencia en la base de datos para el cliente que intentas registrar.":""}\n  ${"no"===n.isAPotentiallyCoincidence?"No se ha encontrado ninguna coincidencia en la base de datos para el cliente que intentas registrar.":""}\n  ${"partial"===n.isAPotentiallyCoincidence?"Se ha encontrado una posible coincidencia parcial en la base de datos para el cliente que intentas registrar.":""}\n  </p>\n  `,n.contactWithPotentialCoincidenceId&&(l.freeRowContentHtml+=`\n      \x3c!-- ChatGPT scan info --\x3e\n      <hr style="margin: 1rem 0;" />\n      <p style="margin: 0.5rem 0;">\n        Posible coincidencia con el contacto: <a href="/contacts/${n.contactWithPotentialCoincidenceId}" target="_blank">${null===(P=n.contactWithPotentialCoincidence)||void 0===P?void 0:P.name}</a>\n        ${n.coincidenceRegistredBy?"Registrado por "+n.coincidenceRegistredBy:null!==(C=n.contactWithPotentialCoincidence)&&void 0!==C&&C.origin?"("+(null===(y=n.contactWithPotentialCoincidence)||void 0===y?void 0:y.origin)+")":""}\n        <br>\n        Fecha de registro: ${t.returnCorrectDateString(null===(b=n.contactWithPotentialCoincidence)||void 0===b?void 0:b.createdAt)}\n      </p>\n      <p style="margin: 0.5rem 0;">\n        Coincidencia en \xfaltimos 4 d\xedgitos de tel\xe9fono:\n        <strong>${"yes"===n.last4NumberOfPhoneAreEqual?"S\xed:":"No"}\n        ${"yes"===n.last4NumberOfPhoneAreEqual?n.coincidenceLast4NumberOfPhone:""}</strong>\n      </p>\n      <p style="margin: 0.5rem 0;">\n        Porcentaje de coincidencia de nombre:\n        <strong>${null!=n.percentageOfNameCoincidence?n.percentageOfNameCoincidence+"%":"N/A"}</strong>\n      </p>\n      <p style="margin: 0.5rem 0;">\n        Coincidencia de nacionalidad:\n        <strong>${n.nationalityCoincidence?"S\xed":"No"}</strong>\n      </p>\n\n      \x3c!-- Status and Acceptance/Rejection dates --\x3e\n      <hr style="margin: 1rem 0;" />\n      <p style="margin: 0.5rem 0;">\n        <strong>Recomendaci\xf3n:</strong><br/>\n        ${"yes"===n.isAPotentiallyCoincidence?"No Registres, muy probablemente este contacto ya est\xe1 registrado.":""}\n      ${"no"===n.isAPotentiallyCoincidence?"Registra, no se ha encontrado coincidencia en la base de datos.":""}\n      ${"partial"===n.isAPotentiallyCoincidence?"Antes de registrar revisa que el contacto no sea el duplicado":""}\n\n      </p>\n\n\n    `),l.freeRowContentHtml+=`\n\n  <p style="margin: 0.5rem 0;">\n        <strong>Nota:</strong><br/>\n        Recuerda que el registro ser\xe1 v\xe1lido seg\xfan las condiciones establecidas para la comercializadora y quedar\xe1 sujeto a futuras verificaciones.\n      </p>\n\n      \x3c!-- Accept / Reject Buttons --\x3e\n      <div style="display:flex; align-items:center; gap: 16px; margin-top: 32px;">\n\n        <button id="register-accept-${n.id}" class="crm-button crm-button-success" style="min-width: 90px; justify-content: center;">\n          Aceptar\n        </button>\n        <button id="register-reject-${n.id}" class="crm-button crm-button-red" style="min-width: 90px; justify-content: center;">\n          Rechazar\n        </button>\n\n      </div>\n    </div>\n\n\n  `,l.freeRowContentHtml=t.sanitizer.bypassSecurityTrustHtml(l.freeRowContentHtml),l}),t.pendingRegistersTableConfig.rows=g,console.log(324324324,t.pendingRegistersTableConfig)}setTimeout(()=>{t.pendingRegisters.forEach(g=>{const l=document.getElementById(`register-accept-${g.id}`),v=document.getElementById(`register-reject-${g.id}`);l&&l.addEventListener("click",(0,f.A)(function*(){const u=yield t.acceptOperationRegister(g.id);var n;null!=u&&u.success?(t.getData(),t.toastService.showSuccessToast("Registro aceptado correctamente.")):t.toastService.showErrorToast("Error al aceptar el registro. "+(null==u||null===(n=u.error)||void 0===n?void 0:n.errorMessage))})),v&&v.addEventListener("click",(0,f.A)(function*(){const u=yield t.rejectOperationRegister(g.id);var n;null!=u&&u.success?(t.getData(),t.toastService.showSuccessToast("Registro rechazado correctamente.")):t.toastService.showErrorToast("Error al rechazar el registro. "+(null==u||null===(n=u.error)||void 0===n?void 0:n.errorMessage))}))})},1e3)})()}returnCorrectDateString(t){return t?new Date(t).toLocaleDateString():""}onTableButtonClick(t){var i=this;return(0,f.A)(function*(){if(console.log("LA DATA:",t),"accept"===t.action.key){const c=yield i.acceptOperationRegister(t.row.rawObject.id);var s;null!=c&&c.success?(i.getData(),i.toastService.showSuccessToast("Registro aceptado correctamente.")):i.toastService.showErrorToast("Error al aceptar el registro. "+(null==c||null===(s=c.error)||void 0===s?void 0:s.errorMessage))}else if("reject"===t.action.key){const c=yield i.rejectOperationRegister(t.row.rawObject.id);var d;null!=c&&c.success?(i.getData(),i.toastService.showSuccessToast("Registro rechazado correctamente.")):i.toastService.showErrorToast("Error al rechazar el registro. "+(null==c||null===(d=c.error)||void 0===d?void 0:d.errorMessage))}})()}onRowClicked(t){return(0,f.A)(function*(){})()}acceptOperationRegister(t){var i=this;return(0,f.A)(function*(){return yield i.api.approveOperationRegister(t)})()}rejectOperationRegister(t){var i=this;return(0,f.A)(function*(){return yield i.api.rejectOperationRegister(t)})()}onSearchInputChange(t){this.searchSubject.next(t.target.value)}onSearchChanged(t){this.searchString=t}onToggleAside(){this.aside.visible=!this.aside.visible}onGoNextPage(){(this.pagination.page+1)*this.pagination.itemsPerPage<this.allSystemOperationsCount&&(this.pagination.page++,this.getData())}onGoPreviousPage(){this.pagination.page>0&&(this.pagination.page--,this.getData())}onToggleAllCheckboxes(t){}onShowMenuSelectAll(t){}onSort(t){}getTimeAgo(t){const s=Math.floor(((new Date).getTime()-t.getTime())/1e3);if(s<60)return`Hace ${s} segundo${1===s?"":"s"}`;const d=Math.floor(s/60);if(d<60)return`Hace ${d} minuto${1===d?"":"s"}`;const c=Math.floor(d/60);if(c<24)return`Hace ${c} hora${1===c?"":"s"}`;const p=Math.floor(c/24);if(p<30)return`Hace ${p} d\xeda${1===p?"":"s"}`;const g=Math.floor(p/30);if(g<12)return`Hace ${g} mes${1===g?"":"es"}`;const l=Math.floor(g/12);return`Hace ${l} a\xf1o${1===l?"":"s"}`}onClickMoreTools(t){var i=this;return(0,f.A)(function*(){const s=yield i.popoversService.onShowMenuPopover(t,"contacts-list-more-tools");console.log("Popover result:",s)})()}updatePagination(){return{startIndex:this.pagination.page*this.pagination.itemsPerPage+1,endIndex:Math.min((this.pagination.page+1)*this.pagination.itemsPerPage,this.allSystemOperationsCount)}}}return(a=_).\u0275fac=function(t){return new(t||a)(e.rXU(R.m),e.rXU(D.i),e.rXU(L.a),e.rXU(S.d),e.rXU(N.f),e.rXU(k.up),e.rXU(I.M))},a.\u0275cmp=e.VBU({type:a,selectors:[["app-registers-list"]],inputs:{options:"options"},decls:22,vars:14,consts:[[3,"fullscreen","scrollY"],[1,"crm-block-content"],[1,"crm-block-body"],[3,"ngClass"],[1,"crm-header-modal"],[1,"crm-input"],[1,"crm-input-input","crm-input-input-searchbar"],[1,"fas","fa-search"],["type","text","placeholder","Buscar registro",3,"input"],[1,"crm-buttons-group"],[1,"crm-button"],[1,"crm-button-secondary",3,"click","ngClass"],[1,"crm-button-secondary","crm-button-secondary-icon-solo",3,"click"],[1,"fa","fa-ellipsis"],[3,"listPaginationConfig"],[1,"crm-block-body-fixed","crm-block-body-fixed-padding-bigger"],[1,"crm-block-body-blue-content"],[1,"crm-section"],[1,"crm-block-content-aside"],[1,"crm-button",3,"click"],[1,"fa","fa-plus"],[1,"fa","fa-times"],[1,"fa","fa-filter"],[3,"goPreviousPage","goNextPage","sort","listPaginationConfig"],[1,"crm-section-title"],[3,"actionButtonClick","rowClicked","table"],[1,"crm-section-title","crm-section-margin-top"]],template:function(t,i){1&t&&(e.j41(0,"ion-content",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"div",4)(5,"div",5)(6,"div",6),e.nrm(7,"i",7),e.j41(8,"input",8),e.bIt("input",function(d){return i.onSearchInputChange(d)}),e.k0s()()(),e.j41(9,"div",9),e.DNE(10,F,3,0,"button",10),e.j41(11,"button",11),e.bIt("click",function(){return i.onToggleAside()}),e.DNE(12,w,2,0)(13,X,2,1),e.k0s(),e.j41(14,"button",12),e.bIt("click",function(d){return i.onClickMoreTools(d)}),e.nrm(15,"i",13),e.k0s()()(),e.DNE(16,H,1,7,"app-list-pagination-selectors",14),e.k0s(),e.DNE(17,V,2,7,"div",15),e.j41(18,"div",16),e.DNE(19,K,0,0)(20,W,7,2,"div",17),e.k0s()(),e.DNE(21,J,2,2,"div",18),e.k0s()()),2&t&&(e.Y8G("fullscreen",!0)("scrollY",!1),e.R7$(3),e.Y8G("ngClass",e.eq3(10,$,!(null!=i.options&&i.options.fatherObj))),e.R7$(7),e.vxM(null!=i.options&&i.options.fatherObj?-1:10),e.R7$(),e.Y8G("ngClass",e.eq3(12,G,!("filters"===(null==i.aside?null:i.aside.type)&&null!=i.aside&&i.aside.visible)&&i.filters)),e.R7$(),e.vxM("filters"===(null==i.aside?null:i.aside.type)&&null!=i.aside&&i.aside.visible?12:13),e.R7$(4),e.vxM(null!=i.options&&i.options.fatherObj?-1:16),e.R7$(),e.vxM(null!=i.options&&i.options.fatherObj?17:-1),e.R7$(2),e.vxM(i.loadingList?19:20),e.R7$(2),e.vxM(null!=i.aside&&i.aside.visible?21:-1))},dependencies:[m.YU,h.W9,T.O,O.k]}),_})()}}]);