# 03_06 ``Memento`` 패턴

``Memento`` 는 기념물 또는 기념사진이라는 의미를 가지고 있습니다.

``Memento`` 패턴은 객체의 상태정보를 스냅샷으로 보관하는 패턴이며, ``Client`` 에서는 ``Originator``에 대한 아무런 정보 없이 객체의 스냅샷을 보관할 수 있습니다.

<br />

``Memento`` 객체의 특징은 ``immutable`` 객체라는 점 입니다.

이는 객체의 특정 시점 스냅샷을 저장하는 것이 목적이기 때문에, 값을 임의로 바꾸지 못하게 하기 위함 입니다.

<br />

``Memento`` 패턴의 구성요소는 다음과 같습니다.

* ``Originator`` : ``Memento`` 대상 객체
* ``Memento`` : ``Originator`` 의 순간 스냅샷을 저장하기 위한 객체 (``immutable``)
* ``CareTaker`` : ``Originator`` 의 ``Memento``를 생성하고 복원하는 책임을 수행하는 객체

<br />

``CareTaker`` 객체는 별도로 만들수도 있고, ``Originator`` 에서 메서드로 제공하도록 만들수도 있습니다.

중요한 점은 ``Memento`` 객체는 ``immutable`` 하게 만드는 것입니다.


<br />


## 장점

* 객체의 내부 정보를 노출시키지 않고, 객체의 스냅샷을 외부(``Client``)에 저장할 수 있습니다.


<br />


## 단점

* 메모리 사용량이 커집니다.


<br />


## 예시코드 시나리오

게임을 저장하고, 불러오는 기능을 ``Memento`` 패턴으로 구현해 보겠습니다.

저장 데이터를 ``Memento`` 로 만들고, 게임 객체는 ``Memento`` 를 불러오는 시나리오 입니다.

<br />

* class Game (게임 상태정보를 가진 데이터 - ``Originator``)
* class GameSave (``Memento`` 객체)
* class Client (게임을 저장하고 불러오는 ``CareTaker`` 객체)

<br />

```javascript
// Game.js
// 게임 상태정보를 가진 데이터 - ``Originator``

import GameSave from "./GameSave.js";

export default class Game {
  /** @type { number } */
  _blueTeamScore;

  /** @type { number } */
  _redTeamScore;

  /** @returns { number } */
  getBlueTeamScore() {
    return this._blueTeamScore;
  }
  
  /** @param { number } blueTeamScore */
  setBlueTeamScore(blueTeamScore) {
    this._blueTeamScore = blueTeamScore;
  }

  /** @returns { number } */
  getRedTeamScore() {
    return this._redTeamScore;
  }

  /** @param { number } redTeamScore */
  setRedTeamScore(redTeamScore) {
    this._redTeamScore = redTeamScore;
  }

  /** @returns { GameSave } */
  save() {
    return new GameSave(this._blueTeamScore, this._redTeamScore);
  }

  /** @param { GameSave } gameSave  */
  restore(gameSave) {
    this._blueTeamScore = gameSave.getBlueTeamScore();
    this._redTeamScore = gameSave.getRedTeamScore(); 
  }
}
```

<br />

```javascript
// GameSave.js
// ``Memento`` 객체

export default class GameSave {
  /** @type { number } */
  _blueTeamScore;

  /** @type { number } */
  _redTeamScore;

  constructor(blueTeamScore, redTeamScore) {
    this._blueTeamScore = blueTeamScore;
    this._redTeamScore = redTeamScore;
  }

  /** @returns { number } */
  getBlueTeamScore() {
    return this._blueTeamScore;
  }

  /** @returns { number } */
  getRedTeamScore() {
    return this._redTeamScore;
  }
}
```

<br />

```javascript
// Client.js
// 게임을 저장하고 불러오는 ``CareTaker`` 객체

import GameSave from "./GameSave.js";

/**
 * @typedef { import("./Game").default } Game
 */

export default class Client {
  /** @type { GameSave } */
  _gameSave;

  /** @param { Game } game */
  save(game) {
    this._gameSave = game.save();
  }

  /** @param { Game } game */
  load(game) {
    game.restore(this._gameSave);
  }
}
```

<br />

```javascript
// App.js

import Game from "./Game.js";
import Client from "./Client.js";

const client = new Client();

const game = new Game();
game.setBlueTeamScore(10);
game.setRedTeamScore(20);

client.save(game);

game.setBlueTeamScore(15);
game.setRedTeamScore(25);

client.load(game);

console.log(game.getBlueTeamScore());
console.log(game.getRedTeamScore());
```



<br/>

<hr/><br/>



[ [🚀 최상단으로 이동](https://github.com/Chocobe/-Study-DesignPatter) ]

[ [🐫 ``BehavioralPattern`` 으로 이동](https://github.com/Chocobe/-Study-DesignPatter/tree/master/src/_03_BehavioralPattern) ]
