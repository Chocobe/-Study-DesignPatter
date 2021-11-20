/** @typedef { import("./Ship.js").default } Ship */

export default class ShipFactory {
  /** @returns { Ship } */
  orderShip(name, email) {
    this.#isValid(name, email);
    this.#prepareFor(name);

    /** @type { Ship } */
    const ship = this._createShip(name);
    this.#sendEmailTo(email, ship);

    return ship;
  }

  #isValid(name, email) {
    if(!name || !name.length) {
      throw new Error("배 이름을 지어주세요");
    }

    if(!email || !email.length) {
      throw new Error("연락처를 남겨주세요");
    }
  }

  #prepareFor(name) {
    console.log(`\n${name} 만들 준비 중`);
  }

  #sendEmailTo(email, ship) {
    console.log(`${email}: ${ship.name} 다 만들었습니다.\n`);
  }

  // 추상 메서드
  _createShip() {
    throw new Error("_createShip() 메서드 @Override가 필요 합니다.");
  }
}

// /** @typedef { import("./Ship.js").default } Ship */

// export default class ShipFactory {
//   /** @returns { Ship } */
//   orderShip(name, email) {
//     this.#isValid(name, email);
//     this.#prepareFor(name);

//     /** @type { Ship } */
//     const ship = this._createShip(name);
//     this.#sendEmailTo(email, ship);

//     return ship;
//   }

//   /**
//    * @param { string } name 
//    * @param { string } email 
//    */
//   #isValid(name, email) {
//     if(!name || !name.length) {
//       throw new Error("배 이름을 지어주세요");
//     }

//     if(!email || !email.length) {
//       throw new Error("연락처를 남겨주세요");
//     }
//   }

//   /**
//    * @param { string } name 
//    */
//   #prepareFor(name) {
//     console.log(`\n${name} 만들 준비 중`);
//   }

//   /**
//    * @param { string } email 
//    * @param { Ship } ship
//    */
//   #sendEmailTo(email, ship) {
//     console.log(`${email}]: ${ship.name} 다 만들었습니다.\n`)
//   }

//   // 추상 메서드
//   _createShip() {
//     throw new Error("_createShip() 메서드 @Override가 필요 합니다.");
//   }
// }