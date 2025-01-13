const express = require('express');

const ServerConfig = require('./config/serverConfig');
const connectDB = require('./config/dbConfig');
const user = require('./schema/userSchema');
const userRouter = require('./routes/userRoute.js');
const cartRouter = require('./routes/cartRoute.js');

const app = express();

app.use(express.json());
app.use(express.text());
app.use(express.urlencoded({ extended: true }));

app.use('/user', userRouter);
app.get('/carts', cartRouter);

app.post('/ping', (req, res) => {
    console.log(req.body);
    return res.json({message: "pong"});
})

app.listen(ServerConfig.PORT, async () => {
    await connectDB();
    console.log(`Server started at port ${ServerConfig.PORT}...!!`);

    // const newUser2 = await user.create({
    //     firstName: "Johnnniga",
    //     lastName: "Doeeeeiga",
    //     mobileNumber: "1234567990",
    //     email: "a@vx.com",
    //     password: "passwordxxx"
    // });
    // console.log("New user created successfully");
    // console.log(newUser2);
});