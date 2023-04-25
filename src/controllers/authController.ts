const db = require('../services/DBService')
const utils = require('../utils/authUtils')
//ts-nocheck
export const AuthController = {
    registerNewUser: (req:any, res:any) => {
        const { username, password } = req.body
        const hashedPassword = utils.hashPassword(password)

        db.registerUser(username, hashedPassword, (error: any) => {
            if (error) {
                res.status(500).send(error)
            } else {
                res.sendStatus(200)
            }
        })
    },
    login: (req: any, res: any) => {
        const { username, password } = req.body

        db.getAccountByUsername(username, (error: any, account: any) => {
            if (error) {
                res.status(500).send(error)
            } else if (account) {
                const hashedPassword = account.hashedPassword
                const correctPassword = utils.comparePassword(password, hashedPassword)
                // console.log("hej2", username, account)
                if (correctPassword) {
                    const jwtToken = utils.getJWTToken(account)
                    res.send(jwtToken)
                } else {
                    res.sendStatus(404)
                }

            } else {
                res.sendStatus(404)
            }
        })
    }
}
