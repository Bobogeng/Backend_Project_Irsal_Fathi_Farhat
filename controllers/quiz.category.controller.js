import QuizCategory from "../models/QuizCategory.js";

const QuizCategoryController = {};

QuizCategoryController.create = (req, res, next) => {
    const { name } = req.body;

    if (!name) {
        return next({ type: "nameEmptyError" });
    }

    const newData = new QuizCategory({
        name: name,
    });

    QuizCategory.create(newData, (err, data) => {
        if (err) {
            next(err);
        } else {
            res.send(data);
        }
    });
};

QuizCategoryController.getAll = (req, res, next) => {
    QuizCategory.findAll((err, data) => {
        if (err) {
            next(err);
        } else {
            res.send(data);
        }
    });
};

QuizCategoryController.getOne = (req, res, next) => {
    QuizCategory.findById(req.params.id, (err, data) => {
        if (err) {
            next(err);
        } else {
            res.send(data);
        }
    });
};

QuizCategoryController.update = (req, res, next) => {
    const { name } = req.body;

    if (!name) {
        return next({ type: "nameEmptyError" });
    }

    QuizCategory.updateById(
        req.params.id,
        new QuizCategory(req.body),
        (err, data) => {
            if (err) {
                next(err);
            } else {
                res.send(data);
            }
        }
    );
};

QuizCategoryController.delete = (req, res, next) => {
    QuizCategory.deleteById(req.params.id, (err, data) => {
        if (err) {
            next(err);
        } else {
            res.send({ message: `Quiz category was deleted successfully!` });
        }
    });
};

export default QuizCategoryController;
