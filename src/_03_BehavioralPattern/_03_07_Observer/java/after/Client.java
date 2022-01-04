package _03_BehavioralPattern._03_07_Observer.java.after;

public class Client {
  
  public static void main(String[] args) {
    ChatServer chatServer = new ChatServer();

    Subscriber user1 = new User("영우");
    Subscriber user2 = new User("초코비");

    chatServer.subscribe("디자인 패턴", user1);
    chatServer.subscribe("디자인 패턴", user2);

    chatServer.subscribe("디제이 맥스", user1);

    chatServer.sendMessage(user1, "디자인 패턴", "옵저버 패턴 스터디 중 입니다.");
    chatServer.sendMessage(user1, "디제이 맥스", "Out Law 플레이 중 입니다 !!");
  }
  
}
