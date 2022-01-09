package _03_BehavioralPattern._03_11_Visitor.java.after;

public class Star implements Shape {

  @Override
  public void accept(Device device) {
    device.print(this);
  }
  
}
