# BUILD BRIEF — Kitchen Quest (cook-along engine)

## What this is

A **single-file, offline-capable HTML cook-along game** that stands next to a beginner cook at the stove and teaches technique while they cook. Not a recipe app. Not a meal planner. Not a database.

The v1 prototype (`Kitchen-Quest-II.html`) is included in this folder as the working reference. **Read it first.** It already establishes the visual language, the state machine, and the tone. This build extends it — it does not restart it.

## Who it's for

One person. Beginner cook. Cooks for himself plus a ~27 lb Bernedoodle. Constraints in `RECIPE-DATA.md` — they are hard, not preferences.

## The single job of the page

Get a nervous beginner through a cook session without burning anything, and leave him understanding **why** each step works so he needs the game less next time.

---

## What v1 already does (keep all of it)

- **Title screen** → **station map** → **station** → **boss check** → back to map → **victory**
- One step at a time. Big card. `Action` + `Why:` on every step. No walls of checkboxes.
- Per-step **timers** (conic-gradient burner dials) that ring and vibrate
- **XP + level bar**, toast notifications, level-up flash
- **Knowledge checks** ("boss") gate station completion
- **Tutorial images** embedded inside the lesson card, above the step flow
- Act 1 / Act 2 structure with distinct color identity (nori green / ember orange)
- Web Audio beeps, `navigator.vibrate`, `prefers-reduced-motion` respected

## What to build (in priority order)

1. **Externalize the content.** Right now `STATIONS` is hardcoded in the script. Pull it into a separate `sessions/*.json` file so a new cook session is a data file, not a code edit. Schema should support: act, icon, name, chip/vessel, xp, blurb, lesson (title/body/image), steps (action/why/warn/timer), boss (q/opts/right/explain).

2. **Persistence.** Progress survives a page refresh — you're cooking, your phone locks, you come back. Note: `localStorage` works in a real browser but **not** inside Claude.ai artifacts. Since this runs as a local file, `localStorage` is correct here.

3. **Screen wake lock.** `navigator.wakeLock` so the phone doesn't sleep mid-simmer. Graceful fallback where unsupported.

4. **Multiple concurrent timers.** Real cooking runs the pot and the pan at once. v1 scopes one timer per step; the engine needs a global timer tray that persists across steps and shows what's still running.

5. **An ingredient/inventory strip.** Shows what the session consumes, checking items off as stations clear. Feeds back into the kitchen inventory doc as a copy-pasteable "inventory updates" block at victory.

6. **Session builder.** A tiny form that generates a new `session.json` from a plan, so future weeks don't require touching code.

## Negative scope — what this is NOT

- **Not** a calorie tracker. No macros, no diet math, ever. (Explicit user constraint.)
- **Not** a recipe database or a search interface.
- **Not** a backend. No server, no auth, no accounts. One HTML file + JSON.
- **Not** a React app. Vanilla JS. It must open from a file:// URL on a phone with no build step.
- **Not** a redesign. The visual identity in v1 is settled — dark cast-iron ground, ember/flame accents, Bricolage Grotesque display + Inter body + Space Mono for data.
- **Not** the "life OS" app. This is one artifact. It may *later* become the Kitchen room, but that is a different project with a different brief. Do not build toward it here.

## Design constraints

- **Mobile-first.** ~380px viewport is the primary target. It lives on a phone propped against a backsplash.
- **Thumb-reachable primary action.** The user's hands are wet and greasy.
- **Legible at arm's length.** Body text no smaller than 0.85rem.
- Keyboard focus visible; reduced-motion respected; no color-only state signals.

## Content rules (non-negotiable)

- **Every step has a `why`.** A step without a reason is a checklist item, and checklists don't teach.
- **The dog appears in Act 2 only.** Avocado and imitation crab are dog-unsafe — he is not part of a sushi session. Getting this wrong is a safety bug.
- **Never invent a ratio.** All quantities come from `RECIPE-DATA.md`. If the data file doesn't cover it, ask.
- **Safety steps are gates, not suggestions.** Thaw method, doneness temps, and cooling windows must be un-skippable where they appear.
- Tone: direct, warm, occasionally funny. Never condescending. The user knows he's a beginner and doesn't need reminding.

## Assets

Tutorial images are generated (pixel-art / 16-bit RPG style, charcoal + orange). URLs are in the `ART` object at the top of the v1 script. Two more exist in the user's Higgsfield library and need URLs pasted in: `rice` (rinse / fold / cool) and `pan` (don't crowd / doneness / fond). The code already handles empty strings gracefully.

## Definition of done

A cook can open the file on a phone, follow one session end to end without touching a keyboard, be interrupted and come back, have two timers running at once, and finish with a copy-pasteable inventory update. And they can add next week's session by writing a JSON file.
