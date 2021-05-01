import{f as e,e as t,a as n,o as r,s as a,c as o,p as i,t as s,b as c,d as l,g as d}from"./vendor.4693f76e.js";const u=document.querySelector("canvas"),m=document.querySelector(".fieldsets"),p=document.querySelector(".posterize"),g=document.querySelector("[for=posterize]"),h=document.querySelector(".color"),v=document.querySelector("[for=color]"),f=document.querySelector(".monochrome"),y=document.querySelector("[for=monochrome]"),L=document.querySelector("img"),w=document.querySelector(".reset-all"),b=document.querySelector(".open"),x=document.querySelector(".save"),E=document.querySelector(".copy"),S=document.querySelector(".paste"),M=document.querySelector("output"),k=document.documentElement,C=document.querySelector(".debug"),j=(e,t)=>{let n;return function(...r){clearTimeout(n),n=setTimeout((()=>{clearTimeout(n),e(...r)}),t)}};document.documentElement.style.setProperty("--100vh",`${window.innerHeight}px`),window.addEventListener("resize",j((()=>{document.documentElement.style.setProperty("--100vh",`${window.innerHeight}px`)}),250));const T=u.getContext("2d",{desynchronized:!0});T.imageSmoothingEnabled=!1;const $=()=>{const e=parseInt(X[F.scale].value,10)/100;return{width:Math.ceil(L.naturalWidth*e),height:Math.ceil(L.naturalHeight*e)}},O=()=>{let e=""+(p.checked?`url('${(()=>{const e=e=>{const t=parseInt(e.value,10),n=[];for(let r=0;r<=t;r++)n[r]=(1/t*r).toFixed(1);return n.join(",")};return`data:image/svg+xml;utf8,<svg\n      xmlns="http://www.w3.org/2000/svg"\n      xmlns:xlink="http://www.w3.org/1999/xlink"\n    >\n      <filter id="posterize">\n        <feComponentTransfer>\n          <feFuncR type="discrete" tableValues="${e(X[_.red])}" />\n          <feFuncG type="discrete" tableValues="${e(X[_.green])}" />\n          <feFuncB type="discrete" tableValues="${e(X[_.blue])}" />\n          <feFuncA type="discrete" tableValues="${e(X[_.alpha])}" />\n        </feComponentTransfer>\n      </filter>\n    </svg>`.replace(/[\r\n]/g,"").replace(/\s+/g," ").trim()})()}#posterize') `:"");for(const[t,n]of Object.entries(W)){const r=X[t];n.initial!==parseInt(r.value,10)&&(e+=`${t}(${r.value}${r.dataset.unit}) `)}return e.trim()||"none"};const N=new function(){return new Worker("/assets/monochromeworker.2398586a.js",{type:"module"})};const q=new function(){return new Worker("/assets/colorworker.2835bcff.js",{type:"module"})};const R=new function(){return new Worker("/assets/svgoworker.0bdd8685.js",{type:"module"})},U=async e=>new Promise(((t,n)=>{const r=new MessageChannel;r.port1.onmessage=({data:e})=>{r.port1.close(),e.error?n(e.error):t(e.result)},R.postMessage({svg:e},[r.port2])}));const I=(e,t,n)=>{e=e.replace(/width="\d+" /,"").replace(/height="\d+" /,""),M.classList.remove("color"),M.classList.remove("monochrome"),M.classList.add(n),M.innerHTML=e},H=async()=>{const e=M.querySelector("img");e&&URL.revokeObjectURL(e.src),M.innerHTML="";const t=document.createElement("img");t.classList.add("spinner"),t.src=URL.createObjectURL(new Blob(['<svg viewBox="0 0 57 57" xmlns="http://www.w3.org/2000/svg" stroke="currentColor"><g transform="translate(1 1)" stroke-width="2" fill="none" fill-rule="evenodd"><circle cx="5" cy="50" r="5"><animate attributeName="cy" begin="0s" dur="2.2s" values="50;5;50;50" calcMode="linear" repeatCount="indefinite"/><animate attributeName="cx" begin="0s" dur="2.2s" values="5;27;49;5" calcMode="linear" repeatCount="indefinite"/></circle><circle cx="27" cy="5" r="5"><animate attributeName="cy" begin="0s" dur="2.2s" from="5" to="5" values="5;50;50;5" calcMode="linear" repeatCount="indefinite"/><animate attributeName="cx" begin="0s" dur="2.2s" from="27" to="27" values="27;49;5;27" calcMode="linear" repeatCount="indefinite"/></circle><circle cx="49" cy="50" r="5"><animate attributeName="cy" begin="0s" dur="2.2s" values="50;50;5;50" calcMode="linear" repeatCount="indefinite"/><animate attributeName="cx" from="49" to="49" begin="0s" dur="2.2s" values="49;5;27;49" calcMode="linear" repeatCount="indefinite"/></circle></g></svg>'],{type:"image/svg+xml"})),M.append(t);const n=(()=>{const{width:e,height:t}=$();return u.width=e,u.height=t,T.clearRect(0,0,e,t),T.filter=O(),T.drawImage(L,0,0,L.naturalWidth,L.naturalHeight,0,0,e,t),T.getImageData(0,0,e,t)})();h.checked?(async e=>new Promise((async(t,n)=>{const r=new MessageChannel;r.port1.onmessage=({data:e})=>{r.port1.close(),e.error?n(e.error):t(e.result)};const a={turdsize:parseInt(X[B.turdsize].value,10)};q.postMessage({imageData:e,config:a},[r.port2])})))(n).then(U).then((e=>I(e,0,"color"))):(async e=>new Promise((async(t,n)=>{const r=new MessageChannel;r.port1.onmessage=({data:e})=>{r.port1.close(),e.error?n(e.error):t(e.result)};const a={turdsize:parseInt(X[B.turdsize].value,10)};N.postMessage({imageData:e,config:a},[r.port2])})))(n).then(U).then((e=>I(e,0,"monochrome")))};let z;const A={},P=function(e,t){if(!t)return e();if(void 0===z){const e=document.createElement("link").relList;z=e&&e.supports&&e.supports("modulepreload")?"modulepreload":"preload"}return Promise.all(t.map((e=>{if(e in A)return;A[e]=!0;const t=e.endsWith(".css"),n=t?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${e}"]${n}`))return;const r=document.createElement("link");return r.rel=t?"stylesheet":z,t||(r.as="script",r.crossOrigin=""),r.href=e,document.head.appendChild(r),t?new Promise(((e,t)=>{r.addEventListener("load",e),r.addEventListener("error",t)})):void 0}))).then((()=>e()))};const D=["en","de"];b.addEventListener("click",(async()=>{try{const t=await e({mimeTypes:["image/*"],description:"Image files"}),n=URL.createObjectURL(t);L.addEventListener("load",(()=>{URL.revokeObjectURL(n)}),{once:!0}),L.src=n}catch(t){console.error(t.name,t.message)}})),document.addEventListener("dragover",(e=>{e.preventDefault()})),document.addEventListener("dragenter",(e=>{e.preventDefault(),k.classList.add("dropenter")})),document.addEventListener("dragleave",(e=>{e.preventDefault(),e.target===document.documentElement&&k.classList.remove("dropenter")})),document.addEventListener("drop",(async e=>{e.preventDefault(),e.stopPropagation(),k.classList.remove("dropenter");const n=e.dataTransfer.items[0];if("file"===n.kind){let e;if(L.addEventListener("load",(()=>{URL.revokeObjectURL(e)}),{once:!0}),t){const t=await n.getAsFileSystemHandle();if("directory"===t.kind)return;{const n=await t.getFile();e=URL.createObjectURL(n),L.src=e}}else{const t=n.getAsFile();e=URL.createObjectURL(t),L.src=e}}})),x.addEventListener("click",(async()=>{try{const e=M.innerHTML,t=new Blob([e],{type:"image/svg+xml"});await n(t,{fileName:"",description:"SVG file"})}catch(e){console.error(e.name,e.message)}})),S.addEventListener("click",(async()=>{const e=await navigator.clipboard.read();for(const t of e)for(const e of t.types)if(e.startsWith("image/")){const n=await t.getType(e);if(!n)return;const r=URL.createObjectURL(n);return void(L.src=r)}})),E.addEventListener("click",(()=>{const e=M.innerHTML,t=new Blob([e],{type:"text/plain"});navigator.clipboard.write([new ClipboardItem({[t.type]:t})])}));const V=new class{constructor(){this.currentLanguageAndLocale=this.detectLanguageAndLocal(),this.defaultLanguage=D[0],this.translations=null}detectLanguageAndLocal(){var e;const t=localStorage.getItem("language");if(t)return JSON.parse(t);let[n,r=null]=null==(e=navigator.language)?void 0:e.split("-");n&&D.includes(n)||(n=D[0]);const a={language:n,locale:r};return localStorage.setItem("language",JSON.stringify(a)),a}async getTranslations(){const{language:e,locale:t}=this.currentLanguageAndLocale,n=(await function(e){switch(e){case"../i18n/de.js":return P((()=>import("./de.58feef74.js")),void 0);case"../i18n/en-US.js":return P((()=>import("./en-US.94f890ac.js")),void 0);default:return Promise.reject(new Error("Unknown variable dynamic import: "+e))}}(`../i18n/${e}${t?`-${t}`:""}.js`)).default;this.translations=n}t(e){return this.translations[e]}},_={red:"red",green:"green",blue:"blue",alpha:"alpha"},F={scale:"scale"},B={turdsize:"turdsize"},W={["brightness"]:{unit:"%",initial:100,min:0,max:200},["contrast"]:{unit:"%",initial:100,min:0,max:200},["grayscale"]:{unit:"%",initial:0,min:0,max:100},["hue-rotate"]:{unit:"deg",initial:0,min:0,max:360},["invert"]:{unit:"%",initial:0,min:0,max:100},["opacity"]:{unit:"%",initial:100,min:0,max:100},["saturate"]:{unit:"%",initial:100,min:0,max:200},["sepia"]:{unit:"%",initial:0,min:0,max:100}},G={[_.red]:{unit:"steps",initial:5,min:1,max:10},[_.green]:{unit:"steps",initial:5,min:1,max:10},[_.blue]:{unit:"steps",initial:5,min:1,max:10},[_.alpha]:{unit:"steps",initial:1,min:1,max:10}},J={[F.scale]:{unit:"%",initial:100,min:1,max:100}},Y={[B.turdsize]:{unit:"pixels",initial:2,min:1,max:50}},K=[{name:"svgOptions",icon:s},{name:"colorChannels",icon:c},{name:"imageSize",icon:l},{name:"imagePreprocessing",icon:d}],Q=[Object.entries(Y),Object.entries(G),Object.entries(J),Object.entries(W)],X={},Z={},ee={};let te=0,ne=0,re=null,ae=1;const oe={},ie=(e,t)=>{const n=V.t(e);return` (${e?`${t}${1===n.length?n:` ${n}`}`:t})`},se=e=>{const t=document.createElement("span");return t.classList.add("icon"),t.innerHTML=e,t},ce=(e,t,n)=>{const{unit:r,min:a,max:o,initial:i}=t,s=document.createElement("div");s.classList.add("preprocess-input");const c=document.createElement("label");c.textContent=V.t(e)||e,c.for=e;const l=document.createElement("span");Z[e]=l,l.textContent=ie(r,i);const d=document.createElement("input");X[e]=d,d.id=e,d.type="range",d.class=e,d.min=a,d.max=o,d.value=i,r&&(d.dataset.unit=r),d.addEventListener("input",(()=>{l.textContent=ie(r,d.value)})),Object.keys(_).includes(e)||Object.keys(B).includes(e),d.addEventListener("change",j((async()=>{await H()}),250));const u=document.createElement("button");u.type="button",u.textContent=V.t("reset"),u.addEventListener("click",(async()=>{d.value=i,l.textContent=ie(r,i),d.dispatchEvent(new Event("change"))})),c.append(l),c.append(d),s.append(c),s.append(u),n.append(s)};p.addEventListener("change",(async()=>{const e=!p.checked;Object.keys(_).forEach((t=>{X[t].disabled=e})),H()})),h.addEventListener("change",(async()=>{H()})),f.addEventListener("change",(async()=>{H()}));const le=async()=>{await V.getTranslations(),de(),Q.forEach(((e,t)=>{const{name:n,icon:r}=K[t],a=((e,t)=>{const n=document.createElement("fieldset");ee[e]=n;const r=document.createElement("legend"),a=se(t);return r.append(a),r.append(document.createTextNode(V.t(e))),n.append(r),n})(n,r);"colorChannels"===n?ee.colorChannels.append(p.parentNode):"svgOptions"===n&&(ee.svgOptions.append(h.parentNode),ee.svgOptions.append(f.parentNode));for(const[o,i]of e)ce(o,i,a);m.append(a)})),m.append(w.parentNode),L.addEventListener("load",(()=>{L.width=L.naturalWidth,L.height=L.naturalHeight,H()})),L.complete&&L.dispatchEvent(new Event("load"))},de=()=>{w.textContent=V.t("resetAll"),g.textContent=V.t("posterizeInputImage"),v.textContent=V.t("colorSVG"),y.textContent=V.t("monochromeSVG"),b.innerHTML="",b.append(se(r)),b.append(document.createTextNode(V.t("openImage"))),x.innerHTML="",x.append(se(a)),x.append(document.createTextNode(V.t("saveSVG"))),E.innerHTML="",E.append(se(o)),E.append(document.createTextNode(V.t("copySVG"))),S.innerHTML="",S.append(se(i)),S.append(document.createTextNode(V.t("pasteImage"))),k.dataset.dropText=V.t("dropFileHere")};w.addEventListener("click",(async()=>{const e=(e,t,n)=>{X[e].value=n,Z[e].textContent=ie(t,n)};Q.forEach((t=>{for(const[n,r]of t)e(n,r.unit,r.initial)})),H()}));const ue=e=>(e.preventDefault(),!1),me=e=>{const t=Math.floor(e.x-te),n=Math.floor(e.y-ne);re.setAttribute("viewBox",`${-t} ${-n} ${oe.width} ${oe.height}`)};M.addEventListener("pointerdown",(e=>{e.buttons>1||(re=re||M.querySelector("svg"),re&&(re.addEventListener("dragstart",ue),pe(),te=Math.floor(e.x+oe.x),ne=Math.floor(e.y+oe.y),M.addEventListener("pointermove",me),M.style.cursor="grabbing"))})),M.addEventListener("pointerup",(e=>{re&&(M.removeEventListener("pointermove",me),re.removeEventListener("dragstart",ue),pe(),M.style.cursor="grab")}));const pe=()=>{const e=re.getAttribute("viewBox"),[t,n,r,a]=e.split(" ");oe.x=Number(t),oe.y=Number(n),oe.width=Number(r),oe.height=Number(a)};M.addEventListener("wheel",(e=>{if(e.preventDefault(),re=re||M.querySelector("svg"),!re)return;void 0===oe.width&&pe(),ae+=-.005*e.deltaY,ae=Math.min(Math.max(.1,ae),10);const t=Math.ceil(oe.width*ae),n=Math.ceil(oe.height*ae);if(t<=0||n<=0)return;const r=Math.floor(oe.x+(oe.width-t)/2),a=Math.floor(oe.y+(oe.height-n)/2);re.setAttribute("viewBox",`${r} ${a} ${t} ${n}`)})),C.addEventListener("click",(()=>{u.classList.toggle("debug")})),le();
