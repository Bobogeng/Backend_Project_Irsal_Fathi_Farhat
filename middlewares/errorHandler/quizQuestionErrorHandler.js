const errors = {
    quizQuestionIdNotFound: {
        message: (value) => `Quiz question with id ${value} not found.`,
        statusCode: 404,
    },
    quizIdNotFound: {
        message: (value) =>
            `Foreign key quizzes_id with id ${value} not found.`,
        statusCode: 404,
    },
    quizIdEmptyError: {
        message: "Foreign key quizzes_id can not be empty!",
        statusCode: 400,
    },
    quizQuestionCreateFailed: {
        message: "Some error occured, failed to create quiz question.",
        statusCode: 500,
    },
    quizQuestionUpdateFailed: {
        message: "Some error occured, failed to update quiz question.",
        statusCode: 500,
    },
    quizQuestionDeleteFailed: {
        message: "Some error occured, failed to delete quiz question.",
        statusCode: 500,
    },
    quizQuestionGetAllFailed: {
        message: "Some error occured, failed to get all quiz question.",
        statusCode: 500,
    },
    quizQuestionGetFailed: {
        message: "Some error occured, failed to get quiz question.",
        statusCode: 500,
    },
    default: {
        message: "Internal Server Error",
        statusCode: 500,
    },
};

const quizQuestionErrorHandler = (err, req, res, next) => {
    const { type, value } = err;
    const errorObj = errors[type] || errors.default;
    const statusCode = errorObj.statusCode;
    const message =
        typeof errorObj.message === "function"
            ? errorObj.message(value)
            : errorObj.message;
    res.status(statusCode).json({ success: false, message });
};

export default quizQuestionErrorHandler;
