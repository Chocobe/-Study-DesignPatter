import ShipFactory from "./ShipFactory.js";
import Ship from "./Ship.js";

export default class WhiteshipFactory extends ShipFactory {
  constructor() {
    super();
  }

  /**
   * @override
   * @param { string } name 
   * @returns { Ship }
   */
  _createShip(name) {
    return new Ship(name, "Whiteship", "#fff", "\uD83D\uDEE5");
  }
}

// import Ship from "./Ship.js";
// import ShipFactory from "./ShipFactory.js";

// export default class WhiteshipFactory extends ShipFactory {
//   constructor() {
//     super();
//   }
  
//   _createShip(name) {
//     return new Ship(name, "whiteship", "#fff", "\uD83D\uDEE5");
//   }
// }