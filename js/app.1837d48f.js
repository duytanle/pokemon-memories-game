(function(){var e={4291:function(e,t,n){"use strict";n.r(t)},1886:function(e,t,n){"use strict";n.r(t),n.d(t,{mixValue:function(){return s}});const s=e=>e.sort((()=>Math.random()-.5))},7800:function(e,t,n){"use strict";var s=n(9242),i=n(3396);function r(e,t,n,s,r,a){const c=(0,i.up)("MainScreen"),o=(0,i.up)("GameScreen"),p=(0,i.up)("ResultScreen"),g=(0,i.up)("FooterPage");return(0,i.wg)(),(0,i.iD)(i.HY,null,["default"===r.statusMatch?((0,i.wg)(),(0,i.j4)(c,{key:0,onOnMatch:t[0]||(t[0]=e=>a.playGame(e))})):(0,i.kq)("",!0),"match"===r.statusMatch?((0,i.wg)(),(0,i.j4)(o,{key:1,cardsContext:r.settings.cardsContext,onOnFinished:a.onGetResultScreen,onOnBackMainScreen:a.startAgain},null,8,["cardsContext","onOnFinished","onOnBackMainScreen"])):(0,i.kq)("",!0),"result"===r.statusMatch?((0,i.wg)(),(0,i.j4)(p,{key:2,timer:r.timer,onStartAgain:a.startAgain},null,8,["timer","onStartAgain"])):(0,i.kq)("",!0),(0,i.Wm)(g,{screen:r.statusMatch},null,8,["screen"])],64)}const a={class:"main-screen"},c=(0,i._)("h1",{class:"main-screen__title"},"POKE MEMORIES",-1),o=(0,i._)("h3",{class:"main-screen__subtitle"},"Select mode to start game",-1),p={class:"main-screen__type-play"};function g(e,t,n,s,r,g){const u=(0,i.up)("MSTypePlay");return(0,i.wg)(),(0,i.iD)("div",a,[c,o,(0,i._)("div",p,[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(r.typePlays,(e=>((0,i.wg)(),(0,i.j4)(u,{key:e.size,id:e.size,chooseType:e,onClick:t=>g.onMatch(e.size)},null,8,["id","chooseType","onClick"])))),128))])])}var u=n(7139);const m={class:"type-play"},f={class:"type-play__size"},d={class:"type-play__name"};function l(e,t,n,s,r,a){return(0,i.wg)(),(0,i.iD)("div",m,[(0,i._)("span",f,(0,u.zw)(n.chooseType.size)+" x "+(0,u.zw)(n.chooseType.size),1),(0,i._)("span",d,(0,u.zw)(n.chooseType.name),1)])}var h={name:"MSTypePlay",props:{chooseType:{size:Number,name:String}},data(){return{block:Math.pow(this.chooseType.size,2)}}},x=n(89);const b=(0,x.Z)(h,[["render",l]]);var y=b,v={name:"MainScreen",components:{MSTypePlay:y},data(){return{typePlays:[{size:4,name:"Easy"},{size:6,name:"Normal"},{size:8,name:"Hard"},{size:10,name:"Super Hard"}]}},methods:{onMatch(e){this.$emit("onMatch",e)}}};const _=(0,x.Z)(v,[["render",g]]);var k=_;const C={class:"game-screen"};function w(e,t,n,s,r,a){const c=(0,i.up)("Card");return(0,i.wg)(),(0,i.iD)("div",C,[(0,i._)("div",{class:"game-screen__inner",style:(0,u.j5)({width:.75*(920/r.size-16)*r.size+16*r.size+"px "})},[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(n.cardsContext,((e,n)=>((0,i.wg)(),(0,i.j4)(c,{key:n,ref_for:!0,ref:`card-${n}`,card:{index:n,value:e},imgBackFaceURL:`images/${e}.png`,onCheckSameCard:t[0]||(t[0]=e=>a.checkCard(e)),sameCard:r.sameCard,size:r.size},null,8,["card","imgBackFaceURL","sameCard","size"])))),128))],4),(0,i._)("button",{class:"btn-game-screen--back",onClick:t[1]||(t[1]=(...e)=>a.backMainScreen&&a.backMainScreen(...e))},"Back")])}const S=(0,i._)("div",{class:"card__face card--front"},[(0,i._)("div",{class:"card__content",style:{backgroundSize:"contain"}})],-1),M={class:"card__face card--back"};function z(e,t,s,r,a,c){return(0,i.wg)(),(0,i.iD)("div",{class:(0,u.C_)(["card",{isDisable:a.isDisable}]),style:(0,u.j5)({height:(a.windowHeight-60)/s.size-16+"px",width:.75*(920/s.size-16)+"px ",perspective:1.5*(920/s.size-16)+"px"})},[(0,i._)("div",{class:(0,u.C_)(["card__inner",{"is-flipped":a.isFlipped}]),onClick:t[0]||(t[0]=(...e)=>c.onToggle&&c.onToggle(...e))},[S,(0,i._)("div",M,[(0,i._)("div",{class:"card__content",style:(0,u.j5)({backgroundImage:`url(${n(7173)("./"+s.imgBackFaceURL)})\n            `})},null,4)])],2)],6)}var O={name:"GameCard",props:{imgBackFaceURL:{type:String,required:!0},card:{type:[String,Number,Array,Object]},size:{type:Number,required:!0}},data(){return{isFlipped:!1,isDisable:!1,windowHeight:window.innerHeight}},methods:{onToggle(){if(this.isDisable)return!1;this.isFlipped=!this.isFlipped,this.isFlipped&&this.$emit("checkSameCard",this.card)},onFlipBackCard(){this.isFlipped=!1},onDisable(){this.isDisable=!0}}};const T=(0,x.Z)(O,[["render",z]]);var D=T,j={name:"GameScreen",props:{cardsContext:{type:Array,default:function(){return[]}}},components:{Card:D},data(e){return{sameCard:[],size:Math.sqrt(e.cardsContext.length)}},methods:{checkCard(e){if(2===this.sameCard.length)return!1;if(this.sameCard.push(e),2===this.sameCard.length&&this.sameCard[0].value!==this.sameCard[1].value){const e=this.sameCard[0].index,t=this.sameCard[1].index;setTimeout((()=>{this.$refs[`card-${e}`][0].onFlipBackCard(),this.$refs[`card-${t}`][0].onFlipBackCard()}),800),this.sameCard=[]}else{if(2!==this.sameCard.length||this.sameCard[0].value!==this.sameCard[1].value)return!1;{this.$refs[`card-${this.sameCard[0].index}`][0].onDisable(),this.$refs[`card-${this.sameCard[1].index}`][0].onDisable(),this.sameCard=[];const e=document.querySelectorAll(".card.isDisable");e&&e.length===this.cardsContext.length-2&&setTimeout((()=>{this.$emit("onFinished")}),2e3)}}},backMainScreen(){this.$emit("onBackMainScreen")}}};const F=(0,x.Z)(j,[["render",w]]);var A=F;const $={class:"footer-content"},B=(0,i.Uk)("This game owned by Le Duy Tan in Vue 3 course for begginers - ");function P(e,t,n,s,r,a){return(0,i.wg)(),(0,i.iD)("div",{class:"footer",style:(0,u.j5)({color:a.defaultColor()})},[(0,i._)("p",$,[B,(0,i._)("a",{href:"https://github.com/duytanle",target:"__blank",class:"footer-link",style:(0,u.j5)({color:a.defaultLinkColor()})},"view here",4)])],4)}var R={name:"FooterPage",props:{screen:{type:String,required:!0}},methods:{defaultColor(){return"default"===this.screen?"white":"#212121"},defaultLinkColor(){return"default"===this.screen?"#212121":"red"}}};const q=(0,x.Z)(R,[["render",P]]);var G=q,H=n(1886);const L={class:"result-screen"},E=(0,i._)("h1",{class:"result__title"},"✨ Congratulations ✨",-1),N={class:"result__timer"};function U(e,t,n,s,r,a){return(0,i.wg)(),(0,i.iD)("div",L,[E,(0,i._)("p",N,(0,u.zw)(n.timer)+" seconds",1),(0,i._)("button",{class:"result__restart",onClick:t[0]||(t[0]=(...e)=>a.startAgain&&a.startAgain(...e))},"Restart")])}var V={name:"ResultScreen",props:{timer:{type:Number,required:!0}},methods:{startAgain(){this.$emit("startAgain")}}};const Z=(0,x.Z)(V,[["render",U]]);var K=Z,Y={name:"App",data(){return{statusMatch:"default",settings:{totalBlock:0,cardsContext:[],startedAt:null},timer:0}},methods:{playGame(e){this.settings.totalBlock=e*e;const t=Array.from({length:this.settings.totalBlock/2},((e,t)=>t+1)),n=[...t],s=[...t,...n];this.settings.cardsContext=(0,H.mixValue)((0,H.mixValue)((0,H.mixValue)(s))),this.settings.startedAt=(new Date).getTime(),this.statusMatch="match"},onGetResultScreen(){this.timer=Math.round(((new Date).getTime()-this.settings.startedAt)/1e3),this.statusMatch="result"},startAgain(){this.statusMatch="default"}},components:{MainScreen:k,GameScreen:A,FooterPage:G,ResultScreen:K}};const I=(0,x.Z)(Y,[["render",r]]);var W=I;(0,s.ri)(W).mount("#app")},7173:function(e,t,n){var s={"./images/1.png":3189,"./images/10.png":9017,"./images/11.png":8492,"./images/12.png":2583,"./images/13.png":6053,"./images/14.png":3169,"./images/15.png":6815,"./images/16.png":7427,"./images/17.png":9848,"./images/18.png":2573,"./images/19.png":6207,"./images/2.png":6870,"./images/20.png":9145,"./images/21.png":2803,"./images/22.png":3314,"./images/23.png":5333,"./images/24.png":4413,"./images/25.png":1995,"./images/26.png":3295,"./images/27.png":4274,"./images/28.png":8409,"./images/29.png":8024,"./images/3.png":4102,"./images/30.png":3881,"./images/31.png":7233,"./images/32.png":7394,"./images/33.png":2046,"./images/34.png":4577,"./images/35.png":7110,"./images/36.png":2961,"./images/37.png":1052,"./images/38.png":5558,"./images/39.png":5821,"./images/4.png":1681,"./images/40.png":9996,"./images/41.png":5360,"./images/42.png":2680,"./images/43.png":7441,"./images/44.png":3588,"./images/45.png":8540,"./images/46.png":272,"./images/47.png":5373,"./images/48.png":2053,"./images/49.png":710,"./images/5.png":4037,"./images/50.png":818,"./images/51.png":8431,"./images/52.png":6040,"./images/53.png":9449,"./images/54.png":5044,"./images/55.png":8700,"./images/56.png":8913,"./images/57.png":5624,"./images/58.png":8156,"./images/59.png":1365,"./images/6.png":6370,"./images/60.png":7956,"./images/61.png":7836,"./images/62.png":3086,"./images/63.png":3372,"./images/64.png":8936,"./images/7.png":2072,"./images/8.png":2477,"./images/9.png":3168,"./images/icon_back.png":2510,"./styles/global.css":4291,"./utils/arrayMixValue":1886,"./utils/arrayMixValue.js":1886};function i(e){var t=r(e);return n(t)}function r(e){if(!n.o(s,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return s[e]}i.keys=function(){return Object.keys(s)},i.resolve=r,e.exports=i,i.id=7173},3189:function(e,t,n){"use strict";e.exports=n.p+"img/1.806c75d2.png"},9017:function(e,t,n){"use strict";e.exports=n.p+"img/10.f490d00f.png"},8492:function(e,t,n){"use strict";e.exports=n.p+"img/11.825e016f.png"},2583:function(e,t,n){"use strict";e.exports=n.p+"img/12.90699d28.png"},6053:function(e,t,n){"use strict";e.exports=n.p+"img/13.09c0a967.png"},3169:function(e,t,n){"use strict";e.exports=n.p+"img/14.77d3aed8.png"},6815:function(e,t,n){"use strict";e.exports=n.p+"img/15.49c712d3.png"},7427:function(e,t,n){"use strict";e.exports=n.p+"img/16.b1fbc27f.png"},9848:function(e,t,n){"use strict";e.exports=n.p+"img/17.896e0f0c.png"},2573:function(e,t,n){"use strict";e.exports=n.p+"img/18.09ec4c05.png"},6207:function(e,t,n){"use strict";e.exports=n.p+"img/19.46420bb8.png"},6870:function(e,t,n){"use strict";e.exports=n.p+"img/2.80343073.png"},9145:function(e,t,n){"use strict";e.exports=n.p+"img/20.e6aed14d.png"},2803:function(e,t,n){"use strict";e.exports=n.p+"img/21.2f90a799.png"},3314:function(e,t,n){"use strict";e.exports=n.p+"img/22.4a681693.png"},5333:function(e,t,n){"use strict";e.exports=n.p+"img/23.bca375c3.png"},4413:function(e,t,n){"use strict";e.exports=n.p+"img/24.b1fa3600.png"},1995:function(e,t,n){"use strict";e.exports=n.p+"img/25.06f05528.png"},3295:function(e,t,n){"use strict";e.exports=n.p+"img/26.89e216c9.png"},4274:function(e,t,n){"use strict";e.exports=n.p+"img/27.16ffa57b.png"},8409:function(e,t,n){"use strict";e.exports=n.p+"img/28.4746478c.png"},8024:function(e,t,n){"use strict";e.exports=n.p+"img/29.0fd00c3a.png"},4102:function(e,t,n){"use strict";e.exports=n.p+"img/3.7cade441.png"},3881:function(e,t,n){"use strict";e.exports=n.p+"img/30.091482d8.png"},7233:function(e,t,n){"use strict";e.exports=n.p+"img/31.24879939.png"},7394:function(e,t,n){"use strict";e.exports=n.p+"img/32.3f428555.png"},2046:function(e,t,n){"use strict";e.exports=n.p+"img/33.5254b7d5.png"},4577:function(e,t,n){"use strict";e.exports=n.p+"img/34.8c938b59.png"},7110:function(e,t,n){"use strict";e.exports=n.p+"img/35.9ae0437b.png"},2961:function(e,t,n){"use strict";e.exports=n.p+"img/36.1ba7e9ee.png"},1052:function(e,t,n){"use strict";e.exports=n.p+"img/37.833caceb.png"},5558:function(e,t,n){"use strict";e.exports=n.p+"img/38.9d022c42.png"},5821:function(e,t,n){"use strict";e.exports=n.p+"img/39.46fd5ca6.png"},1681:function(e,t,n){"use strict";e.exports=n.p+"img/4.252064df.png"},9996:function(e,t,n){"use strict";e.exports=n.p+"img/40.f7af2814.png"},5360:function(e,t,n){"use strict";e.exports=n.p+"img/41.3716c591.png"},2680:function(e,t,n){"use strict";e.exports=n.p+"img/42.d9a1ba2f.png"},7441:function(e,t,n){"use strict";e.exports=n.p+"img/43.4d7931bb.png"},3588:function(e,t,n){"use strict";e.exports=n.p+"img/44.a4c0570b.png"},8540:function(e,t,n){"use strict";e.exports=n.p+"img/45.0afd5b8f.png"},272:function(e,t,n){"use strict";e.exports=n.p+"img/46.d76212be.png"},5373:function(e,t,n){"use strict";e.exports=n.p+"img/47.33f7ffec.png"},2053:function(e,t,n){"use strict";e.exports=n.p+"img/48.07acabf2.png"},710:function(e,t,n){"use strict";e.exports=n.p+"img/49.9a01db20.png"},4037:function(e,t,n){"use strict";e.exports=n.p+"img/5.ea56cbba.png"},818:function(e,t,n){"use strict";e.exports=n.p+"img/50.79443278.png"},8431:function(e,t,n){"use strict";e.exports=n.p+"img/51.405e3b43.png"},6040:function(e,t,n){"use strict";e.exports=n.p+"img/52.bc79d9f9.png"},9449:function(e,t,n){"use strict";e.exports=n.p+"img/53.72ba84b1.png"},5044:function(e,t,n){"use strict";e.exports=n.p+"img/54.1ded5ce2.png"},8700:function(e,t,n){"use strict";e.exports=n.p+"img/55.d2a1aa6f.png"},8913:function(e,t,n){"use strict";e.exports=n.p+"img/56.b06c4c5a.png"},5624:function(e,t,n){"use strict";e.exports=n.p+"img/57.9683b421.png"},8156:function(e,t,n){"use strict";e.exports=n.p+"img/58.21bfdd44.png"},1365:function(e,t,n){"use strict";e.exports=n.p+"img/59.125e7a51.png"},6370:function(e,t,n){"use strict";e.exports=n.p+"img/6.e31f2aef.png"},7956:function(e,t,n){"use strict";e.exports=n.p+"img/60.c9e0d4c3.png"},7836:function(e,t,n){"use strict";e.exports=n.p+"img/61.9fd1aaf6.png"},3086:function(e,t,n){"use strict";e.exports=n.p+"img/62.ba2d1005.png"},3372:function(e,t,n){"use strict";e.exports=n.p+"img/63.87421c37.png"},8936:function(e,t,n){"use strict";e.exports=n.p+"img/64.34008956.png"},2072:function(e,t,n){"use strict";e.exports=n.p+"img/7.942b744a.png"},2477:function(e,t,n){"use strict";e.exports=n.p+"img/8.83932fbe.png"},3168:function(e,t,n){"use strict";e.exports=n.p+"img/9.18b7e31f.png"},2510:function(e,t,n){"use strict";e.exports=n.p+"img/icon_back.fb170b05.png"}},t={};function n(s){var i=t[s];if(void 0!==i)return i.exports;var r=t[s]={exports:{}};return e[s](r,r.exports,n),r.exports}n.m=e,function(){var e=[];n.O=function(t,s,i,r){if(!s){var a=1/0;for(g=0;g<e.length;g++){s=e[g][0],i=e[g][1],r=e[g][2];for(var c=!0,o=0;o<s.length;o++)(!1&r||a>=r)&&Object.keys(n.O).every((function(e){return n.O[e](s[o])}))?s.splice(o--,1):(c=!1,r<a&&(a=r));if(c){e.splice(g--,1);var p=i();void 0!==p&&(t=p)}}return t}r=r||0;for(var g=e.length;g>0&&e[g-1][2]>r;g--)e[g]=e[g-1];e[g]=[s,i,r]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var s in t)n.o(t,s)&&!n.o(e,s)&&Object.defineProperty(e,s,{enumerable:!0,get:t[s]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){n.p="/"}(),function(){var e={143:0};n.O.j=function(t){return 0===e[t]};var t=function(t,s){var i,r,a=s[0],c=s[1],o=s[2],p=0;if(a.some((function(t){return 0!==e[t]}))){for(i in c)n.o(c,i)&&(n.m[i]=c[i]);if(o)var g=o(n)}for(t&&t(s);p<a.length;p++)r=a[p],n.o(e,r)&&e[r]&&e[r][0](),e[r]=0;return n.O(g)},s=self["webpackChunkvue_app"]=self["webpackChunkvue_app"]||[];s.forEach(t.bind(null,0)),s.push=t.bind(null,s.push.bind(s))}();var s=n.O(void 0,[998],(function(){return n(7800)}));s=n.O(s)})();
//# sourceMappingURL=app.1837d48f.js.map