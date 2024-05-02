const errors = {
    quizCategoryIdNotFound: {
        message: (value) => `Quiz category with id ${value} not found.`,
        statusCode: 404,
    },
    nameEmptyError: {
        message: "Name can not be empty!",
        statusCode: 422,
    },
    quizCategoryCreateFailed: {
        message: "Some error occured, failed to create quiz category.",
        statusCode: 500,
    },
    quizCategoryUpdateFailed: {
        message: "Some error occured, failed to update quiz category.",
        statusCode: 500,
    },
    quizCategoryDeleteFailed: {
        message: "Some error occured, failed to delete quiz category.",
        statusCode: 500,
    },
    quizCategoryGetAllFailed: {
        message: "Some error occured, failed to get all quiz category.",
        statusCode: 500,
    },
    quizCategoryGetFailed: {
        message: "Some error occured, failed to get quiz category.",
        statusCode: 500,
    },
    default: {
        message: "Internal Server Error",
        statusCode: 500,
    },
};

const quizCategoryErrorHandler = (err, req, res, next) => {
    const { type, value } = err;
    const errorObj = errors[type] || errors.default;
    const statusCode = errorObj.statusCode;
    const message =
        typeof errorObj.message === "function"
            ? errorObj.message(value)
            : errorObj.message;
    res.status(statusCode).json({ success: false, message });
};

export default quizCategoryErrorHandler;
