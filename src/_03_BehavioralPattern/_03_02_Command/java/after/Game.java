package _03_BehavioralPattern._03_02_Command.java.after;

public class Game {
  
  private boolean isStarted;

  public void start() {
    System.out.println("게임을 시작하지");
    this.isStarted = true;
  }

  public void end() {
    System.out.println("게임 종료 👍👍");
    this.isStarted = false;
  }

  public boolean isStarted() {
    return this.isStarted;
  }
  
}
