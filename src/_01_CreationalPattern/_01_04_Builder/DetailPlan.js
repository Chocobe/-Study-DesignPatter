export default class DetailPlan {
  /**  @type { number } */
  #day

  /** @type { string } */
  #plan

  /**
   * @param { number } day 
   * @param { string } plan 
   */
  constructor(day, plan) {
    this.#day = day;
    this.#plan = plan;
  }

  /** @returns { number } */
  getDay() {
    return this.#day;
  }
  /** @param { number } day */
  setDay(day) {
    this.#day = day;
  }

  /** @return { string } */
  getPlan() {
    return this.#plan;
  }
  /** @param { string } plan */
  setPlan(plan) {
    this.#plan = plan;
  }

  /** @returns { string } */
  printInfo() {
    return `
      \t\tDetailPlan { day: ${this.#day}, plan: ${this.#plan} }
    `;
  }
}