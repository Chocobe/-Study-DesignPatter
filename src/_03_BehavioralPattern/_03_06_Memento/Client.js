import GameSave from "./GameSave.js";

/**
 * @typedef { import("./Game").default } Game
 */

export default class Client {
  /** @type { GameSave } */
  _gameSave;

  /** @param { Game } game */
  save(game) {
    this._gameSave = game.save();
  }

  /** @param { Game } game */
  load(game) {
    game.restore(this._gameSave);
  }
}