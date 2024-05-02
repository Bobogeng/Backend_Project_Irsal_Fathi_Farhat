const errors = {
    quizIdNotFound: {
        message: (value) => `Quiz with id ${value} not found.`,
        statusCode: 404,
    },
    userIdNotFound: {
        message: (value) => `Foreign key users_id with id ${value} not found.`,
        statusCode: 404,
    },
    quizCategoryIdNotFound: {
        message: (value) =>
            `Foreign key quiz_categories_id with id ${value} not found.`,
        statusCode: 404,
    },
    titleEmptyError: {
        message: "Title can not be empty!",
        statusCode: 422,
    },
    userIdEmptyError: {
        message: "Foreign key users_id can not be empty!",
        statusCode: 422,
    },
    quizCategoryIdEmptyError: {
        message: "Foreign key quiz_categories_id can not be empty!",
        statusCode: 422,
    },
    quizCreateFailed: {
        message: "Some error occured, failed to create quiz.",
        statusCode: 500,
    },
    quizUpdateFailed: {
        message: "Some error occured, failed to update quiz.",
        statusCode: 500,
    },
    quizDeleteFailed: {
        message: "Some error occured, failed to delete quiz.",
        statusCode: 500,
    },
    quizGetAllFailed: {
        message: "Some error occured, failed to get all quiz.",
        statusCode: 500,
    },
    quizGetFailed: {
        message: "Some error occured, failed to get quiz.",
        statusCode: 500,
    },
    missingToken: {
        message: "Missing access token.",
        statusCode: 401,
    },
    invalidToken: {
        message: "Invalid token.",
        statusCode: 500,
    },
    unauthorizedAccess: {
        message: "Unauthorized access.",
        statusCode: 403,
    },
    default: {
        message: "Internal Server Error",
        statusCode: 500,
    },
};

const quizErrorHandler = (err, req, res, next) => {
    const { type, value } = err;
    const errorObj = errors[type] || errors.default;
    const statusCode = errorObj.statusCode;
    const message =
        typeof errorObj.message === "function"
            ? errorObj.message(value)
            : errorObj.message;
    res.status(statusCode).json({ success: false, message });
};

export default quizErrorHandler;
