# LKSTR section-transition research

Source: [lkstr.ru](https://lkstr.ru/), inspected live at 1440×900 and against its delivered HTML, inline CSS/JS, and linked assets. Scope is limited to major section handoffs and whether they add anything beyond the previously analyzed Blimp system.

## OBSERVED

### The only distinctive major handoff

- The four service cards form a stacked sequence of full-viewport panels. At the inspected desktop size each card is `900px` high (`100vh`).
- The first three records use only CSS: `position: sticky; top: 0; z-index: 10`. The fourth remains `position: relative; z-index: 10`.
- All cards share the same z-index. Later DOM siblings therefore paint above earlier sticky siblings; there is no scripted z-index swap.
- Each pair is separated by a `360px` flow spacer. The outgoing card reaches the top and remains fully held for those 360px. The next card then enters from the viewport bottom and travels upward over it.
- The visible crossover starts when the incoming card’s top reaches the viewport bottom and ends when that top reaches `0`: one viewport, or about `900px` of scroll in the inspected session. The outgoing card remains stationary underneath for the entire crossover.
- Live computed styles stayed at `transform: none` and `opacity: 1` on both records and their artboards. No scale, fade, `clip-path`, mask, or animated stacking-order change was present. The first three artboards use `overflow: visible`; ordinary viewport occlusion supplies the wipe edge.
- This is directly scroll-linked through native sticky positioning, not a timed transition. There is no independent duration or authored easing on the panel handoff.
- Reversing direction retraces the same geometry immediately: the incoming card moves down and uncovers the prior sticky card. There is no hysteresis, completion state, or reverse animation.
- A fast wheel input can cross most of the 900px handoff in a few frames. The panels do not add catch-up smoothing; only the global smooth-scroll controller softens the motion.

### Delivered implementation

- The page is built with Tilda/Zero Block and loads Tilda’s animation and scroll-behavior scripts.
- It loads **Lenis 1.1.18** from unpkg. The inline configuration uses `lerp: 0.1`, `smoothWheel: true`, `wheelMultiplier: 0.95`, `syncTouch: false`, and the usual exponential-out easing function. With `lerp` supplied, the handoff’s perceived easing comes from Lenis’s frame interpolation rather than a panel animation.
- In a sampled desktop wheel pass, a roughly 1710px retarget settled in about 1.1 seconds. During that motion the card crossover still followed scroll position 1:1.
- No GSAP or ScrollTrigger asset or authored call was found for this sequence. The sticky rule is explicit inline CSS.
- The fourth card contains one Tilda scroll-animation declaration for a full-frame media element (`data-animate-sbs-event="scroll"`, ending in a fixed state), but during the tested section crossover it showed no scale, fade, clip, or transform change. It is not the mechanism producing the card-to-card transition.
- Elsewhere, LKSTR has timed line/image reveals, including a one-shot `clip-path` image reveal. Those are element entrances, not major section-to-section transitions, so they are outside this comparison.

## INFERRED

- The 360px gaps act as deliberate dwell intervals: each service card gets a short fully settled reading phase before the next full-height card begins covering it.
- The transition feels cleaner and more mechanical than Blimp because it has only two moving states: the old panel is locked; the new panel advances with scroll. Any softness perceived at the boundary is attributable to Lenis, not additional choreography.

## VALUE FOR ECHO

**No additional motion mechanic is worth adding on top of the Blimp system.** LKSTR’s service-card transition is the same core idea already present in Blimp: a pinned/sticky outgoing section is covered by the next section as scrolling continues. LKSTR removes the extra scrubbed transforms and implements the overlap with CSS sticky positioning, but it does not introduce a meaningfully different visual behavior.

The only useful takeaway is implementation restraint, not a new effect: if an Echo handoff needs only a straight full-height cover, CSS `position: sticky` plus DOM paint order can replace a scripted pin. That should simplify an existing Blimp-style transition rather than be added as another transition pattern.
