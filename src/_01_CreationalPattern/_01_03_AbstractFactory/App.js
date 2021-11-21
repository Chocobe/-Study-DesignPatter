import WhitePartsFactory from "./WhitePartsFactory.js";
import WhiteProPartsFactory from "./whiteProPartsFactory.js";

import WhiteshipFactory from "./WhiteshipFactory.js";

/**
 * @typedef { import("./Ship").default } Ship
 */

/**
 * @typedef { import("./shipPartsFactory").default } ShipPartsFactory
 * @typedef { import("./ShipFactory").default } ShipFactory
 */

/** @type { ShipPartsFactory } */
const whitePartsFactory = new WhitePartsFactory();

/** @type { ShipFactory } */
const whiteshipFactory = new WhiteshipFactory(whitePartsFactory);

/** @type { Ship } */
const whiteship = whiteshipFactory.orderShip("KIM", "yw@deepnatural.ai");

whiteship.printInfo();

/** @type { WhiteProPartsFactory } */
const whiteProPartsFactory = new WhiteProPartsFactory();

/** @type { WhiteshipFactory } */
const whiteshipProFactory = new WhiteshipFactory(whiteProPartsFactory);

/** @type { Ship } */
const whiteProShip = whiteshipProFactory.orderShip("Martin", "margin@email.com");

whiteProShip.printInfo();