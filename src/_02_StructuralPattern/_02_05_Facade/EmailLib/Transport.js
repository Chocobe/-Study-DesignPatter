/**
 * @typedef { import("./MimeMessage").default } MimeMessage
 */

export default class Transport {
  /** @param { MimeMessage } message */
  static send(message) {
    console.log(message.getFrom().getAddress());
    console.log(message.getRecipients().map(r => r.getAddress()));
    console.log(message.getSubject());
    console.log(message.getText());
  }
}