package _02_StructuralPattern._02_04_Decorator.java.after;

public class SpamFilteringCommentDecorator extends CommentDecorator {
  
  public SpamFilteringCommentDecorator(CommentService commentService) {
    super(commentService);
  }

  @Override
  public void addComment(String comment) {
    if (!isNotSpam(comment)) return;

    super.addComment(comment);
  }
  
  private Boolean isNotSpam(String comment) {
    if(comment.contains("http")) return false;
    
    return true;
  }
  
}
