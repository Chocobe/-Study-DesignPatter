package _01_CreationalPattern._01_04_Builder.java.before;

public class DetailPlan {
  
  private int day;
  private String plan;

  public DetailPlan(int day, String plan) {
    this.day = day;
    this.plan = plan;
  }

  // day
  public int getDay() {
    return this.day;
  }
  public void setDay(int day) {
    this.day = day;
  }

  // plan
  public String getPlan() {
    return this.plan;
  }
  public void setPlan(String plan) {
    this.plan = plan;
  }

  @Override
  public String toString() {
    return "DetailPlan { "
      + "day=" + day
      + ", plan=\"" + plan + "\""
      + " }";
  }
}
