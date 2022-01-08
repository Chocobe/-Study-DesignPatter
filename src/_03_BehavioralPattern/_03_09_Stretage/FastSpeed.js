import Speed from "./Speed.js";

export default class FastSpeed extends Speed {
  constructor() {
    super();
  }
  
  /** @override */
  blueLight() {
    console.log("무궁화 꽃이");
  }

  /** @override */
  redLight() {
    console.log("피었습니다.");
  }
}