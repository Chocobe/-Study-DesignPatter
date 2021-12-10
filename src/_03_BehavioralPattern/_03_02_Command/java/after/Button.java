package _03_BehavioralPattern._03_02_Command.java.after;

import java.util.Stack;

public class Button {
  
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
    Light light = new Light();

    Button button = new Button();
    button.press(new LightOnCommand(light));
    button.press(new LightOffCommand(light));

    button.undo();
    button.undo();
    button.undo();
  }
  
}
