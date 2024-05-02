import QuizQuestion from "../models/QuizQuestion.js";

const QuizQuestionController = {};

QuizQuestionController.create = (req, res, next) => {
    const { question, quizzes_id } = req.body;

    if (!quizzes_id) {
        return next({ type: "quizIdEmptyError" });
    }

    const newData = new QuizQuestion({
        question: question,
        quizzes_id: quizzes_id,
    });

    QuizQuestion.create(newData, (err, data) => {
        if (err) {
            next(err);
        } else {
            res.send(data);
        }
    });
};

QuizQuestionController.getAll = (req, res, next) => {
    QuizQuestion.findAll((err, data) => {
        if (err) {
            next(err);
        } else {
            res.send(data);
        }
    });
};

QuizQuestionController.getOne = (req, res, next) => {
    QuizQuestion.findById(req.params.id, (err, data) => {
        if (err) {
            next(err);
        } else {
            res.send(data);
        }
    });
};

QuizQuestionController.update = (req, res, next) => {
    const { quizzes_id } = req.body;

    if (!quizzes_id) {
        return next({ type: "quizIdEmptyError" });
    }

    QuizQuestion.updateById(
        req.params.id,
        new QuizQuestion(req.body),
        (err, data) => {
            if (err) {
                next(err);
            } else {
                res.send(data);
            }
        }
    );
};

QuizQuestionController.delete = (req, res, next) => {
    QuizQuestion.deleteById(req.params.id, (err, data) => {
        if (err) {
            next(err);
        } else {
            res.send({ message: `Quiz question was deleted successfully!` });
        }
    });
};

export default QuizQuestionController;
