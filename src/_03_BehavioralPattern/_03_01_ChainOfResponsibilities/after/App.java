package _03_BehavioralPattern._03_01_ChainOfResponsibilities.after;

public class App {

  public static void main(String[] args) {
    RequestHandler requestHandler = new PrintRequestHandler(
      new AuthRequestHandler(
        new LoggingRequestHandler(null)
      )
    );

    Client client = new Client(requestHandler);
    client.doWork();
  }
  
}
