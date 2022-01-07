import OnlineCourse from "./OnlineCourse.js";
import PublicState from "./PublicState.js";
import PrivateState from "./PrivateState.js";
import DraftState from "./DraftState.js";
import Student from "./Student.js";

const onlineCourse = new OnlineCourse();
const draftState = new DraftState(onlineCourse);
onlineCourse.changeState(draftState);

// const publicState = new PublicState(onlineCourse);
// onlineCourse.changeState(publicState);

const kim = new Student("영우");
// kim.addPrivate(onlineCourse);

onlineCourse.addStudent(kim);
onlineCourse.changeState(new PrivateState(onlineCourse));

onlineCourse.addReview(kim, "Hello World");

const chocobe = new Student("초코비");
chocobe.addPrivate(onlineCourse);
onlineCourse.addStudent(chocobe);

onlineCourse.addReview(chocobe, "안녕하세요");

console.log(onlineCourse.getState());
console.log(onlineCourse.getStudents());
console.log(onlineCourse.getReviews());
