import{s as O,A as S,S as L,N as x,K as P,M as $}from"./assets/vendor-12e09cae.js";(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))i(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function r(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(t){if(t.ep)return;t.ep=!0;const o=r(t);fetch(t.href,o)}})();var f=document.querySelectorAll(".tooltip span");window.onmousemove=function(e){for(var n=e.clientX+20+"px",r=e.clientY+20+"px",i=0;i<f.length;i++)f[i].style.top=r,f[i].style.left=n};const q={threshold:[.1]},C=new IntersectionObserver(I,q);document.querySelectorAll("section").forEach(e=>C.observe(e));function I(e){e.forEach(n=>{n.isIntersecting?n.target.classList.add("in-view"):n.target.classList.remove("in-view")})}const m=window.devicePixelRatio>=2?2:1,h=document.body.classList.contains("nowebp")?"jpg":"webp";window.addEventListener("resize",()=>{M().then(u.refresh()).catch(e=>console.error(e))});const g=[{id:1,name:"WatchCharm",alt:"Premium watches collections"},{id:2,name:"StarlightStudio",alt:"Improve your business"},{id:4,name:"Get SH",alt:"Get body in shape, Stay healthy"},{id:5,name:"Fresh HB",alt:"Fresh harvest box helper"},{id:6,name:"Chego",alt:"Jewellery for special"},{id:7,name:"MIMINO hotel",alt:"Great food available to everyone"},{id:8,name:"Ukrainian DO",alt:"Reviving the traditional artistry"},{id:9,name:"OV Diet",alt:"Organic vegetables to your diet today"},{id:10,name:"Power Pulse",alt:"Transforming your body shape"},{id:11,name:"MY Finances",alt:"Manage Your Finances Masterfully"},{id:12,name:"L English",alt:"Joing and learning Eanglish with us"}],E=[{id:11},{id:12},{id:9},{id:5},{id:10},{id:7},{id:6},{id:11},{id:1},{id:8},{id:2},{id:9},{id:4},{id:5},{id:12},{id:6},{id:11}],v=E.slice(3,17);let w="";function b(e,n,r,i,t){let o=t==="jpg"?"./img/covers/project":"https://raw.githubusercontent.com/StasAstenenko/js-gurus/main/src/img/covers/project";w=n.reduce((s,{id:a})=>s+=`<li class="card-of-project"><a class="tooltip" href="${o}${a.toString().padStart(2,"0")}pc@${i}.${t}"><img src="${o}${a.toString().padStart(2,"0")}${r}@${i}.${t}" alt="${e.find(p=>p.id===a).name}"><span>${e.find(p=>p.id===a).alt}</span></a></li>`,""),document.querySelector(".covers-ul").innerHTML=w}async function M(){window.innerWidth<768&&b(g,v,"m",m,h),window.innerWidth>1439?b(g,E,"pc",m,h):b(g,v,"t",m,h)}M();const u=new O(".card-of-project a",{captionsData:"alt",captionDelay:250});u.on("show.simplelightbox",j);u.on("close.simplelightbox",j);u.on("error.simplelightbox",e=>console.error(e));function j(){document.querySelector(".section-covers").classList.toggle("in-view")}new S(".accordion-container",{duration:600,showMultiple:!1});const l=document.querySelector(".btn-for-swiper-prev"),c=document.querySelector(".btn-for-swiper-next"),N=document.querySelector(".prj-btn");N.addEventListener("click",function(){const e="https://stasastenenko.github.io/js-gurus/";window.open(e,"_blank")});function y(e){e.isBeginning?(l.disabled=!0,l.classList.add("disabled")):(l.disabled=!1,l.classList.remove("disabled")),e.isEnd?(c.disabled=!0,c.classList.add("disabled")):(c.disabled=!1,c.classList.remove("disabled"))}new L(".projects-swiper",{slidesPerView:1,keyboard:{enabled:!0,onlyInViewport:!1},mousewheel:{invert:!0},modules:[x,P,$],navigation:{nextEl:".btn-for-swiper-next",prevEl:".btn-for-swiper-prev"},on:{init:function(){y(this)},slideChange:function(){y(this)}}});const V=document.querySelector(".benefits-list");let d=null;V.addEventListener("click",e=>{if(e.preventDefault(),e.target.closest("li")===null)return;const r=e.target.closest("li").innerHTML;d&&d.close(),d=basicLightbox.create(`<div class="modal-content">${r}</div>`),d.show()});const A=new S(".ac-container-about",{showMultiple:!0,duration:600,onOpen:function(e){e.querySelector(".ac-about-svg").style.transform="rotate(180deg)"},onClose:function(e){e.querySelector(".ac-about-svg").style.transform="rotate(0deg)"}});A.open(0);new L(".about-swiper",{slidesPerView:6,breakpoints:{320:{slidesPerView:2},768:{slidesPerView:3},1440:{slidesPerView:6}},loop:!0,keyboard:{enabled:!0,onlyInViewport:!0},modules:[x,P],navigation:{nextEl:".swiper-button-next"},direction:"horizontal"});
//# sourceMappingURL=commonHelpers.js.map