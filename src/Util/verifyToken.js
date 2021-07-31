const jwt = require('jsonwebtoken');

function verifyToken(req, res, next) {
    const bearerToken = req.headers["authorization"];
    if (!bearerToken) {
        res.status(403).json({
            message: "Forbidden"
        });
    }
    const token = bearerToken.split(" ")[1];
    console.log(token);
    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, function(err, decoded) {
        if (err) {
            res.status(401).json({
                message: "Unauthorized"
            });
        } else {
            next()
        }
    });
}

module.exports = verifyToken;
