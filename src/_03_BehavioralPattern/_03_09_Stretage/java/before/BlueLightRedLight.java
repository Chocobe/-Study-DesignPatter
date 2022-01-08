package _03_BehavioralPattern._03_09_Stretage.java.before;

public class BlueLightRedLight {
  
  private int speed;

  public BlueLightRedLight(int speed) {
    this.speed = speed;
  }

  public void blueLight() {
    if (this.speed == 1) {
      System.out.println("무 궁 화    꽃    이");
    } else if (this.speed == 2) {
      System.out.println("무궁화 꽃이");
    } else {
      System.out.println("무광꽃이");
    }
  }

  public void redLight() {
    if (this.speed == 1) {
      System.out.println("피 었 습 니 다.");
    } else if (this.speed == 2) {
      System.out.println("피었습니다.");
    } else {
      System.out.println("폈슴다.");
    }
  }
  
}
