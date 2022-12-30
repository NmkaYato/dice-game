// Idevhtei baigaa toglogchiig hadgalah huvisagch, 0 bol zuun taliin toglogch, 1 ni baruun taliin toglogch
var activePlayer = 1;

// 2 toglogchiin niit tsugluulsan onoo
var scores = [0, 0];
// toglogch eeljinde tsugluulsan onoo

// togloom ehleh uyd

// tsugluulah onoo
document.getElementById("score-0").textContent = 0;
document.getElementById("score-1").textContent = 0;
// eeljinde tsugluulah onoo
document.getElementById("current-0").textContent = 0;
document.getElementById("current-1").textContent = 0;
var diceDom = document.querySelector(".dice");
diceDom.style.display = "none";

document.querySelector(".btn-roll").addEventListener("click", function () {
  var diceNumber = Math.floor(Math.random() * 6 + 1);
  diceDom.style.display = "block";
  diceDom.src = "dice-" + diceNumber + ".png";
});
