import EmailSettingsFacade from "./EmailSettingsFacade.js";
import EmailMessageFacade from "./EmailMessageFacade.js";
import EmailSenderFacade from "./EmailSenderFacade.js";

const emailSettings = new EmailSettingsFacade("127.0.0.1");
const emailSender = new EmailSenderFacade(emailSettings);

const emailMessage = new EmailMessageFacade();
emailMessage.setFrom("chocobe@email.com");
emailMessage.setTo("yw@gmail.com");
emailMessage.setSubject("테스트 이메일");
emailMessage.setText("테스트 이메일 메시지 입니다.");

emailSender.sendEmail(emailMessage);
