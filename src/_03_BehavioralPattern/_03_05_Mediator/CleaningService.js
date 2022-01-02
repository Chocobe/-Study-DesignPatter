/**
 * @typedef { import("./FrontDesk").default } FrontDesk
 */

export default class CleaningService {
  /** @type { FrontDesk } */
  _frontDesk;

  /** @param { FrontDesk } frontDesk */
  constructor(frontDesk) {
    this._frontDesk = frontDesk;
  }

  /**
   * @param { number } guestId 
   * @param { number } numberOfTowers 
   */
  getTowers(guestId, numberOfTowers) {
    const roomNumber = this._frontDesk.getRoomNumber(guestId);
    console.log(`${roomNumber} 에 수건 ${numberOfTowers} 개 전달`);
  }
}