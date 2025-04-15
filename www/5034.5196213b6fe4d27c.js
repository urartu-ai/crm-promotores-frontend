"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[5034],{1129:(h,p,o)=>{o.d(p,{Z:()=>r});var e=o(3953),d=o(6069),C=o(1982);function l(t,s){if(1&t){const u=e.RV6();e.j41(0,"app-country-selector-popover",4),e.bIt("countrySelected",function(i){e.eBV(u);const v=e.XpG();return e.Njj(v.selectCountry(i))})("closePopover",function(){e.eBV(u);const i=e.XpG();return e.Njj(i.dropdownOpen=!1)}),e.k0s()}2&t&&e.Y8G("showCountryCode",!0)}let r=(()=>{var t;class s{constructor(){this.emitCountrySelected=new e.bkB,this.countries=d.X,this.selectedCountry=d.X[0],this.dropdownOpen=!1}ngOnChanges(){const n=this.extractCountryPhoneCodeFromPhoneNumber(this.selectedPhoneNumber);n!==this.extractCountryPhoneCodeFromPhoneNumber(this.selectedCountry.phoneCode)&&this.selectCountryByPhoneCode(n)}toggleDropdown(n){n.stopPropagation(),this.dropdownOpen=!this.dropdownOpen}selectCountry(n){n.event.stopPropagation(),this.selectedCountry=n.country,this.emitCountrySelected.emit(n.country),this.dropdownOpen=!1}selectCountryByPhoneCode(n){const i=this.countries.find(v=>v.phoneCode===n);i&&(this.selectedCountry=i,this.emitCountrySelected.emit(i))}extractCountryPhoneCodeFromPhoneNumber(n){return null==n?void 0:n.split(" ")[0]}}return(t=s).\u0275fac=function(n){return new(n||t)},t.\u0275cmp=e.VBU({type:t,selectors:[["app-flag-country-selector"]],inputs:{selectedPhoneNumber:"selectedPhoneNumber"},outputs:{emitCountrySelected:"emitCountrySelected"},features:[e.OA$],decls:5,vars:3,consts:[["tabindex","0",1,"flag-country-selector-container",3,"click"],[1,"selected-country"],[1,"fas","fa-caret-down","dropdown-arrow"],[3,"showCountryCode"],[3,"countrySelected","closePopover","showCountryCode"]],template:function(n,i){1&n&&(e.j41(0,"div",0),e.bIt("click",function(P){return i.toggleDropdown(P)}),e.j41(1,"div",1),e.nrm(2,"span")(3,"i",2),e.k0s(),e.DNE(4,l,1,1,"app-country-selector-popover",3),e.k0s()),2&n&&(e.R7$(2),e.HbH(null==i.selectedCountry?null:i.selectedCountry.flagClass),e.R7$(2),e.vxM(i.dropdownOpen?4:-1))},dependencies:[C.u],styles:[".flag-country-selector-container[_ngcontent-%COMP%]{position:relative;width:50px;cursor:pointer;color:#000}.selected-country[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;height:40px;width:50px}.dropdown-arrow[_ngcontent-%COMP%]{margin-left:8px}.dropdown-options[_ngcontent-%COMP%]{position:absolute;top:100%;left:0;width:200px;z-index:9999;background-color:#fff;border:1px solid #ccc;padding:8px 0;border-radius:12px;border:1px solid var(--crm-border-light-color);color:#000;max-height:150px;overflow-y:auto}.option[_ngcontent-%COMP%]{padding:8px;display:flex;align-items:center;cursor:pointer;font-size:14px}.option[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-size:20px;width:20px;height:20px;display:inline-block;margin-right:8px}.option[_ngcontent-%COMP%]:hover{background-color:#f0f0f0}.flag-country-selector-container[_ngcontent-%COMP%]   .option[_ngcontent-%COMP%]{color:#000}.selected-country[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-size:24px;width:18px;height:18px}"]}),s})()},6812:(h,p,o)=>{o.d(p,{u:()=>r});var e=o(177),d=o(9417),C=o(7754),l=o(3953);let r=(()=>{var t;class s{}return(t=s).\u0275fac=function(n){return new(n||t)},t.\u0275mod=l.$C({type:t}),t.\u0275inj=l.G2t({imports:[e.MD,d.YN,C.X]}),s})()},68:(h,p,o)=>{o.d(p,{k:()=>l});var e=o(177),d=o(9417),C=o(3953);let l=(()=>{var r;class t{}return(r=t).\u0275fac=function(u){return new(u||r)},r.\u0275mod=C.$C({type:r}),r.\u0275inj=C.G2t({imports:[e.MD,d.YN]}),t})()},2306:(h,p,o)=>{o.d(p,{T:()=>l});var e=o(177),d=o(9417),C=o(3953);let l=(()=>{var r;class t{}return(r=t).\u0275fac=function(u){return new(u||r)},r.\u0275mod=C.$C({type:r}),r.\u0275inj=C.G2t({imports:[e.MD,d.YN]}),t})()},7754:(h,p,o)=>{o.d(p,{X:()=>r});var e=o(177),d=o(9417),C=o(9465),l=o(3953);let r=(()=>{var t;class s{}return(t=s).\u0275fac=function(n){return new(n||t)},t.\u0275mod=l.$C({type:t}),t.\u0275inj=l.G2t({imports:[e.MD,d.YN,C.bv]}),s})()},8383:(h,p,o)=>{o.r(p),o.d(p,{ContactCreatePageModule:()=>T});var e=o(177),d=o(9417),C=o(9465),l=o(517),r=o(467),t=o(3953),s=o(4501),u=o(9333),n=o(6039),i=o(6552),v=o(8397),P=o(3837),M=o(8129);const O=["contactForm"],E=[{path:"",component:(()=>{var a;class m{constructor(c,_,y,f,R,U){this.headerService=c,this.contactsService=_,this.router=y,this.api=f,this.utils=R,this.toastService=U,this.loadingButton=!1}ngOnInit(){}ionViewWillEnter(){this.headerService.setConfig({title:"contact_create"}),this.contactForm.contactForm.reset(),this.contactForm.contact=null,this.loadingButton=!1}onSubmit(){var c=this;return(0,r.A)(function*(){(yield c.contactsService.createOrUpdateContactFromForm(c.contactForm))&&(c.contactForm.contactForm.reset(),c.router.navigate(["/contacts"]))})()}}return(a=m).\u0275fac=function(c){return new(c||a)(t.rXU(s.d),t.rXU(u.F),t.rXU(l.Ix),t.rXU(n.i),t.rXU(i.T),t.rXU(v.f))},a.\u0275cmp=t.VBU({type:a,selectors:[["app-contact-create"]],viewQuery:function(c,_){if(1&c&&t.GBs(O,5),2&c){let y;t.mGM(y=t.lsd())&&(_.contactForm=y.first)}},decls:10,vars:1,consts:[["contactForm",""],[1,"crm-block-body"],[1,"crm-block-body-blue-content"],[1,"crm-header-modal","crm-header-modal-empty"],[1,"crm-buttons-group"],["type","submit",1,"crm-button",3,"click","appLoadingButton"],[1,"fa","fa-check"]],template:function(c,_){if(1&c){const y=t.RV6();t.j41(0,"div",1)(1,"div",2)(2,"div",3),t.nrm(3,"div"),t.j41(4,"div",4)(5,"button",5),t.bIt("click",function(){return t.eBV(y),t.Njj(_.onSubmit())}),t.nrm(6,"i",6),t.EFF(7," Crear contacto "),t.k0s()()(),t.nrm(8,"app-contact-form",null,0),t.k0s()()}2&c&&(t.R7$(5),t.Y8G("appLoadingButton",_.loadingButton))},dependencies:[P.q,M.K]}),m})()}];let D=(()=>{var a;class m{}return(a=m).\u0275fac=function(c){return new(c||a)},a.\u0275mod=t.$C({type:a}),a.\u0275inj=t.G2t({imports:[l.iI.forChild(E),l.iI]}),m})();var F=o(6812),S=o(68),B=o(7294),x=o(4842);let T=(()=>{var a;class m{}return(a=m).\u0275fac=function(c){return new(c||a)},a.\u0275mod=t.$C({type:a}),a.\u0275inj=t.G2t({imports:[e.MD,d.YN,C.bv,D,F.u,d.X1,S.k,B.J,x.h]}),m})()}}]);