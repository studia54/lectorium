!function(){"use strict";var e,t={379:function(e,t,r){var n=r(6),o=r(667),c=r(357),l=(r(597),r(283));o.p8.registerPlugin(c.i);const u=document.querySelector(".js-phone-input");new l.ZP(u,{mask:"+{7} (000) 000-00-00"});const i=document.querySelector(".backdrop"),s=(document.querySelector(".header"),document.querySelector(".header-scroll"),document.querySelector(".popup.success")),d=s.querySelector(".popup-content"),y=s.querySelector(".close");document.querySelector("#wpcf7-f8-o1"),document.querySelector(".ring").querySelector(".ring__inner"),document.querySelector(".speaker-ring"),document.querySelector(".qa-ring"),new n.ZP(".gallery__list",{modules:[n.W_,n.tl],slidesPerView:1,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},pagination:{el:".gallery__pagination",clickable:!0,renderBullet:function(e,t){return`<span class="${t}"></span>`}},breakpoints:{768:{spaceBetween:21,slidesPerView:3}}});const g=window.matchMedia("(min-width: 1024px)");let m;const p=function(){if(!0!==g.matches)return!1===g.matches?q():void 0;void 0!==m&&m.destroy(!0,!0)},q=function(){m=new n.ZP(".expectations__list",{modules:[n.tl],slidesPerView:1,pagination:{el:".expectations__pagination",clickable:!0,renderBullet:function(e,t){return`<span class="${t}"></span>`}}})};g.addEventListener("change",p),p();const S=new IntersectionObserver(((e,t)=>{e.forEach((e=>{e.isIntersecting&&(e.target.classList.add("shown"),t.unobserve(e.target))}))}),{rootMargin:"0px 0px -200px"});document.querySelectorAll(".bordered").forEach((e=>S.observe(e))),Array.from(document.querySelectorAll(".accordion__trigger")).forEach((e=>{e.addEventListener("click",(()=>{e.closest(".accordion__parent").classList.toggle("show")}))})),document.querySelector(".show__content-button").addEventListener("click",(()=>{document.querySelector(".show__content").classList.add("clicked"),document.querySelector(".interview__list").classList.add("show")}));const a=()=>{i.classList.contains("show")?(i.classList.add("hide"),setTimeout((()=>{i.classList.remove("hide","show")}),300)):i.classList.add("show")};document.querySelectorAll(".more-button").forEach((e=>{e.addEventListener("click",(function(){e.closest(".mobile-menu").classList.toggle("show"),a()}))})),i.addEventListener("click",(function(){document.querySelectorAll(".mobile-menu").forEach((e=>{e.classList.remove("show")})),a()})),document.querySelectorAll(".more-button-list-item").forEach((e=>{e.addEventListener("click",(e=>{document.querySelectorAll(".mobile-menu").forEach((e=>{e.classList.remove("show")})),a()}))})),document.querySelector(".button").addEventListener("click",(function(){document.querySelectorAll(".mobile-menu").forEach((e=>{e.classList.remove("show")})),i.classList.add("hide"),setTimeout((()=>{i.classList.remove("hide","show")}),300)})),y.addEventListener("click",(()=>{d.classList.add("hide"),s.classList.add("hide"),a(),setTimeout((()=>{d.classList.remove("hide","show"),s.classList.remove("hide","show")}),300)})),window.addEventListener("scroll",(()=>{setTimeout((()=>{const e=window.scrollY;window.matchMedia("(min-width:320px)").matches&&window.matchMedia("(max-width:767px)").matches&&(e>=0&&e<=100&&(document.querySelector(".ring").style.left=`${document.querySelector(".first-screen .content").getBoundingClientRect().left+54}px`,document.querySelector(".ring").style.top="500px",document.querySelector(".ring").style.width="200px",document.querySelector(".ring").style.height="200px"),e>100&&e<=700&&(document.querySelector(".ring").style.left=`${document.querySelector(".first-screen .content").getBoundingClientRect().left+254}px`,document.querySelector(".ring").style.top="800px",document.querySelector(".ring").style.width="200px",document.querySelector(".ring").style.height="200px",document.querySelector(".ring").style.opacity="1",document.querySelector(".ring").style.transform="scale(1)"),e>700&&e<=1e3&&(document.querySelector(".ring").style.left=`${document.querySelector(".first-screen .content").getBoundingClientRect().left}px`,document.querySelector(".ring").style.top="1200px",document.querySelector(".ring").style.width="150px",document.querySelector(".ring").style.height="150px"),e>1e3&&e<=1600&&(document.querySelector(".ring").style.left=`${document.querySelector(".first-screen .content").getBoundingClientRect().left+100}px`,document.querySelector(".ring").style.top="1700px",document.querySelector(".ring").style.width="250px",document.querySelector(".ring").style.height="250px"),e>1600&&e<=2100&&(document.querySelector(".ring").style.left=`${document.querySelector(".first-screen .content").getBoundingClientRect().left+200}px`,document.querySelector(".ring").style.top="2300px",document.querySelector(".ring").style.width="100px",document.querySelector(".ring").style.height="100px"),e>2100&&e<=2400&&(document.querySelector(".ring").style.left=document.querySelector(".first-screen .content").getBoundingClientRect().left-100+"px",document.querySelector(".ring").style.top="2800px",document.querySelector(".ring").style.width="300px",document.querySelector(".ring").style.height="300px"),e>2400&&e<=2600&&(document.querySelector(".ring").style.left=`${document.querySelector(".first-screen .content").getBoundingClientRect().left+300}px`,document.querySelector(".ring").style.top="3000px",document.querySelector(".ring").style.width="200px",document.querySelector(".ring").style.height="200px"),e>2600&&e<=3100&&(document.querySelector(".ring").style.left=`${document.querySelector(".first-screen .content").getBoundingClientRect().left+100}px`,document.querySelector(".ring").style.top="3500px",document.querySelector(".ring").style.width="250px",document.querySelector(".ring").style.height="250px"),e>3100&&e<=3500&&(document.querySelector(".ring").style.left=`${document.querySelector(".first-screen .content").getBoundingClientRect().left+320}px`,document.querySelector(".ring").style.top="4100px",document.querySelector(".ring").style.width="150px",document.querySelector(".ring").style.height="150px"),e>3500&&e<=4200&&(document.querySelector(".ring").style.left=`${document.querySelector(".first-screen .content").getBoundingClientRect().left+100}px`,document.querySelector(".ring").style.top="4600px",document.querySelector(".ring").style.width="150px",document.querySelector(".ring").style.height="150px"),e>4200&&e<=4500&&(document.querySelector(".ring").style.left=`${document.querySelector(".first-screen .content").getBoundingClientRect().left+60}px`,document.querySelector(".ring").style.top="5000px",document.querySelector(".ring").style.width="250px",document.querySelector(".ring").style.height="250px"),e>4500&&e<=4800&&(document.querySelector(".ring").style.left=document.querySelector(".first-screen .content").getBoundingClientRect().left-60+"px",document.querySelector(".ring").style.top="5400px",document.querySelector(".ring").style.width="150px",document.querySelector(".ring").style.height="150px"),e>4800&&e<=5300&&(document.querySelector(".ring").style.left=document.querySelector(".first-screen .content").getBoundingClientRect().left-60+"px",document.querySelector(".ring").style.top="5800px",document.querySelector(".ring").style.width="300px",document.querySelector(".ring").style.height="300px"),e>5300&&e<=5800&&(document.querySelector(".ring").style.left=`${document.querySelector(".first-screen .content").getBoundingClientRect().left+170}px`,document.querySelector(".ring").style.top="6300px",document.querySelector(".ring").style.width="100px",document.querySelector(".ring").style.height="100px"),e>5900&&e<=6400&&(document.querySelector(".ring").style.left=document.querySelector(".first-screen .content").getBoundingClientRect().left-170+"px",document.querySelector(".ring").style.top="6700px",document.querySelector(".ring").style.width="300px",document.querySelector(".ring").style.height="300px"),e>6400&&e<=6900&&(document.querySelector(".ring").style.left=`${document.querySelector(".first-screen .content").getBoundingClientRect().left+270}px`,document.querySelector(".ring").style.top="7100px",document.querySelector(".ring").style.width="250px",document.querySelector(".ring").style.height="250px"),e>6900&&e<=7500&&(document.querySelector(".ring").style.left=document.querySelector(".first-screen .content").getBoundingClientRect().left-70+"px",document.querySelector(".ring").style.top="7500px",document.querySelector(".ring").style.width="150px",document.querySelector(".ring").style.height="150px"),e>7500&&e<=8e3&&(document.querySelector(".ring").style.left=`${document.querySelector(".first-screen .content").getBoundingClientRect().left+270}px`,document.querySelector(".ring").style.top="8100px",document.querySelector(".ring").style.width="250px",document.querySelector(".ring").style.height="250px")),window.matchMedia("(min-width:1024px)").matches&&window.matchMedia("(max-width:1439px)").matches&&(e>100&&e<=500&&(document.querySelector(".ring").style.left=`${document.querySelector(".first-screen .content").getBoundingClientRect().left+454}px`,document.querySelector(".ring").style.top="195px",document.querySelector(".ring").style.width="810px",document.querySelector(".ring").style.height="810px",document.querySelector(".ring").style.opacity="1",document.querySelector(".ring").style.transform="scale(1)"),e>4700&&e<=5700&&(document.querySelector(".ring").style.left=document.querySelector(".first-screen .content").getBoundingClientRect().left-150+"px",document.querySelector(".ring").style.top="6000px"),e>5700&&e<=6400&&(document.querySelector(".ring").style.left=`${document.querySelector(".first-screen .content").getBoundingClientRect().left+300}px`,document.querySelector(".ring").style.top="6800px"),e>6400&&e<=7200&&(document.querySelector(".ring").style.left=`${document.querySelector(".first-screen .content").getBoundingClientRect().left+700}px`,document.querySelector(".ring").style.top="7500px"),e>7200&&e<=7800&&(document.querySelector(".ring").style.left=`${document.querySelector(".first-screen .content").getBoundingClientRect().left+400}px`,document.querySelector(".ring").style.top="8000px"),e>7800&&e<=8600&&(document.querySelector(".ring").style.left=`${document.querySelector(".first-screen .content").getBoundingClientRect().left+500}px`,document.querySelector(".ring").style.top="8400px"),e>8600&&e<=9200&&(document.querySelector(".ring").style.left=`${document.querySelector(".first-screen .content").getBoundingClientRect().left+700}px`,document.querySelector(".ring").style.top="9000px")),window.matchMedia("(min-width:1440px)").matches&&(e>=0&&e<=100&&(document.querySelector(".ring").style.left=`${document.querySelector(".first-screen .content").getBoundingClientRect().left+554}px`,document.querySelector(".ring").style.top="-95px",document.querySelector(".ring").style.width="810px",document.querySelector(".ring").style.height="810px"),e>100&&e<=500&&(document.querySelector(".ring").style.left=`${document.querySelector(".first-screen .content").getBoundingClientRect().left+954}px`,document.querySelector(".ring").style.top="195px",document.querySelector(".ring").style.width="810px",document.querySelector(".ring").style.height="810px"),e>500&&e<=900&&(document.querySelector(".ring").style.left=`${document.querySelector(".first-screen .content").getBoundingClientRect().left}px`,document.querySelector(".ring").style.top="695px",document.querySelector(".ring").style.width="521px",document.querySelector(".ring").style.height="521px"),e>900&&e<=1500&&(document.querySelector(".ring").style.left=document.querySelector(".first-screen .content").getBoundingClientRect().left-100+"px",document.querySelector(".ring").style.top="1195px",document.querySelector(".ring").style.width="325px",document.querySelector(".ring").style.height="325px"),e>1500&&e<=1800&&(document.querySelector(".ring").style.left=`${document.querySelector(".first-screen .content").getBoundingClientRect().left+300}px`,document.querySelector(".ring").style.top="1495px",document.querySelector(".ring").style.width="573px",document.querySelector(".ring").style.height="573px"),e>1800&&e<=2200&&(document.querySelector(".ring").style.left=`${document.querySelector(".first-screen .content").getBoundingClientRect().left+900}px`,document.querySelector(".ring").style.top="1895px",document.querySelector(".ring").style.width="533px",document.querySelector(".ring").style.height="533px"),e>2200&&e<=2600&&(document.querySelector(".ring").style.left=`${document.querySelector(".first-screen .content").getBoundingClientRect().left+100}px`,document.querySelector(".ring").style.top="3000px",document.querySelector(".ring").style.width="391px",document.querySelector(".ring").style.height="391px",document.querySelector(".speaker-ring").classList.remove("show"),document.querySelector(".speaker-ring").style.width="780px",document.querySelector(".speaker-ring").style.height="780px",document.querySelector(".speaker-ring").style.top="-900px"),e>4600&&e<=5300&&(document.querySelector(".speaker-ring").classList.add("show"),document.querySelector(".speaker-ring").style.width="780px",document.querySelector(".speaker-ring").style.height="780px",document.querySelector(".speaker-ring").style.top="-28px",document.querySelector(".speaker-ring").style.left="-76px"),e>5300&&e<=5800&&(document.querySelector(".speaker-ring").style.top="1600px",document.querySelector(".speaker-ring").style.left="-76px",document.querySelector(".speaker-ring").style.width="780px",document.querySelector(".speaker-ring").style.height="780px"),e>7300&&e<=7700&&(document.querySelector(".speaker-ring").style.top="2600px",document.querySelector(".speaker-ring").style.left="800px",document.querySelector(".speaker-ring").style.width="480px",document.querySelector(".speaker-ring").style.height="480px"),e>8200&&e<=8600&&(document.querySelector(".speaker-ring").style.top="3300px",document.querySelector(".speaker-ring").style.left="1000px",document.querySelector(".speaker-ring").style.width="480px",document.querySelector(".speaker-ring").style.height="480px"))}),300)})),document.addEventListener("DOMContentLoaded",(()=>{window.matchMedia("(min-width:320px)").matches&&(document.querySelector(".ring").style.left=`${document.querySelector(".first-screen .content").getBoundingClientRect().left+54}px`,document.querySelector(".ring").style.opacity="1",document.querySelector(".ring").style.transform="scale(1)"),window.matchMedia("(min-width:1360px)").matches&&(document.querySelector(".ring").style.left=`${document.querySelector(".first-screen .content").getBoundingClientRect().left+554}px`,document.querySelector(".ring").style.opacity="1",document.querySelector(".ring").style.transform="scale(1)")}))}},r={};function n(e){var o=r[e];if(void 0!==o)return o.exports;var c=r[e]={exports:{}};return t[e](c,c.exports,n),c.exports}n.m=t,e=[],n.O=function(t,r,o,c){if(!r){var l=1/0;for(d=0;d<e.length;d++){r=e[d][0],o=e[d][1],c=e[d][2];for(var u=!0,i=0;i<r.length;i++)(!1&c||l>=c)&&Object.keys(n.O).every((function(e){return n.O[e](r[i])}))?r.splice(i--,1):(u=!1,c<l&&(l=c));if(u){e.splice(d--,1);var s=o();void 0!==s&&(t=s)}}return t}c=c||0;for(var d=e.length;d>0&&e[d-1][2]>c;d--)e[d]=e[d-1];e[d]=[r,o,c]},n.d=function(e,t){for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},function(){var e={179:0};n.O.j=function(t){return 0===e[t]};var t=function(t,r){var o,c,l=r[0],u=r[1],i=r[2],s=0;if(l.some((function(t){return 0!==e[t]}))){for(o in u)n.o(u,o)&&(n.m[o]=u[o]);if(i)var d=i(n)}for(t&&t(r);s<l.length;s++)c=l[s],n.o(e,c)&&e[c]&&e[c][0](),e[c]=0;return n.O(d)},r=self.webpackChunk=self.webpackChunk||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))}();var o=n.O(void 0,[459],(function(){return n(379)}));o=n.O(o)}();