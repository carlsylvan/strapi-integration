import bcrypt from 'bcrypt';

import sqlite3 from 'sqlite3';

const db = new sqlite3.Database('users.db');