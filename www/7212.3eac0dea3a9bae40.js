"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[7212],{7212:(Mt,v,s)=>{s.r(v),s.d(v,{ContactsListPageModule:()=>xt});var p=s(177),g=s(9417),r=s(9465),h=s(517),d=s(467),m=s(9969),f=s(1413),C=s(152),t=s(3953),k=s(4501),F=s(9333),b=s(410),j=s(8397),T=s(6039),R=s(5970),x=s(5484);const E=o=>({"crm-item-tag-active":o});function M(o,c){if(1&o){const i=t.RV6();t.j41(0,"div",26)(1,"ion-checkbox",27),t.bIt("ionChange",function(e){const l=t.eBV(i).$implicit,a=t.XpG();return t.Njj(a.onCheckboxChange(l,e,"contactType"))}),t.k0s(),t.j41(2,"div",28),t.EFF(3),t.k0s()()}if(2&o){const i=c.$implicit,n=t.XpG();t.R7$(),t.Y8G("value",i.value)("checked",n.filterData.contactType.includes(i.value)),t.R7$(2),t.SpI(" ",i.name," ")}}function y(o,c){if(1&o){const i=t.RV6();t.j41(0,"div",26)(1,"ion-checkbox",27),t.bIt("ionChange",function(e){const l=t.eBV(i).$implicit,a=t.XpG();return t.Njj(a.onCheckboxChange(l,e,"origin"))}),t.k0s(),t.j41(2,"div",28),t.EFF(3),t.k0s()()}if(2&o){const i=c.$implicit,n=t.XpG();t.R7$(),t.Y8G("value",i.value)("checked",n.filterData.origin.includes(i.value)),t.R7$(2),t.SpI(" ",i.name," ")}}function D(o,c){if(1&o){const i=t.RV6();t.j41(0,"div",26)(1,"ion-checkbox",27),t.bIt("ionChange",function(e){const l=t.eBV(i).$implicit,a=t.XpG();return t.Njj(a.onCheckboxChange(l,e,"nationality"))}),t.k0s(),t.j41(2,"div",28),t.EFF(3),t.k0s()()}if(2&o){const i=c.$implicit,n=t.XpG();t.R7$(),t.Y8G("value",i.value)("checked",n.filterData.nationality.includes(i.value)),t.R7$(2),t.SpI(" ",i.name," ")}}function I(o,c){if(1&o){const i=t.RV6();t.j41(0,"div",26)(1,"ion-checkbox",27),t.bIt("ionChange",function(e){const l=t.eBV(i).$implicit,a=t.XpG();return t.Njj(a.onCheckboxChange(l,e,"gender"))}),t.k0s(),t.j41(2,"div",28),t.EFF(3),t.k0s()()}if(2&o){const i=c.$implicit,n=t.XpG();t.R7$(),t.Y8G("value",i.value)("checked",n.filterData.gender.includes(i.value)),t.R7$(2),t.SpI(" ",i.name," ")}}function G(o,c){if(1&o){const i=t.RV6();t.j41(0,"div",29),t.bIt("click",function(){const e=t.eBV(i).$implicit,l=t.XpG();return t.Njj(l.onToggleTag(e))}),t.EFF(1),t.k0s()}if(2&o){const i=c.$implicit;t.Y8G("ngClass",t.eq3(2,E,i.active)),t.R7$(),t.SpI(" ",null==i?null:i.text," ")}}let S=(()=>{var o;class c{constructor(n){this.tagsEditorService=n,this.onFilter=new t.bkB,this.allTags=[],this.contactTypes=[{name:"Cliente potencial",value:"potential_client"},{name:"Cliente",value:"client"}],this.origins=[{name:"Idealista",value:"Idealista"},{name:"Habitaclia",value:"Habitaclia"},{name:"Fotocasa",value:"Fotocasa"},{name:"Manual",value:"Manual"}],this.nationalities=[{name:"Espa\xf1a",value:"spain"},{name:"Francia",value:"france"},{name:"Alemania",value:"germany"}],this.genders=[{name:"Hombre",value:"male"},{name:"Mujer",value:"female"},{name:"Otro",value:"other"}],this.filterData={name:"",contactType:[],origin:[],dniPassport:"",nationality:[],birthdateFrom:"",birthdateTo:"",gender:[],alias:"",address:"",phoneNumber:"",emailAddress:"",urlFacebook:"",urlInstagram:"",urlLinkedIn:"",associatedUser:"",createdAtFrom:"",createdAtTo:"",tags:[]},this.baseFilters=null,this.baseFilters=JSON.parse(JSON.stringify(this.filterData))}ngOnInit(){this.savedFilters&&(this.filterData=this.savedFilters),this.getTags()}getTags(){var n=this;return(0,d.A)(function*(){n.allTags=yield n.tagsEditorService.getAllTags(),n.setActiveTags()})()}onClickFilter(){let n=!1;Object.keys(this.filterData).forEach(e=>{JSON.stringify(this.filterData[e])!==JSON.stringify(this.baseFilters[e])&&(n=!0)}),this.onFilter.emit(n?this.filterData:null)}onResetFilters(){this.filterData={name:"",contactType:[],origin:[],dniPassport:"",nationality:[],birthdateFrom:"",birthdateTo:"",gender:[],alias:"",address:"",phoneNumber:"",emailAddress:"",urlFacebook:"",urlInstagram:"",urlLinkedIn:"",associatedUser:"",createdAtFrom:"",createdAtTo:""},this.onFilter.emit(null)}onCheckboxChange(n,e,l){if(e.detail.checked)this.filterData[l].push(n.value);else{const a=this.filterData[l].indexOf(n.value);a>-1&&this.filterData[l].splice(a,1)}}onToggleTag(n){this.allTags=this.tagsEditorService.toggleTag(n,this.allTags),this.filterData.tags=[],this.allTags.forEach(e=>{null!=e&&e.active&&this.filterData.tags.push(e)})}setActiveTags(){this.allTags.forEach(n=>{n.active=!1}),this.filterData.tags.forEach(n=>{const e=this.allTags.findIndex(l=>l.id===n.id);e>-1&&(this.allTags[e].active=!0)})}}return(o=c).\u0275fac=function(n){return new(n||o)(t.rXU(x.H))},o.\u0275cmp=t.VBU({type:o,selectors:[["app-filters-block"]],inputs:{savedFilters:"savedFilters"},outputs:{onFilter:"onFilter"},decls:91,vars:14,consts:[[2,"position","relative"],[1,"crm-header-modal","crm-header-modal-fixed-top"],[1,"crm-modal-header-title"],[1,"crm-buttons-group"],[1,"crm-button",3,"click"],[1,"crm-button-secondary","crm-button-secondary-red",3,"click"],[1,"crm-block-inputs","crm-block-filters-inputs"],[1,"crm-input"],[1,"crm-input-label"],[1,"crm-input-input"],["type","text","placeholder","Nombre","name","name",3,"ngModelChange","ngModel"],[1,"crm-input-checkboxes"],["class","crm-input-checkbox",4,"ngFor","ngForOf"],["type","text","placeholder","DNI o Pasaporte del contacto","name","dniPassport",3,"ngModelChange","ngModel"],[1,"crm-section-inputs-double-input"],["type","date","placeholder","Desde","name","birthdateFrom",3,"ngModelChange","ngModel"],["type","date","placeholder","Hasta","name","birthdateTo",3,"ngModelChange","ngModel"],["type","date","placeholder","Desde","name","createdAtFrom",3,"ngModelChange","ngModel"],["type","date","placeholder","Hasta","name","createdAtTo",3,"ngModelChange","ngModel"],["type","text","placeholder","Alias del contacto","name","alias",3,"ngModelChange","ngModel"],["type","text","placeholder","Direcci\xf3n del contacto","name","address",3,"ngModelChange","ngModel"],["type","text","placeholder","N\xfamero de tel\xe9fono","name","phoneNumber",3,"ngModelChange","ngModel"],["type","email","placeholder","Correo electr\xf3nico","name","emailAddress",3,"ngModelChange","ngModel"],[1,"crm-section-small-title"],[1,"crm-section-tags"],[1,"crm-item-tag",3,"ngClass"],[1,"crm-input-checkbox"],[3,"ionChange","value","checked"],[1,"crm-input-checkbox-label"],[1,"crm-item-tag",3,"click","ngClass"]],template:function(n,e){1&n&&(t.j41(0,"div",0)(1,"div",1)(2,"div",2),t.EFF(3," Filtrar "),t.k0s(),t.j41(4,"div",3)(5,"button",4),t.bIt("click",function(){return e.onClickFilter()}),t.EFF(6," Filtrar "),t.k0s(),t.j41(7,"button",5),t.bIt("click",function(){return e.onResetFilters()}),t.EFF(8," Reiniciar "),t.k0s()()(),t.j41(9,"div",6)(10,"div",7)(11,"div",8),t.EFF(12," Nombre "),t.k0s(),t.j41(13,"div",9)(14,"input",10),t.mxI("ngModelChange",function(a){return t.DH7(e.filterData.name,a)||(e.filterData.name=a),a}),t.k0s()()(),t.j41(15,"div",7)(16,"div",8),t.EFF(17," Tipo de contacto "),t.k0s(),t.j41(18,"div",11),t.DNE(19,M,4,3,"div",12),t.k0s()(),t.j41(20,"div",7)(21,"div",8),t.EFF(22," Origen "),t.k0s(),t.j41(23,"div",11),t.DNE(24,y,4,3,"div",12),t.k0s()(),t.j41(25,"div",7)(26,"div",8),t.EFF(27," DNI / Pasaporte "),t.k0s(),t.j41(28,"div",9)(29,"input",13),t.mxI("ngModelChange",function(a){return t.DH7(e.filterData.dniPassport,a)||(e.filterData.dniPassport=a),a}),t.k0s()()(),t.j41(30,"div",7)(31,"div",8),t.EFF(32," Nacionalidad "),t.k0s(),t.j41(33,"div",11),t.DNE(34,D,4,3,"div",12),t.k0s()(),t.j41(35,"div",14)(36,"div",7)(37,"div",8),t.EFF(38," Fecha desde "),t.k0s(),t.j41(39,"div",9)(40,"input",15),t.mxI("ngModelChange",function(a){return t.DH7(e.filterData.birthdateFrom,a)||(e.filterData.birthdateFrom=a),a}),t.k0s()()(),t.j41(41,"div",7)(42,"div",8),t.EFF(43," Fecha hasta "),t.k0s(),t.j41(44,"div",9)(45,"input",16),t.mxI("ngModelChange",function(a){return t.DH7(e.filterData.birthdateTo,a)||(e.filterData.birthdateTo=a),a}),t.k0s()()()(),t.j41(46,"div",14)(47,"div",7)(48,"div",8),t.EFF(49," Creado desde "),t.k0s(),t.j41(50,"div",9)(51,"input",17),t.mxI("ngModelChange",function(a){return t.DH7(e.filterData.createdAtFrom,a)||(e.filterData.createdAtFrom=a),a}),t.k0s()()(),t.j41(52,"div",7)(53,"div",8),t.EFF(54," Creado hasta "),t.k0s(),t.j41(55,"div",9)(56,"input",18),t.mxI("ngModelChange",function(a){return t.DH7(e.filterData.createdAtTo,a)||(e.filterData.createdAtTo=a),a}),t.k0s()()()(),t.j41(57,"div",7)(58,"div",8),t.EFF(59," G\xe9nero "),t.k0s(),t.j41(60,"div",11),t.DNE(61,I,4,3,"div",12),t.k0s()(),t.j41(62,"div",7)(63,"div",8),t.EFF(64," Alias "),t.k0s(),t.j41(65,"div",9)(66,"input",19),t.mxI("ngModelChange",function(a){return t.DH7(e.filterData.alias,a)||(e.filterData.alias=a),a}),t.k0s()()(),t.j41(67,"div",7)(68,"div",8),t.EFF(69," Direcci\xf3n "),t.k0s(),t.j41(70,"div",9)(71,"input",20),t.mxI("ngModelChange",function(a){return t.DH7(e.filterData.address,a)||(e.filterData.address=a),a}),t.k0s()()(),t.j41(72,"div",7)(73,"div",8),t.EFF(74," Tel\xe9fono "),t.k0s(),t.j41(75,"div",9)(76,"input",21),t.mxI("ngModelChange",function(a){return t.DH7(e.filterData.phoneNumber,a)||(e.filterData.phoneNumber=a),a}),t.k0s()()(),t.j41(77,"div",7)(78,"div",8),t.EFF(79," Email "),t.k0s(),t.j41(80,"div",9)(81,"input",22),t.mxI("ngModelChange",function(a){return t.DH7(e.filterData.emailAddress,a)||(e.filterData.emailAddress=a),a}),t.k0s()()(),t.j41(82,"div",23),t.EFF(83," Filtrar por etiquetas "),t.k0s(),t.j41(84,"div",24),t.Z7z(85,G,2,4,"div",25,t.fX1),t.k0s(),t.nrm(87,"br")(88,"br")(89,"br")(90,"br"),t.k0s()()),2&n&&(t.R7$(14),t.R50("ngModel",e.filterData.name),t.R7$(5),t.Y8G("ngForOf",e.contactTypes),t.R7$(5),t.Y8G("ngForOf",e.origins),t.R7$(5),t.R50("ngModel",e.filterData.dniPassport),t.R7$(5),t.Y8G("ngForOf",e.nationalities),t.R7$(6),t.R50("ngModel",e.filterData.birthdateFrom),t.R7$(5),t.R50("ngModel",e.filterData.birthdateTo),t.R7$(6),t.R50("ngModel",e.filterData.createdAtFrom),t.R7$(5),t.R50("ngModel",e.filterData.createdAtTo),t.R7$(5),t.Y8G("ngForOf",e.genders),t.R7$(5),t.R50("ngModel",e.filterData.alias),t.R7$(5),t.R50("ngModel",e.filterData.address),t.R7$(5),t.R50("ngModel",e.filterData.phoneNumber),t.R7$(5),t.R50("ngModel",e.filterData.emailAddress),t.R7$(4),t.Dyx(e.allTags))},dependencies:[p.YU,p.Sq,r.eY,r.hB,g.me,g.BC,g.vS]}),c})();var $=s(4420),N=s(6552);const P=o=>({"crm-card-user-active":o});function B(o,c){1&o&&(t.j41(0,"div",0)(1,"div",2)(2,"div",3),t.nrm(3,"ion-skeleton-text",4),t.k0s()(),t.j41(4,"div",5)(5,"div",6),t.nrm(6,"ion-skeleton-text",7),t.k0s(),t.j41(7,"div",8),t.nrm(8,"ion-skeleton-text",9),t.k0s()(),t.j41(9,"div",10)(10,"div",11)(11,"div",12)(12,"div",13),t.nrm(13,"ion-skeleton-text",14),t.j41(14,"span",15),t.nrm(15,"ion-skeleton-text",16),t.k0s()(),t.j41(16,"div",17),t.nrm(17,"ion-skeleton-text",18),t.k0s(),t.j41(18,"div",19),t.nrm(19,"ion-skeleton-text",18),t.k0s()(),t.j41(20,"div",20)(21,"div",21)(22,"div",22),t.nrm(23,"ion-skeleton-text",9),t.k0s(),t.j41(24,"div",23),t.nrm(25,"ion-skeleton-text",24),t.k0s()(),t.j41(26,"div",21)(27,"div",22),t.nrm(28,"ion-skeleton-text",9),t.k0s(),t.j41(29,"div",23),t.nrm(30,"ion-skeleton-text",24),t.k0s()(),t.j41(31,"div",25)(32,"div",22),t.nrm(33,"ion-skeleton-text",9),t.k0s(),t.j41(34,"div",23),t.nrm(35,"ion-skeleton-text",14),t.k0s()(),t.j41(36,"div",21)(37,"div",22),t.nrm(38,"ion-skeleton-text",9),t.k0s(),t.j41(39,"div",23),t.nrm(40,"ion-skeleton-text",18),t.k0s()(),t.j41(41,"div",26)(42,"div",22),t.nrm(43,"ion-skeleton-text",9),t.k0s(),t.j41(44,"div",27),t.nrm(45,"i",28)(46,"ion-skeleton-text",18),t.k0s()(),t.j41(47,"div",25)(48,"div",22),t.nrm(49,"ion-skeleton-text",9),t.k0s(),t.j41(50,"div",23),t.nrm(51,"ion-skeleton-text",14),t.k0s()()()(),t.j41(52,"div",29)(53,"div",30),t.nrm(54,"ion-skeleton-text",18)(55,"ion-skeleton-text",9),t.k0s()()()()),2&o&&(t.R7$(3),t.Y8G("animated",!0),t.R7$(3),t.Y8G("animated",!0),t.R7$(2),t.Y8G("animated",!0),t.R7$(5),t.Y8G("animated",!0),t.R7$(2),t.Y8G("animated",!0),t.R7$(2),t.Y8G("animated",!0),t.R7$(2),t.Y8G("animated",!0),t.R7$(4),t.Y8G("animated",!0),t.R7$(2),t.Y8G("animated",!0),t.R7$(3),t.Y8G("animated",!0),t.R7$(2),t.Y8G("animated",!0),t.R7$(3),t.Y8G("animated",!0),t.R7$(2),t.Y8G("animated",!0),t.R7$(3),t.Y8G("animated",!0),t.R7$(2),t.Y8G("animated",!0),t.R7$(3),t.Y8G("animated",!0),t.R7$(3),t.Y8G("animated",!0),t.R7$(3),t.Y8G("animated",!0),t.R7$(2),t.Y8G("animated",!0),t.R7$(3),t.Y8G("animated",!0),t.R7$(),t.Y8G("animated",!0))}function Y(o,c){if(1&o&&(t.j41(0,"span",15),t.EFF(1),t.k0s()),2&o){const i=t.XpG(2);t.R7$(),t.SpI(" (",null==i.contact?null:i.contact.alias,") ")}}function U(o,c){if(1&o&&(t.j41(0,"div",45)(1,"div",46)(2,"div",47),t.nrm(3,"span",48),t.k0s()()()),2&o){let i,n;const e=t.XpG().$implicit,l=t.XpG(3);t.R7$(3),t.HbH(null==(i=l.utils.getLanguageInfo(e))?null:i.flagClass),t.Y8G("title",null==(n=l.utils.getLanguageInfo(e))?null:n.name)}}function X(o,c){1&o&&t.DNE(0,U,4,3,"div",45),2&o&&t.vxM(c.$index<4?0:-1)}function A(o,c){if(1&o&&(t.j41(0,"div",36),t.EFF(1),t.k0s()),2&o){const i=t.XpG(3);t.R7$(),t.SpI(" +",(null==i.contact?null:i.contact.languages.length)-4," ")}}function L(o,c){if(1&o&&(t.j41(0,"div",44),t.Z7z(1,X,1,1,null,null,t.fX1),t.k0s(),t.DNE(3,A,2,1,"div",36)),2&o){const i=t.XpG(2);t.R7$(),t.Dyx(null==i.contact?null:i.contact.languages),t.R7$(2),t.vxM((null==i.contact?null:i.contact.languages.length)>4?3:-1)}}function V(o,c){1&o&&t.nrm(0,"div",36)}function O(o,c){1&o&&(t.j41(0,"span"),t.EFF(1,"s"),t.k0s())}function w(o,c){if(1&o&&(t.j41(0,"div"),t.EFF(1),t.k0s()),2&o){const i=t.XpG(2);t.R7$(),t.JRh(null==i.contact||null==i.contact.phones?null:i.contact.phones[0])}}function H(o,c){if(1&o&&(t.j41(0,"div"),t.EFF(1),t.k0s()),2&o){const i=t.XpG(2);t.R7$(),t.JRh(null==i.contact||null==i.contact.phones?null:i.contact.phones[1])}}function J(o,c){if(1&o&&(t.j41(0,"div"),t.EFF(1),t.k0s()),2&o){const i=t.XpG(2);t.R7$(),t.SpI("+",(null==i.contact||null==i.contact.phones?null:i.contact.phones.length)-2,"")}}function z(o,c){1&o&&(t.j41(0,"span"),t.EFF(1,"s"),t.k0s())}function Z(o,c){if(1&o&&(t.j41(0,"div"),t.EFF(1),t.k0s()),2&o){const i=t.XpG(2);t.R7$(),t.JRh(null==i.contact||null==i.contact.emails?null:i.contact.emails[0])}}function W(o,c){if(1&o&&(t.j41(0,"div"),t.EFF(1),t.k0s()),2&o){const i=t.XpG(2);t.R7$(),t.JRh(null==i.contact||null==i.contact.emails?null:i.contact.emails[1])}}function K(o,c){if(1&o&&(t.j41(0,"div"),t.EFF(1),t.k0s()),2&o){const i=t.XpG(2);t.R7$(),t.SpI("+",(null==i.contact||null==i.contact.emails?null:i.contact.emails.length)-2,"")}}function Q(o,c){if(1&o&&(t.j41(0,"div",23)(1,"div",49)(2,"div",50),t.EFF(3),t.k0s()()()),2&o){const i=c.$implicit;t.R7$(3),t.SpI(" ",null==i||null==i.contact?null:i.contact.name," ")}}function q(o,c){if(1&o&&(t.j41(0,"div",23)(1,"div",49)(2,"div",50),t.EFF(3),t.k0s()()()),2&o){const i=c.$implicit;t.R7$(3),t.SpI(" ",null==i||null==i.contactRelated?null:i.contactRelated.name," ")}}function tt(o,c){if(1&o&&(t.j41(0,"div",25)(1,"div",22),t.EFF(2,"Relacionado con"),t.k0s(),t.Z7z(3,Q,4,1,"div",23,t.fX1),t.Z7z(5,q,4,1,"div",23,t.fX1),t.k0s()),2&o){const i=t.XpG(2);t.R7$(3),t.Dyx(i.contact.contactsRelated),t.R7$(2),t.Dyx(i.contact.contactsRelation)}}function nt(o,c){if(1&o&&(t.j41(0,"div",38),t.EFF(1),t.k0s()),2&o){const i=c.$implicit;t.R7$(),t.SpI(" ",null==i?null:i.text," ")}}function et(o,c){if(1&o&&(t.j41(0,"div",41)(1,"div",51),t.nrm(2,"img",33),t.k0s(),t.j41(3,"div",52)(4,"div",53),t.EFF(5),t.k0s(),t.j41(6,"div",54),t.EFF(7," Responsable "),t.k0s()()()),2&o){const i=t.XpG(2);t.R7$(2),t.Y8G("src",(null==i.contact||null==i.contact.responsableUsers||null==i.contact.responsableUsers[0]?null:i.contact.responsableUsers[0].photoUrl)||"assets/images/avatar.png",t.B4B)("alt",null==i.contact||null==i.contact.responsableUsers||null==i.contact.responsableUsers[0]?null:i.contact.responsableUsers[0].photoUrl),t.R7$(3),t.SpI(" ",null==i.contact||null==i.contact.responsableUsers||null==i.contact.responsableUsers[0]?null:i.contact.responsableUsers[0].name," ")}}function ot(o,c){if(1&o){const i=t.RV6();t.j41(0,"div",1)(1,"div",2)(2,"div",3)(3,"ion-checkbox",31),t.mxI("ngModelChange",function(e){t.eBV(i);const l=t.XpG();return t.DH7(l.contact.checked,e)||(l.contact.checked=e),t.Njj(e)}),t.bIt("ngModelChange",function(){t.eBV(i);const e=t.XpG();return t.Njj(e.onToggleContactCheckbox())}),t.k0s()()(),t.j41(4,"div",32),t.bIt("click",function(){t.eBV(i);const e=t.XpG();return t.Njj(e.onNavigateToContact())}),t.j41(5,"div",6),t.nrm(6,"img",33),t.k0s(),t.j41(7,"div",8),t.EFF(8),t.k0s()(),t.j41(9,"div",10)(10,"div",11)(11,"div",12)(12,"div",34),t.bIt("click",function(){t.eBV(i);const e=t.XpG();return t.Njj(e.onNavigateToContact())}),t.EFF(13),t.DNE(14,Y,2,1,"span",35),t.k0s(),t.j41(15,"div",17),t.EFF(16),t.k0s(),t.j41(17,"div",19),t.DNE(18,L,4,1)(19,V,1,0,"div",36),t.k0s()(),t.j41(20,"div",20)(21,"div",21)(22,"div",22),t.EFF(23,"Nacionalidad"),t.k0s(),t.j41(24,"div",23)(25,"div"),t.EFF(26),t.k0s()()(),t.j41(27,"div",25)(28,"div",22),t.EFF(29," Tel\xe9fono"),t.DNE(30,O,2,0,"span",37),t.k0s(),t.j41(31,"div",23),t.DNE(32,w,2,1,"div",37)(33,H,2,1,"div",37)(34,J,2,1,"div",37),t.k0s()(),t.j41(35,"div",25)(36,"div",22),t.EFF(37," E-mail"),t.DNE(38,z,2,0,"span",37),t.k0s(),t.j41(39,"div",23),t.DNE(40,Z,2,1,"div",37)(41,W,2,1,"div",37)(42,K,2,1,"div",37),t.k0s()(),t.j41(43,"div",21)(44,"div",22),t.EFF(45,"Origen"),t.k0s(),t.j41(46,"div",23)(47,"div"),t.EFF(48),t.k0s()()(),t.j41(49,"div",26)(50,"div",22),t.EFF(51,"Operaciones"),t.k0s(),t.j41(52,"div",27),t.nrm(53,"i",28),t.EFF(54),t.k0s()(),t.DNE(55,tt,7,0,"div",25),t.k0s()(),t.j41(56,"div",29)(57,"div",30),t.Z7z(58,nt,2,1,"div",38,t.fX1),t.j41(60,"div",39),t.bIt("click",function(){t.eBV(i);const e=t.XpG();return t.Njj(e.onEditTags())}),t.nrm(61,"i",40),t.EFF(62," \xa0 Editar tags "),t.k0s()()()(),t.DNE(63,et,8,3,"div",41),t.j41(64,"div",42)(65,"div",43)(66,"div",22),t.EFF(67),t.nI1(68,"date"),t.k0s()()()()}if(2&o){let i;const n=t.XpG();t.Y8G("ngClass",t.eq3(27,P,null==n.contact?null:n.contact.checked)),t.R7$(3),t.R50("ngModel",n.contact.checked),t.R7$(3),t.Y8G("src",(null==n.contact?null:n.contact.photoUrl)||"assets/images/avatar.png",t.B4B)("alt",null==n.contact?null:n.contact.photoUrl),t.R7$(2),t.SpI(" #",(null==n.contact?null:n.contact.byvaroId)||""," "),t.R7$(5),t.SpI(" ",null==n.contact?null:n.contact.name," "),t.R7$(),t.Y8G("ngIf",null==n.contact?null:n.contact.alias),t.R7$(2),t.SpI(" ",null==n.contact?null:n.contact.contactType," "),t.R7$(2),t.vxM(null!=n.contact&&n.contact.languages&&(null==n.contact?null:n.contact.languages.length)>0?18:19),t.R7$(8),t.JRh(null==(i=n.utils.getCountryInfo(null==n.contact?null:n.contact.nationality))?null:i.name),t.R7$(4),t.Y8G("ngIf",(null==n.contact||null==n.contact.emails?null:n.contact.emails.length)>1),t.R7$(2),t.Y8G("ngIf",null==n.contact||null==n.contact.phones?null:n.contact.phones[0]),t.R7$(),t.Y8G("ngIf",null==n.contact||null==n.contact.phones?null:n.contact.phones[0]),t.R7$(),t.Y8G("ngIf",(null==n.contact||null==n.contact.phones?null:n.contact.phones.length)>2),t.R7$(4),t.Y8G("ngIf",(null==n.contact||null==n.contact.emails?null:n.contact.emails.length)>1),t.R7$(2),t.Y8G("ngIf",null==n.contact||null==n.contact.emails?null:n.contact.emails[0]),t.R7$(),t.Y8G("ngIf",null==n.contact||null==n.contact.emails?null:n.contact.emails[0]),t.R7$(),t.Y8G("ngIf",(null==n.contact||null==n.contact.emails?null:n.contact.emails.length)>2),t.R7$(6),t.JRh(null==n.contact?null:n.contact.origin),t.R7$(6),t.Lme(" ",null==n.contact||null==n.contact.operations?null:n.contact.operations.length," / ",null==n.contact||null==n.contact.operations?null:n.contact.operations.length," "),t.R7$(),t.vxM((null==n.contact||null==n.contact.contactsRelation?null:n.contact.contactsRelation.length)>0||(null==n.contact||null==n.contact.contactsRelated?null:n.contact.contactsRelated.length)>0?55:-1),t.R7$(3),t.Dyx(n.contact.tags),t.R7$(5),t.vxM(null!=n.contact&&null!=n.contact.responsableUsers&&null!=n.contact.responsableUsers[0]&&n.contact.responsableUsers[0].name?63:-1),t.R7$(4),t.SpI("Creado el ",t.i5U(68,24,null==n.contact?null:n.contact.createdAt,"dd/MM/yyyy HH:mm"),"")}}let it=(()=>{var o;class c{constructor(n,e){this.router=n,this.utils=e,this.isSkeleton=!1,this.toggleContactCheckbox=new t.bkB,this.editTags=new t.bkB,this.activeOperations=0}ngOnInit(){}onToggleContactCheckbox(){this.toggleContactCheckbox.emit()}onNavigateToContact(){this.router.navigate([`/contacts/${this.contact.id}`])}onEditTags(){this.editTags.emit(this.contact)}setActiveOportunities(){}}return(o=c).\u0275fac=function(n){return new(n||o)(t.rXU(h.Ix),t.rXU(N.T))},o.\u0275cmp=t.VBU({type:o,selectors:[["app-card-user"]],inputs:{isSkeleton:"isSkeleton",contact:"contact"},outputs:{toggleContactCheckbox:"toggleContactCheckbox",editTags:"editTags"},decls:2,vars:1,consts:[[1,"crm-card-contact"],[1,"crm-card-contact",3,"ngClass"],[1,"crm-card-contact-checkbox"],[1,"crm-input-checkbox"],[2,"width","20px","height","20px",3,"animated"],[1,"crm-card-contact-left"],[1,"crm-card-contact-left-img"],[2,"width","50px","height","50px","border-radius","50%",3,"animated"],[1,"crm-card-contact-left-reference"],[2,"width","80px",3,"animated"],[1,"crm-card-contact-right"],[1,"crm-card-contact-right-top"],[1,"crm-card-contact-main-data"],[1,"crm-card-contact-name"],[2,"width","150px",3,"animated"],[1,"crm-card-contact-reference"],[2,"width","50px",3,"animated"],[1,"crm-card-contact-subtitle"],[2,"width","100px",3,"animated"],[1,"crm-card-contact-flags"],[1,"crm-block-info-horizontal"],[1,"crm-info","crm-info-size-small"],[1,"crm-info-title"],[1,"crm-info-content"],[2,"width","120px",3,"animated"],[1,"crm-info","crm-info-size-medium"],[1,"crm-info"],[1,"crm-info-content","crm-info-content-with-icon"],[1,"fas","fa-bullseye"],[1,"crm-card-contact-right-bottom"],[1,"crm-section-tags"],[3,"ngModelChange","ngModel"],[1,"crm-card-contact-left",3,"click"],[3,"src","alt"],[1,"crm-card-contact-name",3,"click"],["class","crm-card-contact-reference",4,"ngIf"],[1,"crm-info-content-langs-plus"],[4,"ngIf"],[1,"crm-item-tag"],[1,"crm-item-tag",3,"click"],[1,"fas","fa-edit"],[1,"crm-card-user-header","small","crm-card-contact-floating-user"],[1,"crm-card-contact-floating-creation-date"],[1,"crm-info","crm-info-size-large"],[1,"crm-info-content-langs-langs"],[1,"crm-item-option","crm-item-option-lang"],[1,"crm-item-option-left"],[1,"crm-item-option-flag"],[3,"title"],[1,"crm-item-reference"],[1,"crm-item-reference-text"],[1,"crm-card-user-header-photo"],[1,"crm-card-user-header-data"],[1,"crm-card-user-header-data-name"],[1,"crm-card-user-header-data-subtitle"]],template:function(n,e){1&n&&t.DNE(0,B,56,21,"div",0)(1,ot,69,29,"div",1),2&n&&t.vxM(e.isSkeleton?0:1)},dependencies:[p.YU,p.bT,g.BC,g.vS,r.eY,r.ds,r.hB,p.vh]}),c})();const at=o=>({"crm-button-secondary-primary":o});function lt(o,c){if(1&o){const i=t.RV6();t.j41(0,"button",38),t.nrm(1,"i",39),t.EFF(2," Exportar "),t.k0s(),t.j41(3,"button",40),t.bIt("click",function(){t.eBV(i);const e=t.XpG();return t.Njj(e.onEditContactTags())}),t.nrm(4,"i",41),t.EFF(5," Modificar tags "),t.k0s(),t.j41(6,"button",42),t.bIt("click",function(){t.eBV(i);const e=t.XpG();return t.Njj(e.onDeleteContacts())}),t.nrm(7,"i",43),t.EFF(8," Borrar "),t.k0s(),t.nrm(9,"div",44)}2&o&&(t.Y8G("@fadeSlideIn",void 0),t.R7$(3),t.Y8G("@fadeSlideIn",void 0),t.R7$(3),t.Y8G("@fadeSlideIn",void 0))}function ct(o,c){1&o&&(t.nrm(0,"i",45),t.EFF(1," Cerrar filtros "))}function st(o,c){1&o&&(t.nrm(0,"i",46),t.EFF(1," Filtros activados "))}function rt(o,c){1&o&&(t.nrm(0,"i",46),t.EFF(1," Filtrar "))}function dt(o,c){if(1&o&&t.DNE(0,st,2,0)(1,rt,2,0),2&o){const i=t.XpG();t.vxM(i.filters?0:1)}}function ut(o,c){if(1&o&&(t.j41(0,"div",30),t.EFF(1),t.k0s()),2&o){const i=t.XpG();t.R7$(),t.SpI(" ",i.checkedContacts," seleccionado ")}}function mt(o,c){1&o&&t.nrm(0,"app-card-user",47)(1,"app-card-user",47)(2,"app-card-user",47),2&o&&(t.Y8G("isSkeleton",!0),t.R7$(),t.Y8G("isSkeleton",!0),t.R7$(),t.Y8G("isSkeleton",!0))}function pt(o,c){if(1&o){const i=t.RV6();t.j41(0,"app-card-user",50),t.bIt("toggleContactCheckbox",function(){t.eBV(i);const e=t.XpG(2);return t.Njj(e.onToggleContactCheckbox())})("editTags",function(e){t.eBV(i);const l=t.XpG(2);return t.Njj(l.onEditContactTags(e))}),t.k0s()}2&o&&t.Y8G("contact",c.$implicit)}function gt(o,c){1&o&&(t.j41(0,"div",49),t.EFF(1," A\xfan no hay contactos "),t.k0s())}function _t(o,c){if(1&o&&(t.j41(0,"div",36),t.Z7z(1,pt,1,1,"app-card-user",48,t.fX1),t.DNE(3,gt,2,0,"div",49),t.k0s()),2&o){const i=t.XpG();t.R7$(),t.Dyx(i.contacts),t.R7$(2),t.vxM(0===i.contacts.length?3:-1)}}function ht(o,c){if(1&o){const i=t.RV6();t.j41(0,"app-filters-block",53),t.bIt("onFilter",function(e){t.eBV(i);const l=t.XpG(2);return t.Njj(l.onFilter(e))}),t.k0s()}if(2&o){const i=t.XpG(2);t.Y8G("savedFilters",i.filters)}}function vt(o,c){if(1&o){const i=t.RV6();t.j41(0,"app-tags-editor-block",54),t.bIt("updateContacts",function(){t.eBV(i);const e=t.XpG(2);return t.Njj(e.onUpdateContactsTags())})("closeAside",function(){t.eBV(i);const e=t.XpG(2);return t.Njj(e.onCloseAside())})("uncheckAllContacts",function(){t.eBV(i);const e=t.XpG(2);return t.Njj(e.uncheckAllContacts())}),t.k0s()}if(2&o){const i=t.XpG(2);t.Y8G("contacts",i.contacts)}}function ft(o,c){if(1&o&&(t.j41(0,"div",37),t.DNE(1,ht,1,1,"app-filters-block",51)(2,vt,1,1,"app-tags-editor-block",52),t.k0s()),2&o){const i=t.XpG();t.Y8G("@biggerFadeSlideIn",void 0),t.R7$(),t.vxM("filters"===(null==i.aside?null:i.aside.type)?1:-1),t.R7$(),t.vxM("tags"===(null==i.aside?null:i.aside.type)?2:-1)}}const Ct=[{path:"",component:(()=>{var o;class c{constructor(n,e,l,a,u,_,Et){this.headerService=n,this.contactsService=e,this.modalsService=l,this.toastService=a,this.router=u,this.api=_,this.popoversService=Et,this.contacts=[],this.allSystemContactsCount=0,this.checkedContacts=0,this.searchString="",this.searchSubject=new f.B,this.aside={visible:!1},this.showFilters=!1,this.filters=null,this.sort=null,this.pagination={page:0,itemsPerPage:25},this.loadingList=!1}ngOnInit(){this.searchSubject.pipe((0,C.B)(800)).subscribe(n=>{this.onSearchChanged(n)}),this.filters=localStorage.getItem("byvaroContactsFilters")?JSON.parse(localStorage.getItem("byvaroContactsFilters")):null,this.sort=localStorage.getItem("byvaroContactsSort")?JSON.parse(localStorage.getItem("byvaroContactsSort")):null}ionViewWillEnter(){this.headerService.setConfig({title:"contacts"}),this.getData()}getData(){var n=this;return(0,d.A)(function*(){try{n.loadingList=!0;const e=yield n.getContacts();if(null!=e&&e.errors)throw new Error("Error fetching contacts");n.contacts=null==e?void 0:e.data,n.allSystemContactsCount=null==e?void 0:e.metadata,n.setNumberOfCheckedContacts(),n.updatePagination(),n.loadingList=!1}catch{n.toastService.showToast({text:"Ha ocurrido un error al cargar los contactos",theme:"red",time:1e4}),n.loadingList=!1}})()}getContacts(){var n=this;return(0,d.A)(function*(){const e=n.contactsService.transformFilterDataToFilterI(n.filters,n.searchString);console.log("transformedFilters:",e);const l=n.filters?n.contactsService.createJoinTablesForTags(n.filters):null;return n.contactsService.getContacts(e,n.sort,n.pagination,l)})()}deleteContact(n){var e=this;return(0,d.A)(function*(){yield e.contactsService.deleteContact(n)})()}onSearchInputChange(n){this.searchSubject.next(n.target.value)}onSearchChanged(n){this.searchString=n,this.getData()}onToggleContactCheckbox(){this.setNumberOfCheckedContacts()}onToggleAllCheckboxes(n){this.contacts.forEach(e=>e.checked=n.detail.checked),this.setNumberOfCheckedContacts()}onClickMoreTools(n){var e=this;return(0,d.A)(function*(){const l=yield e.popoversService.onShowMenuPopover(n,"contacts-list-more-tools");console.log("Popover result:",l),"import-users"===(null==l?void 0:l.data)&&e.openImportContactsModal()})()}openImportContactsModal(){var n=this;return(0,d.A)(function*(){yield n.modalsService.onShowImportContactsModal(),n.getData()})()}onSort(n){var e=this;return(0,d.A)(function*(){const l=yield e.popoversService.onShowMenuPopover(n,"list-order");if(console.log("Popover result:",l),null!=l&&l.data){const a=l.data;if(a.includes("_")){const u=a.split("_")[0],_=a.split("_")[1];e.sort={field:u,order:_}}else e.sort={field:a,order:"asc"};localStorage.setItem("byvaroContactsSort",JSON.stringify(e.sort)),e.getData()}})()}onShowMenuSelectAll(n){var e=this;return(0,d.A)(function*(){const l=yield e.popoversService.onShowMenuPopover(n,"select-all");null!=l&&l.data&&"selectAll"===l.data&&(e.checkedContacts=e.allSystemContactsCount,e.contacts.forEach(u=>u.checked=!0))})()}updatePagination(){return{startIndex:this.pagination.page*this.pagination.itemsPerPage+1,endIndex:Math.min((this.pagination.page+1)*this.pagination.itemsPerPage,this.allSystemContactsCount)}}onGoNextPage(){(this.pagination.page+1)*this.pagination.itemsPerPage<this.allSystemContactsCount&&(this.pagination.page++,this.getData())}onGoPreviousPage(){this.pagination.page>0&&(this.pagination.page--,this.getData())}onDeleteContacts(){var n=this;return(0,d.A)(function*(){const e=yield n.modalsService.openConfirmationModal({title:"Eliminar contactos",message:"\xbfEst\xe1s seguro de que deseas eliminar los contactos seleccionados?",icon:"fas fa-trash",iconTheme:"red",buttons:[{text:"Cancelar",theme:"btn-secondary",id:"cancel"},{text:"Eliminar",theme:"btn-red",id:"delete"}]});if("delete"===(null==e?void 0:e.data)){const l=yield n.toastService.showToast({text:"Borrando contactos...",loading:!0});yield l.present(),n.contacts.filter(u=>u.checked).forEach(function(){var u=(0,d.A)(function*(_){return yield n.deleteContact(_.id)});return function(_){return u.apply(this,arguments)}}()),yield l.dismiss(),n.toastService.showToast({text:"Contactos eliminados correctamente",theme:"success",time:3e3}),n.getData()}})()}onFilter(n){localStorage.setItem("byvaroContactsFilters",JSON.stringify(n)),this.filters=n,this.getData()}onToggleAside(n){this.aside.visible&&this.aside.type===n&&"filters"===n?this.aside.visible=!1:(this.aside.visible=!0,this.aside.type=n)}onCloseAside(){this.aside.visible=!1,this.aside.type=void 0}onEditContactTags(n){var e=this;return(0,d.A)(function*(){var l;n&&e.checkContact(n),e.setNumberOfCheckedContacts();const a=yield e.modalsService.onShowTagsEditorModal(e.contacts.filter(u=>u.checked));console.log("Popover result:",a),null!=a&&null!==(l=a.data)&&void 0!==l&&l.reload&&e.getData()})()}onUpdateContactsTags(){this.getData(),this.toastService.showToast({text:"Etiquetas actualizadas correctamente",theme:"success",time:3e3})}uncheckAllContacts(){this.contacts.forEach(n=>n.checked=!1),this.setNumberOfCheckedContacts()}checkContact(n){this.contacts.forEach(e=>{e.checked=e.id===n.id})}setNumberOfCheckedContacts(){this.checkedContacts=this.contacts.filter(n=>n.checked).length}}return(o=c).\u0275fac=function(n){return new(n||o)(t.rXU(k.d),t.rXU(F.F),t.rXU(b.M),t.rXU(j.f),t.rXU(h.Ix),t.rXU(T.i),t.rXU(R.m))},o.\u0275cmp=t.VBU({type:o,selectors:[["app-contacts-list"]],decls:50,vars:17,consts:[[3,"fullscreen","scrollY"],[1,"crm-block-content"],[1,"crm-block-body"],[1,"crm-block-body-fixed"],[1,"crm-header-modal"],[1,"crm-input"],[1,"crm-input-input","crm-input-input-searchbar"],[1,"fas","fa-search"],["type","text","placeholder","Buscar contacto",3,"input"],[1,"crm-buttons-group"],[1,"crm-button",3,"routerLink"],[1,"fa","fa-plus"],[1,"crm-button-secondary",3,"click","ngClass"],[1,"crm-button-secondary","crm-button-secondary-icon-solo",3,"click"],[1,"fa","fa-ellipsis"],[1,"crm-block-pagination-selectors"],[1,"crm-button-pagination"],[1,"crm-button-pagination-text"],[1,"crm-button-pagination-buttons"],[1,"crm-button-pagination-arrow","crm-button-icon-solo",3,"click"],[1,"fas","fa-arrow-left"],[1,"crm-button-pagination-number"],[1,"fas","fa-arrow-right"],[1,"crm-dropdown",3,"click"],[1,"crm-dropdown-text"],[1,"crm-dropdown-right"],[1,"crm-dropdown-value"],[1,"crm-dropdown-arrow"],[1,"fas","fa-chevron-down"],[1,"crm-input-checkbox"],[1,"crm-input-checkbox-pre-label"],[3,"ionChange"],[1,"crm-input-checkbox-label"],[1,"crm-button-pagination-arrow","crm-button-icon-solo",2,"margin-left","4px",3,"click"],[1,"fa-solid","fa-ellipsis-vertical"],[1,"crm-block-body-blue-content",2,"overflow-x","auto"],[1,"crm-card-user-list"],[1,"crm-block-content-aside"],[1,"crm-button-secondary"],[1,"fa-solid","fa-file-export"],[1,"crm-button-secondary",3,"click"],[1,"fa-solid","fa-tag"],[1,"crm-button-secondary","crm-button-secondary-red",3,"click"],[1,"fas","fa-trash"],[1,"crm-vertical-separator"],[1,"fa","fa-times"],[1,"fa","fa-filter"],[3,"isSkeleton"],[3,"contact"],[1,"crm-empty-list","crm-text"],[3,"toggleContactCheckbox","editTags","contact"],[3,"savedFilters"],[3,"contacts"],[3,"onFilter","savedFilters"],[3,"updateContacts","closeAside","uncheckAllContacts","contacts"]],template:function(n,e){1&n&&(t.j41(0,"ion-content",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"div",4)(5,"div",5)(6,"div",6),t.nrm(7,"i",7),t.j41(8,"input",8),t.bIt("input",function(a){return e.onSearchInputChange(a)}),t.k0s()()(),t.j41(9,"div",9),t.DNE(10,lt,10,3),t.j41(11,"button",10),t.nrm(12,"i",11),t.EFF(13," A\xf1adir contacto "),t.k0s(),t.j41(14,"button",12),t.bIt("click",function(){return e.onToggleAside("filters")}),t.DNE(15,ct,2,0)(16,dt,2,1),t.k0s(),t.j41(17,"button",13),t.bIt("click",function(a){return e.onClickMoreTools(a)}),t.nrm(18,"i",14),t.k0s()()(),t.j41(19,"div",15)(20,"div",16)(21,"div",17),t.EFF(22),t.k0s(),t.j41(23,"div",18)(24,"button",19),t.bIt("click",function(){return e.onGoPreviousPage()}),t.nrm(25,"i",20),t.k0s(),t.j41(26,"div",21),t.EFF(27),t.k0s(),t.j41(28,"button",19),t.bIt("click",function(){return e.onGoNextPage()}),t.nrm(29,"i",22),t.k0s()(),t.j41(30,"div",23),t.bIt("click",function(a){return e.onSort(a)}),t.j41(31,"div",24),t.EFF(32," Ordenar por "),t.k0s(),t.j41(33,"div",25)(34,"div",26),t.EFF(35),t.k0s(),t.j41(36,"div",27),t.nrm(37,"i",28),t.k0s()()()(),t.j41(38,"div")(39,"div",29),t.DNE(40,ut,2,1,"div",30),t.j41(41,"ion-checkbox",31),t.bIt("ionChange",function(a){return e.onToggleAllCheckboxes(a)}),t.k0s(),t.j41(42,"div",32),t.EFF(43),t.k0s(),t.j41(44,"button",33),t.bIt("click",function(a){return e.onShowMenuSelectAll(a)}),t.nrm(45,"i",34),t.k0s()()()()(),t.j41(46,"div",35),t.DNE(47,mt,3,3)(48,_t,4,1,"div",36),t.k0s()(),t.DNE(49,ft,3,3,"div",37),t.k0s()()),2&n&&(t.Y8G("fullscreen",!0)("scrollY",!1),t.R7$(10),t.vxM(e.checkedContacts?10:-1),t.R7$(),t.Y8G("routerLink","/contacts/create"),t.R7$(3),t.Y8G("ngClass",t.eq3(15,at,!("filters"===(null==e.aside?null:e.aside.type)&&null!=e.aside&&e.aside.visible)&&e.filters)),t.R7$(),t.vxM("filters"===(null==e.aside?null:e.aside.type)&&null!=e.aside&&e.aside.visible?15:16),t.R7$(7),t.E5c(" ",e.updatePagination().startIndex," - ",e.updatePagination().endIndex," de ",e.allSystemContactsCount," "),t.R7$(5),t.SpI(" P\xe1g ",e.pagination.page+1," "),t.R7$(8),t.SpI(" ",null!=e.sort&&e.sort.field?(null==e.sort?null:e.sort.field)+" "+(null==e.sort?null:e.sort.order):"Fecha de creaci\xf3n"," "),t.R7$(5),t.vxM(e.checkedContacts?40:-1),t.R7$(3),t.SpI(" Seleccionar ",e.contacts.length," registros "),t.R7$(4),t.vxM(e.loadingList?47:48),t.R7$(2),t.vxM(null!=e.aside&&e.aside.visible?49:-1))},dependencies:[p.YU,r.eY,r.W9,r.hB,r.N7,h.Wk,S,$.T,it],data:{animation:[(0,m.hZ)("fadeSlideIn",[(0,m.kY)(":enter",[(0,m.iF)({opacity:0,transform:"translateX(30px)"}),(0,m.i0)("150ms ease-out",(0,m.iF)({opacity:1,transform:"translateX(0)"}))])]),(0,m.hZ)("biggerFadeSlideIn",[(0,m.kY)(":enter",[(0,m.iF)({opacity:0,transform:"translateX(150px)"}),(0,m.i0)("100ms ease-out",(0,m.iF)({opacity:1,transform:"translateX(0)"}))])])]}}),c})()}];let kt=(()=>{var o;class c{}return(o=c).\u0275fac=function(n){return new(n||o)},o.\u0275mod=t.$C({type:o}),o.\u0275inj=t.G2t({imports:[h.iI.forChild(Ct),h.iI]}),c})(),Ft=(()=>{var o;class c{}return(o=c).\u0275fac=function(n){return new(n||o)},o.\u0275mod=t.$C({type:o}),o.\u0275inj=t.G2t({imports:[p.MD,r.bv,g.YN,g.X1]}),c})();var bt=s(3732);let jt=(()=>{var o;class c{}return(o=c).\u0275fac=function(n){return new(n||o)},o.\u0275mod=t.$C({type:o}),o.\u0275inj=t.G2t({imports:[p.MD,g.YN]}),c})();var Tt=s(7754),Rt=s(4842);let xt=(()=>{var o;class c{}return(o=c).\u0275fac=function(n){return new(n||o)},o.\u0275mod=t.$C({type:o}),o.\u0275inj=t.G2t({imports:[p.MD,g.YN,r.bv,kt,Ft,bt.D,jt,Tt.X,Rt.h]}),c})()}}]);