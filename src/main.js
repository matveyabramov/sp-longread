const nav = document.querySelector('#navigation');
const caseDialog = document.querySelector('#case-dialog');
let returnFocus;

function openDialog(dialog, trigger) {
  returnFocus = trigger;
  dialog.showModal();
  document.body.classList.add('modal-open');
  dialog.querySelector('[data-close]').focus();
}
document.querySelector('.menu-trigger').addEventListener('click', event => openDialog(nav, event.currentTarget));
document.querySelectorAll('dialog').forEach(dialog => {
  dialog.querySelector('[data-close]').addEventListener('click', () => dialog.close());
  dialog.addEventListener('close', () => {
    document.body.classList.remove('modal-open');
    returnFocus?.focus({ preventScroll: true });
  });
});
nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => nav.close()));

const sections = document.querySelectorAll('main > section');
const chapterObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    nav.querySelectorAll('a').forEach(link => {
      const current = link.hash === `#${entry.target.id}`;
      link.classList.toggle('current', current);
      if (current) link.setAttribute('aria-current', 'location');
      else link.removeAttribute('aria-current');
    });
  });
}, { rootMargin: '-15% 0px -65% 0px' });
sections.forEach(section => chapterObserver.observe(section));

const cases = {
  sound: {
    category: '01 / Pun / Sound', film: 'Airplane! (1980)', title: 'Surely you can’t<br>be serious',
    content: `
      <section class="case-section"><h3>На слух</h3><p class="case-quote" lang="en">Surely you can’t be serious.</p><p>«Неужели ты серьёзно?»</p></section>
      <section class="case-section"><h3>Что слышит доктор</h3><p class="case-equation"><span>Surely</span> ≈ <em>Shirley</em></p></section>
      <section class="case-section"><h3>Ответ</h3><p class="case-quote" lang="en">I am serious.<br>And don’t call me Shirley.</p></section>
      <section class="case-section case-mechanism"><h3>Механика</h3><p>Шутка держится почти целиком на звучании.<br>Surely — обычное наречие, но доктор делает вид,<br>будто услышал женское имя Shirley.</p><p>Если считывать только смысл предложения,<br>диалог остаётся понятным — а шутка исчезает.</p></section>
      <p class="case-conclusion">Ты понял вопрос.<br>Но услышал ли имя?</p>`
  },
  tree: {
    category: '02 / Broken idiom / Wordplay', film: 'Back to the Future Part II (1989)', title: 'Make like a tree and<br>get out of here',
    content: `
      <section class="case-section"><h3>Версия Биффа</h3><p class="case-quote" lang="en">Make like a tree and get out of here.</p></section>
      <section class="case-section"><h3>Как должно быть</h3><p class="case-quote" lang="en">Make like a tree and leave.</p></section>
      <section class="case-section case-mechanism"><h3>Механика</h3><p>В выражении есть каламбур:<br>leave — «уйти»,<br>leaf — «лист».</p><p>Бифф ломает шутливую конструкцию,<br>заменяя ключевое слово обычным<br>get out of here.</p><p>Во второй части старый Бифф прямо исправляет молодого:</p><p class="case-quote" lang="en">It’s leave, you idiot.</p></section>
      <p class="case-conclusion">Все слова правильные.<br>А выражение — нет.</p>`
  },
  numbers: {
    category: '03 / Double meaning', film: 'Austin Powers: International Man of Mystery (1997)', title: 'Who does Number Two<br>work for?',
    content: `
      <section class="case-section"><h3>Первое прочтение</h3><p>Number Two — имя / обозначение персонажа Доктора Зло.</p></section>
      <button class="meaning-toggle" aria-expanded="false" aria-controls="second-reading">Второе прочтение <span aria-hidden="true">↓</span></button>
      <div class="second-reading" id="second-reading" hidden>
        <section class="case-section"><h3>Второе прочтение</h3><p>number two — разговорное обозначение дефекации.</p></section>
        <section class="case-section case-mechanism"><h3>Механика</h3><p>Остин требует сказать, на кого работает Number Two.</p><p>Мужчина в соседней кабинке слышит второе значение<br>и думает, что Остин буквально борется<br>с содержимым унитаза.</p></section>
      </div>
      <p class="case-conclusion">Одна фраза.<br>Две сцены одновременно.</p>`
  },
  sherlocked: {
    category: '04 / Visual wordplay', film: 'Sherlock — S02E01', title: 'I AM<br>SHER LOCKED',
    content: `
      <div class="sherlock-construction">
        <section class="case-section"><h3>Что видно сначала</h3><p class="case-quote" lang="en">I AM <span class="blank-word">____</span> LOCKED</p><p>Телефон защищён четырёхсимвольным паролем.</p></section>
        <section class="case-section sherlock-key"><h3>Ключ</h3><p>SHER</p></section>
        <section class="case-section"><h3>Что появляется</h3><p class="case-quote" lang="en">I AM <em>SHER</em> LOCKED</p><p class="word-split"><em>SHER</em> + LOCKED</p></section>
      </div>
      <section class="case-section case-mechanism"><h3>Механика</h3><p>Фраза одновременно читается как интерфейс телефона —<br>locked —<br>и как I AM SHERLOCKED.</p><p>Имя Sherlock оказывается спрятано<br>внутри самой конструкции.</p><p>Смысл здесь возникает не только из того,<br>что сказано, но и из того, как фраза показана.</p></section>
      <p class="case-conclusion">Иногда второй смысл не произносят.<br>Его показывают.</p>`
  },
  culture: {
    category: '05 / Cultural reference', film: 'The Shining (1980)', title: 'Here’s Johnny!',
    content: `
      <section class="case-section"><h3>Если не знать отсылку</h3><p>Джек проламывает дверь,<br>просовывает голову внутрь и говорит:</p><p class="case-quote" lang="en">Here’s Johnny!</p><p>Сама фраза почти ничего не объясняет.</p></section>
      <section class="case-section"><h3>Что слышал американский зритель</h3><p>Это узнаваемая формула,<br>которой Эд Макмэхон представлял Джонни Карсона<br>в The Tonight Show.</p></section>
      <section class="case-section case-mechanism"><h3>Что это добавляет</h3><p>На секунду сцена погони превращается<br>в абсурдный выход телеведущего.</p><p>Без культурного контекста происходящее<br>всё равно понятно,<br>но слой чёрного юмора легко пропустить.</p></section>
      <p class="case-conclusion">Ты услышал каждое слово.<br>Но часть реплики была не в фильме.</p>`
  }
};
const casesSection = document.querySelector('#cases');
const phrases = [...document.querySelectorAll('.phrase')];
// Swap working clips here without changing the list or case content.
const caseMedia = {
  sound: '/public/media/cases/case-01.mp4',
  tree: '/public/media/cases/case-02.mp4',
  numbers: '/public/media/cases/case-03.mp4',
  sherlocked: '/public/media/cases/case-04.mp4',
  culture: '/public/media/cases/case-05.mp4'
};
const reducedMotion = matchMedia('(prefers-reduced-motion: reduce)');
const videos = new Map();
let activeCase;
let casesVisible = false;
let motionPaused = reducedMotion.matches;
const motionButton = document.querySelector('.case-motion');
function syncPlayback() {
  videos.forEach((video, key) => {
    if (key === activeCase && casesVisible && !motionPaused && !document.hidden && !caseDialog.open) {
      video.play().catch(() => {});
    } else video.pause();
  });
  motionButton.textContent = motionPaused ? 'Продолжить видео' : 'Приостановить видео';
  motionButton.setAttribute('aria-pressed', String(motionPaused));
}
function preview(button) {
  const key = button.dataset.case;
  activeCase = key;
  if (!videos.has(key)) {
    const video = document.createElement('video');
    video.muted = true;
    video.loop = true;
    video.playsInline = true;
    video.autoplay = !motionPaused;
    video.preload = 'auto';
    video.poster = caseMedia[key].replace('.mp4', '.jpg');
    video.src = caseMedia[key];
    video.addEventListener('loadeddata', () => {
      // Reduced motion retains a still frame of the selected clip.
      if (motionPaused && video.currentTime === 0) video.currentTime = Math.min(.1, video.duration / 2);
      syncPlayback();
    });
    document.querySelector('#case-videos').append(video);
    videos.set(key, video);
  }
  videos.forEach((video, videoKey) => video.classList.toggle('is-active', videoKey === key));
  casesSection.classList.add('has-preview');
  phrases.forEach(phrase => phrase.classList.toggle('is-active', phrase === button));
  document.querySelector('#preview-caption').textContent = `${cases[key].film} / Рабочий видеофрагмент`;
  syncPlayback();
}
function clearPreview() {
  if (caseDialog.open) return;
  activeCase = undefined;
  casesSection.classList.remove('has-preview');
  phrases.forEach(phrase => phrase.classList.remove('is-active'));
  videos.forEach(video => video.classList.remove('is-active'));
  document.querySelector('#preview-caption').textContent = 'Пять реплик / Пять сцен';
  syncPlayback();
}
motionButton.addEventListener('click', () => { motionPaused = !motionPaused; syncPlayback(); });
reducedMotion.addEventListener('change', () => { motionPaused = reducedMotion.matches; syncPlayback(); updateElephant(); updateExperiment(); });
document.addEventListener('visibilitychange', syncPlayback);
new IntersectionObserver(([entry]) => {
  casesVisible = entry.isIntersecting;
  syncPlayback();
}, { rootMargin: '200px 0px' }).observe(casesSection);
caseDialog.addEventListener('close', syncPlayback);
function renderCase(key) {
  const data = cases[key];
  document.querySelector('#case-category').textContent = data.category;
  document.querySelector('#case-content').innerHTML = `
    <h2 id="case-title">${data.title}</h2>
    <p class="case-meta">${data.film}</p>
    ${data.content}`;
  const toggle = caseDialog.querySelector('.meaning-toggle');
  toggle?.addEventListener('click', () => {
    const second = caseDialog.querySelector('.second-reading');
    second.hidden = !second.hidden;
    toggle.setAttribute('aria-expanded', String(!second.hidden));
    toggle.innerHTML = second.hidden ? 'Второе прочтение <span aria-hidden="true">↓</span>' : 'Скрыть второе прочтение <span aria-hidden="true">↑</span>';
  });
  caseDialog.scrollTop = 0;
}
phrases.forEach(button => {
  button.addEventListener('pointerenter', event => { if (event.pointerType !== 'touch') preview(button); });
  button.addEventListener('focus', () => preview(button));
  button.addEventListener('click', () => {
    preview(button);
    renderCase(button.dataset.case);
    openDialog(caseDialog, button);
    syncPlayback();
  });
});
document.querySelector('.phrase-list').addEventListener('pointerleave', () => {
  if (!document.activeElement.matches?.(':focus-visible')) clearPreview();
});
document.querySelector('.phrase-list').addEventListener('focusout', event => {
  if (!casesSection.contains(event.relatedTarget)) clearPreview();
});

// One scroll-linked entrance; no perpetual motion or additional objects.
const elephantStage = document.querySelector('.layer-stage');
const elephant = document.querySelector('.elephant-object');
let elephantFrame;
function updateElephant() {
  elephantFrame = undefined;
  const top = elephantStage.getBoundingClientRect().top;
  const progress = Math.max(0, Math.min(1, (innerHeight * .9 - top) / (innerHeight * .55)));
  elephant.style.transform = `translateY(${reducedMotion.matches ? 0 : (1 - progress) * 8}%)`;
}
function scheduleElephant() {
  if (!elephantFrame) elephantFrame = requestAnimationFrame(updateElephant);
}
addEventListener('scroll', scheduleElephant, { passive: true });
addEventListener('resize', scheduleElephant);
updateElephant();
syncPlayback();

// Three reversible meanings share one sticky viewport. The green point stays
// rendered throughout and enters the viewport with the experiment stage.
const experiment = document.querySelector('#experiment');
const experimentInstruction = document.querySelector('.experiment-instruction');
const experimentResult = document.querySelector('.experiment-result');
const experimentFixation = document.querySelector('.experiment .fixation');
const experimentPoint = document.querySelector('.experiment .experiment-point');
const clamp = (value, min = 0, max = 1) => Math.min(max, Math.max(min, value));
const smoothstep = (from, to, value) => {
  const progress = clamp((value - from) / (to - from));
  return progress * progress * (3 - 2 * progress);
};
function updateExperiment() {
  const rect = experiment.getBoundingClientRect();
  const travel = Math.max(1, rect.height - innerHeight);
  const progress = clamp(-rect.top / travel);
  const instructionExit = smoothstep(.26, .35, progress);
  const resultEntry = smoothstep(.65, .74, progress);
  const focusEntry = smoothstep(.3, .38, progress);
  const focusExit = smoothstep(.61, .69, progress);

  experimentInstruction.style.opacity = String(1 - instructionExit);
  experimentInstruction.style.transform = reducedMotion.matches ? 'none' : `translateY(${-instructionExit * 3}%)`;
  experimentResult.style.opacity = String(resultEntry);
  experimentResult.style.transform = reducedMotion.matches ? 'none' : `translateY(${(1 - resultEntry) * 3}%)`;
  experimentFixation.style.opacity = String(focusEntry * (1 - focusExit));
  const pointOffset = (1 - focusEntry) * innerHeight;
  experimentPoint.style.transform = `translate(-50%,calc(-50% + ${pointOffset}px))`;
}

// Continuous wheel interpolation on fine pointers. The document remains the
// scroll container; touch, keyboard and accessibility scrolling stay native.
const finePointer = matchMedia('(hover: hover) and (pointer: fine)');
let smoothTarget = scrollY;
let smoothCurrent = scrollY;
let smoothFrame;
function runSmoothScroll() {
  smoothCurrent += (smoothTarget - smoothCurrent) * .18;
  if (Math.abs(smoothTarget - smoothCurrent) < .5) {
    smoothCurrent = smoothTarget;
    scrollTo({ top: smoothCurrent, behavior: 'instant' });
    smoothFrame = undefined;
    return;
  }
  scrollTo({ top: smoothCurrent, behavior: 'instant' });
  smoothFrame = requestAnimationFrame(runSmoothScroll);
}
addEventListener('wheel', event => {
  if (reducedMotion.matches || !finePointer.matches || event.ctrlKey || event.metaKey || event.defaultPrevented || event.target.closest('dialog')) return;
  event.preventDefault();
  if (!smoothFrame) smoothCurrent = scrollY;
  const maximum = document.documentElement.scrollHeight - innerHeight;
  smoothTarget = clamp(smoothTarget + event.deltaY, 0, maximum);
  if (!smoothFrame) smoothFrame = requestAnimationFrame(runSmoothScroll);
}, { passive: false });

// The case list responds to direction, then softly returns to neutral.
const phraseList = document.querySelector('.phrase-list');
let lastScroll = scrollY;
let listX = 0;
let listRotation = 0;
let listTargetX = 0;
let listTargetRotation = 0;
let listMotionFrame;
function settlePhraseList() {
  listX += (listTargetX - listX) * .18;
  listRotation += (listTargetRotation - listRotation) * .18;
  listTargetX *= .82;
  listTargetRotation *= .82;
  phraseList.style.transform = `translate3d(${listX.toFixed(2)}px,0,0) rotate(${listRotation.toFixed(3)}deg)`;
  if (Math.abs(listX) + Math.abs(listRotation) + Math.abs(listTargetX) + Math.abs(listTargetRotation) > .04) {
    listMotionFrame = requestAnimationFrame(settlePhraseList);
  } else {
    phraseList.style.transform = '';
    listMotionFrame = undefined;
  }
}
function updateScrollScenes() {
  updateExperiment();
  scheduleElephant();
  const delta = scrollY - lastScroll;
  lastScroll = scrollY;
  const caseRect = casesSection.getBoundingClientRect();
  if (!reducedMotion.matches && caseRect.bottom > 0 && caseRect.top < innerHeight && Math.abs(delta) > .1) {
    listTargetX = clamp(delta * .12, -6, 6);
    listTargetRotation = clamp(delta * .008, -.35, .35);
    if (!listMotionFrame) listMotionFrame = requestAnimationFrame(settlePhraseList);
  }
  if (!smoothFrame) {
    smoothTarget = scrollY;
    smoothCurrent = scrollY;
  }
}
addEventListener('scroll', updateScrollScenes, { passive: true });
addEventListener('resize', updateExperiment);
updateExperiment();
