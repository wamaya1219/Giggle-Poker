# デプロイまでの流れ

参考：https://devcenter.heroku.com/ja/articles/deploying-nodejs#prerequisites

## Node.jsおよびnpmがインストール済みであること

* Node.js
  * https://nodejs.org/ja/ の推奨版

* npm
  * Node.jsインストール後作業するファイルディレクトリ内で コマンド”npm install ○○” (”○○”はモジュール名)

## 依存関係を定義するpackage.jsonを作成

* コマンド ”npm init”　

* どのファイルを動かして、versionがいくつで、などプログラムファイルを実行すための情報をまとめる。

  * ※コマンド”npm install ○○”　を実行した場合、package.jsonに記述する必要がある。  
  * コマンド ”npm install ○○ --save” で自動的に記述される。(”○○”はモジュール名)

* ※Node.jsのverisonも記述必要があり、これは手書きが必要 - コマンド ”node --version” でversionを確認しつつ、

  ”

    "engines": {
      "node": "10.x"
    },

  ”

  をpackage.jsonに追記(今回versionは10.18)

## Heroku

* コマンド　”Heroku login”

  * ※アカウントがない場合は新規作成する

* コマンド ”Heroku create ○○ ”(”○○”は小文字の英字でプロジェクト名を入力。※URLに記述される)

  * 今回は　https://giggle-porker.herokuapp.com/　（上記の"○○"は”giggle-poker”にあたる）

## デプロイ

* 前準備

  * 同ディレクトリ内にファイル名”Procfile”というファイルを用意する。
  * ”Procfile”には

  ”

  web: node ○○.js

  ”

  と記述する。（”○○”には任意のファイル名を入力）

* デプロイ通常
  * コマンド　”git init”
  * コマンド　”git add.”
  * コマンド　”git commit -am "○○"”（”○○”には任意のコメントを入力）
  * コマンド　”git push heroku master”

* デプロイ―Git連携（今回はこちらを使用）
  * Gitのアカウントで連携可能
  * 初期設定だとロックのかかっている状態であるため、リポジトリによっては、パスワードを入力して許可が必要
  * 自動と手動、mainか他ブランチを選択しデプロイする
