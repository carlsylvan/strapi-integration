export const forceAuthorize = (req: any, res: any, next: any) => {
    if (req.user.isLoggedIn) {
        next()
    } else {
        res.sendStatus(401)
    }
}