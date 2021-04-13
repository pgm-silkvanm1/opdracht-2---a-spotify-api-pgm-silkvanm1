/* eslint-disable no-undef */
import Express from 'express';
import passport from 'passport';
import passportLocal from 'passport-local';
import UserDb from '../../lib/userDb.js';
import bcrypt from 'bcrypt';
import dotenv from 'dotenv';
import jwt from 'jsonwebtoken';

const app = Express.Router();
const userData = new UserDb();
dotenv.config();

const LocalStrategy = passportLocal.Strategy;

// configuration of passport.js with local strategy
passport.use(new LocalStrategy({ 
    usernameField: 'username', 
    passwordField: 'password' 
    },
    async (username, password, done) => {
        // console.info(username);

        // get user from db
        const user = await userData.findOne(username);

        // check if user is found
        if (!user) {
            return done(null, false, { message: 'user not found in database' });
        }

        // check on valid pass
        if (!await isPasswordValid(password, user.password)) {
            return done(null, false, { message: 'password incorrect' });
        }

        // return the existing and authenticated user
        return done(null, user);
    }
));


app.post('/login', (req, res) => {
    // do authentication
    passport.authenticate('local', (error, user, info)=> {
        if(error) {
            res.status(401).json(info);
        } else if(!user) {
            res.status(401).json(info);
        } else {
            const token = jwt.sign(user, process.env.JWT_UNIQUE_KEY,{
                expiresIn: parseInt(process.env.JWT_LIFETIME)
            });

            res.status(200).json({
                succes: true,
                token: token,
                user: {
                    id: user.id,
                    username: user.email
                }
            });
        }
    }) (req, res);
});

app.post('/hashpass', (req, res)=> {
    bcrypt.hash(req.body.password, parseInt(process.env.BCRYPT_SALT_ROUNDS)).then(function(hash) {
        res.status(200).send(hash);
        // store hash in password db
    });

})

app.get('/', (req, res) => {
    res.status(200).json({
        "message": "Everthing is just fine"
    });
})

export default app;

const isPasswordValid = async (userPassword, dbPassword) => {
    const match = await bcrypt.compare(userPassword, dbPassword);
    return match;
}