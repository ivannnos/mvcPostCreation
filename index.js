const express = require('express')
const mongoose = require('mongoose')
const app = express()

const postModel = require('./models/postModel')
const create = require('./controllers/PostController')
mongoose.connect('mongodb://localhost:27017/PostDB')
.then(()=>{
    console.log('db connected')
}).catch((err)=>{
    console.log('db error occured', err)
})

app.use(express.json());

app.post('/post/create', create);

app.listen(4444, (err) => {
    if(err) {
        console.log('error occured')
    } else {
        console.log('server has been started on 4444')
    }
    
})