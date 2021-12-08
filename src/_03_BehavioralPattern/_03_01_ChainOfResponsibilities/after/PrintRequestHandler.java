package _03_BehavioralPattern._03_01_ChainOfResponsibilities.after;

public class PrintRequestHandler extends RequestHandler {

  public PrintRequestHandler(RequestHandler nextHandler) {
    super(nextHandler);
  }

  @Override
  public void handler(Request request) {
    super.handler(request);
    System.out.println(request.getBody());
  }
  
}
