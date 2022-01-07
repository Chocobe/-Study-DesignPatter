/**
 * @typedef { import("./OnlineCourse").default } OnlineCourse
 */

export default class Student {
  /** @type { string } */
  _name;

  /** @type { Set<OnlineCourse> } */
  _onlineCourses;
  
  /** @param { string } name */
  constructor(name) {
    this._name = name;
    this._onlineCourses = new Set();
  }

  /** @returns { string } */
  getName() {
    return this._name;
  }

  /** @returns { boolean } */
  isAvailable(onlineCourse) {
    return this._onlineCourses.has(onlineCourse);
  }

  /** @param { OnlineCourse } onlineCourse */
  addPrivate(onlineCourse) {
    this._onlineCourses.add(onlineCourse);
  }
}