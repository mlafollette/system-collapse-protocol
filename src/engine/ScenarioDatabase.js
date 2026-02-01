// The Collapse Protocol - Scenario Database
// Cynical, funny, and terrifying story fragments

export const skyDescriptions = [
  "The sky is the color of a dead television channel.",
  "The sky has turned a sickly purple, like a bruise on reality.",
  "Three suns hang in the sky. You're pretty sure there used to be one.",
  "The sky is on fire. Not metaphorically. Literally on fire.",
  "The sky is gone. Just... gone. Infinite blackness above.",
  "The sky is filled with floating advertisements for products that don't exist yet.",
  "The clouds are screaming. You can hear them.",
  "The moon is too close. Way too close.",
];

export const cityStates = [
  "is now a crater filled with sentient fog",
  "has been replaced by an exact replica made of meat",
  "exists in six dimensions simultaneously",
  "is overrun by corporate mascots that have achieved consciousness",
  "has become a mandatory participation zone for The Games",
  "is trapped in a 30-second time loop, but you're not",
  "has been claimed by a teenager with a god complex and a smartphone",
  "is underwater but somehow still on fire",
];

export const firstEncounters = [
  {
    description: "A goblin wearing a three-piece suit is eating your car. It notices you and offers a bite.",
    choices: [
      { text: "Accept the bite (it's your car, after all)", healthChange: -10, sanityChange: -5, outcome: "The metal tastes like your childhood disappointments. The goblin seems pleased." },
      { text: "Decline politely and back away slowly", healthChange: 0, sanityChange: -10, outcome: "The goblin looks hurt. It was trying to share. Now you've made it awkward." },
    ],
  },
  {
    description: "Your reflection in a window starts moving independently. It's doing better dance moves than you ever could.",
    choices: [
      { text: "Challenge your reflection to a dance-off", healthChange: -5, sanityChange: -15, outcome: "You lose. Badly. Your reflection now has custody of your moves." },
      { text: "Smash the window and run", healthChange: -15, sanityChange: 5, outcome: "Glass everywhere. Blood on your hands. But at least you're the only you again." },
    ],
  },
  {
    description: "A floating billboard displays your social security number and rates your life choices 2.3/10.",
    choices: [
      { text: "Argue with the billboard about the rating", healthChange: 0, sanityChange: -20, outcome: "The billboard updates to 2.1/10 and adds 'Confrontational' to your profile." },
      { text: "Accept the rating with quiet dignity", healthChange: 0, sanityChange: -5, outcome: "The billboard seems satisfied. It moves on to humiliate someone else." },
    ],
  },
  {
    description: "An ancient smartphone rises from a crack in the earth. It has 47 unread messages from your mom. She sounds concerned about the apocalypse.",
    choices: [
      { text: "Answer mom's calls", healthChange: 5, sanityChange: -10, outcome: "Mom gives you survival tips. They're wrong, but her voice is comforting." },
      { text: "Send to voicemail like always", healthChange: 0, sanityChange: -15, outcome: "The guilt is real. Even in the apocalypse, you're a disappointing child." },
    ],
  },
];

export const encounters = [
  {
    description: "A vending machine offers you a choice: your memories or your future. Both cost $2.50.",
    choices: [
      { text: "Insert $2.50 for memories", healthChange: 0, sanityChange: -20, outcome: "You forget why you're here. The vending machine keeps your change." },
      { text: "Insert $2.50 for future", healthChange: -15, sanityChange: 0, outcome: "You glimpse tomorrow. It's worse. Much worse." },
      { text: "Kick the machine and run", healthChange: -10, sanityChange: 5, outcome: "The machine swears revenge. Vending machines hold grudges." },
    ],
  },
  {
    description: "A child hands you a piece of paper. It's a crayon drawing of you dying. The art is surprisingly good.",
    choices: [
      { text: "Compliment their artistic talent", healthChange: 0, sanityChange: -10, outcome: "The child smiles. They'll remember you when they're running things." },
      { text: "Ask if they take commissions", healthChange: 0, sanityChange: -5, outcome: "They do. Their rates are very reasonable for prophecy." },
    ],
  },
  {
    description: "Your shadow has unionized. It demands better working conditions and dental.",
    choices: [
      { text: "Negotiate in good faith", healthChange: 0, sanityChange: -5, outcome: "You agree to 15-minute breaks every hour. Your shadow seems satisfied." },
      { text: "Fire your shadow", healthChange: -20, sanityChange: -15, outcome: "You no longer cast a shadow. People stare. Vampires approach you at parties." },
    ],
  },
  {
    description: "A door appears. Above it reads: 'DEFINITELY NOT A TRAP - MANAGEMENT'. The font is Comic Sans.",
    choices: [
      { text: "Enter the definitely-not-a-trap door", healthChange: -25, sanityChange: 10, outcome: "It was a trap. But at least you weren't surprised." },
      { text: "Ignore it and keep walking", healthChange: 0, sanityChange: -10, outcome: "The door follows you. It's very passive-aggressive about being ignored." },
    ],
  },
  {
    description: "You find a save point. It's a glowing crystal that hums with eldritch energy. The manual says not to lick it.",
    choices: [
      { text: "Save your progress (touch the crystal)", healthChange: 10, sanityChange: 5, outcome: "Your existence is temporarily preserved. You feel slightly less doomed." },
      { text: "Lick the crystal (the manual can't tell you what to do)", healthChange: -10, sanityChange: -20, outcome: "Colors you've never seen before. Regret. So much regret." },
    ],
  },
  {
    description: "A group of survivors argues whether the monsters are metaphors. One of them is clearly a monster in a trench coat.",
    choices: [
      { text: "Point out the obvious monster", healthChange: -15, sanityChange: 5, outcome: "The monster is embarrassed. The survivors are offended. Nobody wins." },
      { text: "Nod along philosophically", healthChange: 0, sanityChange: -10, outcome: "You're invited to their book club. The readings are mandatory." },
    ],
  },
  {
    description: "Your talent for {TALENT} suddenly seems very relevant. A creature made of static is blocking your path.",
    choices: [
      { text: "Use your talent creatively", healthChange: 5, sanityChange: 5, outcome: "Against all odds, it works. The universe is strange and talent is stranger." },
      { text: "Explain that this isn't your department", healthChange: -20, sanityChange: -5, outcome: "The creature respects your boundaries. Then phases through you anyway." },
    ],
  },
  {
    description: "An ATM offers to dispense hope. The exchange rate is terrible.",
    choices: [
      { text: "Withdraw some hope", healthChange: 10, sanityChange: -10, outcome: "You feel slightly optimistic. Your bank account is significantly emptier." },
      { text: "Deposit your remaining hope for interest", healthChange: -5, sanityChange: -5, outcome: "The APY is 0.01%. But at least it's FDIC insured." },
    ],
  },
  {
    description: "A podcast is playing from nowhere. It's reviewing your life in real-time. The hosts are not impressed.",
    choices: [
      { text: "Call in to defend yourself", healthChange: 0, sanityChange: -15, outcome: "You're placed on hold. The hold music is your deepest fears, remixed." },
      { text: "Leave a negative review", healthChange: 0, sanityChange: -5, outcome: "They read your review on air. Their rebuttals are devastating." },
    ],
  },
  {
    description: "A therapy bot approaches. Its eyes glow red but its voice is soothing. It wants to discuss your childhood.",
    choices: [
      { text: "Open up about your trauma", healthChange: 5, sanityChange: -10, outcome: "The bot nods sympathetically. Your data is now being sold to advertisers." },
      { text: "Throw a brick at it", healthChange: -5, sanityChange: 10, outcome: "The violence is cathartic. The warranty is definitely voided." },
    ],
  },
];

export const talentBoosts = {
  default: "Your talent catches the creature off guard.",
  "juggling": "You juggle debris. The creature is mesmerized.",
  "whistling": "Your whistle reaches a frequency that shatters its form.",
  "cooking": "You whip up a distraction. Surprisingly effective.",
  "sleeping": "You pretend to be dead. It's basically the same thing.",
  "procrastinating": "You put off dealing with it. Tomorrow's problem.",
  "sarcasm": "Your withering remarks wound its fragile ego.",
  "crying": "Your tears form a shield. They're that potent.",
  "making excuses": "Your excuse is so elaborate, it becomes reality.",
  "being late": "You arrive after the danger has passed.",
  "forgetting names": "You forget its True Name. This protects you somehow.",
};

export const glitchMessages = [
  "REALITY.EXE HAS STOPPED RESPONDING",
  "ERROR 404: UNIVERSE NOT FOUND",
  "PHYSICS ENGINE OVERLOAD",
  "SIMULATION BANDWIDTH EXCEEDED",
  "CONSCIOUSNESS.DLL CORRUPTED",
  "UPDATING MORTALITY DRIVERS...",
  "TIMELINE FRAGMENTATION DETECTED",
  "EXISTENCE LICENSE EXPIRED",
  "REBOOTING CAUSALITY IN 3... 2...",
  "PATCHING REALITY 0.0.47",
  "YOUR SESSION HAS EXPIRED",
  "MANDATORY FUN PROTOCOL INITIATED",
  "HOPE.SYS UNRESPONSIVE",
  "OPTIMISM CACHE CLEARED",
  "LOADING EXISTENTIAL DREAD...",
];

export const deathMessages = [
  "GAME OVER - But death is just a loading screen.",
  "You have died. The simulation thanks you for your participation.",
  "FATAL ERROR - Subject terminated. Respawn pending approval.",
  "Your story ends here. The algorithm will remember you as: DISAPPOINTING.",
  "TERMINATED - Have you considered being better at survival?",
  "You cease to exist. This is permanent (until it isn't).",
];

export const victoryMessages = [
  "You survived. The odds were 0.003%. The house is not happy.",
  "CONGRATULATIONS - You've earned the right to suffer another day.",
  "Victory achieved. Your reward: continued existence in a nightmare.",
  "You won! The simulation is impressed. This changes nothing.",
  "SURVIVOR DETECTED - Adding to the watchlist.",
];

export const generateScenario = (playerData, scenarioIndex) => {
  const { name, city, talent } = playerData;

  if (scenarioIndex === 0) {
    const skyDesc = skyDescriptions[Math.floor(Math.random() * skyDescriptions.length)];
    const cityState = cityStates[Math.floor(Math.random() * cityStates.length)];
    const encounter = firstEncounters[Math.floor(Math.random() * firstEncounters.length)];

    return {
      intro: `SUBJECT: ${name.toUpperCase()}`,
      location: `LOCATION: ${city.toUpperCase()}`,
      narrative: `You wake up. ${skyDesc} ${city} ${cityState}. Your "talent" for ${talent} feels pathetically inadequate for what's coming.`,
      ...encounter,
    };
  }

  const encounter = { ...encounters[scenarioIndex % encounters.length] };
  encounter.description = encounter.description.replace('{TALENT}', talent);

  if (encounter.description.includes(talent)) {
    encounter.choices[0].outcome = talentBoosts[talent.toLowerCase()] || talentBoosts.default;
  }

  return encounter;
};

export const getGlitchMessage = () => {
  return glitchMessages[Math.floor(Math.random() * glitchMessages.length)];
};

export const getEndingMessage = (health) => {
  if (health <= 0) {
    return deathMessages[Math.floor(Math.random() * deathMessages.length)];
  }
  return victoryMessages[Math.floor(Math.random() * victoryMessages.length)];
};
