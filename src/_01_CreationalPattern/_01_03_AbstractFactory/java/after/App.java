package _01_CreationalPattern._01_03_AbstractFactory.java.after;

public class App {
  
  public static void main(String[] args) {
    ShipPartsFactory whitePartsFactory = new WhitePartsFactory();
    ShipFactory whiteshipFactory = new WhiteshipFactory(whitePartsFactory);

    Ship whiteship = whiteshipFactory.orderShip("KIM", "yw@deepnatural.ai");
    System.out.println(whiteship.getAnchor().getClass().getSimpleName());
    System.out.println(whiteship.getWheel().getClass().getSimpleName());

    System.out.println("\n");

    ShipPartsFactory whiteProPartsFactory = new WhiteProPartsFactory();
    ShipFactory whiteshipProFactory = new WhiteshipFactory(whiteProPartsFactory);

    Ship whiteshipPro = whiteshipProFactory.orderShip("BOB", "bob@email.com");
    System.out.println(whiteshipPro.getAnchor().getClass().getSimpleName());
    System.out.println(whiteshipPro.getWheel().getClass().getSimpleName());
  }
  
}
