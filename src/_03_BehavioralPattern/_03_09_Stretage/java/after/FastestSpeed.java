package _03_BehavioralPattern._03_09_Stretage.java.after;

public class FastestSpeed implements Speed {
  
  @Override
  public void blueLight() {
    System.out.println("무광꽃이");
  }

  @Override
  public void redLight() {
    System.out.println("폈슴다.");
  }
  
}
