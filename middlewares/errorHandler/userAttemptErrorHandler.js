const errors = {
    userAttemptIdNotFound: {
        message: (value) => `User attempt with id ${value} not found.`,
        statusCode: 404,
    },
    userIdNotFound: {
        message: (value) => `Foreign key users_id with id ${value} not found.`,
        statusCode: 404,
    },
    quizIdNotFound: {
        message: (value) =>
            `Foreign key quizzes_id with id ${value} not found.`,
        statusCode: 404,
    },
    userIdEmptyError: {
        message: "Foreign key users_id can not be empty!",
        statusCode: 400,
    },
    quizIdEmptyError: {
        message: "Foreign key quizzes_id can not be empty!",
        statusCode: 400,
    },
    userAttemptCreateFailed: {
        message: "Some error occured, failed to create user attempt.",
        statusCode: 500,
    },
    userAttemptUpdateFailed: {
        message: "Some error occured, failed to update user attempt.",
        statusCode: 500,
    },
    userAttemptDeleteFailed: {
        message: "Some error occured, failed to delete user attempt.",
        statusCode: 500,
    },
    userAttemptGetAllFailed: {
        message: "Some error occured, failed to get all user attempt.",
        statusCode: 500,
    },
    userAttemptGetFailed: {
        message: "Some error occured, failed to get user attempt.",
        statusCode: 500,
    },
    default: {
        message: "Internal Server Error",
        statusCode: 500,
    },
};

const userAttemptErrorHandler = (err, req, res, next) => {
    const { type, value } = err;
    const errorObj = errors[type] || errors.default;
    const statusCode = errorObj.statusCode;
    const message =
        typeof errorObj.message === "function"
            ? errorObj.message(value)
            : errorObj.message;
    res.status(statusCode).json({ success: false, message });
};

export default userAttemptErrorHandler;
