package _03_BehavioralPattern._03_01_ChainOfResponsibilities.after;

public abstract class RequestHandler {

  private RequestHandler nextHandler;

  public RequestHandler(RequestHandler nextHandler) {
    this.nextHandler = nextHandler;
  }

  public void handler(Request request) {
    if(this.nextHandler != null) this.nextHandler.handler(request);
  }
  
}
