package _02_StructuralPattern._02_05_Facade.java.before;

import java.util.Properties;

import _02_StructuralPattern._02_05_Facade.java.before.EmailLib.InternetAddress;
import _02_StructuralPattern._02_05_Facade.java.before.EmailLib.MimeMessage;
import _02_StructuralPattern._02_05_Facade.java.before.EmailLib.Session;
import _02_StructuralPattern._02_05_Facade.java.before.EmailLib.Transport;

public class Client {
  
  public static void main(String[] args) {
    String to = "chocobe@email.com";
    String from = "yw@gmail.com";
    String host = "127.0.0.1";

    Properties properties = System.getProperties();
    properties.setProperty("mail.smtp.host", host);

    Session session = Session.getDefaultInstance(properties);

    try {
      MimeMessage message = new MimeMessage(session);
      message.setFrom(new InternetAddress(from));
      message.addRecipient(new InternetAddress(to));
      message.setSubject("테스트 이메일");
      message.setText("테스트 이메일 메시지 입니다.");

      Transport.send(message);
    } catch(Exception e) {
      e.printStackTrace();
    }
  }
}
