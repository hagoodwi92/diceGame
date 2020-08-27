//business
function PlayerBook() {
  this.players = [];

}

PlayerBook.prototype.addPlayer = function (player) {
  this.players.push(player);
}

Player.prototype.rollOne = function ()  {
  if (this.currentRoll === 1) {
   this.currentRoll = 0;
} else {
  this.currentRoll += this.turnTotal;
}
}

Player.prototype.ifNotOne = function () {
  
  
}

PlayerBook.prototype.ifHold = function (player) {
  //turn total = score, other players turn
}


Player.prototype.rollDie = function ()  {
  //changes currentroll to random number in player object
  this.currentRoll = Math.floor(6*Math.random())+1;
  return this.currentRoll;
}

function Player(currentRoll , turnTotal, finalScore){
  this.currentRoll = 0;
  this.turnTotal = 0;
  this.finalScore = 0;
}

//ui
$(document).ready(function()  {
  let playerBook = new PlayerBook();
  let player = new Player();
  let player1 = new Player();
  playerBook.addPlayer(player);
  playerBook.addPlayer(player1);
  player.rollDie(player);
  
  
})

