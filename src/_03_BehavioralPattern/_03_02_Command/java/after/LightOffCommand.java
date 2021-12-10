package _03_BehavioralPattern._03_02_Command.java.after;

public class LightOffCommand implements Command {

  private Light light;

  public LightOffCommand(Light light) {
    this.light = light;
  }

  @Override
  public void execute() {
    this.light.off();
  }

  @Override
  public void undo() {
    new LightOnCommand(this.light).execute();
  }
  
}
