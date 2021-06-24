import type { TransformedResult } from "../types";
import { getSearchResultsCollection } from "./database";

export const saveSearchResult = async ({
  name,
  ownerImageUrl,
  rawUrl,
  repoName,
  searchValue,
}: TransformedResult): Promise<void> => {
  await getSearchResultsCollection().insertOne({
    name,
    ownerImageUrl,
    rawUrl,
    repoName,
    searchValue,
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
  ownerImageUrl,
  rawUrl,
  repoName,
  searchValue,
}: TransformedResult): Promise<void> => {
  await getSearchResultsCollection().deleteOne({
    name,
    ownerImageUrl,
    rawUrl,
    repoName,
    searchValue,
  });
};
