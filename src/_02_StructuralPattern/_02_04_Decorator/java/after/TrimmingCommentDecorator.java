package _02_StructuralPattern._02_04_Decorator.java.after;

public class TrimmingCommentDecorator extends CommentDecorator {

  public TrimmingCommentDecorator(CommentService commentService) {
    super(commentService);
  }

  @Override
  public void addComment(String comment) {
    super.addComment(trim(comment));
  }
  
  private String trim(String comment) {
    return comment.replace("...", "");
  }
  
}
