import Quiz from "../models/Quiz.js";

const QuizController = {};

QuizController.create = (req, res, next) => {
    const { title, description, users_id, quiz_categories_id } = req.body;

    if (!title) {
        return next({ type: "titleEmptyError" });
    }
    if (!users_id) {
        return next({ type: "userIdEmptyError" });
    }
    if (!quiz_categories_id) {
        return next({ type: "quizCategoryIdEmptyError" });
    }

    const newData = new Quiz({
        title: title,
        description: description,
        users_id: users_id,
        quiz_categories_id: quiz_categories_id,
    });

    Quiz.create(newData, (err, data) => {
        if (err) {
            next(err);
        } else {
            res.send(data);
        }
    });
};

QuizController.getAll = (req, res, next) => {
    Quiz.findAll((err, data) => {
        if (err) {
            next(err);
        } else {
            res.send(data);
        }
    });
};

QuizController.getOne = (req, res, next) => {
    Quiz.findById(req.params.id, (err, data) => {
        if (err) {
            next(err);
        } else {
            res.send(data);
        }
    });
};

QuizController.update = (req, res, next) => {
    const { title, users_id, quiz_categories_id } = req.body;

    if (!title) {
        return next({ type: "titleEmptyError" });
    }
    if (!users_id) {
        return next({ type: "userIdEmptyError" });
    }
    if (!quiz_categories_id) {
        return next({ type: "quizCategoryIdEmptyError" });
    }

    Quiz.updateById(req.params.id, new Quiz(req.body), (err, data) => {
        if (err) {
            next(err);
        } else {
            res.send(data);
        }
    });
};

QuizController.delete = (req, res, next) => {
    Quiz.deleteById(req.params.id, (err, data) => {
        if (err) {
            next(err);
        } else {
            res.send({ message: `Quiz was deleted successfully!` });
        }
    });
};

export default QuizController;
