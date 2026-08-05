import companionWorker from './index.js';

const HQ_URL = 'https://mwai-command-center.seniorlimovegas.workers.dev/';

const installExperience = `
<style>
  .install{margin-top:18px;padding-top:17px;border-top:1px solid #e5e9ef;text-align:center}
  .install button{width:100%;min-height:54px;border:0;border-radius:16px;background:linear-gradient(135deg,#d7aa31,#f3d477);color:#071d49;font-weight:800;padding:14px 18px;font-size:17px;box-shadow:0 8px 20px #071d4920}
  .install p{margin:9px 0 0;color:#626b7c;font-size:13px;line-height:1.45}
  #slInstallGuide[hidden]{display:none}
  #slInstallGuide{position:fixed;inset:0;z-index:9999;background:#061a42ef;display:flex;align-items:flex-end;justify-content:center;padding:18px;padding-bottom:calc(18px + env(safe-area-inset-bottom));overflow:auto}
  .sl-guide-card{width:min(100%,520px);background:#fff;border-radius:26px;padding:22px 20px 18px;box-shadow:0 24px 70px #0008;color:#162039;text-align:center;max-height:94dvh;overflow:auto}
  .sl-guide-icon{width:62px;height:62px;border-radius:19px;margin:0 auto 10px;display:grid;place-items:center;background:linear-gradient(135deg,#0d3d86,#1761bc);color:#fff;font-size:31px}
  .sl-guide-card h2{margin:0 0 7px;color:#071d49;font-size:24px}
  .sl-guide-card>p{margin:0 0 14px;color:#5d6678;line-height:1.4}
  .sl-steps{display:grid;gap:8px;text-align:left;margin:13px 0}
  .sl-step{display:grid;grid-template-columns:34px 1fr;gap:10px;align-items:center;background:#f4f7fb;border:1px solid #e1e7f0;border-radius:14px;padding:10px}
  .sl-step-num{width:34px;height:34px;border-radius:50%;display:grid;place-items:center;background:#0d3d86;color:#fff;font-weight:800}
  .sl-step strong{display:block;color:#071d49;font-size:14px}
  .sl-step small{display:block;color:#60697a;font-size:12px;margin-top:2px;line-height:1.3}
  .sl-primary,.sl-secondary{width:100%;min-height:50px;border-radius:15px;font-size:16px;font-weight:800;padding:11px 15px}
  .sl-primary{border:0;background:linear-gradient(135deg,#d7aa31,#f3d477);color:#071d49}
  .sl-secondary{border:1px solid #d7deea;background:#fff;color:#34405a;margin-top:8px}
  .sl-note{font-size:12px!important;margin:10px 0 0!important;color:#70798a!important}
  .sl-demo-link{display:inline-block;margin-top:10px;color:#0d3d86;font-size:12px;font-weight:700;text-decoration:none}
  @media(min-width:700px){#slInstallGuide{align-items:center}.sl-guide-card{padding:26px}}
</style>
<div id="slInstallGuide" hidden role="dialog" aria-modal="true" aria-labelledby="slGuideTitle">
  <div class="sl-guide-card">
    <div class="sl-guide-icon">📲</div>
    <h2 id="slGuideTitle">Get the Companion App</h2>
    <p id="slGuideIntro">Add SeniorLimo to your phone for quick, one-tap access.</p>
    <div id="slGuideSteps" class="sl-steps"></div>
    <button id="slInstallNow" class="sl-primary" type="button">Install on My Phone</button>
    <button id="slContinue" class="sl-secondary" type="button">Continue to SeniorLimo</button>
    <p class="sl-note">Free to add. No App Store account or password needed.</p>
  </div>
</div>
<script>
(() => {
  const guide = document.getElementById('slInstallGuide');
  const steps = document.getElementById('slGuideSteps');
  const intro = document.getElementById('slGuideIntro');
  const installNow = document.getElementById('slInstallNow');
  const continueButton = document.getElementById('slContinue');
  const originalButton = document.getElementById('installButton');
  const originalHelp = document.getElementById('installHelp');
  const params = new URLSearchParams(location.search);
  const forceDemo = params.get('install') === '1' || params.get('demo') === '1';
  const standalone = window.matchMedia('(display-mode: standalone)').matches || window.navigator.standalone === true;
  const ua = navigator.userAgent || '';
  const isIOS = /iPhone|iPad|iPod/i.test(ua) || (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);
  const isAndroid = /Android/i.test(ua);
  let deferredPrompt = null;

  const step = (number, title, detail) => '<div class="sl-step"><span class="sl-step-num">' + number + '</span><span><strong>' + title + '</strong><small>' + detail + '</small></span></div>';

  function configureGuide() {
    if (standalone && !forceDemo) {
      guide.hidden = true;
      if (originalButton) originalButton.style.display = 'none';
      if (originalHelp) originalHelp.textContent = 'SeniorLimo is already installed on this device.';
      return;
    }

    if (isIOS) {
      intro.textContent = 'Follow these Apple steps. Your Safari layout may begin with the three dots.';
      steps.innerHTML =
        step('1','Tap the three dots •••','They are usually at the bottom-right of Safari.') +
        step('2','Tap “Share”','It appears at the top of the small menu.') +
        step('3','Tap “View More” if needed','This opens the full Share menu.') +
        step('4','Tap “Add to Home Screen”','Scroll down until you see it.') +
        step('5','Leave “Open as Web App” turned on','This makes it open like an app.') +
        step('6','Tap “Add”','SeniorLimo will appear on your Home Screen.');
      installNow.textContent = 'Start: Tap the Three Dots •••';
      installNow.onclick = () => {
        installNow.textContent = 'Next: Tap Share';
        intro.textContent = 'You are doing it correctly. Tap the three dots, then tap Share.';
      };
    } else if (isAndroid) {
      intro.textContent = 'Tap once to add SeniorLimo to your phone.';
      steps.innerHTML = step('1','Tap “Install on My Android”','Your phone will open the install confirmation.') + step('2','Tap “Install”','SeniorLimo will appear with your other apps.');
      installNow.textContent = 'Install on My Android';
      installNow.onclick = async () => {
        if (deferredPrompt) {
          deferredPrompt.prompt();
          await deferredPrompt.userChoice;
          deferredPrompt = null;
          guide.hidden = true;
        } else {
          intro.textContent = 'Open your browser menu (⋮), then tap “Install app” or “Add to Home screen.”';
          installNow.textContent = 'Open Browser Menu ⋮';
        }
      };
    } else {
      intro.textContent = 'Add SeniorLimo for quick, one-tap access.';
      steps.innerHTML = step('1','Open your browser menu','Look for Install App or Add to Home Screen.') + step('2','Confirm the installation','SeniorLimo will appear with your other apps.');
      installNow.textContent = 'Show Installation Steps';
    }
  }

  window.addEventListener('beforeinstallprompt', event => {
    event.preventDefault();
    deferredPrompt = event;
    if (isAndroid) installNow.textContent = 'Install on My Android';
  });

  continueButton.onclick = () => {
    guide.hidden = true;
    try { localStorage.setItem('sl-install-guide-seen','yes'); } catch (_) {}
  };

  if (originalButton) {
    originalButton.textContent = '📲 Get the Companion App';
    originalButton.onclick = () => {
      configureGuide();
      guide.hidden = false;
    };
  }
  if (originalHelp) {
    originalHelp.innerHTML = 'Add it to your phone for fast, one-tap access.<br><a class="sl-demo-link" href="/?install=1">Show first-time install guide again</a>';
  }

  configureGuide();
  let seen = false;
  try { seen = localStorage.getItem('sl-install-guide-seen') === 'yes'; } catch (_) {}
  if (!standalone && (!seen || forceDemo)) setTimeout(() => { guide.hidden = false; }, 350);
})();
</script>`;

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

    let updatedHtml = html.includes(shareCard)
      ? html.replace(shareCard, `${hqCard}\n${shareCard}`)
      : html.replace('</nav>', `${hqCard}\n</nav>`);

    updatedHtml = updatedHtml.replace('</body>', `${installExperience}\n</body>`);

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
