import readline from "readline";

const inputRestTime = (question) => {
  return new Promise(resolve => {
    const rl = readline.createInterface({input: process.stdin, output: process.stdout,});
    rl.question(question, (answer) => {
      let time = 0;
      if (Number(answer) < 0 || Number(answer) > 10) {
        console.log("時刻不正");
        rl.close();
        return false;
      }
      answer === "" ? time = 1 : time = answer;
      rl.close();
      resolve(time);
    });
  })
};

export {inputRestTime};
