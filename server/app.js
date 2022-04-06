require("dotenv").config();
const cors = require("cors")
const cookieParser = require("cookie-parser")
const logger = require("morgan")
const test = require('./controller')
const userRouter = require("./routes/user")
const restaurantRouter = require("./routes/restaurant")
const oauthRouter = require("./routes/oauth")

const express = require("express");
const passport = require("passport");
const passportConfig = require('./passport')
const app = express()

app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use(
    cors({
      origin: '*',
      credentials: true
    })
)
app.use(cookieParser())
app.use(passport.initialize());
passportConfig();

app.get('/', test.get)
app.use('/user', userRouter)
app.use('/restaurant', restaurantRouter)
app.use('/oauth', oauthRouter)

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`서버가 ${PORT}번에서 작동중입니다.`);
});
  


