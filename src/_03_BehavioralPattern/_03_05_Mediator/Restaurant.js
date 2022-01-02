/**
 * @typedef { import("./FrontDesk").default } FrontDesk
 */

export default class Restaurant {
  /** @type { FrontDesk } */
  _frontDesk;

  /** @param { FrontDesk } frontDesk */
  constructor(frontDesk) {
    this._frontDesk = frontDesk;
  }

  /**
   * 
   * @param { number } guestId 
   * @param { string } menu 
   */
  dinner(guestId, menu) {
    const roomNumber = this._frontDesk.getRoomNumber(guestId);
    console.log(`점심 ${menu} (을)를 ${roomNumber} 에 전달 !!`);
  }
}