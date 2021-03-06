import Board from "./Board.js";
import AscPostsIterator from "./AscPostsIterator.js";
import RecentPostsIterator from "./RecentPostsIterator.js";

const board = new Board();
setTimeout(() => board.addPost("Hello World"), 100)
setTimeout(() => board.addPost("π«π«π«"), 200)
setTimeout(() => board.addPost("πππ"), 300)
setTimeout(() => board.addPost("Hello Deepnatural &&"), 400)

setTimeout(() => {
  const ascPostsIterator = new AscPostsIterator(board.getPosts());

  while(true) {
    const curPost = ascPostsIterator.next();

    if(curPost.done) {
      console.log("=== === λͺ¨λ  κ²μκΈμ μΆλ ₯ νμμ΅λλ€. === ===");
      break;
    }

    console.log(curPost.value);
  }

  const recentPostsIterator = new RecentPostsIterator(board.getPosts());

  while(true) {
    const curPost = recentPostsIterator.next();

    if(curPost.done) {
      console.log("πππ π«π«π« λͺ¨λ  κ²μκΈμ μΆλ ₯ νμμ΅λλ€. π«π«π« πππ");
      break;
    }

    console.log(curPost.value);
  }
}, 500);
