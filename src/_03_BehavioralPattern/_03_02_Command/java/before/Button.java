package _03_BehavioralPattern._03_02_Command.java.before;

public class Button {
  
  private Light light;

  public Button(Light light) {
    this.light = light;
  }

  public void press() {
    this.light.off();
  }

  public static void main(String[] args) {
    Button button = new Button(new Light());
    button.press();
    button.press();
    button.press();
  }
  
}
