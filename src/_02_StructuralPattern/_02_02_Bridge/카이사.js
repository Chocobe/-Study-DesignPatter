import DefaultChampion from "./DefaultChampion.js";

/**
 * @typedef { import("./Skin").default } Skin
 */

export default class 카이사 extends DefaultChampion {
  /** @param { Skin } skin */
  constructor(skin) {
    super("카이사", skin);
  }
}