// Idevhtei baigaa toglogchiig hadgalah huvisagch, 0 bol zuun taliin toglogch, 1 ni baruun taliin toglogch
var activePlayer = 0;

// 2 toglogchiin niit tsugluulsan onoo
var scores = [0, 0];
// toglogch eeljinde tsugluulsan onoo
var roundscore = 0;
// togloom ehleh uyd

// tsugluulah onoo
document.getElementById("score-0").textContent = 0;
document.getElementById("score-1").textContent = 0;
// eeljinde tsugluulah onoo
document.getElementById("current-0").textContent = 0;
document.getElementById("current-1").textContent = 0;
// dice classtai img tagiig domoos haij olood huvisagchid hadgalah
var diceDom = document.querySelector(".dice");
// dice classtai img tagiin css deh displayg none bolgoj haragdahgui bolgoj bn
diceDom.style.display = "none";
// shoo buulgah
document.querySelector(".btn-roll").addEventListener("click", function () {
  // 1-6 dotor sanamsargui too uusgeh
  var diceNumber = Math.floor(Math.random() * 6 + 1);
  // .dice img tagiig haragduulah
  diceDom.style.display = "block";
  // .dice img tagiin src attributiig solij 1-6 random tootoi shooni zurga haruulah
  diceDom.src = "dice-" + diceNumber + ".png";
  // 1 buuhgui uyd eeljiin onoond nemeh , 1 buuval eeljiig onoog 0 bolgoj toglogch oorchlog
  if (diceNumber !== 1) {
    // roundscore buusan toog nemsen eeljiin onoo
    roundscore = roundscore + diceNumber;
    document.getElementById("current-" + activePlayer).textContent = roundscore;
  } else {
    // 1 buuval eeljiin onoog 0 bolgoh
    roundscore = 0;
    document.getElementById("current-" + activePlayer).textContent = 0;
    //togloch solih
    activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);
    // togloch oorchlogdoh uyd active bish bolgoh, oorchlogson toglogchiig active bolgoh
    document.querySelector(".player-0-panel").classList.toggle("active");
    document.querySelector(".player-1-panel").classList.toggle("active");
    diceDom.style.display = "none";
  }
});
