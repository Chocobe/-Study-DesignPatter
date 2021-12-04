package _02_StructuralPattern._02_04_Decorator.java.before;

public class SpamFilterCommentService extends CommentService {

  @Override
  public void addComment(String comment) {
    if(isSpam(comment)) return;

    super.addComment(comment);
  }
  
  private Boolean isSpam(String comment) {
    return comment.contains("http");
  }
  
}
