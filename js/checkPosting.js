import readline from "readline";
import slack from "../bin/slack.json" assert { type: "json" };

const checkPosting = () => {
  return new Promise(resolve => {
    const rl = readline.createInterface({input: process.stdin, output: process.stdout,});

    let channel = "";
    switch (slack.postChannelId) {
      case slack.MY_SLACK_DM_ID:
        channel = "自分のDM";
        break;
      case slack.KINTAI_ID:
        channel = "勤怠チャンネル";
        break;
      default:
        channel = "その他";
        console.error("変なチャンネルに投稿しようとしています。確認してください。");
        rl.close();
        return false;
    }

    rl.question(`投稿してもいいですか？ \n 投稿先 -> ${channel} (y or n) : `, (answer) => {
      let bool = false;
      try {
        if (!(answer === "y" || answer === "Y")) {
          throw new Error("終了します");
        }
        bool = true;
      } catch (error) {
        rl.close();
        console.error(error.message);
        return false;
      }
      rl.close();
      resolve(bool);
    });
  });
};

export {checkPosting};
