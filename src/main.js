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
  push: {
    category: '01 / Idiom', film: 'Frozen / 2013', title: 'When push<br>comes to shove',
    content: `
      <div class="case-body"><div><h3>Буквальное прочтение</h3><p>Когда толчок<br>доходит до пинка.</p></div><div><h3>Идиоматическое значение</h3><p>Когда ситуация становится<br>по-настоящему трудной.</p></div></div>
      <div class="case-sequence"><section><span>Что происходит в сцене</span><p>Фраза звучит на фоне физической борьбы: герои действительно толкаются и получают толчки.</p></section><section><span>Почему это работает</span><p>Идиома описывает критический момент, а изображение возвращает словам push и shove их буквальное действие. Один смысл слышен, второй разыгрывается в кадре.</p></section></div>
      <p class="case-conclusion">Идиома становится<br>видимой.</p>`
  },
  bone: {
    category: '02 / Idiom / Перевод', film: 'The Lion King / 1994', title: 'I have a bone<br>to pick with you',
    content: `
      <div class="case-body"><div><h3>Буквальный образ</h3><p>Кость, которую<br>предстоит обглодать.</p></div><div><h3>Идиоматическое значение</h3><p>У меня к тебе<br>серьёзная претензия.</p></div></div>
      <div class="case-translation"><span class="eyebrow">Смысловой перевод / Авторский пример</span><p>«Я пришёл выяснить отношения»</p></div>
      <div class="case-sequence"><section><span>Что сохраняется</span><p>Намерение предъявить претензию и прямое напряжение между героями.</p></section><section><span>Что исчезает</span><p>Образ кости — особенно заметный в мире животных The Lion King.</p></section></div>
      <p class="case-conclusion">Конфликт сохранился.<br>Образ исчез.</p>`
  },
  numbers: {
    category: '03 / Double meaning', film: 'Austin Powers: The Spy Who Shagged Me / 1999', title: 'Who does Number Two<br>work for?',
    content: `
      <div class="case-reading"><span>Первое прочтение</span><p>«На кого работает Номер Два?» Austin допрашивает противника о человеке по прозвищу Number Two.</p></div>
      <button class="pill meaning-toggle" aria-expanded="false" aria-controls="second-reading">Открыть второе прочтение <span aria-hidden="true">↓</span></button>
      <div class="case-reading second-reading" id="second-reading" hidden><span>Второе прочтение</span><p>Number two — разговорный эвфемизм для дефекации. Мужчина в соседней кабинке слышит вопрос как обращение к себе.</p><div class="case-sequence"><section><span>Почему работают оба смысла</span><p>Austin говорит о сообщнике, но место действия превращает Number Two в туалетную шутку. Сосед отвечает на другое прочтение той же реплики — и сцена удерживает оба одновременно.</p></section></div></div>
      <p class="case-conclusion">Один вопрос.<br>Два адресата.</p>`
  },
  ladybug: {
    category: '04 / Pun', film: 'A Bug’s Life / 1998', title: 'Ladybug',
    content: `
      <div class="case-reading"><span>Значение слова</span><p>Ladybug — божья коровка. Название вида ничего не говорит о поле конкретного насекомого.</p></div>
      <div class="word-split"><span>lady</span> + bug</div>
      <div class="case-sequence"><section><span>Ложное ожидание</span><p>Слово lady заставляет других персонажей принимать Фрэнсиса за женщину.</p></section><section><span>Как фильм строит шутку</span><p>Фрэнсис — мужчина. Персонажи снова ошибаются из-за названия, а его раздражение превращает языковую ловушку в повторяющийся гэг.</p></section></div>
      <p class="case-conclusion">Название вида<br>создаёт роль.</p>`
  },
  culture: {
    category: '05 / Cultural reference', film: 'The Shining / 1980', title: 'Here’s Johnny!',
    content: `
      <div class="case-reading"><span>На поверхности</span><p>«А вот и Джонни!» Джек просовывает голову в проломленную дверь и объявляет своё появление.</p></div>
      <div class="case-reference"><span>Внешняя отсылка</span><p>Так Эд Макмэн представлял ведущего Джонни Карсона в The Tonight Show: “Heeere’s Johnny!”</p></div>
      <div class="case-sequence"><section><span>Что добавляет узнавание</span><p>Угроза начинает звучать как пародия на весёлое телевизионное приветствие. Знакомая домашняя формула сталкивается с насилием в кадре — и делает момент ещё более странным и тревожным.</p></section></div>
      <p class="case-conclusion">Без отсылки — угроза.<br>С отсылкой — ещё и чёрная шутка.</p>`
  }
};
const casesSection = document.querySelector('#cases');
const phrases = [...document.querySelectorAll('.phrase')];
// Swap working clips here without changing the list or case content.
const caseMedia = {
  push: '/public/media/cases/case-01.mp4',
  bone: '/public/media/cases/case-02.mp4',
  numbers: '/public/media/cases/case-03.mp4',
  ladybug: '/public/media/cases/case-04.mp4',
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
  // Keep the selected scene as the chapter's resting composition.
  syncPlayback();
}
motionButton.addEventListener('click', () => { motionPaused = !motionPaused; syncPlayback(); });
reducedMotion.addEventListener('change', () => { motionPaused = reducedMotion.matches; syncPlayback(); updateElephant(); });
document.addEventListener('visibilitychange', syncPlayback);
new IntersectionObserver(([entry]) => {
  casesVisible = entry.isIntersecting;
  if (casesVisible && !activeCase) preview(phrases[0]);
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
    toggle.innerHTML = second.hidden ? 'Открыть второе прочтение <span aria-hidden="true">↓</span>' : 'Скрыть второе прочтение <span aria-hidden="true">↑</span>';
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
casesSection.addEventListener('pointerleave', () => {
  if (!casesSection.contains(document.activeElement)) clearPreview();
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
