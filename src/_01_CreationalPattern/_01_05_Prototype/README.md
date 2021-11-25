# 01_05 ``Prototype`` 패턴

``Prototype`` 패턴은 새로운 객체를 생성할 때, 기존 객체를 복제하는 방식을 말합니다.

복제 방법에는 의도에 따라, ``깊은복사`` 또는 ``얕은복사`` 를 사용하며, 이는 객체 생성에 많은 비용(시간 또는 메모리) 를 필요로 할 때, 유용합니다.

그리고 기존 객체는 유지하면서, 이 객체를 응용하고자 할 때도 유용합니다.

즉, 새로운 객체지만 기존 객체에서 몇가지의 멤버만 다른 객체가 필요할 때 사용할 수 있습니다.


<br/>


## 장점

* 복잡한 객체를 생성하는 과정을 숨길 수 있습니다. (``복제``)
* 새로운 객체에 많은 비용이 필요할 때, 복제를 통해서 이 비용을 절감할 수 있습니다.


<br/>


## 단점

순환구조 객체처럼 복잡한 객체의 경우, ``Prototype`` 패턴을 구현하기 어려워 집니다.


<br/>


## 예시코드 시나리오

``Github 저장소`` 와 이 저장소의 ``Issue`` 를 객체로 만드는 시나리오 입니다.

* class GithubRepository (저장소)
* class GithubIssue (이슈 - ``Prototype`` 패턴 적용)

<br/>

```javascript
// GithubRepository.js

export default class GithubRepository {
  /**
   * 유저명
   * @type { string }
   */
  #user;

  /**
   * 저장소명
   * @type { string }
   */
  #name;

  /** @returns { string } */
  getUser() {
    return this.#user;
  }
  /** @param { string } user */
  setUser(user) {
    this.#user = user;
  }

  /** @returns { string } */
  getName() {
    return this.#name;
  }
  /** @param { string } name */
  setName(name) {
    this.#name = name;
  }
}
```

<br/>

```javascript
// GithubIssue.js

import GithubRepository from "./GithubRepository.js";

export default class GithubIssue {
  /** @type { number } */
  #id;

  /**
   * 이슈명
   * @type { string }
   */
  #title;

  /**
   * 저장소
   * @type { GithubRepository }
   */
  #repository;

  /** @param { GithubRepository } repository */
  constructor(repository) {
    this.#repository = repository;
  }

  /** @returns { number } */
  getId() {
    return this.#id;
  }
  /** @param { number } id */
  setId(id) {
    this.#id = id;
  }

  /** @returns { string } */
  getTitle() {
    return this.#title;
  }
  /** @param { string } title */
  setTitle(title) {
    this.#title = title;
  }

  /** @returns { GithubRepository } */
  getRepository() {
    return this.#repository;
  }

  /** @returns { string } */
  getUrl() {
    return `
      URL: https://github.com/${this.#repository.getUser()}/${this.#repository.getName()}/${this.#id}
    `;
  }

  /**
   * Prototype 패턴 적용 메서드 (깊은복사로 구현한 예)
   * @returns { GithubIssue }
   */
  cloneDeep() {
    const originRepository = this.#repository;

    const clonedRepository = new GithubRepository();
    clonedRepository.setUser(originRepository.getUser());
    clonedRepository.setName(originRepository.getName());

    const issue = new GithubIssue(clonedRepository);
    issue.setId(this.#id);
    issue.setTitle(this.#title);

    return issue;
  }
}
```

<br/>

```javascript
// App.js

import GithubRepository from "./GithubRepository.js";
import GithubIssue from "./GithubIssue.js";

const repository = new GithubRepository();
repository.setUser("영우");
repository.setName("디자인 패턴 스터디");

const issue = new GithubIssue(repository);
issue.setId(1);
issue.setTitle("Prototype 패턴");

console.log(issue.getUrl());

const clonedIssue = issue.cloneDeep();

console.log(clonedIssue.getUrl());

issue.getRepository().setName("변경한 저장소 명");
console.log(issue.getUrl());
console.log(clonedIssue.getUrl());
console.log(`Prototype 복제 객체는 서로 다르다: ${issue !== clonedIssue}`);
```

<br/>

<img src="./readmeAssets/image%203.png" width="700px"><br/>



<br/>

<hr/><br/>



[ [🚀 최상단으로 이동](https://github.com/Chocobe/-Study-DesignPatter) ]

[ [🐫 ``CreationalPattern`` 으로 이동](https://github.com/Chocobe/-Study-DesignPatter/tree/master/src/_01_CreationalPattern) ]
