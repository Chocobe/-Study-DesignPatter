export default class Component {
  /**
   * @abstract
   * @returns { number }
   */
  getPrice() {
    throw new Error("Component.getPrice() 는 Abstract Method 입니다.");
  }
}