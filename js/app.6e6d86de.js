(function(t){function a(a){for(var s,i,n=a[0],o=a[1],c=a[2],d=0,u=[];d<n.length;d++)i=n[d],Object.prototype.hasOwnProperty.call(l,i)&&l[i]&&u.push(l[i][0]),l[i]=0;for(s in o)Object.prototype.hasOwnProperty.call(o,s)&&(t[s]=o[s]);f&&f(a);while(u.length)u.shift()();return r.push.apply(r,c||[]),e()}function e(){for(var t,a=0;a<r.length;a++){for(var e=r[a],s=!0,i=1;i<e.length;i++){var n=e[i];0!==l[n]&&(s=!1)}s&&(r.splice(a--,1),t=o(o.s=e[0]))}return t}var s={},i={app:0},l={app:0},r=[];function n(t){return o.p+"js/"+({about:"about"}[t]||t)+"."+{about:"da0fa6a1"}[t]+".js"}function o(a){if(s[a])return s[a].exports;var e=s[a]={i:a,l:!1,exports:{}};return t[a].call(e.exports,e,e.exports,o),e.l=!0,e.exports}o.e=function(t){var a=[],e={about:1};i[t]?a.push(i[t]):0!==i[t]&&e[t]&&a.push(i[t]=new Promise((function(a,e){for(var s="css/"+({about:"about"}[t]||t)+"."+{about:"8c9f5b3d"}[t]+".css",l=o.p+s,r=document.getElementsByTagName("link"),n=0;n<r.length;n++){var c=r[n],d=c.getAttribute("data-href")||c.getAttribute("href");if("stylesheet"===c.rel&&(d===s||d===l))return a()}var u=document.getElementsByTagName("style");for(n=0;n<u.length;n++){c=u[n],d=c.getAttribute("data-href");if(d===s||d===l)return a()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=a,f.onerror=function(a){var s=a&&a.target&&a.target.src||l,r=new Error("Loading CSS chunk "+t+" failed.\n("+s+")");r.code="CSS_CHUNK_LOAD_FAILED",r.request=s,delete i[t],f.parentNode.removeChild(f),e(r)},f.href=l;var v=document.getElementsByTagName("head")[0];v.appendChild(f)})).then((function(){i[t]=0})));var s=l[t];if(0!==s)if(s)a.push(s[2]);else{var r=new Promise((function(a,e){s=l[t]=[a,e]}));a.push(s[2]=r);var c,d=document.createElement("script");d.charset="utf-8",d.timeout=120,o.nc&&d.setAttribute("nonce",o.nc),d.src=n(t);var u=new Error;c=function(a){d.onerror=d.onload=null,clearTimeout(f);var e=l[t];if(0!==e){if(e){var s=a&&("load"===a.type?"missing":a.type),i=a&&a.target&&a.target.src;u.message="Loading chunk "+t+" failed.\n("+s+": "+i+")",u.name="ChunkLoadError",u.type=s,u.request=i,e[1](u)}l[t]=void 0}};var f=setTimeout((function(){c({type:"timeout",target:d})}),12e4);d.onerror=d.onload=c,document.head.appendChild(d)}return Promise.all(a)},o.m=t,o.c=s,o.d=function(t,a,e){o.o(t,a)||Object.defineProperty(t,a,{enumerable:!0,get:e})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,a){if(1&a&&(t=o(t)),8&a)return t;if(4&a&&"object"===typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(o.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&a&&"string"!=typeof t)for(var s in t)o.d(e,s,function(a){return t[a]}.bind(null,s));return e},o.n=function(t){var a=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(a,"a",a),a},o.o=function(t,a){return Object.prototype.hasOwnProperty.call(t,a)},o.p="/",o.oe=function(t){throw console.error(t),t};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],d=c.push.bind(c);c.push=a,c=c.slice();for(var u=0;u<c.length;u++)a(c[u]);var f=d;r.push([0,"chunk-vendors"]),e()})({0:function(t,a,e){t.exports=e("56d7")},"02fe":function(t,a,e){"use strict";e("a92e")},"1d80a":function(t,a,e){"use strict";e("9ad1")},5452:function(t,a,e){"use strict";e("af35")},"56d7":function(t,a,e){"use strict";e.r(a);e("e260"),e("e6cf"),e("cca6"),e("a79d");var s=e("2b0e"),i=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{attrs:{id:"app"}},[e("div",{attrs:{id:"nav"}},[e("b-navbar",{staticClass:"w-100",attrs:{toggleable:"lg",type:"dark"}},[e("b-navbar-brand",{attrs:{href:"#"}},[t._v("Aziza")]),e("b-navbar-toggle",{attrs:{target:"nav-collapse"}}),e("b-collapse",{attrs:{id:"nav-collapse","is-nav":""}},[e("b-navbar-nav",{staticClass:"ml-auto"},[e("router-link",{staticClass:"hvr-underline-from-left",attrs:{to:"/"}},[t._v("Home")]),e("a",{directives:[{name:"scroll-to",rawName:"v-scroll-to",value:"#about",expression:"'#about'"}],staticClass:"hvr-underline-from-left",attrs:{href:"#"}},[t._v("about-me")]),e("a",{directives:[{name:"scroll-to",rawName:"v-scroll-to",value:"#portfolio",expression:"'#portfolio'"}],staticClass:"hvr-underline-from-left",attrs:{href:"#"}},[t._v("portfolio")]),e("a",{directives:[{name:"scroll-to",rawName:"v-scroll-to",value:"#my-skills",expression:"'#my-skills'"}],staticClass:"hvr-underline-from-left",attrs:{href:"#"}},[t._v("skills")]),e("a",{directives:[{name:"scroll-to",rawName:"v-scroll-to",value:"#cv",expression:"'#cv'"}],staticClass:"hvr-underline-from-left",attrs:{href:"#"}},[t._v("resume")]),e("a",{directives:[{name:"scroll-to",rawName:"v-scroll-to",value:"#services",expression:"'#services'"}],staticClass:"hvr-underline-from-left",attrs:{href:"#"}},[t._v("services")])],1)],1)],1)],1),e("router-view"),e("Home"),e("myFooter")],1)},l=[],r=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("footer",{staticClass:"text-left pt-5  text-white"},[e("b-container",[e("b-row",{staticClass:"p-2"},[e("b-col",{attrs:{md:"4"}},[e("h4",{staticClass:"py-3"},[t._v("About-Me")]),e("p",[t._v(" My name is Aziza, I'm a front end creative developer, I focus on creating rich seamless experiences between the product and the user. I'm always looking for creative people to vibe with, let's connect through my social channels . ")])]),e("b-col",{attrs:{md:"4"}},[e("h4",{staticClass:"py-3"},[t._v("Helpful Links")]),e("ul",{staticClass:"list-unstyled "},[e("li",[e("a",{directives:[{name:"scroll-to",rawName:"v-scroll-to",value:"#portfolio",expression:"'#portfolio'"}],staticClass:"hvr-underline-from-left",attrs:{href:"#"}},[t._v("portfolio")])]),e("li",[e("a",{directives:[{name:"scroll-to",rawName:"v-scroll-to",value:"#about",expression:"'#about'"}],staticClass:"hvr-underline-from-left",attrs:{href:"#"}},[t._v("about-me")])]),e("li",[e("a",{directives:[{name:"scroll-to",rawName:"v-scroll-to",value:"#cv",expression:"'#cv'"}],staticClass:"hvr-underline-from-left",attrs:{href:"#"}},[t._v("resume")])])])]),e("b-col",{attrs:{md:"4"}},[e("h4",{staticClass:"py-3 hvr-icon-grow-rotate hvr-icon"},[t._v("Contact-me")]),e("ul",{staticClass:"list-unstyled"},[e("li",[e("i",{staticClass:"fas fa-mobile-alt"}),t._v(" : +212 6 54 51 17 29")]),e("li",[e("i",{staticClass:"fas fa-envelope-open-text"}),t._v(" :aaitzidane@gmail.com ")]),e("li",{staticClass:"mt-2 social-media "},[e("a",{attrs:{href:"#"}},[e("i",{staticClass:" fab fa-linkedin-in fa-lg ml-2 mr-4"})]),e("a",{attrs:{href:"#"}},[e("i",{staticClass:"fab fa-github-alt fa-lg mr-4 "})]),e("a",{attrs:{href:"#"}},[e("i",{staticClass:"fab fa-facebook-f fa-lg mr-4 "})]),e("a",{attrs:{href:"#"}},[e("i",{staticClass:"fab fa-pinterest-p fa-lg "})])])])])],1)],1),t._m(0)],1)},n=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"copyright p-1 text-center"},[e("p",{staticClass:"muted"},[t._v(" © copyright 2021 portfolio-aziza | all right reserved ")])])}],o={},c=o,d=(e("cf03"),e("2877")),u=Object(d["a"])(c,r,n,!1,null,null,null),f=u.exports,v=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"home"},[e("Header"),e("services"),e("abou"),e("cv"),e("skills"),e("portfolio"),e("contact")],1)},p=[],m=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("header",{staticClass:"vh-100  d-flex justify-content-center align-items-center flex-column"},[e("h2",{staticClass:"sm-h1 text-white p-sm-5 p-3 text-left"},[e("span",{staticClass:"underline",class:t.show?"translate-underline":""}),e("Appear",{attrs:{porperts:"translateX(-500px)",duration:1e3}},[t.show?e("span",{staticClass:"d-block"},[t._v("HLLOW")]):t._e()]),e("Appear",{attrs:{porperts:"translateX(500px)"}},[t.show?e("span",{staticClass:"d-block"},[t._v(" i am "),e("span",{staticClass:"name"},[t._v("Aziza")])]):t._e()]),t._l(t.textAnimate,(function(a,s){return e("span",{key:s},[e("Appear",{attrs:{delay:100*s+1,porperts:"translateX(500px)"}},[t.show?e("span",[t._v(t._s(a))]):t._e()])],1)}))],2),e("div",{staticClass:" d-flex "},[e("b-button",{staticClass:"hvr-sweep-to-right "},[t._v("cantact-me")]),e("b-button",{staticClass:"hvr-sweep-to-left "},[t._v("my-portfolio")])],1)])},h=[],b=(e("ac1f"),e("1276"),{data:function(){return{textHeader:"freelance  & web designer",textAnimate:[],theIneterval:"",show:!1,space:!0}},methods:{animateHiddin:function(){var t=this;this.theIneterval=setInterval((function(){t.show=!0,setTimeout((function(){t.show=!1}),6e3)}),7e3)}},mounted:function(){this.textAnimate=this.textHeader.split("")},created:function(){this.animateHiddin()},beforeDestroy:function(){clearInterval(this.theIneterval)}}),g=b,C=(e("5452"),Object(d["a"])(g,m,h,!1,null,null,null)),_=C.exports,y=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{attrs:{id:"services"}},[e("div",{staticClass:"overlay-right"}),e("b-container",[e("b-row",[e("b-col",{attrs:{lg:"3",md:"6"}},[e("ul",{staticClass:"list-unstyled first-type  hvr-grow-shadow",attrs:{"data-aos":"zoom-in-up","data-aos-delay":"100","data-aos-duration":"1000"}},[e("div",{staticClass:"cover-i cover-one"},[e("i",{staticClass:"fas fa-laptop-code fa-2x"})]),e("h4",{staticClass:"py-3"},[t._v("code")]),e("li",[e("i",{staticClass:"fas fa-check"}),t._v("Translate designs into working code ")]),e("li",[e("i",{staticClass:"fas fa-check"}),t._v("Update a site after it has gone")]),e("li",[e("i",{staticClass:"fas fa-check"}),t._v("Make a site go live")])])]),e("b-col",{staticClass:"d-md-none d-block ",attrs:{cols:"12"}},[e("div",{staticClass:"p-5 cover  "})]),e("b-col",{attrs:{lg:"3",md:"6"}},[e("ul",{staticClass:"list-unstyled  hvr-grow-shadow",attrs:{"data-aos":"zoom-in-up","data-aos-delay":"400","data-aos-duration":"1000"}},[e("div",{staticClass:"cover-i  "},[e("i",{staticClass:"fab fa-wordpress fa-2x"})]),e("h4",{staticClass:"py-3 "},[t._v("WordPress")]),e("li",[e("i",{staticClass:"fas fa-check"}),t._v("Red and edit PHP code")]),e("li",[e("i",{staticClass:"fas fa-check"}),t._v("Install WordPress")]),e("li",[e("i",{staticClass:"fas fa-check"}),t._v("Understand the WordPress architecture ")]),e("li",[e("i",{staticClass:"fas fa-check"}),t._v("Create a child theme")]),e("li",[e("i",{staticClass:"fas fa-check"}),t._v("add useful plaguins")])])]),e("b-col",{staticClass:"d-lg-none d-block",attrs:{cols:"12"}},[e("div",{staticClass:" p-5 cover "})]),e("b-col",{attrs:{lg:"3",md:"6"}},[e("ul",{staticClass:"list-unstyled  hvr-grow-shadow",attrs:{"data-aos":"zoom-in-up","data-aos-delay":"500","data-aos-duration":"1000"}},[e("div",{staticClass:"cover-i"},[e("i",{staticClass:"fab fa-vuejs fa-2x"})]),e("h4",{staticClass:"py-3"},[t._v("Vue.js")]),e("li",[e("i",{staticClass:"fas fa-check"}),t._v(" Downloading and including the Vue.js file ")]),e("li",[e("i",{staticClass:"fas fa-check"}),t._v("Using CDN")]),e("li",[e("i",{staticClass:"fas fa-check"}),t._v(" Using Node Package Manager (NPM) ")]),e("li",[e("i",{staticClass:"fas fa-check"}),t._v("Using Vue-cli to setup the project ")])])]),e("b-col",{staticClass:"d-md-none d-block",attrs:{cols:"12"}},[e("div",{staticClass:"p-5 cover"})]),e("b-col",{attrs:{lg:"3",md:"6"}},[e("ul",{staticClass:"list-unstyled  hvr-grow-shadow",attrs:{"data-aos":"zoom-in-up","data-aos-delay":"600","data-aos-duration":"1000"}},[e("div",{staticClass:"cover-i"},[e("i",{staticClass:"far fa-window-restore fa-2x"})]),e("h4",{staticClass:"py-3"},[t._v("responsive")]),e("li",[e("i",{staticClass:"fas fa-check"}),t._v("Create queries for standard")]),e("li",[e("i",{staticClass:"fas fa-check"}),t._v("Translate a static website into a responsive one ")]),e("li",[e("i",{staticClass:"fas fa-check"}),t._v("Follow industry standards for naming and syntax ")])])]),e("b-col",{staticClass:"d-lg-none d-block",attrs:{cols:"12"}},[e("div",{staticClass:" p-5 cover "})])],1)],1)],1)},w=[],x=(e("9c3e"),{}),k=Object(d["a"])(x,y,w,!1,null,null,null),z=k.exports,j=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{attrs:{id:"about"}},[e("b-row",[e("b-col",{attrs:{md:"6",cols:"12"}},[e("div",{staticClass:" content-image text-center py-5 ",attrs:{"data-aos":"fade-down-right","data-aos-duration":"1500"}},[e("h2",{},[t._v("About-Me")]),e("div",{staticClass:"image",attrs:{"data-aos":"fade-down-right","data-aos-delay":"600","data-aos-duration":"1500"}},[e("img",{attrs:{src:"https://aziza-zidane.github.io/my-protfolio/img/aziza.b26df9d2.jpg",alt:"","data-aos":"fade-down-left","data-aos-delay":"1500","data-aos-duration":"1500"}})])])]),e("b-col",{attrs:{md:"6",cols:"12"}},[e("b-container",{staticClass:" py-lg-5"},[e("div",{staticClass:"text",attrs:{"data-aos":"fade-down-left","data-aos-delay":"2000","data-aos-duration":"1500"}},[e("p",{staticClass:"  text-left"},[t._v(" Hi! I am Aziza Creative Freelance Web Designer I am passionate about designing beautiful and functional websites that live on the internet and makes a good website user experience. ")])])])],1)],1)],1)},E=[],A={},O=A,T=(e("02fe"),Object(d["a"])(O,j,E,!1,null,"6516ed8c",null)),I=T.exports,P=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("b-container",{staticClass:"text-left ",attrs:{id:"cv"}},[e("h2",{staticClass:" py-5 text-center"},[e("span",[t._v("web")]),e("span",[t._v("desinger")])]),e("b-row",[e("b-col",{attrs:{lg:"3",md:"4",cols:"12"}},[e("div",{staticClass:"personal-info  p-md-3 p-1"},[e("div",{staticClass:"margin-line d-md-none d-bolck"}),e("ul",{staticClass:"list-unstyled info-contat  text-center text-md-left"},[e("h3",{staticClass:"pt-md-3  pt-1  d-block d-md-none"},[t._v(" Aziza Ait Zidane ")]),e("li",[e("i",{staticClass:"fas fa-mobile-alt"}),t._v(" : +212 6 54 51 17 29")]),e("li",[e("i",{staticClass:"fas fa-calendar-week"}),t._v(" : 11/10/1985")]),e("li",[e("i",{staticClass:"far fa-address-card"}),t._v(" : Db Sidi Bouzid Bab Ahmer N10 Marrakech ")]),e("li",{staticClass:"mt-2"},[e("i",{staticClass:"fab fa-linkedin-in fa-lg ml-2 mr-4"}),e("i",{staticClass:"fab fa-github-alt fa-lg mr-4"}),e("i",{staticClass:"fab fa-facebook-f fa-lg mr-4"}),e("i",{staticClass:"fab fa-pinterest-p fa-lg "})])]),e("div",{staticClass:"interests d-md-block d-none"},[e("h4",[t._v("Interests")]),e("ul",[e("li",[t._v("Cyberpunk literature")]),e("li",[t._v("Triathlon")]),e("li",[t._v("Triathlon")])])]),e("div",{staticClass:"languege d-md-block d-none"},[e("h4",[t._v("Languges")]),e("ul",[e("li",[t._v("Arabec Literature")]),e("li",[t._v("Englesh")]),e("li",[t._v("French")])])])])]),e("b-col",{attrs:{lg:"9",md:"8",cols:"12"}},[e("div",{staticClass:"professional-info ml-lg-auto  p-2"},[e("h3",{staticClass:"pt-3 text-left d-none d-md-block"},[t._v("Aziza Ait Zidane")]),e("p",[t._v(" Enthusiastic and self-motivated web designer Eager to join WebHouse to bring top-class frontend development,and visual design skills. so i have an ability to plan a project from start to finish as well as extensive knowledge of HTML, CSS, JavaScript and other standard development platforms. ")]),e("div",{staticClass:"expriences"},[e("h4",[t._v("Experiences")]),e("p",[e("b",[t._v("2019–2020 Freelancing and Volunteering")])]),e("ul",[e("li",[t._v(" Custom Web Design and bring top-class visual design skills ")]),e("li",[t._v("Speed up Website and Performance Optimization")]),e("li",[t._v(" Collaborated with internal and external design/dev resources to implement scalable front-end templates and design modules. ")])])]),e("div",{staticClass:"education"},[e("h4",[t._v("Eduction")]),e("p",[t._v(" 2010 Bachelor's degree in sociology ")]),e("p",[e("b",[t._v("Relevant coursework:")])]),e("ul",[e("li",[t._v("Web Design")]),e("li",[t._v("Front End")]),e("li",[t._v("wordpress")])])]),e("div",{staticClass:"skills"},[e("h4",[t._v("skills")]),t._l(t.skills,(function(a){return e("div",{key:a.exp},[e("h5",{staticClass:"mt-2"},[t._v(t._s(a.exp))]),e("div",{staticClass:"progress w-75 "},[e("div",{staticClass:"progress-bar",style:{width:a.width},attrs:{role:"progressbar","aria-valuenow":"25","aria-valuemin":"0","aria-valuemax":"100"}})])])}))],2),e("div",{staticClass:"interests d-block d-md-none"},[e("h4",[t._v("Interests")]),e("ul",[e("li",[t._v("Cyberpunk literature")]),e("li",[t._v("Triathlon")]),e("li",[t._v("Triathlon")])])]),e("div",{staticClass:"languege d-block d-md-none"},[e("h4",[t._v("Languges")]),e("ul",[e("li",[t._v("Arabec Literature")]),e("li",[t._v("Englesh")]),e("li",[t._v("French")])])])])])],1)],1)},S=[],N={data:function(){return{skills:[{exp:"html",width:"95%"},{exp:"css",width:"99%"},{exp:"javascript",width:"80%"},{exp:"wordpress",width:"75%"},{exp:"vuejs",width:"70%"}]}}},H=N,M=(e("af9b"),Object(d["a"])(H,P,S,!1,null,null,null)),L=M.exports,$=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{attrs:{id:"contact-me"}},[e("b-row",[e("b-col",{attrs:{md:"6",cols:"12"}},[e("div",{staticClass:"my-info-contat"},[e("ul",{staticClass:"contact-details p-4 list-unsyled",attrs:{"data-aos":"flip-left","data-aos-easing":"ease-out-cubic","data-aos-duration":"2000"}},[e("li",{staticClass:"pt-4"},[e("i",{staticClass:"fas fa-mobile-alt fa-2x mt-2"}),e("p",{staticClass:"mt-2"},[t._v("+212 6 54 51 17 29")])]),e("li",[e("i",{staticClass:"far fa-envelope-open fa-2x"}),e("p",{staticClass:"mt-2"},[t._v("aaitzidane@gmail.com")])]),e("li",{staticClass:"mt-5"},[e("i",{staticClass:"fab fa-linkedin-in fa-lg ml-2 mr-4"}),e("i",{staticClass:"fab fa-github-alt fa-lg mr-4"}),e("i",{staticClass:"fab fa-facebook-f fa-lg mr-4"}),e("i",{staticClass:"fab fa-pinterest-p fa-lg "})])])])]),e("b-col",{attrs:{md:"6",cols:"12"}},[e("form",{staticClass:"text-left"},[e("h2",{staticClass:"pb-"},[t._v("Contact-Me")]),e("div",{staticClass:"mb-3"},[e("label",{staticClass:"form-label",attrs:{for:"exampleInputPassword1"}},[t._v("name")]),e("input",{staticClass:"form-control",attrs:{type:"text",id:"exampleInputPassword1"}})]),e("div",{staticClass:"mb-3"},[e("label",{staticClass:"form-label",attrs:{for:"exampleInputEmail1"}},[t._v("Email address")]),e("input",{staticClass:"form-control",attrs:{type:"email",id:"exampleInputEmail1","aria-describedby":"emailHelp"}}),e("div",{staticClass:"form-text",attrs:{id:"emailHelp"}},[t._v(" We'll never share your email with anyone else. ")])]),e("button",{staticClass:" btn hvr-curl-top-left",attrs:{type:"submit"}},[t._v("Submit")])])])],1)],1)},D=[],W=(e("9eb2"),{}),F=Object(d["a"])(W,$,D,!1,null,"257aedad",null),B=F.exports,U=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{ref:"infinitescrolltrigger",attrs:{id:"my-skills"}},[e("div",{staticClass:"overlay-right"}),e("b-container",[e("h2",{staticClass:"my-5"},[t._v("My-Skills")]),e("div",{staticClass:"row  w-100"},t._l(t.bars,(function(a){return e("div",{key:a.title,staticClass:"col-sm-4 mb-5 col-6  text-left mb-4  pl-4"},[e("div",[t._v(t._s(a.title))]),e("span",{staticClass:"val text-center",style:{left:a.value-5+"%"}},[t._v(t._s(a.value)+" ")]),e("b-progress",[e("b-progress-bar",{attrs:{value:t.show?a.value:""}})],1)],1)})),0)])],1)},q=[],V=(e("4160"),e("159b"),{data:function(){return{bars:[{title:"html",value:95},{title:"css",value:98},{title:"javascript",value:75},{title:"jquery",value:65},{title:"wordpress",value:80},{title:"vuejs",value:75},{title:"git,githube",value:75},{title:"api",value:75},{title:"sass",value:75},{title:"pug",value:75},{title:"gulp js",value:75},{title:"photoshop",value:75}],timer:null,show:!1}},methods:{scrollTrigger:function(){var t=this,a=new IntersectionObserver((function(a){a.forEach((function(a){a.intersectionRatio>0?setTimeout((function(){t.show=!0}),3e3):t.show=!1}))}));a.observe(this.$refs.infinitescrolltrigger)}},mounted:function(){this.scrollTrigger()}}),J=V,R=(e("f358"),Object(d["a"])(J,U,q,!1,null,"4723a402",null)),X=R.exports,Z=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{attrs:{id:"portfolio"}},[e("hr"),e("h2",{staticClass:"h1 py-3"},[t._v("My-portfoio")]),e("b-container",[e("b-row",[e("b-col",{attrs:{lg:"4",md:"6",cols:"12"}},[e("div",{staticClass:" holder "},[e("div",{staticClass:"back-preview"},[e("img",{staticClass:"img-fluid",attrs:{src:"https://aziza-zidane.github.io/my-protfolio/img/tablet1.9de408b9.png",alt:"tablet"}})]),e("div",{staticClass:"preview"},[e("img",{attrs:{src:"https://aziza-zidane.github.io/my-protfolio/img/Template-Tow.157ad55a.png",alt:""}})]),e("div",{staticClass:"tilte-project p-3 d-flex aling-items-center justify-content-center"},[e("p",[t._v(" bootstrap html css tepmlate Axit "),e("i",{staticClass:"fas fa-chevron-circle-up d-block pt-2"})]),e("a",{attrs:{href:"https://aziza-zidane.github.io/first-template/",target:"_blank"}},[t._v("viste website")])])])]),e("b-col",{attrs:{lg:"4",md:"6",cols:"12"}},[e("div",{staticClass:" holder "},[e("div",{staticClass:"back-preview"},[e("img",{staticClass:"img-fluid",attrs:{src:"https://aziza-zidane.github.io/my-protfolio/img/tablet1.9de408b9.png",alt:"tablet"}})]),e("div",{staticClass:"preview"},[e("img",{attrs:{src:"https://aziza-zidane.github.io/my-protfolio/img/elit-crop.19aa950a.png",alt:""}})]),e("div",{staticClass:"tilte-project p-3 d-flex aling-items-center justify-content-center"},[e("p",[t._v(" bootstrap html css tepmlate Elit-Crop "),e("i",{staticClass:"fas fa-chevron-circle-up d-block pt-2"})]),e("a",{attrs:{href:"https://aziza-zidane.github.io/template-elite-crop/",target:"_blank"}},[t._v("viste website")])])])]),e("b-col",{attrs:{lg:"4",md:"6",cols:"12"}},[e("div",{staticClass:" holder "},[e("div",{staticClass:"back-preview"},[e("img",{staticClass:"img-fluid",attrs:{src:"https://aziza-zidane.github.io/my-protfolio/img/tablet1.9de408b9.png",alt:"tablet"}})]),e("div",{staticClass:"preview"},[e("img",{staticClass:"img-fluid",attrs:{src:"https://aziza-zidane.github.io/my-protfolio/img/Bootstrap.daa929f4.png",alt:""}})]),e("div",{staticClass:"tilte-project p-3 d-flex aling-items-center justify-content-center"},[e("p",[t._v(" training template webdesing "),e("i",{staticClass:"fas fa-chevron-circle-up d-block pt-2"})]),e("a",{attrs:{href:"https://aziza-zidane.github.io/tepmlate-start/",target:"_blank"}},[t._v("viste website")])])])])],1)],1),e("hr")],1)},K=[],G=(e("1d80a"),{}),Q=Object(d["a"])(G,Z,K,!1,null,null,null),Y=Q.exports,tt={components:{Header:_,abou:I,cv:L,services:z,contact:B,skills:X,portfolio:Y}},at=tt,et=Object(d["a"])(at,v,p,!1,null,null,null),st=et.exports,it={components:{Home:st,myFooter:f}},lt=it,rt=(e("5c0b"),Object(d["a"])(lt,i,l,!1,null,null,null)),nt=rt.exports,ot=(e("d3b7"),e("8c4f"));s["default"].use(ot["a"]);var ct=[{path:"/about",name:"About",component:function(){return e.e("about").then(e.bind(null,"f820"))}}],dt=new ot["a"]({mode:"history",base:"/",routes:ct}),ut=dt,ft=e("2f62");s["default"].use(ft["a"]);var vt=new ft["a"].Store({state:{},mutations:{},actions:{},modules:{}}),pt=e("5f5b"),mt=e("b1e0"),ht=(e("d597"),new IntersectionObserver((function(t,a){t.forEach((function(t){t.isIntersecting&&a.unobserve(t.target)}))}))),bt={bind:function(t){t.classList.add("before-enter"),ht.observe(t)}},gt=e("f5af"),Ct=e.n(gt),_t=(e("e829"),function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("transition",{attrs:{appear:"",css:!1},on:{"before-enter":t.beforeEnter,enter:t.enter}},[t._t("default")],2)}),yt=[],wt=(e("a9e3"),{props:{duration:{type:Number,default:1e3},delay:{type:Number,default:100},porperts:{type:String}},methods:{beforeEnter:function(t){t.style.opacity=0,this.porperts&&(t.style.transform=this.porperts)},enter:function(t){var a=this,e="opacity "+this.duration+"ms ease-in-out "+this.delay+"ms";this.porperts&&(e+=", transform "+this.duration+"ms ease-in-out "+this.delay+"ms"),t.style.transition=e,getComputedStyle(t),setTimeout((function(){t.style.opacity=1,a.porperts&&(t.style.transform="initial")}))}}}),xt=wt,kt=Object(d["a"])(xt,_t,yt,!1,null,null,null),zt=kt.exports;Ct.a.init(),s["default"].use(pt["a"]),s["default"].use(mt["a"]),s["default"].config.productionTip=!1;var jt=e("f13c");s["default"].directive("scrollanimation",bt),s["default"].component("Appear",zt),Ct.a.init(),s["default"].use(jt),s["default"].use(jt,{container:"body",duration:500,easing:"ease",offset:0,force:!0,cancelable:!0,onStart:!1,onDone:!1,onCancel:!1,x:!1,y:!0}),new s["default"]({router:ut,store:vt,render:function(t){return t(nt)}}).$mount("#app")},5846:function(t,a,e){},"5c0b":function(t,a,e){"use strict";e("9c0c")},"76ca":function(t,a,e){},"9ad1":function(t,a,e){},"9c0c":function(t,a,e){},"9c3e":function(t,a,e){"use strict";e("5846")},"9eb2":function(t,a,e){"use strict";e("fe1d")},a92e:function(t,a,e){},af35:function(t,a,e){},af9b:function(t,a,e){"use strict";e("c6d3")},c2dc:function(t,a,e){},c6d3:function(t,a,e){},cf03:function(t,a,e){"use strict";e("c2dc")},d597:function(t,a,e){},f358:function(t,a,e){"use strict";e("76ca")},fe1d:function(t,a,e){}});
//# sourceMappingURL=app.6e6d86de.js.map