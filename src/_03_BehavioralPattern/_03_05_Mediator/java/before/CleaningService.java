package _03_BehavioralPattern._03_05_Mediator.java.before;

public class CleaningService {
  
  public void clean(Gym gym) {
    System.out.println("clearn " + gym);
  }

  public void getTower(Guest guest, int numberOfTower) {
    System.out.println(numberOfTower + " towers to " + guest);
  }

  public void clean(Restaurant restaurant) {
    System.out.println("clean " + restaurant);
  }
  
}
