import TourPlanBuilder from "./TourPlanBuilder.js";

/**
 * @typedef { import("./TourPlan").default } TourPlan
 */

export default class TourPlanDirector {
  /** @type { TourPlanBuilder } */
  #tourPlanBuilder;

  /** @param { TourPlanBuilder } tourPlanBuilder */
  constructor(tourPlanBuilder) {
    this.#tourPlanBuilder = tourPlanBuilder;
  }

  /**
   * 짧은 부산 여행
   * @returns { TourPlan }
   */
  createBusanTripForShort() {
    return this.#tourPlanBuilder.initTourPlan()
      .title("짧은 부산 여행")
      .startDate(new Date(2021, 12, 24))
      .addPlan(0, "KTX 타기")
      .addPlan(0, "놀기")
      .addPlan(0, "SRT 타기")
      .build()
  }

  /**
   * 긴 서울 여행
   * @returns { TourPlan }
   */
  createSeoulTripForLong() {
    return this.#tourPlanBuilder.initTourPlan()
      .title("긴 서울 여행")
      .startDate(new Date(2022, 1, 1))
      .nightsAndDays(2, 3)
      .whereToStay("양재")
      .addPlan(0, "버스 타기")
      .addPlan(0, "맛집 탐방")
      .addPlan(0, "숙소 돌아가기")
      .addPlan(1, "놀기 1")
      .addPlan(2, "놀기 2")
      .build();
  }
}