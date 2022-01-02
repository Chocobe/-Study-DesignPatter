import CleaningService from "./CleaningService.js";
import Restaurant from "./Restaurant.js";

/**
 * @typedef { import("./Guest").default } Guest
 */

export default class FrontDesk {
  /** @type { CleaningService } */
  _cleaningService;

  /** @type { Restaurant } */
  _restaurant;
  
  constructor() {
    this._cleaningService = new CleaningService(this);
    this._restaurant = new Restaurant(this);
  }

  /** @returns { string } */
  getRoomNumber(guestId) {
    return `🐫🐫🐫 - ${guestId}`;
  }
  
  /**
   * @param { Guest } guest 
   * @param { number } numberOfTowers 
   */
  getTowers(guest, numberOfTowers) {
    this._cleaningService.getTowers(guest.getId(), numberOfTowers);
  }

  /**
   * 
   * @param { Guest } guest 
   * @param { string } menu 
   */
  dinner(guest, menu) {
    this._restaurant.dinner(guest.getId(), menu);
  }
}