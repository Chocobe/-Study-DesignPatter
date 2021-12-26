/** @template T */
export default class Iterator {
  /**
   * @abstract
   * @returns { IteratorResult<T> }
   */
  next() {
    throw new Error("Iterator.next() 는 Abstract Method 입니다.");
  }
}
