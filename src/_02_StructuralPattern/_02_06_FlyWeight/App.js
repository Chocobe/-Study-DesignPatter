import FontFactory from "./FontFactory.js";
import Character from "./Character.js";

const fontFactory = new FontFactory();

const c1 = new Character("h", "#ff1493", fontFactory.getFont("나눔:12"));
const c2 = new Character("e", "#ff1493", fontFactory.getFont("나눔:12"));
const c3 = new Character("l", "#ff1493", fontFactory.getFont("나눔:12"));
const c4 = new Character("l", "#ff1493", fontFactory.getFont("나눔:12"));
const c5 = new Character("o", "#ff1493", fontFactory.getFont("나눔:12"));

console.log(c1.toString());
console.log(c2.toString());
console.log(c3.toString());
console.log(c4.toString());
console.log(c5.toString());

console.log(c3.getFont() === c4.getFont());
