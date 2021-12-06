import GameService from "./GameService.js";
import DefaultGameService from "./DefaultGameService.js";

export default class GameServiceProxy extends GameService {
  /** @type { GameService } */
  #gameService;

  constructor() {
    super();
  }
  
  startGame() {
    if(!this.#gameService) {
      this.#gameService = new DefaultGameService();
    }

    console.time("실행시간: ");
    
    this.#gameService.startGame();

    setTimeout(() => {
      console.timeEnd("실행시간: ");
    }, 1001)
  }
}