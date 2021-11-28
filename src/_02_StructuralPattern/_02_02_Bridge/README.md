# 02_02 ``Bridge`` 패턴

1개의 interface 를 구체화 한 class 가 있습니다.

이 class 와 동일한 계층구조를 가지는 새로운 class 를 생성할 때 (확장), 이 계층에서 구현했던 모든 Method 를 다시 구현해야 합니다.

이 때, 공통적으로 구현해야 되는 부분을 중간 계층으로 분리하는 방식을 ``Bridge`` 패턴 이라고 합니다.

<br/>

좀 더 간단하게 표현하면, 추상적인 것과 구체적인 것을 분리한 후, 이를 연결하는 패턴 입니다.

<br/>

특정 계층과 동일한 계층을 확장할 때, 구현에 중복코드가 발생한다면 ``Bridge`` 패턴을 적용하여, 계층을 분리하는 것이 좋습니다.


<br/>


## 장점

* 추상화와 구체화를 분리할 수 있습니다.
* 구체적인 코드의 변경 없이도, 같은 계층의 class 를 확장할 수 있습니다.
* OCP(Open Closed Principle: 개방 폐쇄 원칙) 을 따르게 됩니다.
* SRP(Single Reponsibility Principle: 단일 책임 원칙) 을 따르게 됩니다.


<br/>


## 단점

* 계층구조가 늘어나므로, 복잡도가 커집니다.


<br/>


## 예시코드 시나리오

``LOL`` 이라는 게임의 챔피언과 스킨을 예시로 하였습니다.

각각의 챔피언이 있고, 스킨에 따라 챔피언 Method 에 영향을 줍니다.

<br/>

* class Skin (interface 역할)
  * class KDA extends Skin (Skin 구현 class)
  * class PoolParty extends Skin (Skin 구현 class)

* class Champion (interface 역할)
  * class DefaultChampion extends Champion (``Bridge`` 역할)
    * class 아리 extends DefaultChampion (아리 챔피언 class)
    * class 아칼리 extends DefaultChampion (아칼리 챔피언 class)

<br/>

```javascript
// Skin.js
// interface 역할

export default class Skin {
  /**
   * @abstract
   * @returns { string }
   */
  getName() {
    throw new Error("Skin.getName() 은 Abstract Method 입니다.");
  }
}
```

<br/>

```javascript
// KDA.js
// Skin 구현 class (KDA 스킨)

import Skin from "./Skin.js";

export default class KDA extends Skin {
  /**
   * 스킨명
   * @type { string }
   */
  #name;

  constructor() {
    super();
    this.#name = "KDA";
  }

  /**
   * @override
   * @returns { string }
   */
  getName() {
    return this.#name;
  }
}
```

<br/>

```javascript
// PoolParty.js
// Skin 구현 class (수영장 스킨)

import Skin from "./Skin.js";

export default class PoolParty extends Skin {
  /** @type { string } */
  #name;

  constructor() {
    super();
    this.#name = "수영장";
  }

  /**
   * @override
   * @returns { string }
   */
  getName() {
    return this.#name;
  }
}
```

<br/>

```javascript
// Champion.js
// interface 역할

export default class Champion {
  /** @abstract */
  move() {
    throw new Error("Champion.move() 는 Abstract Method 입니다.");
  }

  /** @abstract */
  skillQ() {
    throw new Error("Champion.skillQ() 는 Abstract Method 입니다.");
  }

  /** @abstract */
  skillW() {
    throw new Error("Champion.skillW() 는 Abstract Method 입니다.");
  }

  /** @abstract */
  skillE() {
    throw new Error("Champion.skillE() 는 Abstract Method 입니다.");
  }

  /** @abstract */
  skillR() {
    throw new Error("Champion.skillR() 는 Abstract Method 입니다.");
  }
}
```

<br/>

```javascript
// DefaultChampion.js
// Champion interface 와 구체화 class 간의 Bridge 역할 class (Bridge Pattern)

import Champion from "./Champion.js";

/**
 * @typedef { import("./Skin").default } Skin
 */

export default class DefaultChampion extends Champion {
  /**
   * 챔피언명
   * @type { string }
   */
  #name

  /**
   * @type { Skin }
   */
  #skin

  /**
   * @param { string } name
   * @param { Skin } skin
   */
  constructor(name, skin) {
    super();
    this.#name = name;
    this.#skin = skin;
  }

  /** @override */
  move() {
    console.log(`${this.#skin.getName()} ${this.#name} - move`);
  }

  /** @override */
  skillQ() {
    console.log(`${this.#skin.getName()} ${this.#name} Skill Q`);
  }
  
  /** @override */
  skillW() {
    console.log(`${this.#skin.getName()} ${this.#name} Skill W`);
  }

  /** @override */
  skillE() {
    console.log(`${this.#skin.getName()} ${this.#name} Skill E`);
  }
  
  /** @override */
  skillR() {
    console.log(`${this.#skin.getName()} ${this.#name} Skill R`);
  }
}
```

<br/>

```javascript
// 아리.js
// DefaultChampion 을 상속받는 챔피언 구현 class (아리)
// DI: Skin

import DefaultChampion from "./DefaultChampion.js";

/**
 * @typedef { import("./Skin").default } Skin
 */

export default class 아리 extends DefaultChampion {
  /** @param { Skin } skin */
  constructor(skin) {
    super("아리", skin);
  }
}
```

<br/>

```javascript
// 아칼리.js
// DefaultChampion 을 상속받는 챔피언 구현 class (아리)
// DI: Skin

import DefaultChampion from "./DefaultChampion.js";

/**
 * @typedef { import("./Skin").default } Skin
 */

export default class 아칼리 extends DefaultChampion {
  /** @param { Skin } skin */
  constructor(skin) {
    super("아칼리", skin);
  }
}
```

<br/>

```javascript
// App.js

import 아리 from "./아리.js";
import 아칼리 from "./아칼리.js";

import KDA from "./KDA.js";
import PoolParty from "./PoolParty.js";

const kda아리 = new 아리(new KDA());
kda아리.move();
kda아리.skillQ();
kda아리.skillW();
kda아리.skillE();
kda아리.skillR();

const poolParty아리 = new 아리(new PoolParty());
poolParty아리.move();
poolParty아리.skillQ();
poolParty아리.skillW();
poolParty아리.skillE();
poolParty아리.skillR();

const kda아칼리 = new 아칼리(new KDA());
kda아칼리.move();
kda아칼리.skillQ();
kda아칼리.skillW();
kda아칼리.skillE();
kda아칼리.skillR();

const poolParty아칼리 = new 아칼리(new PoolParty());
poolParty아칼리.move();
poolParty아칼리.skillQ();
poolParty아칼리.skillW();
poolParty아칼리.skillE();
poolParty아칼리.skillR();
```



<br/>

<hr/><br/>



[ [🚀 최상단으로 이동](https://github.com/Chocobe/-Study-DesignPatter) ]

[ [🐫 ``StructuralPattern`` 으로 이동](https://github.com/Chocobe/-Study-DesignPatter/tree/master/src/_02_StructuralPattern) ]
