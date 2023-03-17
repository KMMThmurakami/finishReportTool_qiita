import slack from "../bin/slack.json" assert { type: "json" };
import pkg from "@slack/bolt";
const { App } = pkg;

const app = new App({
  token: slack.token,
  signingSecret: slack.signingSecret,
});

const channelId = slack.postChannelId;

const postTextToSlack = (param) => {
  return new Promise(resolve => {
    try {
      app.client.chat.postMessage({
        channel: channelId,
        text: param,
      });
    } catch (error) {
      console.error(error);
    }
    console.log('slackに投稿しました！');
  });
};

export {postTextToSlack};
