const env = process.env;

export const HOST = env.HOST ?? "localhost";
export const PORT = env.PORT ?? "8080";
export const SERVER_URL = `http://${HOST}:${PORT}`;
export const MONGODB_URI =
  env.MONGODB_URI ?? "mongodb://localhost:27017";

export const DATABASE_NAME = env.DATABASE_NAME ?? "local";

//mongodb:localhost:27017

export default { HOST, PORT, SERVER_URL };
