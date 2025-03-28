import express from "express";
import { serverConfig } from "./config/index.js";

import apiRoutes from "./routes/index.js";

const app = express();

const { ServerConfig, Logger } = serverConfig;

app.use("/api", apiRoutes);

// starts and listens the server at PORT 3000
app.listen(ServerConfig.PORT, () => {
  console.log(`Successfully started the server on PORT : ${ServerConfig.PORT}`);
  Logger.info("Successfully started the server", {});
});
