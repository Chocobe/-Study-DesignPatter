package _03_BehavioralPattern._03_01_ChainOfResponsibilities.before;

public class Client {
  
  public static void main(String[] args) {
    Request request = new Request("안녕하세요");
    RequestHandler requestHandler = new LoggingRequestHandler();
    requestHandler.handler(request);
  }
  
}
