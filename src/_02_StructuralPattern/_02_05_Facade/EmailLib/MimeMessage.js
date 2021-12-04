/**
 * @typedef { import("./Session").default } Session
 * @typedef { import("./InternetAddress").default } InternetAddress
 */

export default class MimeMessage {
  /** @type { Session } */
  #session;

  /** @type { InternetAddress } */
  #from;
  
  /** @type { InternetAddress[] } */
  #recipients;

  /** @type { string } */
  #subject;

  /** @type { string } */
  #text;

  /** @param { Session } session */
  constructor(session) {
    this.#session = session;
    this.#recipients = [];
  }

  // session
  /** @returns { Session } */
  getSession() {
    return this.#session;
  }
  /** @param { Session } session */
  setSession(session) {
    this.#session = session;
  }

  // from
  /** @returns { InternetAddress } */
  getFrom() {
    return this.#from;
  }
  /** @param { InternetAddress } from */
  setFrom(from) {
    this.#from = from;
  }

  // recipients
  /** @returns { InternetAddress[] } */
  getRecipients() {
    return this.#recipients;
  }
  /** @param { InternetAddress } recipient */
  addRecipient(recipient) {
    this.#recipients.push(recipient);
  }

  // subject
  /** @returns { string } */
  getSubject() {
    return this.#subject;
  }
  /** @param { string } subject */
  setSubject(subject) {
    this.#subject = subject;
  }

  // text
  /** @returns { string } */
  getText() {
    return this.#text;
  }
  /** @param { string } text */
  setText(text) {
    this.#text = text;
  }
}