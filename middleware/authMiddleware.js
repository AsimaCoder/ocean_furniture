const jwt = require('jsonwebtoken');

const authMiddleware = (req, res, next) => {
    // Получаем токен из заголовков запроса
    const token = req.headers.authorization?.split(' ')[1]; // Предполагаем, что токен передаётся в заголовке Authorization: Bearer <token>

    if (!token) {
        return res.status(403).json({ message: "A token is required for authentication" });
    }

    try {
        // Верификация токена
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded;
    } catch (err) {
        return res.status(401).json({ message: "Invalid Token" });
    }

    return next(); // Передаём управление следующему middleware, если токен валиден
};

module.exports = authMiddleware;
