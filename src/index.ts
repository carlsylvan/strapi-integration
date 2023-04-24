import express from "express";
import { televisionsRouter } from "./routes/televisionsRouter";
import { audiosRouter } from "./routes/audiosRouter";
import { computersRouter } from "./routes/computersRouter";
import { mobilesRouter } from "./routes/mobilesRouter";
import bcrypt from 'bcrypt';
import sqlite3 from 'sqlite3';
import { IUser } from "./models/IUser";
import jwt from 'jsonwebtoken';

const db = new sqlite3.Database('users.db');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/televisions', televisionsRouter);
app.use('/audio', audiosRouter);
app.use('/computers', computersRouter);
app.use('/mobiles', mobilesRouter);

app.get('/', (req, res) => {
    res.send("Carls strapi-integration")
});

db.serialize(() => {
    db.run(`
      CREATE TABLE IF NOT EXISTS users (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        username TEXT,
        email TEXT,
        password TEXT
      )
    `);
  });

app.post('/register', async (req, res) => {
    const { username, email, password } = req.body;
  
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);
  
    const sql = 'INSERT INTO users (username, email, password) VALUES (?, ?, ?)';
    db.run(sql, [username, email, hashedPassword], (err) => {
      if (err) {
        console.error(err.message);
        return res.status(500).send('Internal server error');
      }
      return res.status(200).send('User created successfully');
    });
  });

  app.post('/login', async (req, res) => {
    const { email, password } = req.body;
    const sql = 'SELECT * FROM users WHERE email = ?';
    db.get(sql, [email], async (err, row: IUser) => {
      if (err) {
        console.error(err.message);
        return res.status(500).send('Internal server error');
      }
      if (!row) {
        return res.status(401).send('Invalid email or password');
      }
  
      const validPassword = await bcrypt.compare(password, row.password);
      if (!validPassword) {
        return res.status(401).send('Invalid email or password');
      }
  
      const token = jwt.sign({ userId: row.id }, "hemligt");
      return res.status(200).json({ token });
    });
  });

app.listen(8008, () => {
    console.log("http://localhost:8008");
})