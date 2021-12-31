import Board from "./Board.js";
import PostRecentIterator from "./PostsRecentIterator.js";
import PostAscIterator from "./PostsAscIterator.js";

const board = new Board();

setTimeout(() => {
  board.addPost("1번 컨텐츠");
}, 100);
setTimeout(() => {
  board.addPost("2번 컨텐츠");
}, 200);
setTimeout(() => {
  board.addPost("3번 컨텐츠");
}, 300);
setTimeout(() => {
  board.addPost("4번 컨텐츠");
}, 400);

setTimeout(() => {
  const recentIterator = new PostRecentIterator(board.getPosts());
  let result = recentIterator.next();

  while(result && !recentIterator.hasDone()) {
    console.log(result.getContent());
    result = recentIterator.next();
  }
  
  const ascIterator = new PostAscIterator(board.getPosts());
  result = ascIterator.next();

  console.log("===========================");
  
  while(result && !ascIterator.hasDone()) {
    console.log(result.getContent());
    result = ascIterator.next();
  }
}, 500);