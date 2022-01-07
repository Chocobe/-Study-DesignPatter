/**
 * @typedef { import("./Student").default } Student
 */

export default class State {
  /**
   * @abstract
   * @param { Student } _student
   */
  addStudent(_student) {
    throw new Error("State.addStudent() 는 Abstract Method 입니다.");
  }

  /**
   * @abstract
   * @param { Student } _student 
   * @param { string } _review 
   */
  addReview(_student, _review) {
    throw new Error("State.addReview() 는 Abstract Method 입니다.");
  }
}