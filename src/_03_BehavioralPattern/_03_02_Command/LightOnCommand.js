import Command from "./Command.js";
import LightOffCommand from "./LightOffCommand.js";

/**
 * @typedef { import("./Light").default } Light
 */

export default class LightOnCommand extends Command {
  /** @type { Light } */
  #light;

  /** @param { Light } light */
  constructor(light) {
    super();
    this.#light = light;
  }

  /** @override */
  execute() {
    this.#light.on();
  }

  /** @override */
  undo() {
    new LightOffCommand(this.#light).execute();
  }
}