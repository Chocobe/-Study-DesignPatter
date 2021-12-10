export default class Command {
  /** @abstract */
  execute() {
    throw new Error("Command.execute() 는 Abstract Method 입니다.");
  }

  /** @abstract */
  undo() {
    throw new Error("Command.undo() 는 Abstract Method 입니다.");
  }
}