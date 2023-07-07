# ベースイメージの指定
FROM node:10.24.1

# アプリケーションディレクトリの作成
WORKDIR /app

# package.jsonとpackage-lock.jsonをコピーして依存関係をインストール
COPY package*.json ./
RUN npm install

# ソースコードをコピー
COPY . .

# ポート番号の公開
EXPOSE 3000

# アプリケーションの起動コマンド
CMD ["node", "app.js"]