import readline from "readline";
import fs from "fs";

export default class FileProcessor {
  /** @type { string } */
  _path;

  /** @param { string } path */
  constructor(path) {
    this._path = path;
  }

  /**
   * @param { number } initValue 
   * @param { (result: number, value: number) => number } callback
   * @returns { Promise<number> }
   */
  process(initValue, callback) {
    return new Promise(res => {
      let result = initValue;
      
      readline.createInterface({
        input: fs.createReadStream(this._path),
        output: undefined,
      })
        .on("line", line => {
          result = callback(result, +line);
        })
        .on("close", () => {
          res(result);
        });
    });
  }
}