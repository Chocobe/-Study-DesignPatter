import ShipFactory from "./ShipFactory.js";
import Whiteship from "./WhiteShip.js";

/**
 * @typedef { import("./shipPartsFactory").default } ShipPartsFactory
 */

export default class WhiteshipFactory extends ShipFactory {
  /** @type { ShipPartsFactory } */
  #shipPartsFactory;

  /**
   * @param { ShipPartsFactory } shipPartsFactory;
   */
  constructor(shipPartsFactory) {
    super();
    this.#shipPartsFactory = shipPartsFactory;
  }
  
  /**
   * @override
   * @param { string } name
   */
  _createShip(name) {
    const ship = new Whiteship(name);
    ship.setAnchor(this.#shipPartsFactory.createAnchor());
    ship.setWheel(this.#shipPartsFactory.createWheel());

    return ship;
  }
}