import GameSave from "./GameSave.js";

export default class Game {
  /** @type { number } */
  _blueTeamScore;

  /** @type { number } */
  _redTeamScore;

  /** @returns { number } */
  getBlueTeamScore() {
    return this._blueTeamScore;
  }
  
  /** @param { number } blueTeamScore */
  setBlueTeamScore(blueTeamScore) {
    this._blueTeamScore = blueTeamScore;
  }

  /** @returns { number } */
  getRedTeamScore() {
    return this._redTeamScore;
  }

  /** @param { number } redTeamScore */
  setRedTeamScore(redTeamScore) {
    this._redTeamScore = redTeamScore;
  }

  /** @returns { GameSave } */
  save() {
    return new GameSave(this._blueTeamScore, this._redTeamScore);
  }

  /** @param { GameSave } gameSave  */
  restore(gameSave) {
    this._blueTeamScore = gameSave.getBlueTeamScore();
    this._redTeamScore = gameSave.getRedTeamScore(); 
  }
}