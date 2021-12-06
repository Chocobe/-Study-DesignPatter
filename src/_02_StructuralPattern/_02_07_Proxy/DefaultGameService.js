import GameService from "./GameService.js";

export default class DefaultGameService extends GameService {
  constructor() {
    super();
  }
  
  /** @override */
  startGame() {
    setTimeout(() => {
      console.log("게임을 시작하지...");
    }, 1000);
  }
}