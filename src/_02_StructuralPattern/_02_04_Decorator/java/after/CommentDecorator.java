package _02_StructuralPattern._02_04_Decorator.java.after;

public class CommentDecorator implements CommentService {

  private CommentService commentService;
  
  public CommentDecorator(CommentService commentService) {
    this.commentService = commentService;
  }
  
  @Override
  public void addComment(String comment) {
    commentService.addComment(comment);
  }
  
}
