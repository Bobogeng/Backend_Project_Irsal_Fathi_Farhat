import UserAttempt from "../models/UserAttempt.js";

const UserAttemptController = {};

UserAttemptController.create = (req, res, next) => {
    const { score, users_id, quizzes_id } = req.body;

    if (!users_id) {
        return next({ type: "userIdEmptyError" });
    }
    if (!quizzes_id) {
        return next({ type: "quizIdEmptyError" });
    }

    const newData = new UserAttempt({
        score: score,
        users_id: users_id,
        quizzes_id: quizzes_id,
    });

    UserAttempt.create(newData, (err, data) => {
        if (err) {
            next(err);
        } else {
            res.send(data);
        }
    });
};

UserAttemptController.getAll = (req, res, next) => {
    UserAttempt.findAll((err, data) => {
        if (err) {
            next(err);
        } else {
            res.send(data);
        }
    });
};

UserAttemptController.getOne = (req, res, next) => {
    UserAttempt.findById(req.params.id, (err, data) => {
        if (err) {
            next(err);
        } else {
            res.send(data);
        }
    });
};

UserAttemptController.update = (req, res, next) => {
    const { users_id, quizzes_id } = req.body;

    if (!users_id) {
        return next({ type: "userIdEmptyError" });
    }
    if (!quizzes_id) {
        return next({ type: "quizIdEmptyError" });
    }

    UserAttempt.updateById(
        req.params.id,
        new UserAttempt(req.body),
        (err, data) => {
            if (err) {
                next(err);
            } else {
                res.send(data);
            }
        }
    );
};

UserAttemptController.delete = (req, res, next) => {
    UserAttempt.deleteById(req.params.id, (err, data) => {
        if (err) {
            next(err);
        } else {
            res.send({ message: `User attempt was deleted successfully!` });
        }
    });
};

export default UserAttemptController;
