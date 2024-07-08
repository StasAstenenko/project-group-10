import{s as N,A,i as x,a as R,S as V,N as O,K as j,b as F}from"./assets/vendor-6442acc6.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))o(n);new MutationObserver(n=>{for(const i of n)if(i.type==="childList")for(const r of i.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&o(r)}).observe(document,{childList:!0,subtree:!0});function s(n){const i={};return n.integrity&&(i.integrity=n.integrity),n.referrerPolicy&&(i.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?i.credentials="include":n.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function o(n){if(n.ep)return;n.ep=!0;const i=s(n);fetch(n.href,i)}})();const _="https://portfolio-js.b.goit.study/api";async function H(){try{const e=await fetch(`${_}/reviews`);if(!e.ok)throw new Error("Failed to fetch reviews");return await e.json()}catch(e){throw console.error("Error fetching reviews:",e),e}}var y=document.querySelectorAll(".tooltip span");window.onmousemove=function(e){for(var t=e.clientX+20+"px",s=e.clientY+20+"px",o=0;o<y.length;o++)y[o].style.top=s,y[o].style.left=t};const W={threshold:[.1]},z=new IntersectionObserver(U,W);document.querySelectorAll("section").forEach(e=>z.observe(e));function U(e){e.forEach(t=>{t.isIntersecting?t.target.classList.add("in-view"):t.target.classList.remove("in-view")})}const b=window.devicePixelRatio>=2?2:1,L=document.body.classList.contains("nowebp")?"jpg":"webp";window.addEventListener("resize",()=>{D().then(g.refresh()).catch(e=>console.error(e))});const E=[{id:1,name:"WatchCharm",alt:"Premium watches collections"},{id:2,name:"StarlightStudio",alt:"Improve your business"},{id:4,name:"Get SH",alt:"Get body in shape, Stay healthy"},{id:5,name:"Fresh HB",alt:"Fresh harvest box helper"},{id:6,name:"Chego",alt:"Jewellery for special"},{id:7,name:"MIMINO hotel",alt:"Great food available to everyone"},{id:8,name:"Ukrainian DO",alt:"Reviving the traditional artistry"},{id:9,name:"OV Diet",alt:"Organic vegetables to your diet today"},{id:10,name:"Power Pulse",alt:"Transforming your body shape"},{id:11,name:"MY Finances",alt:"Manage Your Finances Masterfully"},{id:12,name:"L English",alt:"Joing and learning Eanglish with us"}],$=[{id:11},{id:12},{id:9},{id:5},{id:10},{id:7},{id:6},{id:11},{id:1},{id:8},{id:2},{id:9},{id:4},{id:5},{id:12},{id:6},{id:11}],B=$.slice(3,17);let C="";function S(e,t,s,o,n){let i=n==="jpg"?"./img/covers/project":"https://raw.githubusercontent.com/StasAstenenko/js-gurus/main/src/img/covers/project";C=t.reduce((r,{id:l})=>r+=`<li class="card-of-project"><a class="tooltip" href="${i}${l.toString().padStart(2,"0")}pc@${o}.${n}"><img src="${i}${l.toString().padStart(2,"0")}${s}@${o}.${n}" alt="${e.find(c=>c.id===l).name}"><span>${e.find(c=>c.id===l).alt}</span></a></li>`,""),document.querySelector(".covers-ul").innerHTML=C}async function D(){window.innerWidth<768&&S(E,B,"m",b,L),window.innerWidth>1439?S(E,$,"pc",b,L):S(E,B,"t",b,L)}D();const g=new N(".card-of-project a",{captionsData:"alt",captionDelay:250});g.on("show.simplelightbox",T);g.on("close.simplelightbox",T);g.on("error.simplelightbox",e=>console.error(e));function T(){document.querySelector(".section-covers").classList.toggle("in-view")}new A(".accordion-container",{duration:600,showMultiple:!1});const G=async({email:e,comment:t})=>{const s="https://portfolio-js.b.goit.study/api/requests",{data:o}=await R.post(s,{email:e,comment:t});return o},h=document.querySelector(".js-submit-form"),[v,f]=h,q=document.querySelector(".valid-email-text"),M=document.querySelector(".invalid-email-text"),I=document.querySelector(".invalid-comments-text"),a={valid:"valid-input",invalid:"invalid-input",isVisible:"is-visible"},J=e=>{const s=/^\w+(\.\w+)?@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/.test(e);return s?(v.classList.add(a.valid),q.classList.add(a.isVisible)):(v.classList.add(a.invalid),M.classList.add(a.isVisible)),s},K=e=>(e?f.classList.add(a.valid):(f.classList.add(a.invalid),I.classList.add(a.isVisible)),!!e),Y=e=>{const t=e.name;t==="userEmail"&&(q.classList.remove(a.isVisible),M.classList.remove(a.isVisible)),t==="userComments"&&I.classList.remove(a.isVisible),e.classList.remove(a.valid),e.classList.remove(a.invalid)},Z=()=>{[q,M,I].forEach(s=>{s.classList.remove(a.isVisible)}),[v,f].forEach(s=>{s.classList.remove(a.valid),s.classList.remove(a.invalid)})},k="formData",d=ee()||{userEmail:"",userComments:""};v.value=d.userEmail;f.value=d.userComments;h.addEventListener("input",e=>{Y(e.target);const{name:t,value:s}=e.target;d[t]=s.trim(),Q(d)});h.addEventListener("submit",X);async function X(e){e.preventDefault();const{userEmail:t,userComments:s}=d,o=J(t),n=K(s);if(!(!o||!n))try{const i=await G({email:t,comment:s});openModalWithData(i),te()}catch(i){x.error({title:"Error",message:i.message,position:"topRight"})}}function Q(e,t=k){localStorage.setItem(t,JSON.stringify(e))}function ee(e=k){return JSON.parse(localStorage.getItem(e))}function te(e=k){localStorage.removeItem(e),h.reset(),Z(),d.userEmail="",d.userComments=""}const w=document.querySelector(".header-list"),se=document.querySelector(".header-menu"),ie=document.querySelector(".header-menu-container"),ne=document.querySelector(".header-link");se.addEventListener("click",e=>{e.preventDefault(),w.classList.toggle("dropdown-menu")});ne.addEventListener("click",e=>{w.classList.remove("dropdown-menu")});document.addEventListener("click",function(e){!ie.contains(e.target)&&w.classList.contains("dropdown-menu")&&w.classList.remove("dropdown-menu")});document.addEventListener("DOMContentLoaded",()=>{const e=document.getElementById("modal2"),t=document.getElementById("burger-icon"),s=document.getElementById("closeModal2Btn"),o=document.querySelectorAll(".nav-link, .benefits-link"),n=()=>{e.style.display="flex",setTimeout(()=>e.style.opacity="1",10)},i=()=>{e.style.opacity="0",setTimeout(()=>e.style.display="none",250)};t.addEventListener("click",n),s.addEventListener("click",i),window.addEventListener("click",r=>{r.target===e&&i()}),window.addEventListener("keydown",r=>{r.key==="Escape"&&i()}),o.forEach(r=>{r.addEventListener("click",l=>{l.preventDefault();const c=l.target.getAttribute("href").substring(1);document.getElementById(c).scrollIntoView({behavior:"smooth"}),modal1.style.display==="flex"&&closeModal1(),e.style.display==="flex"&&i()})})});const u=document.querySelector(".btn-for-swiper-prev"),m=document.querySelector(".btn-for-swiper-next"),oe=document.querySelector(".prj-btn");oe.addEventListener("click",function(){const e="https://stasastenenko.github.io/js-gurus/";window.open(e,"_blank")});function P(e){e.isBeginning?(u.disabled=!0,u.classList.add("disabled")):(u.disabled=!1,u.classList.remove("disabled")),e.isEnd?(m.disabled=!0,m.classList.add("disabled")):(m.disabled=!1,m.classList.remove("disabled"))}new V(".projects-swiper",{slidesPerView:1,keyboard:{enabled:!0,onlyInViewport:!1},modules:[O,j],navigation:{nextEl:".btn-for-swiper-next",prevEl:".btn-for-swiper-prev"},on:{init:function(){P(this)},slideChange:function(){P(this)}}});function re(e){for(let t=e.length-1;t>0;t--){const s=Math.floor(Math.random()*(t+1));[e[t],e[s]]=[e[s],e[t]]}}async function ae(){const e=document.querySelector(".swiper-wrapper-reviews");try{const t=await H();if(!t.length){x.error({title:"Error",message:"Not found",position:"topRight"});return}re(t),e.innerHTML="",t.forEach(i=>{const r=document.createElement("li");r.classList.add("swiper-slide","swiper-slide-reviews"),r.innerHTML=`
        <div class="review-content">
          <img src="${i.avatar_url}" alt="${i.author}" />
          <div class="review-text">
            <p class="review-author">${i.author}</p>
            <p class="review-comment">${i.review}</p>
          </div>
        </div>
      `,e.appendChild(r)});const s=new V(".swiper-review",{slidesPerView:1,spaceBetween:20,loop:!1,navigation:{nextEl:".swiper-button-next-reviews",prevEl:".swiper-button-prev-reviews"},keyboard:{enabled:!0},speed:700,breakpoints:{768:{slidesPerView:2,spaceBetween:16},1024:{slidesPerView:2,spaceBetween:16},1440:{slidesPerView:4,spaceBetween:20}}});s.on("slideChange",()=>{const i=s.isBeginning,r=s.isEnd,l=document.querySelector(".swiper-button-prev-reviews"),c=document.querySelector(".swiper-button-next-reviews");l&&c&&(l.disabled=i,c.disabled=r)});const o=document.querySelector(".swiper-button-prev-reviews"),n=document.querySelector(".swiper-button-next-reviews");o&&n&&(o.disabled=s.isBeginning,n.disabled=s.isEnd)}catch(t){x.error({title:"Error",message:"Failed to fetch reviews: "+t.message,position:"topRight"})}}document.addEventListener("DOMContentLoaded",()=>{ae()});const le=document.querySelector(".benefits-list");let p=null;le.addEventListener("click",e=>{if(e.preventDefault(),e.target.closest("li")===null)return;const s=e.target.closest("li").innerHTML;p&&p.close(),p=F.create(`<div class="modal-content">${s}</div>`),p.show()});const ce=new A(".ac-container-about",{showMultiple:!0,duration:600,onOpen:function(e){e.querySelector(".ac-about-svg").style.transform="rotate(180deg)"},onClose:function(e){e.querySelector(".ac-about-svg").style.transform="rotate(0deg)"}});ce.open(0);new V(".about-swiper",{slidesPerView:6,breakpoints:{320:{slidesPerView:2},768:{slidesPerView:3},1440:{slidesPerView:6}},loop:!0,keyboard:{enabled:!0,onlyInViewport:!0},modules:[O,j],navigation:{nextEl:".swiper-button-next"},direction:"horizontal"});
//# sourceMappingURL=commonHelpers.js.map
