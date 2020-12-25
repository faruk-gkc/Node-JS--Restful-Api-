const express = require('express')
require("./config/database")
const app = express()

const adminRouter = require('./routers/adminRouter'); // router require ettik..
// const exMiddleware = require('./middlewares/thirdPartyMiddleware');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// app.use(exMiddleware) // MİDDLEWARE REQUİRE
app.use('/admin', adminRouter); // '/api/users' isimli bir istek gelirse userRouter çalışsın..
 
app.get('/', function (req, res) {
  res.send('Merhaba Dünya!')
})


 
app.listen(3000, (req,res)=> {
    console.log("localhost:3000 şuan çalışıyor..");
})