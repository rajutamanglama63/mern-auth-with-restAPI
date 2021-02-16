const express = require("express");
const cookieParser = require("cookie-parser");
const dotenv = require("dotenv");
const cors = require("cors");

const DatabaseConnection = require('./config/db');
const userRoutes = require('./routes/userRoutes');
// const User = require('./model/UserSchema');

const app = express();

dotenv.config();
const Port = process.env.PORT || 2020;


// DB connect
DatabaseConnection();

// middlewares
app.use(cookieParser());
app.use(cors());
app.use(express.json());

// routers
app.use('/users', userRoutes);

//dummy user
// const userInput = {
//     username : "Raju",
//     password : "1234546",
//     role : "admin"
// }

// const user = new User(userInput);
// user.save((err, document) => {
//     if(err) {
//         console.log(err);
//     } else {
//         console.log(document);
//     }
// })

app.listen(Port, () => {
    console.log(`Server started at port http://localhost:${Port}`);
});