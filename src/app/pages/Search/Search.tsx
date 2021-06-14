import React, { useState } from "react";
import SearchField from "../../components/SearchField/SearchField";
import styles from "./Search.module.css";

function Search(): JSX.Element {
  const [search, setSearch] = useState("");

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    alert(`Search`);
  }

  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit} className={styles.form}>
        <SearchField
          value={search}
          onChange={setSearch}
          placeholder="Search..."
        />
      </form>
    </div>
  );
}

export default Search;
