# 02_04 ``Decorator`` 패턴

기존의 class 에 새로운 기능을 추가하는 상황은 언제나 발생할 수 있습니다.

``Decorator`` 패턴은 기존 코드를 변경하지 않고, 부가기능을 런타임(Dynamic) 에서 확장할 수 있는 패턴 입니다.

주 사용처는 동일한 계층의 class들을 조합해야 할 경우 입니다.

<br/>

같은 계층의 class 들이 있다고 가정해 보겠습니다.

이 class들은 개별 기능을 가지고 있으며, 이 기능들을 상황에 맞추어 조합하여 사용해야 한다면, 해당 class 들을 다중상속 하여 구현하고 싶어집니다.

(이렇게 구현할 경우, 기능 조합 경우의 수만큼 class 를 만들어야 합니다.)

하지만 다중상속은 일반적으로 지원하지 않으며, 지원하다고 하여도 죽음의 다이아몬드 가 형성되므로, 불가능한 방법 입니다.

<br/>

이 때, ``Decorator`` 패턴을 사용하게 되면, Client 코드에서 각각의 기능들을 조합하여 사용할 수 있습니다.

구현 방법의 핵심은 상속이 아닌, 위임 입니다.

<br/>

``Decorator`` 패턴의 특징을 정리하면 다음과 같습니다.

* 상속이 아닌, 위임을 사용합니다.
* 기능을 확장하려는 대상의 interface 를 구현하는 것으로 ``Decorator`` class 를 만들며, ``자기자신(Decorator)`` 타입을 멤버 필드로 가집니다. (이러한 특징 때문에 ``Decorator`` 패턴을 ``Wrapper`` 라고도 부릅니다.)
* 기능 확장은 ``Decorator`` 의 내부 메서드에서 구현하며, 최종적으로 ``자기자신(Decorator)`` 타입의 멤버 필드에 본래 기능을 요청 하는 형태가 됩니다.


<br/>


## 장점

* 새로운 class 를 만들지 않고도, 기존 기능들을 ``조합`` 할 수 있습니다.
* ``Compile Time`` 이 아닌, ``Run Time`` 에서 동적(Dynamic)으로 기능을 변경할 수 있습니다.
* 하나의 기능만 가지는 ``Decorator 구현체`` 들을 조합하여 사용하므로, ``SRP (Single Responsibility Principle: 단일 책임 원칙)`` 을 준수하게 됩니다.
* 기능확장이 기존 코드에 영향을 주지 않으므로, ``OCP(Open Closed Principle: 개방 폐쇄 원칙)`` 을 준수하게 됩니다.


<br/>


## 단점

* Client 코드에서 ``Decorator`` 들을 조합하는 코드가 복잡해질 수 있습니다.


<br/>


## 예시코드 시나리오

Client 의 글쓰기 기능을 예시로 하였습니다.

글쓰기에는 부가기능으로 ``Trimming``, ``SpamFiltering`` 을 만듭니다.

``Trimming`` 과 ``SpamFiltering`` 은 ``Decorator`` 로 구현하여, 글쓰기 기능의 부가기능으로 조합하여 사용하게 됩니다.

* class CommentService (기능에 대한 interface 역할)
  * class DefaultCommentService extends CommentService (기능 구현 class - 글쓰기 기본 기능)
  * class CommentDecorator extends CommentService (Decorator 역할)
    * class TrimmingCommentDecorator extends CommentDecorator (Decorator 역할)
    * class SpamFilteringCommentDecorator extends CommentDecorator (Decorator 역할)

* class Client (CommentService 타입을 가지며, 해당 기능을 사용)

<br/>

```javascript
// CommentService.js
// 기능 interface 역할

export default class CommentService {
  /**
   * @abstract
   * @param { string } _comment
   */
  addComment(_comment) {
    throw new Error("CommentService.addComment()는 Abstract Method 입니다.");
  }
}
```

<br/>

```javascript
// DefaultCommentService.js
// 기능 구현 class - 글쓰기 기본 기능

import CommentService from "./CommentService.js";

export default class DefaultCommentService extends CommentService {
  constructor() {
    super();
  }
  
  /**
   * @override
   * @param { string } comment
   */
  addComment(comment) {
    console.log(comment);
  }
}
```

<br/>

```javascript
// CommentDecorator.js
// Decorator 역할 class (실제 객체를 생성하지는 않습니다)

import CommentService from "./CommentService.js";

export default class CommentDecorator extends CommentService {
  /** @type { CommentService } */
  #commentService;

  /** @param { CommentService } */
  constructor(commentService) {
    super();
    this.#commentService = commentService;
  }

  /**
   * @override 
   * @param { string } comment 
   */
  addComment(comment) {
    this.#commentService.addComment(comment);
  }
}
```

<br/>

```javascript
// TrimmingCommentDecorator.js
// Decorator 역할 class

import CommentDecorator from "./CommentDecorator.js";

/**
 * @typedef { import("./CommentService").default } CommentService
 */

export default class TrimmingCommentDecorator extends CommentDecorator {
  /** @param { CommentService } commentService */
  constructor(commentService) {
    super(commentService);
  }

  /** 
   * @override
   * @param { string } comment 
   */
  addComment(comment) {
    super.addComment(this.#trim(comment));
  }

  /**
   * @param { string } comment
   * @returns { string }
   */
  #trim(comment) {
    return comment.replace("...", "");
  }
}
```

<br/>

```javascript
// SpamFilteringCommentDecorator.js
// Decorator 역할 class

import CommentDecorator from "./CommentDecorator.js";

/**
 * @typedef { import("./CommentService").default } CommentService
 */

export default class SpamFilteringCommentDecorator extends CommentDecorator {
  /** @param { CommentService } */
  constructor(commentService) {
    super(commentService);
  }

  /**
   * @override
   * @param { string } comment
   */
  addComment(comment) {
    if(!this.isNotSpam(comment)) return;

    super.addComment(comment);
  }
  
  /**
   * @param { string } comment
   * @returns { boolean }
   */
  isNotSpam(comment) {
    return comment.indexOf("http") < 0
  }
}
```

<br/>

```javascript
// Client.js

/**
 * @typedef { import("./CommentService").default } CommentService
 */

export default class Client {
  /** @type { CommentService } */
  #commentService;

  /** @param { CommentService } commentService */
  constructor(commentService) {
    this.#commentService = commentService;
  }

  /** @param { String } comment */
  writeComment(comment) {
    this.#commentService.addComment(comment);
  }
}
```

<br/>

```javascript
// App.js

import Client from "./Client.js";
import DefaultCommentService from "./DefaultCommentService.js";
import SpamFilteringCommentDecorator from "./SpamFilteringCommentDecorator.js";
import TrimmingCommentDecorator from "./TrimmingCommentDecorator.js";

const commentService = new DefaultCommentService();

const trimmingCommentDecorator = new TrimmingCommentDecorator(commentService);

const spamFilteringCommentDecorator = new SpamFilteringCommentDecorator(commentService);

const trimmingAndSpamFilteringCommentDecorator = new SpamFilteringCommentDecorator(trimmingCommentDecorator);

console.log("============================");

const client1 = new Client(commentService);
console.log("=== DefaultCommentService 사용 ===")
client1.writeComment("안녕하세요");
client1.writeComment("날씨가 춥네요...");
client1.writeComment("http://chocobe.github.com");

console.log("============================");

const client2 = new Client(trimmingCommentDecorator);
console.log("=== TrimmingCommentService 사용 ===")
client2.writeComment("안녕하세요");
client2.writeComment("날씨가 춥네요...");
client2.writeComment("http://chocobe.github.com");

console.log("============================");

const client3 = new Client(spamFilteringCommentDecorator);
console.log("=== SpamFilteringCommentService 사용 ===")
client3.writeComment("안녕하세요");
client3.writeComment("날씨가 춥네요...");
client3.writeComment("http://chocobe.github.com");

console.log("============================");

const client4 = new Client(trimmingAndSpamFilteringCommentDecorator);
console.log("=== TrimmingAndSpamFilteringCommentDecorator 사용 ===")
client4.writeComment("안녕하세요");
client4.writeComment("날씨가 춥네요...");
client4.writeComment("http://chocobe.github.com");

console.log("============================");
```

<br/>

<img src="./readmeAssets/image%205.png"><br/>



<br/>

<hr/><br/>



[ [🚀 최상단으로 이동](https://github.com/Chocobe/-Study-DesignPatter) ]

[ [🐫 ``StructuralPattern`` 으로 이동](https://github.com/Chocobe/-Study-DesignPatter/tree/master/src/_02_StructuralPattern) ]
