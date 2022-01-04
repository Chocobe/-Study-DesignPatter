package _03_BehavioralPattern._03_07_Observer.java.before;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class ChatServer {
  
  private Map<String, List<String>> messages;

  public ChatServer() {
    this.messages = new HashMap<>();
  }

  public void add(String subject, String message) {
    if (this.messages.containsKey(subject)) {
      this.messages.get(subject).add(message);
    } else {
      List<String> messageList = new ArrayList<>();
      messageList.add(message);
      this.messages.put(subject, messageList);
    }
  }

  public List<String> getMessage(String subject) {
    return this.messages.get(subject);
  }
  
}
