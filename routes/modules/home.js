const express = require('express')
const router = express.Router()

router.get('/', (req,res)=>{
    res.render('index')
})
// router.get('/',(req,res)=>{
//     Todo.find() //取得資料庫資料
//         .lean() //內建整理資料function
//         .sort({_id: 'asc'}) //反序：desc
//         .then( todos => res.render('index', {todos}))
//         .catch(error => console.error(error))      
// })

module.exports = router