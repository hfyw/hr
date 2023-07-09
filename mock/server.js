// 引入express
let express = require('express')
// 引入mock
let Mock = require('mockjs')
// 引入login页面数据
const data = require('../common/login.json')
// 实例化express
const app = express()

app.use('/user/login', (req, res) => {
  res.json(
    Mock.mock({
      status: 200,
      msg: '成功',
      data
    })
  )
})
app.listen('8090', () => {
  console.log('监听端口', '8090')
})
