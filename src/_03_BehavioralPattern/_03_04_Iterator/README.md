# 03_04 ``Iterator`` 패턴

집합객체(``Aggragate``) (Array, Set, Map, etc.)의 내부를 노출시키지 않고, ``Client`` 에게 순회방법을 제공하는 패턴 입니다.

집합객체가 변경될 경우에도 ``Client`` 코드는 변경되지 않으며, 다양한 순회방법을 제공해줄 수 있습니다.

<br/>

``Iterator`` 패턴의 주요 요소는 다음과 같습니다.
* 집합객체는 ``Client`` 에게 ``Iterator`` 반환 메서드를 제공해 줍니다.
* ``Iterator`` 반환 메서드는 ``Iterator interface`` 구현객체를 반환해 줍니다.
* ``Iterator`` 구현객체는 ``Client`` 에게 아래와 같은 메서드를 제공해 줍니다.
  * ``hasNext()``: 다음 요소가 있는지 여부 반환 메서드
  * ``next()``: 다음 요소 반환 메서드


<br/>


## 장점

* 집합객체(``Aggregate``)가 가지고 있는 객체들에 손쉽게 접근할 수 있습니다.
* ``Client``는 집합객체(``Aggregate``)의 순회방법을 선택하여 사용하게 됩니다.
* ``Iterator interface`` 를 통해, 다양한 순회방법을 제공할 수 있습니다.


<br/>


## 단점

* 코드 복잡도가 증가합니다.
* 순회방법 수 만큼 ``Iterator Concrete Class``를 만들어야 하므로, ``Class``가 많아집니다.


<br/>


## ``Javascript`` 에서 ``Iterator`` 정리

``Javascript`` 에서 제공하는 ``Iterator``는 다음과 같이 얻을 수 있습니다.

```javascript
// ❌ Object 사용 불가 !!
// const myObj = { a: 1, b: 2, c: 3 };
// const myObjIterator = myObj[Symbol.iterator]();
// console.log(myObjectIterator); // undefined

// ❌ Object 사용 불가 !!
// const myObj = new Object();
// const myObjIterator = myObj[Symbol.iterator]();
// console.log(myObjIterator); // undefined

const myStr = "ABC";
const myStrIterator = myStr[Symbol.iterator]();
console.log(myStrIterator.next().value); // "A"
console.log(myStrIterator.next().value); // "B"
console.log(myStrIterator.next().value); // "C"

const myArr = [1, 2, 3];
const myArrIterator = myArr[Symbol.iterator]();
console.log(myArrIterator.next().value); // 1
console.log(myArrIterator.next().value); // 2
console.log(myArrIterator.next().value); // 3

const myMap = new Map([["a", 111], ["b", 222]]);
const myMapIterator = myMap[Symbol.iterator]();
console.log(myMapIterator.next().value); // ["a", 111]
console.log(myMapIterator.next().value); // ["b", 222]

const mySet = new Set(["AAA", "BBB", "CCC"]);
const mySetIterator = mySet[Symbol.iterator]();
console.log(mySetIterator.next().value); // "AAA"
console.log(mySetIterator.next().value); // "BBB"
console.log(mySetIterator.next().value); // "CCC"
```

<br/>

만약 특정 객체의 ``iterator``를 커스터마이징 하려면, ``객체[Symbol.iterator]`` 에 ``Generator`` 를 대입하여 커스터마이징 할 수 있습니다.

주의할 점은 ``Object`` 즉, ``{ }`` 객체는 ``Iterator`` 가 없으므로, 사용할 수 없습니다.

아래 코드는 ``대상객체[Symbol.iterator]``를 잘못 사용한 예시 코드 입니다.

```javascript
// 대상객체[Symbol.iterator] 를 잘못 사용한 예시코드

const myObj = {};
const iterator = myObj[Symbol.iterator]();

console.log(iterator); // undefined
```

<br/>

``Object 또는 { }`` 의 ``Iterator`` 를 사용하려면, 직접 커스터마이징 해야 합니다.

아래 코드는 ``iterator``를 커스터마이징 한 예시 코드 입니다.

```javascript
const myObj = {};
myObj[Symbol.iterator] = function*() {
  yield 1;
  yield 2;
  yield 3;
};

const result = [...myObj] // [1, 2, 3]
```

<br/>

``iterator``를 커스터마이징 할 때, 주의할 점은 ``iterator``로 동작하는 기능들에도 반영되는 것 입니다.

아래의 코드들은 ``iterator``를 커스터마이징 했을 때, 영향을 받는 문법들 입니다.

```javascript
const arr = ["a", "b", "c"];

// 1. for ~ of Loops
for(let value of arr) {
  console.log(value);
  // "a"
  // "b"
  // "c"
}

// 2. Spread Operator
console.log([...arr]); // ["a", "b", "c"]

// 3. Destructuring Assignment
const [a, b, c] = new Set(arr);
console.log(`${a} ${b} ${c}`); // a b c
```

<br/>

추가로 ``Javascript`` 의 ``Iterator``의 ``next()`` 메서드의 반환타입은 ``{ value: any, done: boolean }`` 입니다.


<br/>


## ``Iterator`` 를 ``@JSDoc`` 으로 표현하기

함수나 메서드의 경우, ``@returns { 타입 }`` 을 사용합니다.

``Iterator``는 ``@returns`` 를 사용하지 않고, ``@yields { 타입 }`` 을 사용하여 나타낼 수 있습니다.

또한, ``Iterator.next()`` 의 반환타입은 다음과 같습니다.

```javascript
class MyIterator {
  /**
   * @returns { IteratorResult<T> }
   */
  next() {
    return this.이터레이터_멤버변수.next();
  }
}
```

<br/>

아래 코드는 ``@yields`` 와 함께 사용한 ``MyIterator Class`` 예시 코드 입니다.

```javascript
/** @template { string | number } T */
class MyIterator {
  /**
   * 🐫 Javascript 의 Iterator 타입은 IterableIterator 입니다.
   * @type { iterableIterator<T> }
   */
  #internalIterator;

  /**
   * @param { T[] } params
   */
  constructor(params) {
    const copiedParams = [...params];

    copiedParams[Symbol.iterator] = function*() {
      for(let i = 0; i < this.length; i++) {
        yield this[i];
      }
    }

    this.#internalIterator = copiedParams[Symbol.iterator]();
  }

  /**
   * @returns { IteratorResult<T> }
   */
  next() {
    return this.#internalIterator.next();
  }
}
```


<br/>


## 예시코드 시나리오

게시판의 정렬 기능으로 ``등록순`` 과 ``최신순`` 기능을 만들어 보겠습니다.

* class Post (게시글 class)

* class Iterator (``Iterator`` interface 역할)
  * class RecentPostIterator (``Iterator`` 구현 class 역할 - 최신 정렬)
  * class AscPostIterator (``Iterator`` 구현 class 역할 - 등록일 정렬)

* class Board (게시판 class)

<br/>

```javascript
// Post.js
// 게시글 class

export default class Post {
  /** @type { string } */
  #content;

  /** @type { Date } */
  #createAt;

  /** @param { string } content */
  constructor(content) {
    this.#content = content;
    this.#createAt = new Date();
  }

  /** @returns { string } */
  getContent() {
    return this.#content;
  }
  /** @param { string } content */
  setContent(content) {
    this.#content = content;
  }

  /** @returns { Date } */
  getCreateAt() {
    return this.#createAt;
  }
  /** @param { Date } createAt */
  setCreateAt(createAt) {
    this.#createAt = createAt;
  }
}
```

<br/>

```javascript
// Iterator.js
// ``Iterator`` interface 역할

/**
 * @typedef { import("./Post").default } Post
 */

export default class Iterator {
  /**
   * @abstract
   * @returns { IteratorResult<Post> }
   */
  next() {
    throw new Error("Iterator.next() 는 Abstract Method 입니다.");
  }
}
```

<br/>

```javascript
// RecentPostIterator.js
// ``Iterator`` 구현 class 역할 - 최신 정렬

import Iterator from "./Iterator.js";

/**
 * @typedef { import("./Post").default } Post
 */

export default class RecentPostIterator extends Iterator {
  /** @type { IterableIterator<Post> } */
  #internalIterator;

  /** @param { Post[] } posts */
  constructor(posts) {
    super();
    
    const copiedPosts = [...posts]
      .sort((a, b) => b.getCreateAt().getTime() - a.getCreateAt().getTime());

    copiedPosts[Symbol.iterator] = function*() {
      for(let i = 0; i < copiedPosts.length; i++) {
        yield copiedPosts[i];
      }
    }

    this.#internalIterator = copiedPosts[Symbol.iterator]();
  }

  /**
   * @override
   * @returns { IteratorResult<Post> }
   */
  next() {
    return this.#internalIterator.next();
  }
}
```

<br/>

```javascript
// AscPostIterator.js
// ``Iterator`` 구현 class 역할 - 등록일 정렬

import Iterator from "./Iterator.js";

/**
 * @typedef { import("./Post").default } Post
 */

export default class AscPostIterator extends Iterator {
  /** @type { IterableIterator<Post> } */
  #internalIterator;

  /** @param { Post[] } posts */
  constructor(posts) {
    super();

    const copiedPosts = [...posts]
      .sort((a, b) => a.getCreateAt().getTime() - b.getCreateAt().getTime());

    copiedPosts[Symbol.iterator] = function*() {
      for(let i = 0; i < copiedPosts.length; i++) {
        yield copiedPosts[i];
      }
    }

    this.#internalIterator = copiedPosts[Symbol.iterator]();
  }

  /**
   * @override
   * @returns { IteratorResult<Post> }
   */
  next() {
    return this.#internalIterator.next();
  }
}
```

<br/>

```javascript
// Board.js
// 게시판 class

import Post from "./Post.js";
import RecentPostIterator from "./RecentPostIterator.js";
import AscPostIterator from "./AscPostIterator.js";

export default class Board {
  /** @type { Post[] } */
  #posts;

  constructor() {
    this.#posts = [];
  }

  /** @returns { Post[] } */
  getPosts() {
    return this.#posts;
  }
  /** @param { Post[] } posts */
  setPosts(posts) {
    this.#posts = posts;
  }

  /** @param { string } content */
  addPost(content) {
    this.#posts.push(new Post(content));
  }
  
  /** @returns { RecentPostIterator } */
  getRecentPostIterator() {
    return new RecentPostIterator(this.#posts);
  }

  /** @returns {AscPostIterator } */
  getAscPostIterator() {
    return new AscPostIterator(this.#posts);
  }
}
```

<br/>

위 코드를 실행하면, 다음과 같은 결과를 얻을 수 있습니다.

<img src="./readmeAssets/image%2014.png"><br/>



<br/>

<hr/><br/>



[ [🚀 최상단으로 이동](https://github.com/Chocobe/-Study-DesignPatter) ]

[ [🐫 ``BehavioralPattern`` 으로 이동](https://github.com/Chocobe/-Study-DesignPatter/tree/master/src/_03_BehavioralPattern) ]
