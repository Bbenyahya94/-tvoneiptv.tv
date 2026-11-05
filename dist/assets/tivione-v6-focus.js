(()=>{
  const contact=window.TIVIONE_CONFIG.contact, wa='https://wa.me/'+contact.whatsapp+'?text='+encodeURIComponent('Hello Tivione, I would like a free trial.');
  const banner=document.querySelector('.t-banner');if(!banner)return;
  const path=location.pathname.replace(/^\/+|\/+$/g,'')||'home';
  const lead=banner.querySelector('.lead');if(lead)lead.textContent='Stable streaming. Clear plans. Helpful support.';
  const actions=banner.querySelector('.actions');if(actions)actions.insertAdjacentHTML('afterbegin','<a class="btn trial-btn" href="'+wa+'" target="_blank" rel="noopener">Free trial on WhatsApp ↗</a>');
  if(path==='home'){
    const card=banner.querySelector('.t-calculator');
    if(card)card.innerHTML='<h2>Tivione reseller</h2><p>Flexible credits and practical tools for your business.</p><div class="t-tiers"><div class="t-tier active"><small>Starter</small><b>10 credits</b></div><div class="t-tier"><small>Scale</small><b>20+ credits</b></div><div class="t-tier"><small>Features</small><b>API access</b></div><div class="t-tier"><small>Brand</small><b>Own domain</b></div></div><div class="t-rate"><div><span>Starter price</span><b class="mint">€190</b></div><div><span>Activation</span><b class="mint">Instant</b></div><div><span>Support</span><b>24/7</b></div></div><a class="btn" href="/reseller/">Explore reseller ↗</a>';
    const subscription=document.querySelector('.showcase:not(.reseller)');
    if(subscription){subscription.querySelector('h2').textContent='Tivione subscriptions and included features.';subscription.querySelector('p').textContent='Choose 1, 3, 6, 12 or 24 months. Every plan includes fast activation, global EPG, player guidance and dependable support.';}
    const reseller=document.querySelector('.showcase.reseller');
    if(reseller){reseller.querySelector('h2').textContent='Tivione reseller tools for your growth.';reseller.querySelector('p').textContent='Use flexible credit packages, API access, own-domain options and direct support for your reseller operation.';}
  }
})();
