## 開発環境の準備
```
# レポジトリをクローンする
$ git clone https://github.com/claustra01/hackz-tsumaguro-backend

# 作業ディレクトリに移動する
$ cd hackz-tsumaguro-backend

# 依存モジュールをインストールする
$ npm install

# サーバーを起動
$ npm start

# 以下のURLを開き、起動しているか確認
http://localhost:8080/
```

## 作業手順
```
# ローカル環境を最新にする
$ git checkout develop
$ git pull origin develop
$ git fetch

# .envファイルを用意する
# .env.sampleを複製して名前を.envに変更する
# Discordで共有している内容に書き換える

# ブランチを切り替える
# ブランチ名はそのブランチの内容が分かるように
# 例: login, fix/issue3
$ git checkout -b <ブランチ名>

# 作業内容をcommit&pushする
# コミットメッセージは内容が分かれば日本語英語問わず好きな形でOK

# そのブランチで作業が終わればdevelopブランチにプルリクエストを出す
# 原則として一つのブランチにつき一つの機能
# 例: loginブランチでログイン機能が完成したらプルリクを出し、ログアウト機能はlogoutブランチに切り替えてブランチを別にする
```
