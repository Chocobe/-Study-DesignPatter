/**
 * @typedef { import("./Subscriber").default } Subscriber
 */

export default class ChatServer {
  /** @type {{ [key: string]: Subscriber[] }} */
  #subscribers;

  constructor() {
    this.#subscribers = {};
  }

  /**
   * @param { string } subject 
   * @param { Subscriber } subscriber 
   */
  subscribe(subject, subscriber) {
    this.#subscribers[subject]
      ? this.#subscribers[subject].push(subscriber)
      : this.#subscribers[subject] = [subscriber]
  }

  /**
   * @param { string } subject 
   * @param { Subscriber } subscriber 
   */
  unsubscribe(subject, subscriber) {
    if (!this.#subscribers[subject]) return

    const idx = this.#subscribers[subject].findIndex(subscriber);
    !isNil(idx) && this.#subscribers[subject].splice(idx, 1);
  }

  /**
   * 
   * @param { string } subject 
   * @param { Subscriber } subscriber 
   * @param { string } message 
   */
  sendMessage(subject, subscriber, message) {
    if (!this.#subscribers[subject]) return

    const resultMessage = `[작성자: ${subscriber.getName()}] - ${message}`;
    this.#subscribers[subject].forEach(s => s.handleMessage(resultMessage));
  }
}