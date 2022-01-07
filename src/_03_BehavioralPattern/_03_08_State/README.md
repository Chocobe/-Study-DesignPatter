# 03_08 ``State`` 패턴

객체의 특정 상태에 따라서 행동이 달라지는 경우, ``각 상태`` 를 ``동작과 함께 분리`` 하는 패턴 입니다.

``State (상태)`` 패턴의 가장 큰 특징은, 객체가 가질 수 있는 모든 특성과 해당 행동을 분리할 수 있다는 것입니다.

<br />

상태를 분리하는 간단한 예시로, TV 리모컨을 생각할 수 있습니다.

리모컨에는 체널이동 버튼이 있습니다.

채널이동 버튼은 TV의 상태에 따라 다음과 같은 동작을 하게 됩니다.

* TV 가 꺼진 경우: 동작하지 않음
* TV 가 켜진 경우: 체널 이동
* TV 옵션이 열려있는 경우: 옵션 이동
* 체널찾기가 열려있는 경우: 메뉴 이동

<br />

위의 예시를 상태에 따라 분기하는 코드로 만든다면, 다음과 같은 형식으로 만들 수 있습니다.

```javascript
class RemoteController {
  /** @type { "Off" | "On" | "Option" | "Menu " } */
  state;

  pressChannelButton() {
    const { state } = this;

    if (state === "Off") {
      // 동작하지 않음
    } else if (state === "On") {
      // 체널 이동
    } else if (state === "Option") {
      // 옵션 이동
    } else if (state === "Menu") {
      // 메뉴 이동
    }
  }
}
```

<br />

관여하는 상태가 많을수록 코드를 파악하는 것 뿐만 아니라, 유지보수, 기능 추가 등 모든 것이 어려워집니다.

여기에 ``State (상태)`` 패턴을 적용하면 TV 의 ``state`` 의 ``Concrete Class`` 에 맞는 동작을 하도록 분리할 수 있습니다.

또한, 새로운 기능을 추가할 때에도 기존의 코드는 전혀 수정하지 않고 추가할 수 있게 됩니다.

<br />

``State (상태)`` 패턴의 구성요소는 다음과 같습니다.

* ``Context``: 상태를 가지며, 상태에 따라 동작하는 객체 (실제 동작은 ``State``에 위임)
* ``State``: ``Context``가 가지는 ``State (상태)`` 들의 공통 ``interface``
  * ``Context`` 에서 ``State (상태)``에 따라 동작을 다르게 하는 모든 메서드를 가지는 ``interface``
* ``Concrete State`` ``State`` 구현 class


<br />


## 장점

* 상태에 따른 동작을 ``개별 Class`` 로 옮겨서 관리할 수 있습니다.
* 기존의 ``State (상태) class`` 를 수정하지 않고, 새로운 상태에 따른 동작을 추가할 수 있습니다.
* 각 ``Concrete State Class``로 행동을 분리하므로, 분기문을 모두 개별로 분리할 수 있습니다.
  * 결과적으로 해동 ``State (상태)`` 에 따른 분기문은 모두 없어집니다.


<br />


## 단점

* ``Concrete State`` 가 분리되므로, 코드의 복잡도가 올라갈 수 있다고 하지만, 개인적으로 복잡도가 낮아지는 것으로 느껴집니다.


<br />


## 예시코드 시나리오

온라인 수업에 학생이 수강하고 리뷰를 적는 프로그램을 만들어 보겠습니다.

온라인 수업은 ``수강하기``, ``리뷰쓰기`` 기능을 가집니다.
그리고 ``PUBLIC``, ``DRAFT``, ``PRIVATE`` 상태를 가지며, 상태에 따라 다른 동작을 하게 됩니다.

* ``PUBLIC`` 상태
  * 수강하기 ⭕
  * 리뷰쓰기 ⭕
* ``PRIVATE`` 상태
  * 수강하기 - 학생에게 권한이 있을때만 가능
  * 리뷰쓰기 - 수강중인 학생만 가능
* ``DRAFT``
  * 수강하기 ⭕ - 학생수가 2명 이상이면, ``PRIVATE`` 상태로 변경
  * 리뷰쓰기 ❌

<br />

* class Student (학생 class)
* class OnlineCourse (수업 class)
* class State (OnlineCourse 의 ``State (상태) interface``)
  * class PublicState extends State (``Public`` 상태)
  * class PrivateState extends State (``Private`` 상태)
  * class DraftState extends State (``Draft`` 상태)

<br />

```javascript
// Student.js
// 학생 class

/**
 * @typedef { import("./OnlineCourse").default } OnlineCourse
 */

export default class Student {
  /** @type { string } */
  _name;

  /** @type { Set<OnlineCourse> } */
  _onlineCourses;
  
  /** @param { string } name */
  constructor(name) {
    this._name = name;
    this._onlineCourses = new Set();
  }

  /** @returns { string } */
  getName() {
    return this._name;
  }

  /** @returns { boolean } */
  isAvailable(onlineCourse) {
    return this._onlineCourses.has(onlineCourse);
  }

  /** @param { OnlineCourse } onlineCourse */
  addPrivate(onlineCourse) {
    this._onlineCourses.add(onlineCourse);
  }
}
```

<br />

```javascript
// OnlineCourse.js
// 수업 class

/**
 * @typedef { import("./Student").default } Student
 * @typedef { import("./State").default } State
 */

export default class OnlineCourse {
  /** @type { State } */
  _state;
  
  /** @type { Student[] } */
  _students;

  /** @type { string[] } */
  _reviews;

  constructor() {
    this._students = [];
    this._reviews = [];
  }
  
  /** @returns { State } */
  getState() {
    return this._state;
  }

  /** @returns { Student[] } */
  getStudents() {
    return this._students;
  }

  /** @returns { string[] } */
  getReviews() {
    return this._reviews;
  }

  /** @param { State } state */
  changeState(state) {
    this._state = state;
  }

  /** @param { Student } student */
  addStudent(student) {
    this._state.addStudent(student);
  }

  /**
   * @param { Student } student
   * @param { string } review
   */
  addReview(student, review) {
    this._state.addReview(student, review);
  }
}
```

<br />

```javascript
// State.js
// OnlineCourse 의 ``State (상태) interface``

/**
 * @typedef { import("./Student").default } Student
 */

export default class State {
  /**
   * @abstract
   * @param { Student } _student
   */
  addStudent(_student) {
    throw new Error("State.addStudent() 는 Abstract Method 입니다.");
  }

  /**
   * @abstract
   * @param { Student } _student 
   * @param { string } _review 
   */
  addReview(_student, _review) {
    throw new Error("State.addReview() 는 Abstract Method 입니다.");
  }
}
```

<br />

```javascript
// PublicState.js
// ``Public`` 상태

import State from "./State.js";

/**
 * @typedef { import("./OnlineCourse").default } OnlineCourse
 * @typedef { import("./Student").default } Student
 */

export default class PublicState extends State {
  /** @type { OnlineCourse } */
  _onlineCourse;

  /** @param { OnlineCourse } onlineCourse */
  constructor(onlineCourse) {
    super();
    this._onlineCourse = onlineCourse;
  }

  /** 
   * @override
   * @param { Student }  
   */
  addStudent(student) {
    this._onlineCourse.getStudents().push(student);
  }

  /**
   * @override
   * @param { Student } _student 
   * @param { string } review 
   */
  addReview(_student, review) {
    this._onlineCourse.getReviews().push(review);
  }
}
```

<br />

```javascript
// PrivateState.js
// ``Private`` 상태

import State from "./State.js";

/**
 * @typedef { import("./OnlineCourse").default } OnlineCourse
 * @typedef { import("./Student").default } Student
 */

export default class PrivateState extends State {
  /** @type { OnlineCourse } */
  _onlineCourse;

  /** @param { OnlineCourse } onlineCourse */
  constructor(onlineCourse) {
    super();
    this._onlineCourse = onlineCourse;
  }

  /** 
   * @override
   * @param { Student } student 
   */
  addStudent(student) {
    if (student.isAvailable(this._onlineCourse)) {
      this._onlineCourse.getStudents().push(student);
    } else {
      throw new Error("프라이빗 코스의 수강 권한이 없습니다.");
    }
  }

  /**
   * @override
   * @param { Student } student 
   * @param { string } review 
   */
  addReview(student, review) {
    if (this._onlineCourse.getStudents().includes(student)) {
      this._onlineCourse.getReviews().push(review);
    } else {
      throw new Error("프라이빗 코스를 수강하는 학생만 리뷰를 남길 수 있습니다.");
    }
  }
}
```

<br />

```javascript
// DraftState.js
// ``Draft`` 상태

import State from "./State.js";
import PrivateState from "./PrivateState.js";

/**
 * @typedef { import("./OnlineCourse").default } OnlineCourse
 * @typedef { import("./Student").default } Student
 */

export default class DraftState extends State {
  /** @type { OnlineCourse } */
  _onlineCourse;

  /** @param { OnlineCourse } onlineCourse */
  constructor(onlineCourse) {
    super();
    this._onlineCourse = onlineCourse;
  }

  /**
   * @override
   * @param { Student } student 
   */
  addStudent(student) {
    this._onlineCourse.getStudents().push(student);

    if (this._onlineCourse.getStudents().length > 1) {
      this._onlineCourse.changeState(new PrivateState(this._onlineCourse));
    }
  }

  /**
   * @override
   * @param { Student } _student 
   * @param { string } _review 
   */
  addReview(_student, _review) {
    throw new Error("드래프트 상태에서는 리뷰를 남길 수 없습니다.");
  }
}
```

<br />

```javascript
// Client.js

import OnlineCourse from "./OnlineCourse.js";
import PublicState from "./PublicState.js";
import PrivateState from "./PrivateState.js";
import DraftState from "./DraftState.js";
import Student from "./Student.js";

const onlineCourse = new OnlineCourse();
const draftState = new DraftState(onlineCourse);
onlineCourse.changeState(draftState);

// const publicState = new PublicState(onlineCourse);
// onlineCourse.changeState(publicState);

const kim = new Student("영우");
// kim.addPrivate(onlineCourse);

onlineCourse.addStudent(kim);
onlineCourse.changeState(new PrivateState(onlineCourse));

onlineCourse.addReview(kim, "Hello World");

const chocobe = new Student("초코비");
chocobe.addPrivate(onlineCourse);
onlineCourse.addStudent(chocobe);

onlineCourse.addReview(chocobe, "안녕하세요");

console.log(onlineCourse.getState());
console.log(onlineCourse.getStudents());
console.log(onlineCourse.getReviews());
```

<br />

<img src="./readmeAssets/image%2019.png"><br />



<br/>

<hr/><br/>



[ [🚀 최상단으로 이동](https://github.com/Chocobe/-Study-DesignPatter) ]

[ [🐫 ``BehavioralPattern`` 으로 이동](https://github.com/Chocobe/-Study-DesignPatter/tree/master/src/_03_BehavioralPattern) ]
