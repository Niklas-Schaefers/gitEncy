import React, { useState } from "react";
import FooterMenu from "../../../components/FooterMenu/FooterMenu";
import HeaderSearch from "../../../components/HeaderSearch/HeaderSearch";

import styles from "./Search.module.css";

function Search(): JSX.Element {
  const [searchValue, setSearchValue] = useState("");
  const [filterValue, setFilterValue] = useState("");

  return (
    <div className={styles.container}>
      <div className={styles.headerSearch}>
        <HeaderSearch onSearch={setSearchValue} onFilter={setFilterValue} />
      </div>
      <div className={styles.result}>
        {searchValue}
        {filterValue}
      </div>
      <div className={styles.footerMenu}>
        <FooterMenu />
      </div>
    </div>
  );
}

export default Search;
