import jwt from 'jsonwebtoken'

const sign_jwt = name => {
    const username = { username: name }

    const access_token = jwt.sign(username, process.env.ACCESS_TOKEN_SECRET)

    return access_token
}

export { sign_jwt }