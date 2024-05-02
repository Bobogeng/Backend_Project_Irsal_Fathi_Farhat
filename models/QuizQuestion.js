import sql from "./connection.js";

const QuizQuestion = function (data) {
    this.question = data.question;
    this.quizzes_id = data.quizzes_id;
};

const tableName = "quiz_questions";

const checkQuizExist = (quizId, result) => {
    sql.query(`SELECT * FROM quizzes WHERE id = ?`, quizId, (err, res) => {
        if (err) {
            return result({ type: "quizQuestionCreateFailed" });
        }
        if (res.length === 0) {
            return result({ type: "quizIdNotFound", value: quizId });
        }
    });
};

QuizQuestion.create = (data, result) => {
    checkQuizExist(data.quizzes_id, result);

    sql.query(`INSERT INTO ${tableName} SET ?`, data, (err, res) => {
        if (err) {
            return result({ type: "quizQuestionCreateFailed" });
        }
        result(null, { id: res.insertId, ...data });
    });
};

QuizQuestion.findAll = (result) => {
    sql.query(`SELECT * FROM ${tableName}`, (err, res) => {
        if (err) {
            return result({ type: "quizQuestionGetAllFailed" });
        }
        result(null, res);
    });
};

QuizQuestion.findById = (id, result) => {
    sql.query(`SELECT * FROM ${tableName} WHERE id = ${id}`, (err, res) => {
        if (err) {
            return result({ type: "quizQuestionGetFailed" });
        }
        if (!res.length) {
            return result({ type: "quizQuestionIdNotFound", value: id });
        }

        result(null, res[0]);
    });
};

QuizQuestion.updateById = (id, data, result) => {
    checkQuizExist(data.quizzes_id, result);

    sql.query(
        `UPDATE ${tableName} SET question = ?, quizzes_id = ?, updated_at = CURRENT_TIMESTAMP WHERE id = ?`,
        [data.question, data.quizzes_id, id],
        (err, res) => {
            if (err) {
                return result({ type: "quizQuestionUpdateFailed" });
            }
            if (res.affectedRows == 0) {
                return result({ type: "quizQuestionIdNotFound", value: id });
            }

            result(null, { id: id, ...data });
        }
    );
};

QuizQuestion.deleteById = (id, result) => {
    sql.query(`DELETE FROM ${tableName} WHERE id = ?`, id, (err, res) => {
        if (err) {
            return result({ type: "quizQuestionDeleteFailed" });
        }
        if (res.affectedRows == 0) {
            return result({ type: "quizQuestionIdNotFound", value: id });
        }

        result(null, res);
    });
};

export default QuizQuestion;
