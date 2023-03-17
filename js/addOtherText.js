import readline from "readline";

const addOtherText = () => {
  return new Promise(resolve => {
    const rl = readline.createInterface({input: process.stdin, output: process.stdout,});
    rl.question("追加で記載したい内容はありますか？", (answer) => {
      if (answer !== "") {
        answer = "," + answer;
      }
      rl.close();
      resolve(answer);
    });
  })
};

export {addOtherText};
