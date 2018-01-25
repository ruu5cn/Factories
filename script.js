// TODO: Add 2-6 players
// TODO: Add computer generated players
// TODO: Add basic code
var numPlayers = 0;
var whoseTurn = "?";

function Player(name) {
  this.name = name;
  this.money = 15;
  this.properties = [];
  this.credits = 0;
}

var player1 = new Player("Sam The Fighter");
var player2 = new Player("Bob The Bowman");
var player3 = new Player("Richard The Rich");
var player4 = new Player("Lentil The Lumberjack");
var player5 = new Player("Larry The Lame");
var player6 = new Player("Mighty Man Mike");
var player7 = new Player("Billy The Bilious");
var player8 = new Player("Big Buck the *Bleep*");

var invalid = function() {
  alert("I am sorry. That is an invalid command.");
}

var bidding = function() {
  var playerList = prompt("How many players are playing(2-8)? No letters please!");
  if (playerList > 1 && playerList < 9) {
    numPlayers = playerList;
  }else{
    invalid();
    var playerList = prompt("How many players are playing(2-8)? No letters please!");
  }
}
