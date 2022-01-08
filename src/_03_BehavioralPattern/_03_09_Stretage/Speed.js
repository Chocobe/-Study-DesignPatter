export default class Speed {
  /** @abstract */
  blueLight() {
    throw new Error("Speed.blueLight() 는 Abstract Method 입니다.");
  }

  /** @abstract */
  redLight() {
    throw new Error("Speed.redLight() 는 Abstract Method 입니다.");
  }
}