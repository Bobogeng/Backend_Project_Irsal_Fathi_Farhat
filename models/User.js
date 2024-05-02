import sql from "./connection.js";

const User = function (data) {
    this.name = data.name;
    this.username = data.username;
    this.password = data.password;
};

const tableName = "users";

User.create = (data, result) => {
    sql.query(`INSERT INTO ${tableName} SET ?`, data, (err, res) => {
        if (err) {
            return result({
                type: "entityNotRetrieve",
                entity: "user",
            });
        }
        result(null, { id: res.insertId, ...data });
    });
};

User.findAll = (result) => {
    sql.query(`SELECT * FROM ${tableName}`, (err, res) => {
        if (err) {
            return result({
                type: "entityNotRetrieve",
                entity: "users",
            });
        }
        result(null, res);
    });
};

User.checkUserByUsername = (username, result) => {
    sql.query(
        `SELECT * FROM ${tableName} WHERE username = ?`,
        [username],
        (err, res) => {
            if (err) {
                return result({ type: "userRegisterFailed" });
            }
            if (res.length) {
                return result(null);
            }

            result({ type: "usernameNotFound", value: username });
        }
    );
};

User.findByUsername = (username, result) => {
    sql.query(
        `SELECT * FROM ${tableName} WHERE username = ?`,
        [username],
        (err, res) => {
            if (err) {
                return result({ type: "userGetFailed" });
            }
            if (!res.length) {
                return result({ type: "usernameNotFound" });
            }

            result(null, res[0]);
        }
    );
};

User.findById = (id, result) => {
    sql.query(`SELECT * FROM ${tableName} WHERE id = ${id}`, (err, res) => {
        if (err) {
            return result({
                type: "entityNotRetrieve",
                entity: "user",
            });
        }
        if (!res.length) {
            return result({
                type: "entityNotFound",
                entity: "user",
                id: id,
            });
        }

        result(null, res[0]);
    });
};

User.updateById = (id, data, result) => {
    sql.query(
        `UPDATE ${tableName} SET name = ?, username = ?, updated_at = CURRENT_TIMESTAMP WHERE id = ?`,
        [data.name, data.username, id],
        (err, res) => {
            if (err) {
                return result({
                    type: "entityNotRetrieve",
                    entity: "user",
                });
            }
            if (res.affectedRows == 0) {
                return result({
                    type: "entityNotFound",
                    entity: "user",
                    id: id,
                });
            }

            result(null, { id: id, ...data });
        }
    );
};

User.deleteById = (id, result) => {
    sql.query(`DELETE FROM ${tableName} WHERE id = ?`, id, (err, res) => {
        if (err) {
            return result({
                type: "entityNotRetrieve",
                entity: "user",
            });
        }
        if (res.affectedRows == 0) {
            return result({
                type: "entityNotFound",
                entity: "user",
                id: id,
            });
        }

        result(null, res);
    });
};

export default User;
