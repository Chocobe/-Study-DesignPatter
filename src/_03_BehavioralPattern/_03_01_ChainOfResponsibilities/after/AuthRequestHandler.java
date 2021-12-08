package _03_BehavioralPattern._03_01_ChainOfResponsibilities.after;

public class AuthRequestHandler extends RequestHandler {

  public AuthRequestHandler(RequestHandler nextHandler) {
    super(nextHandler);
  }

  @Override
  public void handler(Request request) {
    System.out.println("인증 확인 완료");
    super.handler(request);
  }
  
}
