"use strict";(self.webpackChunkinterViewR_web=self.webpackChunkinterViewR_web||[]).push([[752],{752:(w,h,i)=>{i.r(h),i.d(h,{ChatBotModule:()=>b});var r=i(6814),u=i(2058),t=i(5879),l=i(6223);function f(e,o){1&e&&(t.TgZ(0,"div",10),t._uU(1," Say \u201cHello, Eduard!\u201d or greet the person to start the conversation "),t.qZA())}function g(e,o){1&e&&(t.TgZ(0,"div",11),t._uU(1," TIME'S UP! "),t.qZA())}function m(e,o){1&e&&(t.TgZ(0,"div"),t.Hsn(1),t.qZA())}const x=["*"];let C=(()=>{class e{constructor(){this.minutes=15,this.seconds=0,this.started=!1,this.ended=!1,this.chatMessage=new t.vpe,this.currentMessage=""}onEnter(){""!=this.currentMessage.trim()&&(this.chatMessage.emit(this.currentMessage),this.currentMessage="")}static#t=this.\u0275fac=function(n){return new(n||e)};static#e=this.\u0275cmp=t.Xpm({type:e,selectors:[["app-chat-bot"]],inputs:{minutes:"minutes",seconds:"seconds",started:"started",ended:"ended"},outputs:{chatMessage:"chatMessage"},ngContentSelectors:x,decls:11,vars:6,consts:[[1,"absolute","bg-white-darker","w-full","h-full","flex","flex-col","gap-32"],[1,"w-[75%]","h-full","relative","left-1/2","-translate-x-1/2","pt-6","flex","flex-col","gap-6"],[1,"self-end","pr-6","text-accent-darkest","font-bold","text-sm"],[1,"h-[85%]","bg-white","rounded-xl","pt-14","overflow-auto","pb-10"],["class","absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 text-xl text-accent text-opacity-40 text-center",4,"ngIf"],["class","absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 text-xl text-accent text-opacity-40",4,"ngIf"],[4,"ngIf"],[1,"h-[5%]","bg-white","rounded-xl","flex","flex-row","pr-4"],["type","text","placeholder","Type your message here...",1,"w-full","h-full","rounded-xl","pl-5","focus:outline-none",3,"ngModel","ngModelChange","keyup.enter"],["src","/assets/icons/send.svg",1,"scale-[0.7]","hover:cursor-pointer",3,"click"],[1,"absolute","left-1/2","-translate-x-1/2","top-1/2","-translate-y-1/2","text-xl","text-accent","text-opacity-40","text-center"],[1,"absolute","left-1/2","-translate-x-1/2","top-1/2","-translate-y-1/2","text-xl","text-accent","text-opacity-40"]],template:function(n,s){1&n&&(t.F$t(),t.TgZ(0,"div",0)(1,"div",1)(2,"div",2),t._uU(3),t.qZA(),t.TgZ(4,"div",3),t.YNc(5,f,2,0,"div",4),t.YNc(6,g,2,0,"div",5),t.YNc(7,m,2,0,"div",6),t.qZA(),t.TgZ(8,"div",7)(9,"input",8),t.NdJ("ngModelChange",function(d){return s.currentMessage=d})("keyup.enter",function(){return s.onEnter()}),t.qZA(),t.TgZ(10,"img",9),t.NdJ("click",function(){return s.onEnter()}),t.qZA()()()()),2&n&&(t.xp6(3),t.AsE(" ",s.minutes," m ",s.seconds," s left "),t.xp6(2),t.Q6J("ngIf",!s.started),t.xp6(1),t.Q6J("ngIf",s.ended),t.xp6(1),t.Q6J("ngIf",s.started&&!s.ended),t.xp6(2),t.Q6J("ngModel",s.currentMessage))},dependencies:[r.O5,l.Fj,l.JJ,l.On]})}return e})();const v=function(e){return{"bg-white-darker":e}},y=function(e,o){return{"bg-primary":e,"bg-secondary":o}};function T(e,o){if(1&e&&(t.TgZ(0,"div",2)(1,"div",3),t._uU(2),t.qZA(),t._uU(3),t.qZA()),2&e){const a=o.$implicit,n=o.index,s=t.oxw();t.Q6J("ngClass",t.VKq(4,v,n%2==1)),t.xp6(1),t.Q6J("ngClass",t.WLB(6,y,n%2==0,n%2==1)),t.xp6(1),t.hij(" ",n%2==0?s.nameInitial:s.botInitial," "),t.xp6(1),t.hij(" ",a," ")}}const _=[{path:"",component:(()=>{class e{constructor(){this.messages=[],this.nameInitial="ED",this.botInitial="C",this.minutes=15,this.seconds=0,this.started=!1,this.ended=!1}ngOnInit(){}startTimer(){this.started=!0,this.intervalId=setInterval(()=>{this.seconds>0?this.seconds--:this.minutes>0?(this.minutes--,this.seconds=59):this.stopTimer()},1e3)}stopTimer(){this.intervalId&&(clearInterval(this.intervalId),this.ended=!0)}onMessageReceived(a){this.started||(this.started=!0,this.startTimer()),this.messages.push(a),console.log(a)}ngOnDestroy(){this.stopTimer()}static#t=this.\u0275fac=function(n){return new(n||e)};static#e=this.\u0275cmp=t.Xpm({type:e,selectors:[["app-chat-bot-container"]],decls:2,vars:5,consts:[[3,"minutes","seconds","started","ended","chatMessage"],["class","w-full h-14 flex items-center gap-4 text-left pl-10",3,"ngClass",4,"ngFor","ngForOf"],[1,"w-full","h-14","flex","items-center","gap-4","text-left","pl-10",3,"ngClass"],[1,"w-8","h-8","rounded-full","flex","items-center","justify-center","text-white","font-bold",3,"ngClass"]],template:function(n,s){1&n&&(t.TgZ(0,"app-chat-bot",0),t.NdJ("chatMessage",function(d){return s.onMessageReceived(d)}),t.YNc(1,T,4,9,"div",1),t.qZA()),2&n&&(t.Q6J("minutes",s.minutes)("seconds",s.seconds)("started",s.started)("ended",s.ended),t.xp6(1),t.Q6J("ngForOf",s.messages))},dependencies:[r.mk,r.sg,C]})}return e})()}];let M=(()=>{class e{static#t=this.\u0275fac=function(n){return new(n||e)};static#e=this.\u0275mod=t.oAB({type:e});static#s=this.\u0275inj=t.cJS({imports:[u.Bz.forChild(_),u.Bz]})}return e})();var B=i(171),Z=i(617);let b=(()=>{class e{static#t=this.\u0275fac=function(n){return new(n||e)};static#e=this.\u0275mod=t.oAB({type:e});static#s=this.\u0275inj=t.cJS({imports:[r.ez,M,B.a,l.u5,Z.Ps]})}return e})()}}]);