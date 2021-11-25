package _01_CreationalPattern._01_05_Prototype.java.before;

public class GithubIssue {
  
  private int id;
  private String title;
  private GithubRepository repository;

  public GithubIssue(GithubRepository repository) {
    this.repository = repository;
  }

  // id
  public int getId() {
    return id;
  }
  public void setId(int id) {
    this.id = id;
  }

  // title
  public String getTitle() {
    return title;
  }
  public void setTitle(String title) {
    this.title = title;
  }

  // repository
  public GithubRepository getRepository() {
    return repository;
  }

  public String getUrl() {
    return String.format(
      "https://github.com/%s/%s/issues/%d",
      repository.getUser(),
      repository.getName(),
      id
    );
  }
  
}
