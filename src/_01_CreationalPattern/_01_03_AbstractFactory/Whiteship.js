import Ship from "./Ship.js";

export default class Whiteship extends Ship {
  /**
   * @param { string } name
   */
  constructor(name) {
    super();

    this.setName(name);
    this.setType("whiteship");
    this.setColor("#fff");
    this.setLogo("🚀");
  }
}