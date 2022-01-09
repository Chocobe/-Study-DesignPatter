import Rectangle from "./Rectangle.js";
import Triangle from "./Triangle.js";
import Circle from "./Circle.js";
import Star from "./Star.js";

import Phone from "./Phone.js";
import Watch from "./Watch.js";
import Pad from "./Pad.js";

const rectangle = new Rectangle();
const triangle = new Triangle();
const circle = new Circle();
const star = new Star();

const phone = new Phone();
const watch = new Watch();
const pad = new Pad();

console.log();

rectangle.accept(phone);
triangle.accept(phone);
circle.accept(phone);
star.accept(phone);

console.log();

rectangle.accept(watch);
triangle.accept(watch);
circle.accept(watch);
star.accept(watch);

console.log();

rectangle.accept(pad);
triangle.accept(pad);
circle.accept(pad);
star.accept(pad);
