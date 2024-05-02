import app from "./app.js";
import connection from "./models/connection.js";

const port = process.env.PORT || 3000;

const server = app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});

server.on("listening", () => {
    connection.getConnection((err) => {
        if (err) console.error("Error connecting to database:", err);
        console.log("Connected to database.");
    });
});
