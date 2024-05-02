import QuizAnswer from "../models/QuizAnswer.js";

const QuizAnswerController = {};

QuizAnswerController.create = (req, res, next) => {
    const { answer, correct, quizzes_id, quiz_questions_id } = req.body;

    if (!quizzes_id) {
        return next({ type: "quizIdEmptyError" });
    }
    if (!quiz_questions_id) {
        return next({ type: "quizQuestionIdEmptyError" });
    }

    const newData = new QuizAnswer({
        answer: answer,
        correct: correct,
        quizzes_id: quizzes_id,
        quiz_questions_id: quiz_questions_id,
    });

    QuizAnswer.create(newData, (err, data) => {
        if (err) {
            next(err);
        } else {
            res.send(data);
        }
    });
};

QuizAnswerController.getAll = (req, res, next) => {
    QuizAnswer.findAll((err, data) => {
        if (err) {
            next(err);
        } else {
            res.send(data);
        }
    });
};

QuizAnswerController.getOne = (req, res, next) => {
    QuizAnswer.findById(req.params.id, (err, data) => {
        if (err) {
            next(err);
        } else {
            res.send(data);
        }
    });
};

QuizAnswerController.update = (req, res, next) => {
    const { quizzes_id, quiz_questions_id } = req.body;

    if (!quizzes_id) {
        return next({ type: "quizIdEmptyError" });
    }
    if (!quiz_questions_id) {
        return next({ type: "quizQuestionIdEmptyError" });
    }

    QuizAnswer.updateById(
        req.params.id,
        new QuizAnswer(req.body),
        (err, data) => {
            if (err) {
                next(err);
            } else {
                res.send(data);
            }
        }
    );
};

QuizAnswerController.delete = (req, res, next) => {
    QuizAnswer.deleteById(req.params.id, (err, data) => {
        if (err) {
            next(err);
        } else {
            res.send({ message: `Quiz answer was deleted successfully!` });
        }
    });
};

export default QuizAnswerController;
