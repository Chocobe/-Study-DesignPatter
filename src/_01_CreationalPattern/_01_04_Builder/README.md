# 01_04 ``Builder`` 패턴

``Builder`` 패턴은 객체를 생성할 때, 다양한 구성으로 만들 수 있을 때 유용합니다.

(선택적인 구성, 쌍으로 존재해야 유효한 구성 등등..)

<br/>

보통 객체를 생성할 때, 그 객체의 구성을 만들기 위해 ``constructor`` 에 ``인자`` 로 넘겨주게 됩니다.

만약, 초기화가 복잡한 객체라면, ``constructor`` 가 장황하게 되는 상황이 생깁니다.

이 때, ``Builder`` 패턴을 사용하게 되면, 객체를 생성하는 방법 (구성하는 방법) 을 제시하는 방식으로, ``constructor`` 에서 객체의 구성을 하지 않고, ``Builder`` 패턴이 제시하는 방법으로 객체를 구성할 수 있게 해줍니다.

<br/>

추가로, ``Builder`` 패턴의 구성방식을 하나의 메서드로 정의하는 ``Director`` 를 함께 사용할 수 있습니다. (객체 생성 방법을 규격화)

## 장점

* 만들기 복잡한 객체를, ``순차적`` 으로 만들수 있는 ``방법``을 제시할 수 있습니다.
* ``Director`` 까지 사용한다면, ``Builder`` 의 구성 프로세스도 숨길 수 있습니다.
* ``Director`` 는 ``Builder`` 의 객체 생성 방식을 규격화 해 줍니다.
* ``Director`` 에 ``Injection`` 해주는 ``Builder`` 에 따라, 동일한 ``Builder`` 프로세스를 따르면서도 부가적인 기능을 추가할 수 있습니다.
* 불완전한 객체가 생성되는 것을 막아줍니다.


<br/>


## 단점

* ``Builder`` 또는 ``Builder`` 와 ``Director``를 만들어야 하며, 미미하지만 성능을 더 사용합니다.
* 구조가 복잡해 집니다.


<br/>


## 예시코드 시나리오

여행 상품에 대한 프로그램을 만든다는 가정하에, 시나리오는 다음과 같습니다.

* class DetailPlan (여행 상세 계획)
* class TourPlan (여행 상품)

* class TourPlanBuilder (TourPlan 생성용 Builder - Abstract Class)
  * class DefaultTourPlanBuilder extends TourPlanBuilder - 기본 여행 상품 빌더

* class TourPlanDirector (TourPlanBuilder 의 구성 규격화)

<br/>

```javascript
// DetailPlan.js

export default class DetailPlan {
  /**  @type { number } */
  #day

  /** @type { string } */
  #plan

  /**
   * @param { number } day 
   * @param { string } plan 
   */
  constructor(day, plan) {
    this.#day = day;
    this.#plan = plan;
  }

  /** @returns { number } */
  getDay() {
    return this.#day;
  }
  /** @param { number } day */
  setDay(day) {
    this.#day = day;
  }

  /** @return { string } */
  getPlan() {
    return this.#plan;
  }
  /** @param { string } plan */
  setPlan(plan) {
    this.#plan = plan;
  }

  /** @returns { string } */
  printInfo() {
    return `
      \t\tDetailPlan { day: ${this.#day}, plan: ${this.#plan} }
    `;
  }
}
```

<br/>

```javascript
// TourPlan.js

import DetailPlan from "./DetailPlan.js";

export default class TourPlan {
  /** @type { string } */
  #title;

  /** @type { number } */
  #nights;

  /** @type { number } */
  #days;

  /** @type { Date } */
  #startDate;

  /** @type { string } */
  #whereToStay;

  /** @type { DetailPlan[] } */
  #plans;

  /** @returns { string } */
  printInfo() {
    return `
      TourPlan: {
        title: ${this.#title},
        nights: ${this.#nights},
        days: ${this.#days},
        startDate: ${this.#startDate},
        whereToStay: ${this.#whereToStay},
        plans: ${this.#plans?.map(plan => plan.printInfo())},
      }
    `;
  }

  /** @returns { string } */
  getTitle() {
    return this.#title;
  }
  /** @param { string } title */
  setTitle(title) {
    this.#title = title;
  }

  /** @returns { number } nights */
  getNights() {
    return this.#nights;
  }
  /** @param { number } nights */
  setNights(nights) {
    this.#nights = nights;
  }

  /** @returns { number } */
  getDays() {
    return this.#days;
  }
  /** @param { number } days */
  setDays(days) {
    this.#days = days;
  }

  /** @returns { Date } */
  getStartDate() {
    return this.#startDate;
  }
  /** @param { Date } startDate */
  setStartDate(startDate) {
    this.#startDate = startDate;
  }

  /** @returns { string } */
  getWhereToStay() {
    return this.#whereToStay;
  }
  /** @param { string } _whereToStay */
  setWhereToStay(_whereToStay) {
    this.#whereToStay = _whereToStay;
  }

  /** @returns { DetailPlan[] } */
  getPlans() {
    return this.#plans;
  }
  /** @param { DetailPlan[] } plans */
  setPlans(plans) {
    this.#plans = plans;
  }

  /**
   * @param { number } day
   * @param { string } plan
   */
  addPlan(day, plan) {
    this.#plans ?? (this.#plans = []);
    this.#plans.push(new DetailPlan(day, plan));
  }
}
```

<br/>

```javascript
// TourPlanBuilder.js
// (interface 혹은 abstract class 역할)

import TourPlan from "./TourPlan.js";

export default class TourPlanBuilder {
  /** 
   * @abstract 
   * @returns { TourPlanBuilder }
   */
  initTourPlan() {
    throw new Error("TourPlanBuilder.initTourPlan() 은 Abstract Method 입니다.");
  }
  
  /** 
   * @abstract
   * @param { string } _title 
   * @returns { TourPlanBuilder }
   */
  title(_title) {
    throw new Error("TourPlanBuilder.title() 은 Abstract Method 입니다.");
  }

  /**
   * @abstract
   * @param { number } _nights
   * @param { number } _days
   * @returns { TourPlanBuilder }
   */
  nightsAndDays(_nights, _days) {
    throw new Error("TourPlanBuilder.nightsAndDays() 는 Abstract Method 입니다.");
  }

  /**
   * @abstract
   * @param { Date } _startDate
   * @returns { TourPlanBuilder }
   */
  startDate(_startDate) {
    throw new Error("TourPlanBuilder.startDate() 는 Abstract Method 입니다.");
  }

  /**
   * @abstract
   * @param { string } _whereToStay
   * @returns { TourPlanBuilder }
   */
  whereToStay(_whereToStay) {
    throw new Error("TourPlanBuilder.whereToStay() 는 Abstract Method 입니다.");
  }

  /**
   * @abstract
   * @param { number } _day
   * @param { string } _plan
   * @returns { TourPlanBuilder }
   */
  addPlan(_day, _plan) {
    throw new Error("TourPlanBuilder.addPlan() 은 Abstract Method 입니다.");
  }

  /** 
   * @abstract 
   * @returns { TourPlan }
   */
  build() {
    throw new Error("TourPlanBuilder.build() 는 Abstract Method 입니다.");
  }
}
```

<br/>

```javascript
// DefaultTourPlanBuilder.js
// TourPlanBuilder 구현 class

import TourPlan from "./TourPlan.js";
import TourPlanBuilder from "./TourPlanBuilder.js";

export default class DefaultTourPlanBuilder extends TourPlanBuilder {
  /** @type { TourPlan } */
  #tourPlan;
  
  /** 
   * @override 
   * @returns { DefaultTourPlanBuilder }
   */
  initTourPlan() {
    this.#tourPlan = new TourPlan();
    return this;
  }

  #checkTourPlan() {
    if(!this.#tourPlan) {
      throw new Error("initTourPlan() 을 먼저 호출해 주세요");
    }
  }

  /**
   * @override
   * @param { string } title
   * @returns { DefaultTourPlanBuilder }
   */
  title(title) {
    this.#checkTourPlan();
    this.#tourPlan.setTitle(title);
    return this;
  }

  /**
   * @override
   * @param { number } nights
   * @param { number } days
   * @returns { DefaultTourPlanBuilder }
   */
  nightsAndDays(nights, days) {
    this.#checkTourPlan();
    this.#tourPlan.setNights(nights);
    this.#tourPlan.setDays(days);
    return this;
  }

  /**
   * @override
   * @param { Date } startDate
   * @return { DefaultTourPlanBuilder }
   */
  startDate(startDate) {
    this.#checkTourPlan();
    this.#tourPlan.setStartDate(startDate);
    return this;
  }

  /**
   * @override
   * @param { string } whereToStay
   * @returns { DefaultTourPlanBuilder }
   */
  whereToStay(whereToStay) {
    this.#checkTourPlan();
    this.#tourPlan.setWhereToStay(whereToStay);
    return this;
  }

  /**
   * @override
   * @param { number } day
   * @param { string } plan
   * @returns { DefaultTourPlanBuilder }
   */
  addPlan(day, plan) {
    this.#checkTourPlan();
    this.#tourPlan.addPlan(day, plan);
    return this;
  }

  /**
   * @override
   * @returns { TourPlan }
   */
  build() {
    this.#checkTourPlan();
    const resultTourPlan = this.#tourPlan;
    this.#tourPlan = undefined;
    return resultTourPlan;
  }
}
```

<br/>

```javascript
// TourPlanDirector.js
// TourPlanBuilder 에 대한 규격화 class

import TourPlanBuilder from "./TourPlanBuilder.js";

/**
 * @typedef { import("./TourPlan").default } TourPlan
 */

export default class TourPlanDirector {
  /** @type { TourPlanBuilder } */
  #tourPlanBuilder;

  /** @param { TourPlanBuilder } tourPlanBuilder */
  constructor(tourPlanBuilder) {
    this.#tourPlanBuilder = tourPlanBuilder;
  }

  /**
   * 짧은 부산 여행
   * @returns { TourPlan }
   */
  createBusanTripForShort() {
    return this.#tourPlanBuilder.initTourPlan()
      .title("짧은 부산 여행")
      .startDate(new Date(2021, 12, 24))
      .addPlan(0, "KTX 타기")
      .addPlan(0, "놀기")
      .addPlan(0, "SRT 타기")
      .build()
  }

  /**
   * 긴 서울 여행
   * @returns { TourPlan }
   */
  createSeoulTripForLong() {
    return this.#tourPlanBuilder.initTourPlan()
      .title("긴 서울 여행")
      .startDate(new Date(2022, 1, 1))
      .nightsAndDays(2, 3)
      .whereToStay("양재")
      .addPlan(0, "버스 타기")
      .addPlan(0, "맛집 탐방")
      .addPlan(0, "숙소 돌아가기")
      .addPlan(1, "놀기 1")
      .addPlan(2, "놀기 2")
      .build();
  }
}
```

<br/>

```javascript
// App.js

import TourPlanDirector from "./TourPlanDirector.js";
import DefaultTourPlanBuilder from "./DefaultTourPlanBuilder.js";

const director = new TourPlanDirector(new DefaultTourPlanBuilder());

const busanTripShort = director.createBusanTripForShort();
console.log(busanTripShort.printInfo());

const seoulTripLong = director.createSeoulTripForLong();
console.log(seoulTripLong.printInfo());
```



<br/>

<hr/><br/>



[ [🚀 최상단으로 이동](https://github.com/Chocobe/-Study-DesignPatter) ]

[ [🐫 ``CreationalPattern`` 으로 이동](https://github.com/Chocobe/-Study-DesignPatter/tree/master/src/_01_CreationalPattern) ]
