//business
Player.prototype.rollOne = function () {

  if (this.currentRoll == 1) {
    this.currentRoll = 0;
    this.finalScore = this.turnTotal;
    return alert("Game Over, your score is " + this.finalScore);
  } else {
    this.turnTotal = this.currentRoll + this.turnTotal;
    return this.turnTotal;
  }
}

Player.prototype.hold = function () {
  this.finalScore = this.turnTotal + this.finalScore;
  return this.finalScore;
  //turn total = score, other players turn
}


Player.prototype.rollDie = function () {
  //changes currentroll to random number in player object
  this.currentRoll = Math.floor(6 * Math.random()) + 1;
  return this.currentRoll;
}

Player.prototype.winCheck = function () {
  if (this.turnTotal >= 10) {
    alert("Game Over! You win!");
  }
}

// Player.prototype.notOne = function () {
//   //add current to turn total, players turn continues
//   this.currentRoll += this.turnTotal;
//   return this.turnTotal;
// }

function Player(currentRoll, turnTotal, finalScore) {
  this.currentRoll = 0;
  this.turnTotal = 0;
  this.finalScore = 0;
}

//ui



$(document).ready(function () {
  $("form#new-contact").submit(function (event) {
    event.preventDefault();
    let player = new Player();

    while (player.turnTotal <= 20) {
  
      alert("Your current roll is " + player.rollDie(player));
      alert("Your turntotal is " + player.rollOne(player));
    }

  })
})

