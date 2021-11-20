import WhiteshipFactory from "./WhiteshipFactory.js";
import BlackshipFactory from "./BlackshipFactory.js";

const whiteshipFactory = new WhiteshipFactory();
const whiteship = whiteshipFactory.orderShip("Chocobe", "yw@deepnatural.ai");

whiteship.print();

const blackshipFactory = new BlackshipFactory();
const blackship = blackshipFactory.orderShip("Bob Martin", "chocobe@deepnatural.ai");

blackship.print();