const symbols = ["🍒", "🍋", "🔔", "💎", "7️⃣"];

const reel1 = document.getElementById("reel1");
const reel2 = document.getElementById("reel2");
const reel3 = document.getElementById("reel3");
const result = document.getElementById("result");
const button = document.getElementById("spin");

function spinReel() {
  return symbols[Math.floor(Math.random() * symbols.length)];
}

function playGame() {
  const slot1 = spinReel();
  const slot2 = spinReel();
  const slot3 = spinReel();

  reel1.textContent = slot1;
  reel2.textContent = slot2;
  reel3.textContent = slot3;

  if (slot1 === slot2 && slot2 === slot3) {
    result.textContent = "🎉 Você ganhou! 🎉";
    result.style.color = "lime";
  } else {
    result.textContent = "😢 Tente novamente!";
    result.style.color = "red";
  }
}

button.addEventListener("click", playGame);
