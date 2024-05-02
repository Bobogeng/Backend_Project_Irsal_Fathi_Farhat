const errors = {
    userIdNotFound: {
        message: (value) => `User with id ${value} not found.`,
        statusCode: 404,
    },
    usernameEmptyError: {
        message: "Username can not be empty!",
        statusCode: 422,
    },
    passwordEmptyError: {
        message: "Password can not be empty!",
        statusCode: 422,
    },
    userCreateFailed: {
        message: "Some error occured, failed to create user.",
        statusCode: 500,
    },
    userUpdateFailed: {
        message: "Some error occured, failed to update user.",
        statusCode: 500,
    },
    userDeleteFailed: {
        message: "Some error occured, failed to delete user.",
        statusCode: 500,
    },
    userGetAllFailed: {
        message: "Some error occured, failed to get all user.",
        statusCode: 500,
    },
    userGetFailed: {
        message: "Some error occured, failed to get user.",
        statusCode: 500,
    },
    default: {
        message: "Internal Server Error",
        statusCode: 500,
    },
};

const userErrorHandler = (err, req, res, next) => {
    const { type, value } = err;
    const errorObj = errors[type] || errors.default;
    const statusCode = errorObj.statusCode;
    const message =
        typeof errorObj.message === "function"
            ? errorObj.message(value)
            : errorObj.message;
    res.status(statusCode).json({ success: false, message });
};

export default userErrorHandler;
