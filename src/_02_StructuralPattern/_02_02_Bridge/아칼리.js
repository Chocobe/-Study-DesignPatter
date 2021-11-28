import DefaultChampion from "./DefaultChampion.js";

/**
 * @typedef { import("./Skin").default } Skin
 */

export default class 아칼리 extends DefaultChampion {
  /** @param { Skin } skin */
  constructor(skin) {
    super("아칼리", skin);
  }
}