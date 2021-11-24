import TourPlan from "./TourPlan.js";
import TourPlanBuilder from "./TourPlanBuilder.js";

export default class DefaultTourPlanBuilder extends TourPlanBuilder {
  /** @type { TourPlan } */
  #tourPlan;
  
  /** 
   * @override 
   * @returns { DefaultTourPlanBuilder }
   */
  initTourPlan() {
    this.#tourPlan = new TourPlan();
    return this;
  }

  #checkTourPlan() {
    if(!this.#tourPlan) {
      throw new Error("initTourPlan() 을 먼저 호출해 주세요");
    }
  }

  /**
   * @override
   * @param { string } title
   * @returns { DefaultTourPlanBuilder }
   */
  title(title) {
    this.#checkTourPlan();
    this.#tourPlan.setTitle(title);
    return this;
  }

  /**
   * @override
   * @param { number } nights
   * @param { number } days
   * @returns { DefaultTourPlanBuilder }
   */
  nightsAndDays(nights, days) {
    this.#checkTourPlan();
    this.#tourPlan.setNights(nights);
    this.#tourPlan.setDays(days);
    return this;
  }

  /**
   * @override
   * @param { Date } startDate
   * @return { DefaultTourPlanBuilder }
   */
  startDate(startDate) {
    this.#checkTourPlan();
    this.#tourPlan.setStartDate(startDate);
    return this;
  }

  /**
   * @override
   * @param { string } whereToStay
   * @returns { DefaultTourPlanBuilder }
   */
  whereToStay(whereToStay) {
    this.#checkTourPlan();
    this.#tourPlan.setWhereToStay(whereToStay);
    return this;
  }

  /**
   * @override
   * @param { number } day
   * @param { string } plan
   * @returns { DefaultTourPlanBuilder }
   */
  addPlan(day, plan) {
    this.#checkTourPlan();
    this.#tourPlan.addPlan(day, plan);
    return this;
  }

  /**
   * @override
   * @returns { TourPlan }
   */
  build() {
    this.#checkTourPlan();
    const resultTourPlan = this.#tourPlan;
    this.#tourPlan = undefined;
    return resultTourPlan;
  }
}