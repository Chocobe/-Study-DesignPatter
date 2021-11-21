import Ship from "./Ship.js";

export default class ShipFactory {
  /**
   * @param { string } name
   * @param { string } email
   * @returns { Ship }
   */
  orderShip(name, email) {
    this.#validate(name, email);
    this.#prepareFor(name);

    const ship = this._createShip(name);
    this.#sendEmailTo(email, ship);

    return ship;
  }

  /**
   * @param { string } _name
   * @returns { Ship }
   */
  _createShip(_name) {
    throw new Error("ShipFactory.createShip() 을 @Override 해 주세요.");
  }

  /**
   * @param { string } name
   * @param { string } email
   */
  #validate(name, email) {
    if(!name || !name.length) {
      throw new Error("배 이름을 지어주세요");
    }

    if(!email || !email.length) {
      throw new Error("연락처를 남겨주세요");
    }
  }

  /** @param { string } name */
  #prepareFor(name) {
    console.log(`${name} 재작 준비 중 입니다.`);
  }

  /**
   * @param { string } email
   * @param { Ship } ship
   */
  #sendEmailTo(email, ship) {
    console.log(`[${email}] - ${ship.getName()} 재작 준비 중 입니다.`);
  }
}