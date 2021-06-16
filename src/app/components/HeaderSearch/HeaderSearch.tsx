import React, { useState } from "react";
import FilterField from "../FilterField/FilterField";
import CatLogo from "../Icons/CatLogo";
import PlusIcon from "../Icons/PlusIcon";
import SearchField from "../SearchField/SearchField";
import BubbleHeader from "../Styling Elements/BubbleHeader";
import styles from "./HeaderSearch.module.css";

type HeaderSearchProps = {
  onSearch: (value: string) => void;
  onFilter: (value: string) => void;
};

function HeaderSearch({ onSearch, onFilter }: HeaderSearchProps): JSX.Element {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("");

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    onSearch(search);
    onFilter(filter);
  }

  return (
    <div className={styles.container}>
      <div className={styles.bubbleHeader}>
        <BubbleHeader />
      </div>
      <div className={styles.catLogo}>
        <CatLogo />
      </div>
      <form onSubmit={handleSubmit} className={styles.form}>
        <SearchField
          value={search}
          onChange={setSearch}
          placeholder="Search..."
        />
        <FilterField
          value={filter}
          onChange={setFilter}
          placeholder="Filter..."
        />
        <button className={styles.submitButton}>Submit</button>
      </form>
    </div>
  );
}

export default HeaderSearch;
