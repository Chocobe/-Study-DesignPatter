export default class Subscriber {
  /**
   * @abstract
   * @returns { string }
   */
  getName() {
    throw new Error("Subscriber.getName() 은 Abstract Method 입니다.");
  }

  /** @param { string } message */
  handleMessage(message) {
    throw new Error("Subscriber.handleMessage() 는 Abstract Method 입니다.");
  }
}