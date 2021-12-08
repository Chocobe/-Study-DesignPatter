import PrintRequestHandler from "./PrintRequestHandler.js";
import AuthRequestHandler from "./AuthRequestHandler.js";
import LoggingRequestHandler from "./LoggingRequestHandler.js";
import Client from "./Client.js";

const requestHandlerChain = new PrintRequestHandler(
  new AuthRequestHandler(
    new LoggingRequestHandler()
  )
)

const client = new Client(requestHandlerChain);
client.doWork();
