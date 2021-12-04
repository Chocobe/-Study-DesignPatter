import Session from "./EmailLib/Session.js";
import InternetAddress from "./EmailLib/InternetAddress.js";
import MimeMessage from "./EmailLib/MimeMessage.js";
import Transport from "./EmailLib/Transport.js";

/**
 * @typedef { import("./EmailSettingsFacade").default } EmailSettingsFacade
 * @typedef { import("./EmailMessageFacade").default } EmailMessageFacade
 */

export default class EmailSenderFacade {
  /** @type { EmailSettingsFacade } */
  #emailSettings;

  /** @param { EmailSettingsFacade } emailSettings */
  constructor(emailSettings) {
    this.#emailSettings = emailSettings;
  }

  /** @param { EmailMessageFacade } emailMessage */
  sendEmail(emailMessage) {
    const properties = new Map();
    properties.set("mail.smtp.host", this.#emailSettings.getHost());

    const session = new Session(properties);

    const message = new MimeMessage(session);
    message.setFrom(new InternetAddress(emailMessage.getFrom()));
    message.addRecipient(new InternetAddress(emailMessage.getTo()));
    message.setSubject(emailMessage.getSubject());
    message.setText(emailMessage.getText());

    Transport.send(message);
  }
}