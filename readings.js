// ============================================================
// DAYDREAM ORACLE - PAST, PRESENT, FUTURE READING ENGINE
// Direct, grounded, honest. No mysticism. No platitudes.
// ============================================================

const CARD_READINGS = {
  "Rest": {
    past: "You have been carrying exhaustion like a badge of honor. The pattern of pushing through without pause quietly shaped how you make decisions and how you show up for yourself.",
    present: "You are running on less than you need right now. Not broken - but genuinely depleted. The clarity you are searching for will not come from doing more.",
    future: "Real rest is not laziness - it is preparation. If you let yourself recover fully, the next chapter begins with a steadiness you have not felt in a long time."
  },
  "Imagine": {
    past: "You stopped letting yourself want things fully at some point. Maybe to protect yourself from disappointment, maybe because someone else's vision took priority - either way, your desires got quieter than they should have.",
    present: "There is a gap right now between what you are settling for and what you actually want. You know this already. The question is whether you are willing to admit it to yourself.",
    future: "When you get honest about what you truly want - not what is practical or expected - things start to shift. Your clarity is your compass. Trust what lights up in you."
  },
  "Evaluate": {
    past: "You spent a lot of energy in places that did not deserve it. Not all of it was wasted - some taught you what matters - but the pattern of overgiving left marks you are still carrying.",
    present: "You are standing at a crossroads and you can feel it. Something is ready to change. Before you move, take honest stock of what is actually working versus what you have been keeping alive out of habit.",
    future: "The next right step is not a leap - it is a clear-eyed decision. When you stop pouring energy into what no longer fits, you free up space for something that has been waiting for you."
  },
  "Dream": {
    past: "Your subconscious has been doing heavy lifting. Old dreams, old connections, old versions of yourself have been surfacing - not to haunt you, but to show you what still matters underneath everything.",
    present: "You are building something right now, even if it does not feel like it. The foundations are forming below the surface. What feels like uncertainty is actually the early stage of something real.",
    future: "Pay attention to what keeps returning to you - in sleep, in quiet moments, in flashes of longing. Those recurring visions are not random. They are directions worth following."
  },
  "Immerse": {
    past: "There was a moment where you held back when you should have gone all in. Fear of the outcome kept you at the edge instead of in the water, and you have been wondering about it since.",
    present: "Something is calling you right now and half-measures will not cut it. This is a time to commit fully - to the project, the relationship, the change. The path forward requires your whole attention.",
    future: "Full immersion leads to transformation. It will not look exactly how you plan, but throwing yourself in completely is the only way to discover what this experience is actually meant to teach you."
  },
  "Travel": {
    past: "You stayed in familiar territory for too long. Whether that was a physical place, a mindset, or a relationship dynamic - comfort quietly became a cage without you noticing.",
    present: "Your spirit is restless right now, and that restlessness is data. There is a part of you that needs newness, movement, expansion. Do not rationalize that impulse away.",
    future: "Breaking out of routine is where your next growth lives. It does not have to be dramatic - it just has to be different. When you move beyond the familiar, something inside you will unlock."
  },
  "Inner Self": {
    past: "You have been silencing an inner voice for longer than is healthy. Whether out of fear, doubt, or survival - something inside you has been asking to be heard and you kept turning away.",
    present: "The feelings you have been pushing down are getting louder. That discomfort is not a problem - it is information. What you are avoiding is exactly what needs your attention most right now.",
    future: "When you finally let yourself be honest about what is happening inside, the relief will be immediate. Processing is not a luxury - it is how you stop carrying weight that was never yours."
  },
  "Connect": {
    past: "You have been operating like you have to do everything alone. Whether by choice or circumstance, the pattern of fierce self-reliance kept doors closed that were meant to be open.",
    present: "Meaningful connection is available to you right now. Stop treating vulnerability like a liability. The people who are meant to be in your corner cannot help if you refuse to let them in.",
    future: "Collaboration is not compromise. The partnerships forming around you now carry real potential. What you build together will be stronger than anything you build in isolation."
  },
  "Reflect": {
    past: "You accomplished more than you gave yourself credit for. The habit of moving on too quickly - without pausing to honor what you survived and built - left you feeling emptier than you should.",
    present: "Take a beat. Look at what is actually behind you with honest recognition. Every hard decision, every pivot, every quiet win - it all added up to get you exactly here.",
    future: "The wisdom you have gathered is not just for looking back on. It is fuel for what is ahead. When you stop downplaying your own experience, you move forward with a confidence that is earned, not performed."
  },
  "New Perspective": {
    past: "You have been here before - or somewhere that feels a lot like here. A familiar pattern, a repeated lesson. The difference is that you are not the same person who lived through it the first time.",
    present: "What looks like a repeat is actually an upgrade. You are not going backwards. You have the knowledge now to handle this differently, and that changes everything about what happens next.",
    future: "This time, you choose a new response. The old playbook will not serve you here - and that is the whole point. Move forward knowing you already have everything the lesson requires."
  },
  "Own It": {
    past: "You dimmed your own light somewhere along the way. Whether to keep others comfortable or because you did not trust your own instincts - you started second-guessing the things that make you powerful.",
    present: "Pretending to be less than you are is no longer a viable strategy. Something is asking you to step fully into who you actually are - including the parts that feel too much or too bold.",
    future: "When you stop apologizing for your strengths, the right people and opportunities will find you naturally. Own your choices. Own your brilliance. Watch how the world responds differently."
  },
  "Be Bold": {
    past: "There are things you did not say when you should have. Feelings you softened, truths you swallowed, actions you held back on. That caution protected you once - but it has outlived its usefulness.",
    present: "Something inside you is ready to erupt. Not recklessly - but powerfully. The thing that needs to be said or done or confronted is right in front of you. Now is not the time for subtlety.",
    future: "Bold action clears the path faster than careful deliberation ever could. When you finally make the move, you will wonder why you waited so long. Trust the impulse."
  },
  "Find Your Light": {
    past: "You drifted away from the things that genuinely make you come alive. Not all at once - gradually, through obligations, expectations, and daily noise. That distance has cost you more than you realize.",
    present: "You are searching for something right now, maybe without fully knowing it. What you are really looking for is the feeling of being at home in yourself - not just productive, but lit up.",
    future: "When you orient your life around what actually lights you up, everything else starts to find its right place. Your joy is not an indulgence - it is a compass pointing you exactly where you need to go."
  },
  "Investigate": {
    past: "You reacted to something before you fully understood it. An assumption was made - about a person, a situation, or yourself - and it quietly shaped the path you took.",
    present: "Before you act on what you are feeling, pause. There is more to this than what sits on the surface. The discomfort you feel is worth examining before you make any decisions from it.",
    future: "Real understanding changes everything. When you approach with curiosity instead of defensiveness, you see options and nuances you were completely blind to before. Dig deeper."
  },
  "Clean Slate": {
    past: "You held on to something for too long - a relationship, a project, a belief about yourself - because the investment felt too big to abandon. The cost of staying was higher than you admitted.",
    present: "Something in your life has run its course. You know it. The hard part is not the letting go - it is accepting that letting go is the right call. Clear the space.",
    future: "What follows release is not emptiness - it is room. Room for something genuinely better. Give yourself time to heal before you fill the space, and what arrives will be worth it."
  },
  "Move": {
    past: "You spent too long in your head, turning over decisions your body already knew the answer to. The paralysis of overthinking kept you in a holding pattern well past its expiration date.",
    present: "Your life needs motion right now. Physical, emotional, situational - something has to shift. The sign you have been waiting for is this: stop waiting.",
    future: "Action creates a clarity that thinking never will. Once you start moving - even imperfectly - the path reveals itself. Do not wait until you feel ready. Move first; readiness follows."
  },
  "Expand": {
    past: "You played small. Not from lack of ability, but because growth felt threatening to the stability you worked so hard to build. Comfort became the priority without you realizing it.",
    present: "Something is stretching you right now, and the discomfort is precisely because it is real growth. You know this is the right direction. The doubt is not a warning - it is growing pains.",
    future: "Take up space. The next chapter requires you to be bigger than the version of yourself you have been settling for. You have the means and the right. Step into it."
  },
  "Remove Obstacles": {
    past: "A pattern has been repeating - the same type of block, the same frustration, showing up in different forms. You tried to push through it the same way every time, and it did not work.",
    present: "Something is standing between you and what you want. Before you try to force past it, ask what this obstacle is actually showing you. The block contains the lesson you keep missing.",
    future: "When you stop fighting the wall and start looking for the door, breakthroughs become possible. The obstacle is not punishment - it is redirection toward a better path."
  },
  "Abundance": {
    past: "You operated from scarcity - not enough time, not enough love, not enough resources. That belief shaped your decisions more than your actual circumstances ever did.",
    present: "You have more than you think. Look around - genuinely look. What you have been chasing already exists in some form. The work now is to recognize what is here instead of fixating on what is missing.",
    future: "When you shift from grasping to gratitude, more arrives naturally. Abundance is not about accumulating - it is about receiving what is already flowing toward you without blocking it with doubt."
  },
  "Let Go": {
    past: "You gripped something so tightly you strangled the life out of it. Control felt like safety, but it became the very thing creating the tension and exhaustion you could not shake.",
    present: "You are standing in your own way right now. The attachment to a specific outcome is preventing you from seeing all the other possibilities. Loosen your grip - even a little - and notice what changes.",
    future: "Letting go is not giving up. It is trusting that you have done the work, and now it is time to see what happens without your hands on the wheel. Freedom lives on the other side of control."
  },
  "Balance": {
    past: "Things got lopsided somewhere along the way. Too much energy in one direction, not enough in another. What looked right on the outside did not match how it felt on the inside.",
    present: "You are being asked to recalibrate. Something in your life is consuming more than its fair share, and other areas are suffering for it. This is not failure - it is a signal to adjust.",
    future: "Balance is not a destination - it is a constant, gentle recalibration. When you stop trying to get it perfect and start listening to what feels off, equilibrium finds you on its own."
  },
  "Build": {
    past: "You rushed through something that needed more care. The impulse to see results overtook the patience required to do it right, and the cracks showed up later.",
    present: "Slow is fast right now. The urge to push ahead is strong, but what you are creating matters too much to cut corners. Be deliberate with every step - that is where your power lives.",
    future: "Patience with the process pays off in ways speed never could. What you are constructing now - one intentional choice at a time - will hold real weight. Trust the timeline."
  },
  "Step Out": {
    past: "You hid parts of yourself - behind a polished surface, behind what you thought people wanted to see. The real you got buried under layers of performance and people-pleasing.",
    present: "The mask is cracking, and that is the best thing that could happen. People are beginning to see the actual you, and the vulnerability of it is terrifying - but it is also magnetic.",
    future: "When you stop performing, some people will leave. Let them go. What remains - and what shows up next - will be built on something real. That is the only foundation worth having."
  },
  "Talk": {
    past: "There are words you swallowed that are still sitting heavy in your body. Truths unspoken, feelings buried because saying them felt too risky or too exposing.",
    present: "Something needs to be said and you already know what it is. The longer you hold it in, the more it costs you - physically, emotionally, and in the relationships that matter most to you.",
    future: "Speaking your truth will not guarantee a comfortable response, but it guarantees your freedom. When the words finally come out, you will feel lighter than you have in a very long time."
  },
  "Play": {
    past: "You forgot how to enjoy things without attaching productivity to them. At some point, everything became about output, and the simple pleasure of doing something for its own sake got lost.",
    present: "Your inner child is starving for attention. The heaviness you are carrying is not all necessary - some of it is just the absence of lightness. You need joy right now more than you need another plan.",
    future: "When you make room for play - real, unproductive, purposeless joy - everything else becomes easier. Play is not a reward for hard work. It is what makes everything else sustainable."
  },
  "Hibernate": {
    past: "You ran at a pace that was never sustainable. The exhaustion you carry is not sudden - it has been accumulating, and your body has been asking you to stop for much longer than you listened.",
    present: "Your entire system is calling for a shutdown - not forever, just now. The guilt about resting is a lie you keep telling yourself. Being still right now is the most useful thing you can do.",
    future: "When you honor this need for withdrawal, you will emerge with clarity and energy that forcing through never could have given you. This is not wasted time - it is stored power."
  },
  "Treat Yourself": {
    past: "You were so focused on earning and achieving that you forgot to stop and actually enjoy it. The wins piled up but the satisfaction did not, because you never let yourself feel it.",
    present: "You earned this. Stop deflecting the good feelings. Whatever you accomplished to get here - whether it feels big or small - it matters, and you deserve to sit in the pride of it.",
    future: "Celebration is not vanity - it is fuel. When you let yourself feel genuine pride in what you have built, you create the emotional foundation to build even more."
  },
  "Walk": {
    past: "You committed before you were ready, or let someone else's timeline override your own. The pressure to decide quickly has been a recurring pattern, and it has cost you.",
    present: "You do not owe anyone an answer right now. Despite what it feels like, nothing worth having will vanish because you took time to think. Step away from the noise and give yourself space.",
    future: "The answer will come when you stop grinding for it. Simple movement - literal fresh air and physical space - will shake loose what sitting still never could."
  },
  "Release": {
    past: "You carried other people's needs as if they were your own. The pattern of putting everyone else first became so automatic you lost track of where their weight ends and yours begins.",
    present: "You are at or near burnout. The pile of expectations is not all yours to meet. Before you can care for anyone or anything else effectively, you need to set something down. Today.",
    future: "Releasing what is not yours is not selfish - it is necessary. When you finally put down what you have been carrying for others, your hands are free to build what actually matters to you."
  },
  "Create": {
    past: "Something new tried to enter your life and you hesitated. Whether from busyness, fear, or bad timing - an opening appeared and you did not step through it fully.",
    present: "A genuine beginning is here or very close. This is not recycled energy from the past - this is new. Stay open, even if it shows up in a form you did not expect.",
    future: "What you create next has the potential to change your direction - not because it will be perfect, but because the act of making it will change who you are. Welcome it."
  },
  "Give In": {
    past: "You fought for control in a situation that was asking you to surrender. The struggle itself became the real problem - not the circumstances, but your resistance to them.",
    present: "You are overthinking something that simply needs to be experienced. Stop analyzing what it means and let yourself be in it. The constant evaluation is stealing the experience from you.",
    future: "Surrender is not losing. It is the moment you stop white-knuckling the outcome and let things teach you what they were always going to. Stop directing and start receiving."
  },
  "Boundaries": {
    past: "A line was crossed - by you or by someone else - and the resentment it created has been quietly shaping your interactions ever since. Something that should have been said was not.",
    present: "Something in your life needs a firmer edge right now. A person, a commitment, or a habit is taking more than its share, and the frustration building in you is the proof. Speak up.",
    future: "Boundaries are not walls - they are the framework of a healthy life. When you define what you will and will not accept clearly, the right things stay and the wrong things fall away on their own."
  },
  "Share": {
    past: "You kept something back - a gift, a truth, a part of yourself - that the people around you actually needed. The instinct to protect it kept it contained and small.",
    present: "Something is ready to go public. You can feel the pull to put your work, your idea, or your truth out into the world. The fear that it is not polished enough is actually the signal that it is ready.",
    future: "When you share what is genuinely yours - your perspective, your work, your voice - it lands with more impact than you expect. Generosity with your gifts is how they grow."
  },
  "Honesty": {
    past: "You told yourself a story that was not entirely true - about who you are, what you want, or why things went the way they did. That story provided cover, but it also kept you stuck.",
    present: "There is a truth sitting in front of you that you would rather not look at. But avoiding it is costing you more than facing it ever would. The lie - even a small, comfortable one - is blocking your progress.",
    future: "Radical honesty, especially with yourself, is the fastest path forward. When you stop editing your own reality, the decisions become clear and the right direction becomes obvious."
  },
  "Gifts": {
    past: "You dismissed what came your way as not enough, or convinced yourself you did not earn it. A scarcity mindset turned genuine blessings into things you felt guilty about receiving.",
    present: "What you have right now is more than you are giving it credit for. The urge to compare or minimize is distorting your view. Practice actually seeing what is already in front of you.",
    future: "Receiving is not passive - it is an act of trust. When you stop deflecting blessings with unworthiness, you align with a flow that has been trying to reach you for longer than you know."
  },
  "Hug": {
    past: "You outsourced your sense of worth to other people. The habit of seeking validation externally left you exposed to people and situations that could never give you what only you can provide.",
    present: "You need your own compassion right now more than anyone else's. The reassurance you are seeking from the outside starts with how you speak to yourself when nobody is listening.",
    future: "Self-compassion is the foundation everything else gets built on. When you stop looking outward for proof that you are enough, your relationships and decisions transform from the ground up."
  },
  "Acknowledge": {
    past: "You avoided looking at something that needed your attention. Not from carelessness - from fear. The unknown felt too large, and ignoring it felt like the safer bet.",
    present: "Something is asking to be seen and named. The discomfort you feel is not the problem - it is the starting point. The first step is simply admitting what is actually true.",
    future: "You cannot change what you refuse to look at. Acknowledgment is the doorway. Once you name the thing, the path forward becomes visible - and far less frightening than the avoidance was."
  },
  "Feel": {
    past: "You learned to numb, deflect, or intellectualize your emotions instead of feeling them. It was a survival strategy that worked - until it started costing you depth and real connection.",
    present: "Emotions are building and they need somewhere to go. The pressure you feel is not anxiety about the future - it is the weight of feelings you have not let yourself process. Let them move.",
    future: "When you stop fighting what you feel and start letting it through, everything gets lighter. Feeling deeply is not weakness - it is how you heal, make room, and become available for what is next."
  },
  "Permission": {
    past: "You handed your authority to someone else - a partner, a parent, a fear, a cultural expectation. Decisions that should have been yours were made by someone else's rules, and you went along with it.",
    present: "You are waiting for someone to tell you it is okay to do what you already know you need to do. No one is coming. The permission you need was always yours to give.",
    future: "When you reclaim your agency - the right to choose, to fail, and to try again on your own terms - the entire shape of your life shifts. Stop asking. Start deciding."
  },
  "Patience": {
    past: "You tried to rush something that had its own timeline. The frustration of waiting pushed you toward forcing outcomes that were not ready, and the consequences showed up later.",
    present: "Things are moving - just not at the speed you want. The foundation being built right now needs time to set properly. Pushing harder will not accelerate it; it will weaken it.",
    future: "What you are waiting for will arrive when the ground is solid enough to hold it. Your work right now is not to speed things up - it is to be present and intentional with every step."
  },
  "Desire": {
    past: "You disconnected from what you actually want. It happened slowly - through compromise, through prioritizing others, through convincing yourself that your own desires were selfish or unrealistic.",
    present: "Something is pulling at you - a longing that will not go quiet. Pay attention to it. It is not random or irresponsible. It is the truest part of you trying to redirect your attention.",
    future: "When you reconnect with genuine desire - not obligation, not expectation, but actual want - it becomes the most honest compass you have. Follow it, especially when it feels inconvenient."
  },
  "Peace": {
    past: "Chaos became your baseline. Whether external turmoil or internal noise, you adapted to unrest so thoroughly that stillness started to feel foreign - even suspicious.",
    present: "Underneath everything swirling around you, there is a quiet center you have not visited in too long. You can access it - not by fixing your circumstances, but by shifting your focus inward.",
    future: "Peace is not the reward you get after everything is resolved. It is a practice you build now, in the mess. And once you find it, it becomes portable - it goes wherever you go."
  },
  "Presence": {
    past: "You kept putting off something that matters to you - not from inability, but because the importance of it made the stakes feel paralyzing. Avoidance was protection, not laziness.",
    present: "Something needs your full, undivided attention right now. Not anxious focus - grounded presence. Stop splitting yourself across ten things and give one thing everything you have.",
    future: "When you show up completely for what matters most, the overwhelm dissolves. Scattered effort creates noise; presence creates impact. The difference is where you direct your attention."
  },
  "Spark": {
    past: "Your creative fire went dim. Through routine, rejection, or simply the grind of keeping life together - the part of you that gets genuinely excited about things went quiet.",
    present: "There is a flicker right now - an idea, an impulse, a pull toward something. Do not dismiss it as impractical or poorly timed. Feed it. Even small attention can reignite what was dormant.",
    future: "Passion is not something you stumble upon - it is activated by showing up for what excites you, even imperfectly. Follow the spark. It knows where it is going."
  },
  "Be": {
    past: "You pushed through a cycle that took everything from you. The hard part is over, or nearly over, but you have not stopped moving long enough to let the completion register in your body.",
    present: "You have arrived at a resting point. Your only task right now is to exist in it. Not plan, not optimize, not prepare for the next thing. Just be here. This is harder than it sounds - and that is exactly why it matters.",
    future: "The next chapter does not need you doing - it needs you whole. Rest in what you have already built. The stillness you practice now becomes the strength you carry into everything that follows."
  },
  "Seek": {
    past: "You looked for answers in all the expected places - specific outcomes, specific people, specific results. The search was valid, but the rigidity of where you looked kept you from seeing what was right there.",
    present: "You are in search mode and that is exactly right. But stop insisting the answer take a particular shape. Trust the act of seeking more than the expectation of a specific find.",
    future: "What you are looking for is closer than you think. When you release the need to control what it looks like and focus on how you want to feel, the path gets surprisingly clear."
  },
  "Receiving": {
    past: "You had trouble letting help, love, or recognition in when it was offered. Independence became so central to your identity that receiving felt like weakness - or like owing someone.",
    present: "Something is trying to reach you right now - a resource, a person, a form of support. Your only job is to stop deflecting it. You do not need to earn it first.",
    future: "When you open to receiving, you complete a cycle that effort alone cannot close. The support flowing toward you is not charity - it is the natural return on everything you have already given."
  },
  "Inspired": {
    past: "You went through a dry season - creatively, emotionally, or spiritually. The well felt empty, and you tried to force output from a place that needed input instead.",
    present: "New energy and ideas are arriving from multiple directions. Do not try to organize them yet - this is a gathering phase, not a decision phase. Let everything in and sort it later.",
    future: "Inspiration is a starting gun, not a finish line. What you do with this creative surge will define the next chapter. Stay curious, stay open, and trust that the clarity comes after the flood, not before."
  },
  "Freedom": {
    past: "Something caged you - a belief, a relationship, an environment, a role you outgrew. The bars were real even if nobody else could see them.",
    present: "You are ready to break free, but the scale of the change feels enormous. Notice this: the discomfort of staying is finally outweighing the fear of going. That tipping point matters.",
    future: "What waits on the other side of this release is a life you cannot fully picture yet - and that is the point. Freedom never comes with a detailed plan. It comes with possibility."
  },
  "Step Back": {
    past: "You got too close to a situation and lost all objectivity. The emotional investment made it impossible to see clearly, and the choices you made from that place were reactive, not wise.",
    present: "You need distance from something right now. Not avoidance - perspective. The answers you are grinding for will not come from thinking harder. They will come from stepping away.",
    future: "Space creates clarity. When you disengage briefly, you will see the situation for what it actually is - stripped of the fear and hope you have been projecting onto it."
  },
  "Power": {
    past: "You underestimated your own influence. Decisions that felt minor at the time had consequences you did not anticipate. Your impact has always been larger than you gave yourself credit for.",
    present: "You are more in control of your circumstances than you feel right now. The story of powerlessness is familiar, but it is not accurate. How you see yourself is how the world treats you.",
    future: "Owning your power means choosing with intention and standing fully behind those choices. When you stop deferring to everyone else, the right direction becomes undeniable."
  },
  "Preserve": {
    past: "You gave energy to things that did not return it. The generosity was real, but it left you depleted in ways that compounded - and not every cause deserved what you poured in.",
    present: "Your energy is finite and it needs guarding right now, not scattering. The impulse to say yes to everything is strong, but the wisest move is to do less with full presence.",
    future: "Conservation is not selfishness - it is strategy. The energy you protect now becomes the fuel for what truly matters when the moment arrives. Choose carefully where you invest yourself."
  },
  "Listen": {
    past: "You missed signals - from your body, your instincts, or the people closest to you. Not because the signals were not there, but because your own internal noise drowned them out.",
    present: "Something important is trying to reach you right now - through a pattern, a person, a feeling in your body. Your intuition is sharper than usual. Trust what you are picking up.",
    future: "When you learn to listen before you act, your decisions become almost effortless. The guidance is already present. You just need to get quiet enough to actually hear it."
  },
  "Commitment": {
    past: "You overextended yourself to a person, a role, or a promise, and the cost was higher than you budgeted for. Loyalty held you in place long after the situation stopped deserving it.",
    present: "A commitment in your life needs honest reevaluation. Not necessarily ending - but examining. Are you showing up because you choose to, or because guilt says you should? That distinction matters enormously.",
    future: "Sustainable commitment comes from alignment, not obligation. When you redirect your devotion toward what genuinely fits, the energy stops draining and starts flowing."
  },
  "Visions": {
    past: "Someone else's priorities took your steering wheel. Their vision for your life - whether well-meaning or not - became louder than your own, and you drifted from your actual direction.",
    present: "You are in a highly intuitive place right now. The clarity about what you want is sharper than it has been in a long time. Do not let practicality or outside opinions dull that signal.",
    future: "Significant decisions are ahead, and they require you to be rooted in your own knowing. When you approach from inner clarity rather than external pressure, the right choice becomes obvious."
  },
  "Roots": {
    past: "Where you came from shaped you more than you want to admit. The patterns you inherited - both gifts and wounds - are still running in the background of your daily decisions.",
    present: "Going back to basics is the move right now. Not to dwell in the past, but to understand the ground you are standing on. You cannot grow from a foundation you have never examined.",
    future: "You are not defined by your origin, but you are deeply informed by it. When you make peace with where you started, you gain the freedom to grow in whatever direction you choose."
  },
  "Ease": {
    past: "You made things harder than they had to be. Somewhere you internalized the belief that struggle equals worthiness, and you kept grinding when a simpler path was right there the whole time.",
    present: "The path of least resistance is not the lazy path right now - it is the correct one. What flows naturally and feels good is not a trap. It is alignment. Stop fighting for difficulty.",
    future: "Ease is not something you earn after enough suffering. It is available to you now. When you drop the story that everything valuable must be painful, life becomes remarkably cooperative."
  },
  "Relax": {
    past: "You ran on autopilot, cycling through the same patterns without questioning whether they still made sense. Staying busy became a way to avoid having to feel or reckon with anything deeper.",
    present: "Your mind and body are demanding a real stop. Not a restless pause while you plan the next move - an actual unwinding. The insight you need is hiding behind all the noise you are generating.",
    future: "When you truly let go and relax, the answers come on their own. Your next step does not need to be figured out - it needs to be felt. Make space for that feeling to arrive."
  },
  "Growth": {
    past: "You stayed comfortable longer than served you. The familiarity was safe, but the price of that safety was stagnation. Something in you has known for a while that it was time to stretch.",
    present: "You are being pushed beyond your comfort zone, and it does not feel graceful. That discomfort is how you know this is actual growth and not just surface-level change. Lean into it.",
    future: "On the other side of this discomfort is a version of you that is more capable, more self-aware, and more alive than you are today. Growth is never pretty in the middle. Keep going."
  },
  "Nurture": {
    past: "You built relationships that genuinely matter - chosen family, deep friendships, bonds that shaped who you are. Those connections deserve more recognition than you have been giving them.",
    present: "The people around you are your greatest resource right now. Pay attention to them - actually see them and let them see you. What you have built together is rare and worth tending to.",
    future: "The road ahead is not a solo journey. When you nurture what is already growing - the relationships, the projects, the quiet momentum - everything deepens and strengthens on its own."
  }
};

// ============================================================
// NARRATIVE ENGINE
// Weaves three card readings into a single flowing story
// ============================================================

// Bridge templates: transitions from past → present
const PAST_TO_PRESENT = [
  (pastCard, presentCard) => `And that is what you carried into this moment.`,
  (pastCard, presentCard) => `That history is not behind you - it is the lens you are seeing through right now.`,
  (pastCard, presentCard) => `All of that lives in you still, and it is shaping what you are facing now.`,
  (pastCard, presentCard) => `You brought that energy forward, and it is coloring everything about where you currently stand.`,
  (pastCard, presentCard) => `That pattern followed you here - into this exact present.`,
  (pastCard, presentCard) => `The weight of that did not stay in the past. It walked with you into the present.`,
  (pastCard, presentCard) => `So here you are, carrying all of that into the reality of right now.`,
];

// Bridge templates: transitions from present → future
const PRESENT_TO_FUTURE = [
  (presentCard, futureCard) => `But here is where it gets interesting.`,
  (presentCard, futureCard) => `And if you stay honest with yourself about all of that -`,
  (presentCard, futureCard) => `The question is what you do with this awareness.`,
  (presentCard, futureCard) => `What matters now is where you point yourself from here.`,
  (presentCard, futureCard) => `This present moment is not a dead end - it is a pivot point.`,
  (presentCard, futureCard) => `And this is where the story turns.`,
  (presentCard, futureCard) => `So where does this leave you?`,
];

// Closing synthesis - ties the whole reading together
const CLOSINGS = [
  (past, present, future) => `${past.name} grounded you. ${present.name} is waking you up. And ${future.name} is the direction your truest self is already pointed toward.`,
  (past, present, future) => `From ${past.name.toLowerCase()} to ${present.name.toLowerCase()} to ${future.name.toLowerCase()} - this is not random. This is a story about you becoming more honest with yourself about what you need.`,
  (past, present, future) => `The thread connecting ${past.name}, ${present.name}, and ${future.name} is this: you have been preparing for a shift, and the shift is now asking for your full attention.`,
  (past, present, future) => `Trust what these three cards are telling you together. The past informed you, the present is testing you, and the future is inviting you forward.`,
  (past, present, future) => `This reading is not asking you to be someone new. It is asking you to stop pretending you are not already becoming who you are meant to be.`,
  (past, present, future) => `What ${past.name} started, ${present.name} is processing, and ${future.name} will complete - if you let it.`,
  (past, present, future) => `You are not starting from zero. Everything you have lived brought you to this exact point, and this exact point is exactly where you need to be.`,
  (past, present, future) => `These three cards, together, are asking you one thing: will you trust yourself enough to follow through on what you already know?`,
];

function rand(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

// ============================================================
// NUMEROLOGY ENGINE
// Reduce card IDs to single digit or master number (11, 22, 33)
// ============================================================

function reduceToNumerology(num) {
  while (num > 9 && num !== 11 && num !== 22 && num !== 33) {
    num = String(num).split('').reduce((sum, d) => sum + parseInt(d), 0);
  }
  return num;
}

const NUMBER_MEANINGS = {
  1: [
    "This is a number of initiation. Something is beginning - or needs to - and you are the one who has to start it. No one is coming to do this for you.",
    "The number one is about self-authorship. Whatever these cards are pointing to, the first move belongs to you. Stop waiting for permission or a sign - you are the sign.",
    "One speaks to independence and originality. Right now, the most important relationship in this equation is the one you have with yourself. Lead from there."
  ],
  2: [
    "Two is the number of partnership and duality. Something in this reading is asking you to hold two truths at once - without forcing a resolution. Sit with the tension.",
    "The energy of two points to balance and cooperation. What you are navigating right now is not a solo project - there is someone or something you need to meet halfway.",
    "Two speaks to patience and receptivity. The answers are not going to come from pushing harder. They will come from listening and allowing what is already in motion to reveal itself."
  ],
  3: [
    "Three is creative expression. Whatever you have been holding inside - the idea, the feeling, the truth - it is ready to take form. Bring it into the world.",
    "The energy of three is about synthesis. Your past, present, and future are not separate chapters - they are one story, and right now you are at the point where it all starts to make sense.",
    "Three carries the energy of growth through expression. The thing that will move you forward is not more thinking - it is creating, speaking, or making something real."
  ],
  4: [
    "Four is foundation. Whatever you are building right now needs structure, not speed. Do the boring, necessary work - it is what everything else will stand on.",
    "The energy of four is stability through discipline. This is not the moment for spontaneity - it is the moment for showing up consistently, even when it feels tedious.",
    "Four asks you to get practical. The vision is there, but without a plan and daily effort, it stays a dream. Put the scaffolding up now."
  ],
  5: [
    "Five is change - real, unavoidable, sometimes uncomfortable change. Something in your life is shifting, and your only job is to stop resisting it and start moving with it.",
    "The energy of five is freedom through disruption. What feels like chaos right now is actually clearing space for something that could not exist under the old conditions.",
    "Five tells you that the discomfort you feel is the sensation of outgrowing a container. It is not wrong - it is necessary. Let the old form break."
  ],
  6: [
    "Six is about responsibility and care - for yourself and others. Something in this reading is asking you to show up with more heart, not more strategy.",
    "The energy of six is nurturing and accountability. A relationship or commitment needs your honest attention right now - not perfection, just presence and follow-through.",
    "Six points to home, in every sense. Where you feel safe, who you feel safe with, and whether you have been tending to those foundations. Start there."
  ],
  7: [
    "Seven is introspection. The answers you need right now are not out there - they are inside you, under the noise, waiting for you to get quiet enough to hear them.",
    "The energy of seven is spiritual depth through solitude. This is not a time for crowdsourcing opinions. Go inward. Trust what you find there, even if it is uncomfortable.",
    "Seven asks you to stop skimming the surface. Whatever this reading is pointing to, it requires you to go deeper - with yourself, your motivations, and your honesty."
  ],
  8: [
    "Eight is power and abundance - but earned, not given. You have more agency in your current situation than you are exercising. Step into it fully.",
    "The energy of eight is mastery through action. You have the skills, the knowledge, and the means. What is missing is not capability - it is the decision to use it without apology.",
    "Eight tells you that the cycle you are in is about claiming what is already yours. Stop acting like you need more preparation. You are ready."
  ],
  9: [
    "Nine is completion. A cycle is ending - or needs to. The lesson has been delivered, the experience has served its purpose, and now it is time to release and move forward.",
    "The energy of nine is wisdom earned through experience. You know more than you did when this chapter started. Honor that by not repeating what you have already outgrown.",
    "Nine asks you to let something finish. The urge to hold on is strong, but what comes after completion is not emptiness - it is space for something new that cannot arrive until you let go."
  ],
  11: [
    "Eleven is a master number - intuition amplified. You are picking up on something right now that is more than a feeling. Trust it completely, even if you cannot explain it logically. Your inner knowing is operating at a higher frequency.",
    "The master number eleven signals a spiritual turning point. What is happening in your life right now is not random - it is a pivot, and your awareness of it is the most important thing you have. Pay attention to what keeps showing up.",
    "Eleven is the bridge between the invisible and the real. You are standing in a doorway right now, and the only thing required to walk through it is trust in what you already sense to be true."
  ],
  22: [
    "Twenty-two is the master builder - vision made material. You are not just dreaming right now - you are in a position to build something that lasts. The scale of what is possible is larger than you have been letting yourself imagine. Think bigger.",
    "The master number twenty-two combines intuition with practical power. You have both the vision and the ability to execute. What is holding you back is not a lack of skill - it is a lack of belief in the magnitude of what you can create.",
    "Twenty-two says the blueprint is ready. Stop planning and start building. The world does not need another version of your idea in your head - it needs the version that exists in reality."
  ],
  33: [
    "Thirty-three is the master teacher - the rarest energy in numerology. What you are living through right now is not just for you. The wisdom you are gaining from this experience is meant to be shared, lived, and offered to those around you.",
    "The master number thirty-three is compassion in its most powerful form. You are being asked to lead with your heart in a way that transforms not just your own life but the lives of people who witness you doing it.",
    "Thirty-three tells you that your current journey has a purpose beyond your own growth. How you handle what these cards are showing you will ripple outward. Be intentional about the example you set."
  ]
};

// ============================================================
// CRYSTAL RECOMMENDATION ENGINE
// Match crystal to the dominant energy of the reading
// ============================================================

// Each card is tagged with a primary theme
const CARD_THEMES = {
  "Rest": "restoration", "Hibernate": "restoration", "Relax": "restoration",
  "Treat Yourself": "restoration", "Be": "restoration",
  "Be Bold": "courage", "Move": "courage", "Step Out": "courage",
  "Expand": "courage", "Freedom": "courage",
  "Reflect": "introspection", "Evaluate": "introspection", "Inner Self": "introspection",
  "Investigate": "introspection", "Presence": "introspection",
  "Let Go": "release", "Release": "release", "Clean Slate": "release",
  "Remove Obstacles": "release", "Give In": "release",
  "Connect": "connection", "Share": "connection", "Nurture": "connection",
  "Receiving": "connection", "Hug": "connection",
  "Growth": "transformation", "New Perspective": "transformation", "Roots": "transformation",
  "Create": "transformation", "Spark": "transformation",
  "Own It": "empowerment", "Permission": "empowerment", "Power": "empowerment",
  "Honesty": "empowerment", "Acknowledge": "empowerment",
  "Patience": "trust", "Walk": "trust", "Seek": "trust",
  "Listen": "trust", "Build": "trust",
  "Play": "joy", "Abundance": "joy", "Gifts": "joy",
  "Ease": "joy", "Dream": "joy",
  "Balance": "boundaries", "Boundaries": "boundaries", "Preserve": "boundaries",
  "Commitment": "boundaries", "Step Back": "boundaries",
  "Visions": "intuition", "Imagine": "intuition", "Desire": "intuition",
  "Inspired": "intuition", "Find Your Light": "intuition",
  "Talk": "expression", "Feel": "expression", "Peace": "expression",
  "Immerse": "expression", "Travel": "expression"
};

// Crystal recommendations per theme - with reading-specific reasoning templates
const CRYSTAL_MAP = {
  restoration: {
    name: "Lepidolite",
    reasons: [
      "Your cards are all pointing toward the same thing: you need to stop. Lepidolite is a lithium-bearing stone that works directly on your nervous system, calming the mental chatter that keeps you from resting even when your body is begging for it. Keep it near you when you sleep - it does its best work when you finally let your guard down.",
      "This reading is asking you to put yourself down gently. Lepidolite supports exactly that - it eases the anxiety and guilt that surface when you try to stop producing. It reminds your body that stillness is not laziness.",
      "Everything in this spread points to depletion. Lepidolite is the stone for when your system needs a soft reset - it calms the nervous system and helps you accept that doing nothing right now is the most powerful choice available."
    ]
  },
  courage: {
    name: "Carnelian",
    reasons: [
      "This reading is asking you to move, speak, or act - and carnelian is the stone that lights the fire under that impulse. It connects to your sacral energy and gives you the raw vitality to do the bold thing instead of just thinking about it.",
      "Your cards are pointing to action that requires guts. Carnelian fuels courage at a gut level - not the reckless kind, but the kind that comes from knowing what you want and refusing to shrink away from it.",
      "The energy across this reading is one of forward motion and risk. Carnelian is a stone of physical courage and creative power - it will help you act on what your cards are clearly telling you to stop avoiding."
    ]
  },
  introspection: {
    name: "Labradorite",
    reasons: [
      "Your reading is asking you to look deeper - past the surface story and into the real one. Labradorite is the stone of inner sight, helping you access the truths you have been avoiding without being overwhelmed by what you find.",
      "This spread is about self-honesty, and labradorite supports exactly that kind of inner excavation. It strengthens your ability to sit with uncomfortable truths and see them clearly, without distortion or denial.",
      "The cards are calling you inward. Labradorite protects your energy while you do the deep internal work this reading requires - it keeps you grounded in reality even as you explore what is beneath the surface."
    ]
  },
  release: {
    name: "Smoky Quartz",
    reasons: [
      "Your reading is telling you to let go, and smoky quartz is the stone for exactly that. It absorbs and transmutes the heavy energy you have been carrying - the patterns, the attachments, the things you know you need to set down but cannot seem to release.",
      "Everything in this spread points to something that has outstayed its welcome. Smoky quartz grounds the release process - it helps you put things down without spiraling into grief or guilt about it.",
      "The dominant message here is release, and smoky quartz does the energetic heavy lifting. It draws out stagnant energy and old attachments, helping you clear the space your cards are asking you to make."
    ]
  },
  connection: {
    name: "Rhodonite",
    reasons: [
      "This reading is about human connection - giving it, receiving it, and healing the wounds that make both feel risky. Rhodonite works directly on the heart, helping you stay open without losing yourself in the process.",
      "Your cards are asking you to let people in. Rhodonite supports that vulnerability - it heals old emotional scars that make connection feel dangerous and helps you trust that closeness does not have to mean losing yourself.",
      "The thread through this reading is relationship - with others and with yourself. Rhodonite balances the give and take, helping you connect from a place of wholeness rather than need."
    ]
  },
  transformation: {
    name: "Malachite",
    reasons: [
      "Your reading is about deep change - the kind that rearranges things at a fundamental level. Malachite is the stone of transformation, and it does not work gently. It accelerates the growth your cards are describing and helps you move through discomfort instead of around it.",
      "Everything in this spread points to becoming someone different than who you were. Malachite supports that metamorphosis - it breaks up stagnant energy and pushes you through the resistance that keeps you from evolving.",
      "The cards are clear: transformation is happening whether you are ready or not. Malachite helps you work with that process instead of against it. It is intense, but so is what you are going through."
    ]
  },
  empowerment: {
    name: "Tiger's Eye",
    reasons: [
      "This reading is asking you to own your power - fully, without apology. Tiger's eye strengthens your personal will and helps you act from confidence rather than seeking permission. It is the stone for when you already know what to do but keep hesitating.",
      "Your cards are pointing to self-authority. Tiger's eye supports exactly that energy - it sharpens your sense of personal power and dissolves the self-doubt that has been keeping you from claiming what is already yours.",
      "The dominant message across this spread is empowerment. Tiger's eye is a stone of grounded confidence - it does not inflate your ego, it connects you to the strength you already have and helps you stop pretending it is not there."
    ]
  },
  trust: {
    name: "Blue Lace Agate",
    reasons: [
      "Your reading is about patience, timing, and trusting a process you cannot control. Blue lace agate is the stone for when your mind is racing ahead of reality - it calms the urgency and helps you settle into the present pace without fighting it.",
      "This spread is asking you to wait, and that is harder than any action. Blue lace agate eases the anxiety of not knowing, helping you trust that what is being built slowly is being built well.",
      "The cards point to trust - in yourself, in the timing, in the process. Blue lace agate works on the throat and helps you express your needs while staying patient with outcomes you cannot force."
    ]
  },
  joy: {
    name: "Sunstone",
    reasons: [
      "This reading is calling you back to joy - the kind you forgot you were allowed to have. Sunstone carries the energy of warmth, optimism, and genuine pleasure. It helps you stop earning happiness and start letting it in.",
      "Your cards are pointing toward lightness, abundance, and play. Sunstone is the stone that matches that frequency - it dispels heaviness and reconnects you to the part of yourself that knows how to enjoy being alive.",
      "Everything in this spread is asking you to receive and enjoy. Sunstone amplifies that capacity - it works against the belief that you have not done enough to deserve good things, and helps you simply accept them."
    ]
  },
  boundaries: {
    name: "Black Tourmaline",
    reasons: [
      "Your reading is about knowing your limits and defending them. Black tourmaline is the strongest protective stone there is - it creates an energetic boundary between you and everything that has been draining you. Carry it when you need to hold your ground.",
      "This spread is asking you to draw a line. Black tourmaline supports that firmness - it shields your energy from people and situations that take more than they give, and helps you stop feeling guilty about protecting yourself.",
      "The message across these cards is clear: your energy needs a perimeter. Black tourmaline establishes that boundary at an energetic level, absorbing the negativity and overreach you have been tolerating for too long."
    ]
  },
  intuition: {
    name: "Amethyst",
    reasons: [
      "Your reading is asking you to trust what you already sense. Amethyst heightens intuitive clarity - it connects you to the inner knowing that these cards are reflecting back to you. Your gut has been right; this stone helps you stop second-guessing it.",
      "The thread through this spread is vision and inner guidance. Amethyst is the stone for when your intuition is strong but your mind keeps overriding it. It quiets the noise so the signal can come through clearly.",
      "Everything in this reading points to following your instincts. Amethyst sharpens that faculty - it opens the channel between what you sense and what you are willing to act on. Trust what comes through."
    ]
  },
  expression: {
    name: "Aquamarine",
    reasons: [
      "Your reading is about getting something out of you and into the world - a truth, an emotion, a creative impulse. Aquamarine is the stone of clear communication, helping you say what needs to be said without distortion or fear.",
      "This spread is asking you to express, feel, and communicate openly. Aquamarine works on the throat and heart together, so what comes out is both honest and compassionate. It is the stone for when the truth needs to be spoken with care.",
      "The dominant energy here is expression - emotional, creative, and verbal. Aquamarine helps you channel that energy cleanly, so the intensity of what you are feeling does not overwhelm the message you need to deliver."
    ]
  }
};

// ============================================================
// MAIN READING GENERATOR
// ============================================================

function generateReading(pastCard, presentCard, futureCard) {
  const pastR = CARD_READINGS[pastCard.name];
  const presentR = CARD_READINGS[presentCard.name];
  const futureR = CARD_READINGS[futureCard.name];

  // Fallback if a card name is somehow missing from readings
  if (!pastR || !presentR || !futureR) {
    document.getElementById('spreadReadingText').innerHTML =
      '<p>Your cards have been drawn. Sit with them for a moment - their images carry meaning even without words.</p>';
    document.getElementById('spreadSynthesis').textContent = '';
    document.getElementById('spreadReading').classList.add('show');
    return;
  }

  // Select random bridges
  const bridge1 = rand(PAST_TO_PRESENT)(pastCard, presentCard);
  const bridge2 = rand(PRESENT_TO_FUTURE)(presentCard, futureCard);
  const closing = rand(CLOSINGS)(pastCard, presentCard, futureCard);

  // Assemble the main narrative
  const narrative = `<p>${pastR.past} ${bridge1}</p>
<p>${presentR.present} ${bridge2}</p>
<p>${futureR.future}</p>
<p class="reading-closing">${closing}</p>`;

  // --- NUMEROLOGY ---
  const cardSum = pastCard.id + presentCard.id + futureCard.id;
  const lifeNumber = reduceToNumerology(cardSum);
  const numMeaning = rand(NUMBER_MEANINGS[lifeNumber]);

  const numerologyHTML = `<div class="reading-numerology">
    <p class="reading-sub-label">YOUR NUMBER: ${lifeNumber}</p>
    <p class="reading-sub-text">${numMeaning}</p>
  </div>`;

  // --- CRYSTAL ---
  const pastTheme = CARD_THEMES[pastCard.name] || 'introspection';
  const presentTheme = CARD_THEMES[presentCard.name] || 'introspection';
  const futureTheme = CARD_THEMES[futureCard.name] || 'introspection';

  // Find dominant theme - if all different, weight toward the future card
  let dominantTheme;
  if (pastTheme === presentTheme || pastTheme === futureTheme) {
    dominantTheme = pastTheme;
  } else if (presentTheme === futureTheme) {
    dominantTheme = presentTheme;
  } else {
    // All different - use future card's theme (where they're headed)
    dominantTheme = futureTheme;
  }

  const crystal = CRYSTAL_MAP[dominantTheme];
  const crystalReason = rand(crystal.reasons);

  const crystalHTML = `<div class="reading-crystal">
    <p class="reading-sub-label">YOUR CRYSTAL</p>
    <p class="reading-crystal-name">${crystal.name}</p>
    <p class="reading-sub-text">${crystalReason}</p>
  </div>`;

  // --- RENDER ---
  document.getElementById('spreadReadingText').innerHTML = narrative;
  document.getElementById('spreadSynthesis').innerHTML = numerologyHTML + crystalHTML;
  const readingEl = document.getElementById('spreadReading');
  readingEl.classList.add('show');

}
