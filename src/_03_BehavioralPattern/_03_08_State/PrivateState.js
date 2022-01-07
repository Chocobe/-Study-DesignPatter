import State from "./State.js";

/**
 * @typedef { import("./OnlineCourse").default } OnlineCourse
 * @typedef { import("./Student").default } Student
 */

export default class PrivateState extends State {
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
    if (student.isAvailable(this._onlineCourse)) {
      this._onlineCourse.getStudents().push(student);
    } else {
      throw new Error("프라이빗 코스의 수강 권한이 없습니다.");
    }
  }

  /**
   * @override
   * @param { Student } student 
   * @param { string } review 
   */
  addReview(student, review) {
    if (this._onlineCourse.getStudents().includes(student)) {
      this._onlineCourse.getReviews().push(review);
    } else {
      throw new Error("프라이빗 코스를 수강하는 학생만 리뷰를 남길 수 있습니다.");
    }
  }
}