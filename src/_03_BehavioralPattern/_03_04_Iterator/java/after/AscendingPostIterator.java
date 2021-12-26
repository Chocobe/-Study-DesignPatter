package _03_BehavioralPattern._03_04_Iterator.java.after;

import java.util.Collections;
import java.util.Iterator;
import java.util.List;

public class AscendingPostIterator implements Iterator<Post> {

  private Iterator<Post> internalIterator;

  public AscendingPostIterator(List<Post> posts) {
    Collections.sort(posts, (p1, p2) -> p1.getCreatedDateTime().compareTo(p2.getCreatedDateTime()));
    this.internalIterator = posts.iterator();
  }

  @Override
  public boolean hasNext() {
    return this.internalIterator.hasNext();
  }

  @Override
  public Post next() {
    return this.internalIterator.next();
  }
  
}
