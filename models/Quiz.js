import { query } from "express";
import sql from "./connection.js";

const Quiz = function (data) {
    this.title = data.title;
    this.description = data.description;
    this.users_id = data.users_id;
    this.quiz_categories_id = data.quiz_categories_id;
};

const tableName = "quizzes";

const checkUserExist = (userId, result) => {
    sql.query(`SELECT * FROM users WHERE id = ?`, userId, (err, res) => {
        if (err) {
            return result({ type: "quizCreateFailed" });
        }
        if (res.length === 0) {
            return result({ type: "userIdNotFound", value: userId });
        }
    });
};

const checkQuizCategoryExist = (categoryId, result) => {
    sql.query(
        `SELECT * FROM quiz_categories WHERE id = ?`,
        categoryId,
        (err, res) => {
            if (err) {
                return result({ type: "quizCreateFailed" });
            }
            if (res.length === 0) {
                return result({
                    type: "quizCategoryIdNotFound",
                    value: categoryId,
                });
            }
        }
    );
};

Quiz.create = (data, result) => {
    checkUserExist(data.users_id, result);
    checkQuizCategoryExist(data.quiz_categories_id, result);

    sql.query(`INSERT INTO ${tableName} SET ?`, data, (err, res) => {
        if (err) {
            return result({ type: "quizCreateFailed" });
        }
        result(null, { id: res.insertId, ...data });
    });
};

Quiz.findAll = (result) => {
    sql.query(`SELECT * FROM ${tableName}`, (err, res) => {
        if (err) {
            return result({ type: "quizGetAllFailed" });
        }
        result(null, res);
    });
};

Quiz.findById = (id, result) => {
    sql.query(`SELECT * FROM ${tableName} WHERE id = ${id}`, (err, res) => {
        if (err) {
            return result({ type: "quizGetFailed" });
        }
        if (!res.length) {
            return result({ type: "quizIdNotFound", value: id });
        }

        result(null, res[0]);
    });
};

Quiz.updateById = (id, data, result) => {
    checkUserExist(data.users_id, result);
    checkQuizCategoryExist(data.quiz_categories_id, result);

    sql.query(
        `UPDATE ${tableName} SET title = ?, description = ?, users_id = ?, quiz_categories_id = ?, updated_at = CURRENT_TIMESTAMP WHERE id = ?`,
        [
            data.title,
            data.description,
            data.users_id,
            data.quiz_categories_id,
            id,
        ],
        (err, res) => {
            if (err) {
                return result({ type: "quizUpdateFailed" });
            }
            if (res.affectedRows == 0) {
                return result({
                    type: "quizIdNotFound",
                    value: id,
                });
            }

            result(null, { id: id, ...data });
        }
    );
};

Quiz.deleteById = (id, result) => {
    sql.query(`DELETE FROM ${tableName} WHERE id = ?`, id, (err, res) => {
        if (err) {
            return result({ type: "quizDeleteFailed" });
        }
        if (res.affectedRows == 0) {
            return result({ type: "quizIdNotFound", value: id });
        }

        result(null, res);
    });
};

export default Quiz;
