import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import path from 'path'
require("dotenv").config({ path: path.resolve(__dirname, '../.env') })

module.exports.hashPassword = (password: string) => {
    const hashValue = bcrypt.hashSync(password, 8)
    return hashValue
}

module.exports.comparePassword = (password: string, hash: string) => {
    const correct = bcrypt.compareSync(password, hash)
    return correct
}

module.exports.getJWTToken = (account: any) => {
    const userData = { userId: account.id, username: account.username }
        //@ts-ignore
    const accessToken = jwt.sign(userData, "hemligt")
    return accessToken
}

export const verifyJWT = (token: any) => {
        //@ts-ignore
        console.log(token)
    return jwt.verify(token, "hemligt")
}

export const decodeJWT = (token: any) => {
    //@ts-ignore
    return jwt.decode(token, "hemligt")
}