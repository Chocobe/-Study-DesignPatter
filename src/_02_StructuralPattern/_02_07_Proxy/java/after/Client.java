package _02_StructuralPattern._02_07_Proxy.java.after;

public class Client {
  
  public static void main(String[] args) {
    GameService gameService = new GameServiceProxy();
    gameService.startGame();
  }
  
}
