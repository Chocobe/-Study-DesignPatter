import TourPlanDirector from "./TourPlanDirector.js";
import DefaultTourPlanBuilder from "./DefaultTourPlanBuilder.js";

const director = new TourPlanDirector(new DefaultTourPlanBuilder());

const busanTripShort = director.createBusanTripForShort();
console.log(busanTripShort.printInfo());

const seoulTripLong = director.createSeoulTripForLong();
console.log(seoulTripLong.printInfo());