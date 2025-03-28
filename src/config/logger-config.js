import { createLogger, format, transports } from "winston";
const { combine, timestamp, printf } = format;

// custom format
const customFormat = printf(({ level, message, timestamp }) => {
  return `${timestamp} : ${level}: ${message}`;
});

const logger = createLogger({
  format: combine(timestamp({ format: "YYYY-MM-DD HH:mm:ss" }), customFormat),
  transports: [
    new transports.Console(),
    new transports.File({ filename: "combined.log" }),
  ],
});

export default logger;

// this is the standard format
