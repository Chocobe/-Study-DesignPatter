package _03_BehavioralPattern._03_05_Mediator.java.before;

public class Restaurant {
  
  private CleaningService cleaningService = new CleaningService();

  public void dinner(Guest guest) {
    System.out.println("dinner " + guest);
  }

  public void clean() {
    cleaningService.clean(this);
  }
  
}
