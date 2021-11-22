package _01_CreationalPattern._01_04_Builder.java.after;

import java.time.LocalDate;

public interface TourPlanBuilder {
  
  TourPlanBuilder initTourPlan();
  TourPlanBuilder title(String title);
  TourPlanBuilder nightsAndDays(int nights, int days);
  TourPlanBuilder startDate(LocalDate startDate);
  TourPlanBuilder whereToStay(String whereToStay);
  TourPlanBuilder addPlan(int day, String plan);
  TourPlan build();

}
