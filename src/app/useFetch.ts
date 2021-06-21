import { useEffect, useState } from "react";

function useFetch(
  url: string
): {
  data: string | null;
  isLoading: boolean;
  errorMessage: string | null;
} {
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [data, setData] = useState<string | null>(null);
  const isLoading = data === null;

  useEffect(() => {
    fetch(url)
      .then((response) => response.text())
      .then(setData)
      .catch((error) => setErrorMessage(error.toString()));
  }, []);

  return { data, isLoading, errorMessage };
}

export default useFetch;
