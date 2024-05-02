import User from "../models/User.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";

const AuthController = {};

AuthController.register = async (req, res, next) => {
    try {
        const { name, username, password } = req.body;

        if (!username) {
            return next({ type: "usernameEmptyError" });
        }
        if (!password) {
            return next({ type: "passwordEmptyError" });
        }

        const userExists = await new Promise((resolve, reject) => {
            User.checkUserByUsername(username, (err, data) => {
                if (err) {
                    if (err.type === "usernameNotFound") {
                        resolve(false);
                    } else {
                        reject(err);
                    }
                } else {
                    resolve(true);
                }
            });
        });

        if (userExists) {
            return next({
                type: "usernameExists",
                value: username,
            });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const userData = new User({
            name: name,
            username: username,
            password: hashedPassword,
        });

        User.create(userData, (err, data) => {
            if (err) {
                next(err);
            } else {
                res.send(data);
            }
        });
    } catch (error) {
        console.error("Error registering user:", error);
        next({ type: "userRegisterFailed" });
    }
};

AuthController.login = async (req, res, next) => {
    try {
        const { username, password } = req.body;

        if (!username) {
            return next({ type: "usernameEmptyError" });
        }
        if (!password) {
            return next({ type: "passwordEmptyError" });
        }

        User.findByUsername(username, async (err, user) => {
            if (err) {
                next(err);
            }

            const isValidPassword = await bcrypt.compare(
                password,
                user.password
            );
            if (!isValidPassword) {
                return next({ type: "invalidPasswordError" });
            }

            const token = jwt.sign(
                { userId: user.id, role: user.role },
                process.env.JWT_SECRET,
                { expiresIn: "1h" }
            );

            res.json({ token });
        });
    } catch (error) {
        console.error("Error logging in:", error);
        next({ type: "userLoginFailed" });
    }
};

export default AuthController;
