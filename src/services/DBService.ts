import sqlite from 'sqlite3'
const db = new sqlite.Database('database.db')

const createQueries = [
    `
    CREATE TABLE IF NOT EXISTS accounts (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        username TEXT,
        hashedPassword TEXT,
        CONSTRAINT uniqueUsername UNIQUE(username)
    )
`]

console.log("hej")

createQueries.forEach((query) => {
    db.run(query)
})

module.exports.registerUser = (username: any, hashedPassword: any, callback: any) => {
    const query = `
        INSERT INTO accounts (username, hashedPassword)
        VALUES (?, ?)
    `
    const values = [
        username,
        hashedPassword
    ]

    db.run(query, values, callback)
}

module.exports.getAccountByUsername = function (username: string, callback: () => any ) {
    const query = `
        SELECT * FROM accounts WHERE username = ?
    `
    const values = [username]

    db.get(query, values, callback)
}
