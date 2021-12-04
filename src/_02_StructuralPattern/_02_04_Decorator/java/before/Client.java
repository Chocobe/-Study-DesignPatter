package _02_StructuralPattern._02_04_Decorator.java.before;

public class Client {
  
  private CommentService commentService;

  public Client(CommentService commentService) {
    this.commentService = commentService;
  }

  public void writeComment(String comment) {
    commentService.addComment(comment);
  }

  public static void main(String args[]) {
    Client client = new Client(new SpamFilterCommentService());
    client.writeComment("안녕하세요 !!");
    client.writeComment("춥네요...");
    client.writeComment("http://chocobe.github.com");
  }
  
}
