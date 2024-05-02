import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const logFilePath = path.resolve(__dirname, "../log.json");

const trimLogs = (logs, maxLogs) => {
    const excess = logs.length - maxLogs;
    if (excess > 0) {
        logs.splice(0, excess);
    }
    return logs;
};

if (!fs.existsSync(logFilePath)) {
    fs.writeFileSync(logFilePath, "[]", "utf8", (err) => {
        if (err) {
            console.error("Error creating log file:", err);
        }
    });
}

const logger = (req, res, next) => {
    const log = {
        timestamp: new Date().toISOString(),
        method: req.method,
        url: req.url,
    };

    if (process.env.NODE_ENV === "dev") {
        console.log(log);
    }

    fs.readFile(logFilePath, "utf8", (err, data) => {
        if (err) {
            console.error("Error reading log file:", err);
            return;
        }

        let logs = [];
        try {
            logs = JSON.parse(data);
        } catch (parseError) {
            console.error("Error parsing log file:", parseError);
        }

        logs.push(log);
        logs = trimLogs(logs, 100);

        fs.writeFile(logFilePath, JSON.stringify(logs, null, 2), (err) => {
            if (err) {
                console.error("Error writing to log file:", err);
            }
        });
    });

    next();
};

export default logger;
