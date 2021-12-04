package _02_StructuralPattern._02_05_Facade.java.after;

public class Client {

  public static void main(String[] args) {
    EmailSettingsFacade emailSettings = new EmailSettingsFacade("127.0.0.1");
    EmailSenderFacade emailSender = new EmailSenderFacade(emailSettings);
    
    EmailMessageFacade emailMessage = new EmailMessageFacade();
    emailMessage.setFrom("chocobe@email.com");
    emailMessage.setTo("yw@gmail.com");
    emailMessage.setSubject("테스트 이메일");
    emailMessage.setText("테스트 이메일 메시지 입니다.");

    emailSender.sendEmail(emailMessage);
  }
  
}
