import Speed from "./Speed.js";

export default class NormalSpeed extends Speed {
  constructor() {
    super();
  }
  
  /** @override */
  blueLight() {
    console.log("무 궁 화    꽃  이");
  }

  /** @override */
  redLight() {
    console.log("피 었 습 니 다.");
  }
}