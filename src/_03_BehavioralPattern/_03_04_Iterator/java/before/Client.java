package _03_BehavioralPattern._03_04_Iterator.java.before;

import java.util.Collections;
import java.util.List;

public class Client {
  
  public static void main(String[] args) throws InterruptedException {
    Board board = new Board();
    board.addPost("01 이터레이터 패턴 스터디");
    Thread.sleep(1);
    board.addPost("02 날씨가 춥내요");
    Thread.sleep(1);
    board.addPost("03 디자인 패턴 어려워요");

    List<Post> posts = board.getPosts();

    System.out.println("============================");

    // 게시글 등록 순으로 출력
    for(int i = 0; i < posts.size(); i++) {
      Post post = posts.get(i);
      System.out.println(post.getTitle());
    }

    System.out.println("============================");
    
    // 최신 순으로 출력
    Collections.sort(posts, (p1, p2) -> p2.getCreatedDatetime().compareTo(p1.getCreatedDatetime()));
    for(int i = 0; i < posts.size(); i++) {
      Post post = posts.get(i);
      System.out.println(post.getTitle());
    }
    
    System.out.println("============================");
  }
  
}
