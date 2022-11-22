// Require
const express = require('express')
const app = express()
const exphbs = require('express-handlebars')
const bodyParser = require('body-parser')
const PORT = process.env.PORT || 3000 // PORT會由heroku自動提供到環境
const methodOverride = require('method-override')
const routes = require('./routes')
require('./config/mongoose')  //執行app.js時會一併執行mongoose.js


// Use
app.use(bodyParser.urlencoded({ extended: true }))
app.use(methodOverride('_method'))
app.use(routes)

// 設定template engine:
app.engine('handlebars', exphbs.engine({ defaultLayout: 'main' }))  //設定預設頁面為main.handlebars
app.set('view engine', 'handlebars') // 用handlebars作為模板引擎

//啟動server
app.listen(PORT,()=>{
    console.log(`success initiate Server localhost:${PORT}`)
})