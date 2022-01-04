package _03_BehavioralPattern._03_07_Observer.java.before;

public class App {
  
  public static void main(String[] args) {
    ChatServer chatServer = new ChatServer();

    User user1 = new User(chatServer);
    user1.sendMessage("디자인패턴", "옵저버 패턴 스터디 중 입니다.");
    user1.sendMessage("함수형 프로그래밍", "기대됩니다.");

    User user2 = new User(chatServer);
    System.out.println(user2.getMessage("디자인패턴"));

    user1.sendMessage("디자인패턴", "코드 작성 중...");
    System.out.println(user2.getMessage("디자인패턴"));
  }
  
}
