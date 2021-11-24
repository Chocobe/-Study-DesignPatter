import TourPlan from "./TourPlan.js";

export default class TourPlanBuilder {
  /** 
   * @abstract 
   * @returns { TourPlanBuilder }
   */
  initTourPlan() {
    throw new Error("TourPlanBuilder.initTourPlan() 은 Abstract Method 입니다.");
  }
  
  /** 
   * @abstract
   * @param { string } _title 
   * @returns { TourPlanBuilder }
   */
  title(_title) {
    throw new Error("TourPlanBuilder.title() 은 Abstract Method 입니다.");
  }

  /**
   * @abstract
   * @param { number } _nights
   * @param { number } _days
   * @returns { TourPlanBuilder }
   */
  nightsAndDays(_nights, _days) {
    throw new Error("TourPlanBuilder.nightsAndDays() 는 Abstract Method 입니다.");
  }

  /**
   * @abstract
   * @param { Date } _startDate
   * @returns { TourPlanBuilder }
   */
  startDate(_startDate) {
    throw new Error("TourPlanBuilder.startDate() 는 Abstract Method 입니다.");
  }

  /**
   * @abstract
   * @param { string } _whereToStay
   * @returns { TourPlanBuilder }
   */
  whereToStay(_whereToStay) {
    throw new Error("TourPlanBuilder.whereToStay() 는 Abstract Method 입니다.");
  }

  /**
   * @abstract
   * @param { number } _day
   * @param { string } _plan
   * @returns { TourPlanBuilder }
   */
  addPlan(_day, _plan) {
    throw new Error("TourPlanBuilder.addPlan() 은 Abstract Method 입니다.");
  }

  /** 
   * @abstract 
   * @returns { TourPlan }
   */
  build() {
    throw new Error("TourPlanBuilder.build() 는 Abstract Method 입니다.");
  }
}