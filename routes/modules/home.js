const express = require('express')
const router = express.Router()
const WebSite = require('../../models/website')
const open = require('open')

// 首頁
router.get('/', (req, res) => {
    res.render('index')
})

// 新增
router.get('/create', (req, res) => {
    const website = req.query.website
    const codeArray = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
    let tempWebCode = ''
    function hash(str, prime) {
        let hash = 0;
        const len = String(str).length;
        for (let i = 0; i < len; i++) {
            let chr = String(str).charCodeAt(i);
            hash = (hash * prime) + chr;
            hash = hash % 61
        }
        return tempWebCode += codeArray[hash];
    }
    hash(website, 7)
    hash(website, 23)
    hash(website, 53)
    hash(website, 31)
    hash(website, 47)
    webCode = 'localhost:3000/' + tempWebCode

    return WebSite.create({ website: website, shortURL: tempWebCode })     // 存入資料庫
        .then(() => res.render('result', { webCode })) // 新增完成後導回首頁
        .catch(error => console.log(error))

})

//從資料庫搜尋網址
router.get('/:id', (req, res) => {
    const id = req.params.id
    let webURL = ''

    return WebSite.find()
        .lean()
        .then(webSite =>{
            targetWebsite = webSite.find(webSite => webSite.shortURL === id)
            webURL = targetWebsite.website
            open(webURL)
            res.redirect('/')
        })
        .catch(error => console.log(error))
})

module.exports = router