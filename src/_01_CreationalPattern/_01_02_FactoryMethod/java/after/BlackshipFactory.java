package _01_CreationalPattern._01_02_FactoryMethod.java.after;

public class BlackshipFactory implements ShipFactory {
  @Override
  public Ship createShip() {
    return new Blackship();
  }  
}
