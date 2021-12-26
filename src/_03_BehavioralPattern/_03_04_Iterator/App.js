import Board from "./Board.js";

const board = new Board();
setTimeout(() => board.addPost("🚀🚀🚀"), 0);
setTimeout(() => board.addPost("🐫🐫🐫"), 100);
setTimeout(() => board.addPost("🧐🧐🧐"), 300);
setTimeout(() => board.addPost("😱😱😱"), 500);

setTimeout(() => {
  const recentIterator = board.getRecentPostIterator();
  console.log(recentIterator.next().value?.getContent());
  console.log(recentIterator.next().value?.getContent());
  console.log(recentIterator.next().value?.getContent());
  console.log(recentIterator.next().value?.getContent());
  console.log(recentIterator.next().value?.getContent());
  console.log(recentIterator.next().done);

  const ascIterator = board.getAscPostIterator();
  console.log(ascIterator.next().value?.getContent());
  console.log(ascIterator.next().value?.getContent());
  console.log(ascIterator.next().value?.getContent());
  console.log(ascIterator.next().value?.getContent());
  console.log(ascIterator.next().value?.getContent());
  console.log(ascIterator.next().done);
}, 1000);
