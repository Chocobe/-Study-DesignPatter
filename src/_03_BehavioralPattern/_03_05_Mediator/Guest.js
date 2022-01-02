/**
 * @typedef { import("./FrontDesk").default } FrontDesk
 */

export default class Guest {
  /** @type { FrontDesk } */
  _frontDesk;

  /** @type { number } */
  _id;

  /** 
   * @param { FrontDesk } frontDesk 
   * @param { number } id
   */
  constructor(frontDesk, id) {
    this._frontDesk = frontDesk;
    this._id = id;
  }

  /** @returns { number } */
  getId() {
    return this._id;
  }

  /** @param { number } numberOfTowers */
  getTowers(numberOfTowers) {
    this._frontDesk.getTowers(this, numberOfTowers);
  }

  /** @param { string } menu */
  dinner(menu) {
    this._frontDesk.dinner(this, menu);
  }
}