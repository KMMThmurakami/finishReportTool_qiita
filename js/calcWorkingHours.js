const calcWorkingHours = (timeSt, timeRest) => {
  return new Promise(resolve => {  
    // 終了時刻 = 現在時刻
    const h = new Date().getHours();
    const m = new Date().getMinutes();
    const timeEd = h * 100 + m;

    // 稼働時間：休憩時間を引く
    const termHm = timeEd - timeSt - (timeRest * 100);
    const termH  = Math.floor(termHm / 100);
    const termM  = quarterTime(Math.floor(termHm % 100));

    const workTime = (`【就業時間】${extractHour(timeSt)}:${extractMinutes(timeSt)} - ${extractHour(timeEd)}:${extractMinutes(timeEd)}`);
    const term     = (`【稼働時間の合計】${termH + termM}h (休憩：${timeRest}h)`);

    resolve(workTime + '\n' + term);
  })
};

export {calcWorkingHours};
//------------------------------------------------------------
const extractHour = (time) => {
  return String(Math.floor(time / 100)).padStart(2, 0);
};

const extractMinutes = (time) => {
  return String(Math.floor(time % 100)).padStart(2, 0);
};

// 0.25区切りにする
const quarterTime = (time) => {
  if (0 <= time && time < 15) {
    return 0;
  } else if (15 <= time && time < 30) {
    return 0.25;
  } else if (30 <= time && time < 45) {
    return 0.5;
  } else {
    return 0.75;
  }
}
