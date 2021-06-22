import type { TransformedResult } from "../types";
import { getSearchResultsCollection } from "./database";

export const saveSearchResult = async (
  name: TransformedResult
): Promise<void> => {
  await getSearchResultsCollection().insertOne({
    ...name,
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

export const deleteSavedSearchResults = async (
  name: TransformedResult
): Promise<void> => {
  await getSearchResultsCollection().deleteOne({
    ...name,
  });
};
