const jwt = require('jsonwebtoken');

class AuthController {

    // [POST] /auth/login
    login(req, res) {
        const body = req.body;
        const token = jwt.sign(body, process.env.ACCESS_TOKEN_SECRET);
        res.json({
            token
        });
    }

    // [GET] /news/:slug
    show(req, res) {
        res.send('New detail');
    }
}

module.exports = new AuthController;