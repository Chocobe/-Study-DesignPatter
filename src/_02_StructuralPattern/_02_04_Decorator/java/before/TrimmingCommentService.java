package _02_StructuralPattern._02_04_Decorator.java.before;

public class TrimmingCommentService extends CommentService {
  
  @Override
  public void addComment(String comment) {
    super.addComment(trim(comment));
  }
  
  private String trim(String comment) {
    return comment.replace("...", "");
  }
}
