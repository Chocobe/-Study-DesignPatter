package _03_BehavioralPattern._03_05_Mediator.java.after;

public class Guest {

  private Integer id;

  private FrontDesk frontDesk = new FrontDesk();

  public Guest(int id) {
    this.id = id;
  }

  public int getId() {
    return this.id;
  }

  public void setId(int id) {
    this.id = id;
  }
  
  public void getTowers(int numberOfTowers) {
    this.frontDesk.getTowers(this, numberOfTowers);
  }

  public void dinner(String menu) {
    this.frontDesk.dinner(this, menu);
  }
  
}
