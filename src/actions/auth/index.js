import Express from 'express';
import passport from 'passport';
import passportLocal from 'passport-local';
import UserDb from '../../lib/userDb.js';

const app = Express.Router();
const userData = new UserDb();
userData.findOne

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
        if (user.password != password) {
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
            res.status(200).json({
                succes: true,
                token: 'thisisareallyuniquetoken'
            });
        }
    }) (req, res);
});

app.post('/', (req, res) => {
    res.status(200).json({
        "message": "Everthing is just fine"
    });
})

export default app;