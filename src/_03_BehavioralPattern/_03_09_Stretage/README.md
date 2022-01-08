# 03_09 ``Strategy`` 패턴

``Strategy`` 패턴은 객체의 동작을 어떻게 할 것인가를 ``Client``가 직접 지정해 주는 패턴 입니다.

그래서 ``Strategy`` 패턴을 적용할 경우, 필요에 따라 동작방식을 바꿔서 실행할 수 있습니다.

<br />

``Strategy`` 패턴의 동작방식은 어떤 문제를 해결하기 위한 ``방법(알고리즘)`` 이 여러개 존재할 때, 각각의 ``방법(알고리즘)``을 캡슐화 하고 이를 교환가능하게 합니다.

위에서도 언급했듯이, 사용할 ``방법(알고리즘)`` 을 ``Strategy (전략)`` 으로 바라보고, ``Client``가 직접 ``Strategy (전략)`` 을 선택하는 특징을 가집니다.

<br />

``Strategy (전략)`` 을 선택하는 방법으로는 다음과 같이 만들 수 있습니다.
* 생성자의 인자로 넘겨주기
* 전략변경 메서드 제공하기

<br />

``Javascript`` 에서는 ``Callback`` 으로 념겨주는 방식이 ``Strategy (전략) 패턴`` 으로 보여집니다.


<br />


## ``Strategy (전략) 패턴`` 과 ``State (상태) 패턴`` 의 차이

두 패턴모두 동작을 바꿀 수 있는 공통점이 있습니다.

차이점은 다음과 같습니다.

* ``Strategy (전략)`` 패턴은 특정 상태가 아닌, 직접적인 동작을 지정받아 동작합니다.
* ``State (상태)`` 패턴은 상태에 따라 동작을 정해둔 상태로, 상태에 맞는 동작이 실행 됩니다.
* ``State (상태)`` 패턴은 ``State (상태)`` 내부에서 다른 ``State (상태)``로 변경해 줄 수 있습니다.


<br />


## 장점

* 기존 코드를 변경하지 않고, 새로운 전략을 추가할 수 있습니다.
* 상속 대신, 위임으로 사용하게 됩니다.
* 런타임에서 전략을 변경할 수 있습니다.


<br />


## 단점

* 코드 복잡도가 증가합니다.
* ``Client`` 가 구체적인 전략을 알아야 합니다.


<br />


## 예시코드 시나리오

"무궁화 꽃이 피었습니다." 게임을 ``Strategy (전략)`` 패턴으로 만들어 보겠습니다.

``blueLight()`` 일 때 "무궁화 꽃이" 가 출력되고, ``redLight()`` 일 때 "피었습니다." 가 출력됩니다.

``blueLight()`` 와 ``redLight()`` 는 ``Client``가 선택한 전략으로 동작하게 됩니다.

<br />

* class Speed (``Strategy (전략)`` interface)
  * class NormalSpeed (``Strategy`` 구현 class)
  * class FastSpeed (``Strategy`` 구현 class)
  * class FastestSpeed (``Strategy`` 구현 class)

* class BlueLightRedLight (게임 class)

<br />

```javascript
// Speed.js
// Speed (``Strategy (전략)`` interface)

export default class Speed {
  /** @abstract */
  blueLight() {
    throw new Error("Speed.blueLight() 는 Abstract Method 입니다.");
  }

  /** @abstract */
  redLight() {
    throw new Error("Speed.redLight() 는 Abstract Method 입니다.");
  }
}
```

<br />

```javascript
// NormalSpeed.js
// NormalSpeed (``Strategy`` 구현 class)

import Speed from "./Speed.js";

export default class NormalSpeed extends Speed {
  constructor() {
    super();
  }
  
  /** @override */
  blueLight() {
    console.log("무 궁 화    꽃  이");
  }

  /** @override */
  redLight() {
    console.log("피 었 습 니 다.");
  }
}
```

<br />

```javascript
// FastSpeed.js
// FastSpeed (``Strategy`` 구현 class)

import Speed from "./Speed.js";

export default class FastSpeed extends Speed {
  constructor() {
    super();
  }
  
  /** @override */
  blueLight() {
    console.log("무궁화 꽃이");
  }

  /** @override */
  redLight() {
    console.log("피었습니다.");
  }
}
```

<br />

```javascript
// FastestSpeed.js
// FastestSpeed (``Strategy`` 구현 class)

import Speed from "./Speed.js";

export default class FastestSpeed extends Speed {
  constructor() {
    super();
  }

  /** @override */
  blueLight() {
    console.log("무광꽃이");
  }

  /** @override */
  redLight() {
    console.log("폈슴다.");
  }
}
```

<br />

```javascript
// BlueLightRedLight.js
// class BlueLightRedLight (게임 class)

/**
 * @typedef { import("./Speed").default } Speed
 */

export default class BlueLightRedLight {
  /** @param { Speed } speed */
  blueLight(speed) {
    speed.blueLight();
  }

  /** @param { Speed } speed */
  redLight(speed) {
    speed.redLight();
  }
}
```

<br />

```javascript
import BlueLightRedLight from "./BlueLightRedLight.js";
import NormalSpeed from "./NormalSpeed.js";
import FastSpeed from "./FastSpeed.js";
import FastestSpeed from "./FastestSpeed.js";

const game = new BlueLightRedLight();
game.blueLight(new NormalSpeed());
game.redLight(new FastSpeed());

console.log();

game.blueLight(new FastestSpeed());
game.redLight(new FastestSpeed());
```

<br />

<img src="./readmeAssets/image%2020.png"><br />



<br/>

<hr/><br/>



[ [🚀 최상단으로 이동](https://github.com/Chocobe/-Study-DesignPatter) ]

[ [🐫 ``BehavioralPattern`` 으로 이동](https://github.com/Chocobe/-Study-DesignPatter/tree/master/src/_03_BehavioralPattern) ]
