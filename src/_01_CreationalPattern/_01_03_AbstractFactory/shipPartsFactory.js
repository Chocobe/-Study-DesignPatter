/**
 * @typedef { import("./Anchor").default } Anchor
 * @typedef { import("./Wheel").default } Wheel
 */

export default class ShipPartsFactory {
  /** @returns { Anchor } */
  createAnchor() {
    throw new Error("ShipPartsFactory 의 'createAnchor()' 를 @Override 해 주세요.");
  }

  /** @returns { Wheel } */
  createWheel() {
    throw new Error("ShipPartsFactory 의 'createWheel()' 을 @Override 해 주세요.");
  }
}