// 将来的な拡張を考慮して可変長引数で受け取る
const makePostingText = (...args) => {
  return new Promise((resolve) => {
    let text = "";

    // md記法：3連バッククウォートではさんでコードブロックにする
    text = text + "```" + "\n";
    for (var i = 0; i < args.length; i++) {
      text = text + args[i] + "\n";
    }
    text = text + "```";
    console.log(text);
    resolve(text);
  });
};

export {makePostingText};
