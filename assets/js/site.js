document.documentElement.classList.add('js');
(function(){
  if (window.__crMenu) return; window.__crMenu = true;
  var d = document;
  function closeAll(except){
    [].forEach.call(d.querySelectorAll('details.dd[open],details.mnav[open]'), function(x){
      if (x !== except) x.removeAttribute('open');
    });
  }
  d.addEventListener('toggle', function(e){
    var t = e.target;
    if (t.matches && t.matches('details.dd') && t.open) closeAll(t);
  }, true);
  d.addEventListener('click', function(e){
    var link = e.target.closest && e.target.closest('details.dd a, details.mnav a');
    if (link) { closeAll(null); return; }
    if (!(e.target.closest && e.target.closest('details.dd, details.mnav'))) closeAll(null);
  });
  d.addEventListener('keydown', function(e){ if (e.key === 'Escape') closeAll(null); });
})();
(function(){
  var secs = [].slice.call(document.querySelectorAll('[data-sec]'));
  if(!secs.length) return;
  var navs = [].slice.call(document.querySelectorAll('[data-navto]'));
  var current = null;
  function pick(){
    var line = window.innerHeight * 0.35, best = null, bestTop = -Infinity;
    for(var i=0;i<secs.length;i++){
      var r = secs[i].getBoundingClientRect();
      if(r.top <= line && r.bottom > line*0.5 && r.top > bestTop){ bestTop = r.top; best = secs[i]; }
    }
    var name = best ? best.dataset.sec : null;
    if(name === current) return;
    current = name;
    secs.forEach(function(sec){
      var meta = sec.querySelector('.meta');
      if(!meta) return;
      if(sec.dataset.sec === name) meta.setAttribute('data-on','');
      else meta.removeAttribute('data-on');
    });
    navs.forEach(function(a){
      a.setAttribute('aria-current', a.dataset.navto === name ? 'true' : 'false');
    });
  }
  addEventListener('scroll', pick, {passive:true});
  addEventListener('resize', pick);
  addEventListener('load', pick);
  pick();
})();
(function(){
  var opened=[];
  addEventListener('beforeprint',function(){opened=[].slice.call(document.querySelectorAll('details:not([open])'));opened.forEach(function(x){x.open=true});});
  addEventListener('afterprint',function(){opened.forEach(function(x){x.open=false});opened=[];});
})();
