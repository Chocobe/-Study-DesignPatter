package _03_BehavioralPattern._03_01_ChainOfResponsibilities.before;

public class Request {

  private String body;

  public Request(String body) {
    this.body = body;
  }

  // body
  public String getBody() {
    return this.body;
  }
  public void setBody(String body) {
    this.body = body;
  }
  
}
