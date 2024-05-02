import UserAnswer from "../models/UserAnswer.js";

const UserAnswerController = {};

UserAnswerController.create = (req, res, next) => {
    const { user_attempts_id, quiz_answers_id, quiz_questions_id } = req.body;

    if (!user_attempts_id) {
        return next({ type: "userAttemptIdEmptyError" });
    }
    if (!quiz_answers_id) {
        return next({ type: "quizAnswerIdEmptyError" });
    }
    if (!quiz_questions_id) {
        return next({ type: "quizQuestionIdEmptyError" });
    }

    const newData = new UserAnswer({
        user_attempts_id: user_attempts_id,
        quiz_answers_id: quiz_answers_id,
        quiz_questions_id: quiz_questions_id,
    });

    UserAnswer.create(newData, (err, data) => {
        if (err) {
            next(err);
        } else {
            res.send(data);
        }
    });
};

UserAnswerController.getAll = (req, res, next) => {
    UserAnswer.findAll((err, data) => {
        if (err) {
            next(err);
        } else {
            res.send(data);
        }
    });
};

UserAnswerController.getOne = (req, res, next) => {
    UserAnswer.findById(req.params.id, (err, data) => {
        if (err) {
            next(err);
        } else {
            res.send(data);
        }
    });
};

UserAnswerController.update = (req, res, next) => {
    const { user_attempts_id, quiz_answers_id, quiz_questions_id } = req.body;

    if (!user_attempts_id) {
        return next({ type: "userAttemptIdEmptyError" });
    }
    if (!quiz_answers_id) {
        return next({ type: "quizAnswerIdEmptyError" });
    }
    if (!quiz_questions_id) {
        return next({ type: "quizQuestionIdEmptyError" });
    }

    UserAnswer.updateById(
        req.params.id,
        new UserAnswer(req.body),
        (err, data) => {
            if (err) {
                next(err);
            } else {
                res.send(data);
            }
        }
    );
};

UserAnswerController.delete = (req, res, next) => {
    UserAnswer.deleteById(req.params.id, (err, data) => {
        if (err) {
            next(err);
        } else {
            res.send({ message: `User answer was deleted successfully!` });
        }
    });
};

export default UserAnswerController;
