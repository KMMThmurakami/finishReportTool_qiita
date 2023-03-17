import readline from "readline";

const addOtherItems = () => {
  return new Promise(resolve => {
    const rl = readline.createInterface({input: process.stdin, output: process.stdout,});
    rl.question("共有・相談事項は？", (answer) => {
      rl.close();
      resolve(`【共有・相談事項】${answer}`);
    });
  })
};

export {addOtherItems};
