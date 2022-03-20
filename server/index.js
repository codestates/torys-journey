require("dotenv").config();
const fs = require("fs")
const https = require("https")
const cors = require("cors")
const cookieParser = require("cookie-parser")
const logger = require("morgan")
const test = require('./controllers')
// const userRouter = require("./routes/user")
// const restaurantRouter = require("./routes/rest")

const express = require("express")
const app = express()

app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use(
    cors()
)
app.use(cookieParser())
app.get('/', test.get)
// app.use('/user', userRouter)
// app.use('/rest', restaurantRouter)


const PORT = process.env.PORT || 4000;



if(fs.existsSync("./key.pem") && fs.existsSync("./cert.pem")){

  const privateKey = fs.readFileSync(__dirname + "/key.pem", "utf8");
  const certificate = fs.readFileSync(__dirname + "/cert.pem", "utf8");
  const credentials = { key: privateKey, cert: certificate };

  https.createServer(credentials, app).listen(PORT, () => console.log(`서버가 ${PORT}번에서 작동중입니다.`));

} else {
  app.listen(PORT, () => {
    console.log(`서버가 ${PORT}번에서 작동중입니다.`);
  });
  
}

