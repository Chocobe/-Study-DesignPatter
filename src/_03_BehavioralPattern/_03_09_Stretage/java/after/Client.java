package _03_BehavioralPattern._03_09_Stretage.java.after;

public class Client {
  
  public static void main(String[] args) {
    BlueLightRedLight game = new BlueLightRedLight();
    game.blueLight(new NormalSpeed());
    game.redLight(new FastSpeed());

    System.out.println();

    game.blueLight(new FastestSpeed());
    game.redLight(new FastestSpeed());
  }
  
}
