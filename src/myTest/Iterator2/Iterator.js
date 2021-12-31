/** @template T */
export default class Iterator {
  /** @type { Array<T> } */
  _source;

  /** @type { IterableIterator<T> } */
  _internalIterator;

  /** @type { boolean } */
  _done;
  
  /** @param { Array<T> } [ source = [] ] */
  constructor(source = []) {
    this._source = [...source]
    this._done = false;

    this._initItorator();
    this.reset();
  }

  /** @abstract */
  _initItorator() {
    throw new Error("Itorator._initItorator() 는 Abstract Method 입니다.");
  }

  reset() {
    this._internalIterator = this._source[Symbol.iterator]();
  }
  
  /** @returns { boolean } */
  hasDone() {
    return this._done;
  }

  // /** @returns { IteratorResult<T, undefined> } */
  /** @returns { T } */
  next() {
    const { value, done } = this._internalIterator.next();
    this._done = done;
    return value;
  }
}
