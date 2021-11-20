package _01_CreationalPattern._01_02_FactoryMethod.java.before;

public class App {
  public static void main(String[] args) {
    Ship whiteship = ShipFactory.orderShip("whiteship", "kim@email.com");
    System.out.println(whiteship);

    Ship blackship = ShipFactory.orderShip("blackship", "chocobe@email.com");
    System.out.println(blackship);
  }
}
