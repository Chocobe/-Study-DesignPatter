package _01_CreationalPattern._01_03_AbstractFactory.java.before;

public class App {
  
  public static void main(String[] args) {
    ShipFactory whiteshipFactory = new WhiteshipFactory();
    Ship whiteship = whiteshipFactory.orderShip("kim", "kim@deepnatural.ai");
    System.out.println(whiteship.getAnchor().getClass().getSimpleName());
  }
  
}
