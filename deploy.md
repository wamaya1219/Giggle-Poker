##デプロイまでの流れ

参考：https://devcenter.heroku.com/ja/articles/deploying-nodejs#prerequisites

１．Node.jsおよびnpmがインストール済みであること

・Node.js - https://nodejs.org/ja/ の推奨版

・npm - Node.jsインストール後作業するファイルディレクトリ内で コマンド”npm install ~~” (”~~”は個人によって異なるが、今回は”ejs”)

２．依存関係を定義するpackage.jsonを作成

・コマンド ”npm init”　

・どのファイルを動かして、versionがいくつで、などプログラムファイルを実行すための情報をまとめる。

※コマンド”npm install ~~”　を実行した場合、package.jsonに記述する必要がある - コマンド ”npm install ~~save” で自動的に記述される。(”~~”は今回”ejs”)

※Node.jsのverisonも記述必要があり、これは手書きが必要 - コマンド ”node --version” でversionを確認しつつ、

”

  "engines": {
    "node": "10.x"
  },

”

をpackage.jsonに追記(今回versionは10.18)

２．５.　アプリのビルドとローカルでの実行

３．Herokuログイン

・コマンド　”Heroku login”

※アカウントがない場合は新規作成する

