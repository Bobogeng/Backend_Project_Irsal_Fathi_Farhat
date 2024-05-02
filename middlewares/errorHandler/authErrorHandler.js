const errors = {
    usernameExists: {
        message: (value) => `Username ${value} already exists.`,
        statusCode: 400,
    },
    usernameNotFound: {
        message: (value) => `Username with username ${value} not found.`,
        statusCode: 404,
    },
    usernameEmptyError: {
        message: "Username can not be empty!",
        statusCode: 400,
    },
    passwordEmptyError: {
        message: "Password can not be empty!",
        statusCode: 400,
    },
    invalidPasswordError: {
        message: "Failed to login, your password is wrong.",
        statusCode: 400,
    },
    userGetFailed: {
        message: "Some error occured, failed to get user.",
        statusCode: 500,
    },
    userRegisterFailed: {
        message: "Some error occured, failed to register user.",
        statusCode: 500,
    },
    userLoginFailed: {
        message: "Some error occured, failed to login user.",
        statusCode: 500,
    },
    default: {
        message: "Internal Server Error",
        statusCode: 500,
    },
};

const authErrorHandler = (err, req, res, next) => {
    const { type, value } = err;
    const errorObj = errors[type] || errors.default;
    const statusCode = errorObj.statusCode;
    const message =
        typeof errorObj.message === "function"
            ? errorObj.message(value)
            : errorObj.message;
    res.status(statusCode).json({ success: false, message });
};

export default authErrorHandler;
