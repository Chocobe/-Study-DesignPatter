export default class Light {
  /** @type { boolean } */
  #isOn;

  on() {
    console.log("불을 켭니다...");
    this.#isOn = true;
  }

  off() {
    console.log("...불끄기");
    this.#isOn = false;
  }

  /** @returns { boolean } */
  isOn() {
    return this.#isOn;
  }
}