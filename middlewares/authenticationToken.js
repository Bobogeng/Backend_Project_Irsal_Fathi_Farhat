import jwt from "jsonwebtoken";
import roleAccess from "./roleAccess.js";

const authenticateToken = (req, res, next) => {
    const authHeader = req.headers["authorization"];
    const token = authHeader && authHeader.split(" ")[1];

    if (!token) {
        return next({ type: "missingToken" });
    }

    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
        if (err) {
            return next({ type: "invalidToken" });
        }
        req.userId = decoded.userId;
        req.userRole = decoded.role;
        const route = req.baseUrl;
        const method = req.method;
        if (!roleAccess(req.userId, req.userRole, route, method)) {
            return next({ type: "unauthorizedAccess" });
        }
        next();
    });
};

export default authenticateToken;
