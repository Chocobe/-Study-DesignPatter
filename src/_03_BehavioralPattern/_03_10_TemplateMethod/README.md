# 03_10 ``Template Method`` 패턴

함수에서 어떠한 일을 처리하는 동작을 알고리즘이라고 부릅니다.

이 알고리즘에는 단순히 한가지 일을 할 수도 있지만, 하나의 결과를 만들기 위해 여러가지 연산과정을 거쳐야 할 경우도 있습니다.

``Template Method`` 패턴은 이 알고리즘 구조를 서브 클래스가 확장할 수 있도록 ``Template`` 을 제공하는 패턴 입니다.

<br />

다음과 같은 순서의 비지니스 로직을 가정해 보겠습니다.
1. 파일에서 값 읽어오기
2. 읽어온 값들을 ``모두 더하기``
3. 결과를 반환하기

<br />

위의 함수에서 ``모두 더하기`` 가 아닌 ``모두 곱하기`` 기능을 추가한다면 다음과 같습니다.
1. 파일에서 값 읽어오기
2. 읽어온 값들을 ``모두 곱하기``
3. 결과를 반환하기

<br />

``모두 XXX`` 에 대한 연산만 다르고 나머지 알고리즘은 동일한 형태로 확장할 수 있습니다.

이렇게 동일한 알고리즘을 가지고 있는 ``Abstract class`` 를 만들고, 확장할 기능을 ``Concrete class`` 에 ``Template`` 으로 제공하는 패턴을 ``Template Method`` 패턴이라고 합니다.

<br />

이렇게 공통된 알고리즘은 ``Abstract class`` 에서 작성되어 있고, 이를 상속받는 ``Concrete class`` 에서는 해당 ``Template Method`` 하나만 구현하면 됩니다.

그리고 구현한 ``Template Method`` 는 부모 클래스인 ``Abstract class`` 내부에서 호출되므로, ``Inversion of Control (제어의 역전)`` 방식으로 동작하게 됩니다.

* 코드를 사용하는 주체가 자신이 아닌 ``자신의 외부`` 또는 ``부모`` 에서 ``제어권 (호출하는 곳)`` 을 가지는 방식

<br />

``Template Method`` 패턴이 유용한 상황은, 거의 유사한 동작을 하면서 ``동작의 일부분이 변경 (확장)`` 되는 경우 입니다.


<br />


## 장점

* ``Template`` 코드를 재사용할 수 있고, 중복코드를 제거할 수 있습니다.
* ``Template`` 코드를 수정하지 않고, 구체적인 알고리즘만 변경(확장) 할 수 있습니다.


<br />


## 단점

* ``리스코브 치환원칙`` 을 ``위배`` 할 수 있는 가능성이 있습니다.
  * ``리스코브 치환원칙``: 부모 클래스에서 의도한 동작대로, 자식 클래스에서도 동작하게 만들기


<br />


## ``Template Callback`` 패턴

위에서 살펴본 ``Template Method`` 패턴은 ``Abstract class`` 를 ``상속`` 하여 구현하였습니다.

``상속`` 이라는 단점을 피하기 위해, ``Callback Method`` 를 전달하는 방식의 ``Template Callback`` 패턴을 사용할 수도 있습니다.

<br />

이제 ``Abstract Method`` 가 아닌, ``Class`` 에 공통 알고리즘을 구현합니다.

그리고 해당 비지니스 메서드를 호출할 때, ``Callback Method`` 를 ``인자`` 로 넘겨주는 방식으로 구현할 수 있습니다.

``Javascript`` 에서는 ``Template Callback`` 패턴이 더욱 잘 어울리는 것 같다고 생각합니다.


<br />


## 예시코드 시나리오

위에서 예시로 사용했던 비지니스 로직을 구현해 보겠습니다.

1. 파일에서 값 읽어오기
2. 읽어온 값들을 ``XXX 연산하기``
3. 결과를 반환하기

<br />

* class FileProcessor (``Template Method`` 로 구현된 class)

<br />

```javascript
// FileProcessor.js
// ``Template Method`` 로 구현된 class

import readline from "readline";
import fs from "fs";

export default class FileProcessor {
  /** @type { string } */
  _path;

  /** @param { string } path */
  constructor(path) {
    this._path = path;
  }

  /**
   * @param { number } initValue 
   * @param { (result: number, value: number) => number } callback
   * @returns { Promise<number> }
   */
  process(initValue, callback) {
    return new Promise(res => {
      let result = initValue;
      
      readline.createInterface({
        input: fs.createReadStream(this._path),
        output: undefined,
      })
        .on("line", line => {
          result = callback(result, +line);
        })
        .on("close", () => {
          res(result);
        });
    });
  }
}
```

<br />

```javascript
// Client.js

import FileProcessor from "./FileProcessor.js";

const fileProcessor = new FileProcessor("./numbers.txt");
fileProcessor.process(0, (result, value) => result + value)
  .then(result => console.log(`더하기 결과: ${result}`));

fileProcessor.process(1, (result, value) => result * value)
  .then(result => console.log(`곱하기 결과: ${result}`));

fileProcessor.process(0, (result, value) => value - result)
  .then(result => console.log(`이상한 빼기 결과: ${result}`));
```



<br/>

<hr/><br/>



[ [🚀 최상단으로 이동](https://github.com/Chocobe/-Study-DesignPatter) ]

[ [🐫 ``BehavioralPattern`` 으로 이동](https://github.com/Chocobe/-Study-DesignPatter/tree/master/src/_03_BehavioralPattern) ]
