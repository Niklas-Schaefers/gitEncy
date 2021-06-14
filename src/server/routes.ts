import express from "express";
import { fetchGitHubSearchCodeWithUser } from "./gitHubSearch";

const router = express.Router();

router.get("/search", async (req, res, next) => {
  try {
    const { query } = req;
    if (!query.code) {
      res.status(400).send("Code required");
      return;
    }
    if (!query.user) {
      res.status(400).send("User required");
      return;
    }
    if (typeof query.code !== "string" || typeof query.user !== "string") {
      res.status(400).send("Query is malformed");
      return;
    }
    const result = await fetchGitHubSearchCodeWithUser(query.code, query.user);
    res.status(200).json(result);
  } catch (error) {
    next(error);
  }
});
export default router;
