# express-mongodb-handson-env

## 環境

- Node 10.24.1
- npm 6.14.12
- nodejs mongodb driver(node_module.mongodb) 3.7.4
- MongoDB shell v4.4.23-rc0

## 前提

- git のインストール
  - https://git-scm.com/download/win
- docker のインストール
  - Docker Desktop for Windows を使う場合
    - https://docs.docker.com/desktop/install/windows-install/
    - ※エンタープライズ版は有料なので、念の為個人用のアカウント or メールアドレスを使用してください。

## 手順

1. 任意のディレクトリに移動し、当該テンプレートを git clone

- `git clone https://github.com/taniii-shio/express-mongodb-handson-env.git`

2. テンプレートに移動し、コンテナを起動

- `cd express-mongodb-handson-env`
- `docker-compose up -d`

3. コンテナが起動していることを確認し、app ディレクトリ配下で実装

- `docker ps`
  - `node-app`と`mongodb`コンテナが起動していることを確認
- `cd app`
  - app ディレクトリ配下で実装を進める（骨格は作成済み）

## 注意事項

- npm パッケージのうち、`express`と`mongodb`はインストール済み
- mongodb に格納する初期データはインサート済み（./app/initialize-node.sh）
- node-app コンテナはローカルホストの 8000 番ポートでリッスンしています
  - そのため、app.js を実行せずともサーバーが起動している状態が作れています（動画内で登場する app.js の実行は無視してください）
  - また、`nodemon`というライブラリを使用しているため、ファイルの保存で変更がコンテナに反映されます
- npm コマンドを実行する際は、`docker exec`コマンドを使用し、コンテナ内で実行してください
  - 例 1、`eslint`をインストールする場合
    - `docker exec node-app npm install eslint@^4.19 --save-dev`
  - 例 2、npm scripts を実行する場合
    - `docker exec node-app npm run build-dev`
