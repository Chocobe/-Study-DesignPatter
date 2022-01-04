import ChatServer from "./ChatServer.js";
import User from "./User.js";

const chatServer = new ChatServer();

const user1 = new User("영우");
const user2 = new User("초코비");

chatServer.subscribe("디자인 패턴", user1);
chatServer.subscribe("디제이 맥스", user1);
chatServer.subscribe("디자인 패턴", user2);

chatServer.sendMessage("디자인 패턴", user1, "옵저버 패턴 스터디 중 입니다.");
chatServer.sendMessage("디자인 패턴", user2, "이전에 공부한 패턴들.. 벌써 까먹은거 같아요...");
chatServer.sendMessage("디제이 맥스", user1, "디제이 맥스 재밌어요 !!");
