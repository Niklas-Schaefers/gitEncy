import React, { useState } from "react";
import { parseJSONFromLocalStorage } from "../../../utils/localStorage";
import CatLogo from "../Icons/CatLogo";
import SearchCodeIcon from "../Icons/SearchCodeIcon";
import SearchField from "../SearchField/SearchField";
import styles from "./HeaderSearch.module.css";

type HeaderSearchProps = {
  onSubmit: (searchValue: string, filterValue: string) => void;
};

function HeaderSearch({ onSubmit }: HeaderSearchProps): JSX.Element {
  const searchFilterValueStore = parseJSONFromLocalStorage(
    "searchFilterValueStore"
  );
  const [search, setSearch] = useState(searchFilterValueStore?.searchValue);
  const [user, setUser] = useState(searchFilterValueStore?.filterValue);

  return (
    <div className={styles.container}>
      <CatLogo className={styles.catLogo} />
      <form
        onSubmit={(e) => {
          e.preventDefault();
          onSubmit(search, user);
        }}
        className={styles.form}
      >
        <SearchField
          value={search}
          onChange={setSearch}
          placeholder="Search for code..."
        />
        <SearchField
          value={user}
          onChange={setUser}
          placeholder="Please enter GitHub user..."
        />
        <button className={styles.submitButton}>
          <SearchCodeIcon />
          Submit
        </button>
      </form>
    </div>
  );
}

export default HeaderSearch;
