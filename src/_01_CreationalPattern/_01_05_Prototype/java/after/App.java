package _01_CreationalPattern._01_05_Prototype.java.after;

public class App {
  
  public static void main(String[] args) {
    GithubRepository repository = new GithubRepository();
    repository.setUser("영우");
    repository.setName("디자인 패턴 스터디");

    GithubIssue issue = new GithubIssue(repository);
    issue.setId(1);
    issue.setTitle("Prototype 패턴");

    String url = issue.getUrl();
    System.out.println(url);

    GithubIssue clonedIssue = (GithubIssue) issue.clone();
    System.out.println(clonedIssue.getUrl());

    System.out.println("prototype 복제 객체 비교: " + issue.equals(clonedIssue));

    repository.setName("변경한 이름");
    System.out.println(issue.getUrl());
    System.out.println(clonedIssue.getUrl());
  }
  
}
