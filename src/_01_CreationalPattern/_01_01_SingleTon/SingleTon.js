// SingleTon.js
export default class SingleTon {
  static #INSTANCE;

  constructor() {
    if(SingleTon.#INSTANCE) return SingleTon.#INSTANCE;

    SingleTon.#INSTANCE = this;
    return SingleTon.#INSTANCE;
  }

  static getInstance() {
    return new SingleTon();
  }
}