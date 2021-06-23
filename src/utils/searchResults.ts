import type { TransformedResult } from "../types";
import { getSearchResultsCollection } from "./database";

export const saveSearchResult = async ({
  name,
  rawUrl,
  repoName,
  ownerImageUrl,
}: TransformedResult): Promise<void> => {
  await getSearchResultsCollection().insertOne({
    name,
    rawUrl,
    repoName,
    ownerImageUrl,
  });
};

export const readSavedSearchResults = async (): Promise<
  TransformedResult[]
> => {
  return await getSearchResultsCollection()
    .find()
    .sort({ service: 1 })
    .toArray();
};

export const deleteSavedSearchResults = async ({
  name,
  rawUrl,
  repoName,
  ownerImageUrl,
}: TransformedResult): Promise<void> => {
  await getSearchResultsCollection().deleteOne({
    name,
    rawUrl,
    repoName,
    ownerImageUrl,
  });
};
