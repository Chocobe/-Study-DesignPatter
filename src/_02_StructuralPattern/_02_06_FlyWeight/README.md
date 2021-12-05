# 02_06 ``FlyWeight`` 패턴

``FlyWeight`` 의 영문뜻은 가벼운 입니다.

``FlyWeight`` 패턴도 이러한 뜻처럼, 객체 생성에 의한 메모리 사용을 줄이기 위한 패턴 입니다.

(많은 객체를 생성해야 할 경우, ``FlyWeight`` 패턴을 사용하게 되면 메모리 최적화를 할 수 있습니다.)

<br/>

하나의 class 타입으로 많은 객체를 생성해야 할 경우, 각각의 객체에 필요한 메모리가 있습니다.

여기서 각 객체의 외적인 속성(Extrinsit: 자주 변하는, 비본질적인) 과 내적인 속성(Intrinsit: 변하지 않는, 본질적인) 을 분리하는 방식으로 구현합니다.

<br/>

``FlyWeight`` 패턴의 핵심은 ``내적인 속성`` 을 ``Caching`` 하고 있는 ``FlyWeight Factory`` 에서 받도록 만드는 것입니다.


<br/>


## 장점

* 애플리케이션이 사용하는 메모리를 줄일 수 있습니다.
* (성능 최적화)


<br/>


## 단점

* 코드 복잡도가 증가합니다.


<br/>


## 예시코드 시나리오

사용자의 입력 에디터 개발을 예시로 해보겠습니다.

입력 문자 하나에 대한 ``문자``, ``색상``, ``폰트``, ``사이즈`` 의 속성을 가지는 객체들로 입력값을 관리하게 됩니다.

여기서 내적인 속성을 ``폰트``, ``사이즈`` 로 결정하여, 이 속성에 대한 ``FlyWeight`` 패턴을 적용해 보겠습니다.

<br/>

* class Font (입력문자에 대한 내적인 속성 class - ``FlyWeight``)
* class FontFactory (``FlyWeight Factory`` class)
* class Character (입력문자 class)

<br/>

```javascript
// Font.js
// 입력문자에 대한 내적인 속성 class - FlyWeight

export default class Font {
  /** @type { string } */
  #fontFamily;

  /** @type { number } */
  #fontSize;

  /**
   * @param { string } fontFamily 
   * @param { number } fontSize 
   */
  constructor(fontFamily, fontSize) {
    this.#fontFamily = fontFamily;
    this.#fontSize = fontSize;
  }

  /** @returns { string } */
  getFontFamily() {
    return this.#fontFamily;
  }

  /** @return { number } */
  getFontSize() {
    return this.#fontSize;
  }
}
```

<br/>

```javascript
// FontFactory.js
// FlyWeight Factory class

import Font from "./Font.js";

export default class FontFactory {
  /** @type { Map } */
  #cache = new Map();

  /**
   * @param { string } font 
   * @returns { Font }
   */
  getFont(font) {
    if(this.#cache.has(font)) {
      return this.#cache.get(font);
    } else {
      const fontInfo = font.split(":");
      const newFont = new Font(fontInfo[0], +fontInfo[1]);
      this.#cache.set(font, newFont);

      return newFont;
    }
  }
}
```

<br/>

```javascript
// Character.js
// 입력문자 class

/**
 * @typedef { import("./Font").default } Font
 */

export default class Character {
  /** @type { string } */
  #value;

  /** @type { string } */
  #color;

  /** @type { Font } */
  #font;

  /**
   * @param { string } value 
   * @param { string } color 
   * @param { Font } font 
   */
  constructor(value, color, font) {
    this.#value = value;
    this.#color = color;
    this.#font = font;
  }

  /** @returns { string } */
  getValue() {
    return this.#value;
  }

  /** @returns { string } */
  getColor() {
    return this.#color;
  }

  /** @returns { Font } */
  getFont() {
    return this.#font;
  }

  /** @returns { string } */
  toString() {
    return `문자: ${this.#value}`
      + ` // 색: ${this.#color}`
      + ` // 폰트: ${this.#font.getFontFamily()}`
      + ` // 사이즈: ${this.#font.getFontSize()}`;
  }
}
```

<br/>

```javascript
// App.js

import FontFactory from "./FontFactory.js";
import Character from "./Character.js";

const fontFactory = new FontFactory();

const c1 = new Character("h", "#ff1493", fontFactory.getFont("나눔:12"));
const c2 = new Character("e", "#ff1493", fontFactory.getFont("나눔:12"));
const c3 = new Character("l", "#ff1493", fontFactory.getFont("나눔:12"));
const c4 = new Character("l", "#ff1493", fontFactory.getFont("나눔:12"));
const c5 = new Character("o", "#ff1493", fontFactory.getFont("나눔:12"));

console.log(c1.toString());
console.log(c2.toString());
console.log(c3.toString());
console.log(c4.toString());
console.log(c5.toString());

console.log(c3.getFont() === c4.getFont());
```

<br/>

<img src="./readmeAssets/image%2077.png"><br/>



<br/>

<hr/><br/>



[ [🚀 최상단으로 이동](https://github.com/Chocobe/-Study-DesignPatter) ]

[ [🐫 ``StructuralPattern`` 으로 이동](https://github.com/Chocobe/-Study-DesignPatter/tree/master/src/_02_StructuralPattern) ]
