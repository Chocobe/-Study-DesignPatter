/**
 * @typedef { import("./Speed").default } Speed
 */

export default class BlueLightRedLight {
  /** @param { Speed } speed */
  blueLight(speed) {
    speed.blueLight();
  }

  /** @param { Speed } speed */
  redLight(speed) {
    speed.redLight();
  }
}