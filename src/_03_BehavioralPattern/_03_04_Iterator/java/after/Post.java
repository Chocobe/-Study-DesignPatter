package _03_BehavioralPattern._03_04_Iterator.java.after;

import java.time.LocalDateTime;

public class Post {
  
  private String title;

  private LocalDateTime createdDateTime;

  public Post(String title) {
    this.title = title;
    this.createdDateTime = LocalDateTime.now();
  }

  public String getTitle() {
    return this.title;
  }
  public void setTitle(String title) {
    this.title = title;
  }

  public LocalDateTime getCreatedDateTime() {
    return this.createdDateTime;
  }
  public void setCreatedDateTime(LocalDateTime createdDateTime) {
    this.createdDateTime = createdDateTime;
  }
  
}
