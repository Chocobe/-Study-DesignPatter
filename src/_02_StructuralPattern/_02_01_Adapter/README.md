# 02_01 ``Adaptor`` 패턴

개발 서비스에 따라 상황에 맞는 interface 가 필요합니다.

만약 라이브러리 처럼 우리가 수정할 수 없는 코드와 연동해야 할 경우, 서로 다른 interface 를 호환되도록 변환이 필요한데, 이 때 호환될 수 있도록 해주는 Class 를 ``Adaptor`` 패턴 이라고 합니다.

<br/>

``Adaptor`` 패턴을 일상생활에 비유하면, 110v 가전제품을 220v 콘센트에서 사용하기 위해 추가로 연결하는 변환기기와 같습니다.

즉, ``Adaptor`` 패턴은 두개의 서로다른 interface 의 간극을 메워주는 역할이 필요할 때 유용합니다.

<br/>

``Adaptor`` 패턴의 구성은 크게 3가지로 볼 수 있습니다.

* ``Target``: 우리가 구현한 코드 (``Adaptee`` 와 interface 가 다른 상태)
* ``Adaptee``: 우리가 맞춰야 하는 interface (라이브러리 등)
* ``Adaptor``: ``Target`` 과 ``Adaptee`` 를 호환시켜주는 역할


<br/>


## 장점

* 기존코드를 수정하지 않고도 서로다른 두개의 interface 를 연결할 수 있습니다. (``OCP: Open Closed Principle`` - 개방 폐쇄 원칙)
* ``Adaptor`` 와 ``Adaptee`` 를 별도로 만들면, ``Adaptor`` 의 기능을 분리해서 만들 수 있습니다. (``SRP: Single Responsibility Principle`` - 단일 책임 원칙)


<br/>


## 단점

* 코드의 복잡도가 증가합니다.


<br/>


## 예시코드 시나리오

* (Lib 역할) interface UserDetail
* (Lib 역할) interface UserDetailService
* (Lib 역할) class LoginHandler

* (실제 개발 코드) class Account
* (실제 개발 코드) class AccountService

* (``Adaptor``) class AccountUserDetail extends UserDetail
* (``Adaptor``) class AccountUserDetailService extends UserDetailService

<br/>

## 모의 라이브러리

```javascript
// UserDetail.js
// interface 역할

export default class UserDetail {
  /**
   * @abstract
   * @returns { string }
   */
  getUsername() {
    throw new Error("UserDetail.getUsername() 은 Abstract Method 입니다.");
  }

  /**
   * @abstract
   * @returns { string }
   */
  getPassword() {
    throw new Error("UserDetail.getPassword() 는 Abstract Method 입니다.");
  }
}
```

<br/>

```javascript
// UserDetailService.js
// interface 역할

/**
 * @typedef { import("./UserDetail").default } UserDetail
 */

export default class UserDetailService {
  /**
   * @abstract
   * @param { string } _username
   * @returns { UserDetail }
   */
  loadUser(_username) {
    throw new Error("UserDetailService.loadUser() 는 Abstract Method 입니다.");
  }
}
```

<br/>

```javascript
// LoginHandler.js
// 라이브러리 동작(실행) class

/**
 * @typedef { import("./UserDetailService").default } UserDetailService
 */

export default class LoginHandler {
  /** @type { UserDetailService } */
  #userDetailService;

  /** @param { UserDetailService } */
  constructor(userDetailService) {
    this.#userDetailService = userDetailService;
  }

  /**
   * @param { string } username
   * @param { string } password
   * @returns { string }
   */
  login(username, password) {
    const userDetail = this.#userDetailService.loadUser(username);
    
    if(userDetail.getPassword() === password) {
      return userDetail.getUsername();
    } else {
      throw new Error("로그인 실패");
    }
  }
}
```

<br/>

## 우리가 개발한 코드

```javascript
// Account.js
// (우리가 개발한 코드) 사용자 정보

export default class Account {
  /** @type { string } */
  #name;

  /** @type { string } */
  #pw;

  /** @type { string } */
  #email;

  // name
  /** @returns { string } */
  getName() {
    return this.#name;
  }
  /** @param { string } name */
  setName(name) {
    this.#name = name;
  }

  // pw
  /** @returns { string } */
  getPw() {
    return this.#pw;
  }
  /** @param { string } pw */
  setPw(pw) {
    this.#pw = pw;
  }

  // email
  /** @returns { string } */
  getEmail() {
    return this.#email;
  }
  /** @param { string } email */
  setEmail(email) {
    this.#email = email;
  }
}
```

<br/>

```javascript
// AccountService.js
// (우리가 개발한 코드) 사용자 정보 서비스 객체

import Account from "./Account.js"

export default class AccountService {
  /**
   * @param { string } name
   * @returns { Account }
   */
  findAccountByName(name) {
    const account = new Account();
    account.setName(name);
    account.setPw(name);
    account.setEmail(name);

    return account;
  }
}
```

<br/>

## ``Adaptor`` 패턴 구현

```javascript
// AccountUserDetail.js
// Account 와 UserDetail 의 Adaptor

import UserDetail from "./UserDetail.js";

/**
 * @typedef { import("./Account").default } Account
 */

export default class AccountUserDetail extends UserDetail {
  /** @type { Account } */
  #account;

  /** @param { Account } account */
  constructor(account) {
    super();
    this.#account =account;
  }

  /**
   * @override
   * @returns { string }
   */
  getUsername() {
    return this.#account.getName();
  }

  /**
   * @override
   * @returns { string }
   */
  getPassword() {
    return this.#account.getPw();
  }
}
```

<br/>

```javascript
// AccountUserDetailService.js
// AccountService 와 UserDetailService 의 Adaptor

import AccountUserDetail from "./AccountUserDetail.js";
import UserDetailService from "./UserDetailService.js";

/**
 * @typedef { import("./AccountService").default } AccountService
 * @typedef { import("./UserDetail").default } UserDetail
 */

export default class AccountUserDetailService extends UserDetailService {
  /** @type { AccountService } */
  #accountService;

  /** @param { AccountService } accountService */
  constructor(accountService) {
    super();
    this.#accountService = accountService;
  }

  /**
   * @override
   * @param { string } name
   * @returns { UserDetail }
   */
  loadUser(name) {
    const account = this.#accountService.findAccountByName(name);
    const accountUserDetail = new AccountUserDetail(account);
    return accountUserDetail;
  }
}
```

<br/>

## 예시코드 실행

```javascript
// App.js

import AccountService from "./AccountService.js";
import AccountUserDetailService from "./AccountUserDetailService.js";
import LoginHandler from "./LoginHandler.js";

/**
 * @typedef { import("./UserDetailService").default } UserDetailService
 */

const accountService = new AccountService();

/** @type { UserDetailService } */
const accountUserDetailService = new AccountUserDetailService(accountService);

const loginHandler = new LoginHandler(accountUserDetailService);
console.log(loginHandler.login("Kim", "Kim"));
```



<br/>

<hr/><br/>



[ [🚀 최상단으로 이동](https://github.com/Chocobe/-Study-DesignPatter) ]

[ [🐫 ``StructuralPattern`` 으로 이동](https://github.com/Chocobe/-Study-DesignPatter/tree/master/src/_02_StructuralPattern) ]
