package _01_CreationalPattern._01_03_AbstractFactory.java.after;

public class WhitePartsFactory implements ShipPartsFactory {

  @Override
  public Anchor createAnchor() {
    return new WhiteAnchor();
  }

  @Override
  public Wheel createWheel() {
    return new WhiteWheel();
  }
  
}
