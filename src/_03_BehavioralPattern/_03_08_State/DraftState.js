import State from "./State.js";
import PrivateState from "./PrivateState.js";

/**
 * @typedef { import("./OnlineCourse").default } OnlineCourse
 * @typedef { import("./Student").default } Student
 */

export default class DraftState extends State {
  /** @type { OnlineCourse } */
  _onlineCourse;

  /** @param { OnlineCourse } onlineCourse */
  constructor(onlineCourse) {
    super();
    this._onlineCourse = onlineCourse;
  }

  /**
   * @override
   * @param { Student } student 
   */
  addStudent(student) {
    this._onlineCourse.getStudents().push(student);

    if (this._onlineCourse.getStudents().length > 1) {
      this._onlineCourse.changeState(new PrivateState(this._onlineCourse));
    }
  }

  /**
   * @override
   * @param { Student } _student 
   * @param { string } _review 
   */
  addReview(_student, _review) {
    throw new Error("드래프트 상태에서는 리뷰를 남길 수 없습니다.");
  }
}