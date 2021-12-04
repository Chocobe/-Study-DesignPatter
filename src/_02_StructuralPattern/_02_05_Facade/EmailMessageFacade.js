export default class EmailMessageFacade {
  /** @type { string } */
  #from;

  /** @type { string } */
  #to

  /** @type { string } */
  #subject;

  /** @type { string } */
  #text;

  // from
  /** @returns { string } */
  getFrom() {
    return this.#from;
  }
  /** @param { string } from */
  setFrom(from) {
    this.#from = from;
  }

  // to
  /** @returns { string } */
  getTo() {
    return this.#to;
  }
  /** @param { string } to */
  setTo(to) {
    this.#to = to;
  }

  // subject
  /** @returns { string } */
  getSubject() {
    return this.#subject;
  }
  /** @param { string } */
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