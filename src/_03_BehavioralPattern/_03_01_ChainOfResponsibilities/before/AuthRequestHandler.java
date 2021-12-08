package _03_BehavioralPattern._03_01_ChainOfResponsibilities.before;

public class AuthRequestHandler extends RequestHandler {

  @Override
  public void handler(Request request) {
    System.out.println("인증 확인");
    System.out.println("권한 확인");
    super.handler(request);
  }
  
}
