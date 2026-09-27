# Iceberg → Echo: editorial composition and motion research

Research date: 27 September 2026. Reference: [icebergdoc.org](https://www.icebergdoc.org/), English homepage.

**Status: Iceberg is Echo’s PRIMARY art-direction and motion reference for future work, per the current user instruction.** This report does not change Echo’s implementation, content requirements, or visual identity. Earlier references remain historical or technique-specific context; they should not override this new reference priority.

Method: the project’s [explain-interface skill](../../.agents/skills/explain-interface/SKILL.md), live browser inspection, computed styles and element rectangles, and inspection of publicly delivered HTML, CSS and JavaScript. Desktop was inspected at **1440 × 900 CSS px**; responsive inspection used **375 × 812 CSS px**, plus an initial 319 px-wide view. Scroll traversal covered the complete desktop homepage, including forward, fast forward, reverse, and settled states in the projects sequence. Mobile inspection covered the opening, photographic reading scenes, typographic interlude and project entrance. Mobile here means a narrow browser viewport, not a physical touch-device test.

## Evidence rules and scope

- **OBSERVED / measured:** visible in the live page, read from computed layout, or explicitly present in delivered source. Source-only mechanics are identified as such.
- **OBSERVED / derived:** arithmetic from verified dimensions or declarations. These are not additional independent measurements.
- **INFERRED:** interpretation of the visual effect, likely intention, or a technical conclusion that the inspection cannot fully establish.
- **PRINCIPLES FOR ECHO / OPPORTUNITIES FOR ECHO:** proposed transfers. Any numbers here are proposed Echo targets, not measurements of Iceberg.

This is an analysis of the homepage, not an audit of all routes. No claim is made about its complete CMS, build pipeline, all device classes, GPU performance, or assistive-technology behavior. No performance trace or frame-by-frame recording was taken. A browser resize from mobile to desktop initially left the intro in its small aperture state; a reload at desktop width restored the complete experience. Measurements below come from the initialized page. That isolated resize issue is not evidence of a universal loading failure.

## OBSERVED — 1. Composition

### 1.1 The page has a coordinate system, but not a repeated section template

**Measured/source:** desktop dimensions repeatedly use `authored number / 2024 × viewport width`. The root token is `--figma-breakpoint-2xl: 2024`. At 1440 px, the conversion factor is approximately **0.71146**. An authored 350-unit inset becomes approximately 249 px. This explains many apparently unusual pixel measurements: they are proportional coordinates from a large reference canvas, not a conventional 8 px spacing scale. [Global CSS](https://www.icebergdoc.org/_nuxt/entry.BwDkyL-q.css), [homepage CSS](https://www.icebergdoc.org/_nuxt/index.kwK62J-8.css).

**Measured:** three persistent-looking vertical rules sit at approximately **x = 239, 720, 1199 px**, dividing the 1440 px viewport into roughly **1/6 / 1/3 / 1/3 / 1/6** bands. Each is 1 CSS px wide at opacity 0.2. They are implemented as absolute children of repeated `.vertical-lines` layers, not as a single universal fixed grid. They do not intercept input. [Rule-layer CSS](https://www.icebergdoc.org/_nuxt/Image.2AS4b25Y.css).

**Measured/source:** navigation text begins near x = 249 px, as do the first/third About text blocks and podcast introduction. Podcast panels begin at x ≈ 240 and 720, and end near 1200. These are recurring anchors; they are not evidence of an underlying CSS Grid with six tracks. Most inspected layouts use flex, proportional padding and absolute positioning.

**INFERRED:** the rules make radically different scenes feel registered to the same publication. Freedom is local: text can shift sides, imagery can fill the viewport, and cards can move horizontally while the underlying anchors remain familiar.

### 1.2 Scene-by-scene composition inventory

All desktop sizes below refer to 1440 × 900 unless stated otherwise. Heights describe layout/stage geometry, not compulsory reading times.

| Scene | OBSERVED composition and dimensions | What changes from the preceding scene |
|---|---|---|
| Intro | Full-viewport landscape video; centered oversized wordmark; tiny fixed navigation; small handwritten SVG near the lower center; occasional other drawn marks. The visible stage is 900 px high. A desktop pin adds 900 px of scroll travel. | Starts with an environment and one dominant word rather than a heading followed by explanatory copy. |
| Black statement band | A 900 px-high black stage with a single-line, horizontally looping statement. Type is ~206 px and extends beyond both viewport edges. Texture and drawn marks occupy separate layers. | Full photographic density gives way to a flat field, but the dominant object remains very large. Reading direction shifts horizontally. |
| About 01–03 | Three **900 px** content stages over a pinned viewport-sized image stack: 2700 px total. Copy widths ~351 px. Text left edges alternate **250 → 731 → 250 px**. Tiny numbers sit farther left at **168 → 669 → 168 px**. | Reintroduces photography, shrinks type sharply, and makes a short paragraph the only reading task in a whole screen. |
| Orange statement | Centered ~640 px-wide text block, ~51 px type. Section height ~1214 px; top padding ~374 px, bottom padding ~474 px. One drawn annotation is attached to the paragraph’s lower area. | Drops photography and left/right alternation. A centered statement becomes a visual pause despite its scroll-linked color reveal. |
| Projects | A viewport-height pinned scene translating a long track horizontally. Introductory copy is ~372 px wide. Six cards are ~420 × 577 px in the measured state; the gap between track items is ~569 px. Background begins as a map and changes to project-related imagery. A right-edge vertical action strip remains present. | Changes navigation axis and image role: the environment becomes a backdrop while individual projects become foreground objects. |
| Podcast introduction | Light-gray field, huge cropped moving type, then an offset paragraph. At desktop, the paragraph begins at x ≈ 249 px and has ~438 px of actual text space. Whole top section ~1232 px high. | Horizontal travel ends. Brightness changes dramatically; ordinary vertical reading returns. |
| Podcast/crowdfunding panels | Mountain image across the background. Two adjacent panels, each ~480 × 514 px, occupy the center two-thirds. First is opaque orange; second is translucent with strong backdrop blur and a changing vertical offset. Stage ~1315 px high. | Uses material contrast and staggered blocks instead of another image-plus-paragraph spread. |
| Footer statement | Black background; centered ~647 px-wide, ~51 px text with selective drawn marks; progressive text-color activation. Footer as a whole has an entrance translation. | Returns to a statement rather than immediately collapsing into small functional text. |
| Footer utility + signature | Newsletter on the left, social links on the right, extensive black space, small support/credit information, then a nearly edge-to-edge ~356 px wordmark. | Functional density briefly increases, then ends with a final jump in typographic scale. |

Evidence: [live homepage](https://www.icebergdoc.org/), [homepage CSS](https://www.icebergdoc.org/_nuxt/index.kwK62J-8.css), [footer CSS](https://www.icebergdoc.org/_nuxt/Footer.D10m_L1k.css), [wordmark CSS](https://www.icebergdoc.org/_nuxt/Logo.B2n-4vgh.css).

### 1.3 Asymmetry is systematic

**Measured:** About copy is approximately **24.4% of viewport width**. On its left-aligned scenes, its left edge is at 17.3% of the viewport; on the second scene, it is at 50.8%. The number and paragraph are baseline-aligned, with a separate number column. Copy begins ~134 px below the top of each content stage.

**Measured:** the podcast introduction is not a centered 686 px paragraph. Its 686.6 px border box includes **249 px left padding**, leaving approximately **437.5 px for text**. Confusing the border-box width with the reading column would misrepresent the composition.

**Measured/source:** the second podcast panel has a base `margin-top` equivalent to approximately **257 px**, half its height. JS also translates it upward from `yPercent: -50`. Its visible stagger therefore changes throughout the scroll; it is not a fixed 257 px offset. In one sampled state, its top was approximately 118 px below the first panel’s top.

**INFERRED:** this produces balance without mirroring: one side may hold the reading task, the other holds visual atmosphere or a displaced object. Alternation is used inside a chapter, while subsequent chapters change the entire compositional model.

### 1.4 Negative space and density are measurable parts of the sequence

**Derived:** a ~351 × 113 px first About paragraph occupies only about **3% of a 1440 × 900 viewport**, before counting the small number. The background is visually rich, but the reading burden is tiny. “Empty” here means free of competing text, not necessarily empty pixels.

**Derived:** the orange statement’s ~374 px top and ~474 px bottom padding total approximately **848 px**—about 70% of its measured 1214 px section height. Its centered text is being given a stage rather than conventional paragraph margins.

**Derived:** the project gap is **1.36 times the card width**. A card-plus-gap spans approximately 989 px. This is why the horizontal sequence reads as separate encounters across a visual field rather than a tightly packed carousel. The gap is useful screen time and background exposure, not unused layout capacity.

**Measured/source:** project cards use **67% image / 33% information panel** vertically. Their images are rectangular, sharp-cornered and clipped. The panels are dense relative to the surrounding stage, but the track as a whole is sparse.

### 1.5 Overlaps and scale contrast

**Observed:** overlap occurs between planes: text over landscape; drawn marks near/over text; texture over the field; project cards over a second, much larger image; the incoming footer visually under the outgoing podcast section. It is not mainly a pile of overlapping cards.

**Measured/source:** About’s text/texture wrapper uses `mix-blend-mode: screen`. Several texture layers also use screen blending. The podcast field has its own stacking context (`position: relative; z-index: 1`); the translated footer can be exposed underneath it. The header stays fixed above the content.

**Derived:** hero display type / About metadata is approximately **231 / 10 = 23:1**. Footer wordmark / the same metadata is approximately **356 / 10 = 36:1**. This contrast is much larger than the difference between ordinary article heading levels.

**INFERRED — why this does not feel like repeated “headline + paragraph”:** it changes the dominant object, reading axis, text alignment, background brightness, layer order and amount of reading per screen. Several scenes have no conventional heading/body pair at all. The structural recurrence is in coordinates and materials, not in a repeated content component.

## OBSERVED — 2. Typography

### 2.1 Actual hierarchy

**Measured/source:** the inspected page uses **Neue Montreal**, with Arial/sans-serif fallbacks. Locally served font declarations include regular, semibold and bold files and a variable-named file registered at weight 650. A filename containing “Variable” does not establish that the CSS exposes a continuous weight range; the inspected declaration specifies 650. [Font declarations](https://www.icebergdoc.org/_nuxt/entry.BwDkyL-q.css).

| Role / selector | Size at 1440 px | Line-height | Tracking | Weight / width |
|---|---:|---:|---:|---|
| Hero `.intro__logo-inner` | 231.2 px | 197.1 px / 0.8525 | −0.04em / −9.25 px | 600; centered, full-width wrapper |
| Black statement `.home-blur__sentence` | 206.3 px, derived from CSS | Base 1 × size | No separate tracking override identified | 600; nowrap, duplicated loop |
| About number | 9.96 px | 9.96 px / 1.0 | −0.01em | 600; 81.8 px column, 62.6 px on scene 02 |
| About paragraph | 25.61 px | 28.17 px / 1.10 | −0.01em | 650; 350.75 px column |
| Orange statement | 51.23 px | 52.25 px / 1.02 | −0.01em | 650; 640.31 px column |
| Project introduction | 21.34 px | 23.48 px / 1.10 | −0.01em | 650; 372.09 px column |
| Project title | 22.77 px | 25.04 px / 1.10 | −0.01em | 600; uppercase |
| Podcast moving display | 249.0 px, derived from CSS | Base 1 × size | No separate tracking override identified | 600; oversized horizontal loop |
| Podcast introduction | 25.61 px | 28.17 px / 1.10 | −0.01em | 600; ~437.5 px usable text width |
| Podcast panel title | 51.23 px | 46.10 px / 0.90 | −0.03em | 600; uppercase, ~451 px inner width |
| Podcast panel paragraph | 15.65 px | 18.78 px / 1.20 | normal | 600; 315.75 px column |
| Footer statement | ~51.23 px, derived from CSS | 1.02 | −0.01em | 650; ~647.4 px width |
| Footer wordmark | 355.7 px, derived from CSS | 0.9002 | −0.03em | 600; slight left translation and overflow clipping |

Sources: [homepage CSS](https://www.icebergdoc.org/_nuxt/index.kwK62J-8.css), [footer CSS](https://www.icebergdoc.org/_nuxt/Footer.D10m_L1k.css), [wordmark CSS](https://www.icebergdoc.org/_nuxt/Logo.B2n-4vgh.css); computed styles sampled in the live DOM.

### 2.2 Wrapping and reading measure

**Observed:** short About statements wrap into compact blocks; the first paragraph occupied four desktop lines. Their narrow measure gives approximately 25–35 characters per line depending on the words. This is a visual estimate from the inspected wraps, not a `ch` declaration. The larger centered statement wraps into roughly seven lines at the tested width. The podcast introduction has a longer block of about ten lines.

**Source:** widths and viewport-scaled fonts determine most wraps. SplitText adds word/character containers for animation; those containers should not be mistaken for manually designed spaces between letters. The accessibility tree sometimes prints separated characters because of these wrappers. The visual text is tightly set, not widely tracked.

**Observed/source:** uppercase is concentrated in display statements, project titles, navigation and panel headings. Sentence case carries explanatory copy. Hierarchy comes principally from scale, placement and density, with less dependence on a large range of font families or weights.

**INFERRED:** the body copy behaves like short editorial captions enlarged to occupy the role normally assigned to headings. This is workable because each passage is short. Applying its 1.10 line-height to Echo’s longer analytical paragraphs would not transfer automatically.

### 2.3 Recurring devices

**Observed/source:** three stacked copies of the intro wordmark are clipped and translated character by character during the opening; the statement marquees use two copies for a seamless loop; the centered orange/footer paragraphs change character color progressively; tiny enumerators organize photographic scenes; handwritten SVGs annotate the typographic system from a separate visual register.

**INFERRED:** the tiny labels make the oversized typography feel editorially indexed. They also preserve orientation while the large-scale material changes. The relationship matters more than copying the ~10 px desktop labels, which are very small in practice.

## OBSERVED — 3. Media and paint layers

### 3.1 Dominant media versus secondary objects

**Observed:** the hero is a landscape video environment. About uses still photographs as the full screen. Projects use both foreground card images and a changing large background. The orange statement has no photographic field. Podcast reintroduces a mountain image beneath two material panels. The footer returns to flat black with textures and type.

**Measured:** the intro video reported **2560 × 1440** intrinsic pixels and `muted: true`. In the inspected DOM, native `autoplay` and `loop` were false. The script explicitly starts playback, restarts on `ended`, and pauses when its scroll trigger is inactive. Calling this merely an HTML `autoplay loop` video would be inaccurate. [Homepage JS](https://www.icebergdoc.org/_nuxt/D51_WxQ5.js).

**Source/derived:** `object-fit: cover` fills a 1440 × 900 stage. For the 16:9 intro source, cover requires an approximately 1600 × 900 rendered image, cropping about 80 px off each side if centered. On the 375 × 812 portrait viewport, the horizontal crop is much more severe. This is an environment-first crop, not a promise that all source information survives.

**Measured/source:** About images reported intrinsic dimensions of 1536 × 882 through the delivered image endpoint. Their viewport boxes use cover. Project foreground cards crop a separate source from the large backdrop; the first project’s foreground and background URLs are different images. This is a paired editorial treatment, not simply the same thumbnail enlarged behind itself.

### 3.2 Unusual shapes: what was and was not observed

**Observed/source:** the opening video starts behind a centered rectangular clip polygon spanning **47–53% horizontally and 42–58% vertically** on desktop. At 1440 × 900 that is an **86.4 × 144 px** aperture, only **0.96%** of the viewport area. It expands to the full rectangle.

**Observed:** the remaining photographic geometry is predominantly rectangular: full-bleed fields, clipped project cards and adjacent rectangular panels. Irregularity comes from hand-drawn SVG strokes, transparent textures, crop, movement and overlap. No evidence was found for arbitrary organic-shaped photo masks or a WebGL image-distortion system in these inspected effects.

**INFERRED:** the aperture is effective because it changes the *amount of world visible*, not because the frame has an exotic shape. Echo can use this spatial principle without borrowing Iceberg’s actual aperture animation or landscape imagery.

### 3.3 Paint-order recipes

**OBSERVED/source — Intro, back to front:** black stage → absolutely positioned cover video at z-index 1 → SVG marks and clipped wordmark around z-index 5 → black six-strip overlay at z-index 10 → fixed header at z-index 100. Separate vertical-rule layers register the composition. The strips close across the scene on desktop scroll; they are not a fade of the video itself.

**OBSERVED/source — About:** pinned, overflow-hidden image stack → opacity-switched photographs → scrolling numbered text blocks and local texture/SVG elements, with screen blending on their wrapper → right-hand chapter action → vertical rules/header according to their stacking contexts. Text moves through normal section space while the photographic plane stays pinned.

**OBSERVED/source — Projects:** clipped viewport backdrop → map/project background image stack → separate texture and drawn marks → horizontally translated intro/card track → pinned right-edge action. Within each card: overflow-hidden photo on top, solid information panel below. Hover scales the photo within its crop; it does not enlarge the entire card box.

**OBSERVED/source — Podcast panels:** overflow-hidden mountain image → local texture → orange opaque panel and near-transparent panel. The latter has `background: #ffffff05` and `backdrop-filter: blur(...)`, measured at **71.15 px** at 1440. The blur affects the scenery behind the panel, not its text. Card typography sits above that material layer.

**OBSERVED/source — Footer signature:** black footer → oversized clipped wordmark → separate raster texture layer with a small scroll translation. The roughness is not evidence of a distressed font file or a text shader.

Pseudo-elements were checked on the main video/image wrappers, project image containers and podcast texture candidate. Their `::before` and `::after` content was `none`; those effects are supplied by actual elements, media and SVGs. This does not claim that the entire site lacks pseudo-elements: the navigation, for example, uses an underline pseudo-element.

### 3.4 Connecting adjacent scenes

**Observed/source:** About’s first image enters with `yPercent: -50`, its final image leaves toward `yPercent: 50`; similar background travel appears around Projects. The podcast image travels from −40% to +40% on desktop inside a clipped wrapper. Thus the image plane and content boundary do not always move at the same speed.

**INFERRED:** continuity comes from a shared environment crossing the boundary of a scene and from repeated rules/materials. It does not require the exact same image to span every adjacent section. A change of background can be a deliberate cut, as in the orange interlude.

## OBSERVED — 4. Scroll and motion mechanics

### 4.1 Global scroll

**Source-confirmed:** the layout bundle contains **Lenis 1.1.18**, explicitly identified by `window.lenisVersion`, and initializes it for desktop. Options include `syncTouch: false`, `lerp: 0.1`, `duration: 2` and an exponential-out-style easing function. Lenis scroll events call `ScrollTrigger.update`; the GSAP ticker drives its `raf`; GSAP lag smoothing is disabled. [Layout JS](https://www.icebergdoc.org/_nuxt/WfMI0tXJ.js).

**Important source detail:** the delivered ticker passes `3000 × tickerTime`, not the customary inference of a 1000 multiplier. The bundled advance routine also prioritizes the duration/easing branch when supplied. Therefore neither “10% lerp per real frame” nor “exactly two seconds of perceived settling” is a defensible measured description. The literal options are confirmed; actual latency needs a timed trace.

**Live observation:** scroll movement continues toward a settled position after an input gesture. During the project chapter, vertical input drives horizontal track travel while the viewport-height composition holds. Reversing moves the existing track back; it does not restart a slide-show sequence. Large gestures traverse multiple projects and then release the page into the next vertical section. There is no visible mandatory stop at every card in the tested sequence.

**Limits:** the browser’s page-based scroll command is not a calibrated physical wheel delta. Positions read immediately after input can precede the final settled position. The report does not equate command page counts with exact scroll distances, certify frame rate, or claim exhaustive rapid-oscillation testing.

### 4.2 Motion inventory

| Effect | OBSERVED delivered mechanism | Trigger/range and timing | Reading consequence / interpretation |
|---|---|---|---|
| Intro aperture | GSAP animates the video’s CSS clip-path | Full-frame opening: **2.2 s**, `power4.inOut`, following loader completion | Reveals the scene as one event before normal desktop scrolling is enabled. |
| Intro wordmark | SplitText characters in three stacked copies; translated inside overflow clipping | Character tween **3 s**, stagger **0.07 s**, `power4.out`, begins 0.6 s into intro timeline | The wordmark is treated as a moving object. This is time-driven, not scroll scrubbing. |
| Hero exit | GSAP/ScrollTrigger pins `.intro`, scales six black overlay strips from 0 to 1 | Pin distance **one viewport height**; `scrub: true`, stagger **0.05**, `ease: none` | A sectional wipe removes the image instead of simply scrolling it away. Stagger here belongs to a scrubbed timeline, not a promised wall-clock delay. |
| Statement loops | JS horizontal-loop timeline, two copies | Speed input **3.5 desktop / 3 mobile**; helper converts it to nominal **350 / 300 px per second**; play/pause on viewport activity | A recurring directional rhythm, reserved for short statements. |
| Blurring letters | CSS keyframes on SplitText character spans | **4 s** cycles, **0.4 s** staggered delays; transparent text with animated text-shadow | Softness changes without moving the reading column. The maximum desktop shadow blur derives to ~35.6 px. |
| About background | ScrollTrigger pin for the image container; opacity transitions keyed to each text stage | Pin from image top reaching viewport top until About bottom reaches viewport bottom; incoming stage threshold `top 75%`; reverse action enabled | Text stages share a stable photographic field; images change as the reader advances. |
| About accents | JS translates texture/SVG elements independently | From 0 to **−0.5 × content-stage height**, across top entering viewport to bottom leaving; `scrub: 0.1` | Background detail has a different speed from readable text. |
| Orange statement | SplitText color tween, then SVG stroke reveal | `top 90%` → `bottom 60%`; `scrub: 0.75`; character stagger 0.1 within timeline | The paragraph stays geometrically fixed while its reading order is emphasized. |
| Project traversal | Pinned horizontal GSAP translation, distance calculated from track and viewport widths | `scrub: 0.1`, linear tween; at this viewport the Projects start-to-Podcast-start span was ~6525 px including its 900 px stage | A long chapter, not a small carousel embedded in ordinary flow. |
| Project backgrounds | Timelines tied to the horizontal container animation | A project item’s left edge crossing **55% of viewport** activates its background; reverse action enabled | Background selection is spatially tied to the visible project, not dependent on clicking it. |
| Card hover | CSS photo scaling/color changes plus GSAP description lines | Image scales to **1.2**; panel color transition **0.3 s ease-in-out**; description **0.4 s**, line stagger **0.05 s**, `power2.out` | Extra detail belongs to active inspection. Card layout dimensions remain stable. |
| Drawn accents | DrawSVGPlugin stroke animations with repeated timelines/restarts | Many use **1 s** `power4.inOut`; repeated pauses vary in the source | Marks are animated SVG paths, not hand-drawn video overlays. Not all have an explicit offscreen pause in their local code. |
| Podcast mountain | Scroll-linked transform inside clipping | **−40% → +40%** desktop, −40% → +30% mobile; `scrub: 0.1` | Environmental depth while panel text stays attached to its surface. |
| Podcast second panel | Independent panel translation | Desktop starts at **−50% of panel height**, resolving toward CSS position; `scrub: 0.1` | The stagger evolves rather than acting as a static two-column layout. |
| Footer reveal | JS translates the entire footer under the preceding section | Desktop **−30% → 0%** of footer height; mobile −10% → 0%; `scrub: 0.1` | Incoming and outgoing sections overlap as planes. |
| Footer statement | Character color progression and two SVG drawings | `top 75%` → `bottom 50%`; `scrub: 0.75` | Repeats the earlier statement device on black, creating a structural rhyme. |
| Footer wordmark texture | ScrollTrigger translation | **−20% → 0%**, `scrub: true` | Final surface movement without displacing the letters. |

Sources: [homepage motion](https://www.icebergdoc.org/_nuxt/D51_WxQ5.js), [layout/Lenis](https://www.icebergdoc.org/_nuxt/WfMI0tXJ.js), [footer motion](https://www.icebergdoc.org/_nuxt/ZNMh4Fg5.js), [footer wordmark motion](https://www.icebergdoc.org/_nuxt/jJeg30Hk.js), [CSS effects](https://www.icebergdoc.org/_nuxt/index.kwK62J-8.css).

### 4.3 What reverses, what settles, what continues

**Observed/source:** pin positions, track transforms, image parallax, footer translation and scrubbed text colors derive from scroll progress. They can resolve backward as the reader reverses. The project sequence was tested in both directions and returned through earlier card positions.

**Observed/source:** image changes and chapter actions include `toggleActions` with reverse behavior. Unlike a continuous scrub, these are threshold-triggered animations; crossing a threshold can produce a short transition even after the pointer stops.

**Observed/source:** the marquees use an independent linear repeat. Their update callback reads velocity but does not apply it to playback speed or direction. **Do not describe them as velocity-reactive or reversing with scroll.** The inspected code supports visibility-controlled looping, not scroll-direction control.

**Observed/source:** video and repeated drawing/blur animations can continue while the page is stationary. “Settled” means the scroll-linked geometry has caught up; it does not mean every pixel stops moving. No spring overshoot was identified in the inspected major scroll transforms. Their tween easing is mostly `none`; smoothness is added by scrolling and scrub catch-up.

**INFERRED:** separating geometric settling from ambient loops helps the page retain energy after a scroll. Echo should be more conservative because its content requires sustained analysis rather than short promotional reading.

## OBSERVED — 5. Motion rhythm

The premise that Iceberg “avoids animating everything” needs qualification. **It animates many sections, but it usually keeps a clear primary motion plane and leaves ordinary reading copy intact.** It is not a mostly static article with three reveals.

| Passage | Motion load observed/source-confirmed | What remains relatively quiet |
|---|---|---|
| Opening | High: loader, aperture, cycling wordmark, video, drawn paths, then pinned wipe | Navigation geometry and the final wordmark position after entrance |
| Black statement | High: moving line, character blur, SVG loops, parallax | Black background and global alignment rules |
| About | Medium/high environment: image pin/crossfades, accents, entering/leaving image parallax | Paragraphs are not individually split into moving characters; they scroll as intact text blocks |
| Orange statement | Medium: progressive color and one annotation | No horizontal travel, no photo/video, no spatial rearrangement of words |
| Projects | High: pinned lateral track, crossfading backdrop, accents, optional hover | Card geometry and metadata organization; one principal project at a time |
| Podcast explanatory copy | Medium surroundings: moving headline and accents | Main paragraph is a stable, left-aligned block |
| Podcast panels | Medium: image and one panel translate at different rates | Text remains attached to each panel, not independently floating |
| Footer statement | Medium: progressive text color plus drawings | Centered fixed paragraph geometry |
| Form/links/credits | Relatively low after footer entrance | Functional groups have normal reading/interaction layout; no equivalent per-character reveal found |

**INFERRED:** the rhythm is closer to **spectacle → photographic reading → graphic statement → exploratory sequence → explanation → paired surfaces → closing statement → utility → signature**. The quietness is a reduction or change of motion type, not always an absence of motion.

**Observed limitation:** some ongoing blur/drawing effects are decorative rather than necessary to reading. Their successful coexistence with short passages does not demonstrate that they would support Echo’s longer explanations. The light-gray podcast field also uses white text; its restrained contrast is part of the observed look, not a recommendation to copy that contrast.

## OBSERVED — 6. Implementation and responsive behavior

### 6.1 Directly observable stack

| Finding | Evidence / confidence |
|---|---|
| Nuxt/Vue frontend | `/_nuxt/` chunks, `__NUXT_DATA__`, server-rendered content in fetched HTML, Vue component/render helpers and scoped `data-v-*` selectors. Confirmed frontend family; exact Nuxt version not established. |
| HTML arrives with content | The fetched response contains homepage structure/content before browser execution. This supports server-rendered or pre-rendered delivery; request-time SSR versus static generation is not resolved. |
| GSAP + ScrollTrigger | Explicit plugin injection and actual component timeline/trigger calls, plus runtime pin spacers/fixed inline styles. Confirmed use, not guessed from appearance. |
| SplitText + DrawSVGPlugin | Explicit calls create word/character/line splits and animate SVG strokes. Confirmed use. |
| Draggable + InertiaPlugin | Explicit mobile project `Draggable.create` with `type: x`, bounds and `inertia: true`; plugin provided by bundle. Source-confirmed; real touch inertia not physically tested. |
| Lenis 1.1.18 | Version string and constructor implementation/options in the delivered layout bundle. Confirmed. |
| Other GSAP plugins bundled | ScrollToPlugin and CustomEase are provided too. Presence alone does not show that every homepage effect uses them. |
| Scoped CSS and proportional tokens | Vue-scoped selectors, root color/type/reference-width properties and viewport-scaled calculations. Confirmed. No reason to assign a utility framework merely from the final appearance. |
| Image transformation endpoint | Live image URLs use `/_vercel/image?...&w=1536&q=100`; several sources point at `admin.icebergdoc.org/wp-content/uploads/…`. Confirmed delivery paths. A WordPress-backed media workflow is likely; its administration/authoring architecture was not inspected. |
| Responsive source attributes | Inspected images expose `srcset`, but sampled 1x/2x URLs were identical. Do not infer optimized independent high-density sources from `srcset` alone. |

Sources: [HTML](https://www.icebergdoc.org/), [entry JS](https://www.icebergdoc.org/_nuxt/BnIBiyCd.js), [layout JS](https://www.icebergdoc.org/_nuxt/WfMI0tXJ.js), [homepage JS](https://www.icebergdoc.org/_nuxt/D51_WxQ5.js).

### 6.2 CSS/native versus JavaScript

**CSS/native in the observed implementation:** proportional sizing, flex layout, absolute layers, cover cropping, overflow clipping, blend modes, backdrop blur, typography, the per-character blur keyframes, hover image scaling/panel colors, fixed header and navigation underline transitions.

**JS-driven in the observed implementation:** desktop smooth scrolling, aperture reveal timing, letter entrances, scroll pinning, six-strip wipe progress, background selection/crossfades, horizontal project travel, SVG path drawing, scroll parallax, per-character color progress, mobile card dragging, viewport-triggered video playback and footer overlap progress.

**Important distinction:** transforms and clip paths are CSS properties, but their values here are often authored by JS. Likewise, the live fixed positioning of a pin is a generated ScrollTrigger artifact, not evidence that the author used CSS `position: sticky` for that effect.

### 6.3 Responsive recomposition

**Measured at 375 px:** hero wordmark **78.24 px**; About copy **30.53 / 33.59 px** and **278.2 px wide**, left edge **23.85 px**; centered statement **38.17 / 38.93 px**; podcast introduction **20.99 / 23.09 px**. About copy is actually larger than its 25.61 px desktop size. The mobile system changes the reference denominator rather than uniformly shrinking desktop.

**Observed/source:** all About text stages use the left-side alignment on mobile. Numbers stack above copy. Several raster textures and drawn accents are hidden. Desktop navigation disappears in favor of the fixed bottom menu. Desktop side actions become bottom pills. Hero scroll pin/wipe is replaced by a smaller vertical video parallax (`yPercent: 20`). The About image pin persists; one pin spacer was present in the sampled narrow layout.

**Source-confirmed:** the desktop project track is pinned and scroll-driven. The ≤767 px branch creates an inertial horizontal draggable track instead. Card width derives to approximately **286.3 px** at 375, gap to **38.2 px**, with ~23.9 px edge padding. Background switching is simplified; non-first background images are hidden in the narrow CSS rules. Podcast panels stack at full width and lose their desktop base stagger.

**Caution:** CSS frequently switches at max-width 1023, while JS uses desktop min-width 1025 and mobile/tablet max-width 1024; another podcast branch uses 768/769. The exact 1024 px boundary and intermediate tablet drag behavior were not tested. These inconsistencies are not transferable design principles.

### 6.4 Reduced motion: confirmed rule, incomplete assurance

**Source:** the global stylesheet reduces CSS animation/transition duration and removes CSS smooth scrolling under `prefers-reduced-motion`. The inspected homepage/layout JS does not show an equivalent preference branch for the major GSAP/Lenis choreography. Therefore this research **does not certify that reduced motion disables those effects**. Echo already has explicit JS preference handling for videos and elephant motion; preserve it.

## INFERRED — why the experience feels art-directed

1. **The page assigns an object to every passage.** Sometimes that object is a landscape; sometimes it is a sentence, a single card, a pair of surfaces or the wordmark itself. Explanatory text is positioned in relation to that object rather than appended below a generic heading.
2. **Scale changes carry structure.** Moving from a ~231 px wordmark to ~26 px copy with ~10 px labels is a chapter change that can be perceived before reading anything. The later ~356 px signature closes the scale cycle.
3. **The same coordinates tolerate different compositions.** The repeated x ≈ 240/720/1200 anchors give continuity without requiring the same component layout. The user senses control even when the form changes.
4. **Media is selected for a role in the page.** An immersive field, a paired card/background treatment and a blurred surface each perform a different job. Media is not simply a thumbnail slot to be filled.
5. **Negative space is also temporal space.** A full-height field around a short paragraph and a 569 px gap between cards slow the arrival of the next subject without requiring long text.
6. **Motion changes relationships, not only visibility.** The image holds while text passes; a card and backdrop move differently; a footer emerges under the previous plane. A generic fade-up on every section could not produce those relationships.
7. **Repetition lives in a small visual vocabulary.** A sans-serif family, a few huge/small scales, precise rules, clipped rectangles, grain and drawn marks recur. Scene architecture varies within that vocabulary.

These are interpretations supported by the preceding observations, not statements of the original designers’ intentions.

## PRINCIPLES FOR ECHO

These are transfer decisions, not implementation instructions executed in this research.

1. **Compose ten different reading situations using a few shared anchors.** Echo can retain consistent outer margins and two or three internal text/media axes while varying the dominant object and text position. The transferable finding is the 250/731/250 alternation and 240/720/1200 registration, not Iceberg’s visible three-line overlay.
2. **Separate content height from scenic duration.** A short, important paragraph may own most of a viewport; a taxonomy may be much denser. Do not give every `.section` the same top padding and generic `.section-heading` relationship and expect type size alone to create chapters.
3. **Let media form a plane.** Hero and Film Cases can be environments; the elephant can be a foreground object; Brain can be an abstract field. These are distinct roles. Do not place all three inside similarly sized illustration boxes.
4. **Give the biggest type fewer simultaneous competitors.** Iceberg’s huge wordmarks coexist with tiny indexing information, not another large heading and multiple cards. Echo’s 98% should have an equally clear hierarchy while remaining semantically accurate.
5. **Animate one relationship per major scene.** Possible relationships: media held behind passing text, one object crossing the text boundary, a second meaning arriving after the first. Preserve a stable reading plane during each effect.
6. **Make reversibility part of the scene definition.** Scroll-derived objects should return to a deterministic earlier composition. Threshold reveals should reverse or remain intelligible; they should not queue entrances that keep playing after the reader has left.
7. **Reserve continuous loops for genuinely short material.** The Iceberg loops are large isolated statements, not long explanatory paragraphs. Echo should not import blur or scrolling into scientific explanation, case detail or experiment instructions.
8. **Use a hard change of visual regime as a transition.** Iceberg can move from photography to a flat color statement without adding another decorative reveal. Echo can change darkness, density, scale or alignment while keeping its own palette.
9. **Design mobile as a second composition.** Preserve image hierarchy and reading order, simplify offsets, and remove expensive scenic travel. Do not proportionally shrink desktop labels into unreadable microtype.
10. **Keep stronger quiet zones than Iceberg.** Echo’s experiment requires visual fixation; its case explanations require reading. Borrow the division between moving environment and stable copy, with fewer ambient effects overall.

Do not transfer Iceberg’s orange/yellow palette, environmental imagery, giant ICEBERG branding, handwritten marks, licensed typeface, marketing actions, compulsory intro delay or every parallax amplitude. Echo remains a dark editorial longread with its existing green accent and perception/cinema metaphor.

## OPPORTUNITIES FOR ECHO — mapped to the existing project

Local grounding: [current HTML](../../index.html), [styles](../../src/style.css), [interaction code](../../src/main.js), [Echo brief](../ECHO_BRIEF.md), [existing visual-direction notes](../VISUAL_DIRECTION.md). The current request establishes the new reference priority; these files were read, not edited. Proposed ranges below are starting points for a later design pass and require actual layout validation with Echo’s Russian text and assets.

### Hero — one composed collision of headline and TV-head image

**Existing:** `#hero` already has a large TV-head image, a text-first premise/question, contrasting headline slabs and supporting copy. It does not need another standalone oversized “ЭХО” wordmark.

**Transfer:** Iceberg’s full-stage media/type relationship and extreme scale hierarchy. Let the TV-head own one dominant region, while the premise and question occupy intentionally different positions rather than sitting above a subordinate image.

**Proposed measurable composition:** at 1440 px, test a main headline in the **90–120 px** range, a supporting column **300–380 px** wide, and an image occupying approximately **45–60% of viewport width**. These proportions differ from Iceberg’s centered short wordmark because Echo’s title is much longer. Reserve a stable area around the TV screen; avoid covering its meaningful feature with slabs.

**Motion opportunity:** one controlled image/frame reveal or a short media displacement during hero exit, with the headline readable immediately. No loader or forced multi-second opening. The scene should settle with the primary question intact.

### Blind Spot experiment — a deliberate stop in the visual rhythm

**Existing:** `#experiment` currently contains a stationary fixation cross and a stationary dot; the instructions ask the reader to adjust viewing distance. The older brief describes an automatic moving-dot variant. This report does not resolve or change that discrepancy.

**Transfer:** the *space allocated to one task*, as in Iceberg’s low-text-density About scenes. Do not transfer its landscape, ambient SVG or blur animations here.

**Proposed composition:** the experiment field should dominate at least roughly **half the usable viewport height** at its reading position. Keep instructions together at one edge and explanatory aftermath outside the fixation area. The surrounding article should visibly become quieter on arrival.

**Motion requirement:** no decorative movement, entrance mask, background parallax, animated cursor or shifting type while the fixation task is visible. Never conceal the dot with opacity, masking, color matching or DOM logic. If a moving-dot version is later explicitly selected, only its physical position changes; disappearance remains physiological.

### Brain / “Мозг не любит пустоты” — a stable explanation with one perceptual field

**Existing:** `#brain` combines an oversized left heading, right body copy and a sentence strip.

**Transfer:** About’s separate text and image planes, and its narrow explanatory measure. The field here should be conceptual absence/completion, not a film still or a decorative landscape.

**Proposed composition:** keep body copy around **360–440 px** wide and the caveat adjacent to it. Put the visual absence in the opposing field rather than underneath as another horizontal component. Test a left/right reversal relative to the preceding explanatory block so the reading axis visibly changes.

**Motion opportunity:** at most one brief transition of the conceptual field before the explanation’s settled state. The body paragraph remains intact and stationary relative to its section. Do not use character blur to explain a perception claim; that would compete with the explanation and risk conflating the metaphor with physiology.

### Meaning / elephant — an object entering the typography’s space

**Existing:** `#layers` has one elephant, a large English phrase, and four explanatory rows. The elephant is already translated from **85% below its resting position to 0** using a clamped scroll calculation; the active range is **0.55 viewport height**, beginning when the stage top crosses **90% of viewport height**. The asset uses cover cropping, screen blending and inversion.

**Transfer:** Iceberg’s independently moving foreground/environment relationships. The useful question is where the elephant ends up relative to the phrase, not whether it can be given another reveal.

**Proposed composition:** give the object approximately **35–45% of the stage width** and allow a controlled incursion into the phrase’s surrounding space. Keep the actual words unobscured. Move the detailed four-layer reading below the object’s arrival rather than asking readers to track moving illustration and dense analysis simultaneously.

**Motion opportunity:** retain one reversible translation, settle before the explanatory rows become the main task, and avoid a second oscillation or multiple elephants. Tune crop/contrast first: a technically smooth motion cannot compensate for an image that still reads as a rectangular inline illustration.

### Blind Zones taxonomy — a dense typographic change of pace

**Existing:** `#types` is four ruled typographic rows with category, short explanation and index. It already provides a different texture from a standard heading/body section.

**Transfer:** Iceberg’s tiny index / dominant type relationship and the decision to alternate dense and sparse scenes. A gallery of four equally illustrated cards would weaken this opportunity.

**Proposed composition:** keep all four categories in a compact chapter, with labels around **52–80 px** on desktop, explanatory measure **240–320 px**, and readable **11–13 px** indices. Size the longest label first so the system works for “Cultural reference” and its Russian context.

**Motion opportunity:** static by default; one active-row contrast state can work on focus/hover if it clarifies selection. A horizontal loop is only appropriate for a redundant transition label outside the essential definitions, not as the sole place where a category can be read.

### Film Cases — the strongest direct transfer

**Existing:** `#cases` already has a sticky near-viewport media screen, large phrase buttons, active/inactive contrast, a pause control and case dialogs. JS creates media lazily and pauses inactive/offscreen videos; hover/focus selects, click opens a case.

**Transfer:** About’s held background with passing text and Projects’ relationship between active foreground item and related background. Echo’s semantic action is selecting a phrase, so retain that selection model instead of importing Iceberg’s long horizontal card track.

**Proposed composition:** keep the screen at roughly **85–100% of the usable viewport** and make each phrase an editorial object with a small caption/number. Use larger vertical gaps where necessary to avoid two equally dominant phrases sharing the center. Darken the region behind the active phrase, not automatically the entire image to the point that media loses its role.

**Motion opportunity:** a single background opacity transition, proposed **250–450 ms**, with no simultaneous large phrase translation. Keep the selected scene stable when opening detail. Any optional scroll-derived preview must yield to deliberate keyboard/pointer selection rather than fight it.

**Constraint:** preserve verified context and clearly distinguish working clips from confirmed scene evidence. Iceberg’s techniques do not validate Echo’s film claims. No additional fact-checking was performed in this visual study.

### 98% — a typographic climax with a readable qualifier

**Existing:** `#coverage` already treats 98% as the principal object and includes explanatory copy/caveat.

**Transfer:** the hero/footer scale discontinuity and the orange interlude’s removal of photographic competition. This should be a distinct regime after Film Cases, not another section containing a normal-sized title.

**Proposed composition:** test the complete **98%** across **65–85% of viewport width**, with one **320–420 px** explanatory column anchored low or off to one side. Keep all characters intact. Establish the number’s size from the chosen typeface and width rather than copying Iceberg’s wordmark font size.

**Motion opportunity:** one entry/overlap transition that resolves to a stable full number; no counter from 0, progress bar, 2% cut-out or numeric decomposition. The scientific caveat must remain fully readable and must not arrive only after optional interaction.

### Echo / “Сцена сама выдаёт…” — spatial mismatch, then recognition

**Existing:** `#echo` pairs an understood surface with a reaction that does not fit, followed by a conclusion.

**Transfer:** Iceberg’s staged panels and spatially registered text, applied to semantic mismatch instead of glossy panels.

**Proposed composition:** place the first reading on one axis and its consequence on a second, with a controlled **40–100 px vertical offset** rather than identical row baselines throughout. Keep the conclusion in the same stable reading column once the pair is understood. Do not add literal film imagery to every pair.

**Motion opportunity:** the second part may enter once as the pair reaches the reading zone, proposed **200–350 ms**. Keep the first part visible. This is an Echo proposal, not an Iceberg-observed semantic-delay effect. Avoid perpetual echo copies or flickering text; the reader needs to compare both statements.

### Next Viewing — a quiet practical spread

**Existing:** `#practice` uses a two-column layout and numbered practical steps.

**Transfer:** the calmer footer utility groups and their clear alignment after the visually intense material.

**Proposed composition:** preserve **360–440 px** reading measures and consistent numbering; let empty space separate instruction groups. Avoid recasting the steps as product features or interactive dashboard cards.

**Motion opportunity:** none required. Normal scrolling and ordinary focus feedback are enough. This section should be usable when every optional animation is disabled and should not pin the reader through advice they already understand.

### Final — a visual rhyme, not a second opening

**Existing:** `#final` has a large closing thought and a green dot; credits follow.

**Transfer:** Iceberg’s return to an earlier visual vocabulary at the ending. Echo’s vocabulary is the dot, perception and changed awareness, not a repeated oversized brand word.

**Proposed composition:** isolate the closing thought and one dot, leaving about **one-third of the visible composition free of text**. Let the dot’s placement rhyme with the experiment while the sentence reframes its meaning. Keep credits visually separate and smaller.

**Motion opportunity:** a subtle reveal of the final plane can work, but settle into a still ending. Do not clone the −30% footer translation: its travel depends on Iceberg’s 2500 px footer and would be excessive for Echo’s shorter conclusion. No mandatory restart animation or product CTA.

## PRINCIPLES FOR ECHO — implementation fit and priority

**Observed local stack:** Echo is plain HTML/CSS/JS with native dialogs, IntersectionObserver, a requestAnimationFrame-scheduled scroll update for the elephant, media visibility handling and reduced-motion logic. The package currently declares no frontend framework dependency. Nothing in the strongest transfers requires migrating this architecture.

| Transfer | Clean fit for the current project | Scope / limit |
|---|---|---|
| Shared anchors, varied compositions | CSS Grid/flex, custom properties, section-specific layout | Highest value. Solve geometry before adding motion. |
| Huge display versus modest reading copy | CSS sizing and explicit reading widths | Use clamped values and tested Russian wraps; do not copy 2024-based scaling everywhere. |
| Foreground object over a field | Positioned layers, object-fit/object-position, overflow/mask where useful | Asset silhouette/crop is part of the design, not an afterthought. |
| Media held behind a reading sequence | CSS sticky inside a bounded section | Echo’s Film Cases already supplies this foundation. Keep ancestor overflow behavior compatible. |
| Active image/video crossfade | Existing state + CSS opacity transitions | Preserve pause, focus and reduced-motion behavior. |
| One reversible object entrance | Existing bounded scroll progress + requestAnimationFrame | Extend the pattern selectively; avoid one animation loop per paragraph. |
| A short sectional wipe | CSS transform layers controlled by bounded progress | Optional for one boundary. Six Iceberg-branded columns are unnecessary. |
| SVG line reveal | Native SVG stroke-dasharray/dashoffset | Technically simple, but no content reason yet to import handwritten marks. |
| Long horizontal pinned gallery | Sticky stage plus JS track translation, or a motion library if later justified | Technically possible; not the best match for Echo’s current phrase-selection chapter. |
| Per-character color fill | Text wrappers + calculated progress | Higher complexity and possible reading/accessibility costs; low priority for Echo. |
| Lenis-style global smoothing | Additional library/custom scroll behavior | Not required to achieve the composition. Do not add just because the reference contains it. |
| Strong backdrop blur | CSS backdrop-filter | Directly reproducible, but not central to Echo’s metaphor and potentially expensive over video. |

**Priority for a future pass:** first differentiate Hero, elephant and Film Cases as three distinct media relationships; then give 98% its own typographic stage; then resolve Brain, Echo and Final as conceptual compositions. Protect the experiment and Next Viewing as quiet zones. Only after those static compositions work should scroll duration, overlap and limited motion be tuned.

The transferable recipe is a sequence of deliberately different scenes on a shared coordinate system, with text held stable while one meaningful visual relationship changes. Its success depends on content length, image crop and resting composition. Iceberg’s exact assets, font metrics, brand color, texture files, large travel distances and compiled animation values would not survive literal copying into Echo.

## Source index and verification limits

Public resources inspected in this session (hashed filenames may change on deployment):

1. [Live homepage / delivered HTML](https://www.icebergdoc.org/).
2. [Global styles, font declarations and tokens](https://www.icebergdoc.org/_nuxt/entry.BwDkyL-q.css).
3. [Header/layout styles](https://www.icebergdoc.org/_nuxt/default.Dv_BQilw.css).
4. [Homepage composition and media styles](https://www.icebergdoc.org/_nuxt/index.kwK62J-8.css).
5. [Vertical-rule component styles](https://www.icebergdoc.org/_nuxt/Image.2AS4b25Y.css).
6. [Six-strip overlay styles](https://www.icebergdoc.org/_nuxt/Overlay.BqmHoqI5.css).
7. [Footer styles](https://www.icebergdoc.org/_nuxt/Footer.D10m_L1k.css).
8. [Footer wordmark styles](https://www.icebergdoc.org/_nuxt/Logo.B2n-4vgh.css).
9. [Main runtime and plugin registration](https://www.icebergdoc.org/_nuxt/BnIBiyCd.js).
10. [Layout runtime and Lenis implementation](https://www.icebergdoc.org/_nuxt/WfMI0tXJ.js).
11. [Homepage components and motion timelines](https://www.icebergdoc.org/_nuxt/D51_WxQ5.js).
12. [Footer components and motion](https://www.icebergdoc.org/_nuxt/ZNMh4Fg5.js).
13. [Footer wordmark motion](https://www.icebergdoc.org/_nuxt/jJeg30Hk.js).

The initial web text fetch timed out; live inspection succeeded in the app browser and public HTML/CSS/JS were separately fetched for source verification. Source was read as evidence, not executed locally. Measurements were taken from the actual page DOM, not estimated from screenshot scaling. The report deliberately leaves unverified: exact physical-wheel settling latency, frame-rate stability, all rapid-reversal edge cases, actual mobile touch inertia, the tablet boundary, complete reduced-motion behavior, and request-time versus build-time rendering. Echo application files were not modified.
