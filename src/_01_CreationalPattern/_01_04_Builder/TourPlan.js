import DetailPlan from "./DetailPlan.js";

export default class TourPlan {
  /** @type { string } */
  #title;

  /** @type { number } */
  #nights;

  /** @type { number } */
  #days;

  /** @type { Date } */
  #startDate;

  /** @type { string } */
  #whereToStay;

  /** @type { DetailPlan[] } */
  #plans;

  /** @returns { string } */
  printInfo() {
    return `
      TourPlan: {
        title: ${this.#title},
        nights: ${this.#nights},
        days: ${this.#days},
        startDate: ${this.#startDate},
        whereToStay: ${this.#whereToStay},
        plans: ${this.#plans?.map(plan => plan.printInfo())},
      }
    `;
  }

  /** @returns { string } */
  getTitle() {
    return this.#title;
  }
  /** @param { string } title */
  setTitle(title) {
    this.#title = title;
  }

  /** @returns { number } nights */
  getNights() {
    return this.#nights;
  }
  /** @param { number } nights */
  setNights(nights) {
    this.#nights = nights;
  }

  /** @returns { number } */
  getDays() {
    return this.#days;
  }
  /** @param { number } days */
  setDays(days) {
    this.#days = days;
  }

  /** @returns { Date } */
  getStartDate() {
    return this.#startDate;
  }
  /** @param { Date } startDate */
  setStartDate(startDate) {
    this.#startDate = startDate;
  }

  /** @returns { string } */
  getWhereToStay() {
    return this.#whereToStay;
  }
  /** @param { string } _whereToStay */
  setWhereToStay(_whereToStay) {
    this.#whereToStay = _whereToStay;
  }

  /** @returns { DetailPlan[] } */
  getPlans() {
    return this.#plans;
  }
  /** @param { DetailPlan[] } plans */
  setPlans(plans) {
    this.#plans = plans;
  }

  /**
   * @param { number } day
   * @param { string } plan
   */
  addPlan(day, plan) {
    this.#plans ?? (this.#plans = []);
    this.#plans.push(new DetailPlan(day, plan));
  }
}