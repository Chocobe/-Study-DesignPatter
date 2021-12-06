package _02_StructuralPattern._02_07_Proxy.java.after;

public class DefaultGameService implements GameService {

  @Override
  public void startGame() {
    try {
      Thread.sleep(1000L);
      System.out.println("게임을 시작하지...");
    } catch (InterruptedException e) {
      e.printStackTrace();
    }
  }
  
}
