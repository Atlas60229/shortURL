# find_restaurant
Node.js + express框架下的試作品

## 內容:
縮網址

## 執行環境
Node.js: v18.12.0 <br>
express: v4.18.2 <br>
express-handlebars: v6.0.6 <br>

## 安裝:
1. 打開terminal並複製此專案 <br>
`git clone https://github.com/Atlas60229/shortURL.git`

2. 開啟終端機(Terminal)，進入存放此專案的資料夾 <br>
`cd find_restaurant`

3. 安裝 npm 套件 <br>
`npm install`

4. 安裝 nodemon 套件 <br>
`npm install -g nodemon`
 
5. 新增.env檔案並設置資料庫連線字串：<br>
`MONGODB_URL=mongodb+srv://<account>:<password>@cluster0.<xxxxx>.mongodb.net/URLSet?retryWrites=true&w=majority`

6. 啟動伺服器，執行 app.js 檔案<br>
`nodemon app.js`

7. 當 terminal 出現「success initiate Server localhost:3000」及「MongoDB connected!」，表示伺服器與資料庫已啟動並成功連結<br>

8. 開啟新網頁並在網址輸入http://localhost:3000/<br>
