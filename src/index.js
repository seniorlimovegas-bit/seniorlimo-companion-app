const destinations = {
  deals: "https://seniorlimo.com/gold-deals-market-place",
  showcase: "https://seniorlimo.com/marketplace-showcase",
  partners: "https://seniorlimo.com/business-partner-programs",
  website: "https://seniorlimo.com/"
};

const page = `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1,viewport-fit=cover">
<meta name="theme-color" content="#071d49">
<meta name="apple-mobile-web-app-capable" content="yes">
<meta name="apple-mobile-web-app-title" content="SeniorLimo">
<link rel="manifest" href="/manifest.webmanifest">
<link rel="icon" href="/icon.svg" type="image/svg+xml">
<link rel="apple-touch-icon" href="/icon.svg">
<title>SeniorLimo Companion</title>
<style>
:root{--navy:#071d49;--blue:#0d3d86;--gold:#d5a72d;--cream:#fffaf0;--white:#fff;--ink:#162039}
*{box-sizing:border-box}
html,body{margin:0;min-height:100%;font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif;background:var(--navy);color:var(--ink)}
body{min-height:100dvh;background:radial-gradient(circle at 50% -10%,#2a61b7 0,#0d3d86 30%,#071d49 70%)}
.shell{width:min(100%,560px);min-height:100dvh;margin:auto;padding:calc(24px + env(safe-area-inset-top)) 18px calc(24px + env(safe-area-inset-bottom));display:flex;flex-direction:column}
header{text-align:center;color:#fff;padding:12px 0 22px}
.shield{width:92px;height:92px;margin:auto;display:grid;place-items:center;border-radius:28% 28% 42% 42%;background:linear-gradient(145deg,#f5d36c,#b97b08);border:4px solid #ffffff88;box-shadow:0 14px 34px #0005}
.shield span{font:800 58px/1 Georgia,serif;color:var(--navy)}
h1{font:700 clamp(36px,10vw,50px)/1 Georgia,serif;margin:16px 0 7px;letter-spacing:-1px}
.gold{color:#f6cb55}
.tag{margin:0;color:#dce8ff;font-size:16px;line-height:1.45}
main{background:linear-gradient(180deg,#fff,#fffaf0);border-radius:28px;padding:22px;box-shadow:0 20px 55px #0006}
.intro{text-align:center;margin:0 4px 18px}
.intro h2{font-size:22px;margin:0 0 7px;color:var(--navy)}
.intro p{margin:0;color:#60697a;line-height:1.5}
.choices{display:grid;gap:14px}
.card{display:grid;grid-template-columns:54px 1fr 24px;align-items:center;gap:13px;text-decoration:none;border-radius:18px;padding:16px 15px;border:1px solid #dce3ef;background:#fff;color:var(--ink);box-shadow:0 7px 18px #071d4912}
.card:active{transform:scale(.985)}
.card.gold-card{background:linear-gradient(135deg,#d7aa31,#f3d477);border-color:#e6bd55;color:#071d49}
.card.blue-card{background:linear-gradient(135deg,#0b3478,#1859ad);border-color:#2867ba;color:#fff}
.icon{width:54px;height:54px;border-radius:15px;display:grid;place-items:center;background:#071d4912;font-size:27px}
.blue-card .icon{background:#ffffff18}
.copy strong{display:block;font-size:17px;margin-bottom:3px}
.copy small{display:block;line-height:1.35;opacity:.78;font-size:13px}
.arrow{font-size:27px;font-weight:700}
.install{margin-top:18px;padding-top:17px;border-top:1px solid #e5e9ef;text-align:center}
.install button{border:0;border-radius:999px;background:#edf3fc;color:var(--navy);font-weight:750;padding:12px 18px;font-size:14px}
.install p{margin:9px 0 0;color:#72798a;font-size:12px;line-height:1.4}
footer{text-align:center;color:#b9c9e8;margin-top:auto;padding-top:22px;font-size:12px}
footer a{color:#f5ca55;text-decoration:none}
</style>
</head>
<body>
<div class="shell">
<header>
<div class="shield" aria-label="SeniorLimo shield"><span>S</span></div>
<h1>Senior<span class="gold">Limo</span></h1>
<p class="tag">Local deals. Trusted businesses.<br>One simple companion.</p>
</header>
<main>
<section class="intro"><h2>Where would you like to go?</h2><p>Tap a choice below to explore SeniorLimo.</p></section>
<nav class="choices" aria-label="SeniorLimo destinations">
<a class="card gold-card" href="${destinations.deals}"><span class="icon">★</span><span class="copy"><strong>View Gold Deals</strong><small>See current savings and local offers.</small></span><span class="arrow">›</span></a>
<a class="card blue-card" href="${destinations.showcase}"><span class="icon">⌂</span><span class="copy"><strong>Marketplace Showcase</strong><small>Explore products and services from local businesses.</small></span><span class="arrow">›</span></a>
<a class="card" href="${destinations.partners}"><span class="icon">◆</span><span class="copy"><strong>Become a Gold Deal Partner</strong><small>Discover SeniorLimo business partner programs.</small></span><span class="arrow">›</span></a>
</nav>
<section class="install">
<button id="installButton" type="button">Add SeniorLimo to My Device</button>
<p id="installHelp">On iPhone or iPad: tap Share, then “Add to Home Screen.”</p>
</section>
</main>
<footer>SeniorLimo · Feel The Movement™ · <a href="${destinations.website}">SeniorLimo.com</a></footer>
</div>
<script>
if("serviceWorker" in navigator)navigator.serviceWorker.register("/sw.js");
let promptEvent;
const button=document.getElementById("installButton");
const help=document.getElementById("installHelp");
window.addEventListener("beforeinstallprompt",event=>{event.preventDefault();promptEvent=event;help.textContent="Tap the button to install SeniorLimo.";button.onclick=async()=>{promptEvent.prompt();await promptEvent.userChoice;promptEvent=null}});
button.addEventListener("click",()=>{if(!promptEvent)help.textContent="Tap your browser’s Share button, then choose “Add to Home Screen.”"});
</script>
</body>
</html>`;

const manifest = JSON.stringify({
  name:"SeniorLimo Companion",short_name:"SeniorLimo",
  description:"Gold Deals and local business showcases from SeniorLimo.",
  start_url:"/",display:"standalone",background_color:"#071d49",theme_color:"#071d49",
  icons:[{src:"/icon.svg",sizes:"any",type:"image/svg+xml",purpose:"any maskable"}]
});

const icon=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1"><stop stop-color="#f6d36b"/><stop offset="1" stop-color="#b87908"/></linearGradient></defs><rect width="512" height="512" rx="112" fill="#071d49"/><path d="M256 58 411 112v125c0 103-63 177-155 217C164 414 101 340 101 237V112z" fill="url(#g)" stroke="#fff" stroke-width="14"/><text x="256" y="340" text-anchor="middle" font-family="Georgia,serif" font-size="250" font-weight="700" fill="#071d49">S</text></svg>`;

const serviceWorker=`const CACHE="seniorlimo-v1";self.addEventListener("install",e=>e.waitUntil(caches.open(CACHE).then(c=>c.addAll(["/","/manifest.webmanifest","/icon.svg"]))));self.addEventListener("activate",e=>e.waitUntil(self.clients.claim()));self.addEventListener("fetch",e=>{if(e.request.method==="GET"&&new URL(e.request.url).origin===location.origin)e.respondWith(fetch(e.request).then(r=>{const copy=r.clone();caches.open(CACHE).then(c=>c.put(e.request,copy));return r}).catch(()=>caches.match(e.request)))});`;

export default {
  async fetch(request) {
    const path=new URL(request.url).pathname;
    if(path==="/manifest.webmanifest")return new Response(manifest,{headers:{"content-type":"application/manifest+json","cache-control":"public,max-age=3600"}});
    if(path==="/icon.svg")return new Response(icon,{headers:{"content-type":"image/svg+xml","cache-control":"public,max-age=86400"}});
    if(path==="/sw.js")return new Response(serviceWorker,{headers:{"content-type":"application/javascript","service-worker-allowed":"/","cache-control":"no-cache"}});
    if(path==="/"||path==="/index.html")return new Response(page,{headers:{"content-type":"text/html;charset=UTF-8","cache-control":"no-cache"}});
    return new Response("Not found",{status:404});
  }
};
