export default class {
  /** @abstract */
  startGame() {
    throw new Error("GameService.startGame() 은 Abstract Method 입니다.");
  }
}