package _03_BehavioralPattern._03_05_Mediator.java.after;

public class Restaurant {

  private FrontDesk frontDesk;

  public Restaurant restaurant;

  public Restaurant(FrontDesk frontDesk) {
    this.frontDesk = frontDesk;
  }

  public void dinner(Integer guestId, String menu) {
    String roomNumber = this.frontDesk.getRoomNumberFor(guestId);
    System.out.println("dinner() : " + menu + " to " + roomNumber);
  }
  
}
