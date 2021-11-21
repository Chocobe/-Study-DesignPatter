package _01_CreationalPattern._01_03_AbstractFactory.java.after;

public class WhiteProPartsFactory implements ShipPartsFactory {

  @Override
  public Anchor createAnchor() {
    return new WhiteProAnchor();
  }

  @Override
  public Wheel createWheel() {
    return new WhiteProWheel();
  }
  
}
