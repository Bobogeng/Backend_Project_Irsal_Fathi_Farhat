import sql from "./connection.js";

const QuizCategory = function (data) {
    this.name = data.name;
};

const tableName = "quiz_categories";

QuizCategory.create = (data, result) => {
    sql.query(`INSERT INTO ${tableName} SET ?`, data, (err, res) => {
        if (err) {
            return result({ type: "quizCategoryCreateFailed" });
        }
        result(null, { id: res.insertId, ...data });
    });
};

QuizCategory.findAll = (result) => {
    sql.query(`SELECT * FROM ${tableName}`, (err, res) => {
        if (err) {
            return result({ type: "quizCategoryGetAllFailed" });
        }
        result(null, res);
    });
};

QuizCategory.findById = (id, result) => {
    sql.query(`SELECT * FROM ${tableName} WHERE id = ${id}`, (err, res) => {
        if (err) {
            return result({ type: "quizCategoryGetFailed" });
        }
        if (!res.length) {
            return result({ type: "quizCategoryIdNotFound", value: id });
        }

        result(null, res[0]);
    });
};

QuizCategory.updateById = (id, data, result) => {
    sql.query(
        `UPDATE ${tableName} SET name = ?, updated_at = CURRENT_TIMESTAMP WHERE id = ?`,
        [data.name, id],
        (err, res) => {
            if (err) {
                return result({ type: "quizCategoryUpdateFailed" });
            }
            if (res.affectedRows == 0) {
                return result({ type: "quizCategoryIdNotFound", value: id });
            }

            result(null, { id: id, ...data });
        }
    );
};

QuizCategory.deleteById = (id, result) => {
    sql.query(`DELETE FROM ${tableName} WHERE id = ?`, id, (err, res) => {
        if (err) {
            return result({ type: "quizCategoryDeleteFailed" });
        }
        if (res.affectedRows == 0) {
            return result({ type: "quizCategoryIdNotFound", value: id });
        }

        result(null, res);
    });
};

export default QuizCategory;
