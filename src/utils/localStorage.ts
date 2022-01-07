export function parseJSONFromLocalStorage(
  key: string,
  defaultValue: string
): string {
  const json = localStorage.getItem(key);
  if (json === null) {
    return defaultValue;
  }
  const data = JSON.parse(json);
  return data;
}

export function stringifyJSONToLocalStorage(key: string, value: string): void {
  const json = JSON.stringify(value);
  localStorage.setItem(key, json);
}

export default { parseJSONFromLocalStorage, stringifyJSONToLocalStorage };
