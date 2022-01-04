# 03_07 ``Observer`` 패턴

다수의 객체 (Observer) 가 특정 객체 (Observable)의 상태 변화를 감지하고, 알림을 받는 패턴 입니다.

마치 이벤트와 리스너 처럼 동작하도록 만드는 패턴 입니다.

<br />

``특정 객체 (Observable)`` 은 최소 다음과 같은 메서드를 제공해야 합니다.

* ``subscribe()``: ``Observer``를 구독자로 등록하는 메서드 입니다. - ``register()`` 로 명명하기도 합니다.
* ``unsubscribe()``: ``Observer``를 구독해지 시켜주는 메서드 입니다. - ``unregister()`` 로 명명하기도 합니다.

그리고 상태변경 및 구독자에게 알려주는 동작을 할 메서드가 필요 합니다.

<br />


## 장점

* 상태를 변경시켜줄 객체 (Publisher) 와 변경을 감지하는 객체 (Subscriber) 의 관계를 느슨하게 유지할 수 있습니다.
* 런타임에서도 ``Observer`` 를 등록/해지 할 수 있습니다.
* ``Subject`` 의 상태를 주기적으로 조회 (``Polling`` 방식) 하지 않고, 자동으로 상태변경을 감지하고 처리할 수 있습니다.


<br />


## 단점

* 코드 복잡도가 증가 합니다.
* ``unsubscribe()`` 하지않은 ``Subscriber`` 들은, 메모리 누수 (``Memory Leak``) 가 될 수 있으므로, ``unsubscribe()`` 를 사용하여 메모리 관리를 해야 합니다.
  * 실수로 ``unregister()`` 를 하지 않았더라도, 자동으로 메모리를 관리하고자 한다면, ``weakMap`` 또는 ``weakSet`` 을 사용해야 합니다.
* 메모리 사용량이 증가 합니다.

<br />


## 예시코드 시나리오

사용자가 특정 ``subject`` 에 구독한 상태에서는, 해당 ``subject`` 에 글이 올라올 때 자동으로 발송해 주는 프로그램을 구현해 보겠습니다.

<br />

* class Subscriber (구독자 ``interface`` 역할)
* class User (Subscriber interface 의 Concrete Class)
* class ChatServer (채팅 서버 - 구독자 등록/해지/메시지 전달 을 담당할 class 입니다.)

<br />

```javascript
// Subscriber.js
// class Subscriber (구독자 ``interface`` 역할)
export default class Subscriber {
  /**
   * @abstract
   * @returns { string }
   */
  getName() {
    throw new Error("Subscriber.getName() 은 Abstract Method 입니다.");
  }

  /** @param { string } message */
  handleMessage(message) {
    throw new Error("Subscriber.handleMessage() 는 Abstract Method 입니다.");
  }
}
```

<br />

```javascript
// User.js
// class User (Subscriber interface 의 Concrete Class)

import Subscriber from "./Subscriber.js";

export default class User extends Subscriber {
  /** @type { string } */
  #name;

  /** @param { string } name */
  constructor(name) {
    super();
    this.#name = name;
  }

  /**
   * @override
   * @returns { string }
   */
  getName() {
    return this.#name;
  }

  /**
   * @override
   * @param { string } message 
   */
  handleMessage(message) {
    console.log(`수신자: ${this.#name} - ${message}`);
  }
}
```

<br />

```javascript
// ChatServer.js
// class ChatServer (채팅 서버 - 구독자 등록/해지/메시지 전달 을 담당할 class 입니다.)

/**
 * @typedef { import("./Subscriber").default } Subscriber
 */

export default class ChatServer {
  /** @type {{ [key: string]: Subscriber[] }} */
  #subscribers;

  constructor() {
    this.#subscribers = {};
  }

  /**
   * @param { string } subject 
   * @param { Subscriber } subscriber 
   */
  subscribe(subject, subscriber) {
    this.#subscribers[subject]
      ? this.#subscribers[subject].push(subscriber)
      : this.#subscribers[subject] = [subscriber]
  }

  /**
   * @param { string } subject 
   * @param { Subscriber } subscriber 
   */
  unsubscribe(subject, subscriber) {
    if (!this.#subscribers[subject]) return

    const idx = this.#subscribers[subject].findIndex(subscriber);
    !isNil(idx) && this.#subscribers[subject].splice(idx, 1);
  }

  /**
   * 
   * @param { string } subject 
   * @param { Subscriber } subscriber 
   * @param { string } message 
   */
  sendMessage(subject, subscriber, message) {
    if (!this.#subscribers[subject]) return

    const resultMessage = `[작성자: ${subscriber.getName()}] - ${message}`;
    this.#subscribers[subject].forEach(s => s.handleMessage(resultMessage));
  }
}
```

<br />

```javascript
// Client.js
// CareTaker 역할 class

import ChatServer from "./ChatServer.js";
import User from "./User.js";

const chatServer = new ChatServer();

const user1 = new User("영우");
const user2 = new User("초코비");

chatServer.subscribe("디자인 패턴", user1);
chatServer.subscribe("디제이 맥스", user1);
chatServer.subscribe("디자인 패턴", user2);

chatServer.sendMessage("디자인 패턴", user1, "옵저버 패턴 스터디 중 입니다.");
chatServer.sendMessage("디자인 패턴", user2, "이전에 공부한 패턴들.. 벌써 까먹은거 같아요...");
chatServer.sendMessage("디제이 맥스", user1, "디제이 맥스 재밌어요 !!");
```

<br />

<img src="./readmeAssets/image%2015.png" width="700px"><br />



<br/>

<hr/><br/>



[ [🚀 최상단으로 이동](https://github.com/Chocobe/-Study-DesignPatter) ]

[ [🐫 ``BehavioralPattern`` 으로 이동](https://github.com/Chocobe/-Study-DesignPatter/tree/master/src/_03_BehavioralPattern) ]
