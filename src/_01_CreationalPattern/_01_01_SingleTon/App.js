import SingleTon from "./SingleTon.js";

const singleTon1 = SingleTon.getInstance();
const singleTon2 = new SingleTon();
const singleTon3 = SingleTon.getInstance();

console.log(
  singleTon1 === singleTon2
  && singleTon2 === singleTon3
  && singleTon3 === singleTon1
);  // true