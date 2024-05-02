import User from "../models/User.js";

const UserController = {};

UserController.getAll = (req, res, next) => {
    User.findAll((err, data) => {
        if (err) {
            next(err);
        } else {
            res.send(data);
        }
    });
};

UserController.getOne = (req, res, next) => {
    User.findById(req.params.id, (err, data) => {
        if (err) {
            next(err);
        } else {
            res.send(data);
        }
    });
};

UserController.update = (req, res, next) => {
    const { username, password } = req.body;

    if (!username) {
        return next({ type: "usernameEmptyError" });
    }
    if (!password) {
        return next({ type: "passwordEmptyError" });
    }

    User.updateById(req.params.id, new User(req.body), (err, data) => {
        if (err) {
            next(err);
        } else {
            res.send(data);
        }
    });
};

UserController.delete = (req, res, next) => {
    User.deleteById(req.params.id, (err, data) => {
        if (err) {
            next(err);
        } else {
            res.send({ message: `User was deleted successfully!` });
        }
    });
};

export default UserController;
