module.exports = errorHandler;

function errorHandler(err, req, res, next) {
    if (typeof (err) === 'string') {
        // custom application error
        return res.status(400).json({status:"400", message: "data Not find" });
    }

    if (err.name === 'ValidationError') {
        // mongoose validation error
        return res.status(402).json({ message: err.message });
    }

    if (err.name === 'UnauthorizedError') {
        // jwt authentication error
        return res.status(401).json({status:"403", message: 'Invalid Token' });
    }

    // default to 500 server error
    return res.status(500).json({status:"500", message: err.message });
}