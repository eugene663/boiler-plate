const express = require('express') //모듈 가져옴
const app = express() //새로운 express앱
const port = 5000

const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://yujinlee:abcd1234@boilerplate.3ob3t.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
).then(() => console.log('MongoDB Connected...'))
  .catch(err => console.log(err))




app.get('/', (req, res) => {
    res.send('Hello World! 안녕하세요')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})