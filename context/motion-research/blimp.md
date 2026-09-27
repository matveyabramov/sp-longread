# Blimp scrolling and section-transition research

Source: [blimp.gr](https://www.blimp.gr/), inspected live at 1440×900 and 319×827, plus its publicly delivered CSS and JavaScript bundle. “Observed” below means verified in the live DOM/computed styles or shipped code; sampled timings are from the desktop browser session, not a claim about every input device.

## OBSERVED

### Overall scroll feel

- The document itself scrolls; there is no transformed page wrapper or alternate scroll container. `html` uses `scroll-behavior: auto`.
- Wheel input is routed through **Lenis 1.0.42**, created with `duration: 1.2`, `smoothWheel: true`, and `normalizeWheel: true`, and advanced from GSAP’s ticker. The bundled Lenis default easing is a capped exponential-out curve: `min(1, 1.001 - 2^(-10t))`.
- In a desktop wheel-like test, the page continued moving for about 1.1 seconds and was settled by roughly 1.2 seconds. Most distance landed early, then the last few pixels eased out slowly. This is strong, clearly perceptible interpolation rather than light filtering.
- Lenis’s scroll callback calls `ScrollTrigger.update()`. It reads Lenis’s scroll, limit, velocity, direction, and progress fields but does not use those values for custom behavior. No section choreography in the shipped code branches on velocity or direction.
- The passed `normalizeWheel` option is not consumed by the bundled Lenis 1.0.42 constructor. Lenis still normalizes wheel `deltaMode` internally and uses the default wheel multiplier of `1`.
- Touch smoothing is not enabled (`syncTouch` remains Lenis’s default `false`), so the authored smoothing primarily targets wheel input. Keyboard/native scroll is not given the same interpolation path.

### Section entry and exit

- At `min-width: 1200px`, the opening grid pins at the viewport top from `top top` until its bottom passes the top by 20px. It uses `pinSpacing: false`, so the following section moves over/under the pinned layer rather than waiting for a generated spacer.
- A shared desktop pin controller pins both `.homepage-list` and `.aotw` at `top top`, again with `pinSpacing: false`. Live inspection showed GSAP switching the active panel to `position: fixed` at the top, then returning it to normal positioning with a compensating transform when its pin range ends. This produces the stacked editorial handoffs.
- The homepage list enters once when its top reaches viewport center: items move from `translateY(50px)` and `opacity: 0` to rest, with `0.8s` duration and `0.015s` stagger.
- As AOTW approaches, the pinned list’s label and wrapper translate upward on a scroll-scrubbed timeline (`scrub: 0.5`, from AOTW `top bottom` to `top top+=230px`).
- AOTW uses several simultaneous scrubbed transforms:
  - description/date characters fade in with `0.01s` stagger over the section’s scroll range;
  - image/plane elements translate upward by the header height plus half its bottom margin while the header crosses the top;
  - split title characters re-space through a GSAP FLIP transition while the section crosses the viewport.
- MOTM repeats the split-character fade/FLIP pattern, tied to scroll position rather than playing as a free-running entrance.
- The final `.mtr` section starts at `translateY(-40%)` and scrubs to `0` as the preceding MOTM section leaves (`start: bottom bottom`, `end: +=120%`). Its wrapper uses `overflow: hidden`, so this is a clipped parallax-like slide, not a CSS mask.
- “Back to top” starts at `translateY(-100%)`, `opacity: 0`, and hidden visibility. It scrubs to rest/opaque as the bottom of `.mtr` passes a narrow band around viewport center (`center +20%` to `center -15%`, `scrub: 0.5`).
- Primary handoffs use pinning, translation, opacity, and ordinary overflow clipping. No `clip-path` or mask was active on the main section transitions inspected.

### Timing, easing, and settling

- Scroll interpolation has a nominal `1.2s` exponential-out settle. Each new wheel input retargets that motion, so rapid input feels continuous rather than like discrete 1.2-second animations.
- Most scroll-linked timelines use `scrub: 0.5`; one FLIP sequence uses `0.7`, and the MTR parallax uses direct `scrub: true`. The numeric scrub adds approximately half a second of catch-up on top of Lenis’s already-smoothed scroll signal.
- Scrubbed positional/fade tweens generally use linear easing because scroll progress supplies the timing curve.
- One-shot entrances use a custom quartic ease-out, mathematically `1 - (1 - t)^4`. Typical durations are `0.7–1.0s`, with small staggers (`0.015–0.1s`). The opening grid specifically rises `200px`, fades in over `0.7s`, and staggers items by `0.05s`.
- After input stops, the page position finishes first; numeric scrub timelines can continue their smaller catch-up briefly. The result is a fast initial response followed by a soft, controlled landing.

### Libraries and responsive behavior

- **Directly present in the delivered bundle:** GSAP **3.12.2**, ScrollTrigger **3.12.2**, Lenis **1.0.42**, plus GSAP FLIP/SplitText-style tooling and other GSAP plugins.
- The principal pinning, parallax, and scrubbed section transitions are guarded by the site’s `xl` query: `(min-width: 1200px)`.
- Below 1200px, the sections remain in ordinary document flow and the major pin/scrub sequences are not built. One-shot reveal behavior remains, and wheel smoothing can still run; touch remains native.

## INFERRED

- The perceived “weight” comes more from **two layers of lag**—Lenis’s 1.2-second exponential scroll plus ScrollTrigger’s 0.5-second scrub catch-up—than from velocity-aware animation. This is why the page feels elastic even though elements do not explicitly react to scroll speed.
- `pinSpacing: false` is the main source of the editorial, card-over-card section changes. The effect is layered replacement, not a full-page snap system and not a masked wipe.
- The large 200px opening rise is acceptable here because it plays once after image preload; repeating that distance throughout a longread would likely feel theatrical. The transferable signature is the pin/overlap and soft settle, not that exact reveal distance.
- The site’s generated FLIP and split-character artifacts are more elaborate than Echo needs to reproduce the overall reference feel.

## RECOMMENDED FOR ECHO

Recreate only four mechanisms:

1. **Smooth wheel, native page:** keep document scrolling and use Lenis alone (or an equivalent small controller) at roughly `1.0–1.2s` exponential-out. Leave touch native and disable interpolation for `prefers-reduced-motion`.
2. **CSS-first pinned handoffs:** at `min-width: 1200px`, use `position: sticky; top: 0` for the small number of editorial panels that need to layer. Arrange their wrappers so the next section naturally covers/releases the previous one; do not introduce a general scroll-jacking layout.
3. **One vanilla RAF progress loop:** calculate normalized progress for the few continuous transitions and write CSS custom properties for modest `translateY`/opacity changes. Apply a short progress catch-up equivalent to about `0.4–0.5s` only where the Blimp-like softness is needed. No mask system or FLIP implementation is required.
4. **IntersectionObserver for one-shot reveals:** use `0.7–0.8s` quartic-out opacity/vertical reveals with restrained `20–50px` travel and short staggers. Keep scrubbed transforms linear.

This reproduces the reference’s defining feel—strong wheel smoothing, overlapping sticky sections, linear scroll-linked transforms, and a soft post-scroll settle—without copying its source or bringing GSAP/ScrollTrigger into Echo. If CSS sticky constraints in Echo make the overlapping panels unreliable, GSAP ScrollTrigger is the clean fallback for those pins only; the rest can remain vanilla.
