/* ThinkAgentic GA4 engagement tracking. No personal details are sent. */
(function () {
  'use strict';
  function send(eventName, params) {
    if (typeof window.gtag === 'function') window.gtag('event', eventName, params || {});
  }
  document.addEventListener('click', function (e) {
    const link = e.target.closest('a[href]');
    if (!link) return;
    let url;
    try { url = new URL(link.href, window.location.href); } catch (_) { return; }
    const href = url.href;
    if (url.hostname === 'wa.me' || url.hostname.endsWith('.whatsapp.com')) {
      send('whatsapp_click', { page_path: location.pathname });
      return;
    }
    if (link.id === 'google-form-link' ||
        (url.hostname === 'docs.google.com' && url.pathname.includes('/forms/'))) {
      send('enquiry_form_open', { page_path: location.pathname });
      return;
    }
    if (url.protocol === 'mailto:') {
      send('email_click', { page_path: location.pathname });
      return;
    }
    if (url.origin === location.origin && /education\.html(?:$|[?#])/.test(href) &&
        location.pathname !== '/education.html') {
      send('education_cta_click', { page_path: location.pathname });
    }
  });
  // A Google Form opens on a separate origin. Do not report successful
  // submissions unless independently confirmed through a supported integration.
})();
