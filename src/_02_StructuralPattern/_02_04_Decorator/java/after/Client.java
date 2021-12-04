package _02_StructuralPattern._02_04_Decorator.java.after;

public class Client {
  
  private CommentService commentService;

  public Client(CommentService commentService) {
    this.commentService = commentService;
  }

  public void writeComment(String comment) {
    commentService.addComment(comment);
  }
  
}
