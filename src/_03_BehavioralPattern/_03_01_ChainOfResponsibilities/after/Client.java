package _03_BehavioralPattern._03_01_ChainOfResponsibilities.after;

public class Client {
  
  private RequestHandler requestHandler;

  public Client(RequestHandler requestHandler) {
    this.requestHandler = requestHandler;
  }

  public void doWork() {
    Request request = new Request("안녕하세요 !!");
    this.requestHandler.handler(request);
  }

}
