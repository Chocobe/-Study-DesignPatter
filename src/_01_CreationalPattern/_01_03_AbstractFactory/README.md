# 01_03 ``Abstract Factory`` 패턴

``Abstract Factory`` 패턴도 ``Factory Method`` 패턴과 유사한 ``구체적인 Instance 생성`` 을 위한 패턴 입니다.

용도에서는 동일한 패턴이지만, ``Client (사용자)`` 입장에서 차이점을 갖습니다.

``Abstract Factory``은 ``구체적인 Instance`` 에 대한 타입을 추상화 한 형태로 구현한 방법 입니다.

즉, ``Client`` 에서 ``Abstract Factory`` 객체를 생성할 때, ``Product Instance`` 를 생성할 정보를 주어야 하는 방식 입니다.

이는 ``Factory Method`` 패턴을 생성할 때, ``Dependency Injection`` 형식으로 ``Product Class`` 를 제공합니다.


<br/>


## ``장점``

``Factory Method`` 패턴과 동일 합니다.


<br/>


## ``단점``
``Factory Method`` 패턴과 동일 합니다.


<br/>


## ``Abstract Factory`` 패턴과 ``Factory Method`` 패턴의 차이점

``Abstract Factory`` 패턴의 ``Factory`` 객체를 생성할 때는, ``Product Instance`` 의 생성 방법을 넘겨주어야 합니다.

두 패턴의 개념을 요약하면 다음과 같습니다.

* ``Factory Method Pattern``
  * 구체적인 ``Product Instance 생성과정`` 을 하위 또는 구체적인 ``Factory Class`` 에 작성하는 방식

* ``Abstract Factory Pattern``
  * 생성과정을 구체적인 ``Factory Instance`` 에 의존하지 않고 만들수 있게 작성하는 방식


<br/>


아래의 코드는 ``AbstractFactory`` 패턴을 Javascript 로 구현한 결과 입니다.

예제의 시나리오는 다음과 같습니다.

* class Anchor
  * class WhiteAnchor

* class ShipPartsFactory
  * class WhitePartsFactory

* class Ship
  * class Whiteship

* class ShipFactory
  * class WhiteshipFactory extends ShipFactory (흰색 타입의 Ship 객체 생성용  Factory) - WhitePartsFactory 객체로 의존성 주입
  * class WhiteshipProFactory extends ShipFactory (흰색 타입의 Ship 객체 생성용  Factory) - WhiteProPartsFactory 객체로 의존성 주입

<br/>

```javascript
// anchor.js

export default class Anchor {
  /** @type { string } */
  #feature;

  /**
   * @param { string } feature
   */
  constructor(feature) {
    this.#feature = feature;
  }

  /** @returns { string } */
  getFeature() {
    return this.#feature;
  }
  /** @param { string } feature */
  setFeature(feature) {
    this.#feature = feature;
  }
}
```

<br/>

```javascript
// whiteAnchor.js

import Anchor from "./anchor.js";

export default class WhiteAnchor extends Anchor {
  constructor() {
    super("흰색 Anchor");
  }
}
```

<br/>

```javascript
// shipPartsFactory.js

/**
 * @typedef { import("./anchor").default } Anchor
 */

export default class ShipPartsFactory {
  /** @returns { Anchor } */
  createAnchor() {
    throw new Error("ShipPartsFactory 의 createAnchor() 를 @Override 해 주세요");
  }
}
```

<br/>

```javascript
// whitePartsFactory.js

import ShipPartsFactory from "./shipPartsFactory.js";
import WhiteAnchor from "./whiteAnchor.js";

/**
 * @typedef { import("./anchor").default } Anchor
 */

export default class WhitePartsFactory extends ShipPartsFactory {
  constructor() {
    super();
  }
  
  /** 
   * @Override 
   * @returns { Anchor }
   */
  createAnchor() {
    return new WhiteAnchor();
  }
}
```

<br/>

```javascript
// ship.js

/**
 * @typedef { import("./anchor").default } Anchor
 */

export default class Ship {
  /** @type { string } */
  #name;
  
  /** @type { string } */
  #type;
  
  /** @type { string } */
  #color;
  
  /** @type { string } */
  #logo;
  
  /** @type { Anchor } */
  #anchor;

  /** @returns { string } */
  getName() {
    return this.#name;
  }
  /** @param { string } name */
  setName(name) {
    this.#name = name;
  }

  /** @returns { string } */
  getType() {
    return this.#type;
  }
  /** @param { string } type */
  setType(type) {
    this.#type = type;
  }

  /** @returns { string } */
  getColor() {
    return this.#color;
  }
  /** @param { string } color */
  setColor(color) {
    this.#color = color;
  }

  /** @returns { string } */
  getLogo() {
    return this.#logo;
  }
  /** @param { string } logo */
  setLogo(logo) {
    this.#logo = logo;
  }

  /** @returns { Anchor } */
  getAnchor() {
    return this.#anchor;
  }
  /** @param { Anchor } anchor */
  setAnchor(anchor) {
    this.#anchor = anchor;
  }

  printInfo() {
    console.log(`
      Ship {
        name: ${this.#name},
        type: ${this.#type},
        color: ${this.#color},
        logo: ${this.#logo},
        anchor: ${this.#anchor.getInfo()},
      };
    `)
  }
}
```

<br/>

```javascript
// whiteship.js
import Ship from "./ship.js";

/**
 * @typedef { import("./anchor.js").default } Anchor
 */

export default class Whiteship extends Ship {
  /**
   * @param { string } name
   * @param { Anchor } anchor
   */
  constructor(name, anchor) {
    super();
    this.setName(name);
    this.setType("whiteship");
    this.setColor("#fff");
    this.setLogo("🚀");
    this.setAnchor(anchor);
  }
}
```

<br/>

```javascript
// shipFactory.js

/**
 * @typedef { import("./ship").default } Ship
 */

export default class ShipFactory {
  /**
   * @param { string } name
   * @param { string } email
   */
  orderShip(name, email) {
    this.#validate(name, email);
    this.#prepareFor(name);

    const ship = this._createShip(name);
    #sendEmailTo(email, ship);

    return ship;
  }

  /**
   * @param { string } name
   * @returns { Ship }
   */
  _createShip(name) {
    throw new Error("ShipFactory 의 _createShip() 을 @Override 해주세요.");
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

  /** @param { string } */
  #prepareFor(name) {
    console.log(`${name} 제작 준비 중 입니다.`);
  }

  /**
   * @param { string } email
   * @param { Ship } Ship
   */
  #sendEmailTo(email, ship) {
    console.log(`[${email}] - ${ship.getName()} 재작 완료 !!`);
  }
}
```

<br/>

```javascript
// whiteshipFactory.js

import ShipFactory from "./shipFactory.js";

/**
 * @typedef { import("./shipPartsFactory").default } ShipPartsFactory
 */

export default class WhiteshipFactory extends ShipFactory {
  /** @type { ShipPartsFactory } */
  #shipPartsFactory;

  /** @param { ShipPartsFactory } shipPartsFactory */
  constructor(shipPartsFactory) {
    super();
    this.#shipPartsFactory = shipPartsFactory;
  }
  
  /**
   * @override
   * @param { string } name
   */
  _createShip(name) {
    return new Whiteship(name, this.#shipPartsFactory.createAnchor());
  }
}
```

<br/>

```javascript
// App.js

import WhitePartsFactory from "./whitePartsFactory.js";
import WhiteshipFactory from "./whiteshipFactory.js";

const whitePartsFactory = new WhitePartsFactory();
const whiteshipFactory = new WhiteshipFactory(whitePartsFactory);

const whiteship = whiteshipFactory.orderShip("KIM", "ye@deepnatural.ai");

whiteship.printInfo();
```


<br/><br/>


## ``Whiteship`` 에 영향없이, ``WhiteshipPro`` 확장하기

Pro 버전의 ``Whiteship`` 객체를 추가한다면, 다음과 같습니다.

* class WhiteProAnchor extends Anchor (Pro 버전의 White Anchor)
* class WhiteProPartsFactory extends ShipPartsFactory (Pro 버전의 White Parts Factory)

<br/>

```javascript
// whiteProAnchor.js

import Anchor from "./anchor.js";

export default class WhiteProAnchor extends Anchor {
  constructor() {
    super("흰색 Pro Anchor");
  }
}
```

<br/>

```javascript
// whiteProPartsFactory.js

import ShipPartsFactory from "./shipPartsFactory.js";
import WhiteProAnchor from "./whiteProAnchor.js";

export default class WhiteProPartsFactory extends ShipPartsFactory {
  constructor() {
    super();
  }

  /** 
   * @Override 
   * @returns { Anchor }
   */
  createAnchor() {
    return new WhiteProAnchor();
  }
}
```

<br/>

추가한 ``WhiteProPartsFactory`` 를 사용하면, ``WhiteProAnchor`` 가 달린 ``Whiteship`` 을 생성할 수 있게 되었습니다.

<br/>

```javascript
import WhitePartsFactory from "./whitePartsFactory.js";
import WhiteProPartsFactory from "./whiteProPartsFactory.js";

import WhiteshipFactory from "./whiteshipFactory.js";

// Whiteship 생성
const whitePartsFactory = new WhitePartsFactory();
const whiteshipFactory = new WhiteshipFactory(whitePartsFactory);

const whiteship = whiteshipFactory.orderShip("Kim", "yw@deepnatural.ai");

whiteship.printInfo();

// Whiteship Pro 생성
const whiteProPartsFactory = new WhiteProPartsFactory();
const whiteshipProFactory = new WhiteshipFactory(whiteProPartsFactory);

const whiteshipPro = whiteshipProFactory.orderShip("Martin", "margin@email.com");

whiteshipPro.printInfo();
```

<br/>

``Factory Method`` 패턴에서는 ``Factory Class`` 를 새로 만들었지만, ``Abstract Factory`` 패턴에서는 ``Factory Instance`` 생성시에 넘겨주는 ``Abstract Factory`` 를 추가하는 방식으로 동작하게 되었습니다.

지금까지 코드의 실행 결과는 다음과 같습니다.

<img src="./readmeAssets/Frame%201.png" width="700px">



<br/>

<hr/><br/>



[ [🚀 최상단으로 이동](https://github.com/Chocobe/-Study-DesignPatter) ]

[ [🐫 ``CreationalPattern`` 으로 이동](https://github.com/Chocobe/-Study-DesignPatter/tree/master/src/_01_CreationalPattern) ]
