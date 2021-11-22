package _01_CreationalPattern._01_04_Builder.java.after;

import java.time.LocalDate;

public class TourDirector {
  
  private TourPlanBuilder tourPlanBuilder;

  public TourDirector(TourPlanBuilder tourPlanBuilder) {
    this.tourPlanBuilder = tourPlanBuilder;
  }

  public TourPlan createShortTrip() {
    return tourPlanBuilder.initTourPlan()
      .title("짧은 여행")
      .startDate(LocalDate.of(2021, 11, 23))
      .build();
  }

  public TourPlan createLongTrip() {
    return tourPlanBuilder.initTourPlan()
      .title("긴 여행")
      .startDate(LocalDate.of(2021, 12, 24))
      .nightsAndDays(2, 3)
      .whereToStay("우리집")
      .addPlan(0, "KTX 타기")
      .addPlan(1, "늦잠 자기")
      .addPlan(2, "SRT 타기")
      .build();
  }
}
