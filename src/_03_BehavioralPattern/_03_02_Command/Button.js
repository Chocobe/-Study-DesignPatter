/**
 * @typedef { import("./Command").default } Command
 */

export default class Button {
  /** @type { Command[] } */
  #commands;

  constructor() {
    this.#commands = [];
  }
  
  /** @param { Command } command */
  press(command) {
    command.execute();
    this.#commands.push(command);
  }

  undo() {
    const prevCommand = this.#commands.pop();

    prevCommand && prevCommand.undo();
  }
}