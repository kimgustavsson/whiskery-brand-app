// ============================================
// WHISKERY GAME RECOMMENDER
// Curated by a real boardgame enthusiast
// Featuring modern hits, Kickstarter gems & 2024 releases
// ============================================

const gameDatabase = [
  // ===== SOLO GAMES =====
  {
    title: "THE WHITE CASTLE",
    players: [1, 2, 3, 4],
    duration: "medium",
    time: "60-80 min",
    difficulty: "Medium-Heavy",
    vibe: "Elegant & precise",
    description:
      "A beautiful Japanese-themed worker placement from Llama Dice. Compact yet brain-burning.",
  },
  {
    title: "ARK NOVA",
    players: [1, 2, 3, 4],
    duration: "long",
    time: "90-150 min",
    difficulty: "Heavy",
    vibe: "Ambitious & strategic",
    description:
      "Build a modern zoo, support conservation. A modern classic that keeps getting better.",
  },
  {
    title: "FRIDAY",
    players: [1],
    duration: "quick",
    time: "25 min",
    difficulty: "Easy",
    vibe: "Adventurous & solo",
    description:
      "Help Robinson Crusoe survive in this clever solo deck-builder. A perfect pocket adventure.",
  },

  // ===== 2 PLAYER GAMES =====
  {
    title: "SPLENDOR DUEL",
    players: [2],
    duration: "medium",
    time: "30-45 min",
    difficulty: "Medium",
    vibe: "Sharp & elegant",
    description:
      "Gem-collecting strategy refined for two. The duel version is even better than the original.",
  },
  {
    title: "RADLANDS",
    players: [2],
    duration: "quick",
    time: "30-45 min",
    difficulty: "Medium",
    vibe: "Post-apocalyptic & punchy",
    description:
      "A vicious post-apocalyptic card duel. Roxley's tight design at its sharpest.",
  },
  {
    title: "PATCHWORK",
    players: [2],
    duration: "quick",
    time: "20-30 min",
    difficulty: "Easy",
    vibe: "Cozy & competitive",
    description:
      "Uwe Rosenberg's charming quilt puzzle. Perfect with morning matcha.",
  },
  {
    title: "JAIPUR",
    players: [2],
    duration: "quick",
    time: "25-30 min",
    difficulty: "Easy",
    vibe: "Quick & cunning",
    description:
      "Trade goods in the markets of Jaipur. A two-player gem that never gets old.",
  },

  // ===== 3 PLAYER GAMES =====
  {
    title: "GALACTIC CRUISE",
    players: [2, 3, 4],
    duration: "long",
    time: "90-120 min",
    difficulty: "Medium-Heavy",
    vibe: "Retro-futuristic & immersive",
    description:
      "Run a luxury space cruise line. A stunning 2024 release with gorgeous art deco vibes.",
  },
  {
    title: "ARCS",
    players: [2, 3, 4],
    duration: "long",
    time: "90-120 min",
    difficulty: "Heavy",
    vibe: "Cutthroat & cinematic",
    description:
      "Cole Wehrle's space opera of betrayal and ambition. Trick-taking meets 4X in a tight 3-act campaign.",
  },
  {
    title: "THE QUEST FOR EL DORADO",
    players: [2, 3, 4],
    duration: "quick",
    time: "30-60 min",
    difficulty: "Easy",
    vibe: "Adventurous & quick",
    description:
      "Reiner Knizia's deck-building race through the jungle. Easy to learn, hard to win.",
  },
  {
    title: "AZUL",
    players: [2, 3, 4],
    duration: "quick",
    time: "30-45 min",
    difficulty: "Easy",
    vibe: "Beautiful & tactical",
    description:
      "Place gorgeous tiles like a Portuguese artisan. Easy to learn, brutal to master.",
  },

  // ===== 4 PLAYER GAMES =====
  {
    title: "TERRAFORMING MARS",
    players: [1, 2, 3, 4, 5],
    duration: "long",
    time: "120-180 min",
    difficulty: "Heavy",
    vibe: "Epic & engineering",
    description:
      "Transform the red planet over generations. The definitive sci-fi euro.",
  },
  {
    title: "EVERDELL",
    players: [1, 2, 3, 4],
    duration: "long",
    time: "60-100 min",
    difficulty: "Medium",
    vibe: "Whimsical & enchanting",
    description:
      "Build a city of woodland creatures. The 3D tree alone is worth it.",
  },
  {
    title: "DUNE: IMPERIUM",
    players: [1, 2, 3, 4],
    duration: "long",
    time: "60-120 min",
    difficulty: "Medium-Heavy",
    vibe: "Political & cunning",
    description:
      "Deck-building meets worker placement on Arrakis. The spice must flow.",
  },
  {
    title: "WINGSPAN",
    players: [1, 2, 3, 4, 5],
    duration: "medium",
    time: "40-70 min",
    difficulty: "Medium",
    vibe: "Peaceful & rewarding",
    description:
      "A serene bird sanctuary builder. Whiskery's favorite for tea time.",
  },

  // ===== 5+ PLAYER / PARTY GAMES =====
  {
    title: "CODENAMES",
    players: [4, 5],
    duration: "quick",
    time: "15-30 min",
    difficulty: "Easy",
    vibe: "Witty & social",
    description:
      "A party word game that sparks laughter and arguments. Bigger groups, bigger fun.",
  },
  {
    title: "JUST ONE",
    players: [3, 4, 5],
    duration: "quick",
    time: "20-30 min",
    difficulty: "Easy",
    vibe: "Cooperative & lively",
    description:
      "Cooperative word-guessing chaos. Everyone wins (or loses) together.",
  },
  {
    title: "THE CREW",
    players: [3, 4, 5],
    duration: "quick",
    time: "20-30 min",
    difficulty: "Medium",
    vibe: "Tense & cooperative",
    description:
      "A cooperative trick-taking masterpiece. Save the mission without talking.",
  },

  // ===== HEAVY / GAMER'S GAMES =====
  {
    title: "BRASS: BIRMINGHAM",
    players: [2, 3, 4],
    duration: "long",
    time: "120-180 min",
    difficulty: "Heavy",
    vibe: "Industrial & cutthroat",
    description:
      "Currently #1 on BGG. Build industries during the British Industrial Revolution.",
  },
  {
    title: "GLOOMHAVEN: JAWS OF THE LION",
    players: [1, 2, 3, 4],
    duration: "long",
    time: "60-120 min",
    difficulty: "Heavy",
    vibe: "Tactical & epic",
    description:
      "Campaign dungeon-crawling at its finest. A long journey worth taking.",
  },

  // ===== KICKSTARTER GEMS =====
  {
    title: "FROSTHAVEN",
    players: [1, 2, 3, 4],
    duration: "long",
    time: "60-180 min",
    difficulty: "Heavy",
    vibe: "Epic campaign",
    description:
      "Isaac Childres' massive follow-up to Gloomhaven. A campaign of a lifetime.",
  },
  {
    title: "OATHSWORN: INTO THE DEEPWOOD",
    players: [1, 2, 3, 4],
    duration: "long",
    time: "90-180 min",
    difficulty: "Heavy",
    vibe: "Dark & cinematic",
    description:
      "A Kickstarter sensation. Story-driven combat with the most stunning minis ever printed.",
  },
  {
    title: "SLEEPING GODS",
    players: [1, 2, 3, 4],
    duration: "long",
    time: "60-120 min",
    difficulty: "Medium",
    vibe: "Atlas-spanning & narrative",
    description:
      "A story-driven exploration epic. Sail uncharted seas across a beautiful atlas.",
  },
];

// User selections
let selectedPlayers = 1;
let selectedDuration = "quick";

// Dice faces (SVG)
const diceFaces = {
  1: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <circle cx="50" cy="50" r="9" fill="#B3230B"/>
      </svg>`,
  2: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <circle cx="28" cy="28" r="9" fill="#B3230B"/>
        <circle cx="72" cy="72" r="9" fill="#B3230B"/>
      </svg>`,
  3: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <circle cx="25" cy="25" r="9" fill="#B3230B"/>
        <circle cx="50" cy="50" r="9" fill="#B3230B"/>
        <circle cx="75" cy="75" r="9" fill="#B3230B"/>
      </svg>`,
  4: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <circle cx="28" cy="28" r="9" fill="#B3230B"/>
        <circle cx="72" cy="28" r="9" fill="#B3230B"/>
        <circle cx="28" cy="72" r="9" fill="#B3230B"/>
        <circle cx="72" cy="72" r="9" fill="#B3230B"/>
      </svg>`,
  5: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <circle cx="25" cy="25" r="9" fill="#B3230B"/>
        <circle cx="75" cy="25" r="9" fill="#B3230B"/>
        <circle cx="50" cy="50" r="9" fill="#B3230B"/>
        <circle cx="25" cy="75" r="9" fill="#B3230B"/>
        <circle cx="75" cy="75" r="9" fill="#B3230B"/>
      </svg>`,
  6: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <circle cx="25" cy="22" r="9" fill="#B3230B"/>
        <circle cx="75" cy="22" r="9" fill="#B3230B"/>
        <circle cx="25" cy="50" r="9" fill="#B3230B"/>
        <circle cx="75" cy="50" r="9" fill="#B3230B"/>
        <circle cx="25" cy="78" r="9" fill="#B3230B"/>
        <circle cx="75" cy="78" r="9" fill="#B3230B"/>
      </svg>`,
};

let isRolling = false;
let lastGameTitle = null; // Avoid repeating same game

// ============================================
// FILTER FUNCTIONS
// ============================================

function selectPlayers(num) {
  selectedPlayers = num;
  document
    .querySelectorAll(".player-btn")
    .forEach((btn) => btn.classList.remove("active"));
  document.querySelector(`[data-players="${num}"]`).classList.add("active");
}

function selectDuration(dur) {
  selectedDuration = dur;
  document
    .querySelectorAll(".duration-btn")
    .forEach((btn) => btn.classList.remove("active"));
  document.querySelector(`[data-duration="${dur}"]`).classList.add("active");
}

// ============================================
// DICE ROLL & GAME RECOMMENDATION
// ============================================

function rollDice() {
  if (isRolling) return;
  isRolling = true;

  const dice = document.getElementById("dice");
  const diceFace = document.getElementById("diceFace");

  dice.classList.add("rolling");

  // Animate dice face during roll
  let count = 0;
  const interval = setInterval(() => {
    diceFace.innerHTML = diceFaces[Math.floor(Math.random() * 6) + 1];
    count++;
    if (count >= 8) clearInterval(interval);
  }, 80);

  // Get final result
  setTimeout(() => {
    // Filter matching games
    let matchedGames = gameDatabase.filter((game) => {
      const playerMatch = game.players.includes(selectedPlayers);
      const durationMatch = game.duration === selectedDuration;
      return playerMatch && durationMatch;
    });

    // Avoid repeating the same game
    if (matchedGames.length > 1 && lastGameTitle) {
      const filtered = matchedGames.filter((g) => g.title !== lastGameTitle);
      if (filtered.length > 0) matchedGames = filtered;
    }

    let game;
    if (matchedGames.length > 0) {
      game = matchedGames[Math.floor(Math.random() * matchedGames.length)];
    } else {
      // Fallback: by player count only
      const fallback = gameDatabase.filter((g) =>
        g.players.includes(selectedPlayers),
      );
      game =
        fallback[Math.floor(Math.random() * fallback.length)] ||
        gameDatabase[0];
    }

    lastGameTitle = game.title;

    // Update dice face
    const finalNum = Math.floor(Math.random() * 6) + 1;
    diceFace.innerHTML = diceFaces[finalNum];

    displayGame(game);

    dice.classList.remove("rolling");
    isRolling = false;
  }, 800);
}

function displayGame(game) {
  const titleEl = document.getElementById("resultTitle");
  titleEl.textContent = game.title;
  titleEl.classList.remove("result-updated");
  void titleEl.offsetWidth;
  titleEl.classList.add("result-updated");

  // Format player count
  const playerStr =
    game.players.length === 1
      ? `${game.players[0]} player`
      : `${Math.min(...game.players)}-${Math.max(...game.players)} players`;

  document.getElementById("gamePlayers").textContent = playerStr;
  document.getElementById("gameTime").textContent = game.time;
  document.getElementById("gameDifficulty").textContent = game.difficulty;
  document.getElementById("gameVibe").textContent = game.vibe;
  document.getElementById("gameDescription").textContent = game.description;

  document.getElementById("rollInstruction").textContent =
    "Tap again for another pick";
}

// Keyboard support
document.addEventListener("keydown", (e) => {
  if (e.code === "Space") {
    e.preventDefault();
    rollDice();
  }
});
