import express from "express";
import { SERVER_URL, PORT,HOST } from "./config";

const server = express();

//serves static files
server.use(express.static("dist"));

server.set("view engine", "ejs");

server.use("/", (req, resp) => {
  resp.render("index", {
    initialContent: "Loading....",
  });
});

server.listen(PORT, HOST, () => {
  console.info(
    `Express server is listening at ${SERVER_URL} `,
  );
});
