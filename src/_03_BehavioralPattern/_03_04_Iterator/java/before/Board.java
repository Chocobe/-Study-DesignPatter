package _03_BehavioralPattern._03_04_Iterator.java.before;

import java.util.ArrayList;
import java.util.List;

public class Board {
  
  List<Post> posts = new ArrayList<>();

  public List<Post> getPosts() {
    return this.posts;
  }
  public void setPosts(List<Post> posts) {
    this.posts = posts;
  }

  public void addPost(String content) {
    this.posts.add(new Post(content));
  }
  
}
