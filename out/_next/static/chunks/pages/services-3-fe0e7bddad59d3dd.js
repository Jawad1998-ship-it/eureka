(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9355],{1500:function(e,s,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/services-3",function(){return i(1899)}])},8915:function(e,s,i){"use strict";var a=i(5893);i(7294);var c=i(1664),l=i.n(c);s.Z=e=>{let{pageTitle:s,homePageUrl:i,homePageText:c,activePageText:r,imgClass:n}=e;return(0,a.jsx)(a.Fragment,{children:(0,a.jsx)("div",{className:"page-title-area ".concat(n),children:(0,a.jsx)("div",{className:"d-table",children:(0,a.jsx)("div",{className:"d-table-cell",children:(0,a.jsx)("div",{className:"container",children:(0,a.jsxs)("div",{className:"page-title-content",children:[(0,a.jsx)("h2",{children:s}),(0,a.jsxs)("ul",{children:[(0,a.jsx)("li",{children:(0,a.jsx)(l(),{href:i,children:c})}),(0,a.jsx)("li",{className:"active",children:r})]})]})})})})})})}},6519:function(e,s,i){"use strict";var a=i(5893);i(7294),s.Z=()=>(0,a.jsx)(a.Fragment,{children:(0,a.jsx)("div",{className:"subscribe-area",children:(0,a.jsx)("div",{className:"container",children:(0,a.jsxs)("div",{className:"row align-items-center",children:[(0,a.jsxs)("div",{className:"col-lg-6","data-aos":"fade-in","data-aos-delay":"200","data-aos-duration":"1200",children:[(0,a.jsx)("h2",{children:"Subscribe Now"}),(0,a.jsx)("p",{children:"Get our latest news & update regularly"})]}),(0,a.jsx)("div",{className:"col-lg-6",children:(0,a.jsxs)("form",{className:"newsletter-form","data-aos":"fade-in","data-aos-delay":"400","data-aos-duration":"1200",children:[(0,a.jsx)("input",{type:"email",className:"form-control",placeholder:"Enter Your Email",name:"EMAIL",required:!0}),(0,a.jsx)("button",{className:"default-btn",type:"submit",children:"Subscribe"})]})})]})})})})},3827:function(e,s,i){"use strict";var a=i(5893),c=i(7294),l=i(1163),r=i(1664),n=i.n(r),d=i(6458),t=i(6154);s.Z=()=>{let e="".concat("https://edmc.4irtechnologies.xyz/api","/settings"),[s,i]=(0,c.useState)(""),[r,o]=(0,c.useState)({}),m=(0,l.useRouter)(),h=()=>{t.Z.get(e).then(e=>{let s=e.data.data[0];o(s)}).catch(e=>{console.log(e)})},[x,j]=c.useState(!0);(0,c.useEffect)(()=>{h(),i(m.asPath)},[m]),c.useEffect(()=>{let e=document.getElementById("navbar");document.addEventListener("scroll",()=>{window.scrollY>170?e.classList.add("is-sticky"):e.classList.remove("is-sticky")})});let p=x?"collapse navbar-collapse":"collapse navbar-collapse show",u=x?"navbar-toggler navbar-toggler-right collapsed":"navbar-toggler navbar-toggler-right";return(0,a.jsx)(a.Fragment,{children:(0,a.jsxs)("header",{className:"header-area fixed-top",children:[(0,a.jsx)(d.Z,{}),(0,a.jsx)("div",{className:"nav-area",children:(0,a.jsx)("div",{id:"navbar",className:"navbar-area",children:(0,a.jsx)("div",{className:"main-nav",children:(0,a.jsx)("nav",{className:"navbar navbar-expand-md navbar-light",children:(0,a.jsxs)("div",{className:"container",children:[(0,a.jsx)(n(),{href:"/",className:"navbar-brand",children:(0,a.jsx)("img",{src:"/img/edmc-logo.jpeg",style:{width:"60px",height:"60px",objectFit:"contain"},alt:"logo"})}),(0,a.jsxs)("button",{onClick:()=>{j(!x)},className:u,type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:[(0,a.jsx)("span",{className:"icon-bar top-bar"}),(0,a.jsx)("span",{className:"icon-bar middle-bar"}),(0,a.jsx)("span",{className:"icon-bar bottom-bar"})]}),(0,a.jsx)("div",{className:p,id:"navbarSupportedContent",children:(0,a.jsxs)("ul",{className:"navbar-nav m-auto",children:[(0,a.jsx)("li",{className:"nav-item",children:(0,a.jsx)(n(),{href:"/",className:"nav-link",children:"Home"})}),(0,a.jsx)("li",{className:"nav-item",children:(0,a.jsx)(n(),{href:"/about",className:"nav-link ".concat("/about/"==s&&"active"),children:"About"})}),(0,a.jsx)("li",{className:"nav-item",children:(0,a.jsx)(n(),{href:"/messages",className:"nav-link ".concat("/messages/"==s&&"active"),children:"Messages"})}),(0,a.jsx)("li",{className:"nav-item",children:(0,a.jsx)(n(),{href:"/health-packages",className:"nav-link ".concat("/health-packages/"==s&&"active"),children:"Health Packages"})}),(0,a.jsx)("li",{className:"nav-item",children:(0,a.jsx)(n(),{href:"/services-2",className:"nav-link",children:"Services "})}),(0,a.jsx)("li",{className:"nav-item",children:(0,a.jsx)(n(),{href:"/videos",className:"nav-link ".concat("/videos/"==s&&"active"),children:"Videos"})}),(0,a.jsx)("li",{className:"nav-item"}),(0,a.jsx)("li",{className:"nav-item",children:(0,a.jsx)(n(),{href:"photo-gallery",className:"nav-link",children:"Photo Gallery "})}),(0,a.jsx)("li",{className:"nav-item",children:(0,a.jsx)(n(),{href:"certifications",className:"nav-link",children:"Certifications "})}),(0,a.jsx)("li",{className:"nav-item",children:(0,a.jsx)(n(),{href:"/contact/",className:"nav-link ".concat("/contact/"==s&&"active"),children:"Contact"})})]})}),(0,a.jsx)("div",{className:"others-option",children:(0,a.jsx)("div",{className:"subscribe",children:(0,a.jsx)(n(),{href:"".concat("https://edmc.4irtechnologies.xyz","/medical-verification"),className:"default-btn",children:"Medical Verification"})})})]})})})})})]})})}},1899:function(e,s,i){"use strict";i.r(s);var a=i(5893);i(7294);var c=i(3827),l=i(8915),r=i(6519),n=i(5171),d=i(1664),t=i.n(d);s.default=()=>(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(c.Z,{}),(0,a.jsx)(l.Z,{pageTitle:"Services Style Three",homePageUrl:"/",homePageText:"Home",activePageText:"Services Style Three",imgClass:"bg-2"}),(0,a.jsx)("div",{className:"second-facility-area two pt-100 pb-70",children:(0,a.jsx)("div",{className:"container",children:(0,a.jsxs)("div",{className:"row justify-content-center",children:[(0,a.jsx)("div",{className:"col-lg-4 col-sm-6",children:(0,a.jsxs)("div",{className:"second-facility-item",children:[(0,a.jsx)("img",{src:"/img/facility-img/facility-icon1.png",alt:"Image"}),(0,a.jsx)("h3",{children:"Qualified Doctors"}),(0,a.jsx)("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore."})]})}),(0,a.jsx)("div",{className:"col-lg-4 col-sm-6",children:(0,a.jsxs)("div",{className:"second-facility-item",children:[(0,a.jsx)("img",{src:"/img/facility-img/facility-icon2.png",alt:"Image"}),(0,a.jsx)("h3",{children:"Emergency Helicopter"}),(0,a.jsx)("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore."})]})}),(0,a.jsx)("div",{className:"col-lg-4 col-sm-6",children:(0,a.jsxs)("div",{className:"second-facility-item",children:[(0,a.jsx)("img",{src:"/img/facility-img/facility-icon3.png",alt:"Image"}),(0,a.jsx)("h3",{children:"Leading Technology"}),(0,a.jsx)("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore."})]})})]})})}),(0,a.jsx)("div",{className:"services-area pb-70",children:(0,a.jsxs)("div",{className:"container",children:[(0,a.jsxs)("div",{className:"section-title",children:[(0,a.jsx)("span",{className:"top-title",children:"Our Services"}),(0,a.jsx)("h2",{children:"Our Healthcare Service"}),(0,a.jsx)("p",{children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. A facilis vel consequatur tempora atque blanditiis exercitationem incidunt, alias corporis quam assumenda dicta, temporibus."})]}),(0,a.jsxs)("div",{className:"row",children:[(0,a.jsx)("div",{className:"col-lg-4 col-sm-6",children:(0,a.jsxs)("div",{className:"single-services",children:[(0,a.jsx)("span",{className:"flaticon-man"}),(0,a.jsx)("h3",{children:"Cancer Service"}),(0,a.jsx)("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore dolore"}),(0,a.jsxs)(t(),{href:"/service-details",className:"read-more",children:["Read More ",(0,a.jsx)("i",{className:"bx bx-plus"})]}),(0,a.jsx)("div",{className:"services-shape",children:(0,a.jsx)("img",{src:"/img/services-card-shape.png",alt:"Image"})})]})}),(0,a.jsx)("div",{className:"col-lg-4 col-sm-6",children:(0,a.jsxs)("div",{className:"single-services",children:[(0,a.jsx)("span",{className:"flaticon-liver"}),(0,a.jsx)("h3",{children:"Liver Transport"}),(0,a.jsx)("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore dolore"}),(0,a.jsxs)(t(),{href:"/service-details",className:"read-more",children:["Read More ",(0,a.jsx)("i",{className:"bx bx-plus"})]}),(0,a.jsx)("div",{className:"services-shape",children:(0,a.jsx)("img",{src:"/img/services-card-shape.png",alt:"Image"})})]})}),(0,a.jsx)("div",{className:"col-lg-4 col-sm-6",children:(0,a.jsxs)("div",{className:"single-services",children:[(0,a.jsx)("span",{className:"flaticon-kidney"}),(0,a.jsx)("h3",{children:"Kidney Transport"}),(0,a.jsx)("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore dolore"}),(0,a.jsxs)(t(),{href:"/service-details",className:"read-more",children:["Read More ",(0,a.jsx)("i",{className:"bx bx-plus"})]}),(0,a.jsx)("div",{className:"services-shape",children:(0,a.jsx)("img",{src:"/img/services-card-shape.png",alt:"Image"})})]})}),(0,a.jsx)("div",{className:"col-lg-4 col-sm-6",children:(0,a.jsxs)("div",{className:"single-services",children:[(0,a.jsx)("span",{className:"flaticon-heart"}),(0,a.jsx)("h3",{children:"Cardiac Arrhythmia"}),(0,a.jsx)("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore dolore"}),(0,a.jsxs)(t(),{href:"/service-details",className:"read-more",children:["Read More ",(0,a.jsx)("i",{className:"bx bx-plus"})]}),(0,a.jsx)("div",{className:"services-shape",children:(0,a.jsx)("img",{src:"/img/services-card-shape.png",alt:"Image"})})]})}),(0,a.jsx)("div",{className:"col-lg-4 col-sm-6",children:(0,a.jsxs)("div",{className:"single-services",children:[(0,a.jsx)("span",{className:"flaticon-brain"}),(0,a.jsx)("h3",{children:"Neurology Care"}),(0,a.jsx)("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore dolore"}),(0,a.jsxs)(t(),{href:"/service-details",className:"read-more",children:["Read More ",(0,a.jsx)("i",{className:"bx bx-plus"})]}),(0,a.jsx)("div",{className:"services-shape",children:(0,a.jsx)("img",{src:"/img/services-card-shape.png",alt:"Image"})})]})}),(0,a.jsx)("div",{className:"col-lg-4 col-sm-6",children:(0,a.jsxs)("div",{className:"single-services",children:[(0,a.jsx)("span",{className:"flaticon-walker"}),(0,a.jsx)("h3",{children:"Orthopedic Care"}),(0,a.jsx)("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore dolore"}),(0,a.jsxs)(t(),{href:"/service-details",className:"read-more",children:["Read More ",(0,a.jsx)("i",{className:"bx bx-plus"})]}),(0,a.jsx)("div",{className:"services-shape",children:(0,a.jsx)("img",{src:"/img/services-card-shape.png",alt:"Image"})})]})})]})]})}),(0,a.jsx)("div",{className:"second-facility-area pb-70",children:(0,a.jsx)("div",{className:"container",children:(0,a.jsxs)("div",{className:"row justify-content-center",children:[(0,a.jsx)("div",{className:"col-lg-4 col-sm-6",children:(0,a.jsxs)("div",{className:"second-facility-item",children:[(0,a.jsx)("img",{src:"/img/facility-img/facility-icon1.png",alt:"Image"}),(0,a.jsx)("h3",{children:"Qualified Doctors"}),(0,a.jsx)("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore."}),(0,a.jsxs)(t(),{href:"/service-details",className:"read-more",children:["Read More ",(0,a.jsx)("i",{className:"bx bx-plus"})]})]})}),(0,a.jsx)("div",{className:"col-lg-4 col-sm-6",children:(0,a.jsxs)("div",{className:"second-facility-item",children:[(0,a.jsx)("img",{src:"/img/facility-img/facility-icon2.png",alt:"Image"}),(0,a.jsx)("h3",{children:"Emergency Helicopter"}),(0,a.jsx)("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore."}),(0,a.jsxs)(t(),{href:"/service-details",className:"read-more",children:["Read More ",(0,a.jsx)("i",{className:"bx bx-plus"})]})]})}),(0,a.jsx)("div",{className:"col-lg-4 col-sm-6",children:(0,a.jsxs)("div",{className:"second-facility-item",children:[(0,a.jsx)("img",{src:"/img/facility-img/facility-icon3.png",alt:"Image"}),(0,a.jsx)("h3",{children:"Leading Technology"}),(0,a.jsx)("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore."}),(0,a.jsxs)(t(),{href:"/service-details",className:"read-more",children:["Read More ",(0,a.jsx)("i",{className:"bx bx-plus"})]})]})})]})})}),(0,a.jsxs)("div",{className:"prevention-area ptb-100",children:[(0,a.jsxs)("div",{className:"container-fluid",children:[(0,a.jsxs)("div",{className:"section-title",children:[(0,a.jsx)("span",{className:"top-title",children:"Prevention"}),(0,a.jsx)("h2",{children:"How To Protect Yourself"}),(0,a.jsx)("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt labore et dolore magna aliqua. Quis ipsum suspendisse"})]}),(0,a.jsxs)("div",{className:"row align-items-center",children:[(0,a.jsx)("div",{className:"col-lg-8",children:(0,a.jsx)("div",{className:"prevention-wrap",children:(0,a.jsxs)("div",{className:"row",children:[(0,a.jsx)("div",{className:"col-lg-6 col-sm-6",children:(0,a.jsxs)("div",{className:"single-prevention",children:[(0,a.jsx)("i",{className:"flaticon-hand-wash"}),(0,a.jsx)("h3",{children:"Wash Your Hands"}),(0,a.jsx)("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor aliqua. ipsum utislen consectetur"})]})}),(0,a.jsx)("div",{className:"col-lg-6 col-sm-6",children:(0,a.jsxs)("div",{className:"single-prevention",children:[(0,a.jsx)("i",{className:"flaticon-medical-mask"}),(0,a.jsx)("h3",{children:"Use Face Mask"}),(0,a.jsx)("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor aliqua. ipsum utislen consectetur"})]})}),(0,a.jsx)("div",{className:"col-lg-6 col-sm-6",children:(0,a.jsxs)("div",{className:"single-prevention",children:[(0,a.jsx)("i",{className:"flaticon-stay-home"}),(0,a.jsx)("h3",{children:"Stay At Home"}),(0,a.jsx)("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor aliqua. ipsum utislen consectetur"})]})}),(0,a.jsx)("div",{className:"col-lg-6 col-sm-6",children:(0,a.jsxs)("div",{className:"single-prevention",children:[(0,a.jsx)("i",{className:"flaticon-alcohol-gel"}),(0,a.jsx)("h3",{children:"Use Hand Sanitizer"}),(0,a.jsx)("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor aliqua. ipsum utislen consectetur"})]})}),(0,a.jsx)("div",{className:"col-lg-6 col-sm-6",children:(0,a.jsxs)("div",{className:"single-prevention",children:[(0,a.jsx)("i",{className:"flaticon-protection"}),(0,a.jsx)("h3",{children:"Avoid Close Contact"}),(0,a.jsx)("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor aliqua. ipsum utislen consectetur"})]})}),(0,a.jsx)("div",{className:"col-lg-6 col-sm-6",children:(0,a.jsxs)("div",{className:"single-prevention",children:[(0,a.jsx)("i",{className:"flaticon-washing-hands"}),(0,a.jsx)("h3",{children:"Washing Hands"}),(0,a.jsx)("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor aliqua. ipsum utislen consectetur"})]})}),(0,a.jsx)("div",{className:"col-lg-6 col-sm-6",children:(0,a.jsxs)("div",{className:"single-prevention",children:[(0,a.jsx)("i",{className:"flaticon-protection-1"}),(0,a.jsx)("h3",{children:"Don’t Touch Face"}),(0,a.jsx)("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor aliqua. ipsum utislen consectetur"})]})}),(0,a.jsx)("div",{className:"col-lg-6 col-sm-6",children:(0,a.jsxs)("div",{className:"single-prevention",children:[(0,a.jsx)("i",{className:"flaticon-gloves"}),(0,a.jsx)("h3",{children:"Use Your Gloves"}),(0,a.jsx)("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor aliqua. ipsum utislen consectetur"})]})})]})})}),(0,a.jsx)("div",{className:"col-lg-4",children:(0,a.jsxs)("div",{className:"prevention-img",children:[(0,a.jsx)("img",{src:"/img/prevention-img.png",alt:"Image"}),(0,a.jsx)("div",{className:"shape",children:(0,a.jsx)("img",{src:"/img/prevention-shape-2.png",alt:"Image"})})]})})]})]}),(0,a.jsx)("div",{className:"shape-1",children:(0,a.jsx)("img",{src:"/img/prevention-shape-1.png",alt:"Image"})}),(0,a.jsx)("div",{className:"shape-2",children:(0,a.jsx)("img",{src:"/img/prevention-shape-1.png",alt:"Image"})}),(0,a.jsx)("div",{className:"shape-3",children:(0,a.jsx)("img",{src:"/img/prevention-shape-1.png",alt:"Image"})}),(0,a.jsx)("div",{className:"shape-4",children:(0,a.jsx)("img",{src:"/img/prevention-shape-1.png",alt:"Image"})})]}),(0,a.jsx)(r.Z,{}),(0,a.jsx)(n.Z,{})]})}},function(e){e.O(0,[1664,4827,8997,9774,2888,179],function(){return e(e.s=1500)}),_N_E=e.O()}]);