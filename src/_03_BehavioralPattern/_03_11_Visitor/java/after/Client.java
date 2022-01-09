package _03_BehavioralPattern._03_11_Visitor.java.after;

public class Client {

  public static void main(String[] args) {
    Shape rectangle = new Rectangle();
    Shape circle = new Circle();
    Shape triangle = new Triangle();
    Shape star = new Star();

    System.out.println();
    
    Device phone = new Phone();
    Device watch = new Watch();
    Device pad = new Pad();

    System.out.println();
    
    rectangle.accept(phone);
    circle.accept(phone);
    triangle.accept(phone);
    star.accept(phone);
    
    System.out.println();
    
    rectangle.accept(watch);
    circle.accept(watch);
    triangle.accept(watch);
    star.accept(watch);

    System.out.println();
    
    rectangle.accept(pad);
    circle.accept(pad);
    triangle.accept(pad);
    star.accept(pad);
  }
  
}
