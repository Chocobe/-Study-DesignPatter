# 03_01 ``Chain of Responsibilities`` 패턴

``책임 연쇄`` 패턴은 두개의 class로 나누는 구조로 만들 수 있습니다.
* 요청을 보내는 class: ``Sender``
* 요청을 처리하는 class: ``Receiver``

<br/>

``Composite``, ``Decorator`` 패턴과 유사하지만, 가장 큰 차이점은 ``Sender`` 와 ``Receiver`` 의 타입이 다르다는 것입니다.

즉, 요청객체와 처리객체로 분리된 형태 입니다.

<br/>

하나의 객체에서 데이터와 함께 관련 메서드를 함께 구현하는 것이 익숙하지만, 기능을 추가할 수록 해당 class는 여러가지 기능이 한곳에서 구현되는 현상이 생깁니다.

때문에 코드가 복잡해 지며, 유지보수가 어려워 집니다.

<br/>

이를 해결하기 위한 패턴이 ``책임 연쇄`` 패턴입니다.

그리고 RxJS 의 ``pipe()`` 에 넘겨주는 ``콜백 함수`` 가 ``책임 연쇄`` 패턴과 유사해 보입니다.


<br/>


## 장점

* Client 코드의 수정 없이, 기능을 추가할 수 있습니다.
  * OCP(Open Closed Principle: 개방 폐쇄 원칙) 을 준수하게 됩니다.
* Handler 들은 딱 하나의 기능만 가지게 되므로, 코드가 명확해 집니다.
  * SRP(Single Responsibility Principle) 을 준수하게 됩니다.
* ``Chain`` 구성에 따라, 동작 방식이나 동작 순서를 커스터마이징 할 수 있게 됩니다.
  * ``Handler`` 조합 방식에 따라 달라지므로, ``Builder`` 패턴과 함께 쓰면 좋아보입니다.


<br/>


## 단점

* 디버깅이 어려워 집니다.


<br/>


## 예시코드 시나리오

Client 의 특정 메서드를 호출할 때, 이 메서드의 기능을 커스터마이징 할 수 있도록 만들고자 합니다.

<br/>

* class Request (요청 내용을 담은 ``Model`` class)
* class RequestHandler (``Receiver`` 역할의 ``Abstract`` class)
  * class PrintRequestHandler extends RequestHandler (화면 출력 기능의 ``Concrete Chain`` class)
  * class AuthRequestHandler extends RequestHandler (인증 기능의 ``Concrete Chain`` class)
  * class LoggingRequestHandler extends RequestHandler (로깅 기능의 ``Concrete Chain`` class)
* class Client (``Sender`` 역할의 class)

<br/>

```javascript
// Request.js
// 요청 내용을 담은 ``Model`` class

export default class Request {
  /** @type { string } */
  #body;

  /** @param { string } body */
  constructor(body) {
    this.#body = body;
  }

  /** @returns { string } */
  getBody() {
    return this.#body;
  }
  /** @param { string } body */
  setBody(body) {
    this.#body = body;
  }
}
```

<br/>

```javascript
// RequestHandler.js
// ``Receiver`` 역할의 ``Abstract`` class

/**
 * @typedef { import("./Request").default } Request
 */

export default class RequestHandler {
  /** @type { RequestHandler } */
  #nextHandler;

  /** @param { RequestHandler } nextHandler */
  constructor(nextHandler) {
    this.#nextHandler = nextHandler;
  }

  /** @param { Request } request */
  handler(request) {
    if(this.#nextHandler) this.#nextHandler.handler(request);
  }
}
```

<br/>

```javascript
// PrintRequestHandler.js
// 화면 출력 기능의 ``Concrete Chain`` class

import RequestHandler from "./RequestHandler.js";

/**
 * @typedef { import("./Request").default } Request
 */

export default class PrintRequestHandler extends RequestHandler {
  /** @param { RequestHandler } nextHandler */
  constructor(nextHandler) {
    super(nextHandler);
  }

  /**
   * @override
   * @param { Request } request 
   */
  handler(request) {
    super.handler(request);
    console.log(request.getBody());
  }
}
```

<br/>

```javascript
// AuthRequestHandler.js
// 인증 기능의 ``Concrete Chain`` class

import RequestHandler from "./RequestHandler.js";

/**
 * @typedef { import("./Request").default } Request
 */

export default class AuthRequestHandler extends RequestHandler {
  /** @param { RequestHandler } nextHandler */
  constructor(nextHandler) {
    super(nextHandler);
  }

  /**
   * @override
   * @param { Request } request 
   */
  handler(request) {
    console.log("인증 되었습니다.");
    super.handler(request);
  }
}
```

<br/>

```javascript
// LoggingRequestHandler.js
// 로깅 기능의 ``Concrete Chain`` class

import RequestHandler from "./RequestHandler.js";

/**
 * @typedef { import("./Request").default } Request
 */

export default class LoggingRequestHandler extends RequestHandler {
  /** @param { RequestHandler } nextHandler */
  constructor(nextHandler) {
    super(nextHandler);
  }

  /**
   * @override
   * @param { Request } request 
   */
  handler(request) {
    console.log("로깅 되었습니다.");
    super.handler(request);
  }
}
```

<br/>

```javascript
// Client.js
// ``Sender`` 역할의 class

import Request from "./Request.js";

/**
 * @typedef { import("./RequestHandler").default } RequestHandler
 */

export default class Client {
  /** @type { RequestHandler } */
  #requestHandler;

  /** @param { RequestHandler } requestHandler */
  constructor(requestHandler) {
    this.#requestHandler = requestHandler;
  }

  doWork() {
    const request = new Request("안녕하세요");
    this.#requestHandler.handler(request);
  }
}
```

<br/>

```javascript
// App.js

import PrintRequestHandler from "./PrintRequestHandler.js";
import AuthRequestHandler from "./AuthRequestHandler.js";
import LoggingRequestHandler from "./LoggingRequestHandler.js";
import Client from "./Client.js";

const requestHandlerChain = new PrintRequestHandler(
  new AuthRequestHandler(
    new LoggingRequestHandler()
  )
)

const client = new Client(requestHandlerChain);
client.doWork();
```

<br/>

<img src="./readmeAssets/image%209.png"><br/>



<br/>

<hr/><br/>



[ [🚀 최상단으로 이동](https://github.com/Chocobe/-Study-DesignPatter) ]

[ [🐫 ``BehavioralPattern`` 으로 이동](https://github.com/Chocobe/-Study-DesignPatter/tree/master/src/_03_BehavioralPattern) ]
