function initPlayer(params) {
  const 
    target = document.querySelector(params.target);

    console.log(target);

    if (target === null || params.slides === undefined) {
      return;
    }

    let
      timelinesChunk = '',
      playersChunk = '',
      isFirst = true;
    
    for(const el of params.slides) {
      timelinesChunk += `<div class="timeline-chunk ${isFirst ? 'timeline-chunk-active' : ''}">
      <div class="timeline-chunk-inner" ></div>
    </div>`;

      playersChunk += `<div class="player-chunk ${isFirst ? 'player-chunk-active' : ''}">
      <img src="${el.url}" alt="${el.alt || ''}" class="player-item">
    </div>`; 
      
      isFirst = false;
    };  
      
    target.innerHTML = innerHttp(timelinesChunk, playersChunk);

    target.querySelector('.player-chunk-prev').addEventListener('click', function()  {
          const prev = moveClass('timeline-chunk-active', 'previousElementSibling', (el) => {
        const
          inner = el.querySelector('.timeline-chunk-inner'),
          w = parseFloat(inner.style.width) || 0;

        inner.style.width = '';
        return w <= 20;
      });

      if (prev) {
        moveClass('player-chunk-active', 'previousElementSibling');
      }
    });

    target.querySelector('.player-chunk-next').addEventListener('click', next);

    function innerHttp (timelinesChunk, playersChunk){
      return `<div class="player">
      <div class="timeline">${timelinesChunk}</div>
      <div class="player-content-wrapper">
        <div class="player-chunk-switcher player-chunk-prev"></div>
        <div class="player-chunk-switcher player-chunk-next"></div>
    
        <div class="player-content">${playersChunk}</div>
      </div>
    </div>`;
    }

    function timelineHttp(isFirst){
      // не работает
      return
      `<div class="timeline-chunk ${isFirst ? 'timeline-chunk-active' : ''}">
            <div class="timeline-chunk-inner" ></div>
          </div>`;
    }
    
    function playerHttp( el, isFirst ){
      // не работает
      return 
      
      `<div class="player-chunk ${isFirst ? 'player-chunk-active' : ''}">
            <img src="${el.url}" alt="${el.alt || ''}" class="player-item">
          </div>`;  
    }

    function moveClass(className, method, pred) {
      const
        active = target.querySelector('.' + className),
        next = active[method];
    
      if (pred && !pred(active)) {
        return null;
      }
    
      if (next){
        active.classList.remove(className);
        next.classList.add(className);
        return active;
      }
    
      return null;
    }
    
    function next(){
      moveClass('player-chunk-active', 'nextElementSibling');
      const el = moveClass('timeline-chunk-active', 'nextElementSibling');
    
      if (el){
        el.querySelector('.timeline-chunk-inner').style.width = '';
      }
    }
    
    let
      timer;

    function runInterval(time, step) {
      clearInterval(timer);
      timer = setInterval(() => {
        const
          active = target.querySelector('.timeline-chunk-active').querySelector('.timeline-chunk-inner'),
          w = parseFloat(active.style.width) || 0;
    
        if (w === 100) {
          next();
          return;
        }
    
        active.style.width = String(w + step) + '%';
    
      }, time * 1000 * step / 100);
    }
    
    runInterval(params.time || 1, params.step || 1);
}

