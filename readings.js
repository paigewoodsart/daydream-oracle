// ============================================================
// DAYDREAM ORACLE - PAST, PRESENT, FUTURE READING ENGINE
// Direct, grounded, honest. No mysticism. No platitudes.
// ============================================================

const CARD_READINGS = {
  "Rest": {
    past: "You have been wearing your exhaustion like a badge of honor and I need you to hear me on this - that pattern of just pushing through without stopping? It quietly shaped how you make decisions and how you show up for yourself in ways you probably have not even clocked yet.",
    present: "You are running on fumes right now. Not broken, but genuinely depleted. And I want you to really sit with this - the clarity you are searching for is not going to come from doing more. It is going to come from stopping.",
    future: "Here is what I want you to take away from this - real rest is not laziness, it is preparation. If you let yourself actually recover, the next chapter begins with a steadiness you have not felt in a really long time. Give yourself that permission."
  },
  "Imagine": {
    past: "At some point you stopped letting yourself want things fully. Maybe to protect yourself from being let down, maybe because somebody else's vision got louder than yours - but either way, your desires got way quieter than they should have been.",
    present: "There is a gap right now between what you are settling for and what you actually want. And I think you already know that. The real question is whether you are willing to be honest with yourself about it.",
    future: "When you get real about what you truly want - not what is practical, not what is expected, but what actually lights you up - things start to shift. Your clarity is your compass. Trust what excites you."
  },
  "Evaluate": {
    past: "You spent so much energy in places that honestly did not deserve it. Not all of it was wasted - some of it taught you what matters - but that pattern of overgiving left marks you are still carrying around.",
    present: "You are standing at a crossroads right now and you can feel it. Something is ready to change. But before you move, I want you to take real honest stock of what is actually working versus what you have just been keeping alive out of habit.",
    future: "The next right step is not a leap - it is a clear-eyed decision. When you stop pouring into what no longer fits, you free up space for something that has literally been waiting for you to make room for it."
  },
  "Dream": {
    past: "Your subconscious has been doing some serious heavy lifting. Old dreams, old connections, old versions of you have been surfacing - not to haunt you, but to show you what still matters underneath all the noise.",
    present: "You are building something right now even if it does not feel like it. The foundations are forming below the surface. What feels like uncertainty? That is actually the early stage of something really real taking shape.",
    future: "I want you to pay attention to what keeps coming back to you - in sleep, in quiet moments, in those little flashes of longing. Those are not random. Those are directions worth following. Dream a beautiful dream and then go after it."
  },
  "Immerse": {
    past: "There was a moment where you held back when you should have gone all in. Fear of the outcome kept you standing at the edge instead of jumping in, and you have been wondering about it ever since.",
    present: "Something is calling you right now and half measures are not going to cut it. This is a time to commit fully - to the project, the relationship, the change, whatever it is. The path forward requires your whole attention, not just a toe in the water.",
    future: "Full immersion leads to transformation. It is not going to look exactly how you planned, but throwing yourself in completely is the only way to discover what this experience is actually meant to teach you. Stop standing on the edge."
  },
  "Travel": {
    past: "You stayed in familiar territory for way too long. Whether that was a physical place, a mindset, or a relationship dynamic - comfort quietly became a cage and you did not even notice it happening.",
    present: "Your spirit is restless right now and that restlessness is data. There is a part of you that needs newness, movement, expansion. Do not rationalize that impulse away - it is telling you something important.",
    future: "Breaking out of routine is where your next growth lives. It does not have to be some big dramatic thing - it just has to be different. When you move beyond the familiar, something inside you is going to unlock."
  },
  "Inner Self": {
    past: "You have been silencing an inner voice for longer than is healthy. Whether out of fear, doubt, or just survival mode - something inside you has been asking to be heard and you kept turning away from it.",
    present: "The feelings you have been pushing down are getting louder. And I need you to understand - that discomfort is not a problem, it is information. What you are avoiding is exactly what needs your attention most right now.",
    future: "When you finally let yourself be honest about what is happening inside, the relief is going to be immediate. Get in touch with your emotions here. Processing is not a luxury - it is how you stop carrying weight that was never yours to begin with."
  },
  "Connect": {
    past: "You have been operating like you have to do everything by yourself. Whether that was by choice or just circumstance, that pattern of fierce self-reliance kept doors closed that were meant to be open for you.",
    present: "Meaningful connection is available to you right now. Stop treating vulnerability like it is a liability. The people who are meant to be in your corner cannot help you if you refuse to let them in.",
    future: "Collaboration is not compromise. The partnerships forming around you right now carry real potential. What you build together is going to be stronger than anything you build in isolation. Let people in."
  },
  "Reflect": {
    past: "You accomplished so much more than you gave yourself credit for. The habit of just moving on too quickly - without pausing to honor what you survived and what you built - left you feeling emptier than you should be.",
    present: "Take a beat here. Look at what is actually behind you with some honest recognition. Every hard decision, every pivot, every quiet win - it all added up to get you to exactly this point. I want you to really see that.",
    future: "The wisdom you have gathered is not just for looking back on - it is fuel for what is ahead. When you stop downplaying your own experience, you move forward with a confidence that is earned, not performed. Own that."
  },
  "New Perspective": {
    past: "You have been here before - or somewhere that feels a whole lot like here. A familiar pattern, a repeated lesson. But here is the thing - you are not the same person who lived through it the first time.",
    present: "What looks like a repeat is actually an upgrade. You are not going backwards. You have the knowledge now to handle this completely differently, and that changes everything about what happens next.",
    future: "This time you choose a new response. The old playbook is not going to serve you here - and that is the whole point. You already have everything you need to handle this differently. Trust that."
  },
  "Own It": {
    past: "You dimmed your own light somewhere along the way. Whether it was to keep other people comfortable or because you did not trust your own instincts - you started second-guessing the exact things that make you powerful.",
    present: "Pretending to be less than you are is no longer going to work. Something is asking you to step fully into who you actually are - including the parts that feel too much or too bold. That is your energy. Own it.",
    future: "When you stop apologizing for your strengths, the right people and opportunities find you naturally. I want you to really hear that. Own your choices. Own your brilliance. Watch how the world responds differently when you do."
  },
  "Be Bold": {
    past: "There are things you did not say when you should have. Feelings you softened, truths you swallowed, actions you held back on. That caution protected you once but it has way outlived its usefulness.",
    present: "Something inside you is ready to erupt. Not recklessly - but powerfully. The thing that needs to be said or done or confronted is right in front of you. Now is not the time for subtlety. Say the thing.",
    future: "Bold action clears the path faster than careful deliberation ever could. When you finally make the move, you are going to wonder why you waited so long. Trust the impulse - it is trying to take you somewhere good."
  },
  "Find Your Light": {
    past: "You drifted away from the things that genuinely make you come alive. Not all at once - gradually, through obligations and expectations and daily noise. That distance has cost you more than you realize.",
    present: "You are searching for something right now, maybe without fully knowing what it is. What you are really looking for is the feeling of being at home in yourself - not just productive, but genuinely lit up. I want you to focus on what makes you feel like the sun is just shining on you.",
    future: "When you orient your life around what actually lights you up, everything else starts to find its right place. Your joy is not an indulgence - it is a compass. The biggest mistake we make is allowing other people or obligations to dim that light. Do not let that happen."
  },
  "Investigate": {
    past: "You reacted to something before you fully understood it. An assumption was made - about a person, a situation, or yourself - and it quietly shaped the path you took without you even realizing.",
    present: "Before you act on what you are feeling, pause. There is more to this than what is sitting on the surface. The discomfort you feel right now is worth examining before you make any decisions from it.",
    future: "Real understanding changes everything. When you approach with curiosity instead of defensiveness, you see options you were completely blind to before. Dig deeper here - the answer is in the details you have not looked at yet."
  },
  "Clean Slate": {
    past: "You held on to something for way too long - a relationship, a project, a belief about yourself - because the investment felt too big to just abandon. But the cost of staying was so much higher than you admitted to yourself.",
    present: "Something in your life has run its course. You know it. The hard part is not the letting go - it is accepting that letting go is the right call. Clear the space. You need the room.",
    future: "What follows release is not emptiness - it is room. Room for something genuinely better. Give yourself time to heal before you fill the space, and what arrives is going to be worth it. Trust that."
  },
  "Move": {
    past: "You spent way too long in your head, turning over decisions your body already knew the answer to. That overthinking kept you in a holding pattern well past its expiration date.",
    present: "Your life needs motion right now. Physical, emotional, situational - something has to shift. The sign you have been waiting for? This is it. Stop waiting.",
    future: "Action creates a clarity that thinking never will. Once you start moving - even imperfectly - the path reveals itself. Do not wait until you feel ready. Move first. Readiness follows. It always does."
  },
  "Expand": {
    past: "You played small. Not because you lacked the ability, but because growth felt threatening to the stability you worked so hard to build. Comfort became the priority without you even realizing it.",
    present: "Something is stretching you right now and the discomfort is precisely because it is real growth. You know this is the right direction - the doubt is not a warning, it is growing pains. Lean into it.",
    future: "Take up space. The next chapter requires you to be bigger than the version of yourself you have been settling for. You have the means and you have every right. Step into it - the universe wants you to grow."
  },
  "Remove Obstacles": {
    past: "A pattern has been repeating - the same type of block, the same frustration, just showing up in different forms. You tried to push through it the same way every time and it did not work. Because the approach was the problem, not the obstacle.",
    present: "Something is standing between you and what you want. But before you try to force past it, ask yourself what this obstacle is actually showing you. The block contains the lesson you keep missing.",
    future: "When you stop fighting the wall and start looking for the door, breakthroughs become possible. The obstacle is not punishment - it is redirection toward a better path. Work with it, not against it."
  },
  "Abundance": {
    past: "You operated from scarcity for a long time - not enough time, not enough love, not enough resources. That belief shaped your decisions more than your actual circumstances ever did.",
    present: "You have more than you think right now. Look around - genuinely look. What you have been chasing already exists in some form. The work now is recognizing what is here instead of fixating on what you think is missing.",
    future: "When you shift from grasping to gratitude, more arrives naturally. Abundance is not about accumulating - it is about receiving what is already flowing toward you without blocking it with doubt. Get out of your own way on this one."
  },
  "Let Go": {
    past: "You gripped something so tightly you strangled the life out of it. Control felt like safety, but it became the very thing creating all the tension and exhaustion you could not shake.",
    present: "You are standing in your own way right now. The attachment to a specific outcome is preventing you from seeing all these other possibilities that are right there. Loosen your grip - even a little - and notice what shifts.",
    future: "Letting go is not giving up. It is trusting that you have done the work and now it is time to see what happens without your hands on the wheel. If you are so attached to how things are supposed to show up, you are actually blocking yourself from receiving what you are supposed to get."
  },
  "Balance": {
    past: "Things got lopsided somewhere along the way. Too much energy going in one direction, not enough in another. What looked right on the outside did not match how it actually felt on the inside.",
    present: "You are being asked to recalibrate right now. Something in your life is consuming more than its fair share and other areas are suffering for it. This is not failure - it is a signal to adjust. Listen to it.",
    future: "Balance is not a destination - it is a constant gentle recalibration. When you stop trying to get it perfect and start listening to what feels off, equilibrium finds you on its own. Check in with yourself on this one."
  },
  "Build": {
    past: "You rushed through something that needed more care. The impulse to see results overtook the patience required to do it right, and the cracks showed up later because of it.",
    present: "Slow is fast right now. The urge to push ahead is strong but what you are creating matters too much to cut corners on. Be deliberate with every step - that is where your power lives.",
    future: "Patience with the process pays off in ways speed never could. What you are constructing now - one intentional choice at a time - is going to hold real weight. Trust the timeline even when it feels slow."
  },
  "Step Out": {
    past: "You hid parts of yourself - behind a polished surface, behind what you thought people wanted to see. The real you got buried under layers of performance and people-pleasing and I think you know exactly what I am talking about.",
    present: "The mask is cracking and honestly that is the best thing that could happen right now. People are beginning to see the actual you. The vulnerability of it is terrifying but it is also magnetic. Let them see you.",
    future: "When you stop performing, some people will leave. Let them go. What remains and what shows up next will be built on something real. That is the only foundation worth having. The right people will stay."
  },
  "Talk": {
    past: "There are words you swallowed that are still sitting heavy in your body. Truths unspoken, feelings buried because saying them out loud felt too risky or too exposing. But they are still in there.",
    present: "Something needs to be said and you already know what it is. The longer you hold it in, the more it costs you - physically, emotionally, and in the relationships that matter most. Say the thing.",
    future: "Speaking your truth is not going to guarantee a comfortable response, but it guarantees your freedom. When the words finally come out, you are going to feel lighter than you have in a very long time. I promise you that."
  },
  "Play": {
    past: "You forgot how to enjoy things without attaching productivity to them. At some point everything became about output and the simple pleasure of doing something just for the sake of it got completely lost.",
    present: "Your inner child is starving for attention right now. The heaviness you are carrying is not all necessary - some of it is just the absence of lightness. You need joy right now way more than you need another plan.",
    future: "When you make room for play - real, unproductive, purposeless joy - everything else becomes easier. Play is not a reward for hard work. It is what makes everything else sustainable. Go have some fun."
  },
  "Hibernate": {
    past: "You ran at a pace that was never sustainable. The exhaustion you carry is not sudden - it has been accumulating, and your body has been asking you to stop for way longer than you have been listening.",
    present: "Your entire system is calling for a shutdown - not forever, just right now. The guilt about resting is a lie you keep telling yourself. Being still right now is genuinely the most useful thing you can do.",
    future: "When you honor this need for withdrawal, you are going to emerge with a clarity and energy that forcing through never could have given you. This is not wasted time - it is stored power. Let yourself have it."
  },
  "Treat Yourself": {
    past: "You were so focused on earning and achieving that you forgot to stop and actually enjoy any of it. The wins piled up but the satisfaction did not, because you never let yourself actually feel it.",
    present: "You earned this. Stop deflecting the good feelings. Whatever you accomplished to get here - whether it feels big or small - it matters. And you deserve to sit in the pride of it for a minute.",
    future: "Celebration is not vanity - it is fuel. When you let yourself feel genuine pride in what you have built, you create the emotional foundation to build even more. Treat yourself. You have earned it."
  },
  "Walk": {
    past: "You committed before you were ready, or you let someone else's timeline override your own. The pressure to decide quickly has been a recurring pattern for you and it has cost you.",
    present: "You do not owe anyone an answer right now. Despite what it feels like, nothing worth having is going to vanish because you took time to think. Step away from the noise and give yourself some space.",
    future: "The answer will come when you stop grinding for it. Simple movement - literal fresh air and physical space - will shake loose what sitting still never could. Go take a walk. Seriously."
  },
  "Release": {
    past: "You carried other people's needs as if they were your own. The pattern of putting everyone else first became so automatic that you lost track of where their weight ends and yours begins.",
    present: "You are at or near burnout right now. The pile of expectations is not all yours to meet. Before you can care for anyone or anything else effectively, you need to set something down. Today. Not tomorrow.",
    future: "Releasing what is not yours is not selfish - it is necessary. When you finally put down what you have been carrying for others, your hands are free to build what actually matters to you. Let it go."
  },
  "Create": {
    past: "Something new tried to enter your life and you hesitated. Whether from busyness, fear, or just bad timing - an opening appeared and you did not fully step through it.",
    present: "A genuine beginning is here or very close. This is not recycled energy from the past - this is new. Stay open to it, even if it shows up in a form you did not expect. Sometimes the best things come in weird packaging.",
    future: "What you create next has the potential to change your whole direction - not because it will be perfect, but because the act of making it will change who you are. Welcome it in."
  },
  "Give In": {
    past: "You fought for control in a situation that was actually asking you to surrender. The struggle itself became the real problem - not the circumstances, but your resistance to them.",
    present: "You are overthinking something that simply needs to be experienced. Stop analyzing what it means and just let yourself be in it. The constant evaluation is stealing the experience from you.",
    future: "Surrender is not losing. It is the moment you stop white-knuckling the outcome and let things teach you what they were always going to. Stop directing and start receiving. The universe has got this one."
  },
  "Boundaries": {
    past: "A line was crossed - by you or by someone else - and the resentment it created has been quietly shaping your interactions ever since. Something that should have been said was not said.",
    present: "Something in your life needs a firmer edge right now. A person, a commitment, or a habit is taking more than its share and the frustration building in you is the proof. You need to speak up on this one.",
    future: "Boundaries are not walls - they are the framework of a healthy life. When you define what you will and will not accept, the right things stay and the wrong things fall away on their own. Protect your energy."
  },
  "Share": {
    past: "You kept something back - a gift, a truth, a part of yourself - that the people around you actually needed. The instinct to protect it kept it contained and small when it was meant to be out in the world.",
    present: "Something is ready to go public. You can feel the pull to put your work or your idea or your truth out there. The fear that it is not polished enough? That is actually the signal that it is ready. Put it out there.",
    future: "When you share what is genuinely yours - your perspective, your work, your voice - it lands with more impact than you expect. Generosity with your gifts is how they grow. Do not keep this to yourself."
  },
  "Honesty": {
    past: "You told yourself a story that was not entirely true - about who you are, what you want, or why things went the way they did. That story gave you cover but it also kept you stuck in place.",
    present: "There is a truth sitting in front of you that you would rather not look at. But avoiding it is costing you so much more than facing it ever would. The lie - even the small comfortable one - is blocking your progress.",
    future: "Radical honesty, especially with yourself, is the fastest path forward. When you stop editing your own reality, the decisions become clear and the right direction becomes obvious. Be real with yourself here."
  },
  "Gifts": {
    past: "You dismissed what came your way as not enough, or you convinced yourself you did not earn it. A scarcity mindset turned genuine blessings into things you felt guilty about receiving.",
    present: "What you have right now is so much more than you are giving it credit for. The urge to compare or minimize is distorting your view. I want you to actually practice seeing what is already in front of you.",
    future: "Receiving is not passive - it is an act of trust. When you stop deflecting blessings with unworthiness, you align with a flow that has been trying to reach you for longer than you know. Let it in."
  },
  "Hug": {
    past: "You outsourced your sense of worth to other people. The habit of seeking validation externally left you exposed to people and situations that could never give you what only you can provide for yourself.",
    present: "You need your own compassion right now more than anyone else's. The reassurance you are seeking from the outside? It starts with how you speak to yourself when nobody is listening. Be gentle with yourself here.",
    future: "Self-compassion is the foundation everything else gets built on. When you stop looking outward for proof that you are enough, your relationships and decisions transform from the ground up. Start with you."
  },
  "Acknowledge": {
    past: "You avoided looking at something that needed your attention. Not from carelessness - from fear. The unknown felt too large and ignoring it felt like the safer bet. But it did not go away.",
    present: "Something is asking to be seen and named right now. The discomfort you feel is not the problem - it is the starting point. The first step is simply admitting what is actually true.",
    future: "You cannot change what you refuse to look at. Acknowledgment is the doorway. Once you name the thing, the path forward becomes visible and far less frightening than the avoidance was. Name it."
  },
  "Feel": {
    past: "You learned to numb or deflect or intellectualize your emotions instead of feeling them. It was a survival strategy that worked until it started costing you depth and real connection with people.",
    present: "Emotions are building and they need somewhere to go. The pressure you feel is not anxiety about the future - it is the weight of feelings you have not let yourself process. Let them move through you.",
    future: "When you stop fighting what you feel and start letting it through, everything gets lighter. Feeling deeply is not weakness - it is how you heal, make room, and become available for what is next. Get in touch with your emotions here."
  },
  "Permission": {
    past: "You handed your authority to someone else - a partner, a parent, a fear, a cultural expectation. Decisions that should have been yours were made by someone else's rules and you just went along with it.",
    present: "You are waiting for someone to tell you it is okay to do what you already know you need to do. Nobody is coming. The permission you need was always yours to give. So give it to yourself.",
    future: "When you reclaim your agency - the right to choose, to fail, and to try again on your own terms - the entire shape of your life shifts. Stop asking for permission. Start deciding."
  },
  "Patience": {
    past: "You tried to rush something that had its own timeline. The frustration of waiting pushed you toward forcing outcomes that were not ready and the consequences showed up later because of it.",
    present: "Things are moving - just not at the speed you want them to. The foundation being built right now needs time to set properly. Pushing harder is not going to accelerate it - it is going to weaken it.",
    future: "What you are waiting for will arrive when the ground is solid enough to hold it. Your work right now is not to speed things up - it is to be present and intentional with every step. Trust the timing on this."
  },
  "Desire": {
    past: "You disconnected from what you actually want. It happened slowly - through compromise, through prioritizing others, through convincing yourself that your own desires were selfish or unrealistic. But they were not.",
    present: "Something is pulling at you - a longing that will not go quiet. Pay attention to it. It is not random or irresponsible. It is the truest part of you trying to redirect your attention to what actually matters.",
    future: "When you reconnect with genuine desire - not obligation, not expectation, but actual want - it becomes the most honest compass you have. Follow it, especially when it feels inconvenient. That is usually when it matters most."
  },
  "Peace": {
    past: "Chaos became your baseline. Whether it was external turmoil or internal noise, you adapted to unrest so thoroughly that stillness started to feel foreign - even suspicious. But that is not how it is supposed to be.",
    present: "Underneath everything swirling around you right now, there is a quiet center you have not visited in too long. You can access it - not by fixing your circumstances, but by shifting your focus inward.",
    future: "Peace is not the reward you get after everything is resolved. It is a practice you build now, in the mess. And once you find it, it becomes portable - it goes wherever you go. Start building it now."
  },
  "Presence": {
    past: "You kept putting off something that matters to you - not from inability, but because the importance of it made the stakes feel paralyzing. The avoidance was protection, not laziness. But it cost you time.",
    present: "Something needs your full undivided attention right now. Not anxious focus - grounded presence. Stop splitting yourself across ten things and give one thing everything you have. Be here for this.",
    future: "When you show up completely for what matters most, the overwhelm dissolves. Scattered effort creates noise but presence creates impact. The difference is where you direct your attention. Focus in."
  },
  "Spark": {
    past: "Your creative fire went dim. Through routine, rejection, or just the grind of keeping life together - the part of you that gets genuinely excited about things went quiet. And that is a loss.",
    present: "There is a flicker right now - an idea, an impulse, a pull toward something. Do not dismiss it as impractical or poorly timed. Feed it. Even small attention can reignite what has been dormant in you.",
    future: "Passion is not something you stumble upon - it is activated by showing up for what excites you, even imperfectly. Follow the spark. It knows where it is going even when you do not."
  },
  "Be": {
    past: "You pushed through a cycle that took everything from you. The hard part is over, or nearly over, but you have not stopped moving long enough to let the completion actually register in your body.",
    present: "You have arrived at a resting point. Your only task right now is to exist in it. Not plan, not optimize, not prepare for the next thing. Just be here. I know that is harder than it sounds - and that is exactly why it matters.",
    future: "The next chapter does not need you doing - it needs you whole. Rest in what you have already built. The stillness you practice now becomes the strength you carry into everything that follows. Just be."
  },
  "Seek": {
    past: "You looked for answers in all the expected places - specific outcomes, specific people, specific results. The search was valid but the rigidity of where you looked kept you from seeing what was right there the whole time.",
    present: "You are in search mode right now and that is exactly right. But stop insisting the answer take a particular shape. Trust the act of seeking more than the expectation of a specific find.",
    future: "What you are looking for is closer than you think. When you release the need to control what it looks like and focus on how you want to feel, the path gets surprisingly clear. Stay open."
  },
  "Receiving": {
    past: "You had trouble letting help or love or recognition in when it was offered. Independence became so central to your identity that receiving felt like weakness - or like owing someone something.",
    present: "Something is trying to reach you right now - a resource, a person, a form of support. Your only job is to stop deflecting it. You do not need to earn it first. Just let it in.",
    future: "When you open to receiving, you complete a cycle that effort alone cannot close. The support flowing toward you is not charity - it is the natural return on everything you have already given. Accept it."
  },
  "Inspired": {
    past: "You went through a dry season - creatively, emotionally, or spiritually. The well felt empty and you tried to force output from a place that needed input instead. That is backwards.",
    present: "New energy and ideas are arriving from multiple directions right now. Do not try to organize them yet - this is a gathering phase, not a decision phase. Let everything in and sort it later.",
    future: "Inspiration is a starting gun, not a finish line. What you do with this creative surge is going to define the next chapter. Stay curious, stay open, and trust that the clarity comes after the flood, not before."
  },
  "Freedom": {
    past: "Something caged you - a belief, a relationship, an environment, a role you outgrew. The bars were real even if nobody else could see them. But you felt them.",
    present: "You are ready to break free, but the scale of the change feels enormous. Notice this though - the discomfort of staying is finally outweighing the fear of going. That tipping point matters. Pay attention to it.",
    future: "What waits on the other side of this release is a life you cannot fully picture yet - and that is the whole point. Freedom never comes with a detailed plan. It comes with possibility. Let yourself have it."
  },
  "Step Back": {
    past: "You got too close to a situation and lost all objectivity. The emotional investment made it impossible to see clearly and the choices you made from that place were reactive, not wise.",
    present: "You need distance from something right now. Not avoidance - perspective. The answers you are grinding for are not going to come from thinking harder. They are going to come from stepping away.",
    future: "Space creates clarity. When you disengage briefly, you will see the situation for what it actually is - stripped of all the fear and hope you have been projecting onto it. Step back and breathe."
  },
  "Power": {
    past: "You underestimated your own influence. Decisions that felt minor at the time had consequences you did not anticipate. Your impact has always been bigger than you gave yourself credit for.",
    present: "You are way more in control of your circumstances than you feel right now. The story of powerlessness is familiar, but it is not accurate. How you see yourself is how the world treats you. Remember that.",
    future: "Owning your power means choosing with intention and standing fully behind those choices. When you stop deferring to everyone else, the right direction becomes undeniable. You already know what to do."
  },
  "Preserve": {
    past: "You gave energy to things that did not return it. The generosity was real but it left you depleted in ways that compounded - and not every cause deserved what you poured into it.",
    present: "Your energy is finite and it needs guarding right now, not scattering. The impulse to say yes to everything is strong but the wisest move is to do less with full presence. Protect what you have.",
    future: "Conservation is not selfishness - it is strategy. The energy you protect now becomes the fuel for what truly matters when the moment arrives. Choose carefully where you invest yourself. Not everything deserves your energy."
  },
  "Listen": {
    past: "You missed signals - from your body, your instincts, or the people closest to you. Not because the signals were not there, but because your own internal noise drowned them out.",
    present: "Something important is trying to reach you right now - through a pattern, a person, a feeling in your body. Your intuition is sharper than usual. Trust what you are picking up on.",
    future: "When you learn to listen before you act, your decisions become almost effortless. The guidance is already there. You just need to get quiet enough to actually hear it. Get still and listen."
  },
  "Commitment": {
    past: "You overextended yourself to a person, a role, or a promise, and the cost was higher than you budgeted for. Loyalty held you in place long after the situation stopped deserving it.",
    present: "A commitment in your life needs honest reevaluation right now. Not necessarily ending - but examining. Are you showing up because you choose to, or because guilt says you should? That distinction matters enormously.",
    future: "Sustainable commitment comes from alignment, not obligation. When you redirect your devotion toward what genuinely fits, the energy stops draining and starts flowing. Commit to what is right for you."
  },
  "Visions": {
    past: "Someone else's priorities took your steering wheel. Their vision for your life - whether well-meaning or not - became louder than your own, and you drifted from your actual direction without realizing it.",
    present: "You are in a highly intuitive place right now. The clarity about what you want is sharper than it has been in a long time. Do not let practicality or outside opinions dull that signal. Trust what you are seeing.",
    future: "Significant decisions are ahead, and they require you to be rooted in your own knowing. When you approach from inner clarity rather than external pressure, the right choice becomes obvious. Trust your vision."
  },
  "Roots": {
    past: "Where you came from shaped you more than you want to admit. The patterns you inherited - both gifts and wounds - are still running in the background of your daily decisions whether you see them or not.",
    present: "Going back to basics is the move right now. Not to dwell in the past, but to understand the ground you are standing on. You cannot grow from a foundation you have never examined. Look at where you come from.",
    future: "You are not defined by your origin, but you are deeply informed by it. When you make peace with where you started, you gain the freedom to grow in whatever direction you choose. That is powerful."
  },
  "Ease": {
    past: "You made things harder than they had to be. Somewhere you internalized the belief that struggle equals worthiness, and you kept grinding when a simpler path was right there the whole time.",
    present: "The path of least resistance is not the lazy path right now - it is the correct one. What flows naturally and feels good is not a trap. It is alignment. Stop fighting for difficulty when ease is right there.",
    future: "Ease is not something you earn after enough suffering. It is available to you right now. When you drop the story that everything valuable has to be painful, life becomes remarkably cooperative. Let it be easy."
  },
  "Relax": {
    past: "You ran on autopilot, cycling through the same patterns without questioning whether they still made sense. Staying busy became a way to avoid having to feel or reckon with anything deeper.",
    present: "Your mind and body are demanding a real stop right now. Not a restless pause while you plan the next move - an actual unwinding. The insight you need is hiding behind all the noise you are generating.",
    future: "When you truly let go and relax, the answers come on their own. Your next step does not need to be figured out - it needs to be felt. Make space for that feeling to arrive. You deserve the rest."
  },
  "Growth": {
    past: "You stayed comfortable longer than served you. The familiarity was safe but the price of that safety was stagnation. Something in you has known for a while that it was time to stretch beyond this.",
    present: "You are being pushed beyond your comfort zone right now and it does not feel graceful. That discomfort is how you know this is actual growth and not just surface-level change. Lean all the way into it.",
    future: "On the other side of this discomfort is a version of you that is more capable, more self-aware, and more alive than you are today. Growth is never pretty in the middle. Keep going - you are almost through it."
  },
  "Nurture": {
    past: "You built relationships that genuinely matter - chosen family, deep friendships, bonds that shaped who you are. Those connections deserve more recognition than you have been giving them lately.",
    present: "The people around you are your greatest resource right now. Pay attention to them - actually see them and let them see you. What you have built together is rare and so worth tending to.",
    future: "The road ahead is not a solo journey. When you nurture what is already growing - the relationships, the projects, the quiet momentum - everything deepens and strengthens on its own. Take care of what you have."
  }
};

// ============================================================
// NARRATIVE ENGINE
// Weaves three card readings into a single flowing story
// ============================================================

// Bridge templates: transitions from past → present
const PAST_TO_PRESENT = [
  (pastCard, presentCard) => `And that energy? You carried it right into where you are now.`,
  (pastCard, presentCard) => `That is not behind you - that is the lens you are looking through right now whether you realize it or not.`,
  (pastCard, presentCard) => `All of that is still living in you, and it is shaping how you are showing up in this moment.`,
  (pastCard, presentCard) => `You brought all of that forward with you, and it is coloring everything about where you stand right now.`,
  (pastCard, presentCard) => `That pattern followed you here. It is sitting right next to you in the present.`,
  (pastCard, presentCard) => `None of that stayed in the past - it walked with you into right now.`,
  (pastCard, presentCard) => `So here you are, carrying all of that into today.`,
];

// Bridge templates: transitions from present → future
const PRESENT_TO_FUTURE = [
  (presentCard, futureCard) => `OK but here is where it gets really interesting.`,
  (presentCard, futureCard) => `And if you stay honest with yourself about all of that, here is what is waiting for you -`,
  (presentCard, futureCard) => `So the real question is - what are you going to do with this? Because look at what is coming.`,
  (presentCard, futureCard) => `What matters now is where you point yourself from here. And I love what is showing up for your future.`,
  (presentCard, futureCard) => `This is not a dead end - this is a pivot point. And your future card could not be more on the nose.`,
  (presentCard, futureCard) => `And this is where the story turns - because the universe has something to say about what is next.`,
  (presentCard, futureCard) => `So where does that leave you? Let me tell you, because your future card is speaking.`,
];

// Closing synthesis - ties the whole reading together
const CLOSINGS = [
  (past, present, future) => `${past.name} grounded you. ${present.name} is waking you up. And ${future.name}? That is where your energy is already headed whether you see it yet or not. Sit with that for a second.`,
  (past, present, future) => `From ${past.name.toLowerCase()} to ${present.name.toLowerCase()} to ${future.name.toLowerCase()} - none of this is random. This is telling you a very specific story about what you need right now, and I think deep down you already know what it is.`,
  (past, present, future) => `Here is what I want you to take away from this - ${past.name}, ${present.name}, and ${future.name} together are saying you have been getting ready for something, and it is time to stop preparing and start moving. You are more ready than you think.`,
  (past, present, future) => `The universe pulled these three cards for a reason. ${past.name} taught you something, ${present.name} is testing whether you learned it, and ${future.name} is what opens up when you pass that test. Trust yourself here.`,
  (past, present, future) => `This reading is not asking you to become someone new. It is asking you to stop playing small and step into who you already are. You know this. Now do something with it.`,
  (past, present, future) => `What ${past.name} started, ${present.name} is processing, and ${future.name} is going to bring home for you - but only if you let it. Do not get in your own way on this one.`,
  (past, present, future) => `You are not starting from zero. Not even close. Everything you have been through brought you to exactly this moment, and this moment is asking you to finally trust that.`,
  (past, present, future) => `I want you to sit with these three cards for a minute. Really look at them. What is the first feeling that comes up? That feeling is your answer. Trust it, even if it does not make logical sense yet.`,
  (past, present, future) => `OK so here is your homework - take a step back and look at the bigger picture of what ${past.name}, ${present.name}, and ${future.name} are telling you together. Journal on it, meditate on it, or just sit with it quietly. The clarity will come.`,
  (past, present, future) => `These cards are not telling you something you do not already feel. They are just confirming it. So the question is - now that you know, what are you going to do about it?`,
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
