export default class Champion {
  /**
   * @abstract
   */
  move() {
    throw new Error("Champion.move() 는 Abstract Method 입니다.");
  }

  /**
   * @abstract
   */
  skillQ() {
    throw new Error("Champion.skillQ() 는 Abstract Method 입니다.");
  }

  /**
   * @abstract
   */
  skillW() {
    throw new Error("Champion.skillW() 는 Abstract Method 입니다.");
  }

  /**
   * @abstract
   */
  skillE() {
    throw new Error("Champion.skillE() 는 Abstract Method 입니다.");
  }

  /**
   * @abstract
   */
  skillR() {
    throw new Error("Champion.skillR() 는 Abstract Method 입니다.");
  }

}