import { useEffect, useState } from "react";

function useFetch(
  url: string
): {
  data: string | null;
} {
  const [data, setData] = useState<string | null>(null);

  useEffect(() => {
    fetch(url)
      .then((response) => response.text())
      .then(setData);
  }, []);

  return { data };
}

export default useFetch;
