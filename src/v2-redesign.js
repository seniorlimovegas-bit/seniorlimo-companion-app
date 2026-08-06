import app from './booking-launch-fix.js';

const links = {
  booking: '/book-seniorlimo',
  showcase: 'https://seniorlimo.com/marketplace-showcase',
  deals: 'https://seniorlimo.com/gold-deals-market-place',
  website: 'https://seniorlimo.com/',
  partners: 'https://seniorlimo.com/business-partner-programs',
  hq: 'https://mwai-command-center.seniorlimovegas.workers.dev/',
  phone: 'tel:+17252331198',
  contact: 'https://seniorlimo.com/contact'
};

const page = `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1,viewport-fit=cover">
<meta name="theme-color" content="#061943">
<meta name="apple-mobile-web-app-capable" content="yes">
<meta name="apple-mobile-web-app-title" content="SeniorLimo">
<link rel="manifest" href="/manifest.webmanifest">
<link rel="icon" href="/icon.jpg" type="image/jpeg">
<link rel="apple-touch-icon" href="/icon.jpg">
<title>SeniorLimo Companion</title>
<style>
:root{--navy:#061943;--navy2:#0a2d68;--blue:#114d9c;--gold:#e1b33f;--gold2:#f5d77c;--white:#fff;--cream:#fffaf0;--ink:#101c38}
*{box-sizing:border-box}
html,body{margin:0;min-height:100%;font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif;background:var(--navy);color:var(--ink)}
body{min-height:100dvh;background:radial-gradient(circle at 50% -10%,#1e58a4 0,#0a2d68 34%,#061943 72%);padding-bottom:env(safe-area-inset-bottom)}
a{-webkit-tap-highlight-color:transparent}
.app{width:min(100%,620px);margin:auto;min-height:100dvh;background:linear-gradient(180deg,#061943 0,#0a2d68 33%,#f7f4ed 33%,#fff 100%);box-shadow:0 0 70px #0008;overflow:hidden}
.hero{position:relative;color:#fff;padding:calc(20px + env(safe-area-inset-top)) 20px 34px;border-bottom:5px solid var(--gold);overflow:hidden}
.hero:after{content:"";position:absolute;inset:auto -12% -105px;background:radial-gradient(ellipse,#2472c85a 0,transparent 65%);height:260px;pointer-events:none}
.top{display:grid;grid-template-columns:48px 1fr 74px;align-items:center;gap:10px;position:relative;z-index:1}
.menu{width:46px;height:46px;border:1px solid #ffffff38;border-radius:15px;display:grid;place-items:center;color:var(--gold2);font-size:27px;background:#ffffff0d}
.brand{text-align:center}.brand img{width:84px;height:84px;object-fit:contain;border-radius:18px;box-shadow:0 12px 30px #0006}.brand-name{font:700 clamp(31px,8vw,48px)/1 Georgia,serif;margin-top:8px}.brand-name span{color:var(--gold2)}
.call-top{text-decoration:none;color:#fff;text-align:center;font-size:11px;font-weight:800}.call-top b{display:grid;place-items:center;width:48px;height:48px;margin:auto auto 5px;border-radius:50%;background:linear-gradient(145deg,var(--gold),var(--gold2));color:var(--navy);font-size:23px;box-shadow:0 8px 20px #0005}
.hero-copy{position:relative;z-index:1;margin-top:22px}.hero-copy h1{font:700 clamp(31px,8.8vw,47px)/1.04 Georgia,serif;margin:0}.hero-copy h1 span{color:var(--gold2)}.hero-copy p{margin:12px 0 0;color:#dce9ff;font-size:16px;line-height:1.45}
.content{padding:22px 17px 26px}
.section-title{text-align:center;margin:0 0 16px}.section-title h2{margin:0;color:var(--navy);font-size:22px}.section-title p{margin:5px 0 0;color:#667085;font-size:14px}
.grid{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:13px}
.tile{min-height:168px;border-radius:22px;padding:18px 12px;text-decoration:none;text-align:center;display:flex;flex-direction:column;justify-content:center;align-items:center;border:1.5px solid #d9b64f;box-shadow:0 10px 24px #071d491d;transition:transform .12s ease,box-shadow .12s ease}
.tile:active{transform:scale(.975);box-shadow:0 5px 14px #071d4920}
.tile.dark{background:linear-gradient(150deg,#061943,#0d3d86);color:#fff}.tile.light{background:linear-gradient(180deg,#fff,#fffaf0);color:var(--navy)}
.tile.primary{grid-column:1/-1;min-height:132px;display:grid;grid-template-columns:74px 1fr;gap:14px;text-align:left;padding:18px 20px;background:linear-gradient(135deg,#071d49,#1456a7);color:#fff}
.icon{width:68px;height:68px;border-radius:19px;display:grid;place-items:center;background:linear-gradient(145deg,var(--gold),var(--gold2));color:var(--navy);font-size:33px;box-shadow:inset 0 0 0 1px #fff7,0 8px 20px #0002}.light .icon{background:var(--navy);color:var(--gold2)}
.tile strong{display:block;margin-top:12px;font-size:17px;line-height:1.12;letter-spacing:.1px}.tile small{display:block;margin-top:6px;line-height:1.35;font-size:12px;opacity:.82}.primary strong{margin:0;font-size:22px}.primary small{font-size:13px}.primary .icon{margin:0}
.community{margin-top:16px;border-radius:20px;overflow:hidden;display:grid;grid-template-columns:1fr 112px;background:linear-gradient(120deg,#d4a52f,#f2d16e);color:var(--navy);box-shadow:0 10px 24px #071d4923}.community-copy{padding:17px}.community-copy strong{display:block;font-size:16px}.community-copy small{display:block;margin-top:5px;line-height:1.35}.scan{background:var(--navy);color:#fff;padding:12px;display:grid;place-items:center;text-align:center;font-size:12px;font-weight:800;text-decoration:none}.scan span{font-size:28px;display:block;margin-bottom:4px}
.quick{margin-top:16px;background:var(--navy);border:1px solid #d9b64f;border-radius:20px;display:grid;grid-template-columns:repeat(3,1fr);overflow:hidden}.quick a{padding:15px 6px;color:#fff;text-decoration:none;text-align:center;font-size:11px;font-weight:750;border-right:1px solid #ffffff25}.quick a:last-child{border:0}.quick b{display:block;color:var(--gold2);font-size:24px;margin-bottom:5px}
.install{margin-top:16px;text-align:center}.install button{width:100%;border:0;border-radius:16px;background:#edf2fa;color:var(--navy);font-weight:800;padding:14px;font-size:15px}.install p{margin:7px 0 0;color:#6f7787;font-size:11px;line-height:1.4}
footer{text-align:center;color:#c8d7f1;padding:19px 12px 24px;font-size:12px;background:var(--navy)}footer strong{color:var(--gold2);letter-spacing:2px}footer a{color:var(--gold2);text-decoration:none}
@media(min-width:520px){.grid{grid-template-columns:repeat(3,minmax(0,1fr))}.tile.primary{grid-column:1/-1}.content{padding:25px 24px 30px}}
</style>
</head>
<body>
<div class="app">
<header class="hero">
  <div class="top">
    <div class="menu" aria-hidden="true">☰</div>
    <div class="brand"><img src="/header-shield.jpg" alt="SeniorLimo shield"><div class="brand-name">Senior<span>Limo</span></div></div>
    <a class="call-top" href="${links.phone}"><b>☎</b>Tap to Call</a>
  </div>
  <div class="hero-copy"><h1>Your Business.<br><span>At Their Fingertips.</span></h1><p>Local deals. Trusted businesses.<br>One simple companion.</p></div>
</header>
<main class="content">
  <section class="section-title"><h2>Where would you like to go?</h2><p>Choose a service below.</p></section>
  <nav class="grid" aria-label="SeniorLimo Companion services">
    <a class="tile primary" href="${links.booking}"><span class="icon">▣</span><span><strong>Book an Appointment</strong><small>Open the MWAI-M Booking Agent and Smart Calendar.</small></span></a>
    <a class="tile light" href="${links.showcase}"><span class="icon">⌂</span><strong>Business Showcase</strong><small>Discover trusted local businesses.</small></a>
    <a class="tile dark" href="${links.deals}"><span class="icon">★</span><strong>Gold Deals</strong><small>Exclusive local offers and savings.</small></a>
    <a class="tile light" href="${links.phone}"><span class="icon">☎</span><strong>Tap to Call</strong><small>Speak with SeniorLimo in one tap.</small></a>
    <a class="tile dark" href="${links.website}"><span class="icon">◎</span><strong>Visit Our Website</strong><small>Explore SeniorLimo programs and services.</small></a>
    <a class="tile light" href="${links.contact}"><span class="icon">✉</span><strong>Contact Us</strong><small>Send a message or get more information.</small></a>
  </nav>
  <section class="community"><div class="community-copy"><strong>Support Local. Build Community.</strong><small>Thank you for choosing SeniorLimo and supporting local businesses.</small></div><a class="scan" href="/qr"><span>▦</span>SCAN &amp; SHARE</a></section>
  <nav class="quick" aria-label="More SeniorLimo options">
    <a href="${links.partners}"><b>♛</b>Become a Partner</a>
    <a href="/qr"><b>↗</b>Share the App</a>
    <a href="${links.hq}"><b>⚙</b>HQ Command Center</a>
  </nav>
  <section class="install"><button id="installButton" type="button">📲 Get the Companion App</button><p id="installHelp">Add it to your phone for fast, one-tap access.</p></section>
</main>
<footer>Powered by <strong>MWAI™</strong> · <a href="${links.website}">SeniorLimo.com</a></footer>
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
      return new Response(page, {
        headers: {
          'content-type': 'text/html; charset=UTF-8',
          'cache-control': 'no-store, no-cache, must-revalidate, max-age=0'
        }
      });
    }
    return app.fetch(request, env, ctx);
  }
};
