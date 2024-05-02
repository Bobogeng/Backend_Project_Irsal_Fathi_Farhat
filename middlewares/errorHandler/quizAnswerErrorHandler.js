const errors = {
    quizAnswerIdNotFound: {
        message: (value) => `Quiz answer with id ${value} not found.`,
        statusCode: 404,
    },
    quizIdNotFound: {
        message: (value) =>
            `Foreign key quizzes_id with id ${value} not found.`,
        statusCode: 404,
    },
    quizQuestionIdNotFound: {
        message: (value) =>
            `Foreign key quiz_questions_id with id ${value} not found.`,
        statusCode: 404,
    },
    quizIdEmptyError: {
        message: "Foreign key quizzes_id can not be empty!",
        statusCode: 400,
    },
    quizQuestionIdEmptyError: {
        message: "Foreign key quiz_questions_id can not be empty!",
        statusCode: 400,
    },
    quizAnswerCreateFailed: {
        message: "Some error occured, failed to create quiz answer.",
        statusCode: 500,
    },
    quizAnswerUpdateFailed: {
        message: "Some error occured, failed to update quiz answer.",
        statusCode: 500,
    },
    quizAnswerDeleteFailed: {
        message: "Some error occured, failed to delete quiz answer.",
        statusCode: 500,
    },
    quizAnswerGetAllFailed: {
        message: "Some error occured, failed to get all quiz answer.",
        statusCode: 500,
    },
    quizAnswerGetFailed: {
        message: "Some error occured, failed to get quiz answer.",
        statusCode: 500,
    },
    default: {
        message: "Internal Server Error",
        statusCode: 500,
    },
};

const quizAnswerErrorHandler = (err, req, res, next) => {
    const { type, value } = err;
    const errorObj = errors[type] || errors.default;
    const statusCode = errorObj.statusCode;
    const message =
        typeof errorObj.message === "function"
            ? errorObj.message(value)
            : errorObj.message;
    res.status(statusCode).json({ success: false, message });
};

export default quizAnswerErrorHandler;
