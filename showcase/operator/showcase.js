// Shared showcase JS — clock, reveal, scroll spy, bench bars
(function(){
  // clock
  function tickClock(){
    const el = document.getElementById('clock');
    if(!el) return;
    const d = new Date();
    const pad = n => String(n).padStart(2,'0');
    el.textContent = `${pad(d.getUTCHours())}:${pad(d.getUTCMinutes())}:${pad(d.getUTCSeconds())} UTC`;
  }
  tickClock();
  setInterval(tickClock, 1000);

  // reveal + bench bars
  const io = new IntersectionObserver((entries)=>{
    entries.forEach(e=>{
      if(e.isIntersecting){
        e.target.classList.add('in');
        if(e.target.classList.contains('bench')){
          const bar = e.target.querySelector('.bar');
          if(bar) bar.classList.add('go');
        }
        io.unobserve(e.target);
      }
    });
  },{threshold:0.12});
  document.querySelectorAll('.reveal,.bench').forEach(el=>io.observe(el));

  // active jump tab via scroll
  const tabs = document.querySelectorAll('.jump-tab');
  const ids = Array.from(tabs).map(t=>t.getAttribute('href')?.replace('#','')).filter(Boolean);
  function syncTabs(){
    const y = window.scrollY + 180;
    let active = ids[0];
    for(const id of ids){
      const el = document.getElementById(id);
      if(el && el.offsetTop <= y) active = id;
    }
    tabs.forEach(t=>{ t.classList.toggle('on', t.getAttribute('href') === '#'+active); });
  }
  window.addEventListener('scroll', syncTabs, {passive:true});
  syncTabs();
})();
