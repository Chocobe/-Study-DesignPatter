import State from "./State.js";

/**
 * @typedef { import("./OnlineCourse").default } OnlineCourse
 * @typedef { import("./Student").default } Student
 */

export default class PublicState extends State {
  /** @type { OnlineCourse } */
  _onlineCourse;

  /** @param { OnlineCourse } onlineCourse */
  constructor(onlineCourse) {
    super();
    this._onlineCourse = onlineCourse;
  }

  /** 
   * @override
   * @param { Student }  
   */
  addStudent(student) {
    this._onlineCourse.getStudents().push(student);
  }

  /**
   * @override
   * @param { Student } _student 
   * @param { string } review 
   */
  addReview(_student, review) {
    this._onlineCourse.getReviews().push(review);
  }
}