package _03_BehavioralPattern._03_07_Observer.java.after;

public class User implements Subscriber {
  
  private String name;

  public User(String name) {
    this.name = name;
  }

  @Override
  public String getName() {
    return this.name;
  }

  @Override
  public void handleMessage(String message) {
    System.out.println("[수신자: " + this.name + "] - " + message);
  }
  
}
