package _01_CreationalPattern._01_02_FactoryMethod.java.after;

public class App {
  public static void main(String[] args) {
    App client = new App();
    
    client.print(new WhiteshipFactory(), "whiteship", "kim@email.com");
    client.print(new BlackshipFactory(), "blackship", "chocobe@email.com");
  }

  private void print(ShipFactory shipFactory, String name, String email) {
    System.out.println(shipFactory.orderShip(name, email));
  }
}
