import Speed from "./Speed.js";

export default class FastestSpeed extends Speed {
  constructor() {
    super();
  }

  /** @override */
  blueLight() {
    console.log("무광꽃이");
  }

  /** @override */
  redLight() {
    console.log("폈슴다.");
  }
}