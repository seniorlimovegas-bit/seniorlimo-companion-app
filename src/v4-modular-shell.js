import app from './hq-wrapper.js';

const BOOKING_URL = 'https://mwai-command-center.seniorlimovegas.workers.dev/book/seniorlimo';

const modules = {
  booking: { label: 'Book Appointment', description: 'Choose a day and time that works for you.', href: BOOKING_URL, icon: '▦' },
  wizard: { label: 'Ask Mr. Wizard', description: 'Ask a question and get help.', href: '/ask-mr-wizard', icon: '☺' },
  deals: { label: 'Gold Deals', description: 'See current specials and savings.', href: 'https://seniorlimo.com/gold-deals-market-place', icon: '★' },
  showcase: { label: 'Our Services', description: 'See what we can do for you.', href: 'https://seniorlimo.com/marketplace-showcase', icon: '⌂' },
  call: { label: 'Call Us', href: 'tel:+17252331198', icon: '☎' },
  message: { label: 'Message Us', href: 'sms:+17252331198', icon: '✉' },
  share: { label: 'Share App', href: '/qr', icon: '↗' },
  account: { label: 'My Account', description: 'Business owner login', href: '/owner', icon: '♙' }
};

const tile = (item, className = '') => `
<a class="${className}" href="${item.href}">
  <b>${item.icon}</b>
  <span><strong>${item.label}</strong>${item.description ? `<small>${item.description}</small>` : ''}</span>
</a>`;

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
:root{--navy:#06183f;--navy2:#0b2f70;--gold:#e4b63c;--gold2:#f7d66c;--text:#fff;--muted:#cbd9ef}
*{box-sizing:border-box}html,body{margin:0;min-height:100%;font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif;background:#04122f;color:var(--text)}body{min-height:100dvh;background:radial-gradient(circle at 50% -10%,#174e9c 0,#082457 38%,#04122f 82%)}a{-webkit-tap-highlight-color:transparent}.app{width:min(100%,520px);min-height:100dvh;margin:auto;padding:calc(18px + env(safe-area-inset-top)) 18px calc(92px + env(safe-area-inset-bottom));position:relative}.brand{text-align:center;padding:4px 0 18px}.brand img{width:94px;height:94px;object-fit:contain;border-radius:24px}.brand-name{font:700 38px/1 Georgia,serif;margin-top:8px}.brand-name span{color:var(--gold2)}.tagline{color:var(--muted);font-size:14px;margin-top:7px}.welcome{text-align:center;margin:2px 0 20px}.welcome h1{font:700 24px/1.15 Georgia,serif;margin:0}.welcome p{margin:8px auto 0;color:var(--muted);font-size:14px;max-width:340px;line-height:1.4}.featured{display:grid;grid-template-columns:1fr 1fr;gap:13px}.featured a{min-height:154px;border-radius:22px;padding:19px 15px;text-decoration:none;display:flex;flex-direction:column;align-items:flex-start;justify-content:center;border:1px solid #f0c95388;box-shadow:0 12px 26px #0004}.featured a:first-child{background:linear-gradient(145deg,#d7a62d,#f7d66c);color:var(--navy)}.featured a:last-child{background:linear-gradient(145deg,#0c377c,#071b49);color:#fff}.featured b{width:48px;height:48px;border-radius:14px;display:grid;place-items:center;background:#06183f;color:var(--gold2);font-size:27px;margin-bottom:14px}.featured strong{display:block;font-size:18px;line-height:1.08}.featured small{display:block;font-size:11px;line-height:1.3;margin-top:6px;opacity:.82}.section-label{margin:22px 2px 10px;color:var(--gold2);font-size:11px;font-weight:800;letter-spacing:1.4px}.grid{display:grid;grid-template-columns:1fr 1fr;gap:12px}.grid a{min-height:105px;border:1px solid #e4b63c66;border-radius:18px;padding:15px;text-decoration:none;color:#fff;background:linear-gradient(145deg,#09275f,#071b49);display:flex;align-items:center;gap:12px}.grid b{flex:0 0 42px;width:42px;height:42px;border-radius:12px;display:grid;place-items:center;background:#ffffff0b;color:var(--gold2);font-size:23px}.grid strong{display:block;font-size:14px}.grid small{display:block;color:#cbd9ef;font-size:10px;line-height:1.25;margin-top:4px}.owner-note{margin:20px 0 0;text-align:center;color:#9fb2d3;font-size:10px}.bottom{position:fixed;z-index:5;left:50%;transform:translateX(-50%);bottom:0;width:min(100%,520px);padding:10px 18px calc(10px + env(safe-area-inset-bottom));background:#04122ff2;border-top:1px solid #e4b63c55;display:grid;grid-template-columns:1fr 1fr 1fr;backdrop-filter:blur(12px)}.bottom a{text-align:center;color:#dce7f8;text-decoration:none;font-size:10px;font-weight:700}.bottom b{display:block;color:var(--gold2);font-size:21px;margin-bottom:4px}.bottom .home{color:var(--gold2)}
@media(max-width:380px){.app{padding-left:14px;padding-right:14px}.featured{gap:10px}.featured a{padding:16px 12px}.featured strong{font-size:16px}.grid{gap:10px}.grid a{padding:12px;gap:9px}.brand img{width:82px;height:82px}}
</style>
</head>
<body>
<main class="app">
  <header class="brand">
    <img src="/header-shield.jpg" alt="SeniorLimo badge">
    <div class="brand-name">Senior<span>Limo</span></div>
    <div class="tagline">Your business companion</div>
  </header>
  <section class="welcome"><h1>How can we help today?</h1><p>Tap what you need. Everything is designed to be simple and easy to use.</p></section>
  <nav class="featured" aria-label="Main actions">${tile(modules.booking)}${tile(modules.wizard)}</nav>
  <div class="section-label">QUICK ACCESS</div>
  <nav class="grid" aria-label="Customer tools">${tile(modules.deals)}${tile(modules.showcase)}${tile(modules.call)}${tile(modules.message)}${tile(modules.share)}${tile(modules.account)}</nav>
  <p class="owner-note">Business owners: use My Account to securely access your private tools.</p>
</main>
<nav class="bottom" aria-label="App navigation"><a class="home" href="/"><b>⌂</b>Home</a><a href="${BOOKING_URL}"><b>▦</b>Bookings</a><a href="/owner"><b>♙</b>My Account</a></nav>
</body>
</html>`;

const comingSoon = (title, copy) => `<!doctype html><meta name="viewport" content="width=device-width,initial-scale=1"><style>body{margin:0;background:#06183f;color:white;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;min-height:100vh;display:grid;place-items:center;padding:24px;box-sizing:border-box}.box{max-width:420px;text-align:center;border:1px solid #e4b63c88;border-radius:24px;padding:32px;background:#0a2b67}h1{color:#f7d66c}p{line-height:1.5;color:#d6e2f5}a{display:inline-block;margin-top:12px;color:#06183f;background:#f7d66c;padding:12px 18px;border-radius:12px;text-decoration:none;font-weight:800}</style><div class="box"><h1>${title}</h1><p>${copy}</p><a href="/">Back to Home</a></div>`;

export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);
    if (request.method === 'GET' && url.pathname === '/') return new Response(page,{headers:{'content-type':'text/html; charset=UTF-8','cache-control':'no-store'}});
    if (request.method === 'GET' && url.pathname === '/ask-mr-wizard') return new Response(comingSoon('Ask Mr. Wizard','This customer assistant is being connected as its own independent module.'),{headers:{'content-type':'text/html; charset=UTF-8'}});
    if (request.method === 'GET' && url.pathname === '/owner') return new Response(comingSoon('Business Owner Login','Your private Mini Command Center will live here. Customer tools stay separate from business-owner tools.'),{headers:{'content-type':'text/html; charset=UTF-8'}});
    return app.fetch(request, env, ctx);
  }
};
