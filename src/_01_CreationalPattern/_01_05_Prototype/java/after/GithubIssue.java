package _01_CreationalPattern._01_05_Prototype.java.after;

import java.util.Objects;

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
      "https://github.com/%s/%s/issue/%d",
      repository.getUser(),
      repository.getName(),
      id
    );
  }

  @Override
  protected Object clone() {
    GithubRepository repository = new GithubRepository();
    repository.setUser(this.repository.getUser());
    repository.setName(this.repository.getName());

    GithubIssue issue = new GithubIssue(repository);
    issue.setId(id);
    issue.setTitle(title);

    return issue;
  }

  @Override
  public boolean equals(Object o) {
    if(this == o) return true;

    if(o == null || getClass() != o.getClass()) return false;

    GithubIssue issue = (GithubIssue) o;
    return id == issue.id 
      && Objects.equals(title, issue.title) 
      && Objects.equals(repository, issue.repository);
  }
  
}
