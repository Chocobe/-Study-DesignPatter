import BlueLightRedLight from "./BlueLightRedLight.js";
import NormalSpeed from "./NormalSpeed.js";
import FastSpeed from "./FastSpeed.js";
import FastestSpeed from "./FastestSpeed.js";

const game = new BlueLightRedLight();
game.blueLight(new NormalSpeed());
game.redLight(new FastSpeed());

console.log();

game.blueLight(new FastestSpeed());
game.redLight(new FastestSpeed());
