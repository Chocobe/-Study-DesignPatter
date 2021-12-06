# 02_07 ``Proxy`` 패턴

``Proxy`` 의 사전적 의미는 ``대리인`` 입니다.

``Proxy`` 패턴은 Client가 ``Real Subject (대상객체)`` 에 직접 접근하지 못하게 막는 역할과 동시에, ``Real Subject (대상객체)`` 에 기능을 추가하여 실행시켜 줍니다.

``Proxy`` 의 두가지 기능을 정리하면 다음과 같습니다.
* ``Real Subject(대상객체)`` 에 직접 접근하는 것을 막아 줍니다.
* ``Real Subject(대상객체)`` 에 기능을 추가해 줍니다.

<br/>

기능추가에는 다양한 (거의 무한한) 활용방식이 있으며, 다음은 기능추가에 대한 활용 예 입니다.

* Client 의 ``Real Subject(대상객체)`` 직접 접근 방지 (``Proxy`` 패턴의 공통 기능)
* Lazy Initialization (초기화 지연)
* 권한 확인 기능
* Logging 기능
* Caching 기능
* 실행시간 측정 기능
* etc.


<br/>


## ``Proxy`` 와 ``Decorator`` 의 차이점

``Proxy`` 와 ``Decorator`` 의 ``UML`` 을 보면, 거의 유사한 형태 입니다.

두 패턴의 차이는 구조의 차이가 아닌, 의미의 차이를 가집니다.

먼저 ``Proxy`` 패턴의 의미는 다음과 같습니다.
* Client 가 ``Real Subject(대상객체)`` 에 직접 접근하는 것을 허용하지 않겠다.
* ``Real Subject(대상객체)`` 에 대한 추가 기능을 ``Proxy`` 에서 고정된 형태로 제공한다.
* (``Dynamic Proxy`` 를 사용한다면, 동적으로도 지원할 수 있다고 하지만, 개인적으로 ``Decorator`` 와의 차이점이 없어지는 것 같습니다.)

<br/>

``Decorator`` 패턴의 의미는 다음과 같습니다.
* Client 가 주체적으로 ``Real Subject(대상객체)`` 에 대한 추가기능을 선택하는 방식 입니다.
* Client 에서 사용한 ``Decorator`` 에 따라, 중첩된 형태로 사용할 수 있습니다.


<br/>


## 장점

* 기존 코드를 변경하지 않고도, 새로운 기능을 추가할 수 있습니다.
* (OCP: Open Closed Principle - 개방 폐쇄 원칙 을 준수하게 됩니다.)
* 기존 코드가 해야하는 일을 그대로 유지할 수 있습니다.
* (SRP: Single Responsibility Principle - 단일 책임 원칙 을 준수하게 됩니다.)
* 기능 추가, Lazy Initialization 등, 다양하게 활용할 수 있습니다.


<br/>


## 단점

코드가 복잡해 집니다.


<br/>


## 예시코드 시나리오

``GameServer`` 객체는 게임을 실행시키는 기능을 가지고 있습니다.

이 객체에 ``Proxy`` 패턴을 사용하여, 실행 시간 측정 기능을 추가하고자 합니다.

<br/>

* class GameServer (GameServer 에 대한 interface 역할)
* class DefaultGameServer extends GameServer (GameServer 구현 class이며, GameServer 기본 객체)
* class GameServerProxy extends GameServer (Proxy 역할 class)

<br/>

```javascript
// GameServer.js
// GameServer 에 대한 interface 역할

export default class {
  /** @abstract */
  startGame() {
    throw new Error("GameService.startGame() 은 Abstract Method 입니다.");
  }
}
```

<br/>

```javascript
// DefaultGameServer.js
// GameServer 구현 class이며, GameServer 기본 객체

import GameService from "./GameService.js";

export default class DefaultGameService extends GameService {
  constructor() {
    super();
  }
  
  /** @override */
  startGame() {
    setTimeout(() => {
      console.log("게임을 시작하지...");
    }, 1000);
  }
}
```

<br/>

```javascript
// GameServerProxy.js
// Proxy 역할 class

import GameService from "./GameService.js";
import DefaultGameService from "./DefaultGameService.js";

export default class GameServiceProxy extends GameService {
  /** @type { GameService } */
  #gameService;

  constructor() {
    super();
  }
  
  startGame() {
    if(!this.#gameService) {
      this.#gameService = new DefaultGameService();
    }

    console.time("실행시간: ");
    
    this.#gameService.startGame();

    setTimeout(() => {
      console.timeEnd("실행시간: ");
    }, 1001)
  }
}
```

<br/>

```javascript
// App.js

import GameServiceProxy from "./GameServiceProxy.js";

const gameService = new GameServiceProxy();
gameService.startGame();
```

<br/>

<img src="./readmeAssets/image%208.png"><br/>



<br/>

<hr/><br/>



[ [🚀 최상단으로 이동](https://github.com/Chocobe/-Study-DesignPatter) ]

[ [🐫 ``StructuralPattern`` 으로 이동](https://github.com/Chocobe/-Study-DesignPatter/tree/master/src/_02_StructuralPattern) ]
