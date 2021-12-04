package _02_StructuralPattern._02_05_Facade.java.before.EmailLib;

public class Transport {

  public static void send(MimeMessage message) {
    System.out.println(message.getFrom().getAddress());
    System.out.println(message.getRecipients().stream().map(InternetAddress::getAddress));
    System.out.println(message.getSubject());
    System.out.println(message.getText());
  }
  
}
