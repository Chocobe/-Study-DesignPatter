package _03_BehavioralPattern._03_05_Mediator.java.before;

public class Hotel {

  public static void main(String[] args) {
    Guest guest = new Guest();
    guest.getTower(3);
    guest.dinner();

    Restaurant restaurant = new Restaurant();
    restaurant.clean();
  }
  
}
