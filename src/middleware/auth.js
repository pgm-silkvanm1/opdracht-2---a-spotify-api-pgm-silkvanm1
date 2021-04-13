/* eslint-disable no-undef */
import passport from 'passport';
import passportJWT from 'passport-jwt';
import dotenv from 'dotenv';

dotenv.config();

const JWTStrategy = passportJWT.Strategy;
const ExtractJWT = passportJWT.ExtractJwt;

const jwtOptions = {
    jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
    secretOrKey: process.env.JWT_UNIQUE_KEY
};

// config of passport jwt

passport.use(new JWTStrategy(jwtOptions, function(jwt_payload, done) {
    try {
        console.error(`${jwt_payload.username}somebody is doing a request`);
        return done(null, jwt_payload.username);
    } catch (error) {
        return done(null, error);
    }
}));


export default (req, res, next) => {
    if(req.method == 'GET') {
        next();
        return false
    }
    passport.authenticate('jwt', {session: false}, (error, user, info) => {
        if(error || !user) {
            console.error('User not authenticated');
            res.status(401).send(info);
        } else {
            next();
        }
    })(req, res, next);
}