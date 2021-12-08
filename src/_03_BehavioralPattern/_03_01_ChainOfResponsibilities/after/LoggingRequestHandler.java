package _03_BehavioralPattern._03_01_ChainOfResponsibilities.after;

public class LoggingRequestHandler extends RequestHandler {

  public LoggingRequestHandler(RequestHandler nextHandler) {
    super(nextHandler);
  }

  @Override
  public void handler(Request request) {
    System.out.println("로깅 작업 완료");
    super.handler(request);
  }
  
}
