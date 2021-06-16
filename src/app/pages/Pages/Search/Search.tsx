import React, { useEffect, useState } from "react";
import FooterMenu from "../../../components/FooterMenu/FooterMenu";
import HeaderSearch from "../../../components/HeaderSearch/HeaderSearch";

import styles from "./Search.module.css";

type SearchResult = {
  full_name: string;
};

function Search(): JSX.Element {
  const [searchValue, setSearchValue] = useState("");
  const [filterValue, setFilterValue] = useState("");
  const [searchResults, setSearchResults] = useState<SearchResult[]>([]);

  useEffect(() => {
    fetch(
      `http://localhost:3001/api/search?code=${searchValue}&user=${filterValue}`
    )
      .then((response) => response.json())
      .then((data) => setSearchResults(data));
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.headerSearch}>
        <HeaderSearch onSearch={setSearchValue} onFilter={setFilterValue} />
      </div>
      <div className={styles.result}>
        {searchValue}
        {filterValue}
        {searchResults}
      </div>
      <div className={styles.footerMenu}>
        <FooterMenu />
      </div>
    </div>
  );
}

export default Search;
