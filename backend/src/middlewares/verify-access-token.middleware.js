import jwt from 'jsonwebtoken'

/*This middleware could have been used by the frontend if had some more time*/
const verify_access_token = async (req, res, next) => {
    await jwt.verify(req.body.access_token, process.env.ACCESS_TOKEN_SECRET, (err, username) => {
        if (err) {
            req.verification = false
        }
        else {
            req.verification = true
            req.username = username
        }
    })
    next()
}

export { verify_access_token }