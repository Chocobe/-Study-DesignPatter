# 02_03 ``Composite`` 패턴

``Composite`` 패턴은 ``트리구조`` 에서 유용한 패턴 입니다.

트리구조에는 다음과 같은 요소들로 구성되어 있습니다.

* Root Node
* Internal Node
* Leaf Node

<br/>

위의 3가지 요소에서 공통된 ``interface`` 를 추출하여, 이를 구현하도록 구조를 만드는 패턴을 ``Composite`` 패턴 이라고 합니다.

<br/>

각 요소의 공통 부분으로 이루어진 ``interface`` 가 있다면, Client 입장에서는 이 ``interface`` 를 바라보고 사용할 수 있게 되고, 이로인해 Client 는 사용하려는 요소가 어떤 특성을 가졌는지 신경 쓸 필요가 없어집니다.


<br/>


## 장점

* 복잡한 트리구조를 사용하는 Client 는 interface 만 바라보고 사용할 수 있게 됩니다. (편리한 사용)
* Client 의 코드를 수정하지 않고도, 새로운 요소를 추가할 수 있습니다.
* 이로인해, OCP(Open Closed Principle: 개방 폐쇄 원칙) 을 준수하게 됩니다.
* 다형성과 재귀를 자연스럽게 사용할 수 있습니다.


<br/>


## 단점

* 각 요소들의 일반화 (추상화 interface) 를 만들기 어려울 경우, 지나치게 일반화 (억지로) 해야하는 경우가 생길 수 있습니다. (``Composite`` 패턴이 적절치 못한 경우)


<br/>


## 예시코드 시나리오

``LOL`` 의 도란검, 체력포션, 가방, 챔피언(가진 아이템) 을 대상으로 price 를 얻는 기능을 예시로 하였습니다.

* class Component (interface 역할 - ``Composite`` 패턴)
  * class Item extends Component (Component 기능을 가진 아이템)
  * class Bag extends Component (Component 기능을 가진 가방)
  * class Champion extends Component(Component 기능을 가진 챔피온)

<br/>

```javascript
// Component.js
// interface 역할 - Composite 패턴

export default class Component {
  /**
   * @abstract
   * @returns { number }
   */
  getPrice() {
    throw new Error("Component.getPrice() 는 Abstract Method 입니다.");
  }
}
```

<br/>

```javascript
// Item.js
// Component 기능을 가지는 class - 아이템

import Component from "./Component.js";

export default class Item extends Component {
  /** @type { string } */
  #name;

  /** @type { number } */
  #price;

  /**
   * @param { string } name 
   * @param { number } price 
   */
  constructor(name, price) {
    super();
    this.#name = name;
    this.#price = price;
  }

  /**
   * @override
   * @returns { number }
   */
  getPrice() {
    return this.#price;
  }
}
```

<br/>

```javascript
// Bag.js
// Component 기능을 가지는 class - 가방
// Item을 배열로 가짐

import Component from "./Component.js";

export default class Bag extends Component {
  /** @type { Component[] } */
  #components;

  constructor() {
    super();
    this.#components = [];
  }

  /**
   * @param { Component } component
   * @returns { Bag }
   */
  add(component) {
    this.#components.push(component);
    return this;
  }
  
  /**
   * @override
   * @returns { number }
   */
  getPrice() {
    return this.#components
      .reduce((total, component) => total + component.getPrice(), 0);
  }
}
```

<br/>

```javascript
// Champion.js
// Component 기능을 가지는 class - 가방
// Bag을 가짐

import Component from "./Component.js";
import Bag from "./Bag.js";

export default class Champion extends Component {
  /** @type { Bag } */
  #bag;

  constructor() {
    super();
    this.#bag = new Bag();
  }

  /**
   * @param { Component } component 
   * @returns { Champion }
   */
  add(component) {
    this.#bag.add(component);
    return this;
  }

  /**
   * @override
   * @returns { number }
   */
  getPrice() {
    return this.#bag.getPrice();
  }
}
```

<br/>

```javascript
// App.js

import Item from "./Item.js";
import Bag from "./Bag.js";
import Champion from "./Champion.js";

/**
 * @typedef { import("./Component").default } Component
 */

const doranBlade = new Item("도란검", 450);
const healPotion = new Item("체력 물약", 50);

const bag = new Bag();
bag
  .add(doranBlade)
  .add(healPotion);

const champion = new Champion();
champion
  .add(doranBlade)
  .add(healPotion)
  .add(bag);

// 아이템 price
printInfo(doranBlade); // 450

// 아이템 price
printInfo(healPotion); // 50

// 가방안의 아이템 price 총 합
printInfo(bag); // 500

// Champion 이 가진 가방안의 아이템 price 총 합
printInfo(champion); // 1000

/** @param { Component } component */
function printInfo(component) {
  console.log(component.getPrice());
}
```

<br/>

<img src="./readmeAssets/image%204.png"><br/>


<br/>

<hr/><br/>



[ [🚀 최상단으로 이동](https://github.com/Chocobe/-Study-DesignPatter) ]

[ [🐫 ``StructuralPattern`` 으로 이동](https://github.com/Chocobe/-Study-DesignPatter/tree/master/src/_02_StructuralPattern) ]
