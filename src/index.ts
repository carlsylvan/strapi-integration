import express from "express";
import { televisionsRouter } from "./routes/televisionsRouter";
import { audio_devicesRouter } from "./routes/audio_devicesRouter";
import { computersRouter } from "./routes/computersRouter";
import { mobilesRouter } from "./routes/mobilesRouter";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/televisions', televisionsRouter);
app.use('/audio_devices', audio_devicesRouter);
app.use('/computers', computersRouter);
app.use('/mobiles', mobilesRouter);

app.get('/', (req, res) => {
    res.send("Carls strapi-integration")
});

app.listen(8008, () => {
    console.log("http://localhost:8008");
})

// getTelevisions()
//   .then((response) => {
//     console.log(response);
//   })
//   .catch((error) => {
//     console.error(error);
//   });