package _01_CreationalPattern._01_03_AbstractFactory.java.after;

public class WhiteshipFactory implements ShipFactory {

  private ShipPartsFactory shipPartsFactory;
  
  WhiteshipFactory(ShipPartsFactory shipPartsFactory) {
    this.shipPartsFactory = shipPartsFactory;
  }
  
  @Override
  public Ship createShip(String name) {
    Ship ship = new Whiteship(name);
    ship.setAnchor(shipPartsFactory.createAnchor());
    ship.setWheel(shipPartsFactory.createWheel());

    return ship;
  }
  
}
