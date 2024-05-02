const errors = {
    default: {
        message: "Internal Server Error",
        statusCode: 500,
    },
};

const errorHandler = (err, req, res, next) => {
    const { type } = err;
    const errorObj = errors[type] || errors.default;
    const statusCode = errorObj.statusCode;
    const message = errorObj.message;
    res.status(statusCode).json({ success: false, message });
};

export default errorHandler;
