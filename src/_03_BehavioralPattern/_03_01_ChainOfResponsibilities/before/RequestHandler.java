package _03_BehavioralPattern._03_01_ChainOfResponsibilities.before;

public class RequestHandler {
  
  public void handler(Request request) {
    System.out.println(request.getBody());
  }
  
}
