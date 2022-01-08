package _03_BehavioralPattern._03_09_Stretage.java.before;

public class Client {

  public static void main(String[] args) {
    BlueLightRedLight blueLightRedLight = new BlueLightRedLight(1);
    blueLightRedLight.blueLight();
    blueLightRedLight.redLight();
  }
  
}
