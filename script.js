
function startGame() {
  document.getElementById("main-menu").style.display = "none";
  alert("Game Started! (Full game logic goes here)");
}
let progress = 0;
const interval = setInterval(() => {
  progress += 20;
  document.getElementById("progress").textContent = progress + "%";
  if (progress >= 100) {
    clearInterval(interval);
    document.getElementById("loading").style.display = "none";
    document.getElementById("main-menu").style.display = "block";
  }
}, 500);
