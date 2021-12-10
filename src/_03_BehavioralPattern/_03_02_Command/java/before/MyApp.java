package _03_BehavioralPattern._03_02_Command.java.before;

public class MyApp {
  
  private Game game;

  public MyApp(Game game) {
    this.game = game;
  }

  public void press() {
    this.game.start();
  }
  
  public static void main(String[] args) {
    Game game = new Game();
    MyApp app = new MyApp(game);
    app.press();
    app.press();
  }
  
}
