import { TransformedResult } from "../../types";

export async function postSearchResult({
  name,
  ownerImageUrl,
  rawUrl,
  repoName,
  searchValue,
}: TransformedResult): Promise<TransformedResult> {
  const response = await fetch("/api/searchresult", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name,
      ownerImageUrl,
      rawUrl,
      repoName,
      searchValue,
    }),
  });
  if (!response.ok) {
    const errorMessage = await response.text();
    throw errorMessage;
  }
  const result: TransformedResult = await response.json();
  return result;
}

export async function deleteSearchResult({
  name,
  ownerImageUrl,
  rawUrl,
  repoName,
  searchValue,
}: TransformedResult): Promise<TransformedResult> {
  const response = await fetch("/api/searchresult", {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name,
      ownerImageUrl,
      rawUrl,
      repoName,
      searchValue,
    }),
  });
  if (!response.ok) {
    const errorMessage = await response.text();
    throw errorMessage;
  }
  const result: TransformedResult = await response.json();
  return result;
}

export async function getSavedResultsFromMongoDB(): Promise<
  TransformedResult[]
> {
  const response = await fetch("/api/savedresults", {
    method: "GET",
    headers: {
      Accept: "application/json",
    },
  });
  if (!response.ok) {
    const errorMessage = await response.text();
    throw errorMessage;
  }
  const result: TransformedResult[] = await response.json();
  return result;
}
