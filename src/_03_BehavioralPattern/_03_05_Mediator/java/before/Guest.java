package _03_BehavioralPattern._03_05_Mediator.java.before;

public class Guest {
  
  private Restaurant restaurant = new Restaurant();

  private CleaningService cleaningService = new CleaningService();

  public void dinner() {
    restaurant.dinner(this);
  }

  public void getTower(int numberOfTower) {
    cleaningService.getTower(this, numberOfTower);
  }
  
}
