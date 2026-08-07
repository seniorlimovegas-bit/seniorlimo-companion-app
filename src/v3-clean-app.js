import app from './hq-wrapper.js';

const links = {
  booking: 'https://mwai-command-center.seniorlimovegas.workers.dev/book/seniorlimo',
  deals: 'https://seniorlimo.com/gold-deals-market-place',
  showcase: 'https://seniorlimo.com/marketplace-showcase',
  partners: 'https://seniorlimo.com/business-partner-programs',
  about: 'https://seniorlimo.com/',
  hq: 'https://mwai-command-center.seniorlimovegas.workers.dev/',
  phone: 'tel:+17252331198',
  facetime: 'facetime:+17252331198',
  message: 'sms:+17252331198'
};

const page = `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1,viewport-fit=cover">
<meta name="theme-color" content="#06183f">
<meta name="apple-mobile-web-app-capable" content="yes">
<meta name="apple-mobile-web-app-title" content="SeniorLimo">
<link rel="manifest" href="/manifest.webmanifest">
<link rel="icon" href="/icon.jpg" type="image/jpeg">
<link rel="apple-touch-icon" href="/icon.jpg">
<title>SeniorLimo Companion</title>
<style>
:root{--navy:#06183f;--navy2:#0a2b67;--blue:#104d9d;--gold:#e4b63c;--gold2:#f7d66c;--white:#fff;--muted:#d6e2f5}
*{box-sizing:border-box}
html,body{margin:0;min-height:100%;font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif;background:var(--navy);color:#fff}
body{min-height:100dvh;background:radial-gradient(circle at 50% -20%,#1d5bb6 0,#0a2b67 34%,#06183f 78%);padding-bottom:env(safe-area-inset-bottom)}
a{-webkit-tap-highlight-color:transparent}
.app{width:min(100%,700px);min-height:100dvh;margin:auto;padding:calc(18px + env(safe-area-inset-top)) 18px calc(24px + env(safe-area-inset-bottom));background:linear-gradient(180deg,#06183f 0,#0a2b67 100%)}
.topbar{display:grid;grid-template-columns:48px 1fr 62px;align-items:center;gap:12px}
.circle{width:46px;height:46px;border-radius:50%;display:grid;place-items:center;border:1px solid #e4b63c88;background:#ffffff08;color:var(--gold2);font-size:22px;text-decoration:none}
.brand{text-align:center}.brand img{width:78px;height:78px;object-fit:contain;border-radius:18px}.brand-name{font:700 clamp(34px,8vw,52px)/1 Georgia,serif;margin-top:4px}.brand-name span{color:var(--gold2)}
.call-mini{text-align:center;color:#fff;text-decoration:none;font-size:11px;font-weight:700}.call-mini b{width:48px;height:48px;margin:auto auto 5px;border-radius:50%;display:grid;place-items:center;background:linear-gradient(145deg,var(--gold),var(--gold2));color:var(--navy);font-size:21px}
.hero{padding:26px 2px 24px;border-bottom:2px solid var(--gold);position:relative;overflow:hidden}.hero:after{content:"";position:absolute;width:340px;height:160px;border-radius:50%;right:-130px;bottom:-70px;background:radial-gradient(circle,#1e70d55c 0,transparent 70%)}
.hero h1{position:relative;z-index:1;margin:0;font:800 clamp(34px,8vw,56px)/1.03 Georgia,serif;letter-spacing:-.5px}.hero h1 span{color:var(--gold2)}.hero p{position:relative;z-index:1;margin:14px 0 0;color:var(--muted);font-size:16px;line-height:1.45}
.primary{display:grid;grid-template-columns:72px 1fr 28px;align-items:center;gap:16px;margin-top:24px;padding:21px 20px;border-radius:22px;background:linear-gradient(135deg,#d9aa29,#f6d76d);color:var(--navy);text-decoration:none;box-shadow:0 14px 32px #0004;border:1px solid #fff6}
.primary .ico{width:70px;height:70px;border-radius:18px;display:grid;place-items:center;background:var(--navy);color:var(--gold2);font-size:34px}.primary strong{display:block;font-size:24px;line-height:1.05}.primary small{display:block;margin-top:6px;font-size:13px;line-height:1.35}.arrow{font-size:34px;font-weight:800}
.duo{display:grid;grid-template-columns:1fr 1fr;gap:14px;margin-top:15px}
.duo a{min-height:128px;border:1px solid #e4b63c88;border-radius:20px;padding:17px;text-decoration:none;background:linear-gradient(150deg,#071b49,#0e3f88);color:#fff;display:flex;flex-direction:column;justify-content:center;box-shadow:0 10px 24px #0003}
.duo b{font-size:32px;color:var(--gold2);margin-bottom:12px}.duo strong{font-size:19px;line-height:1.1}.duo small{margin-top:5px;color:#d7e5fb;line-height:1.35}
.section-label{text-align:center;margin:24px 0 12px;color:#fff;font-weight:800;letter-spacing:1.2px;font-size:13px}
.contact{display:grid;grid-template-columns:repeat(3,1fr);gap:12px}.contact a,.more a{border:1px solid #e4b63c66;border-radius:18px;padding:15px 8px;text-align:center;text-decoration:none;color:#fff;background:#ffffff08;min-height:108px;display:flex;flex-direction:column;justify-content:center}.contact b,.more b{color:var(--gold2);font-size:28px;margin-bottom:8px}.contact span,.more span{font-size:12px;font-weight:800}
.more{display:grid;grid-template-columns:repeat(4,1fr);gap:10px;margin-top:12px}.more a{min-height:96px;padding:12px 6px}.more b{font-size:24px}.more span{font-size:10px;line-height:1.25}
.install{margin-top:18px}.install button{width:100%;border:1px solid #e4b63c88;border-radius:16px;background:#ffffff0b;color:#fff;font-weight:800;padding:14px;font-size:14px}.install p{text-align:center;color:#b9c9e8;font-size:11px;margin:7px 0 0}
footer{margin-top:18px;padding-top:16px;border-top:1px solid #e4b63c66;display:grid;grid-template-columns:1fr 1fr;gap:12px;color:#fff;font-size:13px}footer a{color:#fff;text-decoration:none}footer strong{color:var(--gold2)}
@media(max-width:460px){.brand img{width:64px;height:64px}.brand-name{font-size:34px}.hero h1{font-size:37px}.primary{grid-template-columns:58px 1fr 20px;padding:18px 16px}.primary .ico{width:58px;height:58px;font-size:28px}.primary strong{font-size:20px}.more{grid-template-columns:repeat(2,1fr)}footer{grid-template-columns:1fr}}
</style>
</head>
<body>
<div class="app">
  <div class="topbar">
    <a class="circle" href="${links.about}" aria-label="SeniorLimo website">☰</a>
    <div class="brand"><img src="/header-shield.jpg" alt="SeniorLimo shield"><div class="brand-name">Senior<span>Limo</span></div></div>
    <a class="call-mini" href="${links.phone}"><b>☎</b>Tap to Call</a>
  </div>

  <section class="hero">
    <h1>Your Business.<br><span>At Their Fingertips.</span></h1>
    <p>Local deals. Trusted businesses.<br>One simple companion.</p>
  </section>

  <a class="primary" href="${links.booking}">
    <span class="ico">▦</span>
    <span><strong>Book with MWAI-M</strong><small>Open the Smart Calendar and schedule in seconds.</small></span>
    <span class="arrow">›</span>
  </a>

  <nav class="duo" aria-label="Featured services">
    <a href="${links.deals}"><b>★</b><strong>Gold Deals</strong><small>Exclusive local offers and savings.</small></a>
    <a href="${links.showcase}"><b>⌂</b><strong>Business Showcase</strong><small>Discover trusted local businesses.</small></a>
  </nav>

  <div class="section-label">CONTACT SENIORLIMO</div>
  <nav class="contact" aria-label="Contact SeniorLimo">
    <a href="${links.phone}"><b>☎</b><span>TAP TO CALL</span></a>
    <a href="${links.facetime}"><b>▣</b><span>FACETIME</span></a>
    <a href="${links.message}"><b>✉</b><span>SEND MESSAGE</span></a>
  </nav>

  <nav class="more" aria-label="More SeniorLimo options">
    <a href="/qr"><b>↗</b><span>SHARE APP</span></a>
    <a href="${links.partners}"><b>♛</b><span>BECOME A PARTNER</span></a>
    <a href="${links.about}"><b>●</b><span>ABOUT US</span></a>
    <a href="${links.hq}"><b>⚙</b><span>HQ ACCESS</span></a>
  </nav>

  <section class="install"><button id="installButton" type="button">📲 Add SeniorLimo to My Device</button><p id="installHelp">Fast one-tap access from your Home Screen.</p></section>

  <footer><a href="${links.phone}"><strong>☎</strong> 725-233-1198</a><a href="${links.about}"><strong>◎</strong> SeniorLimo.com</a></footer>
</div>
<script>
if('serviceWorker' in navigator) navigator.serviceWorker.register('/sw.js');
let promptEvent;
const button=document.getElementById('installButton');
const help=document.getElementById('installHelp');
const standalone=window.matchMedia('(display-mode: standalone)').matches||navigator.standalone===true;
if(standalone){button.style.display='none';help.textContent='SeniorLimo is already installed on this device.'}
window.addEventListener('beforeinstallprompt',e=>{e.preventDefault();promptEvent=e;button.onclick=async()=>{promptEvent.prompt();await promptEvent.userChoice;promptEvent=null}});
button.addEventListener('click',()=>{if(!promptEvent)help.textContent='On iPhone or iPad: tap Share, then Add to Home Screen.'});
</script>
</body>
</html>`;

export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);
    if (request.method === 'GET' && url.pathname === '/') {
      return new Response(page,{headers:{'content-type':'text/html; charset=UTF-8','cache-control':'no-store, no-cache, must-revalidate, max-age=0'}});
    }
    return app.fetch(request, env, ctx);
  }
};
