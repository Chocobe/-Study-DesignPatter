# 03_02 ``Command`` 패턴

특정 객체의 기능을 사용하기 위해서는, 그 객체의 메서드를 호출해야 합니다.

여기서 호출하는 부분을 ``호출자(Invoker)`` 라고 하고, 호출 당하는 쪽을 ``수신자(Receiver)`` 라고 합니다.

<br/>

``Command`` 패턴은 ``Invoker`` 와 ``Receiver`` 를 분리하는 패턴 입니다.

``Receiver`` 의 요청방법이 바뀌어도, ``Invoker`` 의 코드는 변경되지 않도록 하기위한 패턴 입니다.

<br/>

``Invoker`` 는 ``Command interface`` 를 바라보고 ``추상화된 메서드 (execute)`` 를 호출하기 때문에, 실제 ``Concrete Command Class`` 가 무엇인지는 아무런 영향을 받지 않게 됩니다.

<br/>

가장 기본적인 ``Command`` 패턴에는 ``execute()`` 메서드 하나만을 가지도록 만듭니다.

즉, ``Command`` 1개는, 특정 객체의 ``Method`` 1개가 되는 형식 입니다.

만약, ``Command`` 에 ``undo()`` 라는 메서드도 선언한다면, ``메서드 취소`` 기능도 구현할 수 있습니다.

이러한 방식으로, ``Command`` 객체 자체에 대한 기능을 추가할 수 있습니다.
* ``Command`` 객체 ``로깅`` 기능
* ``Command`` 객체를 ``DB에 전송`` 기능
* ``Command`` 객체를 ``네트워크로 전송`` 기능
* etc.


<br/>


## 장점

* 기존 코드를 변경하지 않고, ``Command`` 를 만들 수 있습니다.
  * OCP(Open Closed Principle - 개방 폐쇄 원칙)
* ``Receiver`` 의 코드가 바뀌어도 ``Invoker`` 의 코드는 변경되지 않습니다.
* ``Receiver`` 객체의 메서드를 그냥 호출하는 것이 아닌, 기능이 추가된 상태로 호출할 수 있습니다. (``Invoker`` 의 코드는 변경되지 않습니다)


<br/>


## 단점

* 코드가 복잡해 집니다.
* ``class`` 가 많아집니다.


<br/>


## 예시코드 시나리오

전등을 켜도 끄는 버튼을 만들어 보겠습니다.

여기서 ``켜는 기능`` 과 ``끄는 기능`` 을 ``Command`` 로 만들게 됩니다.

또한, ``undo`` 기능을 사용하여, 이전에 실행한 ``Command`` 를 역순으로 취소할 수 있는 기능을 추가해 보겠습니다.

<br/>

* class Light (전등 역할을 하는 ``Receiver`` class)
* class Command (``Command`` interface 역할)
  * class LightOnCommand extends Command (``불 켜기`` 기능에 대한 ``Concrete Command class``)
  * class LightOffCommand extends Command (``불 끄기`` 기능에 대한 ``Concrete Command class``)
* class Button (``Command`` 객체를 인자로 받아서, 전등객체의 ``불켜기``, ``불끄기`` 기능을 제공하는 ``invoker`` class)

<br/>

```javascript
// Light.js
// 전등 역할을 하는 ``Receiver`` class

export default class Light {
  /** @type { boolean } */
  #isOn;

  on() {
    console.log("불을 켭니다...");
    this.#isOn = true;
  }

  off() {
    console.log("...불끄기");
    this.#isOn = false;
  }

  /** @returns { boolean } */
  isOn() {
    return this.#isOn;
  }
}
```

<br/>

```javascript
// Command.js
// ``Command`` interface 역할

export default class Command {
  /** @abstract */
  execute() {
    throw new Error("Command.execute() 는 Abstract Method 입니다.");
  }

  /** @abstract */
  undo() {
    throw new Error("Command.undo() 는 Abstract Method 입니다.");
  }
}
```

<br/>

```javascript
// LightOnCommand.js
// ``불 켜기`` 기능에 대한 ``Concrete Command class``

import Command from "./Command.js";
import LightOffCommand from "./LightOffCommand.js";

/**
 * @typedef { import("./Light").default } Light
 */

export default class LightOnCommand extends Command {
  /** @type { Light } */
  #light;

  /** @param { Light } light */
  constructor(light) {
    super();
    this.#light = light;
  }

  /** @override */
  execute() {
    this.#light.on();
  }

  /** @override */
  undo() {
    new LightOffCommand(this.#light).execute();
  }
}
```

<br/>

```javascript
// LightOffCommand.js
// ``불 끄기`` 기능에 대한 ``Concrete Command class``

import Command from "./Command.js";
import LightOnCommand from "./LightOnCommand.js";

/**
 * @typedef { import("./Light").default } Light
 */

export default class LightOffCommand extends Command {
  /** @type { Light } */
  #light;

  /** @param { Light } light */
  constructor(light) {
    super();
    this.#light = light;
  }

  /** @override */
  execute() {
    this.#light.off();
  }

  /** @override */
  undo() {
    new LightOnCommand(this.#light).execute();
  }
}
```

<br/>

```javascript
// Button.js
// ``Command`` 객체를 인자로 받아서, 전등객체의 ``불켜기``, ``불끄기`` 기능을 제공하는 ``invoker`` class

/**
 * @typedef { import("./Command").default } Command
 */

export default class Button {
  /** @type { Command[] } */
  #commands;

  constructor() {
    this.#commands = [];
  }
  
  /** @param { Command } command */
  press(command) {
    command.execute();
    this.#commands.push(command);
  }

  undo() {
    const prevCommand = this.#commands.pop();

    prevCommand && prevCommand.undo();
  }
}
```

<br/>

```javascript
// App.js

import Button from "./Button.js";
import Light from "./Light.js";
import LightOnCommand from "./LightOnCommand.js";
import LightOffCommand from "./LightOffCommand.js";

const light = new Light();
const button = new Button();

button.press(new LightOnCommand(light));
button.press(new LightOffCommand(light));

button.undo();
button.undo();
button.undo();
button.undo();
```

<br/>

<img src="./readmeAssets/image%2010.png"><br/>



<br/>

<hr/><br/>



[ [🚀 최상단으로 이동](https://github.com/Chocobe/-Study-DesignPatter) ]

[ [🐫 ``BehavioralPattern`` 으로 이동]() ]
