import companionWorker from './index.js';

const HQ_URL = 'https://mwai-command-center.seniorlimovegas.workers.dev/';

export default {
  async fetch(request, env, ctx) {
    const response = await companionWorker.fetch(request, env, ctx);
    const url = new URL(request.url);

    if (request.method !== 'GET' || url.pathname !== '/' || !response.headers.get('content-type')?.includes('text/html')) {
      return response;
    }

    const html = await response.text();
    const shareCard = '<a class="card" href="/qr"><span class="icon">▦</span><span class="copy"><strong>Share the Companion App</strong><small>Open the official QR code for customers.</small></span><span class="arrow">›</span></a>';
    const hqCard = `<a class="card blue-card" href="${HQ_URL}"><span class="icon">⌘</span><span class="copy"><strong>HQ Command Center</strong><small>Open the complete SeniorLimo management dashboard.</small></span><span class="arrow">›</span></a>`;

    const updatedHtml = html.includes(shareCard)
      ? html.replace(shareCard, `${hqCard}\n${shareCard}`)
      : html.replace('</nav>', `${hqCard}\n</nav>`);

    const headers = new Headers(response.headers);
    headers.delete('content-length');
    headers.set('cache-control', 'no-store');

    return new Response(updatedHtml, {
      status: response.status,
      statusText: response.statusText,
      headers
    });
  }
};
