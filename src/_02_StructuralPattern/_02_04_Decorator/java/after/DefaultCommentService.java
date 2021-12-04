package _02_StructuralPattern._02_04_Decorator.java.after;

public class DefaultCommentService implements CommentService {

  @Override
  public void addComment(String comment) {
    System.out.println(comment);
  }
  
}
