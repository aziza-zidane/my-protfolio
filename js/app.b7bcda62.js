(function(t){function e(e){for(var s,i,n=e[0],o=e[1],c=e[2],d=0,u=[];d<n.length;d++)i=n[d],Object.prototype.hasOwnProperty.call(l,i)&&l[i]&&u.push(l[i][0]),l[i]=0;for(s in o)Object.prototype.hasOwnProperty.call(o,s)&&(t[s]=o[s]);f&&f(e);while(u.length)u.shift()();return r.push.apply(r,c||[]),a()}function a(){for(var t,e=0;e<r.length;e++){for(var a=r[e],s=!0,i=1;i<a.length;i++){var n=a[i];0!==l[n]&&(s=!1)}s&&(r.splice(e--,1),t=o(o.s=a[0]))}return t}var s={},i={app:0},l={app:0},r=[];function n(t){return o.p+"js/"+({about:"about"}[t]||t)+"."+{about:"da0fa6a1"}[t]+".js"}function o(e){if(s[e])return s[e].exports;var a=s[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.e=function(t){var e=[],a={about:1};i[t]?e.push(i[t]):0!==i[t]&&a[t]&&e.push(i[t]=new Promise((function(e,a){for(var s="css/"+({about:"about"}[t]||t)+"."+{about:"8c9f5b3d"}[t]+".css",l=o.p+s,r=document.getElementsByTagName("link"),n=0;n<r.length;n++){var c=r[n],d=c.getAttribute("data-href")||c.getAttribute("href");if("stylesheet"===c.rel&&(d===s||d===l))return e()}var u=document.getElementsByTagName("style");for(n=0;n<u.length;n++){c=u[n],d=c.getAttribute("data-href");if(d===s||d===l)return e()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=e,f.onerror=function(e){var s=e&&e.target&&e.target.src||l,r=new Error("Loading CSS chunk "+t+" failed.\n("+s+")");r.code="CSS_CHUNK_LOAD_FAILED",r.request=s,delete i[t],f.parentNode.removeChild(f),a(r)},f.href=l;var v=document.getElementsByTagName("head")[0];v.appendChild(f)})).then((function(){i[t]=0})));var s=l[t];if(0!==s)if(s)e.push(s[2]);else{var r=new Promise((function(e,a){s=l[t]=[e,a]}));e.push(s[2]=r);var c,d=document.createElement("script");d.charset="utf-8",d.timeout=120,o.nc&&d.setAttribute("nonce",o.nc),d.src=n(t);var u=new Error;c=function(e){d.onerror=d.onload=null,clearTimeout(f);var a=l[t];if(0!==a){if(a){var s=e&&("load"===e.type?"missing":e.type),i=e&&e.target&&e.target.src;u.message="Loading chunk "+t+" failed.\n("+s+": "+i+")",u.name="ChunkLoadError",u.type=s,u.request=i,a[1](u)}l[t]=void 0}};var f=setTimeout((function(){c({type:"timeout",target:d})}),12e4);d.onerror=d.onload=c,document.head.appendChild(d)}return Promise.all(e)},o.m=t,o.c=s,o.d=function(t,e,a){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)o.d(a,s,function(e){return t[e]}.bind(null,s));return a},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/",o.oe=function(t){throw console.error(t),t};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],d=c.push.bind(c);c.push=e,c=c.slice();for(var u=0;u<c.length;u++)e(c[u]);var f=d;r.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"1d80a":function(t,e,a){"use strict";a("9ad1")},"3abc":function(t,e,a){t.exports=a.p+"img/Bootstrap.daa929f4.png"},5452:function(t,e,a){"use strict";a("af35")},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var s=a("2b0e"),i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("div",{attrs:{id:"nav"}},[a("b-navbar",{staticClass:"w-100",attrs:{toggleable:"lg",type:"dark"}},[a("b-navbar-brand",{attrs:{href:"#"}},[t._v("Aziza")]),a("b-navbar-toggle",{attrs:{target:"nav-collapse"}}),a("b-collapse",{attrs:{id:"nav-collapse","is-nav":""}},[a("b-navbar-nav",{staticClass:"ml-auto"},[a("router-link",{staticClass:"hvr-underline-from-left",attrs:{to:"/"}},[t._v("Home")]),a("a",{directives:[{name:"scroll-to",rawName:"v-scroll-to",value:"#about",expression:"'#about'"}],staticClass:"hvr-underline-from-left",attrs:{href:"#"}},[t._v("about-me")]),a("a",{directives:[{name:"scroll-to",rawName:"v-scroll-to",value:"#portfolio",expression:"'#portfolio'"}],staticClass:"hvr-underline-from-left",attrs:{href:"#"}},[t._v("portfolio")]),a("a",{directives:[{name:"scroll-to",rawName:"v-scroll-to",value:"#my-skills",expression:"'#my-skills'"}],staticClass:"hvr-underline-from-left",attrs:{href:"#"}},[t._v("skills")]),a("a",{directives:[{name:"scroll-to",rawName:"v-scroll-to",value:"#cv",expression:"'#cv'"}],staticClass:"hvr-underline-from-left",attrs:{href:"#"}},[t._v("resume")]),a("a",{directives:[{name:"scroll-to",rawName:"v-scroll-to",value:"#services",expression:"'#services'"}],staticClass:"hvr-underline-from-left",attrs:{href:"#"}},[t._v("services")])],1)],1)],1)],1),a("router-view"),a("Home"),a("myFooter")],1)},l=[],r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("footer",{staticClass:"text-left pt-5  text-white"},[a("b-container",[a("b-row",{staticClass:"p-2"},[a("b-col",{attrs:{md:"4"}},[a("h4",{staticClass:"py-3"},[t._v("About-Me")]),a("p",[t._v(" My name is Aziza, I'm a front end creative developer, I focus on creating rich seamless experiences between the product and the user. I'm always looking for creative people to vibe with, let's connect through my social channels . ")])]),a("b-col",{attrs:{md:"4"}},[a("h4",{staticClass:"py-3"},[t._v("Helpful Links")]),a("ul",{staticClass:"list-unstyled "},[a("li",[a("a",{directives:[{name:"scroll-to",rawName:"v-scroll-to",value:"#portfolio",expression:"'#portfolio'"}],staticClass:"hvr-underline-from-left",attrs:{href:"#"}},[t._v("portfolio")])]),a("li",[a("a",{directives:[{name:"scroll-to",rawName:"v-scroll-to",value:"#about",expression:"'#about'"}],staticClass:"hvr-underline-from-left",attrs:{href:"#"}},[t._v("about-me")])]),a("li",[a("a",{directives:[{name:"scroll-to",rawName:"v-scroll-to",value:"#cv",expression:"'#cv'"}],staticClass:"hvr-underline-from-left",attrs:{href:"#"}},[t._v("resume")])])])]),a("b-col",{attrs:{md:"4"}},[a("h4",{staticClass:"py-3 hvr-icon-grow-rotate hvr-icon"},[t._v("Contact-me")]),a("ul",{staticClass:"list-unstyled"},[a("li",[a("i",{staticClass:"fas fa-mobile-alt"}),t._v(" : +212 6 54 51 17 29")]),a("li",[a("i",{staticClass:"fas fa-envelope-open-text"}),t._v(" :aaitzidane@gmail.com ")]),a("li",{staticClass:"mt-2 social-media "},[a("a",{attrs:{href:"#"}},[a("i",{staticClass:" fab fa-linkedin-in fa-lg ml-2 mr-4"})]),a("a",{attrs:{href:"#"}},[a("i",{staticClass:"fab fa-github-alt fa-lg mr-4 "})]),a("a",{attrs:{href:"#"}},[a("i",{staticClass:"fab fa-facebook-f fa-lg mr-4 "})]),a("a",{attrs:{href:"#"}},[a("i",{staticClass:"fab fa-pinterest-p fa-lg "})])])])])],1)],1),t._m(0)],1)},n=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"copyright p-1 text-center"},[a("p",{staticClass:"muted"},[t._v(" © copyright 2021 portfolio-aziza | all right reserved ")])])}],o={},c=o,d=(a("cf03"),a("2877")),u=Object(d["a"])(c,r,n,!1,null,null,null),f=u.exports,v=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"home"},[a("Header"),a("services"),a("abou"),a("cv"),a("skills"),a("portfolio"),a("contact")],1)},p=[],m=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("header",{staticClass:"vh-100  d-flex justify-content-center align-items-center flex-column"},[a("h2",{staticClass:"sm-h1 text-white p-sm-5 p-3 text-left"},[a("span",{staticClass:"underline",class:t.show?"translate-underline":""}),a("Appear",{attrs:{porperts:"translateX(-500px)",duration:1e3}},[t.show?a("span",{staticClass:"d-block"},[t._v("HLLOW")]):t._e()]),a("Appear",{attrs:{porperts:"translateX(500px)"}},[t.show?a("span",{staticClass:"d-block"},[t._v(" i am "),a("span",{staticClass:"name"},[t._v("Aziza")])]):t._e()]),t._l(t.textAnimate,(function(e,s){return a("span",{key:s},[a("Appear",{attrs:{delay:100*s+1,porperts:"translateX(500px)"}},[t.show?a("span",[t._v(t._s(e))]):t._e()])],1)}))],2),a("div",{staticClass:" d-flex "},[a("b-button",{staticClass:"hvr-sweep-to-right "},[t._v("cantact-me")]),a("b-button",{staticClass:"hvr-sweep-to-left "},[t._v("my-portfolio")])],1)])},b=[],h=(a("ac1f"),a("1276"),{data:function(){return{textHeader:"freelance  & web designer",textAnimate:[],theIneterval:"",show:!1,space:!0}},methods:{animateHiddin:function(){var t=this;this.theIneterval=setInterval((function(){t.show=!0,setTimeout((function(){t.show=!1}),6e3)}),7e3)}},mounted:function(){this.textAnimate=this.textHeader.split("")},created:function(){this.animateHiddin()},beforeDestroy:function(){clearInterval(this.theIneterval)}}),g=h,C=(a("5452"),Object(d["a"])(g,m,b,!1,null,null,null)),_=C.exports,y=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"services"}},[a("div",{staticClass:"overlay-right"}),a("b-container",[a("b-row",[a("b-col",{attrs:{lg:"3",md:"6"}},[a("ul",{staticClass:"list-unstyled first-type  hvr-grow-shadow",attrs:{"data-aos":"zoom-in-up","data-aos-delay":"100","data-aos-duration":"1000"}},[a("div",{staticClass:"cover-i cover-one"},[a("i",{staticClass:"fas fa-laptop-code fa-2x"})]),a("h4",{staticClass:"py-3"},[t._v("code")]),a("li",[a("i",{staticClass:"fas fa-check"}),t._v("Translate designs into working code ")]),a("li",[a("i",{staticClass:"fas fa-check"}),t._v("Update a site after it has gone")]),a("li",[a("i",{staticClass:"fas fa-check"}),t._v("Make a site go live")])])]),a("b-col",{staticClass:"d-md-none d-block ",attrs:{cols:"12"}},[a("div",{staticClass:"p-5 cover  "})]),a("b-col",{attrs:{lg:"3",md:"6"}},[a("ul",{staticClass:"list-unstyled  hvr-grow-shadow",attrs:{"data-aos":"zoom-in-up","data-aos-delay":"400","data-aos-duration":"1000"}},[a("div",{staticClass:"cover-i  "},[a("i",{staticClass:"fab fa-wordpress fa-2x"})]),a("h4",{staticClass:"py-3 "},[t._v("WordPress")]),a("li",[a("i",{staticClass:"fas fa-check"}),t._v("Red and edit PHP code")]),a("li",[a("i",{staticClass:"fas fa-check"}),t._v("Install WordPress")]),a("li",[a("i",{staticClass:"fas fa-check"}),t._v("Understand the WordPress architecture ")]),a("li",[a("i",{staticClass:"fas fa-check"}),t._v("Create a child theme")]),a("li",[a("i",{staticClass:"fas fa-check"}),t._v("add useful plaguins")])])]),a("b-col",{staticClass:"d-lg-none d-block",attrs:{cols:"12"}},[a("div",{staticClass:" p-5 cover "})]),a("b-col",{attrs:{lg:"3",md:"6"}},[a("ul",{staticClass:"list-unstyled  hvr-grow-shadow",attrs:{"data-aos":"zoom-in-up","data-aos-delay":"500","data-aos-duration":"1000"}},[a("div",{staticClass:"cover-i"},[a("i",{staticClass:"fab fa-vuejs fa-2x"})]),a("h4",{staticClass:"py-3"},[t._v("Vue.js")]),a("li",[a("i",{staticClass:"fas fa-check"}),t._v(" Downloading and including the Vue.js file ")]),a("li",[a("i",{staticClass:"fas fa-check"}),t._v("Using CDN")]),a("li",[a("i",{staticClass:"fas fa-check"}),t._v(" Using Node Package Manager (NPM) ")]),a("li",[a("i",{staticClass:"fas fa-check"}),t._v("Using Vue-cli to setup the project ")])])]),a("b-col",{staticClass:"d-md-none d-block",attrs:{cols:"12"}},[a("div",{staticClass:"p-5 cover"})]),a("b-col",{attrs:{lg:"3",md:"6"}},[a("ul",{staticClass:"list-unstyled  hvr-grow-shadow",attrs:{"data-aos":"zoom-in-up","data-aos-delay":"600","data-aos-duration":"1000"}},[a("div",{staticClass:"cover-i"},[a("i",{staticClass:"far fa-window-restore fa-2x"})]),a("h4",{staticClass:"py-3"},[t._v("responsive")]),a("li",[a("i",{staticClass:"fas fa-check"}),t._v("Create queries for standard")]),a("li",[a("i",{staticClass:"fas fa-check"}),t._v("Translate a static website into a responsive one ")]),a("li",[a("i",{staticClass:"fas fa-check"}),t._v("Follow industry standards for naming and syntax ")])])]),a("b-col",{staticClass:"d-lg-none d-block",attrs:{cols:"12"}},[a("div",{staticClass:" p-5 cover "})])],1)],1)],1)},w=[],x=(a("9c3e"),{}),k=Object(d["a"])(x,y,w,!1,null,null,null),j=k.exports,E=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"about"}},[s("b-row",[s("b-col",{attrs:{md:"6",cols:"12"}},[s("div",{staticClass:" content-image text-center py-5 ",attrs:{"data-aos":"fade-down-right","data-aos-duration":"1500"}},[s("h2",{},[t._v("About-Me")]),s("div",{staticClass:"image",attrs:{"data-aos":"fade-down-right","data-aos-delay":"600","data-aos-duration":"1500"}},[s("img",{attrs:{src:a("93c7"),alt:"","data-aos":"fade-down-left","data-aos-delay":"1500","data-aos-duration":"1500"}})])])]),s("b-col",{attrs:{md:"6",cols:"12"}},[s("b-container",{staticClass:" py-lg-5"},[s("div",{staticClass:"text",attrs:{"data-aos":"fade-down-left","data-aos-delay":"2000","data-aos-duration":"1500"}},[s("p",{staticClass:"  text-left"},[t._v(" Hi! I am Aziza Creative Freelance Web Designer I am passionate about designing beautiful and functional websites that live on the internet and makes a good website user experience. ")])])])],1)],1)],1)},z=[],A={},O=A,T=(a("e76b"),Object(d["a"])(O,E,z,!1,null,"63632e68",null)),I=T.exports,P=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("b-container",{staticClass:"text-left ",attrs:{id:"cv"}},[a("h2",{staticClass:" py-5 text-center"},[a("span",[t._v("web")]),a("span",[t._v("desinger")])]),a("b-row",[a("b-col",{attrs:{lg:"3",md:"4",cols:"12"}},[a("div",{staticClass:"personal-info  p-md-3 p-1"},[a("div",{staticClass:"margin-line d-md-none d-bolck"}),a("ul",{staticClass:"list-unstyled info-contat  text-center text-md-left"},[a("h3",{staticClass:"pt-md-3  pt-1  d-block d-md-none"},[t._v(" Aziza Ait Zidane ")]),a("li",[a("i",{staticClass:"fas fa-mobile-alt"}),t._v(" : +212 6 54 51 17 29")]),a("li",[a("i",{staticClass:"fas fa-calendar-week"}),t._v(" : 11/10/1985")]),a("li",[a("i",{staticClass:"far fa-address-card"}),t._v(" : Db Sidi Bouzid Bab Ahmer N10 Marrakech ")]),a("li",{staticClass:"mt-2"},[a("i",{staticClass:"fab fa-linkedin-in fa-lg ml-2 mr-4"}),a("i",{staticClass:"fab fa-github-alt fa-lg mr-4"}),a("i",{staticClass:"fab fa-facebook-f fa-lg mr-4"}),a("i",{staticClass:"fab fa-pinterest-p fa-lg "})])]),a("div",{staticClass:"interests d-md-block d-none"},[a("h4",[t._v("Interests")]),a("ul",[a("li",[t._v("Cyberpunk literature")]),a("li",[t._v("Triathlon")]),a("li",[t._v("Triathlon")])])]),a("div",{staticClass:"languege d-md-block d-none"},[a("h4",[t._v("Languges")]),a("ul",[a("li",[t._v("Arabec Literature")]),a("li",[t._v("Englesh")]),a("li",[t._v("French")])])])])]),a("b-col",{attrs:{lg:"9",md:"8",cols:"12"}},[a("div",{staticClass:"professional-info ml-lg-auto  p-2"},[a("h3",{staticClass:"pt-3 text-left d-none d-md-block"},[t._v("Aziza Ait Zidane")]),a("p",[t._v(" Enthusiastic and self-motivated web designer Eager to join WebHouse to bring top-class frontend development,and visual design skills. so i have an ability to plan a project from start to finish as well as extensive knowledge of HTML, CSS, JavaScript and other standard development platforms. ")]),a("div",{staticClass:"expriences"},[a("h4",[t._v("Experiences")]),a("p",[a("b",[t._v("2019–2020 Freelancing and Volunteering")])]),a("ul",[a("li",[t._v(" Custom Web Design and bring top-class visual design skills ")]),a("li",[t._v("Speed up Website and Performance Optimization")]),a("li",[t._v(" Collaborated with internal and external design/dev resources to implement scalable front-end templates and design modules. ")])])]),a("div",{staticClass:"education"},[a("h4",[t._v("Eduction")]),a("p",[t._v(" 2010 Bachelor's degree in sociology ")]),a("p",[a("b",[t._v("Relevant coursework:")])]),a("ul",[a("li",[t._v("Web Design")]),a("li",[t._v("Front End")]),a("li",[t._v("wordpress")])])]),a("div",{staticClass:"skills"},[a("h4",[t._v("skills")]),t._l(t.skills,(function(e){return a("div",{key:e.exp},[a("h5",{staticClass:"mt-2"},[t._v(t._s(e.exp))]),a("div",{staticClass:"progress w-75 "},[a("div",{staticClass:"progress-bar",style:{width:e.width},attrs:{role:"progressbar","aria-valuenow":"25","aria-valuemin":"0","aria-valuemax":"100"}})])])}))],2),a("div",{staticClass:"interests d-block d-md-none"},[a("h4",[t._v("Interests")]),a("ul",[a("li",[t._v("Cyberpunk literature")]),a("li",[t._v("Triathlon")]),a("li",[t._v("Triathlon")])])]),a("div",{staticClass:"languege d-block d-md-none"},[a("h4",[t._v("Languges")]),a("ul",[a("li",[t._v("Arabec Literature")]),a("li",[t._v("Englesh")]),a("li",[t._v("French")])])])])])],1)],1)},S=[],N={data:function(){return{skills:[{exp:"html",width:"95%"},{exp:"css",width:"99%"},{exp:"javascript",width:"80%"},{exp:"wordpress",width:"75%"},{exp:"vuejs",width:"70%"}]}}},H=N,M=(a("af9b"),Object(d["a"])(H,P,S,!1,null,null,null)),L=M.exports,$=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"contact-me"}},[a("b-row",[a("b-col",{attrs:{md:"6",cols:"12"}},[a("div",{staticClass:"my-info-contat"},[a("ul",{staticClass:"contact-details p-4 list-unsyled",attrs:{"data-aos":"flip-left","data-aos-easing":"ease-out-cubic","data-aos-duration":"2000"}},[a("li",{staticClass:"pt-4"},[a("i",{staticClass:"fas fa-mobile-alt fa-2x mt-2"}),a("p",{staticClass:"mt-2"},[t._v("+212 6 54 51 17 29")])]),a("li",[a("i",{staticClass:"far fa-envelope-open fa-2x"}),a("p",{staticClass:"mt-2"},[t._v("aaitzidane@gmail.com")])]),a("li",{staticClass:"mt-5"},[a("i",{staticClass:"fab fa-linkedin-in fa-lg ml-2 mr-4"}),a("i",{staticClass:"fab fa-github-alt fa-lg mr-4"}),a("i",{staticClass:"fab fa-facebook-f fa-lg mr-4"}),a("i",{staticClass:"fab fa-pinterest-p fa-lg "})])])])]),a("b-col",{attrs:{md:"6",cols:"12"}},[a("form",{staticClass:"text-left"},[a("h2",{staticClass:"pb-"},[t._v("Contact-Me")]),a("div",{staticClass:"mb-3"},[a("label",{staticClass:"form-label",attrs:{for:"exampleInputPassword1"}},[t._v("name")]),a("input",{staticClass:"form-control",attrs:{type:"text",id:"exampleInputPassword1"}})]),a("div",{staticClass:"mb-3"},[a("label",{staticClass:"form-label",attrs:{for:"exampleInputEmail1"}},[t._v("Email address")]),a("input",{staticClass:"form-control",attrs:{type:"email",id:"exampleInputEmail1","aria-describedby":"emailHelp"}}),a("div",{staticClass:"form-text",attrs:{id:"emailHelp"}},[t._v(" We'll never share your email with anyone else. ")])]),a("button",{staticClass:" btn hvr-curl-top-left",attrs:{type:"submit"}},[t._v("Submit")])])])],1)],1)},D=[],W=(a("9eb2"),{}),F=Object(d["a"])(W,$,D,!1,null,"257aedad",null),B=F.exports,U=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{ref:"infinitescrolltrigger",attrs:{id:"my-skills"}},[a("div",{staticClass:"overlay-right"}),a("b-container",[a("h2",{staticClass:"my-5"},[t._v("My-Skills")]),a("div",{staticClass:"row  w-100"},t._l(t.bars,(function(e){return a("div",{key:e.title,staticClass:"col-sm-4 mb-5 col-6  text-left mb-4  pl-4"},[a("div",[t._v(t._s(e.title))]),a("span",{staticClass:"val text-center",style:{left:e.value-5+"%"}},[t._v(t._s(e.value)+" ")]),a("b-progress",[a("b-progress-bar",{attrs:{value:t.show?e.value:""}})],1)],1)})),0)])],1)},q=[],V=(a("4160"),a("159b"),{data:function(){return{bars:[{title:"html",value:95},{title:"css",value:98},{title:"javascript",value:75},{title:"jquery",value:65},{title:"wordpress",value:80},{title:"vuejs",value:75},{title:"git,githube",value:75},{title:"api",value:75},{title:"sass",value:75},{title:"pug",value:75},{title:"gulp js",value:75},{title:"photoshop",value:75}],timer:null,show:!1}},methods:{scrollTrigger:function(){var t=this,e=new IntersectionObserver((function(e){e.forEach((function(e){e.intersectionRatio>0?setTimeout((function(){t.show=!0}),3e3):t.show=!1}))}));e.observe(this.$refs.infinitescrolltrigger)}},mounted:function(){this.scrollTrigger()}}),J=V,R=(a("f358"),Object(d["a"])(J,U,q,!1,null,"4723a402",null)),X=R.exports,Z=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"portfolio"}},[s("hr"),s("h2",{staticClass:"h1 py-3"},[t._v("My-portfoio")]),s("b-container",[s("b-row",[s("b-col",{attrs:{lg:"4",md:"6",cols:"12"}},[s("div",{staticClass:" holder "},[s("div",{staticClass:"back-preview"},[s("img",{staticClass:"img-fluid",attrs:{src:a("73c4"),alt:"tablet"}})]),s("div",{staticClass:"preview"},[s("img",{attrs:{src:a("60e3"),alt:""}})]),s("div",{staticClass:"tilte-project p-3 d-flex aling-items-center justify-content-center"},[s("p",[t._v(" bootstrap html css tepmlate Axit "),s("i",{staticClass:"fas fa-chevron-circle-up d-block pt-2"})]),s("a",{attrs:{href:"https://aziza-zidane.github.io/first-template/",target:"_blank"}},[t._v("viste website")])])])]),s("b-col",{attrs:{lg:"4",md:"6",cols:"12"}},[s("div",{staticClass:" holder "},[s("div",{staticClass:"back-preview"},[s("img",{staticClass:"img-fluid",attrs:{src:a("73c4"),alt:"tablet"}})]),s("div",{staticClass:"preview"},[s("img",{attrs:{src:a("7696"),alt:""}})]),s("div",{staticClass:"tilte-project p-3 d-flex aling-items-center justify-content-center"},[s("p",[t._v(" bootstrap html css tepmlate Elit-Crop "),s("i",{staticClass:"fas fa-chevron-circle-up d-block pt-2"})]),s("a",{attrs:{href:"https://aziza-zidane.github.io/template-elite-crop/",target:"_blank"}},[t._v("viste website")])])])]),s("b-col",{attrs:{lg:"4",md:"6",cols:"12"}},[s("div",{staticClass:" holder "},[s("div",{staticClass:"back-preview"},[s("img",{staticClass:"img-fluid",attrs:{src:a("73c4"),alt:"tablet"}})]),s("div",{staticClass:"preview"},[s("img",{staticClass:"img-fluid",attrs:{src:a("3abc"),alt:""}})]),s("div",{staticClass:"tilte-project p-3 d-flex aling-items-center justify-content-center"},[s("p",[t._v(" training template webdesing "),s("i",{staticClass:"fas fa-chevron-circle-up d-block pt-2"})]),s("a",{attrs:{href:"https://aziza-zidane.github.io/tepmlate-start/",target:"_blank"}},[t._v("viste website")])])])])],1)],1),s("hr")],1)},K=[],G=(a("1d80a"),{}),Q=Object(d["a"])(G,Z,K,!1,null,null,null),Y=Q.exports,tt={components:{Header:_,abou:I,cv:L,services:j,contact:B,skills:X,portfolio:Y}},et=tt,at=Object(d["a"])(et,v,p,!1,null,null,null),st=at.exports,it={components:{Home:st,myFooter:f}},lt=it,rt=(a("5c0b"),Object(d["a"])(lt,i,l,!1,null,null,null)),nt=rt.exports,ot=(a("d3b7"),a("8c4f"));s["default"].use(ot["a"]);var ct=[{path:"/about",name:"About",component:function(){return a.e("about").then(a.bind(null,"f820"))}}],dt=new ot["a"]({mode:"history",base:"/",routes:ct}),ut=dt,ft=a("2f62");s["default"].use(ft["a"]);var vt=new ft["a"].Store({state:{},mutations:{},actions:{},modules:{}}),pt=a("5f5b"),mt=a("b1e0"),bt=(a("d597"),new IntersectionObserver((function(t,e){t.forEach((function(t){t.isIntersecting&&e.unobserve(t.target)}))}))),ht={bind:function(t){t.classList.add("before-enter"),bt.observe(t)}},gt=a("f5af"),Ct=a.n(gt),_t=(a("e829"),function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("transition",{attrs:{appear:"",css:!1},on:{"before-enter":t.beforeEnter,enter:t.enter}},[t._t("default")],2)}),yt=[],wt=(a("a9e3"),{props:{duration:{type:Number,default:1e3},delay:{type:Number,default:100},porperts:{type:String}},methods:{beforeEnter:function(t){t.style.opacity=0,this.porperts&&(t.style.transform=this.porperts)},enter:function(t){var e=this,a="opacity "+this.duration+"ms ease-in-out "+this.delay+"ms";this.porperts&&(a+=", transform "+this.duration+"ms ease-in-out "+this.delay+"ms"),t.style.transition=a,getComputedStyle(t),setTimeout((function(){t.style.opacity=1,e.porperts&&(t.style.transform="initial")}))}}}),xt=wt,kt=Object(d["a"])(xt,_t,yt,!1,null,null,null),jt=kt.exports;Ct.a.init(),s["default"].use(pt["a"]),s["default"].use(mt["a"]),s["default"].config.productionTip=!1;var Et=a("f13c");s["default"].directive("scrollanimation",ht),s["default"].component("Appear",jt),Ct.a.init(),s["default"].use(Et),s["default"].use(Et,{container:"body",duration:500,easing:"ease",offset:0,force:!0,cancelable:!0,onStart:!1,onDone:!1,onCancel:!1,x:!1,y:!0}),new s["default"]({router:ut,store:vt,render:function(t){return t(nt)}}).$mount("#app")},5846:function(t,e,a){},"5c0b":function(t,e,a){"use strict";a("9c0c")},"60e3":function(t,e,a){t.exports=a.p+"img/Template-Tow.157ad55a.png"},"73c4":function(t,e,a){t.exports=a.p+"img/tablet1.9de408b9.png"},7696:function(t,e,a){t.exports=a.p+"img/elit-crop.19aa950a.png"},"76ca":function(t,e,a){},"935e":function(t,e,a){},"93c7":function(t,e,a){t.exports=a.p+"img/aziza.b26df9d2.jpg"},"9ad1":function(t,e,a){},"9c0c":function(t,e,a){},"9c3e":function(t,e,a){"use strict";a("5846")},"9eb2":function(t,e,a){"use strict";a("fe1d")},af35:function(t,e,a){},af9b:function(t,e,a){"use strict";a("c6d3")},c2dc:function(t,e,a){},c6d3:function(t,e,a){},cf03:function(t,e,a){"use strict";a("c2dc")},d597:function(t,e,a){},e76b:function(t,e,a){"use strict";a("935e")},f358:function(t,e,a){"use strict";a("76ca")},fe1d:function(t,e,a){}});
//# sourceMappingURL=app.b7bcda62.js.map