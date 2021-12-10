package _03_BehavioralPattern._03_02_Command.java.after;

public class GameStartCommand implements Command {

  private Game game;

  public GameStartCommand(Game game) {
    this.game = game;
  }

  @Override
  public void execute() {
    this.game.start();
  }

  @Override
  public void undo() {
    new GameEndCommand(this.game).execute();
  }
  
}
