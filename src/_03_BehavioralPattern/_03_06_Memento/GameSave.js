export default class GameSave {
  /** @type { number } */
  _blueTeamScore;

  /** @type { number } */
  _redTeamScore;

  constructor(blueTeamScore, redTeamScore) {
    this._blueTeamScore = blueTeamScore;
    this._redTeamScore = redTeamScore;
  }

  /** @returns { number } */
  getBlueTeamScore() {
    return this._blueTeamScore;
  }

  /** @returns { number } */
  getRedTeamScore() {
    return this._redTeamScore;
  }
}