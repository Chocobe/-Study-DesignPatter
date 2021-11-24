package _01_CreationalPattern._01_04_Builder.java.after;

import java.time.LocalDate;

public class App {
  
  public static void main(String[] args) {
    TourPlanBuilder builder = new DefaultTourPlanBuilder();

    TourPlan tourPlan1 = builder.initTourPlan()
      .title("짧은 여행")
      .startDate(LocalDate.of(2021, 11, 24))
      .addPlan(0, "KTX 타기")
      .addPlan(0, "놀기")
      .addPlan(1, "복귀")
      .build();
    
    System.out.println(tourPlan1.getTitle());
    System.out.println(tourPlan1.getPlans());
  }
  
}
