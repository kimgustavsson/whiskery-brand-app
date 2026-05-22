const rolls = [
  {
    title: "SOLO SERENITY",
    tea: "Jeju Green Tea Latte",
    teaSource: "Jeju Island, Korea",
    pastry: "Warm Butter Croissant",
    pastryTime: "Baked This Morning",
    game: "Wingspan — solo mode",
    vibe: "Quiet & contemplative",
  },
  {
    title: "DUO DELIGHT",
    tea: "Matcha Latte",
    teaSource: "Jeju Island, Korea",
    pastry: "Double Chocolate Cookie",
    pastryTime: "Fresh Today",
    game: "Patchwork — for two",
    vibe: "Connected & playful",
  },
  {
    title: "GALACTIC CRUISE",
    tea: "Iced Jeju Green Tea",
    teaSource: "Jeju Island, Korea",
    pastry: "Berry Tart",
    pastryTime: "Baked This Morning",
    game: "Galactic Cruise — new release",
    vibe: "Adventurous & bold",
  },
  {
    title: "STRATEGIC PLAY",
    tea: "Lavender Tea Blend",
    teaSource: "House Blend",
    pastry: "Almond Croissant",
    pastryTime: "Baked Daily",
    game: "Catan — classic strategy",
    vibe: "Focused & sharp",
  },
  {
    title: "SWEET VICTORY",
    tea: "Honey Green Tea",
    teaSource: "Jeju Island, Korea",
    pastry: "Vanilla Cake Slice",
    pastryTime: "Made Today",
    game: "Ticket to Ride — group fun",
    vibe: "Celebratory & warm",
  },
  {
    title: "MYSTERY ROLL",
    tea: "Chef's Special Tea",
    teaSource: "Surprise Pick",
    pastry: "Pastry of the Day",
    pastryTime: "Chef's Choice",
    game: "Random pick from library",
    vibe: "Surprising & magical",
  },
];

let isRolling = false;
const diceFaces = ["⚀", "⚁", "⚂", "⚃", "⚄", "⚅"];

function rollDice() {
  if (isRolling) return;
  isRolling = true;

  const dice = document.getElementById("dice");
  const diceFace = document.getElementById("diceFace");

  dice.classList.add("rolling");

  // Quick face changes during roll
  let count = 0;
  const interval = setInterval(() => {
    diceFace.textContent = diceFaces[Math.floor(Math.random() * 6)];
    count++;
    if (count >= 8) {
      clearInterval(interval);
    }
  }, 80);

  // Final result
  setTimeout(() => {
    const result = Math.floor(Math.random() * 6);
    diceFace.textContent = diceFaces[result];
    updateResults(rolls[result]);
    dice.classList.remove("rolling");
    isRolling = false;
  }, 800);
}

function updateResults(roll) {
  document.getElementById("resultTitle").textContent = roll.title;
  document.getElementById("teaResult").textContent = roll.tea;
  document.getElementById("teaSource").textContent = roll.teaSource;
  document.getElementById("pastryResult").textContent = roll.pastry;
  document.getElementById("pastryTime").textContent = roll.pastryTime;
  document.getElementById("gameResult").textContent = roll.game;
  document.getElementById("vibeResult").textContent = roll.vibe;
}

// Spacebar to roll
document.addEventListener("keydown", (e) => {
  if (e.code === "Space") {
    e.preventDefault();
    rollDice();
  }
});
