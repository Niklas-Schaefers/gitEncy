import React, { useEffect, useState } from "react";
import FooterMenu from "../../../components/FooterMenu/FooterMenu";
import HeaderSearch from "../../../components/HeaderSearch/HeaderSearch";
import styles from "./Search.module.css";

type SearchResult = {
  name: string;
};

function Search(): JSX.Element {
  const [searchValue, setSearchValue] = useState("");
  const [filterValue, setFilterValue] = useState("");
  const [searchResults, setSearchResults] = useState<SearchResult[]>([]);

  useEffect(() => {
    fetch(`/api/search?code=${searchValue}&user=${filterValue}`)
      .then((response) => response.json())
      .then((data) => setSearchResults(data.items));
  }, []);
  console.log(searchResults);

  // const searchResultsElements = searchResults.map((searchResults) => (
  //   <SearchResults {searchResults.name} />
  // ));

  return (
    <div className={styles.container}>
      <div className={styles.headerSearch}>
        <HeaderSearch onSearch={setSearchValue} onFilter={setFilterValue} />
      </div>
      <div className={styles.result}>
        {searchValue}
        {filterValue}
        {/* {searchResultsElements} */}
      </div>
      <div className={styles.footerMenu}>
        <FooterMenu />
      </div>
    </div>
  );
}

export default Search;
