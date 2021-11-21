package _01_CreationalPattern._01_03_AbstractFactory.java.before;

public class WhiteshipFactory implements ShipFactory {
  
  @Override
  public Ship createShip(String name) {
    return new Whiteship(name);
  }

}
