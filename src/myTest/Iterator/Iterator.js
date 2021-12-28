/**
 * @template T
 */
export default class Iterator {
  /**
   * @abstract
   * @returns { IteratorResult<T> }
   */
  next() {
    throw new Error("Iterator.next() 는 Abstract Method 입니다.");
  }

  /**
   * @abstract
   * @returns { boolean }
   */
  hasNext() {
    throw new Error("Iterator.hasNext() 는 Abstract Method 입니다.");
  }
}