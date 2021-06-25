import express from "express";
import {
  deleteSavedSearchResults,
  readSavedSearchResults,
  saveSearchResult,
} from "../utils/searchResults";
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

router.post("/searchresult", async (_req, res) => {
  await saveSearchResult(_req.body);
  res.send("Searchresult saved in db");
});

router.get("/savedresults", async (_req, res) => {
  const searchResults = await readSavedSearchResults();
  res.json(searchResults);
});

router.delete("/searchresult", async (_req, res) => {
  await deleteSavedSearchResults(_req.body);
  res.send("Searchresult deleted from db");
});

export default router;
