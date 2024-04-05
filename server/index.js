/**
const express = require('express')
const app = express()
const port = 3000

const axios = require('axios')
const cheerio = require('cheerio')
const log = console.log

const getHtml = async () => {
  try {
    return await axios.get('https://www.yna.co.kr/sports/all')
  } catch (error) {
    console.error(error)
  }
}

getHtml()
  .then((html) => {
    let ulList = []
    const $ = cheerio.load(html.data)
    const $bodyList = $('div.headline-list ul').children('li.section02')

    $bodyList.each(function (i, elem) {
      console.log(i)
      ulList[i] = {
        title: $(this).find('strong.news-tl a').text(),
        url: $(this).find('strong.news-tl a').attr('href'),
        image_url: $(this).find('p.poto a img').attr('src'),
        image_alt: $(this).find('p.poto a img').attr('alt'),
        summary: $(this).find('p.lead').text().slice(0, -11),
        date: $(this).find('span.p-time').text()
      }
    })

    const data = ulList.filter((n) => n.title)
    console.log(data)
    return data
  })
  .then((res) => log(res))
*/

const express = require('express')
const path = require('path') // path 모듈 사용
const app = express()

app.listen(8080, () => {
  console.log('server on')
})

app.use('/', express.static(path.join(__dirname, 'app/dist')))
// 이 부분이 없으면 아래코드에서 index.html을 로드하지 못한다.

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'app/dist/index.html'))
})
// 기본 경로 '/'을 통해 빌드된 dist/index.html 파일을 로드시킨다.
