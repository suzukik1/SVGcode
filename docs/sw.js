if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let s=Promise.resolve();return r[e]||(s=new Promise((async s=>{if("document"in self){const r=document.createElement("script");r.src=e,document.head.appendChild(r),r.onload=s}else importScripts(e),s()}))),s.then((()=>{if(!r[e])throw new Error(`Module ${e} didn’t register its module`);return r[e]}))},s=(s,r)=>{Promise.all(s.map(e)).then((e=>r(1===e.length?e[0]:e)))},r={require:Promise.resolve(s)};self.define=(s,a,i)=>{r[s]||(r[s]=Promise.resolve().then((()=>{let r={};const f={uri:location.origin+s.slice(1)};return Promise.all(a.map((s=>{switch(s){case"exports":return r;case"module":return f;default:return e(s)}}))).then((e=>{const s=i(...e);return r.default||(r.default=s),r}))})))}}define("./sw.js",["./workbox-d236bde4"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/colorworker.a03fa2f5.js",revision:"897cba7f2bb3aa4066de07f61ab7f511"},{url:"assets/de.58feef74.js",revision:"68b329da9893e34099c7d8ad5cb9c940"},{url:"assets/directory-open.1e94465d.js",revision:"dae87d4c77fc76836bc8776282078dd0"},{url:"assets/directory-open.2fe4b6a5.js",revision:"0904e4f1f707b16981dda0785811a716"},{url:"assets/directory-open.91239a8f.js",revision:"3704c8033407dacd2f83782fd94d61e8"},{url:"assets/en-US.98e543f1.js",revision:"ef4d8b9c825b33578681dc2af2582fb6"},{url:"assets/file-open.05d00c00.js",revision:"4131ab234075af3fd1c9306cd6c7a017"},{url:"assets/file-open.1fe7b44c.js",revision:"d51b4be21a22ab437492eb0a4ad3620b"},{url:"assets/file-open.c1794569.js",revision:"3082c21e08091af37671a706aca8146f"},{url:"assets/file-save.72f7afaf.js",revision:"6284d014eb4142c9a049882c953521e7"},{url:"assets/file-save.f4966a97.js",revision:"646357c9f2a1aa5d8e4ac873e9b4a4cb"},{url:"assets/file-save.fb4972a3.js",revision:"c1d532eea8195b06c0d5fb70d420e0a4"},{url:"assets/index.7a2234ee.js",revision:"6aa07faa2e68cff637b884f44c7f77d3"},{url:"assets/index.cc28fa2c.css",revision:"69347a853dd90c95884f9ea8078f4b04"},{url:"assets/monochromeworker.315b8f93.js",revision:"69cacfdf860f29ae0a7f4c25be64b988"},{url:"assets/svgoworker.1258d8a5.js",revision:"c9bab669446af581832b2da955384277"},{url:"assets/vendor.79189a84.js",revision:"cfe0d3e7abdcb670020ef5a54462a13b"},{url:"index.html",revision:"5eb326e4c95aa827693a18f995c7185e"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
//# sourceMappingURL=sw.js.map
