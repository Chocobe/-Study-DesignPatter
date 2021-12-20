# 03_03 ``Interpreter`` 패턴

``Interpret`` 는 ``번역하다`` 라는 뜻을 가지며, ``Interpreter`` 는 통역가 라는 뜻을 가지고 있습니다.

컴퓨터 사이언스(CS) 에서는 ``Interpreter`` 를 컴파일러 역할로서 부릅니다. (자연어 => 기계어 번역기)

<br/>

``Interpreter`` 패턴도 이러한 의미에서 생겨났으며, 번역의 의미는 문제를 해결(번역) 한다는 방식의 패턴 입니다.

``Interpreter`` 패턴은, 자주 등장하는 문제를 ``간단한 언어 (내가 만든 법칙/패턴)`` 으로 정의하고 재사용하는 패턴 입니다.

즉, 다음과 같은 흐름을 가집니다.
1. 나만의 패턴 정의하기
2. 생성한 패턴에 알맞는 인자 (문맥) 전달하기 (결과 도출)

<br/>

``Interpreter`` 내가 만든 패턴의 구성요소를 살펴보겠습니다.
* ``Context``: 내가 만든 패턴에 대응하는 실제 값들의 집합(객체) 입니다.
* ``Expression``: 내가 만든 패턴을 구성하는 ``단위 interface`` 이며, ``abstract interpret()`` 메서드를 가집니다.
  * ``TerminalExpression``: ``Expression`` 구현 class 이며, 최종 표현 객체 입니다. (다른 ``Expression`` 과 연결되지 않은 ``Expression`` - 터미널 노드)
  * ``NonTerminalExpression``: ``Expression`` 구현 class 이며, 다른 ``Expression`` 들을 연결하는 중간 역할을 합니다. (중간 노드)


<br/>


## 장점

* 자주 등장하는 문제를 나만의 패턴(문법) 으로 만들 수 있습니다.
* 기존 코드를 변경하지 않고, 새로운 ``Expression`` 을 추가할 수 있습니다.


<br/>


## 단점

* 구현이 어렵습니다.
* 코드의 복잡도가 매우 복잡해 집니다.
  * ``Expression`` class의 복잡한 구조
  * ``Expression`` 을 생성하는 ``Parser`` class의 복잡한 구조


<br/>


## 예시코드 시나리오

``후위 표기식`` 을 계산하는 계산기를 만들어 보겠습니다.

먼저 ``후위 표기식`` 의 ``단위 표현`` 을 나타내는 ``interface PostfixExpression`` 를 만듭니다.

그리고 ``PostfixExpression`` 을 생성하는 ``class PostfixParser`` 를 만들겠습니다.

<br/>

* class PostfixExpression (표현식의 단위 표현 - ``interface`` 역할)
  * class VariableExpression extends PostfixExpression (값에 대한 표현객체)
  * class PlusExpression extends PostfixExpression (더하기에 대한 표현객체)
  * class MinusExpression extends PostfixExpression (빼기에 대한 표현객체)
  * class MultiplyExpression extends PostfixExpression (곱하기에 대한 표현객체)

* class PostfixParser (표현식 객체를 생성할 Parser class)

<br/>

```javascript
// PostfixExpression.js
// class PostfixExpression (표현식의 단위 표현 - ``interface`` 역할)

export default class PostfixExpression {
  /**
   * @abstract
   * @param { { [key: string]: number } } _context 
   * @returns { number }
   */
  interpret(_context) {
    throw new Error("PostfixExpression.interpret() 는 Abstract Method 입니다.");
  }
}
```

<br/>

```javascript
// VariableExpression.js
// class VariableExpression extends PostfixExpression (값에 대한 표현객체)

import PostfixExpression from "./PostfixExpression.js";

export default class VariableExpression extends PostfixExpression {
  /** @type { string } */
  #contextKey

  /** @param { string } contextKey */
  constructor(contextKey) {
    super();
    this.#contextKey = contextKey;
  }

  /**
   * @abstract
   * @param { { [key: string]: number }} context
   * @returns { number }
   */
  interpret(context) {
    return context[this.#contextKey];
  }
}
```

<br/>

```javascript
// PlusExpression.js
// class PlusExpression extends PostfixExpression (더하기에 대한 표현객체)

import PostfixExpression from "./PostfixExpression.js";

export default class PlusExpression extends PostfixExpression {
  /** @type { PostfixExpression } */
  #lhs;
  
  /** @type { PostfixExpression } */
  #rhs;

  /**
   * @param { PostfixExpression } lhs 
   * @param { PostfixExpression } rhs 
   */
  constructor(lhs, rhs) {
    super();
    this.#lhs = lhs;
    this.#rhs = rhs;
  }

  /**
   * @abstract
   * @param {{ [key: string]: number }} context 
   * @returns { number }
   */
  interpret(context) {
    return this.#lhs.interpret(context) + this.#rhs.interpret(context);
  }
}
```

<br/>

```javascript
// MinusExpression.js
// class MinusExpression extends PostfixExpression (빼기에 대한 표현객체)

import PostfixExpression from "./PostfixExpression.js";

export default class MinusExpression extends PostfixExpression {
  /** @type { PostfixExpression } */
  #lhs;
  
  /** @type { PostfixExpression } */
  #rhs;

  /**
   * @param { PostfixExpression } lhs 
   * @param { PostfixExpression } rhs 
   */
  constructor(lhs, rhs) {
    super();
    this.#lhs = lhs;
    this.#rhs = rhs;
  }

  /**
   * @abstract
   * @param {{ [key: string]: number }} context 
   * @returns { number }
   */
  interpret(context) {
    return this.#lhs.interpret(context) - this.#rhs.interpret(context);
  }
}
```

<br/>

```javascript
// MultiplyExpression.js
// class MultiplyExpression extends PostfixExpression (곱하기에 대한 표현객체)

import PostfixExpression from "./PostfixExpression.js";

export default class MultiplyExpression extends PostfixExpression {
  /** @type { PostfixExpression } */
  #lhs;
  
  /** @type { PostfixExpression } */
  #rhs;

  /**
   * @param { PostfixExpression } lhs 
   * @param { PostfixExpression } rhs 
   */
  constructor(lhs, rhs) {
    super();
    this.#lhs = lhs;
    this.#rhs = rhs;
  }

  /**
   * @abstract
   * @param {{ [key: string]: number}} context 
   * @returns { number }
   */
  interpret(context) {
    return this.#lhs.interpret(context) * this.#rhs.interpret(context);
  }
}
```

<br/>

```javascript
// PostfixParser.js
// class PostfixParser (표현식 객체를 생성할 Parser class)

import VariableExpression from "./VariableExpression.js";
import PlusExpression from "./PlusExpression.js";
import MinusExpression from "./MinusExpression.js";

/**
 * @typedef { import("./PostfixExpression").default } PostfixExpression
 */

export default class PostfixParser {
  /**
   * @param { string } expression
   * @returns { PostfixExpression }
   */
  static parse(expression) {
    /** @type { PostfixExpression[] } */
    const stack = [];
    
    expression.split("").forEach(char => {
      stack.push(PostfixParser._createExpression(char, stack));
    });

    return stack.pop();
  }

  /**
   * 
   * @param { string } char 
   * @param { { [key: string]: number }[] } stack 
   */
  static _createExpression(char, stack) {
    switch(char) {
      case "+": {
        return new PlusExpression(stack.pop(), stack.pop());
      }

      case "-": {
        const rhs = stack.pop();
        const lhs = stack.pop();
        return new MinusExpression(lhs, rhs);
      }

      default: {
        return new VariableExpression(char);
      }
    }
  }
}
```

<br/>

```javascript
// App.js

import PostfixParser from "./PostfixParser.js";

/**
 * @typedef { import("./PostfixExpression").default } PostfixExpression
 */

const expression = PostfixParser.parse("xyz+-");
const result = expression.interpret({
  x: 1,
  y: 2,
  z: 3,
});

console.log(`결과: ${result}`);
```

<br/>

<img src="./readmeAssets/image%2013.png"><br/>



<br/>

<hr/><br/>



[ [🚀 최상단으로 이동](https://github.com/Chocobe/-Study-DesignPatter) ]

[ [🐫 ``BehavioralPattern`` 으로 이동](https://github.com/Chocobe/-Study-DesignPatter/tree/master/src/_03_BehavioralPattern) ]
