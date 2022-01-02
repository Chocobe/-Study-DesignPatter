import FrontDesk from "./FrontDesk.js";
import Guest from "./Guest.js";

const frontDesk = new FrontDesk();
const guest = new Guest(frontDesk, 7);

guest.getTowers(3);
guest.getTowers(1);

guest.dinner("스테이크");
guest.dinner("오뚜기 스프");
