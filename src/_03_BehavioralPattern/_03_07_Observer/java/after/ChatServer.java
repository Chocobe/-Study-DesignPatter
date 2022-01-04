package _03_BehavioralPattern._03_07_Observer.java.after;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class ChatServer {
  
  private Map<String, List<Subscriber>> subscribers = new HashMap<>();

  public void subscribe(String subject, Subscriber subscriber) {
    if (this.subscribers.containsKey(subject)) {
      this.subscribers.get(subject).add(subscriber);
    } else {
      List<Subscriber> list = new ArrayList<Subscriber>();
      list.add(subscriber);
      this.subscribers.put(subject, list);
    }
  }

  public void unsubscribe(String subject, Subscriber subscriber) {
    if (this.subscribers.containsKey(subject)) {
      this.subscribers.get(subject).remove(subscriber);
    }
  }

  public void sendMessage(Subscriber subscriber, String subject, String message) {
    if (this.subscribers.containsKey(subject)) {
      String resultMessage = "[작성자: " + subscriber.getName() + "] " + message;
      this.subscribers.get(subject).forEach(s -> s.handleMessage(resultMessage));
    }
  }
  
}
