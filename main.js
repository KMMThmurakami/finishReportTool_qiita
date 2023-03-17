import {inputStartTime}   from "./js/inputStartTime.js";
import {inputRestTime}    from "./js/inputRestTime.js";
import {calcWorkingHours} from "./js/calcWorkingHours.js";
import {selectWork}       from "./js/selectWork.js";
import {addOtherText}     from "./js/addOtherText.js";
import {addOtherItems}    from "./js/addOtherItems.js";
import {checkPosting}     from "./js/checkPosting.js";
import {makePostingText}  from "./js/makePostingText.js";
import {postTextToSlack}  from "./js/postTextToSlack.js";

const main = async () => {
  // 開始時間を入力し、作業時間を計算
  const startTime    = await inputStartTime("開始時間は?【入力例:09時30分 → 0930】");
  const restTime     = await inputRestTime("休憩時間は?【入力例:1時30分 → 1.5】(未入力の場合は1時間で計算)");
  const workingHours = await calcWorkingHours(startTime, restTime);

  // 本日の作業を入力
  const workToday      = await selectWork("本日の作業は?", "【本日の作業】");
  const workTodayOther = await addOtherText();
  const jobToday       = workToday + workTodayOther;

  // 明日の作業を入力
  const workTomorrow      = await selectWork("明日の作業は?", "【明日の作業】");
  const workTomorrowOther = await addOtherText();
  const jobTomorrow       = workTomorrow + workTomorrowOther;

  // 共有・相談事項を入力
  const otherItems = await addOtherItems();

  // slackへ投稿
  await checkPosting();
  const text = await makePostingText(workingHours, jobToday, jobTomorrow, otherItems);
  await postTextToSlack(text);
};

main();
