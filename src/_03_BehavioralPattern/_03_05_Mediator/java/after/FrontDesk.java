package _03_BehavioralPattern._03_05_Mediator.java.after;

public class FrontDesk {

  private CleaningService cleaningService = new CleaningService(this);

  private Restaurant restaurant = new Restaurant(this);

  public String getRoomNumberFor(Integer guestId) {
    return "방번호 123";
  }

  public void getTowers(Guest guest, int numberOfTowers) {
    this.cleaningService.getTowers(guest.getId(), numberOfTowers);
  }

  public void dinner(Guest guest, String menu) {
    this.restaurant.dinner(guest.getId(), menu);
  }
  
}
