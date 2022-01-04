package _03_BehavioralPattern._03_07_Observer.java.before;

import java.util.List;

public class User {
  
  private ChatServer chatServer;

  public User(ChatServer chatServer) {
    this.chatServer = chatServer;
  }

  public void sendMessage(String subject, String message) {
    chatServer.add(subject, message);
  }

  public List<String> getMessage(String subject) {
    return this.chatServer.getMessage(subject);
  }
  
}
