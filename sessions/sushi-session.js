// Kitchen Quest session data — content only, no code.
// The object below is pure JSON (you can copy it into a .json file unchanged).
// It ships as .js because fetch() cannot read local files from a file:// URL,
// but a <script> tag can. The engine (Kitchen-Quest-II.html) validates this on
// load: every step must have a "why", and dog steps may only appear in dogAct.
// Ratios verified 2026-07-09 against RECIPE-DATA.md. Do not re-derive them.
window.KQ_SESSION = {
  "id": "sushi-session",
  "dogAct": 2,
  "titleScreen": {
    "h1": "Kitchen Quest II",
    "em": "The Onigiri Session",
    "tagline": "Two acts. Nine stations. You'll press your first onigiri, rescue six pounds of freezer chicken, and finally cook the bean night you've been carrying for five weeks."
  },
  "acts": {
    "1": "ACT I · AT YOUR FRIEND'S",
    "2": "ACT II · BACK HOME"
  },
  "art": {
    "title": "https://d8j0ntlcm91z4.cloudfront.net/user_3EylphvKs2oAnPWYNSj56iFecDN/hf_20260709_201226_6ebebfbd-bece-4587-88a4-a8702335b4c3.png",
    "onigiri": "https://d8j0ntlcm91z4.cloudfront.net/user_3EylphvKs2oAnPWYNSj56iFecDN/hf_20260709_201229_b5f0e04f-bec5-4b7c-9534-3fa521ebebc3.png",
    "cutlet": "https://d8j0ntlcm91z4.cloudfront.net/user_3EylphvKs2oAnPWYNSj56iFecDN/hf_20260709_173924_f714dd40-bd78-43b7-8206-3d8a3835e7dd.png",
    "rice": "https://d8j0ntlcm91z4.cloudfront.net/user_3EylphvKs2oAnPWYNSj56iFecDN/hf_20260709_201319_40586dfb-c3f0-4766-bdf9-9c1a736eb5d8.png",
    "pan": "https://d8j0ntlcm91z4.cloudfront.net/user_3EylphvKs2oAnPWYNSj56iFecDN/hf_20260709_174700_3f5f5f70-a9df-4a55-aeeb-ab9ea0cd5604.png",
    "prep": "https://d8j0ntlcm91z4.cloudfront.net/user_3EylphvKs2oAnPWYNSj56iFecDN/hf_20260709_195902_2c6ddbf0-eff3-4b1b-bb5a-2f0099a6836f.png",
    "fillings": "https://d8j0ntlcm91z4.cloudfront.net/user_3EylphvKs2oAnPWYNSj56iFecDN/hf_20260709_195906_e39b5233-6af8-4774-ae10-fedec336702a.png",
    "thaw": "https://d8j0ntlcm91z4.cloudfront.net/user_3EylphvKs2oAnPWYNSj56iFecDN/hf_20260709_195910_216182c1-2b5a-44b6-8c3c-1c8f75b29dda.png",
    "fond": "https://d8j0ntlcm91z4.cloudfront.net/user_3EylphvKs2oAnPWYNSj56iFecDN/hf_20260709_195914_0fd44c9b-8e1d-453c-97b9-49622b964241.png",
    "chickpea": "https://d8j0ntlcm91z4.cloudfront.net/user_3EylphvKs2oAnPWYNSj56iFecDN/hf_20260709_195918_cee61ea5-08ba-4ca4-8f4d-2ec5caeef35f.png"
  },
  "victory": {
    "emoji": "🍙",
    "heading": "Onigiri made. Week stocked.",
    "body": "You pressed your first onigiri, rescued six and a half pounds of freezer chicken, closed out a bean night that had been open for five weeks, and started a snack experiment — without buying a single gram of protein.",
    "stats": [
      { "value": "$0", "label": "Meat bought" }
    ],
    "recapTitle": "The week from here",
    "recap": [
      { "when": "Thu · tonight", "what": "Homemade onigiri" },
      { "when": "Fri", "what": "Cutlets + Tex-Mex beans + rice" },
      { "when": "Sat", "what": "Cutlets + veg + dressed salad" },
      { "when": "Sun", "what": "Next cook — drumsticks are up" },
      { "when": "Breakfast", "what": "Overnight oats (replaces snack 1)" },
      { "when": "Snack test", "what": "Roasted chickpeas — report back" }
    ]
  },
  "stations": [
    {
      "act": 1, "icon": "🎒", "name": "Before you leave", "chip": "board", "xp": 100,
      "blurb": "Three things happen now or tonight falls apart. Two minutes of work, then you're free.",
      "lesson": {
        "image": "prep",
        "title": "THE ONE RULE OF TODAY",
        "body": "Cold stays cold. Frozen thaws in the fridge, never on the counter — the outside enters the bacteria zone hours before the middle softens. And you shop <b>before</b> you shape, because the crab can't be at the store while you're at his kitchen table."
      },
      "steps": [
        { "action": "<b>Chicken breasts: freezer → fridge. Right now.</b>", "why": "They'll thaw slowly and safely across the afternoon while you're out. This is the single step that can't be recovered later — everything else in this game forgives delay." },
        { "action": "Pack the travel kit: <b>sushi rice, soy sauce, sesame oil, salt, one hot sauce.</b>", "why": "You already own all of it. Bringing it means the only things you buy are the things you genuinely don't have. No nori tonight means no vinegar and no sugar either — onigiri rice is plain, seasoned by salted hands." },
        { "action": "Add an <b>insulated bag with an ice pack</b> to the car.", "why": "It's July. The crab, spring mix and berries ride home with you after the hangout — that's a few hours of warm car without it." },
        { "action": "At the store: <b>cucumber, 2 ripe avocados, imitation crab.</b>", "why": "One label check that actually matters: <b>egg white is a common binder in surimi</b> — read the crab's ingredients, your reflux depends on it. And notice what fell off this list: no nori hunt, no vinegar. Onigiri just cut your shopping in half." },
        { "action": "Same trip, the week's food: <b>broccoli, 2 bell peppers, spring mix, old-fashioned rolled oats, unsweetened almond or oat milk, bananas, berries, apples.</b>", "why": "Notice what's not on this list: chicken and rice. You already own 6.5 lb of frozen chicken and two open containers of rice. That's the whole point of the inventory doc." },
        { "action": "Cold items into the cooler bag. Head to your friend's.", "why": "Act 1 starts when you walk in the door." }
      ]
    },
    {
      "act": 1, "icon": "🍚", "name": "Onigiri rice", "chip": "pot", "xp": 180,
      "blurb": "The rice is the onigiri. There is no wrapper to hide behind tonight — just rice cooked right and pressed with intent. Nail this and the rest is assembly.",
      "lesson": {
        "image": "rice",
        "title": "PLAIN RICE, SALTED HANDS",
        "body": "Onigiri rice is <b>plain</b> — no vinegar, no sugar. The seasoning happens later, from a pinch of salt rubbed onto your wet palms before each ball. What matters here is texture: firm, intact grains that will bind when pressed. That means rinsing well, and keeping the lid on for the entire cook."
      },
      "steps": [
        { "action": "Rinse <b>1½ cups sushi rice</b> in a strainer until the water runs mostly clear. Three rinses minimum.", "why": "You're washing off loose surface starch. Skip it and the grains glue into paste instead of clinging the way onigiri should." },
        { "action": "Rice + <b>1¾ cups water</b> in a pot. Lid on. Bring to a boil.", "why": "Slightly less water than you'd use for a fluffy side dish — you want grains a touch firm, because they're about to be pressed hard enough to hold a shape." },
        { "action": "Drop to the <b>lowest heat, 15 minutes. Do not lift the lid.</b>", "why": "The steam trapped under that lid is doing the cooking. Every peek releases it and you're cooking a different dish than the one the timer was set for.", "timer": { "label": "Simmer, lid on", "sec": 900 } },
        { "action": "Heat off. <b>Lid still on. Rest 10 minutes.</b> Then fluff.", "why": "The residual steam finishes the grains at the top of the pot, which are always a little behind.", "timer": { "label": "Rest off-heat", "sec": 600 } },
        { "action": "Let it cool just until you can handle it. <b>Warm, not hot — and not cold.</b>", "why": "Warm rice is sticky rice: the starch binds as it's pressed and cools into shape. Hot rice burns your hands; cold rice crumbles. This cooling window is exactly when you cut the fillings." }
      ]
    },
    {
      "act": 1, "icon": "🥒", "name": "Cut the fillings", "chip": "board", "xp": 120,
      "blurb": "While the rice cools. The filling hides in a pocket in the middle, so everything gets cut small.",
      "lesson": {
        "image": "fillings",
        "title": "SMALL ENOUGH TO TUCK",
        "body": "An onigiri filling sits in a pocket in the center of the rice — a spoonful, not a slab. Too big and the triangle can't close around it. Bonus: <b>imitation crab is already fully cooked</b> — it goes from package to filling with zero heat. That's why tonight needed no thawing."
      },
      "steps": [
        { "action": "<b>Spicy crab — the star filling:</b> shred the crab sticks, mix with <b>hot sauce + 1 tsp sesame oil.</b>", "why": "No mayo, no egg, no dairy — a real constraint-dodge, not a compromise. Sesame oil does the richness that mayo usually does, and it's a classic onigiri filling for a reason." },
        { "action": "Cucumber: halve lengthwise, <b>scrape the seeds out with a spoon</b>, then cut into pencil sticks.", "why": "Tonight the cucumber is the crunchy side, not a filling — the seed-scrape keeps the sticks crisp instead of watery on the plate." },
        { "action": "Avocado: halve, pit, peel, cut into <b>small pieces.</b>", "why": "A ripe one yields slightly under your thumb. Small pieces tuck into a rice pocket; long strips were for rolls and would split a triangle open." }
      ]
    },
    {
      "act": 1, "icon": "🍙", "name": "Shape & press", "chip": "board", "xp": 240,
      "blurb": "The main event. Your first onigiri will be ugly. Your third will be decent. Your sixth goes on a plate like you meant it. That's the real curve — don't quit at triangle two.",
      "lesson": {
        "image": "onigiri",
        "title": "THE FOUR MOVES",
        "body": "<b>WET + SALT</b> both palms before every ball · <b>SCOOP</b> a palmful of warm rice · <b>TUCK</b> a spoonful of filling into a dent and cap it · <b>PRESS</b> into a triangle, rotating as you go — firm enough to hold, never crushing. The warmth of the rice is the glue: it binds as it cools into shape."
      },
      "steps": [
        { "action": "Set up the station: <b>a bowl of water and a small dish of salt</b> next to the rice pot.", "why": "Your hands are the only tool tonight. Everything they need sits within reach before any rice touches them." },
        { "action": "<b>Wet both hands, then rub a pinch of salt across your palms.</b>", "why": "Wet hands are the entire anti-stick strategy, and the salt on your palms is the only seasoning this rice gets — a thin, even coat on the outside of every ball." },
        { "action": "Scoop a <b>palmful of warm rice</b> — about ½ cup.", "why": "Warm is the working window. The starch binds as the rice is pressed and cools; wait too long and it crumbles instead of holding." },
        { "action": "Press a <b>dent in the center</b> and tuck in <b>a spoonful of spicy crab</b> — or a couple pieces of avocado.", "why": "A pocket, not a mix. A modest filling keeps the walls thick enough to close; overfilling is the number one reason a first onigiri splits, and it's the hardest urge to resist." },
        { "action": "Cap it with a little more rice, then <b>press into a triangle: cup both hands and rotate-press, 3–4 turns.</b>", "why": "Firm enough that it holds together, never so hard it turns to a brick. The rotation is what makes the sides even — the shape comes from repetition, not force." },
        { "action": "Repeat until the rice is gone — <b>about 8. Re-wet and re-salt your hands every time.</b>", "why": "The moment rice starts sticking to you instead of to itself, you're fighting the shape. Fresh water and salt resets it." },
        { "action": "Cucumber sticks on the side, soy sauce to dip. Eat, hang out, then head home for Act 2.", "why": "You made onigiri, by hand, with no wrapper to hide behind. That's a real skill you didn't have this morning." }
      ],
      "boss": {
        "q": "Your onigiri crumbles apart as soon as you pick it up. What's the most likely cause?",
        "opts": ["Too much salt on your hands", "The rice went cold before shaping, and the press was too gentle", "Triangles are unstable — should have made balls"],
        "right": 1,
        "explain": "Warmth and pressure are the two binders. Warm rice is sticky rice — its starch fuses as it's pressed and cools into shape. Cold rice plus a timid press means loose grains in a costume. Shape while warm, press firm, rotate 3–4 turns."
      }
    },
    {
      "act": 2, "icon": "🏠", "name": "Home. Thaw check.", "chip": "check", "xp": 140,
      "blurb": "You're back and fed. The fridge has thawed chicken waiting. This is the 45 minutes that feeds you through Saturday.",
      "lesson": {
        "image": "thaw",
        "title": "WHY TONIGHT AND NOT TOMORROW",
        "body": "Last time a fun night sat in front of a cook session, the cook session lost — Tex-Mex night has been carried forward for five weeks. Cooked chicken keeps 3–4 days, so Thursday night covers Fri and Sat cleanly. Tomorrow-night cooking doesn't. Forty-five minutes, and you're done."
      },
      "steps": [
        { "action": "Press the thickest part of a breast. <b>Soft through = ready.</b>", "why": "Still icy in the middle? Seal in a zip bag and submerge in cold water 20–30 min. Never warm water, never the counter." },
        { "action": "After a cold-water thaw, <b>cook it today.</b> Don't refreeze it raw.", "why": "Cold-water thawing pushes the surface into a temperature range where refreezing raw is a gamble. Cooking it resets the clock." },
        { "action": "Groceries away, cold stuff into the fridge. Out on the counter: <b>one pot with lid, one pan, one board, one knife.</b>", "why": "Your standing constraint. Anything that needs a fourth vessel gets redesigned, not accommodated." }
      ]
    },
    {
      "act": 2, "icon": "🔪", "name": "Board & cutlets", "chip": "board", "xp": 190,
      "blurb": "Veg first on the clean board. Raw meat last. Wash immediately after. Same law every single time.",
      "lesson": {
        "image": "cutlet",
        "title": "WHY CUTLETS, NOT WHOLE BREASTS",
        "body": "A chicken breast is a wedge. The thin end is sawdust by the time the thick end is safe to eat — that's why breast has a reputation for being dry, and it's a geometry problem, not a cooking problem. Slice it horizontally into two even cutlets and the whole thing finishes at once. <b>Flat hand on top, knife parallel to the board, slow saw through the middle.</b>"
      },
      "steps": [
        { "action": "Broccoli into florets, peppers into strips. Into a bowl, off the board.", "why": "Veg touches the clean board first. Once raw chicken touches it, nothing raw-eaten goes back on until it's washed." },
        { "action": "Pat the breasts dry with paper towel.", "why": "Surface water steams instead of browns. Dry meat is the whole secret to a golden crust." },
        { "action": "<b>Hand flat on top. Knife parallel to the board. Slice each breast horizontally into two thin cutlets.</b>", "why": "Go slow — this is a sawing motion, not a chop. Four breasts become eight cutlets. Check the tutorial image above if the angle isn't clicking." },
        { "action": "🐶 <b>Set one plain cutlet aside, unseasoned.</b>", "why": "His portion. It gets poached in the veg water two stations from now — no salt, no oil, no spices, no onion or garlic.", "dog": true },
        { "action": "Season the rest on a plate: <b>olive oil, salt, pepper, garlic powder, cumin, chili powder.</b>", "why": "Cumin and chili tie the chicken to the Tex-Mex beans coming up. One seasoning, two dishes." },
        { "action": "<b>Wash the board, the knife, and your hands. Now.</b>", "why": "Non-negotiable, and it's easier now than after you've touched three other things." }
      ]
    },
    {
      "act": 2, "icon": "🔥", "name": "Rice & the pan", "chip": "pan", "xp": 190,
      "blurb": "Pot and pan run in parallel. The rice is hands-off. The pan needs you standing there.",
      "lesson": {
        "image": "pan",
        "title": "DONENESS BEATS THE CLOCK",
        "body": "Times are a guide; doneness is the test. Cutlets are done when there's <b>no pink in the center and the juices run clear</b> — 165°F if you have a thermometer. Thin cutlets hit that fast and then dry out about ninety seconds later, so check early. And don't crowd the pan: crammed meat steams in its own moisture instead of browning."
      },
      "steps": [
        { "action": "<b>Pot:</b> 1 cup extra long grain rice + 1¾ cups water + pinch of salt. Boil → lowest heat, 15 min, lid on → off, rest 5 → fluff.", "why": "Burning down Cabinet 1, not the basmati. Basmati is your lower-glycemic rice — save it.", "timer": { "label": "Rice simmer", "sec": 900 } },
        { "action": "🐶 <b>Scoop out a plain portion of rice before anything is added.</b>", "why": "Plain rice is dog-safe. The moment oil or seasoning touches it, it isn't.", "dog": true },
        { "action": "<b>Pan:</b> medium-high, thin film of oil. Cutlets in — <b>don't crowd them.</b> Two batches of four.", "why": "Gaps between the cutlets let moisture escape as steam. Crammed together, they poach in their own liquid and go gray." },
        { "action": "<b>3–4 minutes, first side. Don't move them.</b>", "why": "Moving the meat interrupts the crust forming. Leave it alone and it releases from the pan on its own when it's ready.", "timer": { "label": "Side one", "sec": 210 } },
        { "action": "Flip once. <b>3–4 minutes, second side.</b>", "why": "Thin cutlets cook fast — this is why we sliced them. A whole breast would need nearly double.", "timer": { "label": "Side two", "sec": 210 } },
        { "action": "Cut into the thickest one. <b>No pink, clear juices → out to a container.</b> Repeat for batch two.", "why": "When in doubt, cut and look. A thermometer says 165°F; your eyes say the same thing for free." }
      ],
      "boss": {
        "q": "You crammed all eight cutlets into the pan at once. What actually happens?",
        "opts": ["They cook faster because the pan is full", "They release moisture, steam each other, and turn gray instead of browning", "Nothing — crowding only matters for vegetables"],
        "right": 1,
        "explain": "A crowded pan traps the moisture the meat releases. That water has to boil off before browning can start, so you get pale, steamed, rubbery chicken. Gaps between pieces let the steam escape. Two batches beats one crowded one, every time."
      }
    },
    {
      "act": 2, "icon": "🫘", "name": "Tex-Mex beans & veg", "chip": "pot", "xp": 180,
      "blurb": "The bean night you've carried since before vacation. Five weeks. It happens tonight, in the chicken pan, for free.",
      "lesson": {
        "image": "fond",
        "title": "FOND IS FREE FLAVOR",
        "body": "Those browned bits welded to the pan after the chicken? That's <b>fond</b> — concentrated roasted flavor. A splash of broth dissolves it and carries it into the beans. This is precisely why you don't wash the pan between the chicken and the beans. Washing it is throwing away the best ingredient in the dish."
      },
      "steps": [
        { "action": "<b>Pan, unwashed.</b> Drain and rinse <b>1 can small red beans.</b>", "why": "Rinsing cuts the tinny canning liquid and a chunk of the sodium." },
        { "action": "Beans into the hot pan with a <b>splash of chicken broth, 1 tsp cumin, 1 tsp chili powder, pinch of salt.</b>", "why": "You'll hear it hiss. That's the liquid hitting the fond." },
        { "action": "<b>Scrape the brown bits up</b> with a wooden spoon as it simmers. 6–8 minutes, until it thickens.", "why": "Watch the pan go from brown-speckled to clean as the flavor moves into the beans. That's the whole trick, visible.", "timer": { "label": "Beans simmer", "sec": 420 } },
        { "action": "<b>Pot:</b> rice is out. One inch of water, bring to a simmer, broccoli + peppers in, lid on <b>4–5 min.</b>", "why": "Done = bright green, and a fork meets slight resistance. Past that it goes olive-drab and floppy.", "timer": { "label": "Veg steam", "sec": 300 } },
        { "action": "🐶 <b>Poach the plain cutlet in that same water, ~8 min, until white through. Shred it.</b>", "why": "Plain rice + plain chicken. His whole dinner, cooked in water you were already boiling.", "dog": true, "timer": { "label": "Dog's chicken", "sec": 480 } },
        { "action": "Portion it out. <b>Fri:</b> cutlets + beans + rice, Amogia sauce on top. <b>Sat:</b> cutlets + veg + spring mix with the Italian dressing and croutons.", "why": "Amogia has ~2 weeks left and the dressing expires 7/25. Both clocks get burned down this week instead of quietly running out." },
        { "action": "Cool ~20 min until just warm, <b>then</b> lid and fridge.", "why": "Lidding hot food traps steam and warms the whole fridge. Reheat later until steaming hot all the way through — not just warm." }
      ]
    },
    {
      "act": 2, "icon": "🏆", "name": "Snack lab & breakfast", "chip": "store", "xp": 220, "final": true,
      "blurb": "Boss level. Set up the week while the oven's already warm. One snack experiment. One breakfast system. Not three of each.",
      "lesson": {
        "image": "chickpea",
        "title": "THE CHICKPEA SCIENCE",
        "body": "Moisture is the enemy of crunch — that's the entire recipe. The drier the chickpeas go in, the crispier they come out, which is why the towel-rub matters more than any seasoning you choose. 400°F. And they keep crisping <b>as they cool</b>, so never judge them straight out of the oven."
      },
      "steps": [
        { "action": "Oven to <b>400°F.</b> Drain and rinse <b>one can of chickpeas.</b>", "why": "You own four cans. They've never been opened. This is snack slot 3, test number one." },
        { "action": "<b>Rub them dry on a kitchen towel.</b> Really dry.", "why": "Loose skins coming off is a bonus, not a problem — skins hold moisture. Don't chase every one, just rub hard." },
        { "action": "Toss with <b>1–2 tsp olive oil + salt.</b> Sheet pan, single layer.", "why": "Too much oil makes them greasy-soft instead of crisp. A light coat is all you want." },
        { "action": "<b>25–30 minutes. Shake the pan halfway.</b> Done when they rattle.", "why": "You'll hear popping. That's water leaving. That's the sound of it working.", "timer": { "label": "Roast chickpeas", "sec": 1650 } },
        { "action": "Season <b>out</b> of the oven: Tajín or paprika. Cool 10 minutes.", "why": "Salt and wet seasonings pull moisture to the surface during baking, undoing your work. Season after." },
        { "action": "Store in a jar with the <b>lid loose.</b> Good 4–5 days.", "why": "Airtight traps humidity and they go soft by morning. Let them breathe." },
        { "action": "<b>Overnight oats:</b> ½ cup rolled oats + ½ cup almond milk + pinch of salt + cinnamon. Jar, lid, fridge. Make two or three.", "why": "The 1:1 rule. Equal parts oats and liquid — more and it's soup, less and it's cement." },
        { "action": "Morning: top with banana or berries. <b>This replaces snack slot 1, it doesn't stack on top of it.</b>", "why": "You already eat three daytime snacks plus one to three after dinner. Adding a meal while trying to lose weight is a different decision than swapping one." }
      ],
      "boss": {
        "q": "Next morning, your chickpeas are soft instead of crunchy. Most likely culprit?",
        "opts": ["The oven wasn't hot enough", "They went in wet, or into an airtight jar afterward", "You seasoned them after baking instead of before"],
        "right": 1,
        "explain": "Moisture, on both ends. Wet going in means they steam rather than roast; an airtight jar traps humidity that softens them overnight. Towel-dry hard before, lid loose after. Seasoning after baking is actually the correct move — that one was a trap."
      }
    }
  ]
};
