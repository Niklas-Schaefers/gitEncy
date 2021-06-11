import dotenv from "dotenv";
dotenv.config();
import path from "path";
import express from "express";
import router from "./server/routes";

const { PORT = 6000 } = process.env;

const app = express();

app.use(express.json());

app.use("/api", router);

// Serve storybook production bundle
app.use("/storybook", express.static("dist/storybook"));

// Serve app production bundle
app.use(express.static("dist/app"));

// Handle client routing, return all requests to the app
app.get("*", (_req, res) => {
  res.sendFile(path.join(__dirname, "app/index.html"));
});

app.listen(PORT, () => {
  console.log(`app listening at http://localhost:${PORT}`);
});
