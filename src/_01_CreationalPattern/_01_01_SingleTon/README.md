# 01_01 ``SingleTon`` 패턴

``SingleTon`` 패턴은 객체 생성을 위한 패턴 중 하나이며, 특징은 다음과 같습니다.

* class Instance를 오직 하나만 만들 수 있게 합니다.
* ``SingleTon`` 패턴의 객체를 ``Global`` 에서 공통으로 사용하고자 할 때, 사용합니다.

<br/>

``SingleTon`` 패턴을 구현할 때, 핵심은 다음과 같습니다.

* class 생성자를 ``private`` 으로 만듭니다. (Javascript는 지원하지 않으므로, 변형된 형태로 구현해야 합니다)
* 이 class 의 Instance를 ``static`` 필드에서 갖도록 합니다.
* ``static`` Instance의 접근자 메서드를 만듭니다.

<br/>

아래의 코드는 ``SingleTon`` 을 Javascript 로 구현한 결과 입니다.

```javascript
// SingleTon.js
export default class SingleTon {
  static #INSTANCE;

  constructor() {
    if(SingleTon.#INSTANCE) return SingleTon.#INSTANCE;

    SingleTon.#INSTANCE = this;
    return SingleTon.#INSTANCE;
  }

  static getInstance() {
    return new SingleTon();
  }
}
```

<br/>

```javascript
import SingleTon from "./SingleTon.js";

const singleTon1 = SingleTon.getInstance();
const singleTon2 = new SingleTon();
const singleTon3 = SingleTon.getInstance();

console.log(
  singleTon1 === singleTon2
  && singleTon2 === singleTon3
  && singleTon3 === singleTon1
);  // true
```



<br/>

<hr/><br/>



[ [🚀 최상단으로 이동](https://github.com/Chocobe/-Study-DesignPatter) ]

[ [🐫 ``CreationalPattern`` 으로 이동](https://github.com/Chocobe/-Study-DesignPatter/tree/master/src/_01_CreationalPattern) ]
