import type { TransformedResult } from "../types";
import { getSearchResultsCollection } from "./database";

export const saveSearchResult = async (
  SearchResult: TransformedResult
): Promise<void> => {
  await getSearchResultsCollection().insertOne(SearchResult);
};

export const readSavedSearchResults = async (): Promise<
  TransformedResult[]
> => {
  return await getSearchResultsCollection()
    .find()
    .sort({ service: 1 })
    .toArray();
};

export const deleteSavedSearchResults = async (
  SearchResult: TransformedResult
): Promise<void> => {
  await getSearchResultsCollection().deleteOne(SearchResult);
};
