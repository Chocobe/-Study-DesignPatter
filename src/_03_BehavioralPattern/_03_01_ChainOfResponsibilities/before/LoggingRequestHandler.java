package _03_BehavioralPattern._03_01_ChainOfResponsibilities.before;

public class LoggingRequestHandler extends RequestHandler {

  @Override
  public void handler(Request request) {
    System.out.println("로깅");
    super.handler(request);
  }
  
}
