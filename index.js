import{S as m,i as c}from"./assets/vendor-5ObWk2rO.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&o(n)}).observe(document,{childList:!0,subtree:!0});function s(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(e){if(e.ep)return;e.ep=!0;const r=s(e);fetch(e.href,r)}})();function h(a){const t="https://pixabay.com/api/",s="45109890-d15cee52eedc615dd4ac8bedf",o=new URLSearchParams({key:s,q:a,image_type:"photo",orientation:"horizontal",safesearch:!0});return fetch(`${t}?${o}`).then(e=>{if(!e.ok)throw new Error(e.status);return e.json()}).catch(console.log)}const l=document.querySelector(".card-container"),d=document.querySelector(".js-loader");l.addEventListener("click",a=>a.preventDefault());function g(){d.style.display="inline-block"}function i(){d.style.display="none"}function y(a){let t="";a.map(({webformatURL:o,largeImageURL:e,tags:r,likes:n,views:f,comments:u,downloads:p})=>{t+=`<li class="list-group-item"><div class="search-card">
   <div class="card-img-box">
     <a clas="card-link" href="${e}"><img class="card-img" src="${o}" alt="${r}"></a>
   </div>
   <div class="card-box-text">
     <p class="card-text">Likes<br><span>${n}</span></p>
     <p class="card-text">Views<br><span>${f}</span></p>
     <p class="card-text">Comments<br><span>${u}</span></p>
     <p class="card-text">Downloads<br><span>${p}</span></p>
   </div>
</div></li>`}).join(""),l.innerHTML=t,new m(".card-container a",{captionsData:"alt",captionDelay:250,overlayOpacity:.9}).refresh()}const b=document.querySelector(".js-form-container");b.addEventListener("submit",L);function L(a){a.preventDefault(),g();const t=a.currentTarget,s=t.elements.search.value.toLowerCase().trim();if(!s){c.error({message:"Please enter the data in the input field",position:"topRight",messageColor:"#ffffff",backgroundColor:"#EF4040"}),i();return}h(s).then(o=>(o.hits.length||c.error({message:"Sorry, there are no images matching<br>your search query. Please try again!",position:"topRight",messageColor:"#ffffff",backgroundColor:"#EF4040"}),o)).then(o=>{y(o.hits)}).catch(console.log).finally(()=>{i(),t.reset()})}
//# sourceMappingURL=index.js.map
