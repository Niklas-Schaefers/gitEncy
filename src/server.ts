import dotenv from "dotenv";
dotenv.config();

import path from "path";
import express from "express";
import routerApi from "./server/routesApi";
import routerOauth from "./server/routesOauth";
import { connectDatabase } from "./utils/database";

const app = express();

app.use(express.json());

app.use("/oauth", routerOauth);

app.use("/api", routerApi);

// Serve storybook production bundle
app.use("/storybook", express.static("dist/storybook"));

// Serve app production bundle
app.use(express.static("dist/app"));

// Handle client routing, return all requests to the app
app.get("*", (_req, res) => {
  res.sendFile(path.join(__dirname, "app/index.html"));
});

if (process.env.MONGODB_URL === undefined) {
  throw new Error("Missing env MONGODB_URL");
}

connectDatabase(process.env.MONGODB_URL).then(() => {
  console.log("Database connected");

  const { PORT = 6000 } = process.env;
  app.listen(PORT, () => {
    console.log(`Server listening at http://localhost:${PORT}}`);
  });
});
