package _03_BehavioralPattern._03_11_Visitor.java.before;

public class Client {

  public static void main(String[] args) {
    Device phone = new Phone();
    Device watch = new Watch();

    Shape rectangle = new Rectangle();
    Shape triangle = new Triangle();
    Shape circle = new Circle();

    rectangle.toPrint(phone);
    rectangle.toPrint(watch);

    triangle.toPrint(phone);
    triangle.toPrint(watch);

    circle.toPrint(phone);
    circle.toPrint(watch);
  }
  
}
