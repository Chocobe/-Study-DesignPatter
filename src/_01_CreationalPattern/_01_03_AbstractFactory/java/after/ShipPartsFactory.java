package _01_CreationalPattern._01_03_AbstractFactory.java.after;

public interface ShipPartsFactory {
  
  Anchor createAnchor();

  Wheel createWheel();
}
