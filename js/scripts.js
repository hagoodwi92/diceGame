//business
function PlayerBook() {
  this.players = [];

}

PlayerBook.prototype.addPlayer = function (player) {
  this.players.push(player);
}

PlayerBook.prototype.rollDie = function ()  {
  this.currentRoll = this.currentRoll + 1;
  return this.currentRoll;
}

function Player(currentRoll , turnTotal, finalScore){
  this.currentRoll = currentRoll;
  this.turnTotal = turnTotal;
  this.finalScore = finalScore;
}

Player.prototype.fullName = function() {
  return this.currentRoll + this.turnTotal + this.finalScore;
}

//ui
$(document).ready(function()  {
  let playerBook = new PlayerBook();
  let player = new Player(0,0,0);
  let player1 = new Player(0,0,0);
  playerBook.addPlayer(player);
  playerBook.addPlayer(player1);
  playerBook.rollDie(player);
  playerBook.players;
  
  

})
