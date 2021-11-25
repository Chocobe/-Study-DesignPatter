package _01_CreationalPattern._01_05_Prototype.java.before;

public class App {
  
  public static void main(String[] args) {
    GithubRepository repository = new GithubRepository();
    repository.setUser("영우");
    repository.setName("GoF 디자인 패턴 스터디");

    GithubIssue githubIssue = new GithubIssue(repository);
    githubIssue.setId(1);
    githubIssue.setTitle("Prototype 패턴");

    String url = githubIssue.getUrl();
    System.out.println(url);
  }
  
}
