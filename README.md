## 動作確認環境
- macOS Monterey バージョン12.5.1
- Node.js 16.19.0

## 使い方
初回のみ
```
npm i
```

以下コマンドを実行

```
report
```

※パスの登録が必要

zshの場合は以下を追加する

~/.zshrc
```
export PATH=$PATH:【reportファイルを置いたパス】
```

## pushするときは・・・
bin配下のファイルのgit追跡を無視するために以下コマンドを実行してください

`git update-index --skip-worktree ./bin/*`

※追跡対象から無視されたファイルの確認

`git ls-files -v | grep ^S`

## 参考記事
https://qiita.com/k_kuroiwa/items/013a98f5ad3486e5837b
