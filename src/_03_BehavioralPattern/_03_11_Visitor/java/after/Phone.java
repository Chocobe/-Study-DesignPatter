package _03_BehavioralPattern._03_11_Visitor.java.after;

public class Phone implements Device {

  @Override
  public void print(Rectangle rectangle) {
    System.out.println("- Print Rectangle to Phone");
  }

  @Override
  public void print(Circle circle) {
    System.out.println("- Print Circle To Phone");
  }

  @Override
  public void print(Triangle triangle) {
    System.out.println("- Print Triangle To Phone");
  }

  @Override
  public void print(Star start) {
    System.out.println("- Print Star To Phone");
  }
  
}
