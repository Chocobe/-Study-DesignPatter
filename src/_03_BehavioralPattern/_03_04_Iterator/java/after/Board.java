package _03_BehavioralPattern._03_04_Iterator.java.after;

import java.util.ArrayList;
import java.util.Iterator;
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

  public Iterator<Post> getRecentPostIterator() {
    return new RecentPostIterator(this.posts);
  }
  
  public Iterator<Post> getAscendingPostIterator() {
    return new AscendingPostIterator(this.posts);
  }
  
}
