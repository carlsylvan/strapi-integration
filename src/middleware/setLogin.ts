import { decodeJWT, verifyJWT } from '../utils/authUtils'

export const setLoginStatus = (req: any, res: any, next: any) => {
    const token = req.headers.authorization

    if (token && verifyJWT(token)) {
        const tokenData = decodeJWT(token)
        req.user = tokenData
        req.user.isLoggedIn = true

    } else {
        req.user = { isLoggedIn: false }
    }
    next()
}