import Board from "./Board.js";
import AscPostsIterator from "./AscPostsIterator.js";
import RecentPostsIterator from "./RecentPostsIterator.js";

const board = new Board();
setTimeout(() => board.addPost("Hello World"), 100)
setTimeout(() => board.addPost("🐫🐫🐫"), 200)
setTimeout(() => board.addPost("🚀🚀🚀"), 300)
setTimeout(() => board.addPost("Hello Deepnatural &&"), 400)

setTimeout(() => {
  const ascPostsIterator = new AscPostsIterator(board.getPosts());

  while(true) {
    const curPost = ascPostsIterator.next();

    if(curPost.done) {
      console.log("=== === 모든 게시글을 출력 하였습니다. === ===");
      break;
    }

    console.log(curPost.value);
  }

  const recentPostsIterator = new RecentPostsIterator(board.getPosts());

  while(true) {
    const curPost = recentPostsIterator.next();

    if(curPost.done) {
      console.log("🚀🚀🚀 🐫🐫🐫 모든 게시글을 출력 하였습니다. 🐫🐫🐫 🚀🚀🚀");
      break;
    }

    console.log(curPost.value);
  }
}, 500);
