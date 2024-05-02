const errors = {
    userAnswerIdNotFound: {
        message: (value) => `User answer with id ${value} not found.`,
        statusCode: 404,
    },
    userAttemptIdNotFound: {
        message: (value) =>
            `Foreign key user_attempts_id with id ${value} not found.`,
        statusCode: 404,
    },
    quizAnswerIdNotFound: {
        message: (value) =>
            `Foreign key quiz_answers_id with id ${value} not found.`,
        statusCode: 404,
    },
    quizQuestionIdNotFound: {
        message: (value) =>
            `Foreign key quiz_questions_id with id ${value} not found.`,
        statusCode: 404,
    },
    userAttemptIdEmptyError: {
        message: "Foreign key user_attempts_id can not be empty!",
        statusCode: 422,
    },
    quizAnswerIdEmptyError: {
        message: "Foreign key quiz_answers_id can not be empty!",
        statusCode: 422,
    },
    quizQuestionIdEmptyError: {
        message: "Foreign key quiz_questions_id can not be empty!",
        statusCode: 422,
    },
    userAnswerCreateFailed: {
        message: "Some error occured, failed to create user answer.",
        statusCode: 500,
    },
    userAnswerUpdateFailed: {
        message: "Some error occured, failed to update user answer.",
        statusCode: 500,
    },
    userAnswerDeleteFailed: {
        message: "Some error occured, failed to delete user answer.",
        statusCode: 500,
    },
    userAnswerGetAllFailed: {
        message: "Some error occured, failed to get all user answer.",
        statusCode: 500,
    },
    userAnswerGetFailed: {
        message: "Some error occured, failed to get user answer.",
        statusCode: 500,
    },
    default: {
        message: "Internal Server Error",
        statusCode: 500,
    },
};

const userAnswerErrorHandler = (err, req, res, next) => {
    const { type, value } = err;
    const errorObj = errors[type] || errors.default;
    const statusCode = errorObj.statusCode;
    const message =
        typeof errorObj.message === "function"
            ? errorObj.message(value)
            : errorObj.message;
    res.status(statusCode).json({ success: false, message });
};

export default userAnswerErrorHandler;
