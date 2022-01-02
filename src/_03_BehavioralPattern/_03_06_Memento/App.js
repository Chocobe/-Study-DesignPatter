import Game from "./Game.js";
import Client from "./Client.js";

const client = new Client();

const game = new Game();
game.setBlueTeamScore(10);
game.setRedTeamScore(20);

client.save(game);

game.setBlueTeamScore(15);
game.setRedTeamScore(25);

client.load(game);

console.log(game.getBlueTeamScore());
console.log(game.getRedTeamScore());
