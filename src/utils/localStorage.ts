type StoreValues = {
  searchValue: string;
  filterValue: string;
};

export function parseJSONFromLocalStorage(key: string): any {
  const json = localStorage.getItem(key);
  if (json === null) {
    return null;
  }
  const data = JSON.parse(json);
  return data;
}

export function stringifyJSONToLocalStorage(
  key: string,
  value: StoreValues
): void {
  const json = JSON.stringify(value);
  localStorage.setItem(key, json);
}

export default { parseJSONFromLocalStorage, stringifyJSONToLocalStorage };
