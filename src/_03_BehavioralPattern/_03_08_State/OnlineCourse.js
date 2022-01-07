/**
 * @typedef { import("./Student").default } Student
 * @typedef { import("./State").default } State
 */

export default class OnlineCourse {
  /** @type { State } */
  _state;
  
  /** @type { Student[] } */
  _students;

  /** @type { string[] } */
  _reviews;

  constructor() {
    this._students = [];
    this._reviews = [];
  }
  
  /** @returns { State } */
  getState() {
    return this._state;
  }

  /** @returns { Student[] } */
  getStudents() {
    return this._students;
  }

  /** @returns { string[] } */
  getReviews() {
    return this._reviews;
  }

  /** @param { State } state */
  changeState(state) {
    this._state = state;
  }

  /** @param { Student } student */
  addStudent(student) {
    this._state.addStudent(student);
  }

  /**
   * @param { Student } student
   * @param { string } review
   */
  addReview(student, review) {
    this._state.addReview(student, review);
  }
}