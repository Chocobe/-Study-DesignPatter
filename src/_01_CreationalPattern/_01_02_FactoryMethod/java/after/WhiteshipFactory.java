package _01_CreationalPattern._01_02_FactoryMethod.java.after;

public class WhiteshipFactory implements ShipFactory {
  @Override
  public Ship createShip() {
    return new Whiteship();
  }
}
