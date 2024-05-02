import mysql from "mysql";
import dbConfig from "../configs/db.config.js";

const connection = mysql.createPool({
    host: dbConfig.DB_HOST,
    user: dbConfig.DB_USER,
    password: dbConfig.DB_PASSWORD,
    database: dbConfig.DB_DATABASE,
    port: dbConfig.DB_PORT,
});

export default connection;
