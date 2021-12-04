package _02_StructuralPattern._02_04_Decorator.java.after;

public class App {
  
  private static Boolean enabledTrimming = true;
  private static Boolean enabledSpamFiltering = false;

  public static void main(String[] args) {
    CommentService commentService = new DefaultCommentService();

    if(App.enabledTrimming) {
      commentService = new TrimmingCommentDecorator(commentService);
    }

    if(App.enabledSpamFiltering) {
      commentService = new SpamFilteringCommentDecorator(commentService);
    }

    Client client = new Client(commentService);
    client.writeComment("안녕하세요");
    client.writeComment("날씨가 춥네요...");
    client.writeComment("http://chocobe.github.com");
  }
  
}
