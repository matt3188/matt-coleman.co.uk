(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{28:function(e,t,a){e.exports=a(44)},33:function(e,t,a){},44:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),c=a(16),o=a.n(c),r=(a(33),a(6)),i=a(7),s=a(9),m=a(8),h=a(10),u=a(14),d=a(22),v=a.n(d),f=function(e){function t(){var e,a;Object(r.a)(this,t);for(var n=arguments.length,l=new Array(n),c=0;c<n;c++)l[c]=arguments[c];return(a=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(l)))).state={navOpen:!1},a.clickHandler=function(){a.setState({navOpen:!a.state.navOpen})},a}return Object(h.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("button",{className:"nav__mobile-menu-toggle ".concat(this.state.navOpen?"is-active":""),onClick:this.clickHandler}),l.a.createElement("nav",{className:"nav ".concat(this.state.navOpen?"is-active":"")},l.a.createElement("ul",{className:"horizontal-list"},l.a.createElement("li",null,l.a.createElement(u.b,{onClick:this.clickHandler,activeClassName:"is-active",exact:!0,to:"/"},"Home")),l.a.createElement("li",null,l.a.createElement(u.b,{onClick:this.clickHandler,activeClassName:"is-active",to:"/my-cv"},"My CV")))))}}]),t}(l.a.Component),p=function(){return l.a.createElement("header",{className:"header text-center"},l.a.createElement(f,null),l.a.createElement("h1",{className:"heading"},"Matt Coleman"),l.a.createElement("p",null,"Front end Developer"))},g=a(11),w=a(46),b=a(47),E=function(e){return l.a.createElement("svg",{className:"icon",role:"img",viewBox:"0 0 512 512",xmlns:"http://www.w3.org/2000/svg",width:e.width,height:e.height,"aria-hidden":"true",focusable:"false"},l.a.createElement("title",null,"CodePen icon"),l.a.createElement("path",{fill:e.fill,d:"M502.285 159.704l-234-156c-7.987-4.915-16.511-4.96-24.571 0l-234 156C3.714 163.703 0 170.847 0 177.989v155.999c0 7.143 3.714 14.286 9.715 18.286l234 156.022c7.987 4.915 16.511 4.96 24.571 0l234-156.022c6-3.999 9.715-11.143 9.715-18.286V177.989c-.001-7.142-3.715-14.286-9.716-18.285zM278 63.131l172.286 114.858-76.857 51.429L278 165.703V63.131zm-44 0v102.572l-95.429 63.715-76.857-51.429L234 63.131zM44 219.132l55.143 36.857L44 292.846v-73.714zm190 229.715L61.714 333.989l76.857-51.429L234 346.275v102.572zm22-140.858l-77.715-52 77.715-52 77.715 52-77.715 52zm22 140.858V346.275l95.429-63.715 76.857 51.429L278 448.847zm190-156.001l-55.143-36.857L468 219.132v73.714z"}))},k=function(e){return l.a.createElement("svg",{className:"icon",role:"img",viewBox:"0 0 512 512",xmlns:"http://www.w3.org/2000/svg",width:e.width,height:e.height,"aria-hidden":"true",focusable:"false"},l.a.createElement("title",null,"Email icon"),l.a.createElement("path",{fill:e.fill,d:"M464 64H48C21.49 64 0 85.49 0 112v288c0 26.51 21.49 48 48 48h416c26.51 0 48-21.49 48-48V112c0-26.51-21.49-48-48-48zm0 48v40.805c-22.422 18.259-58.168 46.651-134.587 106.49-16.841 13.247-50.201 45.072-73.413 44.701-23.208.375-56.579-31.459-73.413-44.701C106.18 199.465 70.425 171.067 48 152.805V112h416zM48 400V214.398c22.914 18.251 55.409 43.862 104.938 82.646 21.857 17.205 60.134 55.186 103.062 54.955 42.717.231 80.509-37.199 103.053-54.947 49.528-38.783 82.032-64.401 104.947-82.653V400H48z"}))},N=function(e){return l.a.createElement("svg",{className:"icon",role:"img",viewBox:"0 0 496 512",xmlns:"http://www.w3.org/2000/svg",width:e.width,height:e.height,focusable:"false","aria-hidden":"true"},l.a.createElement("title",null,"GitHub icon"),l.a.createElement("path",{fill:e.fill,d:"M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"}),"/>")},y=function(e){return l.a.createElement("svg",{className:"icon icon-gear ".concat(e.class),role:"img",viewBox:"0 0 14 16",xmlns:"http://www.w3.org/2000/svg",width:e.width,height:e.height,"aria-hidden":"true",focusable:"false"},l.a.createElement("title",null,"Gear icon"),l.a.createElement("path",{fill:e.fill,d:"M14 8.77v-1.6l-1.94-.64-.45-1.09.88-1.84-1.13-1.13-1.81.91-1.09-.45-.69-1.92h-1.6l-.63 1.94-1.11.45-1.84-.88-1.13 1.13.91 1.81-.45 1.09L0 7.23v1.59l1.94.64.45 1.09-.88 1.84 1.13 1.13 1.81-.91 1.09.45.69 1.92h1.59l.63-1.94 1.11-.45 1.84.88 1.13-1.13-.92-1.81.47-1.09L14 8.75v.02zM7 11c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3z"}))},C=function(e){return l.a.createElement("svg",{className:"icon",role:"img",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",width:e.width,height:e.height,"aria-hidden":"true",focusable:"false"},l.a.createElement("title",null,"LinkedIn icon"),l.a.createElement("path",{fill:e.fill,d:"M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"}))},x=function(){return l.a.createElement("ul",{className:"list horizontal-list contact-list"},l.a.createElement("li",null,l.a.createElement("a",{className:"btn btn--has-border",href:"https://github.com/matt3188",target:"_blank",rel:"noopener noreferrer"},l.a.createElement(N,{fill:"#fff",width:50,height:50}))),l.a.createElement("li",null,l.a.createElement("a",{className:"btn btn--has-border",href:"http://codepen.io/mattcoleman",target:"_blank",rel:"noopener noreferrer"},l.a.createElement(E,{fill:"#fff",width:50,height:50}))),l.a.createElement("li",null,l.a.createElement("a",{className:"btn btn--has-border",href:"https://www.linkedin.com/in/matt-coleman-a178783a",target:"_blank",rel:"noopener noreferrer"},l.a.createElement(C,{fill:"#fff",width:45,height:45}))),l.a.createElement("li",null,l.a.createElement("a",{className:"btn btn--has-border",href:"mailto:hello@matt-coleman.co.uk"},l.a.createElement(k,{fill:"#fff",width:50,height:50}))))},O=function(){return l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-md-12"},l.a.createElement(x,null)))},z=function(e){function t(){var e,a;Object(r.a)(this,t);for(var n=arguments.length,l=new Array(n),c=0;c<n;c++)l[c]=arguments[c];return(a=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(l)))).state={percentage:""},a}return Object(h.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this;setTimeout(function(){e.setState({percentage:"".concat(e.props.percentage,"%")})},this.props.delay)}},{key:"render",value:function(){return l.a.createElement("div",{className:"skill"},l.a.createElement("span",{className:"skill__label"},this.props.label),l.a.createElement("div",{className:"skill__bar",style:{width:this.state.percentage}}),l.a.createElement("div",{className:"skill__percentage"},this.props.percentage,"%"))}}]),t}(l.a.Component),S=[{label:"HTML/CSS",percentage:90},{label:"Javascript",percentage:75}],j=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"col-md-8 offset-md-2"},l.a.createElement("p",{className:"intro-text"},"I am a strong and passionate front end developer with good communication skills and a keen eye for detail. I work well in a team just as well as I do on my own."),l.a.createElement("p",null,"I have a background in design, which I believe gives me an edge when it comes to creating a fluent and visually pleasing experience, it also allows me to bridge the gap between design and development within a team. I like to create modular and portable code with a DRY approach and I also try and future proof my code as best I can."),l.a.createElement("p",null,"My strengths include but are not limited too, HTML, CSS/SASS, Javascript, Webpack. I also have experience with React JS, Jira, Agile methodology, Git, Node.js, RESTful APIs, SMACCS, Wordpress, Django, Sitecore and Drupal."),l.a.createElement("div",{className:"skill-container"},S.map(function(e,t){return l.a.createElement(z,{key:e.label,label:e.label,percentage:e.percentage,delay:250*t})}))))},M=function(){return l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col text-center"},l.a.createElement("h1",{className:"heading"},"404"),l.a.createElement("p",{className:"intro-text"},"Oh no! Page not found.")))},L=Object(g.e)(function(e){var t=e.location;return l.a.createElement("div",{className:"container"},l.a.createElement(w.a,{className:"transition-group"},l.a.createElement(b.a,{key:t.key,timeout:{enter:300,exit:300},classNames:"fade"},l.a.createElement("section",{className:"route-section"},l.a.createElement(g.c,{location:t},l.a.createElement(g.a,{exact:!0,path:"/",component:O}),l.a.createElement(g.a,{exact:!0,path:"/my-cv",component:j}),l.a.createElement(g.a,{component:M}))))))}),H=function(e){function t(){var e,a;Object(r.a)(this,t);for(var n=arguments.length,l=new Array(n),c=0;c<n;c++)l[c]=arguments[c];return(a=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(l)))).state={open:!1,colourPicked:"",colours:[{id:1,hex:"#0e83cd"},{id:2,hex:"#f06060"},{id:3,hex:"#fcd04b"},{id:4,hex:"#2ecc71"},{id:5,hex:"#9e54bd"}]},a.clickHandler=function(){a.state.open?a.closeNav():a.openNav()},a.handleColorChange=function(e){var t=e.target.style.backgroundColor;a.setState({colourPicked:t}),a.props.onSelectColor(t),localStorage.setItem("colour",JSON.stringify(t)),a.closeNav()},a.openNav=function(){a.setState({open:!0})},a.closeNav=function(){a.setState({open:!1})},a}return Object(h.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){this.prevColour=JSON.parse(localStorage.getItem("colour"))||this.state.colours[0].hex,this.setState({colourPicked:this.prevColour}),document.body.style.backgroundColor=this.prevColour}},{key:"render",value:function(){var e=this;return this.colourList=this.state.colours.map(function(t){return l.a.createElement("li",{key:t.hex,className:"color"},l.a.createElement("button",{className:"color-".concat(t.id),style:{backgroundColor:t.hex},onClick:e.handleColorChange}))}),l.a.createElement(l.a.Fragment,null,l.a.createElement("button",{className:"btn btn-menu-trigger",onClick:this.clickHandler},l.a.createElement(y,{fill:this.state.colourPicked,width:40,height:40})),l.a.createElement("div",{className:"wrapper ".concat(this.state.open?"is-active":"")},l.a.createElement("ul",{className:"color-list"},this.colourList)),l.a.createElement("div",{onClick:this.closeNav,className:"overlay ".concat(this.state.open?"is-active":"")}))}}]),t}(n.Component),I=function(e){function t(){var e,a;Object(r.a)(this,t);for(var n=arguments.length,l=new Array(n),c=0;c<n;c++)l[c]=arguments[c];return(a=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(l)))).handleColorChange=function(e){document.body.style.backgroundColor="",document.body.style.backgroundColor=e},a}return Object(h.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return l.a.createElement(u.a,null,l.a.createElement(v.a,{className:"particles",params:{particles:{number:{value:50},size:{value:3}},interactivity:{events:{onhover:{enable:!0,mode:"repulse"}}}},style:{position:"fixed",width:"100vw",height:"100vh",left:0,top:0}}),l.a.createElement(p,null),l.a.createElement(L,null),l.a.createElement(H,{onSelectColor:this.handleColorChange}))}}]),t}(n.Component),A=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function V(e,t){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var a=e.installing;null!=a&&(a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See http://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}}).catch(function(e){console.error("Error during service worker registration:",e)})}o.a.render(l.a.createElement(I,null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",function(){var t="".concat("","/service-worker.js");A?(function(e,t){fetch(e).then(function(a){var n=a.headers.get("content-type");404===a.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):V(e,t)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(t,e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit http://bit.ly/CRA-PWA")})):V(t,e)})}}()}},[[28,1,2]]]);
//# sourceMappingURL=main.d8f10fd4.chunk.js.map