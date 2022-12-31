// Idevhtei baigaa toglogchiig hadgalah huvisagch, 0 bol zuun taliin toglogch, 1 ni baruun taliin toglogch
var activePlayer;

// 2 toglogchiin niit tsugluulsan onoo
var scores;

// toglogch eeljinde tsugluulsan onoo
var roundscore;

// dice classtai img tagiig domoos haij olood huvisagchid hadgalah
var diceDom = document.querySelector(".dice");

// togloomiin tolov

var isActiveGame;

ehleh();

// togloomiig shineer ehluuleh, utguudiig ehleh uyd tohiruulah
function ehleh() {
  isActiveGame = true;
  activePlayer = 0;

  scores = [0, 0];

  roundscore = 0;

  // tsugluulah onoo
  document.getElementById("score-0").textContent = 0;
  document.getElementById("score-1").textContent = 0;

  // eeljinde tsugluulah onoo
  document.getElementById("current-0").textContent = 0;
  document.getElementById("current-1").textContent = 0;

  // toglogchiin ner
  document.getElementById("name-0").textContent = "Player 1";
  document.getElementById("name-1").textContent = "Player 2";

  // ehleh uyd winner zagvariig arilgah
  document.querySelector(".player-0-panel").classList.remove("winner");
  document.querySelector(".player-1-panel").classList.remove("winner");

  // ehleh uyd active zagvariig arilgah
  document.querySelector(".player-0-panel").classList.remove("active");
  document.querySelector(".player-1-panel").classList.remove("active");

  // ehleh uyd ehnii togloch ehleh buyu active bolgoh
  document.querySelector(".player-0-panel").classList.add("active");

  // dice classtai img tagiin css deh displayg none bolgoj haragdahgui bolgoj bn
  diceDom.style.display = "none";
}

// shoo buulgah eventlistenert nergui shuud function bichsen eniig anonymous gedeg.
document.querySelector(".btn-roll").addEventListener("click", function () {
  if (isActiveGame === true) {
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
      document.getElementById("current-" + activePlayer).textContent =
        roundscore;
    } else {
      // 1 buuval eeljiin onoog 0 bolgoh
      switchActivePlayer();
    }
  } else {
    alert("Togloom duussan bn.");
  }
});

// HOLD eventlistener

document.querySelector(".btn-hold").addEventListener("click", function () {
  if (isActiveGame === true) {
    // idevhtei toglogchiin undsen onoon deer hold darj eeljiin onoo nemeh
    scores[activePlayer] = scores[activePlayer] + roundscore;
    document.getElementById("score-" + activePlayer).textContent =
      scores[activePlayer];

    // undsen onoo 100 hurvel hojno
    if (scores[activePlayer] >= 10) {
      // togloom duuslaa
      isActiveGame = false;
      document.getElementById("name-" + activePlayer).textContent = "WINNER!!!";
      document
        .querySelector(".player-" + activePlayer + "-panel")
        .classList.add("winner");
      document
        .querySelector(".player-" + activePlayer + "-panel")
        .classList.remove("active");
    } else {
      switchActivePlayer();
    }
  } else {
    alert("Togloom duussan bn.");
  }
});
document.querySelector(".btn-new").addEventListener("click", ehleh);
function switchActivePlayer() {
  roundscore = 0;
  document.getElementById("current-" + activePlayer).textContent = 0;
  //togloch solih
  activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);
  // togloch oorchlogdoh uyd active bish bolgoh, oorchlogson toglogchiig active bolgoh
  document.querySelector(".player-0-panel").classList.toggle("active");
  document.querySelector(".player-1-panel").classList.toggle("active");
  diceDom.style.display = "none";
}
