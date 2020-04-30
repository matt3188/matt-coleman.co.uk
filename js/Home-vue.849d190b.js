(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["Home-vue"],{"10b3":function(t,e,n){
/*!
 * 
 *   typed.js - A JavaScript Typing Animation Library
 *   Author: Matt Boldt <me@mattboldt.com>
 *   Version: v2.0.11
 *   Url: https://github.com/mattboldt/typed.js
 *   License(s): MIT
 * 
 */
(function(e,n){t.exports=n()})(0,(function(){return function(t){var e={};function n(s){if(e[s])return e[s].exports;var r=e[s]={exports:{},id:s,loaded:!1};return t[s].call(r.exports,r,r.exports,n),r.loaded=!0,r.exports}return n.m=t,n.c=e,n.p="",n(0)}([function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=function(){function t(t,e){for(var n=0;n<e.length;n++){var s=e[n];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(t,s.key,s)}}return function(e,n,s){return n&&t(e.prototype,n),s&&t(e,s),e}}();function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}var i=n(1),o=n(3),a=function(){function t(e,n){r(this,t),i.initializer.load(this,n,e),this.begin()}return s(t,[{key:"toggle",value:function(){this.pause.status?this.start():this.stop()}},{key:"stop",value:function(){this.typingComplete||this.pause.status||(this.toggleBlinking(!0),this.pause.status=!0,this.options.onStop(this.arrayPos,this))}},{key:"start",value:function(){this.typingComplete||this.pause.status&&(this.pause.status=!1,this.pause.typewrite?this.typewrite(this.pause.curString,this.pause.curStrPos):this.backspace(this.pause.curString,this.pause.curStrPos),this.options.onStart(this.arrayPos,this))}},{key:"destroy",value:function(){this.reset(!1),this.options.onDestroy(this)}},{key:"reset",value:function(){var t=arguments.length<=0||void 0===arguments[0]||arguments[0];clearInterval(this.timeout),this.replaceText(""),this.cursor&&this.cursor.parentNode&&(this.cursor.parentNode.removeChild(this.cursor),this.cursor=null),this.strPos=0,this.arrayPos=0,this.curLoop=0,t&&(this.insertCursor(),this.options.onReset(this),this.begin())}},{key:"begin",value:function(){var t=this;this.options.onBegin(this),this.typingComplete=!1,this.shuffleStringsIfNeeded(this),this.insertCursor(),this.bindInputFocusEvents&&this.bindFocusEvents(),this.timeout=setTimeout((function(){t.currentElContent&&0!==t.currentElContent.length?t.backspace(t.currentElContent,t.currentElContent.length):t.typewrite(t.strings[t.sequence[t.arrayPos]],t.strPos)}),this.startDelay)}},{key:"typewrite",value:function(t,e){var n=this;this.fadeOut&&this.el.classList.contains(this.fadeOutClass)&&(this.el.classList.remove(this.fadeOutClass),this.cursor&&this.cursor.classList.remove(this.fadeOutClass));var s=this.humanizer(this.typeSpeed),r=1;!0!==this.pause.status?this.timeout=setTimeout((function(){e=o.htmlParser.typeHtmlChars(t,e,n);var s=0,i=t.substr(e);if("^"===i.charAt(0)&&/^\^\d+/.test(i)){var a=1;i=/\d+/.exec(i)[0],a+=i.length,s=parseInt(i),n.temporaryPause=!0,n.options.onTypingPaused(n.arrayPos,n),t=t.substring(0,e)+t.substring(e+a),n.toggleBlinking(!0)}if("`"===i.charAt(0)){while("`"!==t.substr(e+r).charAt(0))if(r++,e+r>t.length)break;var u=t.substring(0,e),l=t.substring(u.length+1,e+r),c=t.substring(e+r+1);t=u+l+c,r--}n.timeout=setTimeout((function(){n.toggleBlinking(!1),e>=t.length?n.doneTyping(t,e):n.keepTyping(t,e,r),n.temporaryPause&&(n.temporaryPause=!1,n.options.onTypingResumed(n.arrayPos,n))}),s)}),s):this.setPauseStatus(t,e,!0)}},{key:"keepTyping",value:function(t,e,n){0===e&&(this.toggleBlinking(!1),this.options.preStringTyped(this.arrayPos,this)),e+=n;var s=t.substr(0,e);this.replaceText(s),this.typewrite(t,e)}},{key:"doneTyping",value:function(t,e){var n=this;this.options.onStringTyped(this.arrayPos,this),this.toggleBlinking(!0),this.arrayPos===this.strings.length-1&&(this.complete(),!1===this.loop||this.curLoop===this.loopCount)||(this.timeout=setTimeout((function(){n.backspace(t,e)}),this.backDelay))}},{key:"backspace",value:function(t,e){var n=this;if(!0!==this.pause.status){if(this.fadeOut)return this.initFadeOut();this.toggleBlinking(!1);var s=this.humanizer(this.backSpeed);this.timeout=setTimeout((function(){e=o.htmlParser.backSpaceHtmlChars(t,e,n);var s=t.substr(0,e);if(n.replaceText(s),n.smartBackspace){var r=n.strings[n.arrayPos+1];r&&s===r.substr(0,e)?n.stopNum=e:n.stopNum=0}e>n.stopNum?(e--,n.backspace(t,e)):e<=n.stopNum&&(n.arrayPos++,n.arrayPos===n.strings.length?(n.arrayPos=0,n.options.onLastStringBackspaced(),n.shuffleStringsIfNeeded(),n.begin()):n.typewrite(n.strings[n.sequence[n.arrayPos]],e))}),s)}else this.setPauseStatus(t,e,!0)}},{key:"complete",value:function(){this.options.onComplete(this),this.loop?this.curLoop++:this.typingComplete=!0}},{key:"setPauseStatus",value:function(t,e,n){this.pause.typewrite=n,this.pause.curString=t,this.pause.curStrPos=e}},{key:"toggleBlinking",value:function(t){this.cursor&&(this.pause.status||this.cursorBlinking!==t&&(this.cursorBlinking=t,t?this.cursor.classList.add("typed-cursor--blink"):this.cursor.classList.remove("typed-cursor--blink")))}},{key:"humanizer",value:function(t){return Math.round(Math.random()*t/2)+t}},{key:"shuffleStringsIfNeeded",value:function(){this.shuffle&&(this.sequence=this.sequence.sort((function(){return Math.random()-.5})))}},{key:"initFadeOut",value:function(){var t=this;return this.el.className+=" "+this.fadeOutClass,this.cursor&&(this.cursor.className+=" "+this.fadeOutClass),setTimeout((function(){t.arrayPos++,t.replaceText(""),t.strings.length>t.arrayPos?t.typewrite(t.strings[t.sequence[t.arrayPos]],0):(t.typewrite(t.strings[0],0),t.arrayPos=0)}),this.fadeOutDelay)}},{key:"replaceText",value:function(t){this.attr?this.el.setAttribute(this.attr,t):this.isInput?this.el.value=t:"html"===this.contentType?this.el.innerHTML=t:this.el.textContent=t}},{key:"bindFocusEvents",value:function(){var t=this;this.isInput&&(this.el.addEventListener("focus",(function(e){t.stop()})),this.el.addEventListener("blur",(function(e){t.el.value&&0!==t.el.value.length||t.start()})))}},{key:"insertCursor",value:function(){this.showCursor&&(this.cursor||(this.cursor=document.createElement("span"),this.cursor.className="typed-cursor",this.cursor.innerHTML=this.cursorChar,this.el.parentNode&&this.el.parentNode.insertBefore(this.cursor,this.el.nextSibling)))}}]),t}();e["default"]=a,t.exports=e["default"]},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&(t[s]=n[s])}return t},r=function(){function t(t,e){for(var n=0;n<e.length;n++){var s=e[n];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(t,s.key,s)}}return function(e,n,s){return n&&t(e.prototype,n),s&&t(e,s),e}}();function i(t){return t&&t.__esModule?t:{default:t}}function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}var a=n(2),u=i(a),l=function(){function t(){o(this,t)}return r(t,[{key:"load",value:function(t,e,n){if(t.el="string"===typeof n?document.querySelector(n):n,t.options=s({},u["default"],e),t.isInput="input"===t.el.tagName.toLowerCase(),t.attr=t.options.attr,t.bindInputFocusEvents=t.options.bindInputFocusEvents,t.showCursor=!t.isInput&&t.options.showCursor,t.cursorChar=t.options.cursorChar,t.cursorBlinking=!0,t.elContent=t.attr?t.el.getAttribute(t.attr):t.el.textContent,t.contentType=t.options.contentType,t.typeSpeed=t.options.typeSpeed,t.startDelay=t.options.startDelay,t.backSpeed=t.options.backSpeed,t.smartBackspace=t.options.smartBackspace,t.backDelay=t.options.backDelay,t.fadeOut=t.options.fadeOut,t.fadeOutClass=t.options.fadeOutClass,t.fadeOutDelay=t.options.fadeOutDelay,t.isPaused=!1,t.strings=t.options.strings.map((function(t){return t.trim()})),"string"===typeof t.options.stringsElement?t.stringsElement=document.querySelector(t.options.stringsElement):t.stringsElement=t.options.stringsElement,t.stringsElement){t.strings=[],t.stringsElement.style.display="none";var r=Array.prototype.slice.apply(t.stringsElement.children),i=r.length;if(i)for(var o=0;o<i;o+=1){var a=r[o];t.strings.push(a.innerHTML.trim())}}for(var o in t.strPos=0,t.arrayPos=0,t.stopNum=0,t.loop=t.options.loop,t.loopCount=t.options.loopCount,t.curLoop=0,t.shuffle=t.options.shuffle,t.sequence=[],t.pause={status:!1,typewrite:!0,curString:"",curStrPos:0},t.typingComplete=!1,t.strings)t.sequence[o]=o;t.currentElContent=this.getCurrentElContent(t),t.autoInsertCss=t.options.autoInsertCss,this.appendAnimationCss(t)}},{key:"getCurrentElContent",value:function(t){var e="";return e=t.attr?t.el.getAttribute(t.attr):t.isInput?t.el.value:"html"===t.contentType?t.el.innerHTML:t.el.textContent,e}},{key:"appendAnimationCss",value:function(t){var e="data-typed-js-css";if(t.autoInsertCss&&(t.showCursor||t.fadeOut)&&!document.querySelector("["+e+"]")){var n=document.createElement("style");n.type="text/css",n.setAttribute(e,!0);var s="";t.showCursor&&(s+="\n        .typed-cursor{\n          opacity: 1;\n        }\n        .typed-cursor.typed-cursor--blink{\n          animation: typedjsBlink 0.7s infinite;\n          -webkit-animation: typedjsBlink 0.7s infinite;\n                  animation: typedjsBlink 0.7s infinite;\n        }\n        @keyframes typedjsBlink{\n          50% { opacity: 0.0; }\n        }\n        @-webkit-keyframes typedjsBlink{\n          0% { opacity: 1; }\n          50% { opacity: 0.0; }\n          100% { opacity: 1; }\n        }\n      "),t.fadeOut&&(s+="\n        .typed-fade-out{\n          opacity: 0;\n          transition: opacity .25s;\n        }\n        .typed-cursor.typed-cursor--blink.typed-fade-out{\n          -webkit-animation: 0;\n          animation: 0;\n        }\n      "),0!==n.length&&(n.innerHTML=s,document.body.appendChild(n))}}}]),t}();e["default"]=l;var c=new l;e.initializer=c},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n={strings:["These are the default values...","You know what you should do?","Use your own!","Have a great day!"],stringsElement:null,typeSpeed:0,startDelay:0,backSpeed:0,smartBackspace:!0,shuffle:!1,backDelay:700,fadeOut:!1,fadeOutClass:"typed-fade-out",fadeOutDelay:500,loop:!1,loopCount:1/0,showCursor:!0,cursorChar:"|",autoInsertCss:!0,attr:null,bindInputFocusEvents:!1,contentType:"html",onBegin:function(t){},onComplete:function(t){},preStringTyped:function(t,e){},onStringTyped:function(t,e){},onLastStringBackspaced:function(t){},onTypingPaused:function(t,e){},onTypingResumed:function(t,e){},onReset:function(t){},onStop:function(t,e){},onStart:function(t,e){},onDestroy:function(t){}};e["default"]=n,t.exports=e["default"]},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=function(){function t(t,e){for(var n=0;n<e.length;n++){var s=e[n];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(t,s.key,s)}}return function(e,n,s){return n&&t(e.prototype,n),s&&t(e,s),e}}();function s(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}var r=function(){function t(){s(this,t)}return n(t,[{key:"typeHtmlChars",value:function(t,e,n){if("html"!==n.contentType)return e;var s=t.substr(e).charAt(0);if("<"===s||"&"===s){var r="";r="<"===s?">":";";while(t.substr(e+1).charAt(0)!==r)if(e++,e+1>t.length)break;e++}return e}},{key:"backSpaceHtmlChars",value:function(t,e,n){if("html"!==n.contentType)return e;var s=t.substr(e).charAt(0);if(">"===s||";"===s){var r="";r=">"===s?"<":"&";while(t.substr(e-1).charAt(0)!==r)if(e--,e<0)break;e--}return e}}]),t}();e["default"]=r;var i=new r;e.htmlParser=i}])}))},"2a73":function(t,e,n){"use strict";var s=n("af63"),r=n.n(s);r.a},"35f2":function(t,e,n){"use strict";var s=n("62ed"),r=n.n(s);r.a},"3b48":function(t,e,n){"use strict";var s=n("4d3e"),r=n.n(s);r.a},"4d3e":function(t,e,n){t.exports={coralRed:"#ff4c60",aubergine:"#5e5c7f",green:"#42b983",purple:"#6c6ce5",yellow:"#ffd15c",white:"#fff",black:"#000","light-grey":"#f1f1f1","blue-grey":"#f9f9ff",github:"#000",linkedin:"#0077b5",strava:"#fc5200"}},"62ed":function(t,e,n){t.exports={coralRed:"#ff4c60",aubergine:"#5e5c7f",green:"#42b983",purple:"#6c6ce5",yellow:"#ffd15c",white:"#fff",black:"#000","light-grey":"#f1f1f1","blue-grey":"#f9f9ff",github:"#000",linkedin:"#0077b5",strava:"#fc5200"}},"6d4e":function(t,e,n){},"7a1a":function(t,e,n){"use strict";var s=n("6d4e"),r=n.n(s);r.a},af63:function(t,e,n){t.exports={coralRed:"#ff4c60",aubergine:"#5e5c7f",green:"#42b983",purple:"#6c6ce5",yellow:"#ffd15c",white:"#fff",black:"#000","light-grey":"#f1f1f1","blue-grey":"#f9f9ff",github:"#000",linkedin:"#0077b5",strava:"#fc5200"}},bb51:function(t,e,n){"use strict";n.r(e);var s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"home"},[n("Hero",{attrs:{name:t.name,btnLabel:t.btnLabel,typedList:t.whatAmI}})],1)},r=[],i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"hero-wrapper"},[n("Avatar",{attrs:{fill:"#ffd25f",width:"200px"}}),n("h2",{staticClass:"name"},[t._v(t._s(t.name))]),n("VueTypedJs",{attrs:{loop:!0,startDelay:1e3,backSpeed:50,backDelay:2e3,strings:t.typedList}},[n("p",[n("span",{staticClass:"typing"})])]),n("SocialIconList"),n("Button",{attrs:{btnClass:"btn__standard",onClick:t.hireMe}},[t._v(t._s(t.btnLabel))])],1)},o=[],a=n("df3a"),u=n("2a7d"),l=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ul",{staticClass:"list list--horizontal"},t._l(t.iconList,(function(e){return n("li",{key:e.name},[n("a",{attrs:{href:e.url,target:"_blank"}},[n("svg-icon",{attrs:{iconType:e.name,width:t.iconSize,height:t.iconSize,iconColor:t.iconColor,hoverColor:e.hoverColor}})],1)])})),0)},c=[],p=n("fb51"),h=n.n(p),f=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{style:t.iconStyle},[n("svg",{staticClass:"svg-icon",attrs:{preserveAspectRatio:"xMidYMid meet",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:t.iconColor}},[n("path",{attrs:{d:t.path}})])])},d=[],y=(n("a9e3"),{github:"M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12",linkedin:"M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z",strava:"M15.387 17.944l-2.089-4.116h-3.065L15.387 24l5.15-10.172h-3.066m-7.008-5.599l2.836 5.598h4.172L10.463 0l-7 13.828h4.169"}),g=y,m={name:"SvgIcon",props:{iconType:{type:String},iconColor:{type:String,default:"currentColor"},hoverColor:{type:String,default:"currentColor"},width:{type:[Number,String],default:18},height:{type:[Number,String],default:18}},computed:{iconStyle:function(){var t=this.width,e=this.height;return{width:"".concat(t,"px"),height:"".concat(e,"px"),"--color-hover":this.hoverColor}},path:function(){return g[this.iconType]}}},v=m,b=(n("35f2"),n("2877")),C=Object(b["a"])(v,f,d,!1,null,null,null),k=C.exports,w="https://github.com/matt3188",S="https://www.linkedin.com/in/matt-coleman-a178783a",T="https://www.strava.com/athletes/29840146",P={data:function(){return{iconList:[{name:"github",url:w,hoverColor:h.a.github},{name:"linkedin",url:S,hoverColor:h.a.linkedin},{name:"strava",url:T,hoverColor:h.a.strava}]}},components:{SvgIcon:k},computed:{iconColor:function(){return h.a.aubergine},iconSize:function(){return"24"}}},E=P,O=(n("7a1a"),Object(b["a"])(E,l,c,!1,null,"5562a87c",null)),B=O.exports,L=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{ref:"typedElement",staticClass:"typed-element"},[t._t("default")],2)},x=[],q=(n("b0c0"),n("10b3")),I=n.n(q);const _={strings:{type:Array,required:!1,default:function(){return["Hello World!"]}},stringsElement:{type:String,required:!1,default:null},typeSpeed:{type:Number,required:!1,default:50},startDelay:{type:Number,required:!1,default:0},backSpeed:{type:Number,required:!1,default:0},smartBackspace:{type:Boolean,required:!1,default:!0},shuffle:{type:Boolean,required:!1,default:!1},backDelay:{type:Number,required:!1,default:700},fadeOut:{type:Boolean,required:!1,default:!1},fadeOutClass:{type:String,required:!1,default:"typed-fade-out"},fadeOutDelay:{type:Number,required:!1,default:500},loop:{type:Boolean,required:!1,default:!1},loopCount:{type:Number,required:!1,default:1/0},showCursor:{type:Boolean,required:!1,default:!0},cursorChar:{type:String,required:!1,default:"|"},autoInsertCss:{type:Boolean,required:!1,default:!0},attr:{type:String,required:!1,default:null},bindInputFocusEvents:{type:Boolean,required:!1,default:!1},contentType:{type:String,required:!1,default:"html"}},N=(t,e)=>(e.onComplete=()=>{t.$emit("onComplete")},e.preStringTyped=()=>{t.$emit("preStringTyped")},e.onStringTyped=()=>{t.$emit("onStringTyped")},e.onLastStringBackspaced=()=>{t.$emit("onLastStringBackspaced")},e.onTypingPaused=()=>{t.$emit("onTypingPaused")},e.onTypingResumed=()=>{t.$emit("onTypingResumed")},e.onReset=()=>{t.$emit("onReset")},e.onStop=()=>{t.$emit("onStop")},e.onStart=()=>{t.$emit("onStart")},e.onDestroy=()=>{t.$emit("onDestroy")},e);var j={name:"vue-typed-js",props:_,data:function(){return{typedObj:null}},methods:{throwError:function(t){throw new TypeError(t)},initTypedJS:function(){var t=this.$refs.typedElement.querySelector(".typing");if(this.$slots.default.length>1)this.throwError("Just one child element allowed inside <".concat(this.$options.name,"> component."));else if(1===this.$slots.default.length){var e=this.$props;e=N(this,e),this.typedObj=new I.a(t,e)}}},mounted:function(){this.initTypedJS()}},M=j,D=(n("3b48"),Object(b["a"])(M,L,x,!1,null,null,null)),A=D.exports,$={name:"Hero",props:{name:{type:String},btnLabel:{type:String},typedList:{type:Array}},components:{Avatar:a["a"],Button:u["a"],SocialIconList:B,VueTypedJs:A},methods:{hireMe:function(){this.$router.push({name:"Contact"})}}},H=$,z=(n("2a73"),Object(b["a"])(H,i,o,!1,null,null,null)),R=z.exports,F={name:"Home",components:{Hero:R},data:function(){return{name:"Matt Coleman",btnLabel:"Hire me",whatAmI:["I'm a Front-end Developer","I'm a Cyling enthusiast","I'm a Coffee lover","I'm a collector of LEGO"]}}},J=F,V=Object(b["a"])(J,s,r,!1,null,null,null);e["default"]=V.exports}}]);
//# sourceMappingURL=Home-vue.849d190b.js.map