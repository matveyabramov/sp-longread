# ЭХО / СЛЕПОЕ ПЯТНО

This file is the main source of truth for the current implementation.

Do not repeat the previous research phase unless explicitly requested.
Do not use Figma MCP unless explicitly requested.
Reference images in `context/references/` support the decisions already described here; they are not invitations to reinterpret the referenced websites from scratch.


# 1. PROJECT

«Эхо / Слепое пятно» — учебный редакционный digital longread о понимании английской речи в кино и сериалах.

Это НЕ:
- лендинг приложения;
- SaaS;
- образовательный сервис;
- продуктовая презентация;
- рекламная страница.

В longread нет:
- продуктового CTA;
- регистрации;
- продажи;
- описания функций приложения;
- логики «проблема → наш продукт → решение».

Сайт должен восприниматься как самостоятельная интерактивная редакционная история.


# 2. CORE IDEA

Человек может знать почти все слова в английской реплике и всё равно не заметить:

- идиому;
- каламбур;
- второй смысл;
- культурную отсылку;
- скрытую шутку.

Главная проблема:

человек не всегда понимает, что он что-то не понял.

Слова знакомы.
Сюжет продолжается.
Мозг достраивает недостающее.
Потерянный слой смысла может остаться незамеченным.


## Main metaphor

Главная метафора проекта — СЛЕПОЕ ПЯТНО.

Она должна работать как драматургический принцип, а не как декоративный мотив.

В начале пользователь физически переживает исчезновение точки из поля зрения.

После этого статья переносит этот опыт на язык:

часть смысла тоже может пройти мимо, хотя человеку кажется, что он понял реплику.

Важно:
это метафора опыта, а не утверждение, что физиологическое слепое пятно и языковое восприятие являются одним механизмом.


# 3. ARTICLE STRUCTURE

Структура ниже является актуальной основой сайта.

Не возвращаться к старой структуре из 8 экранов без необходимости.


## 01 / HERO

Header:

ЭХО / СЛЕПОЕ ПЯТНО

Main title:

Ты смотришь сериалы без перевода.
Сколько шуток из них ты правда понял?

Purpose:

- сразу обозначить тему;
- дать сильный визуальный хук;
- связать материал с кино;
- создать ощущение editorial / cinema, а не интерфейса сервиса.


## 02 / BLIND SPOT EXPERIMENT

Title:

Закрой один глаз

Instruction:

Закрой левый глаз. Правым смотри на крестик.

Нажми «Начать» и не переводи взгляд.

Composition:

- настоящий знак `+` расположен слева;
- точка расположена справа;
- большое спокойное поле;
- минимум UI.

Flow:

1. пользователь закрывает левый глаз;
2. фиксирует взгляд на `+`;
3. нажимает «Начать»;
4. точка автоматически и плавно движется по горизонтали;
5. при подходящем положении она может естественным образом попасть в слепое пятно пользователя;
6. после прохода появляется только возможность «Повторить».

After experiment:

Она не мигнула.
Не потускнела.
Просто исчезла.


## 03 / BRAIN + LANGUAGE

Title:

Мозг не любит пустоты

Purpose:

объяснить произошедшее и сразу связать опыт с языком.

Key idea:

В области слепого пятна нет светочувствительных клеток, но человек обычно не видит «дыру»: восприятие достраивает окружающую картинку.

С языком может происходить похожее на уровне субъективного опыта:

реплика звучит знакомо;
слова понятны;
сюжет продолжается;
но один слой смысла уже прошёл мимо.

Не перегружать раздел научными схемами.


## 04 / MEANING IS NOT THE SUM OF WORDS

Working title:

Смысл — не сумма слов

Purpose:

показать, где именно может возникать потеря смысла.

Одна реплика состоит не только из отдельных слов.

Possible layers:

WORDS
знакомы ли отдельные слова?

CONSTRUCTION
работают ли они вместе как идиома / устойчивое выражение / языковая конструкция?

CONTEXT
что происходит в конкретной сцене?

CULTURAL KNOWLEDGE
есть ли внешний культурный код, который нужно узнать?

Example logic:

the elephant in the room

WORDS
elephant / room — знакомы.

CONSTRUCTION
вместе это устойчивая идиома.

CONTEXT
в сцене речь идёт о проблеме, которую все видят, но не хотят обсуждать.

Этот блок должен подготовить читателя к типологии и кейсам.


## 05 / WAYS TO MISS MEANING

Purpose:

коротко показать основные типы смысловых «слепых зон» до конкретных сцен.

Categories:

IDIOM

Слова по отдельности знакомы, но выражение целиком означает другое.


PUN

Одно слово / звучание / конструкция одновременно поддерживает несколько чтений.


DOUBLE MEANING

Реплика работает сразу на двух смысловых уровнях.


CULTURAL REFERENCE

Дополнительный смысл находится за пределами самой фразы и требует внешнего контекста.

Это короткий визуальный раздел, а не четыре длинные карточки.


## 06 / FILM PHRASES / CASES

Главный кино-раздел longread.

Cases:

- the elephant in the room;
- I have a bone to pick with you;
- number one... number two...;
- ladybug;
- один проверенный cultural reference.

Любая информация о:
- фильме / сериале;
- сезоне;
- эпизоде;
- таймкоде;
- конкретной сцене;
- переводе;

должна быть подтверждена.

Если подтверждения нет:

[FACT CHECK]


### Interaction model

Основная механика вдохновлена Electra Filmworks.

Default:

крупный вертикальный список фраз.

Hover / focus:

соответствующий проверенный still / video появляется как большое background media.

Активная фраза остаётся главным текстовым объектом.

Остальные становятся менее контрастными, но остаются читаемыми.

Click / Enter / tap:

открывает / закрепляет один конкретный кейс.

Не показывать четыре полностью раскрытых кейса одновременно.


### Case structure

Каждый кейс может иметь свою логику раскрытия.

Не заставлять все кейсы выглядеть одинаково.

Examples:

IDIOM:
literal image → idiomatic meaning.

DOUBLE MEANING:
first reading → second reading.

PUN:
visible reading → wordplay mechanism.

CULTURAL REFERENCE:
surface meaning → recognised reference.

TRANSLATION:
может быть дополнительным слоем внутри конкретного кейса.


### Translation example

Использовать внутри кейса:

I have a bone to pick with you

Possible structure:

ORIGINAL
I have a bone to pick with you

LITERAL IMAGE
образ кости

MEANING
у меня к тебе серьёзная претензия

SEMANTIC TRANSLATION
Я пришёл выяснить отношения

Conclusion:

Конфликт сохранился.
Образ исчез.

Не делать отдельный большой Translation-раздел, если он повторяет механику блока с кейсами.

Не критиковать дубляж и переводчиков.


## 07 / 98%

Главный визуальный объект:

98%

Это типографическая кульминация.

Meaning:

высокий процент знакомой лексики помогает следить за содержанием, но сам по себе не гарантирует считывание юмора, идиомы или культурного контекста.

IMPORTANT:

НЕ утверждать:

«оставшиеся 2% — это шутки».

НЕ превращать этот блок в quantitative diagram юмора.

НЕ использовать progress bar как главный образ.

Само `98%` должно оставаться целым и огромным.


## 08 / HOW TO NOTICE SOMETHING WAS MISSED

Working title:

Сцена сама выдаёт, что что-то не сошлось

Purpose:

показать не сам пропущенный смысл, а его след.

Core pattern:

ожидание → несостыковка.


Examples:

Все слова понял.
Но почему они смеются?

Сюжет понятен.
Но почему он обиделся?

Ответ знаком.
Но почему здесь он звучит странно?

Это важный смысловой блок:

человек может не видеть сам пробел, но может заметить его последствия.

Название «Эхо» можно поддержать здесь концептуально:
реакция сцены остаётся как эхо смысла, который человек не распознал.


## 09 / WHAT TO DO

Title:

Не останавливай сериал.
Отмечай странные места.

Purpose:

дать простой способ поведения без превращения статьи в приложение / инструкцию сервиса.

Flow:

1. не переводить каждое слово во время просмотра;
2. заметить момент, где реакция / ответ / настроение сцены не совпадает с тем, что ты понял;
3. отметить таймкод;
4. досмотреть сцену / серию;
5. позже вернуться;
6. открыть оригинальные субтитры;
7. проверить конструкцию, второй смысл или культурный контекст.


## 10 / FINAL

Финал НЕ должен просто повторять экран Blind Spot Experiment.

Он должен завершить идею на новом уровне.

Working final thought:

Самое незаметное — не то, чего ты не знаешь.
А то, что тебе кажется понятным.

Alternative direction:

Слепое пятно начинается там,
где тебе кажется, что всё уже понятно.

Можно визуально вернуть:

- точку;
- пустое пространство;
- мотив исчезновения / обнаружения;

но не повторять полноценный эксперимент.

Финальный экран должен ощущаться как смысловое завершение истории, а не как второй экран №02.


## CREDITS / FOOTER

Credits идут ПОСЛЕ финала и не являются частью драматургической нумерации.

Include:

ЭХО / СЛЕПОЕ ПЯТНО

Учебный проект / 2026

Автор:
Матвей Абрамов

Группа:
[TO FILL]

Куратор:
[TO FILL]

Учебное заведение:
[TO FILL]

Contacts:
[TO FILL]

При необходимости:
sources / acknowledgements.

Footer не должен выглядеть как CTA.


# 4. CONTENT PRINCIPLES

Tone:

- редакционный;
- человеческий;
- короткий;
- конкретный;
- без рекламной воды;
- без псевдонаучности;
- без искусственного драматизма.

Писать от опыта читателя:

«ты слышишь»;
«ты понимаешь слова»;
«ты замечаешь реакцию».

Не использовать абстрактное:

«мозг слышит английскую речь».


Не придумывать:

- названия сериалов;
- фильмы;
- эпизоды;
- таймкоды;
- сцены;
- переводы;
- исследования;
- цитаты.

Если нет подтверждения:

[FACT CHECK]


# 5. VISUAL DIRECTION

Overall feeling:

DARK EDITORIAL / CINEMA / PREMIUM

Не:

SAAS / DASHBOARD / GAMING / CYBERPUNK / TERMINAL.


## Palette

Primary background:
deep almost-black.

Suggested base:
#0B0D0F / nearby value.

Primary foreground:
warm off-white rather than pure white.

Accent:

#D6FF3B

Это основной акцент проекта.

Do NOT use:
orange / coral as the main accent.


### Accent usage

#D6FF3B использовать дозированно:

- experimental point;
- active phrase;
- small indices;
- interactive feedback;
- selected word / revealed second meaning;
- navigation active state;
- occasional graphic marker.

Не превращать весь сайт в neon-green interface.


## Typography

Maximum:
2 type families.

Need:

1. expressive display grotesk;
2. neutral readable text face.

Large display typography works as graphic composition.

Approximate display/body contrast:
~10x or more when composition supports it.

Tracking for large caps:
around -1%.

Numbers are guidelines, not rigid constraints.


## Composition

Desktop container:
approximately 1440–1600px maximum.

Section vertical spacing:
approximately 80–160px.

Grid gap:
approximately 16–30px.

Use large negative space.

Do not fill every viewport.

If a meaningful face / object occupies the center of media:

do not cover it with large text.

Move typography to a side column if needed.

Hero may use approximately 42/58 or similar asymmetric mass balance.

This ratio is an Echo design decision, not a requirement copied from Spartak.


# 6. VISUAL REFERENCES

Reference images are stored in:

`context/references/`

Do NOT re-research these websites unless explicitly requested.

Use only the properties below.


## ELECTRA FILMWORKS

Files:

- `electra-default.jpg`
- `electra-hover.jpg`

TAKE:

- large vertical list as an entry point into media;
- strong oversized typography;
- dark cinematic environment;
- active item remains dominant;
- neighboring items recede;
- interaction:
  `text item → fullscreen / near-fullscreen background media`;
- strong relationship between typography and moving image.

PRIMARY USE:

FILM PHRASES / CASES.

Default:
large phrase list.

Hover / focus:
preview corresponding verified still/video.

Click / Enter:
lock/open selected case and reveal second meaning.

If verified video is unavailable:
use a verified still.

DO NOT TAKE:

- Electra branding;
- exact typography;
- star symbol;
- automatic case cycling;
- endless list movement.


## IHEARTCOMIX

Files:

- `iheartcomix-main.jpg`
- `iheartcomix-menu.jpg`
- `iheartcomix-menu-hover.jpg` if available.

TAKE:

- strong context switch;
- fullscreen overlay navigation;
- clear active/inactive hierarchy;
- outline → solid type state on interaction;
- transitions that feel like entering another visual state.

USE:

fullscreen chapter navigation / selected overlay interactions.

Navigation requirements:

- close button;
- Esc support;
- correct keyboard focus return;
- same longread;
- no artificial routing.

DO NOT TAKE:

- splash screen;
- collage aesthetic;
- comic shapes;
- palette;
- chaotic spatial movement.


## BLIMP

Files:

- `blimp-default.jpg`
- `blimp-hover.jpg`
- `blimp-overlapping-album-field.jpg`

TAKE:

From default / hover:

- strong hierarchy;
- large negative space;
- selective high-contrast active state;
- active element can invert / darken while surrounding content remains readable.

From overlapping album field:

- loose non-grid media placement;
- controlled overlap;
- depth;
- visual clusters separated by large empty areas;
- feeling of one continuous visual field rather than rigid cards.

USE:

secondary composition device only.

Possible applications:

- transition between chapters;
- controlled cluster of film fragments;
- related stills around one active phrase;
- occasional media-field composition.

IMPORTANT:

Use only a small number of elements.

Goal:
spatial depth, not visual density.

REFERENCE MISMATCH:

Expected card lift / custom cursor were not confirmed in the inspected live version.

Do not claim them as observed BLIMP mechanics.

DO NOT TAKE:

- album-cover aesthetic;
- dozens of simultaneous items;
- chaotic collage;
- technical corner frames;
- monospaced visual language as primary style;
- free spatial wandering.


## SPARTAK RUGBY

File:

- `spartak-hero.jpg`

TAKE:

- extreme scale contrast;
- one dominant visual object;
- oversized caps functioning as composition;
- strong full-viewport hero;
- relationship between a large headline and a major media object.

USE:

HERO scale / visual mass.

For Echo:
an independent asymmetric composition such as ~42/58 may be used.

REFERENCE MISMATCH:

The expected asymmetric two-column layout was not observed in the current Spartak hero.

Therefore:
42/58 is an Echo design decision, not a copied reference mechanic.

DO NOT TAKE:

- red/white branding;
- sports aggression;
- ultra-condensed typography;
- text covering meaningful facial features.


# 7. MOTION / INTERACTIONS

Motion must support the narrative.

Do not make every element move.


## Motion hierarchy

PRIMARY MOTION

- blind spot point movement;
- film phrase → media reveal;
- selected major section transitions;
- recurring marquee if content supports it.

SECONDARY MOTION

- hover/focus states;
- menu states;
- type contrast changes;
- subtle media shift.

AMBIENT MOTION

- minimal;
- slow;
- optional;
- never competing with reading.


## Marquee

Recurring horizontal marquee is allowed as the main repeated rhythm.

Possible content:

IDIOM / PUN / DOUBLE MEANING / CULTURAL REFERENCE

or short fragments of real article phrases.

Do not use meaningless logos.

Suggested reference values:

item:
~420×270

gap:
~12px

radius:
~16px

scroll influence:
~0.3

These are starting values, not rigid requirements.

Do not use marquee inside the Blind Spot Experiment.


## Cursor

Custom cursor is optional.

If used:

- simple point / ring;
- subtle reaction to interactive elements;
- smoothing around lerp 0.10–0.14.

Disable for:

`pointer: coarse`.

Respect:

`prefers-reduced-motion`.

Inside Blind Spot Experiment:

disable custom cursor OR make it unmistakably different from the experimental point.


## Transitions

This is one longread.

Do NOT create artificial route/page transitions.

Use transitions for:

- chapter state changes;
- fullscreen navigation;
- overlay reveal;
- media reveal;
- controlled wipe.

Suggested durations:

0.3s
0.5s
0.6s

Primary easing:

cubic-bezier(0.215, 0.61, 0.355, 1)


# 8. BLIND SPOT EXPERIMENT

This is the most technically sensitive section.


## Critical rule

The point must ALWAYS remain physically rendered.

DO NOT simulate disappearance using:

- opacity;
- display;
- visibility;
- mask;
- clip-path;
- same-color-as-background trick;
- DOM removal;
- JavaScript hide logic.

JavaScript may move the point.

It must not decide when the point becomes invisible.

The disappearance must happen only because of the viewer's visual blind spot.


## UI

Keep only:

- instructions;
- `+`;
- point;
- Start;
- Repeat.

Do NOT add:

- slider;
- `− / +`;
- coordinate controls;
- calibration panel;
- decorative grid;
- competing animation.


# 9. RESPONSIVE / ACCESSIBILITY

Desktop is the primary visual direction.

But all important content must remain usable on:

- laptop;
- tablet;
- mobile;
- touch.


## Film phrases

Desktop:
hover/focus preview + click/open case.

Touch:
tap selects / opens one case.

Do not depend on hover for essential information.


## Navigation

Must support:

- keyboard;
- Esc;
- visible close control;
- correct focus management.


## Reduced motion

Respect:

`prefers-reduced-motion`.

Reduced mode:

- remove non-essential continuous motion;
- simplify transitions;
- retain meaning and hierarchy;
- Blind Spot point movement may remain only if necessary for the actual experiment.


# 10. FACT CHECK

The following phrases/cases require source verification before making claims about a specific scene:

- the elephant in the room;
- I have a bone to pick with you;
- number one... number two...;
- ladybug;
- cultural reference example.

Never invent:

- film/show title;
- episode;
- timestamp;
- context;
- exact dub quote.

Use:

[FACT CHECK]

where verification is incomplete.


## 98%

Treat `98%` carefully.

Do not state that:
the unknown 2% equals missed jokes.

The intended point is:

high lexical coverage does not automatically guarantee full understanding of humor or layered meaning.

Any research attribution must be verified before final publication.


# 11. DO NOT

- Do not turn Echo into a product landing page.
- Do not add CTA.
- Do not advertise an application.
- Do not invent facts.
- Do not invent movie scenes.
- Do not use orange/coral as the main accent.
- Do not replace #D6FF3B without a strong reason.
- Do not hide the blind-spot point programmatically.
- Do not add manual blind-spot calibration controls.
- Do not make every section a grid of cards.
- Do not copy entire visual identities of reference websites.
- Do not re-research reference websites unless explicitly requested.
- Do not use Figma MCP unless explicitly requested.
- Do not create research documents before implementing.
- Do not add heavy dependencies without a clear benefit.
- Do not rewrite the project into a new framework without necessity.
- Do not create fake page routing for transitions.
- Do not use `·` as an interface separator.

Use:

`/`

Example:

ЭХО / СЛЕПОЕ ПЯТНО


# 12. ASSETS

Reference assets live in:

`context/references/`

Expected reference files:

- electra-default.jpg
- electra-hover.jpg
- iheartcomix-main.jpg
- iheartcomix-menu.jpg
- iheartcomix-menu-hover.jpg if available
- blimp-default.jpg
- blimp-hover.jpg
- blimp-overlapping-album-field.jpg
- spartak-hero.jpg

Optional:
1–2 screenshots of the previous Echo concept if useful for understanding project continuity.

Do not treat old Echo screenshots as final design requirements.


## Movie media

Real film stills / clips may still be missing.

When missing:

use a clear placeholder:

[ASSET REQUIRED]

Do not silently substitute unrelated stock media.


# 13. IMPLEMENTATION INTENT

The first implementation should be a real working visual prototype, not another planning document.

The expected workflow is:

1. inspect the existing local codebase;
2. preserve the existing stack unless there is a strong reason not to;
3. establish basic design tokens;
4. build the longread structure;
5. implement desktop-first visual direction;
6. implement the Blind Spot Experiment correctly;
7. implement Film Phrases interaction;
8. implement main motion/navigation;
9. run the site locally;
10. inspect the actual result in browser;
11. make one or two corrective visual passes;
12. stop and show the result.

Do not spend a full run writing another long research plan.


# 14. OPEN QUESTIONS

These may remain unresolved during the first build:

- final verified movie assets;
- exact cultural-reference case;
- final credits information;
- final research citation for the 98% claim;
- final typography pair if current project fonts are insufficient.

When an unresolved issue does not block implementation:

use a clear placeholder and continue.

# 15. REFERENCE SOURCE LINKS

The local screenshots in `context/references/` and the instructions in this brief are the primary source of truth for implementation.

The live URLs below are included only for provenance and optional spot-checking of motion / interaction if a static screenshot is insufficient.

Do NOT automatically re-research these websites.
Do NOT reinterpret the entire visual identity of the references.
Do NOT spend time reproducing their structure or branding.

Use the live website only when:
- the brief describes a motion or interaction that cannot be understood from the local screenshots;
- a quick spot-check is necessary to reproduce that specific mechanic correctly.

If the current live website differs from the screenshots or from the decisions in this brief, follow this brief and the local reference screenshots unless explicitly instructed otherwise.


## ELECTRA FILMWORKS

https://electrafilmworks.com/directors

Primary reference for:
- film phrase list;
- fullscreen media on hover / focus;
- relationship between oversized typography and moving media.


## IHEARTCOMIX

https://iheartcomix.com

Primary reference for:
- fullscreen overlay navigation;
- active / inactive menu states;
- strong context transitions.


## BLIMP

https://www.blimp.gr/

Primary reference for:
- spatial media composition;
- selective active-state contrast;
- controlled overlap and negative space.


## SPARTAK RUGBY

https://spartakrugby.ru

Primary reference for:
- hero scale;
- oversized typography;
- relationship between one dominant media object and large type.