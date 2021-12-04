# 02_05 ``Facade`` 패턴

``Facade (퍼사드)`` 의 사전적 의미는 정면을 말합니다.

이를 건물을 대상으로 생각해 보면, 건물의 내부에 무엇이 있는가는 알지 못한 상태로, 건물의 정면만 보이는 상태 입니다.

<br/>

``Facade`` 패턴 역시, 복잡한 의존성들을 내부에 숨기고, Client가 사용하는 코드에는 간단한 interface를 통해서 실행할 수 있도록 만드는 패턴 입니다.

<br/>

``Facade`` 패턴은 라이브러리를 사용할 때, 복잡한 의존성과 사용방법 숙지가 필요한 경우, 이를 Client 코드에서는 간단하게 사용할 수 있게 해줍니다.

즉, 복잡한 ``서브 시스템 의존성`` 을 ``Facade`` class 에서 모두 사용하게 됩니다.


<br/>


## 장점

* ``서브 시스템 의존성`` 을 한 곳(``Facade``)로 모을 수 있습니다.


<br/>


## 단점

* ``Facade`` class 가 ``서브 시스템`` 의 모든 의존성을 가지게 됩니다.


<br/>


## 예시코드 시나리오

Email 전송 기능의 라이브러리를 사용하고자 할 때, 이 라이브러리의 사용방법 (의존성 주입) 이 매우 어렵다고 가정해 보겠습니다.

Email 기능을 사용할 때마다, 이 라이브러리를 직접 사용하는 것이 아니라, ``Facade`` 에서 구현한 후, 우리는 ``Facade`` 로 Email 전송 기능을 사용하고자 합니다.

<br/>

``./EmailLib/*`` 경로에는 Email 라이브러리 예시 코드 입니다.

* class InternetAddress (주소 class)
* class Session (세션 class)
* class MimeMessage (이메일 전송용 메시지 class)
* class Transport (전송 기능 class)

<br/>

``./`` 경로에는 ``Facade`` 예시 코드 입니다.

* class EmailSettingsFacade (이메일 전송 설정 Facade class)
* class EmailMessageFacade (이메일 메시지 Facade class)
* class EmailSenderFacade (전송 기능 Facade class)

<br/>

```javascript
// ./EmailLib/InternetAddress.js
// 라이브러리의 주소 class 

export default class InternetAddress {
  /** @type { string } */
  #address;

  constructor(address) {
    this.#address = address;
  }

  /** @returns { string } */
  getAddress() {
    return this.#address;
  }
  /** @param { string } address */
  setAddress(address) {
    this.#address = address;
  }
}
```

<br/>

```javascript
// ./EmailLib/Session.js
// 라이브러리의 세션 class

export default class Session {
  /** @type { Map } */
  #properties;

  /** @param { Map } properties */
  constructor(properties) {
    this.#properties = properties;
  }

  /** @returns { Map } */
  getProperties() {
    return this.#properties;
  }
}
```

<br/>

```javascript
// ./EmailLib/MimeMessag.js
// 이메일 전송용 메시지 class

/**
 * @typedef { import("./Session").default } Session
 * @typedef { import("./InternetAddress").default } InternetAddress
 */

export default class MimeMessage {
  /** @type { Session } */
  #session;

  /** @type { InternetAddress } */
  #from;
  
  /** @type { InternetAddress[] } */
  #recipients;

  /** @type { string } */
  #subject;

  /** @type { string } */
  #text;

  /** @param { Session } session */
  constructor(session) {
    this.#session = session;
    this.#recipients = [];
  }

  // session
  /** @returns { Session } */
  getSession() {
    return this.#session;
  }
  /** @param { Session } session */
  setSession(session) {
    this.#session = session;
  }

  // from
  /** @returns { InternetAddress } */
  getFrom() {
    return this.#from;
  }
  /** @param { InternetAddress } from */
  setFrom(from) {
    this.#from = from;
  }

  // recipients
  /** @returns { InternetAddress[] } */
  getRecipients() {
    return this.#recipients;
  }
  /** @param { InternetAddress } recipient */
  addRecipient(recipient) {
    this.#recipients.push(recipient);
  }

  // subject
  /** @returns { string } */
  getSubject() {
    return this.#subject;
  }
  /** @param { string } subject */
  setSubject(subject) {
    this.#subject = subject;
  }

  // text
  /** @returns { string } */
  getText() {
    return this.#text;
  }
  /** @param { string } text */
  setText(text) {
    this.#text = text;
  }
}
```

<br/>

```javascript
// ./EmailLib/Transport.js
// 전송 기능 class

/**
 * @typedef { import("./MimeMessage").default } MimeMessage
 */

export default class Transport {
  /** @param { MimeMessage } message */
  static send(message) {
    console.log(message.getFrom().getAddress());
    console.log(message.getRecipients().map(r => r.getAddress()));
    console.log(message.getSubject());
    console.log(message.getText());
  }
}
```

<br/>

```javascript
// ./EmailMessageFacade.js
// 이메일 메시지 Facade class

export default class EmailMessageFacade {
  /** @type { string } */
  #from;

  /** @type { string } */
  #to

  /** @type { string } */
  #subject;

  /** @type { string } */
  #text;

  // from
  /** @returns { string } */
  getFrom() {
    return this.#from;
  }
  /** @param { string } from */
  setFrom(from) {
    this.#from = from;
  }

  // to
  /** @returns { string } */
  getTo() {
    return this.#to;
  }
  /** @param { string } to */
  setTo(to) {
    this.#to = to;
  }

  // subject
  /** @returns { string } */
  getSubject() {
    return this.#subject;
  }
  /** @param { string } */
  setSubject(subject) {
    this.#subject = subject;
  }

  // text
  /** @returns { string } */
  getText() {
    return this.#text;
  }
  /** @param { string } text */
  setText(text) {
    this.#text = text;
  }
}
```

<br/>

```javascript
// ./EmailSettingsFacade.js
// 이메일 전송 설정 Facade class

export default class EmailSettingsFacade {
  /** @type { string } */
  #host;

  /** @param { string } host */
  constructor(host) {
    this.#host = host;
  }

  // host
  /** @returns { string } */
  getHost() {
    return this.#host;
  }
  /** @param { string } host */
  setHost(host) {
    this.#host = host;
  }
}
```

<br/>

```javascript
// ./EmailSenderFacade.js
// 전송 기능 Facade class

import Session from "./EmailLib/Session.js";
import InternetAddress from "./EmailLib/InternetAddress.js";
import MimeMessage from "./EmailLib/MimeMessage.js";
import Transport from "./EmailLib/Transport.js";

/**
 * @typedef { import("./EmailSettingsFacade").default } EmailSettingsFacade
 * @typedef { import("./EmailMessageFacade").default } EmailMessageFacade
 */

export default class EmailSenderFacade {
  /** @type { EmailSettingsFacade } */
  #emailSettings;

  /** @param { EmailSettingsFacade } emailSettings */
  constructor(emailSettings) {
    this.#emailSettings = emailSettings;
  }

  /** @param { EmailMessageFacade } emailMessage */
  sendEmail(emailMessage) {
    const properties = new Map();
    properties.set("mail.smtp.host", this.#emailSettings.getHost());

    const session = new Session(properties);

    const message = new MimeMessage(session);
    message.setFrom(new InternetAddress(emailMessage.getFrom()));
    message.addRecipient(new InternetAddress(emailMessage.getTo()));
    message.setSubject(emailMessage.getSubject());
    message.setText(emailMessage.getText());

    Transport.send(message);
  }
}
```

<br/>

```javascript
// ./App.js

import EmailSettingsFacade from "./EmailSettingsFacade.js";
import EmailMessageFacade from "./EmailMessageFacade.js";
import EmailSenderFacade from "./EmailSenderFacade.js";

const emailSettings = new EmailSettingsFacade("127.0.0.1");
const emailSender = new EmailSenderFacade(emailSettings);

const emailMessage = new EmailMessageFacade();
emailMessage.setFrom("chocobe@email.com");
emailMessage.setTo("yw@gmail.com");
emailMessage.setSubject("테스트 이메일");
emailMessage.setText("테스트 이메일 메시지 입니다.");

emailSender.sendEmail(emailMessage);
```

<br/>

<img src="./readmeAssets/image%206.png"><br/>



<br/>

<hr/><br/>



[ [🚀 최상단으로 이동](https://github.com/Chocobe/-Study-DesignPatter) ]

[ [🐫 ``StructuralPattern`` 으로 이동](https://github.com/Chocobe/-Study-DesignPatter/tree/master/src/_02_StructuralPattern) ]
