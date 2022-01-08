import FileProcessor from "./FileProcessor.js";

const fileProcessor = new FileProcessor("./numbers.txt");
fileProcessor.process(0, (result, value) => result + value)
  .then(result => console.log(`더하기 결과: ${result}`));

fileProcessor.process(1, (result, value) => result * value)
  .then(result => console.log(`곱하기 결과: ${result}`));

fileProcessor.process(0, (result, value) => value - result)
  .then(result => console.log(`이상한 빼기 결과: ${result}`));
