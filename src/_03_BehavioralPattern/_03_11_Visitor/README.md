# 03_11 ``Visitor`` 패턴

``Visitor`` 패턴은 기존의 코드를 수정하지 않고, 새로운 기능을 추가하는 패턴 입니다.

``Visitor`` 패턴의 특징은 연산의 대상 (``Visitor`` 객체) 를 사용하는 곳 (``Element`` 객체) 마다 서로다른 로직을 수행할 수 있는 구조를 가집니다.

그리고 추상화가 2번 적용된 방식으로 동작합니다.

* ``Double Dispatch``
  * 타입 언어 (``Java``) 에서는 추상화 객체의 메서드를 호출할 때, ``Concrete Class`` 를 찾은 후에 그 메서드를 호출합니다.
  * 이러한 과정을 ``Method Dispatch`` 라고 합니다.
  * ``Method Dispatch`` 를 2번 수행하는 방식을 ``Double Dispatch`` 라고 합니다.
  * ( ``다형성`` 을 사용한 ``Method`` 호출 원리)

<br />

``Visitor`` 패턴의 구성요소는 다음과 같습니다.

* ``Visitor``: 방문자 객체의 ``interface`` 이며, 각 ``Visitor Concrete Class`` 마다 고유한 메서드를 구현하게 됩니다.
  * ``Element`` 에 제공할 메서드는 ``Element`` 객체를 인자로 받아서, ``Element`` 의 ``Concrete Class`` 에 따라 ``분기`` 또는 ``Overloading`` 메서드를 제공 합니다.

* ``Element``: ``Visitor`` 객체에 위임하는 ``accept(visitor)`` 메서드를 제공하는 ``interface`` 입니다.


<br />


## 장점

* 기존 코드를 수정하지 않고, ``Visitor`` 를 추가할 수 있습니다.
* ``Visitor`` 별 동작을 하나의 ``Class``로 묶을 수 있습니다.


<br />


## 단점

* 코드 구조가 매우 어렵고 복잡합니다.
* ``Visitor`` 는 ``Element``의 모든 ``Concrete Class``를 알고, 해당 메서드 또는 분기를 제공해야 합니다.
* ``Element`` 삭제 시, 모든 ``Visitor`` 를 수정해야 합니다.


<br />


## 예시코드 시나리오

휴대폰, 시계 등, 화면을 가진 디바이스에 도형을 출력하는 로직을 구현해 보겠습니다.

여기서 도형은 ``Element`` 객체로서 만들고, 디바이스는 ``Visitor`` 객체로 만들겠습니다.

<br />

이는 도형을 화면에 출력할 때, 해당 디바이스의 스펙에 맞도록 동작해야 하기 때문입니다.

<br />

* class Shape (도형 interface 역할 - ``Element``)
  * class Rectangle extends Shape (사각형 객체 - ``Element``)
  * class Triangle extends Shape (삼각형 객체 - ``Element``)
  * class Circle extends Shape (원 객체 - ``Element``)
  * class Star extends Shape (별 객체 - ``Element``)

* class Device (디바이스 interface 역할 - ``Visitor``)
  * class Phone extends Device (폰 객체 - ``Visitor``)
  * class Watch extends Device (시계 객체 - ``Visitor``)
  * class Pad extends Device (패드 객체 - ``Visitor``)

<br />

```javascript
// Shape.js
// 도형 interface 역할 - ``Element``

/**
 * @typedef { import("./Device").default } Device
 */

export default class Shape {
  /**
   * @abstract
   * @param { Device } _device 
   */
  accept(_device) {
    throw new Error("Shape.accept() 는 Abstract Method 입니다.");
  }
}
```

<br />

```javascript
// Rectangle.js
// 사각형 객체 - ``Element``

import Shape from "./Shape.js";

/**
 * @typedef { import("./Device").default } Device
 */

export default class Rectangle extends Shape {
  constructor() {
    super();
  }

  /**
   * @override
   * @param { Device } device 
   */
  accept(device) {
    device.print(this);
  }
}
```

<br />

```javascript
// Triangle.js
// 삼각형 객체 - ``Element``

import Shape from "./Shape.js";

/**
 * @typedef { import("./Device").default } Device
 */

export default class Triangle extends Shape {
  constructor() {
    super();
  }

  /**
   * @override
   * @param { Device } device 
   */
  accept(device) {
    device.print(this);
  }
}
```

<br />

```javascript
// Circle.js
// 원 객체 - ``Element``

import Shape from "./Shape.js";

/**
 * @typedef { import("./Device").default } Device
 */

export default class Circle extends Shape {
  constructor() {
    super();
  }
  
  /**
   * @override
   * @param { Device } device
   */
  accept(device) {
    device.print(this);
  }
}
```

<br />

```javascript
// Star.js
// 별 객체 - ``Element``

import Shape from "./Shape.js";

/**
 * @typedef { import("./Device").default } Device
 */

export default class Star extends Shape {
  constructor() {
    super();
  }

  /**
   * @override
   * @param { Device } device 
   */
  accept(device) {
    device.print(this);
  }
}
```

<br />

```javascript
// Device.js
// 디바이스 interface 역할 - ``Visitor``

/**
 * @typedef { import("./Shape").default } Shape
 */

export default class Device {
  /**
   * @abstract
   * @param { Shape } _shape 
   */
  print(_shape) {
    throw new Error("Device.print() 는 Abstract Method 입니다.");
  }
}
```

<br />

```javascript
// Phone.js
// 폰 객체 - ``Visitor``

import Device from "./Device.js";

import Rectangle from "./Rectangle.js";
import Triangle from "./Triangle.js";
import Circle from "./Circle.js";
import Star from "./Star.js";

/**
 * @typedef { import("./Shape").default } Shape
 */

export default class Phone extends Device {
  constructor() {
    super();
  }
  
  /**
   * @override
   * @param { Shape } shape 
   */
  print(shape) {
    switch(shape.constructor) {
      case Rectangle: {
        console.log("- Print Rectangle To Phone");
        break;
      }

      case Triangle: {
        console.log("- Print Triangle To Phone");
        break;
      }

      case Circle: {
        console.log("- Print Circle To Phone");
        break;
      }

      case Star: {
        console.log("- Print Star To Phone");
        break;
      }
    }
  }
}
```

<br />

```javascript
// Watch.js
// 시계 객체 - ``Visitor``

import Device from "./Device.js";

import Rectangle from "./Rectangle.js";
import Triangle from "./Triangle.js";
import Circle from "./Circle.js";
import Star from "./Star.js";

/**
 * @typedef { import("./Shape").default } Shape
 */

export default class Watch extends Device {
  constructor() {
    super();
  }

  /**
   * @override
   * @param { Shape } shape 
   */
  print(shape) {
    switch(shape.constructor) {
      case Rectangle: {
        console.log("= Print Rectangle To Watch");
        break;
      }

      case Triangle: {
        console.log("= Print Triangle To Watch");
        break;
      }

      case Circle: {
        console.log("= Print Circle to Watch");
        break;
      }

      case Star: {
        console.log("= Print Star To Watch");
        break;
      }
    }
  }
}
```

<br />

```javascript
// Pad.js
// 패드 객체 - ``Visitor``

import Device from "./Device.js";

import Rectangle from "./Rectangle.js";
import Triangle from "./Triangle.js";
import Circle from "./Circle.js";
import Star from "./Star.js";

/**
 * @typedef { import("./Shape").default } Shape
 */

export default class Pad extends Device {
  constructor() {
    super();
  }

  /**
   * @override
   * @param { Shape } shape 
   */
  print(shape) {
    switch(shape.constructor) {
      case Rectangle: {
        console.log("* Print Rectangle To Pad");
        break;
      }

      case Triangle: {
        console.log("* Print Triangle To Pad");
        break;
      }

      case Circle: {
        console.log("* Print Circle To Pad");
        break;
      }

      case Star: {
        console.log("* Print Star To Pad");
        break;
      }
    }
  }
}
```

<br />

```javascript
// Client.js

import Rectangle from "./Rectangle.js";
import Triangle from "./Triangle.js";
import Circle from "./Circle.js";
import Star from "./Star.js";

import Phone from "./Phone.js";
import Watch from "./Watch.js";
import Pad from "./Pad.js";

const rectangle = new Rectangle();
const triangle = new Triangle();
const circle = new Circle();
const star = new Star();

const phone = new Phone();
const watch = new Watch();
const pad = new Pad();

console.log();

rectangle.accept(phone);
triangle.accept(phone);
circle.accept(phone);
star.accept(phone);

console.log();

rectangle.accept(watch);
triangle.accept(watch);
circle.accept(watch);
star.accept(watch);

console.log();

rectangle.accept(pad);
triangle.accept(pad);
circle.accept(pad);
star.accept(pad);
```

<br />

<img src="./readmeAssets/image%2021.png"><br/>



<br/>

<hr/><br/>



[ [🚀 최상단으로 이동](https://github.com/Chocobe/-Study-DesignPatter) ]

[ [🐫 ``BehavioralPattern`` 으로 이동](https://github.com/Chocobe/-Study-DesignPatter/tree/master/src/_03_BehavioralPattern) ]
