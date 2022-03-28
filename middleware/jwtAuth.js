const jwt = require('jsonwebtoken');

exports.jwtAuth = async (req, res, next) => {
    const bearerToken = req.session.token;
    if (typeof bearerToken !== 'undefined') {
        jwt.verify(bearerToken, process.env.JWT_SECRET, async (err, authData) => {
            if (err) {
               return res.status(403).json("Your session has expired");
            }
            else {
                req.userId = authData.id;
                await next();
            }
        });
       
    } else {
       res.render('pages/login-page')
    }
};