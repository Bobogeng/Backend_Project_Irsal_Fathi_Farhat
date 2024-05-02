import sql from "./connection.js";

const UserAnswer = function (data) {
    this.user_attempts_id = data.user_attempts_id;
    this.quiz_answers_id = data.quiz_answers_id;
    this.quiz_questions_id = data.quiz_questions_id;
};

const tableName = "user_answers";

const checkUserAttemptExist = (attemptId) => {
    return new Promise((resolve, reject) => {
        sql.query(
            `SELECT * FROM user_attempts WHERE id = ?`,
            attemptId,
            (err, res) => {
                if (err) {
                    reject({ type: "userAnswerCreateFailed" });
                }
                if (res.length === 0) {
                    reject({
                        type: "userAttemptIdNotFound",
                        value: attemptId,
                    });
                }
                resolve(true);
            }
        );
    });
};

const checkQuizAnswerExist = (answerId) => {
    return new Promise((resolve, reject) => {
        sql.query(
            `SELECT * FROM quiz_answers WHERE id = ?`,
            answerId,
            (err, res) => {
                if (err) {
                    reject({ type: "userAnswerCreateFailed" });
                }
                if (res.length === 0) {
                    reject({
                        type: "quizAnswerIdNotFound",
                        value: answerId,
                    });
                }
                resolve(true);
            }
        );
    });
};

const checkQuizQuestionExist = (questionId) => {
    return new Promise((resolve, reject) => {
        sql.query(
            `SELECT * FROM quiz_questions WHERE id = ?`,
            questionId,
            (err, res) => {
                if (err) {
                    reject({ type: "userAnswerCreateFailed" });
                }
                if (res.length === 0) {
                    reject({
                        type: "quizQuestionIdNotFound",
                        value: questionId,
                    });
                }
                resolve(true);
            }
        );
    });
};

UserAnswer.create = async (data, result) => {
    try {
        await checkUserAttemptExist(data.user_attempts_id);
        await checkQuizAnswerExist(data.quiz_answers_id);
        await checkQuizQuestionExist(data.quiz_questions_id);

        sql.query(`INSERT INTO ${tableName} SET ?`, data, (err, res) => {
            if (err) {
                return result({ type: "userAnswerCreateFailed" });
            }
            result(null, { id: res.insertId, ...data });
        });
    } catch (error) {
        result(error);
    }
};

UserAnswer.findAll = (result) => {
    sql.query(`SELECT * FROM ${tableName}`, (err, res) => {
        if (err) {
            return result({ type: "userAnswerGetAllFailed" });
        }
        result(null, res);
    });
};

UserAnswer.findById = (id, result) => {
    sql.query(`SELECT * FROM ${tableName} WHERE id = ${id}`, (err, res) => {
        if (err) {
            return result({ type: "userAnswerGetFailed" });
        }
        if (!res.length) {
            return result({ type: "userAnswerIdNotFound", value: id });
        }

        result(null, res[0]);
    });
};

UserAnswer.updateById = async (id, data, result) => {
    try {
        await checkUserAttemptExist(data.user_attempts_id);
        await checkQuizAnswerExist(data.quiz_answers_id);
        await checkQuizQuestionExist(data.quiz_questions_id);

        sql.query(
            `UPDATE ${tableName} SET user_attempts_id = ?, quiz_answers_id = ?, quiz_questions_id = ?, updated_at = CURRENT_TIMESTAMP WHERE id = ?`,
            [
                data.user_attempts_id,
                data.quiz_answers_id,
                data.quiz_questions_id,
                id,
            ],
            (err, res) => {
                if (err) {
                    return result({ type: "userAnswerUpdateFailed" });
                }
                if (res.affectedRows == 0) {
                    return result({ type: "userAnswerIdNotFound", value: id });
                }

                result(null, { id: id, ...data });
            }
        );
    } catch (error) {
        result(error);
    }
};

UserAnswer.deleteById = (id, result) => {
    sql.query(`DELETE FROM ${tableName} WHERE id = ?`, id, (err, res) => {
        if (err) {
            return result({ type: "userAnswerDeleteFailed" });
        }
        if (res.affectedRows == 0) {
            return result({ type: "userAnswerIdNotFound", value: id });
        }

        result(null, res);
    });
};

export default UserAnswer;
