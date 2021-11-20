import Ship from "./Ship.js";
import ShipFactory from "./ShipFactory.js";

export default class BlackshipFactory extends ShipFactory {
  constructor() {
    super();
  }

  /** 
   * @override
   * @param { string } name 
   * @returns { Ship }
   */
  _createShip(name) {
    return new Ship(name, "Blackship", "#000", "⚓");
  }
}