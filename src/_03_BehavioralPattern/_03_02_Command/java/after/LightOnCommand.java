package _03_BehavioralPattern._03_02_Command.java.after;

public class LightOnCommand implements Command {

  private Light light;

  public LightOnCommand(Light light) {
    this.light = light;
  }

  @Override
  public void execute() {
    this.light.on();
  }

  @Override
  public void undo() {
    new LightOffCommand(this.light).execute();
  }
  
}
