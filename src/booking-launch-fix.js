import app from './hq-wrapper.js';

const BOOKING_URL = 'https://mwai-command-center.seniorlimovegas.workers.dev/book/seniorlimo';

const bookingLauncher = `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1,viewport-fit=cover">
<meta name="theme-color" content="#071d49">
<title>Open MWAI Smart Calendar</title>
<style>
*{box-sizing:border-box}body{margin:0;min-height:100dvh;background:linear-gradient(145deg,#071d49,#0d3d86);font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif;color:#17213a;padding:calc(22px + env(safe-area-inset-top)) 18px calc(22px + env(safe-area-inset-bottom));display:grid;place-items:center}.card{width:min(100%,560px);background:#fff;border-radius:28px;padding:26px 22px;box-shadow:0 24px 70px #0007;border-top:6px solid #d5a72d;text-align:center}.icon{width:76px;height:76px;border-radius:22px;margin:0 auto 14px;display:grid;place-items:center;background:#071d49;color:#f4ca55;font:bold 38px Georgia}.card h1{margin:0 0 8px;color:#071d49;font-size:28px}.lead{margin:0 0 18px;color:#596477;line-height:1.5}.notice{background:#fff8df;border:1px solid #e3bd4b;border-radius:16px;padding:14px;text-align:left;margin:0 0 18px;color:#4c4020;line-height:1.45}.notice strong{display:block;color:#071d49;margin-bottom:4px}.actions{display:grid;gap:10px}.primary,.secondary{display:block;width:100%;min-height:54px;border-radius:16px;padding:15px 17px;text-decoration:none;font-size:17px;font-weight:800}.primary{background:linear-gradient(135deg,#d7aa31,#f3d477);color:#071d49}.secondary{background:#edf2fa;color:#0d3d86;border:1px solid #d6dfec}.small{font-size:12px;color:#737c8d;margin:14px 0 0;line-height:1.45}
</style>
</head>
<body>
<main class="card">
<div class="icon">M</div>
<h1>MWAI Smart Calendar™</h1>
<p class="lead">Book SeniorLimo and receive appointment updates.</p>
<div class="notice"><strong>For notifications on iPhone or iPad</strong>Open the black <b>MWAI</b> icon already installed on your Home Screen. Apple keeps notification permission with that MWAI app and does not transfer it to the separate Companion App.</div>
<div class="actions">
<a class="primary" href="${BOOKING_URL}">Continue to Booking</a>
<a class="secondary" href="/">Back to Companion App</a>
</div>
<p class="small">Appointments can still be booked in the browser, but notifications remain connected to the installed MWAI icon.</p>
</main>
</body>
</html>`;

export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);
    if (request.method === 'GET' && url.pathname === '/book-seniorlimo') {
      return new Response(bookingLauncher, {
        headers: {
          'content-type': 'text/html; charset=UTF-8',
          'cache-control': 'no-store, no-cache, must-revalidate, max-age=0'
        }
      });
    }

    const response = await app.fetch(request, env, ctx);
    if (request.method !== 'GET' || url.pathname !== '/' || !response.headers.get('content-type')?.includes('text/html')) {
      return response;
    }

    const html = await response.text();
    const updatedHtml = html
      .replaceAll(`href="${BOOKING_URL}"`, 'href="/book-seniorlimo"')
      .replace('<strong>Book SeniorLimo</strong><small>Request a ride or appointment directly with SeniorLimo.</small>', '<strong>Book SeniorLimo</strong><small>Open MWAI Smart Calendar for booking and appointment notifications.</small>');

    const headers = new Headers(response.headers);
    headers.delete('content-length');
    headers.set('cache-control', 'no-store, no-cache, must-revalidate, max-age=0');
    return new Response(updatedHtml, { status: response.status, statusText: response.statusText, headers });
  }
};
