package _03_BehavioralPattern._03_07_Observer.java.after;

public interface Subscriber {
  
  public String getName();

  public void handleMessage(String message);
  
}
