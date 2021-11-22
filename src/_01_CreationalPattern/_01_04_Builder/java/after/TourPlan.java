package _01_CreationalPattern._01_04_Builder.java.after;

import java.time.LocalDate;
import java.util.List;

public class TourPlan {
  
  private String title;
  private int nights;
  private int days;
  private LocalDate startDate;
  private String whereToStay;
  private List<DetailPlan> plans;

  public TourPlan() {}

  public TourPlan(String title, int nights, int days, LocalDate startDate, String whereToStay, List<DetailPlan> plans) {
    this.title = title;
    this.nights = nights;
    this.days = days;
    this.startDate = startDate;
    this.whereToStay = whereToStay;
    this.plans = plans;
  }

  @Override
  public String toString() {
    return "TourPlan {"
      + " title=\"" + title + "\""
      + ", nights=" + nights
      + ", days=" + days
      + ", startDate=" + startDate
      + ", whereToStay=\"" + whereToStay + "\""
      + ", plans=" + plans
      + " }";
  }

  // title
  public String getTitle() {
    return title;
  }
  public void setTitle(String title) {
    this.title = title;
  }

  // nights
  public int getNights() {
    return nights;
  }
  public void setNights(int nights) {
    this.nights = nights;
  }

  // days
  public int getDays() {
    return days;
  }
  public void setDays(int days) {
    this.days = days;
  }

  // startDate
  public LocalDate getStartDate() {
    return startDate;
  }
  public void setStartDate(LocalDate startDate) {
    this.startDate = startDate;
  }

  // whereToStay
  public String getWhereToStay() {
    return whereToStay;
  }
  public void setWhereToStay(String whereToStay) {
    this.whereToStay = whereToStay;
  }

  // plans
  public List<DetailPlan> getPlans() {
    return plans;
  }
  public void setPlans(List<DetailPlan> plans) {
    this.plans = plans;
  }

  public void addPlan(int day, String plan) {
    plans.add(new DetailPlan(day, plan));
  }

}
