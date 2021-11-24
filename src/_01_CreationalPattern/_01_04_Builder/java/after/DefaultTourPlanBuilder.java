package _01_CreationalPattern._01_04_Builder.java.after;

import java.time.LocalDate;
import java.util.ArrayList;

public class DefaultTourPlanBuilder implements TourPlanBuilder {

  private TourPlan tourPlan;

  @Override
  public TourPlanBuilder initTourPlan() {
    tourPlan = new TourPlan();
    return this;
  }

  private void checkTourPlan() {
    if(tourPlan == null) throw new Error("initTourPlan() 을 먼저 호출해 주세요");
  }
  
  @Override
  public TourPlanBuilder nightsAndDays(int nights, int days) {
    checkTourPlan();
    tourPlan.setNights(nights);
    tourPlan.setDays(days);
    return this;
  }

  @Override
  public TourPlanBuilder title(String title) {
    checkTourPlan();
    tourPlan.setTitle(title);
    return this;
  }

  @Override
  public TourPlanBuilder startDate(LocalDate startDate) {
    checkTourPlan();
    tourPlan.setStartDate(startDate);
    return this;
  }

  @Override
  public TourPlanBuilder whereToStay(String whereToStay) {
    checkTourPlan();
    tourPlan.setWhereToStay(whereToStay);
    return this;
  }

  @Override
  public TourPlanBuilder addPlan(int day, String plan) {
    checkTourPlan();
    
    if(tourPlan.getPlans() == null) tourPlan.setPlans(new ArrayList<>());
    
    tourPlan.addPlan(day, plan);
    return this;
  }

  @Override
  public TourPlan build() {
    TourPlan resultTourPlan = tourPlan;
    tourPlan = null;
    return resultTourPlan;
  }
  
}
