import readline from "readline";

const inputStartTime = (question) => {
  return new Promise(resolve => {
    const rl = readline.createInterface({input: process.stdin, output: process.stdout,});
    rl.question(question, (answer) => {
      if (answer === "") {
        console.log("時刻未入力");
        rl.close();
        return false;
      }
      if (Number(answer) < 0 || Number(answer) > 2359) {
        console.log("時刻不正");
        rl.close();
        return false;
      }
      rl.close();
      resolve(answer);
    });
  })
};

export {inputStartTime};
