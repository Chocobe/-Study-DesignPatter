package _03_BehavioralPattern._03_04_Iterator.java.after;

import java.util.Iterator;

public class Client {
  
  public static void main(String[] args) throws InterruptedException {
    Board board = new Board();
    board.addPost("01 이터레이터 패턴 스터디");
    Thread.sleep(1);
    board.addPost("02 날씨가 춥네요");
    Thread.sleep(1);
    board.addPost("03 디자인 패턴 어려워요");

    System.out.println("\n-----------------------------------------");

    Iterator<Post> ascPostIterator = board.getAscendingPostIterator();
    while(ascPostIterator.hasNext()) {
      System.out.println(ascPostIterator.next().getTitle());
    }

    System.out.println("-----------------------------------------");

    Iterator<Post> recentPostIterator = board.getRecentPostIterator();
    while(recentPostIterator.hasNext()) {
      System.out.println(recentPostIterator.next().getTitle());
    }

    System.out.println("-----------------------------------------");
  }
  
}
