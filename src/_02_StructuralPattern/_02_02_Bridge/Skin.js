export default class Skin {
  /**
   * @abstract
   * @returns { string }
   */
  getName() {
    throw new Error("Skin.getName() 은 Abstract Method 입니다.");
  }
}