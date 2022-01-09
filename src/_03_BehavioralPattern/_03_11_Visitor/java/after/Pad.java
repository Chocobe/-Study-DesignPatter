package _03_BehavioralPattern._03_11_Visitor.java.after;

public class Pad implements Device {
  
  @Override
  public void print(Rectangle rectangle) {
    System.out.println("& Print Rectangle To Pad");
  }
  
  @Override
  public void print(Circle circle) {
    System.out.println("& Print Circle To Pad");
  }

  @Override
  public void print(Triangle triangle) {
    System.out.println("& Print Triangle To Pad");
  }

  @Override
  public void print(Star start) {
    System.out.println("& Print Star To Pad");
  }
  
}
