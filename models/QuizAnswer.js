import sql from "./connection.js";

const QuizAnswer = function (data) {
    this.answer = data.answer;
    this.correct = data.correct;
    this.quizzes_id = data.quizzes_id;
    this.quiz_questions_id = data.quiz_questions_id;
};

const tableName = "quiz_answers";

const checkQuizExist = (quizId, result) => {
    sql.query(`SELECT * FROM quizzes WHERE id = ?`, quizId, (err, res) => {
        if (err) {
            return result({ type: "quizAnswerCreateFailed" });
        }
        if (res.length === 0) {
            return result({ type: "quizIdNotFound", value: quizId });
        }
    });
};

const checkQuizQuestionExist = (questionId, result) => {
    sql.query(
        `SELECT * FROM quiz_questions WHERE id = ?`,
        questionId,
        (err, res) => {
            if (err) {
                return result({ type: "quizAnswerCreateFailed" });
            }
            if (res.length === 0) {
                return result({
                    type: "quizQuestionIdNotFound",
                    value: questionId,
                });
            }
        }
    );
};

QuizAnswer.create = (data, result) => {
    checkQuizExist(data.quizzes_id, result);
    checkQuizQuestionExist(data.quiz_questions_id, result);

    sql.query(`INSERT INTO ${tableName} SET ?`, data, (err, res) => {
        if (err) {
            return result({ type: "quizAnswerCreateFailed" });
        }
        result(null, { id: res.insertId, ...data });
    });
};

QuizAnswer.findAll = (result) => {
    sql.query(`SELECT * FROM ${tableName}`, (err, res) => {
        if (err) {
            return result({ type: "quizAnswerGetAllFailed" });
        }
        result(null, res);
    });
};

QuizAnswer.findById = (id, result) => {
    sql.query(`SELECT * FROM ${tableName} WHERE id = ${id}`, (err, res) => {
        if (err) {
            return result({ type: "quizAnswerGetFailed" });
        }
        if (!res.length) {
            return result({ type: "quizAnswerIdNotFound", value: id });
        }

        result(null, res[0]);
    });
};

QuizAnswer.updateById = (id, data, result) => {
    checkQuizExist(data.quizzes_id, result);
    checkQuizQuestionExist(data.quiz_questions_id, result);

    sql.query(
        `UPDATE ${tableName} SET answer = ?, correct = ?, quizzes_id = ?, quiz_questions_id = ?, updated_at = CURRENT_TIMESTAMP WHERE id = ?`,
        [
            data.answer,
            data.correct,
            data.quizzes_id,
            data.quiz_questions_id,
            id,
        ],
        (err, res) => {
            if (err) {
                return result({ type: "quizAnswerUpdateFailed" });
            }
            if (res.affectedRows == 0) {
                return result({ type: "quizAnswerIdNotFound", value: id });
            }

            result(null, { id: id, ...data });
        }
    );
};

QuizAnswer.deleteById = (id, result) => {
    sql.query(`DELETE FROM ${tableName} WHERE id = ?`, id, (err, res) => {
        if (err) {
            return result({ type: "quizAnswerDeleteFailed" });
        }
        if (res.affectedRows == 0) {
            return result({ type: "quizAnswerIdNotFound", value: id });
        }

        result(null, res);
    });
};

export default QuizAnswer;
