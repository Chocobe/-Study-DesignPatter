import Command from "./Command.js";
import LightOnCommand from "./LightOnCommand.js";

/**
 * @typedef { import("./Light").default } Light
 */

export default class LightOffCommand extends Command {
  /** @type { Light } */
  #light;

  /** @param { Light } light */
  constructor(light) {
    super();
    this.#light = light;
  }

  /** @override */
  execute() {
    this.#light.off();
  }

  /** @override */
  undo() {
    new LightOnCommand(this.#light).execute();
  }
}