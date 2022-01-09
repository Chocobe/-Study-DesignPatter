package _03_BehavioralPattern._03_11_Visitor.java.before;

public class Rectangle implements Shape {
  
  @Override
  public void toPrint(Device device) {
    if (device instanceof Phone) {
      System.out.println("print rectangle to Phone");
    } else if (device instanceof Watch) {
      System.out.println("print rectangle to Watch");
    }
  }
  
}
