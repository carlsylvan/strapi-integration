import express from "express";
import { televisionsRouter } from "./routes/televisionsRouter";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/televisions', televisionsRouter);

app.get('/', (req, res) => {
    res.send("strapi-integration")
});

app.listen(8008, () => {
    console.log("http://localhost:8008");
})