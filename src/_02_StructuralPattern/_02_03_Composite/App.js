import Item from "./Item.js";
import Bag from "./Bag.js";
import Champion from "./Champion.js";

/**
 * @typedef { import("./Component").default } Component
 */

const doranBlade = new Item("도란검", 450);
const healPotion = new Item("체력 물약", 50);

const bag = new Bag();
bag
  .add(doranBlade)
  .add(healPotion);

const champion = new Champion();
champion
  .add(doranBlade)
  .add(healPotion)
  .add(bag);

printInfo(doranBlade);
printInfo(healPotion);
printInfo(bag);
printInfo(champion);

/** @param { Component } component */
function printInfo(component) {
  console.log(component.getPrice());
}