# 03_05 ``Mediator`` 패턴

복잡한 프로그램의 경우, 각각의 객체들이 서로 얽혀있는 상황이 있습니다.

이러한 경우, 객체간의 의사소통 (메서드 호출) 을 위해, 참조객체를 직접 가지도록 만들게 됩니다.

문제는 이러한 프로그램은 의존성이 얽혀 있어서, 코드가 복잡하고 수정이 어렵습니다.

<br />

``Mediator`` 패턴은 얽혀있는 의존성을, 하나의 ``중재자(Mediator) 객체`` 에서 관리하는 방법 입니다.

그래서 각각의 객체는 의사소통 (메서드 호출) 을 위해, 구체적인 대상 객체를 참조하지 않고, 오직 ``중재자 (Mediator)`` 에게 요청하여 처리하도록 합니다.

<br />

``중재자(Mediator)`` 패턴의 구성요소는 다음과 같습니다.

* ``Colleague``: 서로 얽혀있는 각각의 객체 (동료)
* ``Mediator``: ``Coleague`` 들의 모든 의존성을 가지고, ``Colleague`` 들의 요청을 중계하는 객체

<br />

간단한 예시를 들면 ``중재자 (Mediator)`` 는 공항의 관제탑 역할을 하게 됩니다.

각각의 비행기가 이륙이나 착륙을 위해, 비행기간의 직접 통신이 아닌, 관제탑에 요청을 하는 형태가 유사한 예시입니다.

<br />

즉, 객체들의 모든 의존성은 ``중재자(Mediator)`` 가 모두 가지는 형태가 됩니다.


<br/>


## 장점

* ``Mediator`` 를 ``interface`` 로 추상화까지 하게되면, 새로운 ``중재자(Mediator)`` 를 만들어 사용해도, 기존의 객체를 수정하지 않고 적용시킬 수 있습니다.
* ``Colleague`` 들의 코드가 간결해 집니다.
* ``Colleague`` 들의 테스트 코드를 작성하기 쉬워집니다.


<br />


## 단점

* 관련된 모든 복잡도와 의존성이 ``중재자(Mediator)`` 에 몰려있게 되어, ``중재자(Mediator)`` 의 코드가 어려워 집니다.


<br />


## 예시코드 시나리오

호텔의 손님이 수건을 요청할 수 있고, 점심을 주문할 수 있는 프로그램을 만들어 보겠습니다.

``중재자 (Mediator)`` 패턴을 사용하지 않는다면, ``손님 (Guest)``가 직접 ``청소 서비스 (CleaningService)``와 ``레스토랑 (Restaurant)`` 에 대한 정보를 가지고 요청해야 합니다.

그리고 ``레스토랑 (Restaurant)`` 의 청소도 ``청소 서비스 (CleaningService)`` 에서 지원받는다면, ``레스토랑 (Restaurant)`` 에도 ``청소 서비스 (CleaningService)`` 를 참조해야 합니다.

이를 ``FrontDesk`` 라는 ``중재자 (Mediator)``에서 해소하도록 만들 수 있습니다.

<br />

* class FrontDesk (``Mediator`` 역할 객체 - ``interface``로 추상화까지 하면, 더 유연하게 만들 수 있습니다.)
* class CleaningService (청소 담당 객체)
* class Restaurant (레스토랑 객체)
* class Guest (손님 객체)

<br />

```javascript
// FrontDesk.js
// ``Mediator`` 역할 객체 - ``interface``로 추상화까지 하면, 더 유연하게 만들 수 있습니다.

import CleaningService from "./CleaningService.js";
import Restaurant from "./Restaurant.js";

/**
 * @typedef { import("./Guest").default } Guest
 */

export default class FrontDesk {
  /** @type { CleaningService } */
  _cleaningService;

  /** @type { Restaurant } */
  _restaurant;
  
  constructor() {
    this._cleaningService = new CleaningService(this);
    this._restaurant = new Restaurant(this);
  }

  /** @returns { string } */
  getRoomNumber(guestId) {
    return `🐫🐫🐫 - ${guestId}`;
  }
  
  /**
   * @param { Guest } guest 
   * @param { number } numberOfTowers 
   */
  getTowers(guest, numberOfTowers) {
    this._cleaningService.getTowers(guest.getId(), numberOfTowers);
  }

  /**
   * 
   * @param { Guest } guest 
   * @param { string } menu 
   */
  dinner(guest, menu) {
    this._restaurant.dinner(guest.getId(), menu);
  }
}
```

<br />

```javascript
// CleaningService.js
// 청소 담당 객체

/**
 * @typedef { import("./FrontDesk").default } FrontDesk
 */

export default class CleaningService {
  /** @type { FrontDesk } */
  _frontDesk;

  /** @param { FrontDesk } frontDesk */
  constructor(frontDesk) {
    this._frontDesk = frontDesk;
  }

  /**
   * @param { number } guestId 
   * @param { number } numberOfTowers 
   */
  getTowers(guestId, numberOfTowers) {
    const roomNumber = this._frontDesk.getRoomNumber(guestId);
    console.log(`${roomNumber} 에 수건 ${numberOfTowers} 개 전달`);
  }
}
```

<br />

```javascript
// Restaurant.js
// 레스토랑 객체

/**
 * @typedef { import("./FrontDesk").default } FrontDesk
 */

export default class Restaurant {
  /** @type { FrontDesk } */
  _frontDesk;

  /** @param { FrontDesk } frontDesk */
  constructor(frontDesk) {
    this._frontDesk = frontDesk;
  }

  /**
   * 
   * @param { number } guestId 
   * @param { string } menu 
   */
  dinner(guestId, menu) {
    const roomNumber = this._frontDesk.getRoomNumber(guestId);
    console.log(`점심 ${menu} (을)를 ${roomNumber} 에 전달 !!`);
  }
}
```

<br />

```javascript
// Guest.js
// 손님 객체

/**
 * @typedef { import("./FrontDesk").default } FrontDesk
 */

export default class Guest {
  /** @type { FrontDesk } */
  _frontDesk;

  /** @type { number } */
  _id;

  /** 
   * @param { FrontDesk } frontDesk 
   * @param { number } id
   */
  constructor(frontDesk, id) {
    this._frontDesk = frontDesk;
    this._id = id;
  }

  /** @returns { number } */
  getId() {
    return this._id;
  }

  /** @param { number } numberOfTowers */
  getTowers(numberOfTowers) {
    this._frontDesk.getTowers(this, numberOfTowers);
  }

  /** @param { string } menu */
  dinner(menu) {
    this._frontDesk.dinner(this, menu);
  }
}
```

<br />

```javascript
// App.js

import FrontDesk from "./FrontDesk.js";
import Guest from "./Guest.js";

const frontDesk = new FrontDesk();
const guest = new Guest(frontDesk, 7);

guest.getTowers(3);
guest.getTowers(1);

guest.dinner("스테이크");
guest.dinner("오뚜기 스프");
```



<br/>

<hr/><br/>



[ [🚀 최상단으로 이동](https://github.com/Chocobe/-Study-DesignPatter) ]

[ [🐫 ``BehavioralPattern`` 으로 이동](https://github.com/Chocobe/-Study-DesignPatter/tree/master/src/_03_BehavioralPattern) ]
