(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2519],{3757:function(e,s,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/service-details",function(){return a(9026)}])},8915:function(e,s,a){"use strict";var i=a(5893);a(7294);var t=a(1664),r=a.n(t);s.Z=e=>{let{pageTitle:s,homePageUrl:a,homePageText:t,activePageText:n,imgClass:l}=e;return(0,i.jsx)(i.Fragment,{children:(0,i.jsx)("div",{className:"page-title-area ".concat(l),children:(0,i.jsx)("div",{className:"d-table",children:(0,i.jsx)("div",{className:"d-table-cell",children:(0,i.jsx)("div",{className:"container",children:(0,i.jsxs)("div",{className:"page-title-content",children:[(0,i.jsx)("h2",{children:s}),(0,i.jsxs)("ul",{children:[(0,i.jsx)("li",{children:(0,i.jsx)(r(),{href:a,children:t})}),(0,i.jsx)("li",{className:"active",children:n})]})]})})})})})})}},6519:function(e,s,a){"use strict";var i=a(5893);a(7294),s.Z=()=>(0,i.jsx)(i.Fragment,{children:(0,i.jsx)("div",{className:"subscribe-area",children:(0,i.jsx)("div",{className:"container",children:(0,i.jsxs)("div",{className:"row align-items-center",children:[(0,i.jsxs)("div",{className:"col-lg-6","data-aos":"fade-in","data-aos-delay":"200","data-aos-duration":"1200",children:[(0,i.jsx)("h2",{children:"Subscribe Now"}),(0,i.jsx)("p",{children:"Get our latest news & update regularly"})]}),(0,i.jsx)("div",{className:"col-lg-6",children:(0,i.jsxs)("form",{className:"newsletter-form","data-aos":"fade-in","data-aos-delay":"400","data-aos-duration":"1200",children:[(0,i.jsx)("input",{type:"email",className:"form-control",placeholder:"Enter Your Email",name:"EMAIL",required:!0}),(0,i.jsx)("button",{className:"default-btn",type:"submit",children:"Subscribe"})]})})]})})})})},3827:function(e,s,a){"use strict";var i=a(5893),t=a(7294),r=a(1163),n=a(1664),l=a.n(n),c=a(6458),o=a(6154);s.Z=()=>{let e="".concat("https://edmc.4irtechnologies.xyz/api","/settings"),[s,a]=(0,t.useState)(""),[n,d]=(0,t.useState)({}),h=(0,r.useRouter)(),m=()=>{o.Z.get(e).then(e=>{let s=e.data.data[0];d(s)}).catch(e=>{console.log(e)})},[u,v]=t.useState(!0);(0,t.useEffect)(()=>{m(),a(h.asPath)},[h]),t.useEffect(()=>{let e=document.getElementById("navbar");document.addEventListener("scroll",()=>{window.scrollY>170?e.classList.add("is-sticky"):e.classList.remove("is-sticky")})});let g=u?"collapse navbar-collapse":"collapse navbar-collapse show",x=u?"navbar-toggler navbar-toggler-right collapsed":"navbar-toggler navbar-toggler-right";return(0,i.jsx)(i.Fragment,{children:(0,i.jsxs)("header",{className:"header-area fixed-top",children:[(0,i.jsx)(c.Z,{}),(0,i.jsx)("div",{className:"nav-area",children:(0,i.jsx)("div",{id:"navbar",className:"navbar-area",children:(0,i.jsx)("div",{className:"main-nav",children:(0,i.jsx)("nav",{className:"navbar navbar-expand-md navbar-light",children:(0,i.jsxs)("div",{className:"container",children:[(0,i.jsx)(l(),{href:"/",className:"navbar-brand",children:(0,i.jsx)("img",{src:"/img/edmc-logo.jpeg",style:{width:"60px",height:"60px",objectFit:"contain"},alt:"logo"})}),(0,i.jsxs)("button",{onClick:()=>{v(!u)},className:x,type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:[(0,i.jsx)("span",{className:"icon-bar top-bar"}),(0,i.jsx)("span",{className:"icon-bar middle-bar"}),(0,i.jsx)("span",{className:"icon-bar bottom-bar"})]}),(0,i.jsx)("div",{className:g,id:"navbarSupportedContent",children:(0,i.jsxs)("ul",{className:"navbar-nav m-auto",children:[(0,i.jsx)("li",{className:"nav-item",children:(0,i.jsx)(l(),{href:"/",className:"nav-link",children:"Home"})}),(0,i.jsx)("li",{className:"nav-item",children:(0,i.jsx)(l(),{href:"/about",className:"nav-link ".concat("/about/"==s&&"active"),children:"About"})}),(0,i.jsx)("li",{className:"nav-item",children:(0,i.jsx)(l(),{href:"/messages",className:"nav-link ".concat("/messages/"==s&&"active"),children:"Messages"})}),(0,i.jsx)("li",{className:"nav-item",children:(0,i.jsx)(l(),{href:"/health-packages",className:"nav-link ".concat("/health-packages/"==s&&"active"),children:"Health Packages"})}),(0,i.jsx)("li",{className:"nav-item",children:(0,i.jsx)(l(),{href:"/services-2",className:"nav-link",children:"Services "})}),(0,i.jsx)("li",{className:"nav-item",children:(0,i.jsx)(l(),{href:"/videos",className:"nav-link ".concat("/videos/"==s&&"active"),children:"Videos"})}),(0,i.jsx)("li",{className:"nav-item"}),(0,i.jsx)("li",{className:"nav-item",children:(0,i.jsx)(l(),{href:"photo-gallery",className:"nav-link",children:"Photo Gallery "})}),(0,i.jsx)("li",{className:"nav-item",children:(0,i.jsx)(l(),{href:"certifications",className:"nav-link",children:"Certifications "})}),(0,i.jsx)("li",{className:"nav-item",children:(0,i.jsx)(l(),{href:"/contact/",className:"nav-link ".concat("/contact/"==s&&"active"),children:"Contact"})})]})}),(0,i.jsx)("div",{className:"others-option",children:(0,i.jsx)("div",{className:"subscribe",children:(0,i.jsx)(l(),{href:"".concat("https://edmc.4irtechnologies.xyz","/medical-verification"),className:"default-btn",children:"Medical Verification"})})})]})})})})})]})})}},9026:function(e,s,a){"use strict";a.r(s);var i=a(5893);a(7294);var t=a(3827),r=a(8915);a(6519);var n=a(5171),l=a(2546),c=a(67);s.default=()=>(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.Z,{}),(0,i.jsx)(r.Z,{pageTitle:"Services Details",homePageUrl:"/",homePageText:"Home",activePageText:"Services Details",imgClass:"bg-1"}),(0,i.jsx)("div",{className:"services-details-area ptb-100",children:(0,i.jsxs)("div",{className:"container",children:[(0,i.jsxs)("div",{className:"row",children:[(0,i.jsx)("div",{className:"col-lg-6",children:(0,i.jsx)("div",{className:"services-img mb-4",children:(0,i.jsx)("img",{src:"/img/service-details/service-details1.jpg",alt:"Image"})})}),(0,i.jsx)("div",{className:"col-lg-6",children:(0,i.jsxs)(l.tq,{slidesPerView:1,pagination:{clickable:!0},modules:[c.tl],className:"services-item-wrap",children:[(0,i.jsx)(l.o5,{children:(0,i.jsx)("div",{className:"services-item",children:(0,i.jsx)("img",{src:"/img/service-details/service-details2.jpg",alt:"Image",className:"w-100"})})}),(0,i.jsx)(l.o5,{children:(0,i.jsx)("div",{className:"services-item",children:(0,i.jsx)("img",{src:"/img/service-details/service-details3.jpg",alt:"Image",className:"w-100"})})}),(0,i.jsx)(l.o5,{children:(0,i.jsx)("div",{className:"services-item",children:(0,i.jsx)("img",{src:"/img/service-details/service-details4.jpg",alt:"Image",className:"w-100"})})})]})})]}),(0,i.jsxs)("div",{className:"services-details-text",children:[(0,i.jsx)("h2",{children:"Our Healthcare Service"}),(0,i.jsx)("p",{children:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum not only five centuries, but also the leap into electronic typesetting, remaining essentiall."}),(0,i.jsx)("p",{children:"There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc. this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with"}),(0,i.jsx)("p",{children:"There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc generators on the Internet tend to repeat predefined chunks as necessary, making this the first generator."})]}),(0,i.jsx)("div",{className:"scrives-item-2 mt-4 ",children:(0,i.jsxs)("div",{className:"row align-items-center",children:[(0,i.jsx)("div",{className:"col-lg-4",children:(0,i.jsx)("div",{className:"services-img",children:(0,i.jsx)("img",{src:"/img/service-details/service-details5.jpg",alt:"Image"})})}),(0,i.jsxs)("div",{className:"col-lg-8",children:[(0,i.jsx)("h3",{children:"Cardiac Arrhythmia"}),(0,i.jsx)("p",{children:"There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc generators on the Internet tend to repeat predefined chunks as necessary, making this the first generator dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks."})]})]})}),(0,i.jsx)("div",{className:"scrives-item-3 mt-4",children:(0,i.jsxs)("div",{className:"row align-items-center",children:[(0,i.jsx)("div",{className:"col-lg-6",children:(0,i.jsx)("div",{className:"social",children:(0,i.jsxs)("ul",{className:"social-link",children:[(0,i.jsx)("li",{children:(0,i.jsx)("a",{href:"https://www.facebook.com/",target:"_blank",children:(0,i.jsx)("i",{className:"bx bxl-facebook"})})}),(0,i.jsx)("li",{children:(0,i.jsx)("a",{href:"https://www.twitter.com/",target:"_blank",children:(0,i.jsx)("i",{className:"bx bxl-twitter"})})}),(0,i.jsx)("li",{children:(0,i.jsx)("a",{href:"https://www.pinterest.com/",target:"_blank",children:(0,i.jsx)("i",{className:"bx bxl-pinterest-alt"})})}),(0,i.jsx)("li",{children:(0,i.jsx)("a",{href:"https://www.instagram.com/",target:"_blank",children:(0,i.jsx)("i",{className:"bx bxl-instagram"})})})]})})}),(0,i.jsx)("div",{className:"col-lg-6",children:(0,i.jsx)("div",{className:"share",children:(0,i.jsxs)("a",{href:"#",children:[(0,i.jsx)("i",{className:"bx bx-share-alt"})," Share"]})})})]})})]})}),(0,i.jsx)(n.Z,{})]})}},function(e){e.O(0,[1664,4827,2546,8997,9774,2888,179],function(){return e(e.s=3757)}),_N_E=e.O()}]);