package _02_StructuralPattern._02_07_Proxy.java.before;

public class Client {

  public static void main(String[] args) {
    GameService gameService = new GameService();
    gameService.startGame();
  }
  
}
