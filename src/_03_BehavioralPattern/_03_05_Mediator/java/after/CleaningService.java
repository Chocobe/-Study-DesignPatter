package _03_BehavioralPattern._03_05_Mediator.java.after;

public class CleaningService {
  
  private FrontDesk frontDesk;

  public CleaningService(FrontDesk frontDesk) {
    this.frontDesk = frontDesk;
  }

  public void getTowers(Integer guestId, int numberOfTowers) {
    String roomNumber = this.frontDesk.getRoomNumberFor(guestId);
    System.out.println("towers " + numberOfTowers + " to " + roomNumber);
  }
  
}
