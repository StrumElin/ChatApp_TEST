/**
 * Created by zhoupengkai on 2018/3/10.
 */


const express = require('express');

const bodyParser = require('body-parser');

const path = require("path");

const fs = require('fs');

require('./config/config');

var app = express();

var port = process.env.PORT;

var publicPath = path.join(__dirname,'../','/public');

//将public 的静态界面发送到客户端
app.use(express.static(publicPath));



app.listen(port,()=>{
    console.log(`server is up on port : ${port}`);
})


