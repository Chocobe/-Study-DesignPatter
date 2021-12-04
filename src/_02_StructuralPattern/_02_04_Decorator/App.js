import Client from "./Client.js";
import DefaultCommentService from "./DefaultCommentService.js";
import SpamFilteringCommentDecorator from "./SpamFilteringCommentDecorator.js";
import TrimmingCommentDecorator from "./TrimmingCommentDecorator.js";

const commentService = new DefaultCommentService();

const trimmingCommentDecorator = new TrimmingCommentDecorator(commentService);

const spamFilteringCommentDecorator = new SpamFilteringCommentDecorator(commentService);

const trimmingAndSpamFilteringCommentDecorator = new SpamFilteringCommentDecorator(trimmingCommentDecorator);

console.log("============================");

const client1 = new Client(commentService);
console.log("=== DefaultCommentService 사용 ===")
client1.writeComment("안녕하세요");
client1.writeComment("날씨가 춥네요...");
client1.writeComment("http://chocobe.github.com");

console.log("============================");

const client2 = new Client(trimmingCommentDecorator);
console.log("=== TrimmingCommentService 사용 ===")
client2.writeComment("안녕하세요");
client2.writeComment("날씨가 춥네요...");
client2.writeComment("http://chocobe.github.com");

console.log("============================");

const client3 = new Client(spamFilteringCommentDecorator);
console.log("=== SpamFilteringCommentService 사용 ===")
client3.writeComment("안녕하세요");
client3.writeComment("날씨가 춥네요...");
client3.writeComment("http://chocobe.github.com");

console.log("============================");

const client4 = new Client(trimmingAndSpamFilteringCommentDecorator);
console.log("=== TrimmingAndSpamFilteringCommentDecorator 사용 ===")
client4.writeComment("안녕하세요");
client4.writeComment("날씨가 춥네요...");
client4.writeComment("http://chocobe.github.com");

console.log("============================");