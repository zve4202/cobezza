/**
 * js documentation
 *
 * инициализирует плеер Stories по заданным параметрам
 *
 * @param {{
 *  target: string,
 *  slides: Array<{url: string, alt?: string}>,
 *  delayPerSlide?: number
 * }} params - параметры инициализации
 *
 *  1. target - место инициализации плеер-а, CSS селектор
 *  2. slides - набор слайдов плеер-а
 *  3. delayPerSlide - как долго показывать один слайд
 *
 * @return {Element|null}
 */
function initPlayer(params) {
  const target = document.querySelector(params.target);

  if (target === null || params.slides === undefined) {
    return null;
  }

  let timeLineTimer;

  let timelinesChunk = "",
    playersChunk = "";

  let isFirst = true;

  for (const slide of params.slides) {
    timelinesChunk += genetateTimelinesChunk(isFirst);
    playersChunk += genetatePlayersChunk(slide, isFirst);
    isFirst = false;
  }

  target.innerHTML = genetatePlayerLayout();

  function genetateTimelinesChunk(isFirst) {
    return `
    <div class="timeline-chunk ${isFirst ? "timeline-chunk-active" : ""}">
      <div class="timeline-chunk-inner" ></div>
    </div>`;
  }

  function genetatePlayersChunk(slide, isFirst) {
    return `
    <div class="player-chunk ${isFirst ? "player-chunk-active" : ""}">
      <img src="${slide.url}" alt="${slide.alt || ""}" class="player-item">
      ${generateOverlays(slide)}
    </div>`;
  }

  function generateOverlays(slide) {
    if (slide.overlays === undefined) {
      return "";
    }

    let res = "";

    for (const el of slide.overlays) {
      // [["color", "orange"], ["top", "20%"]]
      // !!! map & join
      const styles = (el.styles !== undefined ? Object.entries(el.styles) : [])
        .map((el) => el.join(":"))
        .join(";");

      console.log(styles);
      res += `<div class = "player-chunk-overlay" style="${styles}"> ${renderOverlay(
        el
      )}</div>`;
    }

    return res;

    function renderOverlay(overlay) {
      if (overlay.type === "text") {
        return overlay.value;
      }

      if (overlay.type === "img") {
        return `<img src="${overlay.value}" alt="">`;
      }

      return "";
    }
  }

  function genetatePlayerLayout() {
    return `
    <div class="player">
      <div class="timeline">${timelinesChunk}</div>
      <div class="player-content-wrapper">
        <div class="player-chunk-switcher player-chunk-prev"></div>
        <div class="player-chunk-switcher player-chunk-next"></div>
    
        <div class="player-content">${playersChunk}</div>
      </div>
    </div>`;
  }

  target
    .querySelector(".player-chunk-prev")
    .addEventListener("click", switchToPrevChunk);

  target
    .querySelector(".player-chunk-next")
    .addEventListener("click", switchToNextChunk);

  runChunkSwitching(params.delayPerSlide || 1, 1);

  return target.querySelector(".player");

  function moveClass(className, method, pred) {
    const active = target.querySelector("." + className),
      next = active[method];

    if (pred && !pred(active)) {
      return null;
    }

    if (next) {
      active.classList.remove(className);
      next.classList.add(className);
      return active;
    }
    return null;
  }

  function switchToPrevChunk() {
    const prev = moveClass(
      "timeline-chunk-active",
      "previousElementSibling",
      (el) => {
        const inner = el.querySelector(".timeline-chunk-inner"),
          w = parseFloat(inner.style.width) || 0;

        inner.style.width = "";
        return w <= 20;
      }
    );

    if (prev) {
      moveClass("player-chunk-active", "previousElementSibling");
    }
  }

  function switchToNextChunk() {
    moveClass("player-chunk-active", "nextElementSibling");
    const el = moveClass("timeline-chunk-active", "nextElementSibling");

    if (el) {
      el.querySelector(".timeline-chunk-inner").style.width = "";
    }
  }

  function runChunkSwitching(time, step) {
    timeLineTimer = setInterval(() => {
      const active = target
        .querySelector(".timeline-chunk-active")
        .querySelector(".timeline-chunk-inner");

      const w = parseFloat(active.style.width) || 0;

      if (w === 100) {
        switchToNextChunk();
        return;
      }

      active.style.width = String(w + step) + "%";
    }, (time * 1000 * step) / 100);
  }
}
