import sql from "./connection.js";

const UserAttempt = function (data) {
    this.score = data.score;
    this.users_id = data.users_id;
    this.quizzes_id = data.quizzes_id;
};

const tableName = "user_attempts";

const checkUserExist = (userId, result) => {
    sql.query(`SELECT * FROM users WHERE id = ?`, userId, (err, res) => {
        if (err) {
            return result({ type: "userAttemptCreateFailed" });
        }
        if (res.length === 0) {
            return result({ type: "userIdNotFound", value: userId });
        }
    });
};

const checkQuizExist = (quizId, result) => {
    sql.query(`SELECT * FROM quizzes WHERE id = ?`, quizId, (err, res) => {
        if (err) {
            return result({ type: "userAttemptCreateFailed" });
        }
        if (res.length === 0) {
            return result({ type: "quizIdNotFound", value: quizId });
        }
    });
};

UserAttempt.create = (data, result) => {
    checkUserExist(data.users_id, result);
    checkQuizExist(data.quizzes_id, result);

    sql.query(`INSERT INTO ${tableName} SET ?`, data, (err, res) => {
        if (err) {
            return result({ type: "userAttemptCreateFailed" });
        }
        result(null, { id: res.insertId, ...data });
    });
};

UserAttempt.findAll = (result) => {
    sql.query(`SELECT * FROM ${tableName}`, (err, res) => {
        if (err) {
            return result({ type: "userAttemptGetAllFailed" });
        }
        result(null, res);
    });
};

UserAttempt.findById = (id, result) => {
    sql.query(`SELECT * FROM ${tableName} WHERE id = ${id}`, (err, res) => {
        if (err) {
            return result({ type: "userAttemptGetFailed" });
        }
        if (!res.length) {
            return result({ type: "userAttemptIdNotFound", value: id });
        }

        result(null, res[0]);
    });
};

UserAttempt.updateById = (id, data, result) => {
    checkUserExist(data.users_id, result);
    checkQuizExist(data.quizzes_id, result);

    sql.query(
        `UPDATE ${tableName} SET score = ?, users_id = ?, quizzes_id = ?, updated_at = CURRENT_TIMESTAMP WHERE id = ?`,
        [data.score, data.users_id, data.quizzes_id, id],
        (err, res) => {
            if (err) {
                return result({ type: "userAttemptUpdateFailed" });
            }
            if (res.affectedRows == 0) {
                return result({ type: "userAttemptIdNotFound", value: id });
            }

            result(null, { id: id, ...data });
        }
    );
};

UserAttempt.deleteById = (id, result) => {
    sql.query(`DELETE FROM ${tableName} WHERE id = ?`, id, (err, res) => {
        if (err) {
            return result({ type: "userAttemptDeleteFailed" });
        }
        if (res.affectedRows == 0) {
            return result({ type: "userAttemptIdNotFound", value: id });
        }

        result(null, res);
    });
};

export default UserAttempt;
