import express from "express";
import { televisionsRouter } from "./routes/televisionsRouter";
import { audiosRouter } from "./routes/audiosRouter";
import { computersRouter } from "./routes/computersRouter";
import { mobilesRouter } from "./routes/mobilesRouter";
import authRouter from "./routes/authRouter";
import { setLoginStatus } from "./middleware/setLogin";
const db = require('./services/DBService');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(setLoginStatus);
app.use('/televisions', televisionsRouter);
app.use('/audio', audiosRouter);
app.use('/computers', computersRouter);
app.use('/mobiles', mobilesRouter);
app.use('/users', authRouter);

app.get('/', (req, res) => {
    res.send("Carls strapi-integration")
});


app.listen(8008, () => {
    console.log("http://localhost:8008");
})