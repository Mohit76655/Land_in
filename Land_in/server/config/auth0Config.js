import { auth } from 'express-oauth2-jwt-bearer'

const jwtCheck = auth({
    audience: "https://land-in.vercel.app",
    issuerBaseURL: "https://dev-fcgzs4kgouncxmyb.us.auth0.com",
    tokenSigningAlg: "RS256"
})

export default jwtCheck