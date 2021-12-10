package _03_BehavioralPattern._03_02_Command.java.after;

import java.util.Stack;

public class MyApp {

  private Stack<Command> commands = new Stack<>();

  public void press(Command command) {
    command.execute();
    this.commands.push(command);
  }

  public void undo() {
    if(!this.commands.empty()) {
      Command prevCommand = this.commands.pop();
      prevCommand.undo();
    }
  }

  public static void main(String[] args) {
    MyApp app = new MyApp();
    Game game = new Game();

    app.press(new GameStartCommand(game));
    app.press(new GameStartCommand(game));
    app.press(new GameEndCommand(game));
    app.undo();
    app.undo();
    app.undo();
  }
  
}
