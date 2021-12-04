package _02_StructuralPattern._02_05_Facade.java.after;

import java.util.Properties;

import _02_StructuralPattern._02_05_Facade.java.after.EmailLib.InternetAddress;
import _02_StructuralPattern._02_05_Facade.java.after.EmailLib.MimeMessage;
import _02_StructuralPattern._02_05_Facade.java.after.EmailLib.Session;
import _02_StructuralPattern._02_05_Facade.java.after.EmailLib.Transport;

public class EmailSenderFacade {

  private EmailSettingsFacade emailSettings;

  public EmailSenderFacade(EmailSettingsFacade emailSettings) {
    this.emailSettings = emailSettings;
  }

  public void sendEmail(EmailMessageFacade emailMessage) {
    Properties properties = new Properties();
    properties.setProperty("mail.smtp.host", emailSettings.getHost());

    Session session = Session.getDefaultInstance(properties);

    try {
      MimeMessage message = new MimeMessage(session);
      message.setFrom(new InternetAddress(emailMessage.getFrom()));
      message.addRecipient(new InternetAddress(emailMessage.getTo()));
      message.setSubject(emailMessage.getSubject());
      message.setText(emailMessage.getText());

      Transport.send(message);
    } catch(Exception e) {
      e.printStackTrace();
    }
  }
  
}
