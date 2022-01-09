package _03_BehavioralPattern._03_11_Visitor.java.after;

public interface Device {
  
  void print(Rectangle rectangle);

  void print(Circle circle);

  void print(Triangle triangle);

  void print(Star start);
  
}
